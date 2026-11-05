// scripts/admin-server.js
// DAEWOO 产品与分类管理控制台 (SOP 自动化服务)
// 原生 Node.js 实现，零外部依赖，严格遵循 PRODUCT_UPDATE_WORKFLOW.md

const http = require('http');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const PORT = process.env.PORT || 3000;
const ROOT_DIR = path.resolve(__dirname, '..');
const PRODUCTS_JSON_PATH = path.join(ROOT_DIR, 'data/products.json');
const APP_JS_PATH = path.join(ROOT_DIR, 'js/app.js');
const PRODUCT_CENTER_HTML_PATH = path.join(ROOT_DIR, 'product-center.html');
const DEPLOY_SCRIPT_PATH = path.join(ROOT_DIR, 'deploy-oss.sh');

const ALL_PAGES = [
  'index.html',
  'product-center.html',
  'product.html',
  'video-center.html',
  'news.html',
  'about.html',
  'contact.html'
];

const DEFAULT_CATEGORIES = [
  { key: 'humidifier', zh: '加湿器', ko: '가습기', en: 'Humidifier', descZh: '纯净无雾加湿与空气改善，告别干燥，保持健康温润生活。', descKo: '자연 증발 가습과 실내 공기 케어로 건조함을 개선합니다.', descEn: 'Pure evaporative humidification and clean air comfort for modern homes.' },
  { key: 'vacuum', zh: '吸尘器', ko: '청소기', en: 'Vacuum Cleaner', descZh: '强劲吸力与轻量化设计，清洁每个生活角落。', descKo: '강력한 흡입력과 가벼운 디자인으로 공간 구석구석을 깨끗하게.', descEn: 'Powerful suction and ergonomic design to effortlessly clean every corner.' },
  { key: 'iron', zh: '挂烫机', ko: '스팀다리미', en: 'Garment Steamer', descZh: '强劲蒸汽抚平褶皱，快速除菌护理日常衣物。', descKo: '강력한 스팀으로 주름을 펴고 섬유를 깔끔하게 케어합니다.', descEn: 'High-temperature steam to remove wrinkles and refresh fabrics with ease.' },
  { key: 'cooker', zh: '电蒸锅·电煮锅', ko: '멀티쿠커·전기찜기', en: 'Multi-Cooker & Steamer', descZh: '多功能健康烹饪，多档调温锁住原汁原味。', descKo: '다양한 요리를 스마트하고 건강하게 조리하는 멀티쿠커.', descEn: 'Multi-functional smart cooking solutions for healthy and delicious meals.' },
  { key: 'kettle', zh: '电热水壶', ko: '전기포트', en: 'Electric Kettle', descZh: '精准温控与快速沸水，尽享安心饮水体验。', descKo: '정밀한 온도 조절과 빠른 가열로 안심하고 즐기는 온수 케어.', descEn: 'Rapid boiling and precision temperature control for safe, daily hydration.' },
  { key: 'juicer', zh: '破壁料理·果蔬', ko: '믹서기·원액기', en: 'Blender & Juicer', descZh: '细腻破壁萃取鲜活营养，口感丝滑健康相伴。', descKo: '부드러운 블렌딩으로 영양소를 지키는 웰빙 푸드 메이커.', descEn: 'Ultra-fine blending and nutrient extraction for fresh, wholesome beverages.' }
];

// 生成版本号 YYYYMMDDHHmmss
function generateVersion() {
  const d = new Date();
  const pad = n => String(n).padStart(2, '0');
  return `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}${pad(d.getHours())}${pad(d.getMinutes())}${pad(d.getSeconds())}`;
}

// 读取当前全站版本号
function getCurrentVersion() {
  try {
    const idxHtml = fs.readFileSync(path.join(ROOT_DIR, 'index.html'), 'utf-8');
    const m = idxHtml.match(/\?v=([a-zA-Z0-9_-]+)/);
    return m ? m[1] : generateVersion();
  } catch (e) {
    return generateVersion();
  }
}

