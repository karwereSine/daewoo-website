# DAEWOO 产品更新与上线标准作业流程 (SOP)

本文档复盘了本次产品中心 9 款新品上线过程中遇到的问题、技术根因与修复方案，并制定了标准化的产品更新工作流程。**后续任何产品的新增、替换或维护，请严格按照本流程执行，避免再次踩坑。**

---

## 一、本次踩坑点与根因全景复盘

| 序号 | 故障/问题现象 | 根因剖析（第一性原理） | 修复方案与设计规范 |
| :--- | :--- | :--- | :--- |
| **1** | **原有产品被意外覆盖或移除** | 误将“增量更新”理解为“全量替换”，直接重置了 `products.json` 与 HTML 节点。 | 坚决实行**“增量并存”原则**：老产品完整保留，新产品按分类插入各专区最前方，确保全网历史链接不失效。 |
| **2** | **立式/长图产品卡片被严重裁切**（如吸尘器 L11 丢失手柄和地刷） | 旧版 `.product-feature-card__image` 规则采用 `aspect-ratio: 1/1` + `object-fit: cover`。长款竖版产品在撑满宽度后，机身上下两端被 `overflow: hidden` 截断。 | ① 增加专属修饰类 `.product-feature-card__image--contain`（设为 `object-fit: contain !important; padding: 14px; background: #ffffff;`）；<br>② 在 `<img>` 标签直接写入内联样式双重保底；<br>③ **严禁直接修改原有类名规则**，确保旧产品外观零影响。 |
| **3** | **品类归属错乱**（如吸尘器被归入加湿器） | 历史网站架构仅有 4 个分类（加湿器、挂烫机、电煮锅、果蔬），新增品类无对应入口，导致生硬归入现有品类。 | ① 重组为 6 大独立专区（加湿器、吸尘器、挂烫机、电蒸锅·电煮锅、电热水壶、破壁料理·果蔬）；<br>② **全站 7 个页面顶部 Mega-Menu 必须同步对齐**，确保任何页面导航均可直达新专区。 |
| **4** | **代码修改后，浏览器刷新无任何变化** | 浏览器存在极强的 Disk Cache、Memory Cache 及 BFCache（往返内存缓存）。原 HTML 中引入的 CSS/JS **完全没有版本号参数**，浏览器根本不向服务器发请求。 | **静态资源 Cache-Busting 规范**：<br>全站所有 HTML 引用的样式和脚本必须携带版本号参数（如 `href="css/style.css?v=YYYYMMDDvX"`、`src="js/app.js?v=YYYYMMDDvX"`），强制客户端拉取最新资源。 |
| **5** | **详情页有多语言，但产品中心卡片与菜单始终显示中文** | **双轨国际化渲染机制认知不同**：<br>① 详情页通过 `product-detail.js` 异步读 `products.json`（JSON 更新即生效）；<br>② 产品中心与菜单依靠 `js/app.js` 抓取 `[data-i18n]` 动态替换。旧版 `app.js` 被浏览器强缓存，字典无新 key，导致直接跳过替换。 | **新增产品双字典同步规范**：<br>新增产品除录入 `products.json` 外，**必须同步在 `js/app.js` 的 `zh`、`ko`、`en` 三套字典中注册卡片名称与分类词条**，并升级 `app.js?v=...` 版本号。 |
| **6** | **线上部署方式遗忘** | 线上运行有两个不同环境：韩国 Vultr 云服务器（Spring Boot Jar）与阿里云 OSS 静态托管（`https://deawoo.tgripon.com`）。 | 梳理出 `oss://daewoo` 存储桶配置，固化编写了自动化脚本 `deploy-oss.sh`，实现一键 20 秒极速增量发布。 |

---

## 二、标准化产品更新流程 (SOP)

未来每一次有新产品上线，请严格按照以下 **Step 1 至 Step 7** 顺序推进：

### Step 1: 需求对齐与素材就绪
1. **明确发布范围**：确认是“纯增量上线”还是“下架旧品”，**默认一律保持新老共存**。
2. **下载与命名素材**：
   - 提取产品切片图流及封面图（主图必须命名为 `00_cover.png`，尺寸建议保持竖直居中高清）；
   - 上传至阿里云 OSS 媒体库（目录名遵循去掉序号的英文字符串，如 `Vacuum_Cleaner_L11`）。
3. **验证资源可访问性**：通过 `curl -I https://oss.tgripon.com/.../00_cover.png` 确认返回 HTTP 200。

### Step 2: 数据层配置 (`data/products.json`)
1. **保留旧品**：在新旧产品合并时，绝对不能删除已有旧产品数组对象。
2. **三语数据完整性**：
   - `id`: 格式为 `product-型号小写`（如 `product-l11`）；
   - `translations`: 必须包含 `zh`、`ko`、`en` 三种语言的完整对象（`category`, `title`, `eyebrow`, `summary`, `specs`, `service` 等）；
   - `gallery`: 包含 `00_cover.png` 及全套切片图 URL；
   - `backLink`: `href` 必须精确锚定到产品中心的对应分类 ID（如 `product-center.html#vacuum`）。

### Step 3: 国际化字典同步 (`js/app.js`)
必须同时在 `js/app.js` 中维护三套字典，少填任意一项均会导致该语言下显示异常：
1. **中文 (`zh`)**：
   - `productCenter.cards.{型号小写}.category`: 分类名
   - `productCenter.cards.{型号小写}.title`: 产品标题
2. **韩文 (`ko`)**：
   - `productCenter.cards.{型号小写}.category`: 韩国本土化分类名
   - `productCenter.cards.{型号小写}.title`: 韩国本土化标题
3. **英文 (`en`)**：
   - `productCenter.cards.{型号小写}.category`: 英文分类名
   - `productCenter.cards.{型号小写}.title`: 英文标题
4. **若新增了全新一级品类**：需同步在三语中添加 `panel.product.{品类名}` 及其描述。

### Step 4: 页面结构与样式适配 (`product-center.html`)
1. **插入新卡片**：
   - 将新品卡片置于对应分类专区的最上方（新品在前，旧品在后）；
   - 确保 `[data-i18n]` 键名与 `js/app.js` 中的字典键名 **100% 一字不差**。
2. **防裁切样式隔离**：
   - 新品卡片容器增加修饰类：`product-feature-card__image--contain`；
   - `<img>` 标签必须显式写入内联兜底：
     ```html
     <img src="..." alt="..." loading="lazy" style="object-fit: contain; box-sizing: border-box; padding: 14px; background: #ffffff;" />
     ```
   - **禁止修改旧产品的 `.product-feature-card__image` 规则**。

### Step 5: 全站导航与联动核验 (7 个 HTML 页面)
若本次更新涉及新增分类（如吸尘器、电水壶）：
- 检查全站全部 7 个页面：`index.html`、`product-center.html`、`product.html`、`video-center.html`、`news.html`、`about.html`、`contact.html`；
- 确保顶部 Mega-Menu 下拉菜单（`data-panel="product"`）内的品类列表顺序与链接完全一致。

### Step 6: 破除缓存（Cache Busting，极关键！）
每次修改了 CSS 或 JS 之后，必须在全站 HTML 文件中递增版本号：
- CSS：`<link rel="stylesheet" href="css/style.css?v=YYYYMMDDvX" />`
- JS：`<script src="js/app.js?v=YYYYMMDDvX"></script>`
- 详情页 JS：`<script src="js/product-detail.js?v=YYYYMMDDvX"></script>`

### Step 7: 本地验收与线上发布
1. **本地预览验证**：
   - 启动本地服务：`python3 -m http.server 8089`；
   - 打开 `http://localhost:8089/product-center.html`；
   - **核心验证动作**：切换中 / 韩 / 英三种语言，确认卡片名称、顶部菜单、侧边栏文字均能 100% 正确切换，且立式产品机身、把手、底座显示完整无截断。
2. **线上自动化部署**：
   - 部署到阿里云 OSS 静态站（`https://deawoo.tgripon.com`）：
     ```bash
     ./deploy-oss.sh
     ```
   - 部署到韩国生产云服务器（`https://daewoolife.co.kr`）：
     ```bash
     ./deploy.sh
     ```
3. **线上生产回测**：
   - 手机端与桌面端访问线上地址，按 `Cmd + Shift + R` 强制刷新验证。
4. **Git 版本归档**：
   - 执行 `git add .`、`git commit -m "..."` 并推送至远程仓库。

---

## 三、更新常见排查清单 (CheatSheet)

- **问：为什么我在本地/线上改了代码，刷新页面毫无反应？**  
  答：99% 命中了浏览器磁盘强缓存。检查 HTML 中的 CSS/JS 是否更新了 `?v=...` 版本号，并在浏览器执行硬刷新（Mac：`Cmd + Shift + R`，Windows：`Ctrl + F5`）。
- **问：为什么切换语言时，新卡片依然显示中文？**  
  答：检查三点：① `product-center.html` 上的 `data-i18n` 属性名是否和 `js/app.js` 完全一致；② `js/app.js` 的 `ko` 和 `en` 字典是否漏填；③ HTML 底部的 `app.js` 版本号是否递增。
- **问：为什么图片在卡片里上下被裁断了？**  
  答：该产品图片比例非 1:1 正方形。请确保卡片添加了 `.product-feature-card__image--contain` 并在 `img` 上加上了 `style="object-fit: contain; ..."`。