// 全站 7 个主要 HTML 页面全自动递增版本号 (击穿缓存)
function bumpAllPagesVersion() {
  const newV = generateVersion();
  ALL_PAGES.forEach(page => {
    const filePath = path.join(ROOT_DIR, page);
    if (!fs.existsSync(filePath)) return;
    let html = fs.readFileSync(filePath, 'utf-8');
    // 替换所有已有的 ?v=xxx
    html = html.replace(/(href|src)=["']([^"']*?\?v=)[^"']*["']/g, `$1="$2${newV}"`);
    // 确保 style.css, app.js, product-detail.js 都带有版本号
    html = html.replace(/(href=["']css\/style\.css)(?!(\?v=))["']/g, `$1?v=${newV}"`);
    html = html.replace(/(src=["']js\/app\.js)(?!(\?v=))["']/g, `$1?v=${newV}"`);
    html = html.replace(/(src=["']js\/product-detail\.js)(?!(\?v=))["']/g, `$1?v=${newV}"`);
    fs.writeFileSync(filePath, html, 'utf-8');
  });
  return newV;
}

// 获取全部产品
function getProducts() {
  try {
    const raw = fs.readFileSync(PRODUCTS_JSON_PATH, 'utf-8');
    const data = JSON.parse(raw);
    return data.products || [];
  } catch (e) {
    console.error('读取 products.json 失败:', e);
    return [];
  }
}

// 获取分类列表（默认分类 + 动态解析 product-center.html）
function getCategories() {
  const cats = [...DEFAULT_CATEGORIES];
  const catKeys = new Set(cats.map(c => c.key));

  try {
    const pcHtml = fs.readFileSync(PRODUCT_CENTER_HTML_PATH, 'utf-8');
    const sectionRegex = /<section\s+id="([^"]+)"\s+class="product-section">/g;
    let match;
    while ((match = sectionRegex.exec(pcHtml)) !== null) {
      const key = match[1];
      if (!catKeys.has(key)) {
        catKeys.add(key);
        // 尝试解析标题
        const after = pcHtml.slice(match.index, match.index + 800);
        const titleMatch = after.match(/<h2[^>]*class="product-section__title"[^>]*>([^<]+)<\/h2>/);
        const zh = titleMatch ? titleMatch[1].trim() : key;
        cats.push({
          key,
          zh,
          ko: zh,
          en: key,
          descZh: '',
          descKo: '',
          descEn: ''
        });
      }
    }
  } catch (e) {
    console.error('解析分类列表异常:', e);
  }
  return cats;
}

// 添加新分类 (严格遵循 SOP: Step 3 & Step 5)
function addCategory({ key, zh, ko, en, descZh, descKo, descEn }) {
  if (!key || !zh) throw new Error('分类 key 和中文名称不能为空');
  const safeKey = key.toLowerCase().replace(/[^a-z0-9_-]/g, '');

  // 1. 注入 js/app.js 三语字典
  let appJs = fs.readFileSync(APP_JS_PATH, 'utf-8');
  const zhInjectAnchor = '// [AUTO_INJECT_ZH]';
  const koInjectAnchor = '// [AUTO_INJECT_KO]';
  const enInjectAnchor = '// [AUTO_INJECT_EN]';

  if (!appJs.includes(`"panel.product.${safeKey}"`)) {
    const zhEntry = `      "panel.product.${safeKey}": "${zh}",\n      "productCenter.${safeKey}.description": "${descZh || ''}",\n      ${zhInjectAnchor}`;
    const koEntry = `      "panel.product.${safeKey}": "${ko || zh}",\n      "productCenter.${safeKey}.description": "${descKo || descZh || ''}",\n      ${koInjectAnchor}`;
    const enEntry = `      "panel.product.${safeKey}": "${en || safeKey}",\n      "productCenter.${safeKey}.description": "${descEn || descZh || ''}",\n      ${enInjectAnchor}`;

    appJs = appJs.replace(zhInjectAnchor, zhEntry);
    appJs = appJs.replace(koInjectAnchor, koEntry);
    appJs = appJs.replace(enInjectAnchor, enEntry);
    fs.writeFileSync(APP_JS_PATH, appJs, 'utf-8');
  }

  // 2. 更新 product-center.html: 侧边栏导航 + 新增专区
  let pcHtml = fs.readFileSync(PRODUCT_CENTER_HTML_PATH, 'utf-8');

  // 2.1 侧边栏导航
  const sidebarNavTarget = /(<nav\s+class="product-center__nav"[^>]*>\s*<ul>[\s\S]*?)(<\/ul>)/;
  if (pcHtml.match(sidebarNavTarget) && !pcHtml.includes(`href="#${safeKey}"`)) {
    const newSidebarLi = `            <li><a href="#${safeKey}" data-i18n="panel.product.${safeKey}">${zh}</a></li>\n          `;
    pcHtml = pcHtml.replace(sidebarNavTarget, `$1${newSidebarLi}$2`);
  }

  // 2.2 主区域专区结构
  if (!pcHtml.includes(`id="${safeKey}"`)) {
    const newSection = `
      <!-- 分类: ${zh} -->
      <section id="${safeKey}" class="product-section">
        <header class="product-section__header">
          <p class="product-section__eyebrow" data-i18n="productCenter.collection">产品系列</p>
          <h2 class="product-section__title" data-i18n="panel.product.${safeKey}">${zh}</h2>
          <p class="product-section__description" data-i18n="productCenter.${safeKey}.description">
            ${descZh || ''}
          </p>
        </header>
        <div class="product-feature-grid">
          <!-- 产品卡片将在此自动注入 -->
        </div>
      </section>
    `;
    // 插入到最后一个 </section> 后面（位于 .product-center__content 闭合前）
    const contentEndTarget = /(<\/section>\s*)(<\/div>\s*<\/main>|(?=\s*<\/div>\s*<\/main>))/;
    if (pcHtml.match(contentEndTarget)) {
      pcHtml = pcHtml.replace(contentEndTarget, `$1${newSection}\n    $2`);
    } else {
      pcHtml = pcHtml.replace('</main>', `${newSection}\n</main>`);
    }
  }
  fs.writeFileSync(PRODUCT_CENTER_HTML_PATH, pcHtml, 'utf-8');

  // 3. 全站 7 个主要页面同步 Mega-Menu
  ALL_PAGES.forEach(page => {
    const pagePath = path.join(ROOT_DIR, page);
    if (!fs.existsSync(pagePath)) return;
    let pageHtml = fs.readFileSync(pagePath, 'utf-8');

    // 定位产品下拉菜单: <section class="mega-board__column..." data-panel="product"> ... <ul> ... </ul>
    const megaNavRegex = /(<section[^>]*data-panel="product"[^>]*>[\s\S]*?<ul>[\s\S]*?)(<\/ul>)/;
    if (pageHtml.match(megaNavRegex) && !pageHtml.includes(`href="#${safeKey}"`) && !pageHtml.includes(`product-center.html#${safeKey}`)) {
      const linkHref = page === 'product-center.html' ? `#${safeKey}` : `product-center.html#${safeKey}`;
      const newMegaLi = `              <li><a href="${linkHref}" data-i18n="panel.product.${safeKey}">${zh}</a></li>\n            `;
      pageHtml = pageHtml.replace(megaNavRegex, `$1${newMegaLi}$2`);
      fs.writeFileSync(pagePath, pageHtml, 'utf-8');
    }
  });

  // 4. 全站自动递增版本号
  const newV = bumpAllPagesVersion();
  return { success: true, key: safeKey, version: newV };
}

// 添加或更新产品 (严格遵循 SOP: Step 2, 3, 4, 6)
function addProduct(payload) {
  const { model, categoryKey, coverUrl, gallery, zh, ko, en } = payload;
  if (!model || !categoryKey || !coverUrl || !zh?.title) {
    throw new Error('产品型号、分类、封面图和中文标题为必填项');
  }

  const modelKey = model.toLowerCase().replace(/[^a-z0-9_-]/g, '');
  const productId = `product-${modelKey}`;

  // 1. 增量更新 data/products.json (确保保留所有老产品)
  const productsRaw = fs.readFileSync(PRODUCTS_JSON_PATH, 'utf-8');
  const productsData = JSON.parse(productsRaw);
  const existingList = productsData.products || [];

  // 清洗 gallery 列表 (优先使用切片长图，若无切片才用封面图兜底)
  const rawGallery = Array.isArray(gallery) ? gallery.filter(Boolean) : [];
  const allGallery = rawGallery.length > 0 ? rawGallery : [coverUrl];

  const newProduct = {
    id: productId,
    slug: modelKey,
    locale: "zh",
    backLink: {
      href: `product-center.html#${categoryKey}`,
      label: "返回产品中心"
    },
    hero: {
      eyebrow: zh.category || "生活电器",
      title: zh.title,
      description: zh.summary || ""
    },
    summary: {
      cover: {
        src: coverUrl,
        alt: zh.title
      },
      details: [
        { label: "产品编号", value: model.toUpperCase() },
        { label: "官方售价", value: "待定" },
        { label: "上市时间", value: new Date().toISOString().slice(0, 7) },
        { label: "产品类别", value: zh.category || "" }
      ],
      note: "数据来源：大宇家电官方网站，若有更新请以官方公告为准。"
    },
    media: {
      thumbnails: [
        { src: coverUrl, alt: `${zh.title} 主视图` }
      ],
      gallery: allGallery.map((imgUrl, i) => ({
        href: imgUrl,
        src: imgUrl,
        alt: `${zh.title} 功能介绍图 ${i + 1}`
      }))
    },
    service: {
      title: "需要更多帮助？",
      description: "联系我们的顾问团队，获取选型建议、使用指导与售后支持安排。",
      primaryCta: {
        label: "联系顾问",
        href: "mailto:support@daewoo.com"
      },
      secondaryCta: {
        label: "预约服务中心",
        href: "contact.html"
      }
    },
    translations: {
      ko: {
        backLink: {
          label: "제품 센터로 돌아가기"
        },
        hero: {
          eyebrow: ko?.category || zh.category,
          title: ko?.title || zh.title,
          description: ko?.summary || zh.summary || ""
        },
        summary: {
          details: [
            { label: "제품 모델명", value: model.toUpperCase() },
            { label: "공식 출시가", value: "미정" },
            { label: "출시 일정", value: new Date().toISOString().slice(0, 7) },
            { label: "제품 카테고리", value: ko?.category || zh.category }
          ],
          note: "자료 출처: DAEWOO 공식 웹사이트. 상세 정보는 공식 공지를 참고해 주시기 바랍니다."
        },
        service: {
          title: "도움이 필요하신가요?",
          description: "전문 상담팀에 문의하여 제품 추천, 규격 확인 및 서비스 센터 예약을 안내받으세요.",
          primaryCta: { label: "전문 상담원 문의" },
          secondaryCta: { label: "서비스 센터 예약" }
        }
      },
      en: {
        backLink: {
          label: "Back to Product Center"
        },
        hero: {
          eyebrow: en?.category || zh.category,
          title: en?.title || zh.title,
          description: en?.summary || zh.summary || ""
        },
        summary: {
          details: [
            { label: "Model No.", value: model.toUpperCase() },
            { label: "Official Price", value: "TBD" },
            { label: "Release Date", value: new Date().toISOString().slice(0, 7) },
            { label: "Category", value: en?.category || zh.category }
          ],
          note: "Source: DAEWOO Official Website. For updates, please refer to official announcements."
        },
        service: {
          title: "Need More Help?",
          description: "Connect with our advisory team for sizing guidance, operational instructions, and service center bookings.",
          primaryCta: { label: "Contact Advisor" },
          secondaryCta: { label: "Book Service Center" }
        }
      }
    }
  };

  // 严格增量合并：若存在则替换，不存在则插入到头部
  const filtered = existingList.filter(p => p.id !== productId);
  filtered.unshift(newProduct);
  productsData.products = filtered;
  fs.writeFileSync(PRODUCTS_JSON_PATH, JSON.stringify(productsData, null, 2), 'utf-8');

  // 2. 注入 js/app.js 三语字典 (Step 3: 绝不遗漏)
  let appJs = fs.readFileSync(APP_JS_PATH, 'utf-8');
  const zhInjectAnchor = '// [AUTO_INJECT_ZH]';
  const koInjectAnchor = '// [AUTO_INJECT_KO]';
  const enInjectAnchor = '// [AUTO_INJECT_EN]';

  // 先清理可能已存在的旧词条（避免重复累加）
  const cleanOldEntries = (content, mKey) => {
    const regCategory = new RegExp(`\\s*"productCenter\\.cards\\.${mKey}\\.category":\\s*"[^"]*",?`, 'g');
    const regTitle = new RegExp(`\\s*"productCenter\\.cards\\.${mKey}\\.title":\\s*"[^"]*",?`, 'g');
    return content.replace(regCategory, '').replace(regTitle, '');
  };

  appJs = cleanOldEntries(appJs, modelKey);

  const zhEntries = `      "productCenter.cards.${modelKey}.category": "${zh.category}",\n      "productCenter.cards.${modelKey}.title": "${zh.title}",\n      ${zhInjectAnchor}`;
  const koEntries = `      "productCenter.cards.${modelKey}.category": "${ko?.category || zh.category}",\n      "productCenter.cards.${modelKey}.title": "${ko?.title || zh.title}",\n      ${koInjectAnchor}`;
  const enEntries = `      "productCenter.cards.${modelKey}.category": "${en?.category || zh.category}",\n      "productCenter.cards.${modelKey}.title": "${en?.title || zh.title}",\n      ${enInjectAnchor}`;

  appJs = appJs.replace(zhInjectAnchor, zhEntries);
  appJs = appJs.replace(koInjectAnchor, koEntries);
  appJs = appJs.replace(enInjectAnchor, enEntries);
  fs.writeFileSync(APP_JS_PATH, appJs, 'utf-8');

  // 3. 更新 product-center.html (Step 4 & 避坑指南：防裁切、内联样式兜底、排在最上方)
  let pcHtml = fs.readFileSync(PRODUCT_CENTER_HTML_PATH, 'utf-8');

  // 如果已存在该卡片，先精准删除旧卡片
  const existingCardRegex = new RegExp(`<article[^>]*class="product-feature-card"[\\s\\S]*?href="product\\.html\\?id=${productId}"[\\s\\S]*?<\\/article>`, 'g');
  pcHtml = pcHtml.replace(existingCardRegex, '');

  const newCardHtml = `
          <!-- 新品: ${zh.title} (SOP规范: 内联样式防裁切兜底) -->
          <article class="product-feature-card">
            <header class="product-feature-card__header">
              <span class="product-feature-card__category" data-i18n="productCenter.cards.${modelKey}.category">${zh.category}</span>
              <h3 class="product-feature-card__title" data-i18n="productCenter.cards.${modelKey}.title">${zh.title}</h3>
            </header>
            <div class="product-feature-card__image product-feature-card__image--contain">
              <img src="${coverUrl}" alt="${zh.title}" loading="lazy" style="object-fit: contain; box-sizing: border-box; padding: 14px; background: #ffffff;" />
            </div>
            <p class="product-feature-card__price" data-i18n="productCenter.cards.priceTbd">价格待定</p>
            <a class="product-feature-card__link" href="product.html?id=${productId}" data-i18n="productCenter.cards.viewDetails">查看详情</a>
          </article>`;

  // 寻找指定分类专区容器: <section id="${categoryKey}" class="product-section"> ... <div class="product-feature-grid">
  const sectionTarget = new RegExp(`(<section[^>]*id="${categoryKey}"[^>]*>[\\s\\S]*?<div\\s+class="product-feature-grid">)`);
  if (pcHtml.match(sectionTarget)) {
    // 严格排在最上方：作为 product-feature-grid 的第一个卡片插入
    pcHtml = pcHtml.replace(sectionTarget, `$1${newCardHtml}`);
  } else {
    // 降级兜底：若找不到特定分类，插入到第一个 product-feature-grid
    pcHtml = pcHtml.replace(/(<div\s+class="product-feature-grid">)/, `$1${newCardHtml}`);
  }
  fs.writeFileSync(PRODUCT_CENTER_HTML_PATH, pcHtml, 'utf-8');

  // 4. 全站自动递增版本号 (Step 6)
  const newV = bumpAllPagesVersion();

  return { success: true, id: productId, version: newV };
}

// 下架删除产品
function deleteProduct(productId) {
  if (!productId) throw new Error('产品 ID 不能为空');

  // 1. 从 data/products.json 移除
  const productsRaw = fs.readFileSync(PRODUCTS_JSON_PATH, 'utf-8');
  const productsData = JSON.parse(productsRaw);
  productsData.products = (productsData.products || []).filter(p => p.id !== productId);
  fs.writeFileSync(PRODUCTS_JSON_PATH, JSON.stringify(productsData, null, 2), 'utf-8');

  // 2. 从 product-center.html 移除卡片
  let pcHtml = fs.readFileSync(PRODUCT_CENTER_HTML_PATH, 'utf-8');
  const cardRegex = new RegExp(`<article[^>]*class="product-feature-card"[\\s\\S]*?href="product\\.html\\?id=${productId}"[\\s\\S]*?<\\/article>`, 'g');
  pcHtml = pcHtml.replace(cardRegex, '');
  fs.writeFileSync(PRODUCT_CENTER_HTML_PATH, pcHtml, 'utf-8');

  // 3. 全站递增版本号
  const newV = bumpAllPagesVersion();
  return { success: true, version: newV };
}

// 静态文件 MIME 表
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2'
};

// 创建原生 HTTP 服务
const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = parsedUrl.pathname;
  const method = req.method.toUpperCase();

  // 跨域支持 (CORS)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // API 路由
  if (pathname.startsWith('/api/')) {
    // 1. GET /api/status
    if (pathname === '/api/status' && method === 'GET') {
      try {
        const products = getProducts();
        const categories = getCategories();
        const version = getCurrentVersion();
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ products, categories, version }));
      } catch (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: err.message }));
      }
      return;
    }

    // 2. POST /api/categories
    if (pathname === '/api/categories' && method === 'POST') {
      let body = '';
      req.on('data', chunk => { body += chunk; });
      req.on('end', () => {
        try {
          const payload = JSON.parse(body);
          const result = addCategory(payload);
          res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
          res.end(JSON.stringify(result));
        } catch (err) {
          res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
          res.end(JSON.stringify({ error: err.message }));
        }
      });
      return;
    }

    // 3. POST /api/products
    if (pathname === '/api/products' && method === 'POST') {
      let body = '';
      req.on('data', chunk => { body += chunk; });
      req.on('end', () => {
        try {
          const payload = JSON.parse(body);
          const result = addProduct(payload);
          res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
          res.end(JSON.stringify(result));
        } catch (err) {
          res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
          res.end(JSON.stringify({ error: err.message }));
        }
      });
      return;
    }

    // 4. DELETE /api/products/:id
    if (pathname.startsWith('/api/products/') && method === 'DELETE') {
      const id = pathname.slice('/api/products/'.length);
      try {
        const result = deleteProduct(id);
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify(result));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ error: err.message }));
      }
      return;
    }

    // 5. POST /api/deploy (执行 deploy-oss.sh 流式返回)
    if (pathname === '/api/deploy' && method === 'POST') {
      res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8',
        'Transfer-Encoding': 'chunked'
      });

      res.write(`[INFO] 正在触发 deploy-oss.sh 同步至阿里云 OSS...\n`);
      const child = spawn('bash', [DEPLOY_SCRIPT_PATH], { cwd: ROOT_DIR });

      child.stdout.on('data', data => {
        res.write(data);
      });

      child.stderr.on('data', data => {
        res.write(data);
      });

      child.on('close', code => {
        res.write(`\n[INFO] 部署进程结束，退出码: ${code}\n`);
        if (code === 0) {
          res.write(`🎉 同步成功！线上站点已更新生效。\n`);
        } else {
          res.write(`⚠️ 同步退出码异常，请检查 ossutil 配置。\n`);
        }
        res.end();
      });

      child.on('error', err => {
        res.write(`\n[ERROR] 脚本执行启动失败: ${err.message}\n`);
        res.end();
      });
      return;
    }

    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not Found' }));
    return;
  }

  // 静态文件托管
  let filePath = '';
  if (pathname === '/' || pathname === '/admin' || pathname === '/admin.html') {
    filePath = path.join(ROOT_DIR, 'scripts/admin.html');
  } else {
    filePath = path.join(ROOT_DIR, decodeURIComponent(pathname.replace(/^\/+/, '')));
  }

  // 安全检查：防止路径穿越
  if (!filePath.startsWith(ROOT_DIR)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('File Not Found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': contentType });
    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`====================================================`);
  console.log(`🚀 DAEWOO 产品与分类管理控制台已启动！`);
  console.log(`📌 控制台地址:   http://localhost:${PORT}`);
  console.log(`🌐 站点预览地址: http://localhost:${PORT}/product-center.html`);
  console.log(`====================================================`);
});

