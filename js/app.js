document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    zh: {
      "brand.name": "DAEWOO 服务",
      "search.label": "输入搜索词",
      "search.placeholder": "请输入想了解的内容",
      "search.button": "搜索",
      "search.results.heading": "搜索结果",
      "search.results.hint": "输入产品、新闻或视频关键词即可开始搜索",
      "search.results.empty": "未找到匹配内容，请尝试其他关键词",
      "search.results.products": "产品",
      "search.results.news": "新闻",
      "search.results.videos": "视频",
      "search.results.loading": "正在加载搜索数据…",
      "search.results.viewAll": "查看全部",
      "search.results.remaining": "还有 {{count}} 条结果",
      "search.results.count": "共 {{count}} 个结果",
      "search.results.shortQuery": "请输入至少 2 个字符（中文可直接输入单个字）",
      "search.results.close": "关闭搜索结果",
      "lang.selector": "选择语言",
      "lang.selectorAria": "语言选择器",
      "lang.zh": "中文",
      "lang.ko": "韩文",
      "lang.en": "英文",
      "nav.toggle": "全部菜单",
      "nav.label": "DAEWOO 主导航",
      "nav.product": "产品中心",
      "nav.news": "新闻动态",
      "nav.video": "视频中心",
      "nav.contact": "联系我们",
      "nav.about": "公司概况",
      "nav.language": "LANGUAGE",
      "mobileNav.toggle": "打开目录",
      "mobileNav.panelLabel": "DAEWOO 移动目录",
      "mobileNav.close": "关闭目录",
      "panel.product.heading": "产品类别",
      "panel.product.home": "加湿器",
      "panel.product.smartHome": "熨斗",
      "panel.product.commercial": "电煮锅",
      "panel.product.personalCare": "榨汁机",
      "panel.product.wearable": "智能穿戴",
      "panel.product.digital": "智能数码",
      "panel.product.others": "其他产品",
      "panel.news.heading": "新闻分类",
      "panel.news.latest": "新闻资讯 · 行业资讯",
      "panel.video.heading": "精选视频",
      "panel.video.hi029pro": "HI-029PRO 大宇手持挂烫机",
      "panel.video.hi045": "HI-045 大宇 Hobo 手持熨烫机",
      "panel.video.hi046": "HI-046 大宇小圆盒衣物护理机",
      "panel.video.hi050": "HI-050 大宇喷熨挂烫机",
      "panel.video.ph05": "PH05 大宇小巨蛋加湿器",
      "panel.video.ph06": "PH06 大宇无雾加湿器",
      "panel.video.s30pro": "S30PRO 多功能炖蒸煮锅",
      "panel.video.s31": "S31 多功能蒸汽料理锅",
      "panel.video.more": "更多",
      "panel.contact.heading": "联系渠道",
      "panel.contact.hotline": "客服热线 400-123-0000",
      "panel.contact.online": "在线客服",
      "panel.contact.center": "服务中心预约",
      "panel.contact.partner": "合作伙伴支持",
      "panel.contact.feedback": "意见反馈",
      "panel.about.heading": "DAEWOO 公司概况",
      "panel.about.story": "品牌故事",
      "panel.about.timeline": "发展历程",
      "panel.about.leadership": "管理团队",
      "panel.about.csr": "社会责任",
      "panel.about.partner": "合作伙伴",
      "panel.language.heading": "选择语言",
      "panel.language.description": "请选择您希望浏览网站的语言版本。",
      "panel.language.locale.zh": "简体中文",
      "panel.language.locale.ko": "韩语（Korean）",
      "panel.language.locale.en": "英语（English）",
      "productInterest.heading": "请选择您感兴趣的产品",
      "productInterest.fridge": "冰箱",
      "productInterest.riceCooker": "电饭锅",
      "productInterest.soymilk": "豆浆机",
      "productInterest.juicer": "榨汁机",
      "productInterest.iceMaker": "制冰机",
      "productInterest.blender": "破壁机",
      "productInterest.babyFood": "辅食机",
      "productInterest.robotVacuum": "扫地机器人",
      "productInterest.hairDryer": "吹风机",
      "productInterest.humidifier": "加湿器",
      "productInterest.waterDispenser": "饮水机",
      "productInterest.waterPurifier": "净水器",
      "productInterest.fan": "电风扇",
      "productInterest.heater": "取暖器",
      "homeVideo.eyebrow": "视频中心",
      "homeVideo.title": "沉浸式视频速览",
      "homeVideo.description": "精选 3 支产品演示视频，快速了解 DAEWOO 视频中心正在播放的明星内容。",
      "homeVideo.watch": "观看视频",
      "homeVideo.cta": "进入视频中心",
      "homeNews.eyebrow": "新闻资讯",
      "homeNews.title": "最新动态与行业资讯",
      "homeNews.description": "精选 DAEWOO 最新新闻、产品发布与行业洞察，帮助您快速了解品牌动向。",
      "homeNews.more": "查看更多新闻",
      "homeNews.article6.title": "大宇智能坐便盖功能/特点",
      "homeNews.article6.summary": "感应翻盖、柔珠清洗、恒温座圈，多重科技带来舒适如厕体验。",
      "homeNews.article5.title": "大宇智能坐便盖介绍",
      "homeNews.article5.summary": "多模式水洗、暖风烘干与电解水除菌，打造洁净健康的卫浴新选择。",
      "homeNews.article4.title": "大宇亮相抖音818新潮好物节，精品家电夺得销冠",
      "homeNews.article4.summary": "多款精品家电以高颜值与高性能脱颖而出，直播电商场景强势破圈。",
      "homeNews.article3.title": "大宇家电为何能够在中国持续走火？",
      "homeNews.article3.summary": "深耕精品路线、洞察用户需求，大宇品牌在中国持续收获口碑。",
      "newsPage.hero.title": "新闻资讯 · 行业资讯",
      "newsPage.hero.description": "来自 DAEWOO 的品牌动态、行业洞察、产品故事与服务资讯。",
      "newsPage.breadcrumb.label": "新闻导航",
      "newsPage.breadcrumb.home": "首页",
      "newsPage.breadcrumb.current": "新闻资讯 · 行业资讯",
      "newsPage.backHome": "返回首页",
      "newsPage.article2.title": "大宇壁挂洗衣机星云上市，家电品质追求无止境",
      "newsPage.article2.summary": "星云系列延续大宇壁挂洗衣机的省空间优势，并加入母婴衣物专护，满足家庭高品质洗护需求。",
      "newsPage.article1.title": "AWE2021：大宇电器深耕中国市场",
      "newsPage.article1.summary": "现场回顾中国家电及消费电子博览会，展示大宇深耕中国市场的策略与成果。",
      "newsPage.hero.eyebrow": "NEWSROOM",
      "newsPage.spotlight.eyebrow": "Focus · 热点速递",
      "newsPage.spotlight.description": "感应翻盖、柔珠清洗、恒温座圈，多重科技场景演示，展示健康卫浴的舒适体验，并提供安装与日常养护建议。",
      "newsPage.spotlight.bullet1": "全程展示自动翻盖、暖风烘干与电解水除菌等核心卖点",
      "newsPage.spotlight.bullet2": "结合用户口碑与真实场景，输出焕新卫浴空间的灵感",
      "newsPage.spotlight.bullet3": "附带维护步骤与售后服务指引，便于渠道销售使用",
      "newsPage.spotlight.cta": "查看完整报道",
      "newsPage.collections.eyebrow": "News Library",
      "newsPage.collections.title": "主题精选 · 文章合集",
      "newsPage.collections.description": "按照品牌动态、行业趋势、产品上新与服务口碑等主题，快速筛选您关注的资讯焦点，搭配卡片化阅读体验。",
      "newsPage.filters.all": "全部",
      "newsPage.filters.brand": "品牌动态",
      "newsPage.filters.trend": "行业趋势",
      "newsPage.filters.product": "产品上新",
      "newsPage.filters.service": "服务与口碑",
      "newsPage.tags.brand": "#品牌动态",
      "newsPage.tags.trend": "#行业趋势",
      "newsPage.tags.product": "#产品上新",
      "newsPage.tags.service": "#服务与口碑",
      "newsPage.note.title": "持续上新 · 内容日历",
      "newsPage.note.description": "新闻中心将同步新品上市、渠道动态、客户故事与服务案例，欢迎订阅月度快讯或联系 DAEWOO 服务顾问，获取定制报道素材。",
      "newsPage.note.cta": "订阅与合作洽谈",
      "newsArticle.publishedLabel": "发布时间：",
      "newsArticle1.title": "AWE2021：大宇电器深耕中国市场",
      "newsArticle1.heroDescription": "2021年3月23日-25日，在上海虹桥国家会展中心举办的中国家电及消费电子博览会（Appliance&electronics World Expo，简称AWE）顺利结束。",
      "newsArticle1.body1": "作为源自韩国的世界知名品牌企业，DAEWOO大宇在产品研发、技术创新方面有着深厚的积累，同样没有缺席本次展会。",
      "newsArticle1.body2": "除了最新的家居清洁电器产品蒸汽拖把和无线除螨吸尘器，还有DAEWOO大宇旗下明星产品HI-029手持式蒸汽挂烫机、S11多功能料理锅等也悉数亮相。",
      "newsArticle1.body3": "其中DAEWOO大宇厨房电器系列明星产品—S11多功能料理锅，荣获AWE艾普兰金口碑奖。",
      "newsArticle1.body4": "艾普兰奖金口碑奖，是由中国家电及消费电子博览会发起的，国内最具公信力的产品表彰大会，素来有“全国智慧生活领域奥斯卡”的美誉，这也体现了大宇多功能料理锅在行业内及大众消费者心目中的领军者地位。",
      "newsArticle1.body5": "现场观众在体验区域近距离感受多功能料理锅、蒸汽挂烫机等产品，工作人员也通过互动演示讲解产品细节。",
      "newsArticle2.title": "大宇壁挂洗衣机星云上市，家电品质追求无止境",
      "newsArticle2.heroDescription": "近日，大宇DAEWOO壁挂洗衣机系列再推新品星云，一经上市就引起不少生活达人的关注。",
      "newsArticle2.body1": "作为壁挂式洗衣机的开创者，大宇DAEWOO新品星云继续保持了省空间、不占地的特点，也将母婴衣物护理之中不伤衣物、消毒杀菌的核心诉求做到了更细致的升级，比如模拟手搓、纳米银离子除菌，而且创新升级了多项方便省心的功能，比如自动定量投放洗涤剂，一键中途添衣，以及快洗快烘等功能。",
      "newsArticle2.body2": "除此之外，让人能够直观感受到的是，星云ID设计上也亮点满满，它深邃的色彩中加入了复古唯美的星云色调，给生活增添了几分浪漫气息。",
      "newsArticle2.body3": "可以说星云的设计研发思路，正是大宇DAEWOO家电产品研发理念的典型代表，即敢于不断尝试创新、优化美好使用体验没有止境，且善于赋予产品超出功能之外的人文关怀与美学趣味。",
      "newsArticle2.body4": "大宇DAEWOO将这种产品理念贯彻到了整个家电模块，产品线布局涵盖了工作与生活的各种使用需要，既有生活家电，也有厨房家电，能够全方位提升人们日常生活的舒适度和幸福感。",
      "newsArticle2.body5": "大宇DAEWOO在产品功能设置上敏锐洞察快节奏生活需求，通过便携收纳、一机多用、易清洗等细节让家电真正做到“好用再好用，方便再方便”，壁挂洗衣机更成为不少宝妈处理家务的贴心小助手。",
      "newsArticle2.body6": "细数大宇DAEWOO每款产品，总是充满精致感和细腻感，也因此屡获领域达人及行业大咖推荐，是薇娅、李佳琦、罗永浩等头部主播直播间的“常客”，品牌和多款产品还入选天猫官方遴选的“天猫V榜”。",
      "newsArticle2.body7": "这些头部主播和平台有着严苛的选品和销量要求，大宇DAEWOO能够被选中是对其家电品质的认可，而在2021年的AWE中获得的金口碑奖也证明了品牌以使用体验和美感打动用户的初心。",
      "newsArticle2.body8": "据悉，大宇DAEWOO已经进入了六十多个国家，为近千万家庭提供优质产品服务，未来将以更多精品帮助人们享受生活。",
      "newsArticle3.title": "大宇DAEWOO家电为何能够在中国持续走火？",
      "newsArticle3.heroDescription": "大宇DAEWOO自1967年创立，经过54年的持续发展，形成汽车、重汽、地产、勘探和家电五大主营业务，品牌早已享誉全球，不过中国人更熟悉的却是身为家电品牌的大宇DAEWOO。",
      "newsArticle3.body1": "有行业分析数据显示，大宇DAEWOO在家电领域市场份额增长抢眼，已连续四年实现翻番增长，成为与北鼎、摩飞、小熊等同属一梯队的新消费家电品牌。",
      "newsArticle3.body2Title": "世界500强企业前200强",
      "newsArticle3.body2": "大宇DAEWOO崛起于汽车行业，商业版图遍及60多个国家和地区，海外分支机构达到164个，是世界500强企业前200强。",
      "newsArticle3.body3": "大宇DAEWOO成功的秘诀在于对产品品质的坚持和东方美学的挖掘，拥有3500项专利，每款产品都致力于带来超出预期的体验。",
      "newsArticle3.body4Title": "54年专注家电研发",
      "newsArticle3.body4": "创始人金先生在汽车行业打拼多年后，为了照顾家庭开启家电事业，希望用技术积累打造理想产品，帮助家人享受健康美好的居家生活。",
      "newsArticle3.body5": "54年的深耕让大宇DAEWOO的家电系列覆盖了全场景生活，从小家电到大家电，将品质、美、健康、细节与关爱写入产品DNA。",
      "newsArticle3.body6Title": "来自用户的“金口碑”",
      "newsArticle3.body6": "2021年3月，大宇DAEWOO荣获AWE艾普兰“金口碑奖”，这既是用户与专家的褒奖，也是品牌在中国推进精品家电战略的重要成果。",
      "newsArticle3.body7": "中韩文化同源，为了更好服务中国用户，大宇DAEWOO邀请获得韩国优秀设计总统奖的团队调研中式家庭习惯，持续优化产品体验与审美。",
      "newsArticle3.body8": "在产品美学与操作体验的双重加持下，大宇DAEWOO风扇、挂烫机、电水壶等成为现象级产品，多次登上头部主播直播间并获多领域达人推荐。",
      "newsArticle3.body9": "大宇DAEWOO在中国市场的成功，源于东方生活美学与技术实力的结合，更离不开中国制造的匠心助力。",
      "newsArticle4.title": "大宇亮相抖音818新潮好物节，精品家电夺得销冠",
      "newsArticle4.heroDescription": "精品家电品牌大宇DAEWOO推出的网红爆款熨烫机在抖音818新潮好物节上全天销售增幅突破1000%，创造多个单品行业排名第一的佳绩。",
      "newsArticle4.body1": "自1967年起，大宇DAEWOO便以科技与匠心打造品质家电，希望通过优异体验提升人们的生活幸福感。",
      "newsArticle4.body2": "五十多年来，大宇DAEWOO推出的家电产品总能成为不同年代的“新潮之选”，在中国市场更展现出背靠全球制造、专注本土生活方式的理念。",
      "newsArticle4.body3": "目前产品线已涵盖生活大家电、厨房小家电与生活小家电三大系列，研发路径围绕“更好用、更精致、更有温度”。",
      "newsArticle4.body4": "在更好用方面，大宇DAEWOO聚焦痛点持续创新，例如将商用熨烫机的高效表现融入便携产品，实现小体积与高性能兼得。",
      "newsArticle4.body5": "受章鱼启发设计的大接触面手持吸尘器，可高效去除灰尘和螨虫，搭配不同刷头解决缝隙与褶皱清洁难题。",
      "newsArticle4.body6": "品牌针对母婴、上班族、美食爱好者等群体开发差异化功能，如集合烧水、保温与便携的一体式电热水壶，满足女生生理期饮水需求。",
      "newsArticle4.body7": "在更精致方面，获得韩国总统奖的设计总监Jean以深厚文化底蕴，打造兼具艺术感与使用愉悦的“家电美物”。",
      "newsArticle4.body8": "大宇DAEWOO产品造型简洁、配色鲜明、易清洗好收纳，能与不同家装风格兼容，让每一次使用都舒适愉快。",
      "newsArticle4.body9": "在温度层面，品牌认为家电也能传递情感，产品带来的清新、热烈或复古情绪，映照着用户对生活的期待。",
      "newsArticle4.body10": "大宇DAEWOO坚持精品路线，产品已进入60多个国家，并凭借品质成为“天猫V榜”推荐品牌。",
      "newsArticle5.title": "大宇智能坐便盖介绍",
      "newsArticle5.heroDescription": "大宇智能坐便盖是2021年12月上市的人性化智能坐便器组件，配备感应自动翻盖、空气柔珠清洗、多档座圈控温、多档暖风烘干、活水即热、电解水除菌及离座自动冲水等功能。",
      "newsArticle5.body2": "<strong>日常保养</strong><br />1.可用半干棉布清洁面盖、座圈表面及底部；<br />2.如特别脏，可沾中性洗剂清洁但避免强性洗剂，并需避免强烈阳光直射以免变色。",
      "newsArticle5.body3": "<strong>适用场景</strong><br />适用于住宅，以及酒店宾馆、餐饮、娱乐、休闲、美容、办公、医院、商场、机场、会展等公共场所。",
      "newsArticle6.title": "大宇智能坐便盖功能/特点",
      "newsArticle6.heroDescription": "大宇智能坐便盖功能/特点：",
      "newsArticle6.featureIntro": "<strong>大宇智能坐便盖功能/特点：</strong>",
      "newsArticle6.feature1": "<strong>感应自动翻盖</strong><br />120°立体广角雷达感应，人走近0.5米范围内自动翻开便盖，无需接触盖板。",
      "newsArticle6.feature2": "<strong>“空气柔珠”技术</strong><br />臀洗、女洗、儿童、助便等多种水洗模式可选，每秒注入超500个绵密气泡，针对不同生理结构定制喷水角度。",
      "newsArticle6.feature3": "<strong>多档座圈控温</strong><br />面式加热技术提供30个发热点，温差±2度，保持座圈恒温。",
      "newsArticle6.feature4": "<strong>多档暖风烘干</strong><br />采用大叶轮涡流增压风机，多档风温可选，满足不同需求。",
      "newsArticle6.feature5": "<strong>离座自动冲水</strong><br />如厕结束后，人体离开感应区域5秒自动冲水。",
      "newsArticle6.feature6": "<strong>产品特点：</strong>",
      "newsArticle6.feature7": "1.适配率高：<br />与市场上坐便器的适配率达99%。",
      "newsArticle6.feature8": "2.拆装容易：<br />产品安装与拆卸简单，可多次使用。",
      "newsArticle6.feature9": "3.适合二次装修：<br />选用智能坐便盖能节约改造成本，避免材料浪费。",
      "newsArticle.back": "返回新闻列表",
      "videoPage.hero.eyebrow": "视频中心",
      "videoPage.hero.title": "沉浸式了解 DAEWOO 精品家电",
      "videoPage.hero.description": "精选品牌广告、产品演示与使用场景视频，让您快速掌握每一款精品家电的亮点功能与使用体验。",
      "videoPage.overview.title": "内容导览",
      "videoPage.overview.description": "聚焦厨房新鲜力、清洁场景与舒适生活三大主题，持续更新符合中国家庭需求的真实体验视频。",
      "videoPage.overview.card1.title": "厨房灵感",
      "videoPage.overview.card1.description": "从便携榨汁到多功能烹饪，了解如何用精品家电提升每日餐桌效率。",
      "videoPage.overview.card2.title": "洁净科技",
      "videoPage.overview.card2.description": "直观展示蒸汽洗地机、壁挂洗烘等解决方案带来的高效家务流程。",
      "videoPage.overview.card3.title": "舒适体验",
      "videoPage.overview.card3.description": "探索挂脖风扇、智能饮水等生活灵感，打造四季皆宜的品质生活。",
      "videoPage.featured.badge": "精选",
      "videoPage.featured.description": "展示炖、蒸、煮多功能一体设计，演示大容量内胆、智能控温与分体式清洗，适合家庭日常烹饪与健康饮食需求。",
      "videoPage.featured.bullet1": "演示炖、蒸、煮多功能一体设计的完整流程",
      "videoPage.featured.bullet2": "讲解大容量内胆、智能控温与分体式清洗的使用技巧",
      "videoPage.featured.bullet3": "适合家庭日常烹饪与健康饮食需求",
      "videoPage.featured.cta": "弹窗播放",
      "videoPage.featured.playLabel": "立即播放",
      "videoPage.collections.eyebrow": "Video Library",
      "videoPage.collections.title": "产品演示合集",
      "videoPage.collections.description": "按兴趣主题筛选，快速找到与您生活场景匹配的产品演示视频。",
      "videoPage.filters.all": "全部",
      "videoPage.filters.kitchen": "厨房饮品",
      "videoPage.filters.cleaning": "居家清洁",
      "videoPage.filters.comfort": "舒适生活",
      "videoPage.filters.care": "洗护护理",
      "videoPage.tags.kitchen": "#厨房饮品",
      "videoPage.tags.cleaning": "#居家清洁",
      "videoPage.tags.comfort": "#舒适生活",
      "videoPage.tags.care": "#洗护护理",
      "videoPage.cards.zb8.title": "ZB8便携式果汁杯",
      "videoPage.cards.zb8.description": "主打轻盈便携与随行鲜榨，视频演示三档搅拌与安全双击启动的使用细节。",
      "videoPage.cards.smop02.title": "SMOP02电动蒸汽洗地机",
      "videoPage.cards.smop02.description": "30 秒快速出蒸汽，展示同步吸拖、顽渍除菌与多滚刷快速拆洗的高效日常清洁方案。",
      "videoPage.cards.k10.title": "K10电烤炉（空气炸锅）",
      "videoPage.cards.k10.description": "展示上下独立控温与多种配件，更有多道菜谱实拍，帮助快速掌握无油空气炸的技巧。",
      "videoPage.cards.f20.title": "F20挂脖风扇",
      "videoPage.cards.f20.description": "围绕夏日通勤场景拍摄，介绍四段风速、柔性导风口与长续航设计，解锁户外降温体验。",
      "videoPage.cards.dyks01.title": "DY-KS01电热开水瓶",
      "videoPage.cards.dyks01.description": "详解四档控温、双重安全防护与除氯模式，适合家庭婴儿冲调与全天候饮水的场景。",
      "videoPage.cards.dybgx09.title": "DY-BGX09全自动壁挂滚筒洗衣机",
      "videoPage.cards.dybgx09.description": "通过实景卫浴空间展示壁挂节省面积、母婴洗模式与 60℃ 除菌洗，满足小户型洁净需求。",
      "videoPage.cards.dybgx09h.title": "DY-BGX09H全自动壁挂洗烘一体机",
      "videoPage.cards.dybgx09h.description": "升级热泵烘干与智能除菌烘，视频演示衣物容量规划与壁挂安装要点。",
      "videoPage.cards.db01.title": "DB01干衣盒+HI-031折叠蒸汽电熨斗套装",
      "videoPage.cards.db01.description": "展示快速烘干与熨烫一体流程，分享旅行携带方式与衣物护理技巧。",
      "videoPage.cards.hi029pro.title": "HI-029PRO 大宇手持挂烫机",
      "videoPage.cards.hi029pro.description": "展示双喷雾强力除皱、挂烫平烫自由切换，以及便携收纳与自动断电安全提示。",
      "videoPage.cards.hi045.title": "HI-045 大宇 Hobo 手持熨烫机",
      "videoPage.cards.hi045.description": "演示恒温蒸汽、加宽底板与可拆水箱的便携设计，适合旅途与日常快速整理衣物。",
      "videoPage.cards.hi046.title": "HI-046 大宇小圆盒衣物护理机",
      "videoPage.cards.hi046.description": "呈现圆形腔体的蒸汽护理、低温烘干与香薰除味流程，满足精致衣物的随手养护需求。",
      "videoPage.cards.hi050.title": "HI-050 大宇喷熨挂烫机",
      "videoPage.cards.hi050.description": "展示双模式喷熨、大容量水箱与智能温控系统，演示挂烫与平烫的灵活切换与高效除皱效果。",
      "videoPage.cards.dybm05.title": "DY-BM05迷你原汁机",
      "videoPage.cards.dybm05.description": "以清晨厨房场景展示慢速挤压护营养、易拆洗部件与儿童辅食扩展玩法。",
      "videoPage.cards.dysp25f01.title": "DYSP-25F01电热开水瓶",
      "videoPage.cards.dysp25f01.description": "多角度展示大容量储水、定时保温与童锁防烫功能，满足办公室与家庭多人饮水。",
      "videoPage.cards.ph05.title": "PH05 大宇小巨蛋加湿器",
      "videoPage.cards.ph05.description": "展示小巧圆润的蛋形设计、超声波加湿技术与静音运行模式，演示多档湿度调节与自动恒湿功能，适合卧室与办公空间使用。",
      "videoPage.cards.ph06.title": "PH06 大宇无雾加湿器",
      "videoPage.cards.ph06.description": "展示无雾加湿技术、大容量水箱与智能恒湿系统，演示冷蒸发原理与静音运行模式，适合对空气质量有高要求的家庭与办公环境。",
      "videoPage.cards.s30pro.title": "S30PRO 多功能炖蒸煮锅",
      "videoPage.cards.s30pro.description": "展示炖、蒸、煮多功能一体设计，演示大容量内胆、智能控温与分体式清洗，适合家庭日常烹饪与健康饮食需求。",
      "videoPage.cards.s31.title": "S31 多功能蒸汽料理锅",
      "videoPage.cards.s31.description": "展示蒸汽料理技术、多层蒸架设计与智能定时功能，演示快速出蒸汽、营养保留与无油烟烹饪，适合追求健康饮食的现代家庭。",
      "videoPage.cards.dyzm1266.title": "DYZM-1266电煮锅",
      "videoPage.cards.dyzm1266.description": "小容量多功能烹饪演示，覆盖煲汤、火锅与一人食，展示可视盖与分体清洗设计。",
      "videoPage.note.title": "更多视频即将上新",
      "videoPage.note.description": "视频中心会同步更新新品上市、安装指南与客户故事，敬请关注。 如需线下演示或培训资料，请联系 DAEWOO 服务顾问。",
      "videoPage.note.cta": "预约线下体验",
      "contact.hero.eyebrow": "SERVICE NETWORK",
      "contact.hero.title": "多触点联络 DAEWOO 服务团队",
      "contact.hero.description": "24/7 客服热线、在线客服、线下体验与企业顾问全线协同，为消费者、渠道与企业项目提供极速响应与闭环支持。",
      "contact.hero.meta1": "400+ 认证服务网点",
      "contact.hero.meta2": "2 小时问题初反馈",
      "contact.hero.meta3": "7x24 全天候监控",
      "contact.overview.eyebrow": "全场景触点",
      "contact.overview.title": "把问题交给我们，您只需选择入口",
      "contact.overview.description": "以「客服热线 + 智能工单 + 区域服务中心」三位一体模式运行，将家电售前、售后到企业合作需求整合到同一管控平台。",
      "contact.overview.cards.hotline.title": "客服热线",
      "contact.overview.cards.hotline.description": "400-123-0000 · 支持安装咨询、故障报修、保养预约与快速升级服务。",
      "contact.overview.cards.hotline.item1": "7x24 小时人工接听",
      "contact.overview.cards.hotline.item2": "30 秒内响应率 ≥ 95%",
      "contact.overview.cards.hotline.item3": "实时短信回执",
      "contact.overview.cards.online.title": "智能在线客服",
      "contact.overview.cards.online.description": "网页/小程序随时发起对话，AI 识别设备型号并推送图文教程，必要时转人工。",
      "contact.overview.cards.online.item1": "支持图片/视频上传",
      "contact.overview.cards.online.item2": "语音描述自动转文字",
      "contact.overview.cards.online.item3": "记录全程可追溯",
      "contact.overview.cards.partner.title": "渠道与合作",
      "contact.overview.cards.partner.description": "面向经销商、地产/酒店项目与跨界品牌，提供定制化采购、培训与联合营销方案。",
      "contact.overview.cards.partner.item1": "1V1 商务顾问",
      "contact.overview.cards.partner.item2": "多地样板房支持",
      "contact.overview.cards.partner.item3": "共建数据看板",
      "contact.channels.eyebrow": "渠道矩阵",
      "contact.channels.title": "根据角色快速定位最佳联络路径",
      "contact.channels.description": "无论您是终端用户、商用客户还是内容合作伙伴，都能通过专属窗口直接对接到负责团队。",
      "contact.channels.consumer.tag": "消费者",
      "contact.channels.consumer.title": "售后关怀 / 延长质保",
      "contact.channels.consumer.description": "激活产品保修、登记安装信息，或升级包含免费年检、滤芯订阅的延长质保服务。",
      "contact.channels.consumer.item1": "提交发票/序列号在线核验",
      "contact.channels.consumer.item2": "支持家电健康档案同步",
      "contact.channels.consumer.item3": "服务进度消息推送",
      "contact.channels.enterprise.tag": "企业客户",
      "contact.channels.enterprise.title": "项目化交付与培训",
      "contact.channels.enterprise.description": "提交项目需求（酒店、公寓、写字楼等），我们提供选型、安装、交付培训与 SLA。",
      "contact.channels.enterprise.item1": "7 日内完成方案初稿",
      "contact.channels.enterprise.item2": "驻场培训 & 远程指挥",
      "contact.channels.enterprise.item3": "IoT 数据开放接口",
      "contact.channels.content.tag": "内容/渠道伙伴",
      "contact.channels.content.title": "营销与联合 IP",
      "contact.channels.content.description": "对接抖音、天猫、线下体验店等合作，一站式领取素材、排期与新品试用权益。",
      "contact.channels.content.item1": "新品首发排期抢先锁定",
      "contact.channels.content.item2": "共创城市快闪店",
      "contact.channels.content.item3": "获取高分辨率素材库",
      "contact.service.eyebrow": "服务流程",
      "contact.service.title": "统一工单平台，确保每一步可视、可追踪",
      "contact.service.description": "我们以 ITSM 思路打造服务闭环，关键节点透明告知，复杂问题支持专家远程协作。",
      "contact.service.step1.title": "需求受理",
      "contact.service.step1.description": "热线/网页/微信入口自动创建工单，智能分配至对应区域/品类团队。",
      "contact.service.step2.title": "诊断与方案",
      "contact.service.step2.description": "通过远程诊断、图像识别工具快速定位问题，必要时安排上门工程师。",
      "contact.service.step3.title": "执行与反馈",
      "contact.service.step3.description": "系统同步备用件物流、预约时间与现场记录，完工后推送服务报告。",
      "contact.service.step4.title": "回访与升级",
      "contact.service.step4.description": "满意度低于 90% 自动升级复盘，持续优化产品与服务体验。",
      "contact.touchpoint.eyebrow": "专属顾问",
      "contact.touchpoint.title": "需要 VIP/企业级支持？",
      "contact.touchpoint.description": "留下需求，即可由指定行业的顾问联系您。我们将根据预算、交付周期与使用场景提供一体化建议。",
      "contact.touchpoint.item1": "商用楼宇与酒店智能家电集采",
      "contact.touchpoint.item2": "地产精装、长租公寓交付解决方案",
      "contact.touchpoint.item3": "品牌联合营销、体验空间共建",
      "contact.form.name.label": "姓名",
      "contact.form.name.placeholder": "请输入姓名",
      "contact.form.company.label": "公司 / 机构",
      "contact.form.company.placeholder": "请输入公司或机构名称",
      "contact.form.phone.label": "联系方式",
      "contact.form.phone.placeholder": "手机或邮箱",
      "contact.form.intent.label": "需求类别",
      "contact.form.intent.option1": "企业集采",
      "contact.form.intent.option2": "项目交付",
      "contact.form.intent.option3": "营销合作",
      "contact.form.intent.option4": "其他",
      "contact.form.message.label": "补充说明",
      "contact.form.message.placeholder": "请输入您希望了解的内容",
      "contact.form.submit": "提交需求",
      "contact.faq.eyebrow": "常见问题",
      "contact.faq.title": "最快速的自助解答",
      "contact.faq.q1.title": "如何查询维修进度？",
      "contact.faq.q1.answer": "凭工单号/手机号在「在线客服-订单中心」即可查看状态，也可通过短信链接实时刷新。",
      "contact.faq.q2.title": "到店体验是否需要预约？",
      "contact.faq.q2.answer": "周末/新品首发建议提前在线预约，系统会推送二维码，凭码入场并享受专属讲解。",
      "contact.faq.q3.title": "企业项目是否支持定制？",
      "contact.faq.q3.answer": "支持 OEM/ODM、面板配色、软件功能定制，提交需求后将由项目经理提供排期与打样方案。",
      "contact.faq.q4.title": "滤芯、配件如何购买？",
      "contact.faq.q4.answer": "在商城/服务号选择对应产品并填写 SN，即可匹配适配件；也可到附近服务中心直接购买。",
      "about.hero.eyebrow": "BRAND STORY",
      "about.hero.title": "用精品家电重新定义东方生活美学",
      "about.hero.description": "1967 年诞生于韩国首尔，DAEWOO 以技术创新与审美力著称，如今在家电、健康生活与智能物联领域持续向全球家庭和商业客户输出高品质解决方案。",
      "about.hero.meta1": "业务覆盖 60+ 国家",
      "about.hero.meta2": "3500+ 技术专利",
      "about.hero.meta3": "22 个区域创新实验室",
      "about.pillars.eyebrow": "核心理念",
      "about.pillars.title": "支撑 DAEWOO 可持续增长的三大支柱",
      "about.pillars.description": "我们坚持以用户洞察驱动设计，以工程实力确保品质，以生态协作为全球伙伴创造价值。",
      "about.pillars.card1.title": "以人为本的设计",
      "about.pillars.card1.description": "在首尔、上海、米兰设立设计工作室，跨界建筑、材料与交互专家，共同探索东方家庭的生活灵感。",
      "about.pillars.card1.item1": "年度消费者洞察报告",
      "about.pillars.card1.item2": "Color & Material 实验室",
      "about.pillars.card1.item3": "联合博物馆/艺术家展出",
      "about.pillars.card2.title": "工程与供应链协同",
      "about.pillars.card2.description": "以模块化平台支撑产品开发，整合韩国研发、中国智造与全球供应商，实现稳定可靠的交付。",
      "about.pillars.card2.item1": "智能制造云控中心",
      "about.pillars.card2.item2": "零部件可追溯链路",
      "about.pillars.card2.item3": "48h 快速备件履约",
      "about.pillars.card3.title": "伙伴共赢生态",
      "about.pillars.card3.description": "开放 API、联合营销、技术培训与售后网络，共同打造覆盖全生命周期的服务体验。",
      "about.pillars.card3.item1": "全球体验共建计划",
      "about.pillars.card3.item2": "渠道伙伴成长营",
      "about.pillars.card3.item3": "品牌共创基金",
      "about.stats.item1.title": "12 大产品事业部",
      "about.stats.item1.description": "覆盖厨房、空气、水健康、个人护理、智能物联等全场景。",
      "about.stats.item2.title": "4 个区域总部",
      "about.stats.item2.description": "首尔、上海、慕尼黑、洛杉矶协同全球研发与供应。",
      "about.stats.item3.title": "97% 客户满意度",
      "about.stats.item3.description": "基于 NPS 指标持续改进用户体验与售后服务。",
      "about.stats.item4.title": "25% 绿色营收占比",
      "about.stats.item4.description": "节能/环保型产品与回收计划持续扩大。",
      "about.story.eyebrow": "发展策略",
      "about.story.title": "从精品家电到智慧生活服务商",
      "about.story.description": "DAEWOO 将「高颜值、易操作、轻维护」作为研发底层逻辑，结合 IoT 平台与数据算法，让产品不仅是工具，更是有温度的生活伙伴。",
      "about.story.item1": "全场景互联：厨房、卫浴、空气、水饮与清洁统一在 DAEWOO Home OS。",
      "about.story.item2": "数据驱动迭代：基于真实使用数据优化能效、安全与舒适性。",
      "about.story.item3": "服务即产品：售后团队与顾问团队参与产品定义，构建「一站式托管」。",
      "about.timeline.eyebrow": "里程碑",
      "about.timeline.title": "重要节点一览",
      "about.timeline.item1.title": "品牌创立",
      "about.timeline.item1.description": "在韩国首尔启动家电制造业务，以创新与可靠性著称。",
      "about.timeline.item2.title": "进入中国市场",
      "about.timeline.item2.description": "与中国制造基地协同，打造适配本土生活方式的爆款产品。",
      "about.timeline.item3.title": "智能家电平台",
      "about.timeline.item3.description": "推出 DAEWOO Smart Hub，实现设备联动与云端维护。",
      "about.timeline.item4.title": "全球精品策略",
      "about.timeline.item4.description": "以设计力与用户体验重新定义精品小家电赛道，荣获多项国际大奖。",
      "about.timeline.item5.title": "可持续目标",
      "about.timeline.item5.description": "承诺生产基地 100% 使用绿色电力，并实现主要产品可回收设计。",
      "about.csr.eyebrow": "可持续行动",
      "about.csr.title": "不仅是产品，更是对地球的承诺",
      "about.csr.description": "我们在研发、制造、物流、使用与回收全链路推进 ESG 目标，以实证数据衡量影响力。",
      "about.csr.item1": "2030 年实现核心品类碳排放减半",
      "about.csr.item2": "以旧换新与回收计划覆盖 120 个城市",
      "about.csr.item3": "建立家电再制造工厂，实现零填埋",
      "about.csr.stat1": "包装材料使用可再生纸浆",
      "about.csr.stat2": "累计减少二氧化碳排放",
      "about.csr.stat3": "公益课堂与技能培训",
      "about.partners.eyebrow": "合作网络",
      "about.partners.title": "与行业伙伴共建未来生活方式",
      "about.partners.description": "我们与地产、酒店、家居、内容平台及零售渠道建立长期合作，共享技术、运营与用户资产。",
      "about.partners.card1.title": "地产与空间运营",
      "about.partners.card1.description": "提供整套智慧样板房、集中式公寓、长租社区家电解决方案。",
      "about.partners.card1.item1": "批量安装与维保服务",
      "about.partners.card1.item2": "入住即用的能源管理",
      "about.partners.card1.item3": "精装定制色彩/材质",
      "about.partners.card2.title": "零售与内容平台",
      "about.partners.card2.description": "携手线上线下渠道，打造沉浸式体验与内容共创，放大品牌影响力。",
      "about.partners.card2.item1": "共建体验店与快闪店",
      "about.partners.card2.item2": "直播技术与培训支持",
      "about.partners.card2.item3": "共享数字人货场数据",
      "about.partners.card3.title": "技术生态伙伴",
      "about.partners.card3.description": "开放 IoT、AI、材料等技术接口，与芯片、传感器、互联网企业共创。",
      "about.partners.card3.item1": "开发者平台与沙箱",
      "about.partners.card3.item2": "联合实验室与标准制定",
      "about.partners.card3.item3": "多方安全与隐私治理",
      "productCenter.eyebrow": "产品中心",
      "productCenter.title": "探索 DAEWOO 全品类解决方案",
      "productCenter.description": "从家庭到商业，我们为不同场景提供可靠的产品与服务组合。挑选适合您的系列，轻松了解规格、应用及支持信息。",
      "productCenter.sidebarLabel": "产品目录",
      "productCenter.sidebarTitle": "产品分类",
      "productCenter.sidebarNavLabel": "产品分类导航",
      "productCenter.noteTitle": "选购贴士",
      "productCenter.noteDescription": "先选择系列，再查看对应型号的功能亮点与配套服务，获得专属的解决方案建议。",
      "productCenter.collection": "产品系列",
      "productCenter.badgeNew": "新品",
      "productCenter.home.description": "覆盖厨房、清洁与空气改善等多种家庭场景，助力健康便捷生活。",
      "productCenter.cards.t2311.category": "两季电器 · 取暖器",
      "productCenter.cards.t2311.title": "T2311AYV 踢脚线取暖器",
      "productCenter.cards.dytn33.category": "母婴电器 · 调奶器",
      "productCenter.cards.dytn33.title": "DY-TN33 液体加热器（便携双模调奶器）",
      "productCenter.cards.s30pro.category": "厨房电器 · 电煮锅",
      "productCenter.cards.s30pro.title": "S30PRO 多功能炖蒸煮锅",
      "productCenter.cards.viewDetails": "查看详情",
      "productCenter.home.card1.summary": "采用风冷无霜与精控恒温系统，保持食材原鲜口感。",
      "productCenter.home.card1.meta1": "容量 600L，支持可调冷藏区",
      "productCenter.home.card1.meta2": "AI 智能补水保鲜模式",
      "productCenter.home.card1.meta3": "手机远程控温与告警推送",
      "productCenter.home.card2.summary": "45 分钟速洗烘，智能投放洗剂，一键匹配最优模式。",
      "productCenter.home.card2.meta1": "铂金离子除菌，呵护敏感肌",
      "productCenter.home.card2.meta2": "16 种程序，支持自定义记忆",
      "productCenter.home.card2.meta3": "全屋互联，一键预约",
      "productCenter.home.card3.summary": "双向循环净化系统，30 分钟全屋空气焕新。",
      "productCenter.home.card3.meta1": "PM0.1 级滤净力",
      "productCenter.home.card3.meta2": "静音睡眠模式低至 19dB",
      "productCenter.home.card3.meta3": "传感器实时监测空气质量",
      "productCenter.home.tablistLabel": "家用电器分类切换",
      "productCenter.home.tabLarge": "大型家电",
      "productCenter.home.tabSmall": "小型家电",
      "productCenter.home.more": "查看全部",
      "productCenter.home.large.refrigerator.title": "冰箱系列",
      "productCenter.home.large.refrigerator.description": "覆盖法式多门、风冷对开门等系列，满足大容量保鲜需求。",
      "productCenter.home.large.refrigerator.item1": "法式多门冰箱",
      "productCenter.home.large.refrigerator.item2": "风冷对开门",
      "productCenter.home.large.refrigerator.item3": "嵌入式薄体柜",
      "productCenter.home.large.refrigerator.item4": "玻璃面板系列",
      "productCenter.home.large.airConditioner.title": "空调系列",
      "productCenter.home.large.airConditioner.description": "提供变频壁挂及客厅柜机，舒适控温更节能。",
      "productCenter.home.large.airConditioner.item1": "变频壁挂式",
      "productCenter.home.large.airConditioner.item2": "立式客厅柜机",
      "productCenter.home.large.airConditioner.item3": "新风净化系统",
      "productCenter.home.large.airConditioner.item4": "一级能效系列",
      "productCenter.home.large.tv.title": "电视系列",
      "productCenter.home.large.tv.description": "超高清显示与智慧影音体验，打造家庭影院。",
      "productCenter.home.large.tv.item1": "Mini LED 旗舰",
      "productCenter.home.large.tv.item2": "超高清全面屏",
      "productCenter.home.large.tv.item3": "智能语音控制",
      "productCenter.home.large.tv.item4": "护眼模式",
      "productCenter.home.large.wineCabinet.title": "酒柜系列",
      "productCenter.home.large.wineCabinet.description": "恒温恒湿酒柜，为私人酒窖提供专业存储方案。",
      "productCenter.home.large.wineCabinet.item1": "多温区恒温系统",
      "productCenter.home.large.wineCabinet.item2": "分层储酒设计",
      "productCenter.home.large.wineCabinet.item3": "活性炭净味",
      "productCenter.home.large.wineCabinet.item4": "可视玻璃门",
      "productCenter.home.large.dryer.title": "烘干机系列",
      "productCenter.home.large.dryer.description": "热泵烘干技术，快速烘干衣物同时呵护面料。",
      "productCenter.home.large.dryer.item1": "热泵烘干机",
      "productCenter.home.large.dryer.item2": "智能除皱程序",
      "productCenter.home.large.dryer.item3": "羊毛柔烘模式",
      "productCenter.home.large.dryer.item4": "筒自洁系统",
      "productCenter.home.large.washerDryer.title": "洗衣干衣机",
      "productCenter.home.large.washerDryer.description": "洗烘一体整合空间，满足家庭多场景洗护需求。",
      "productCenter.home.large.washerDryer.item1": "洗烘一体机",
      "productCenter.home.large.washerDryer.item2": "蒸汽除螨",
      "productCenter.home.large.washerDryer.item3": "极速快洗",
      "productCenter.home.large.washerDryer.item4": "手机互联控制",
      "productCenter.home.large.warmingDrawer.title": "嵌入式保温抽屉",
      "productCenter.home.large.warmingDrawer.description": "餐具恒温存放，满足家庭聚餐与多菜品备餐需求。",
      "productCenter.home.large.warmingDrawer.item1": "多段恒温调节",
      "productCenter.home.large.warmingDrawer.item2": "宽幅储物容量",
      "productCenter.home.large.warmingDrawer.item3": "缓启缓关设计",
      "productCenter.home.large.warmingDrawer.item4": "嵌入式无缝安装",
      "productCenter.home.small.kitchen.title": "厨房电器",
      "productCenter.home.small.kitchen.description": "围绕烹饪与饮品场景，提供多功能智能厨房电器。",
      "productCenter.home.small.kitchen.item1": "破壁机",
      "productCenter.home.small.kitchen.item2": "空气炸锅",
      "productCenter.home.small.kitchen.item3": "多功能料理锅",
      "productCenter.home.small.kitchen.item4": "蒸烤箱",
      "productCenter.home.small.living.title": "生活电器",
      "productCenter.home.small.living.description": "居家清洁与空气改善，一站式生活电器选择。",
      "productCenter.home.small.living.item1": "扫地机器人",
      "productCenter.home.small.living.item2": "加湿器",
      "productCenter.home.small.living.item3": "空气循环扇",
      "productCenter.home.small.living.item4": "除螨仪",
      "productCenter.home.small.maternal.title": "母婴电器",
      "productCenter.home.small.maternal.description": "关注妈妈与宝宝的日常，贴心守护每一步成长。",
      "productCenter.home.small.maternal.item1": "辅食机",
      "productCenter.home.small.maternal.item2": "暖奶器",
      "productCenter.home.small.maternal.item3": "消毒烘干箱",
      "productCenter.home.small.maternal.item4": "婴儿理发器",
      "productCenter.home.small.seasonal.title": "两季电器",
      "productCenter.home.small.seasonal.description": "应对四季温度变化，打造舒适居住环境。",
      "productCenter.home.small.seasonal.item1": "冷暖扇",
      "productCenter.home.small.seasonal.item2": "温控取暖器",
      "productCenter.home.small.seasonal.item3": "暖风机",
      "productCenter.home.small.seasonal.item4": "制冰机",
      "productCenter.smart.description": "构建互联互通的智慧生活空间，实现场景化自动控制。",
      "productCenter.smart.card1.summary": "支持 200+ 设备互联，统一控制照明、安防与环境。",
      "productCenter.smart.card1.meta1": "Matter 协议兼容",
      "productCenter.smart.card1.meta2": "多端语音与 App 控制",
      "productCenter.smart.card1.meta3": "家庭成员权限管理",
      "productCenter.smart.card2.summary": "超清夜视与智能识别，异常行为自动推送手机通知。",
      "productCenter.smart.card2.meta1": "AI 区分家人/访客/宠物",
      "productCenter.smart.card2.meta2": "断电续航 12 小时",
      "productCenter.smart.card2.meta3": "银行级数据加密",
      "productCenter.smart.card3.summary": "自定义场景灯光与昼夜节律，提升居家氛围体验。",
      "productCenter.smart.card3.meta1": "千万种色温搭配",
      "productCenter.smart.card3.meta2": "多重安全认证与低功耗",
      "productCenter.smart.card3.meta3": "支持语音与动作联动",
      "productCenter.commercial.description": "面向餐饮、酒店与公共空间，提供稳定高效的商用设备组合。",
      "productCenter.commercial.card1.summary": "模块化组合冷柜，精准控温，保障食材安全。",
      "productCenter.commercial.card1.meta1": "-30℃~10℃ 宽温域",
      "productCenter.commercial.card1.meta2": "内置 HACCP 追溯系统",
      "productCenter.commercial.card1.meta3": "7*24 远程维保",
      "productCenter.commercial.card2.summary": "一机完成蒸、烤、焖等多种烹饪工序，效率翻倍。",
      "productCenter.commercial.card2.meta1": "10 组程序一键调用",
      "productCenter.commercial.card2.meta2": "智能排风与油烟过滤",
      "productCenter.commercial.card2.meta3": "耐用不锈钢腔体",
      "productCenter.commercial.card3.summary": "满足商务楼宇及公共空间的大流量净水需求。",
      "productCenter.commercial.card3.meta1": "多级膜分离滤芯",
      "productCenter.commercial.card3.meta2": "全生命周期维护计划",
      "productCenter.commercial.card3.meta3": "实时水质监测面板",
      "productCenter.care.description": "关注日常美容与健康管理，为个人与家庭提供贴心呵护。",
      "productCenter.care.card1.summary": "57℃ 恒温护发，搭配高浓度负离子，快速干发不伤发。",
      "productCenter.care.card1.meta1": "四种风嘴磁吸更换",
      "productCenter.care.card1.meta2": "智能温控防过热",
      "productCenter.care.card1.meta3": "旅行折叠设计",
      "productCenter.care.card2.summary": "四合一护理模式，改善肤质与紧致弹性。",
      "productCenter.care.card2.meta1": "RF 射频 / EMS 提拉",
      "productCenter.care.card2.meta2": "LED 光疗可调",
      "productCenter.care.card2.meta3": "自动记录使用数据",
      "productCenter.care.card3.summary": "16 项身体指标精准测量，提供健康趋势洞察。",
      "productCenter.care.card3.meta1": "AI 分析身体年龄",
      "productCenter.care.card3.meta2": "家庭成员独立档案",
      "productCenter.care.card3.meta3": "微信/APP 双平台同步",
      "productCenter.wearable.description": "将科技融入日常出行、运动与健康管理，轻松掌握生活节奏。",
      "productCenter.wearable.card1.summary": "专业运动监测与多星定位，户外运动更安心。",
      "productCenter.wearable.card1.meta1": "支持 100+ 运动模式",
      "productCenter.wearable.card1.meta2": "双频 GPS + 北斗定位",
      "productCenter.wearable.card1.meta3": "14 天长续航",
      "productCenter.wearable.card2.summary": "自适应噪声控制，通勤与飞行环境保持纯净音质。",
      "productCenter.wearable.card2.meta1": "42dB 深度降噪",
      "productCenter.wearable.card2.meta2": "低延迟游戏模式",
      "productCenter.wearable.card2.meta3": "无线充电与快充",
      "productCenter.wearable.card3.summary": "三段风速、环绕送风，夏日出行随时降温。",
      "productCenter.wearable.card3.meta1": "轻量硅胶材质",
      "productCenter.wearable.card3.meta2": "支持 Type-C 快速充电",
      "productCenter.wearable.card3.meta3": "磁吸折叠便携",
      "productCenter.digital.description": "聚焦影音娱乐与移动办公，打造灵动高效的数码体验。",
      "productCenter.digital.card1.summary": "4K 超清画质，智能对焦与自动梯形校正，随时构建家庭影院。",
      "productCenter.digital.card1.meta1": "2800 ANSI 流明",
      "productCenter.digital.card1.meta2": "杜比全景声",
      "productCenter.digital.card1.meta3": "无屏电视体验",
      "productCenter.digital.card2.summary": "360° 翻转，触控笔书写，兼顾创作与办公效率。",
      "productCenter.digital.card2.meta1": "OLED 120Hz 触控屏",
      "productCenter.digital.card2.meta2": "长续航快充组合",
      "productCenter.digital.card2.meta3": "AI 智能降噪会议麦克风",
      "productCenter.digital.card3.summary": "无墨热敏打印，支持照片与便签一键输出。",
      "productCenter.digital.card3.meta1": "蓝牙双设备连接",
      "productCenter.digital.card3.meta2": "多种模板即用",
      "productCenter.digital.card3.meta3": "续航 7 天待机",
      "productCenter.others.description": "更多定制化或季节性产品，满足多元化的业务与生活需求。",
      "productCenter.others.card1.summary": "为企业客户和渠道伙伴提供专属礼品组合与品牌定制。",
      "productCenter.others.card1.meta1": "多品类灵活组合",
      "productCenter.others.card1.meta2": "可选专属包装设计",
      "productCenter.others.card1.meta3": "提供售后与物流服务",
      "productCenter.others.card2.summary": "针对公共与商业空间，打造节能、低碳的综合应用方案。",
      "productCenter.others.card2.meta1": "能效评估与改造咨询",
      "productCenter.others.card2.meta2": "整合 IoT 能耗监测",
      "productCenter.others.card2.meta3": "生命周期维护服务",
      "productCenter.others.card3.summary": "延长保修与上门保养服务，为设备运行提供保障。",
      "productCenter.others.card3.meta1": "多年期保修可选",
      "productCenter.others.card3.meta2": "原厂工程师上门",
      "productCenter.others.card3.meta3": "快速响应服务网络",
      "productCenter.service.heading": "获取专属产品咨询与服务方案",
      "productCenter.service.description": "提交您的需求，我们的顾问团队将提供选型建议、安装规划，以及售后支持安排。",
      "productCenter.service.ctaPrimary": "联系顾问",
      "productCenter.service.ctaSecondary": "预约服务中心",
      "product.description.title": "产品描述",
      "productCenter.comingSoon.title": "产品即将上线",
      "productCenter.comingSoon.description": "敬请期待",
      "hero.title": "与 DAEWOO 一起体验全新服务",
      "hero.description": "凭借创新客户支持与可靠技术实力，为您的安心生活提供全面保障。",
      "footer.copy": "© 2025 DAEWOO SERVICE CO., LTD. 保留所有权利。",
      "hero.prev": "上一张横幅",
      "hero.next": "下一张横幅",
    },
    ko: {
      "brand.name": "DAEWOO 서비스",
      "search.label": "검색어 입력",
      "search.placeholder": "궁금하신 내용을 검색해주세요",
      "search.button": "검색",
      "search.results.heading": "검색 결과",
      "search.results.hint": "제품·뉴스·영상 키워드를 입력하면 검색이 시작됩니다",
      "search.results.empty": "일치하는 콘텐츠가 없습니다. 다른 키워드를 입력해 주세요",
      "search.results.products": "제품",
      "search.results.news": "뉴스",
      "search.results.videos": "영상",
      "search.results.loading": "검색 데이터를 불러오는 중…",
      "search.results.viewAll": "전체 보기",
      "search.results.remaining": "추가 {{count}}건의 결과",
      "search.results.count": "총 {{count}}건",
      "search.results.shortQuery": "영문/숫자는 최소 2자 이상 입력해 주세요",
      "search.results.close": "검색 닫기",
      "lang.selector": "언어 선택",
      "lang.selectorAria": "언어 선택기",
      "lang.zh": "중국어",
      "lang.ko": "한국어",
      "lang.en": "영어",
      "nav.toggle": "전체 메뉴",
      "nav.label": "DAEWOO 메인 내비게이션",
      "nav.product": "제품 센터",
      "nav.news": "뉴스 & 공지",
      "nav.video": "영상 센터",
      "nav.contact": "문의하기",
      "nav.about": "회사 개요",
      "nav.language": "LANGUAGE",
      "mobileNav.toggle": "모바일 메뉴 열기",
      "mobileNav.panelLabel": "DAEWOO 모바일 메뉴",
      "mobileNav.close": "메뉴 닫기",
      "panel.product.heading": "제품 카테고리",
      "panel.product.home": "가습기",
      "panel.product.smartHome": "다리미",
      "panel.product.commercial": "쿠커",
      "panel.product.personalCare": "주서기",
      "panel.product.wearable": "스마트 웨어러블",
      "panel.product.digital": "스마트 디지털",
      "panel.product.others": "기타 제품",
      "panel.news.heading": "뉴스 채널",
      "panel.news.latest": "뉴스 & 업계 소식",
      "panel.video.heading": "추천 영상",
      "panel.video.hi029pro": "HI-029PRO 대우 핸디 스팀 다리미",
      "panel.video.hi045": "HI-045 대우 Hobo 핸디 다리미",
      "panel.video.hi046": "HI-046 대우 미니 라운드 케어 머신",
      "panel.video.hi050": "HI-050 대우 스프레이 스팀 다리미",
      "panel.video.ph05": "PH05 대우 미니 에그 가습기",
      "panel.video.ph06": "PH06 대우 무안개 가습기",
      "panel.video.s30pro": "S30PRO 멀티 쿠커",
      "panel.video.s31": "S31 멀티 스팀 쿠커",
      "panel.video.more": "더보기",
      "panel.contact.heading": "연락 경로",
      "panel.contact.hotline": "고객센터 400-123-0000",
      "panel.contact.online": "온라인 상담",
      "panel.contact.center": "센터 방문 예약",
      "panel.contact.partner": "파트너 지원",
      "panel.contact.feedback": "의견 보내기",
      "panel.about.heading": "DAEWOO 회사 개요",
      "panel.about.story": "브랜드 스토리",
      "panel.about.timeline": "연혁",
      "panel.about.leadership": "경영진 소개",
      "panel.about.csr": "사회공헌",
      "panel.about.partner": "파트너십",
      "panel.language.heading": "언어 선택",
      "panel.language.description": "원하시는 언어를 선택하시면 사이트가 해당 언어로 제공됩니다.",
      "panel.language.locale.zh": "중국어(간체)",
      "panel.language.locale.ko": "한국어",
      "panel.language.locale.en": "영어",
      "productInterest.heading": "관심 있는 제품을 선택하세요",
      "productInterest.fridge": "냉장고",
      "productInterest.riceCooker": "전기 밥솥",
      "productInterest.soymilk": "두유 제조기",
      "productInterest.juicer": "주서기",
      "productInterest.iceMaker": "제빙기",
      "productInterest.blender": "블렌더",
      "productInterest.babyFood": "유아식 제조기",
      "productInterest.robotVacuum": "로봇 청소기",
      "productInterest.hairDryer": "헤어 드라이어",
      "productInterest.humidifier": "가습기",
      "productInterest.waterDispenser": "정수/냉온수기",
      "productInterest.waterPurifier": "정수기",
      "productInterest.fan": "선풍기",
      "productInterest.heater": "난방기",
      "homeVideo.eyebrow": "영상 센터",
      "homeVideo.title": "몰입형 영상 미리보기",
      "homeVideo.description": "대표 제품 데모 3편으로 DAEWOO 영상 센터의 핵심 콘텐츠를 빠르게 확인하세요.",
      "homeVideo.watch": "영상 보기",
      "homeVideo.cta": "영상 센터 바로가기",
      "homeNews.eyebrow": "뉴스",
      "homeNews.title": "최신 소식과 업계 인사이트",
      "homeNews.description": "DAEWOO의 최신 뉴스, 제품 발표, 업계 인사이트를 한눈에 확인하세요.",
      "homeNews.more": "뉴스 더보기",
      "homeNews.article6.title": "DAEWOO 스마트 비데 좌변기 주요 기능",
      "homeNews.article6.summary": "자동 개폐, 미세 버블 세정, 온열 시트로 편안한 사용감을 제공합니다.",
      "homeNews.article5.title": "DAEWOO 스마트 비데 좌변기 소개",
      "homeNews.article5.summary": "다양한 세정 모드와 온풍 건조, 전해수 살균으로 위생적인 욕실을 완성합니다.",
      "homeNews.article4.title": "도우 818 틱톡 페스티벌에서 프리미엄 가전 매출 1위 달성",
      "homeNews.article4.summary": "고성능·고감도의 제품이 라이브 커머스 무대에서 돋보이며 판매 1위를 차지했습니다.",
      "homeNews.article3.title": "DAEWOO 가전이 중국에서 꾸준히 사랑받는 이유",
      "homeNews.article3.summary": "프리미엄 전략과 사용자 통찰로 현지 소비자에게 지속적인 인기를 얻고 있습니다.",
      "newsPage.hero.title": "뉴스 & 업계 인사이트",
      "newsPage.hero.description": "DAEWOO의 브랜드 소식, 업계 인사이트, 제품 스토리와 서비스 정보를 만나보세요.",
      "newsPage.breadcrumb.label": "뉴스 내비게이션",
      "newsPage.breadcrumb.home": "홈",
      "newsPage.breadcrumb.current": "뉴스 & 업계 인사이트",
      "newsPage.backHome": "홈으로 돌아가기",
      "newsPage.article2.title": "대우 벽걸이 세탁기 네뷸라 출시, 품질에 대한 끝없는 도전",
      "newsPage.article2.summary": "네뷸라 시리즈는 공간을 절약하는 벽걸이 세탁기의 장점을 유지하면서, 아기 옷 전용 케어 기능을 더해 프리미엄 세탁 니즈를 충족합니다.",
      "newsPage.article1.title": "AWE2021: 대우전자가 중국 시장에 집중하는 이유",
      "newsPage.article1.summary": "중국 가전·소비전자 박람회의 현장을 통해 대우전자가 중국 시장에 투자하며 얻은 전략과 성과를 전합니다.",
      "newsPage.hero.eyebrow": "NEWSROOM",
      "newsPage.spotlight.eyebrow": "Focus · 주요 이슈",
      "newsPage.spotlight.description": "감지형 자동 커버, 소프트 버블 세정, 온열 시트 등 핵심 기능을 실제 사용 장면으로 소개하고 설치 및 일상 관리 팁을 제공합니다.",
      "newsPage.spotlight.bullet1": "자동 커버, 온풍 건조, 전해수 살균 등 핵심 포인트를 전 과정에서 상세히 안내",
      "newsPage.spotlight.bullet2": "사용자 후기와 실제 공간을 결합해 욕실 업그레이드 아이디어를 제안",
      "newsPage.spotlight.bullet3": "유지보수 단계와 A/S 가이드를 포함해 유통 파트너가 활용하기 쉽도록 구성",
      "newsPage.spotlight.cta": "전체 기사 보기",
      "newsPage.collections.eyebrow": "News Library",
      "newsPage.collections.title": "테마별 기사 모음",
      "newsPage.collections.description": "브랜드 동향, 산업 트렌드, 신제품, 서비스 스토리 등 관심 주제를 카드 형태로 빠르게 탐색하세요.",
      "newsPage.filters.all": "전체",
      "newsPage.filters.brand": "브랜드 동향",
      "newsPage.filters.trend": "산업 트렌드",
      "newsPage.filters.product": "신제품",
      "newsPage.filters.service": "서비스 & 평판",
      "newsPage.tags.brand": "#브랜드 동향",
      "newsPage.tags.trend": "#산업 트렌드",
      "newsPage.tags.product": "#신제품",
      "newsPage.tags.service": "#서비스 & 평판",
      "newsPage.note.title": "상시 업데이트 · 콘텐츠 캘린더",
      "newsPage.note.description": "뉴스룸은 신제품 출시, 채널 이슈, 고객 스토리, 서비스 사례를 실시간으로 전달합니다. 월간 뉴스레터 구독이나 맞춤 자료가 필요하면 DAEWOO 컨설턴트에게 문의하세요.",
      "newsPage.note.cta": "구독 및 제휴 문의",
      "newsArticle.publishedLabel": "발행일: ",
      "newsArticle1.title": "AWE2021: DAEWOO, 중국 시장에 깊이 뿌리내리다",
      "newsArticle1.heroDescription": "2021년 3월 23~25일, 상하이 국가전시컨벤션센터에서 열린 중국 가전·소비전자 박람회(AWE)가 성황리에 막을 내렸습니다.",
      "newsArticle1.body1": "한국을 대표하는 글로벌 브랜드 DAEWOO는 탄탄한 연구·기술력을 바탕으로 이번 전시에서도 강렬한 존재감을 드러냈습니다.",
      "newsArticle1.body2": "최신 스팀 물걸레와 무선 진드기 청소기뿐 아니라 HI-029 핸드 스티머, S11 멀티 쿠커 등 대표 제품도 한자리에 선보였습니다.",
      "newsArticle1.body3": "특히 DAEWOO 주방 라인업의 스타 제품인 S11 멀티 쿠커는 AWE 아이플랜 ‘골드 워드오브마우스’ 상을 수상했습니다.",
      "newsArticle1.body4": "‘스마트 라이프의 오스카’로 불리는 이 상은 업계와 소비자가 모두 인정한 증거로, S11이 시장을 선도하고 있음을 보여줍니다.",
      "newsArticle1.body5": "현장 관람객들은 멀티 쿠커와 스티머를 직접 체험하고, 스태프로부터 생생한 사용 팁을 들으며 제품 매력을 확인했습니다.",
      "newsArticle2.title": "DAEWOO 벽걸이 세탁기 네뷸라 출시, 품질에 대한 끝없는 도전",
      "newsArticle2.heroDescription": "최근 DAEWOO 벽걸이 세탁기 시리즈가 신제품 ‘네뷸라’를 선보이며 라이프스타일 인플루언서들의 주목을 받았습니다.",
      "newsArticle2.body1": "벽걸이 세탁기 개척자인 DAEWOO는 네뷸라에 공간 효율성과 살균·섬세 케어를 그대로 담고, 자동 세제 투입·중도 투입·빠른 세탁건조 등 실용 기능을 더했습니다.",
      "newsArticle2.body2": "ID 디자인에서도 짙은 베이스 컬러에 네뷸라 감성의 그라데이션을 더해 로맨틱한 분위기를 완성했습니다.",
      "newsArticle2.body3": "끊임없는 혁신과 아름다운 사용자 경험, 그리고 기능을 넘어선 휴먼 터치가 바로 DAEWOO 제품 철학의 핵심입니다.",
      "newsArticle2.body4": "이 철학은 전 제품군으로 확장되어, 세탁기·냉장고·의류 관리기부터 조리 가전까지 일상 전 영역의 경험 가치를 높이고 있습니다.",
      "newsArticle2.body5": "DAEWOO는 빠른 생활 리듬에 맞춰 휴대·다용도·쉽게 세척할 수 있는 디테일을 강화해 ‘편리함’을 거듭 진화시켰으며, 벽걸이 세탁기는 육아 가정의 든든한 도우미가 되었습니다.",
      "newsArticle2.body6": "제품마다 섬세함과 미감을 담아내며 인플루언서와 헤드 셀러의 사랑을 받고, 여러 제품이 ‘티몰 V-랭킹’에도 이름을 올렸습니다.",
      "newsArticle2.body7": "철저한 검증을 거치는 톱 크리에이터가 선택했다는 사실은 품질을 입증하며, AWE의 골드 워드오브마우스 수상 역시 사용 경험과 미학을 동시에 잡은 결과입니다.",
      "newsArticle2.body8": "DAEWOO는 이미 60여 개국에서 수많은 가정을 만나고 있으며, 더 많은 사람이 삶의 여유를 느끼도록 돕겠다는 목표를 이어갑니다.",
      "newsArticle3.title": "DAEWOO 가전이 중국에서 꾸준히 사랑받는 이유",
      "newsArticle3.heroDescription": "1967년 창립한 DAEWOO는 자동차·중장비·부동산·자원개발·가전 5대 사업을 보유한 한국의 대표 기업으로 성장했으며, 중국에서는 프리미엄 가전 브랜드로 널리 알려져 있습니다.",
      "newsArticle3.body1": "업계 분석에 따르면 DAEWOO는 최근 4년 연속 두 배 이상의 성장률을 기록하며 북鼎·모피·샤오숭과 함께 신 소비 가전 1군에 올라섰습니다.",
      "newsArticle3.body2Title": "포춘 글로벌 500대 기업 상위 200위",
      "newsArticle3.body2": "자동차 산업에서 출발한 DAEWOO는 60여 개국 164개의 해외 거점을 보유한 글로벌 기업으로 성장했습니다.",
      "newsArticle3.body3": "3500건이 넘는 특허와 흔들림 없는 품질 기준, 동양 미학을 반영한 디자인이 기대 이상의 경험을 제공합니다.",
      "newsArticle3.body4Title": "54년간 이어온 가전 연구",
      "newsArticle3.body4": "창업자 김 회장은 가족을 더 잘 돌보고 싶다는 마음으로 가전 사업을 시작했고, 축적된 기술을 생활 속 제품으로 구현했습니다.",
      "newsArticle3.body5": "54년간 축적된 제품군은 주방·생활 소형가전부터 대형가전에 이르기까지 삶의 모든 순간을 세심하게 지원합니다.",
      "newsArticle3.body6Title": "사용자가 인정한 ‘골드 워드오브마우스’",
      "newsArticle3.body6": "2021년 AWE에서 DAEWOO 멀티 쿠커가 골드 워드오브마우스 상을 수상하며, 중국 프리미엄 전략의 성과를 입증했습니다.",
      "newsArticle3.body7": "동양 감성과 중국 생활 습관을 이해하기 위해 한국 대통령상 수상 디자이너가 참여해 장기 리서치를 진행했습니다.",
      "newsArticle3.body8": "제품 미학과 사용 경험이 결합되며 선풍기·스티머·전기포트 등 다수 제품이 현상급 인기를 얻고 헤드 셀러 라이브에 꾸준히 초대되고 있습니다.",
      "newsArticle3.body9": "DAEWOO의 성공은 동양적 라이프스타일과 기술 역량, 그리고 정교한 중국 제조 파트너십이 어우러진 결과입니다.",
      "newsArticle4.title": "DAEWOO, 틱톡 818 신트렌드 페스티벌에서 판매 1위 달성",
      "newsArticle4.heroDescription": "DAEWOO의 인기 스티머가 틱톡 818 신트렌드 페스티벌에서 하루 만에 매출 1000% 이상 성장하며 다수 카테고리 1위를 기록했습니다.",
      "newsArticle4.body1": "1967년 창립 이후 DAEWOO는 기술과 장인 정신을 결합해 더 나은 삶을 만드는 프리미엄 가전을 만들어 왔습니다.",
      "newsArticle4.body2": "각 시대마다 ‘신선한 가전’으로 불린 제품을 선보였고, 중국 시장에서도 글로벌 제조 역량과 중식 라이프스타일 통찰을 결합한 철학을 보여줍니다.",
      "newsArticle4.body3": "생활·주방·라이프스타일 가전을 아우르는 제품군은 ‘더 편리하게, 더 세련되게, 더 따뜻하게’라는 세 가지 방향을 분명히 합니다.",
      "newsArticle4.body4": "사용성 측면에서는 상업용 장점을 소형 제품에 담아 높은 성능과 휴대성을 동시에 제공하는 등 지속적인 혁신을 이룹니다.",
      "newsArticle4.body5": "문어에서 영감을 얻은 대면적 핸디 청소기는 다양한 브러시와 결합해 틈새와 주름 속 먼지·진드기를 빠르게 제거합니다.",
      "newsArticle4.body6": "모성·직장인·미식가 등 세분화된 타깃을 위한 기능을 정교하게 설계해 전기 포트 한 대로 끓임·보온·휴대를 충족합니다.",
      "newsArticle4.body7": "제품은 생활 예술품이어야 한다는 믿음 아래, 한국 대통령상 수상 디자이너 Jean이 감성적이면서 실용적인 디자인을 총괄합니다.",
      "newsArticle4.body8": "간결한 실루엣과 선명한 컬러, 쉬운 세척과 보관 등 디테일까지 고려해 어떤 인테리어와도 조화를 이루며 사용할수록 만족을 줍니다.",
      "newsArticle4.body9": "제품은 감정의 온기를 전할 수 있다는 철학 아래, 각 가전이 상쾌함·열정·레트로 감성을 담아 일상의 감정을 풍성하게 만듭니다.",
      "newsArticle4.body10": "프리미엄 전략을 고수한 DAEWOO는 이미 60여 개국에 진출했으며, 우수한 품질로 ‘티몰 V-랭킹’ 추천 브랜드에 이름을 올렸습니다.",
      "newsArticle5.title": "DAEWOO 스마트 비데 시트 소개",
      "newsArticle5.heroDescription": "DAEWOO 스마트 비데 시트는 2021년 12월 출시된 인체공학적 비데 모듈로, 자동 개폐·에어 버블 세정·좌온 조절·온풍 건조·즉열·전해수 살균·자동 배수 기능을 갖추고 있습니다.",
      "newsArticle5.body2": "<strong>일상 관리</strong><br />1. 약간 젖은 천으로 커버와 좌판을 닦아주세요.<br />2. 오염이 심할 경우 중성 세제를 사용하되, 강한 세제나 직사광선은 피해야 합니다.",
      "newsArticle5.body3": "<strong>적용 공간</strong><br />주거 공간은 물론 호텔, 레스토랑, 엔터테인먼트, 뷰티, 오피스, 병원, 쇼핑몰, 공항, 전시장 등 다양한 장소에서 사용할 수 있습니다.",
      "newsArticle6.title": "DAEWOO 스마트 비데 기능 & 특장점",
      "newsArticle6.heroDescription": "DAEWOO 스마트 비데의 핵심 기능과 제품 특징을 소개합니다.",
      "newsArticle6.featureIntro": "<strong>DAEWOO 스마트 비데 기능 요약</strong>",
      "newsArticle6.feature1": "<strong>자동 감지 개폐</strong><br />120° 광각 레이더 센서가 0.5m 이내 접근을 감지해 덮개를 자동으로 열어줍니다.",
      "newsArticle6.feature2": "<strong>에어 버블 세정</strong><br />남녀별 전용 각도와 버블이 포함된 부드러운 수류로 다양한 세정 모드를 제공합니다.",
      "newsArticle6.feature3": "<strong>좌온 조절</strong><br />좌판 전체에 균일하게 열을 공급해 ±2℃ 이내로 안락한 온도를 유지합니다.",
      "newsArticle6.feature4": "<strong>온풍 건조</strong><br />대형 임펠러 터보 팬으로 다단계 바람 온도를 선택할 수 있습니다.",
      "newsArticle6.feature5": "<strong>자동 배수</strong><br />사용 후 사람이 자리에서 일어나면 5초 뒤 자동으로 물이 흐릅니다.",
      "newsArticle6.feature6": "<strong>제품 특징</strong>",
      "newsArticle6.feature7": "1. 높은 호환성:<br />시중 대부분의 좌변기에 99% 이상 호환됩니다.",
      "newsArticle6.feature8": "2. 간편한 설치:<br />설치와 분해가 쉬워 반복 사용이 가능합니다.",
      "newsArticle6.feature9": "3. 리모델링에 적합:<br />기존 설비를 교체하지 않아도 되어 비용과 자재 낭비를 줄입니다。",
      "newsArticle.back": "뉴스 목록으로 돌아가기",
      "videoPage.hero.eyebrow": "영상 센터",
      "videoPage.hero.title": "DAEWOO 프리미엄 가전을 몰입형으로 만나보세요",
      "videoPage.hero.description": "브랜드 스토리, 제품 데모, 실제 사용 영상을 통해 핵심 기능과 경험을 빠르게 확인하세요.",
      "videoPage.overview.title": "콘텐츠 가이드",
      "videoPage.overview.description": "주방 아이디어, 청소 솔루션, 생활 편의 테마로 구성된 영상을 계속 업데이트합니다.",
      "videoPage.overview.card1.title": "주방 인스퍼레이션",
      "videoPage.overview.card1.description": "휴대용 주서기부터 다기능 조리기까지, 프리미엄 가전이 식탁 효율을 높이는 방법을 소개합니다.",
      "videoPage.overview.card2.title": "클린 테크놀로지",
      "videoPage.overview.card2.description": "스팀 물걸레, 벽걸이 세탁·건조 솔루션으로 빠르고 위생적인 청소 루틴을 보여줍니다.",
      "videoPage.overview.card3.title": "컴포트 라이프",
      "videoPage.overview.card3.description": "넥밴드 선풍기, 스마트 급수 등 사계절 편안한 생활 아이디어를 제안합니다.",
      "videoPage.featured.badge": "FEATURED",
      "videoPage.featured.description": "찜·증기·삶기 다기능 일체형 디자인을 보여주며 대용량 내부 용기, 스마트 온도 제어, 분리형 세척을 시연합니다. 가정 일상 요리와 건강한 식단에 적합합니다.",
      "videoPage.featured.bullet1": "찜·증기·삶기 다기능 일체형 디자인의 전체 프로세스 시연",
      "videoPage.featured.bullet2": "대용량 내부 용기, 스마트 온도 제어, 분리형 세척 사용 팁 안내",
      "videoPage.featured.bullet3": "가정 일상 요리와 건강한 식단에 적합",
      "videoPage.featured.cta": "팝업으로 재생",
      "videoPage.featured.playLabel": "지금 재생",
      "videoPage.collections.eyebrow": "영상 라이브러리",
      "videoPage.collections.title": "제품 데모 모음",
      "videoPage.collections.description": "관심 있는 테마를 선택해 생활과 어울리는 데모 영상을 빠르게 찾아보세요.",
      "videoPage.filters.all": "전체",
      "videoPage.filters.kitchen": "주방 & 음료",
      "videoPage.filters.cleaning": "청소 솔루션",
      "videoPage.filters.comfort": "생활 편의",
      "videoPage.filters.care": "세탁·케어",
      "videoPage.tags.kitchen": "#주방·음료",
      "videoPage.tags.cleaning": "#청소 솔루션",
      "videoPage.tags.comfort": "#생활 편의",
      "videoPage.tags.care": "#세탁·케어",
      "videoPage.cards.zb8.title": "ZB8 휴대용 주스 컵",
      "videoPage.cards.zb8.description": "가볍게 휴대하며 즐기는 3단 속도, 안전 더블 탭 실행 방법을 소개합니다.",
      "videoPage.cards.smop02.title": "SMOP02 전동 스팀 물걸레",
      "videoPage.cards.smop02.description": "30초 스팀 준비, 동시 흡입·물걸레·살균과 빠른 브러시 교체 루틴을 보여줍니다.",
      "videoPage.cards.k10.title": "K10 전기 그릴(에어프라이어)",
      "videoPage.cards.k10.description": "상·하부 독립 온도 제어와 다양한 액세서리, 저유 조리 레시피를 담았습니다.",
      "videoPage.cards.f20.title": "F20 넥밴드 선풍기",
      "videoPage.cards.f20.description": "출퇴근 중심 실사용 영상으로 4단 풍속, 유연한 바람 설계, 장시간 배터리 성능을 확인하세요.",
      "videoPage.cards.dyks01.title": "DY-KS01 전기 온수 포트",
      "videoPage.cards.dyks01.description": "4단 온도 제어, 이중 안전 잠금, 탈염 기능으로 하루 종일 안심 급수를 지원합니다.",
      "videoPage.cards.dybgx09.title": "DY-BGX09 벽걸이 전자동 세탁기",
      "videoPage.cards.dybgx09.description": "벽걸이 설치로 공간을 절약하고 모자 케어, 60℃ 살균 세탁 기능을 영상으로 보여줍니다.",
      "videoPage.cards.dybgx09h.title": "DY-BGX09H 벽걸이 세탁·건조기",
      "videoPage.cards.dybgx09h.description": "업그레이드된 히트펌프 건조와 살균 건조, 설치 및 용량 팁을 확인하세요.",
      "videoPage.cards.db01.title": "DB01 건조 박스 + HI-031 휴대용 스팀 다리미",
      "videoPage.cards.db01.description": "빠른 건조와 스팀 다림질, 여행 휴대 노하우와 의류 관리 팁을 담았습니다.",
      "videoPage.cards.hi029pro.title": "HI-029PRO 대우 핸디 스팀 다리미",
      "videoPage.cards.hi029pro.description": "듀얼 스팀 분사와 원터치 주름 케어, 행잉/평다림 전환, 여행 수납과 자동 전원 차단 안내를 담았습니다.",
      "videoPage.cards.hi045.title": "HI-045 대우 Hobo 핸디 다리미",
      "videoPage.cards.hi045.description": "항온 스팀과 와이드 베이스, 분리형 물탱크를 활용한 휴대 디자인으로 여행/일상 의류 정리에 적합합니다.",
      "videoPage.cards.hi046.title": "HI-046 대우 미니 라운드 케어 머신",
      "videoPage.cards.hi046.description": "원형 챔버에서 스팀 케어·저온 건조·아로마 탈취를 시연해 섬세한 의류를 손쉽게 관리하도록 돕습니다.",
      "videoPage.cards.hi050.title": "HI-050 대우 스프레이 스팀 다리미",
      "videoPage.cards.hi050.description": "듀얼 모드 스프레이 다림질, 대용량 물탱크, 스마트 온도 제어 시스템을 보여주며 행잉/평다림 전환과 효율적인 주름 제거 효과를 시연합니다.",
      "videoPage.cards.dybm05.title": "DY-BM05 미니 원액기",
      "videoPage.cards.dybm05.description": "아침 주방 씬을 통해 저속 착즙, 손쉬운 세척, 유아 보조식 활용법을 보여줍니다.",
      "videoPage.cards.dysp25f01.title": "DYSP-25F01 전기 온수 포트",
      "videoPage.cards.dysp25f01.description": "대용량 급수, 예약 보온, 어린이 안전 설계로 다인 급수에 적합함을 보여줍니다.",
      "videoPage.cards.ph05.title": "PH05 대우 미니 에그 가습기",
      "videoPage.cards.ph05.description": "작고 둥근 계란형 디자인, 초음파 가습 기술, 조용한 작동 모드를 보여주며 다단계 습도 조절과 자동 습도 유지 기능을 시연합니다. 침실과 사무 공간에 적합합니다.",
      "videoPage.cards.ph06.title": "PH06 대우 무안개 가습기",
      "videoPage.cards.ph06.description": "무안개 가습 기술, 대용량 물탱크, 스마트 습도 유지 시스템을 보여주며 냉증발 원리와 조용한 작동 모드를 시연합니다. 공기 품질에 높은 요구가 있는 가정과 사무 환경에 적합합니다.",
      "videoPage.cards.s30pro.title": "S30PRO 멀티 쿠커",
      "videoPage.cards.s30pro.description": "찜·증기·삶기 다기능 일체형 디자인을 보여주며 대용량 내부 용기, 스마트 온도 제어, 분리형 세척을 시연합니다. 가정 일상 요리와 건강한 식단에 적합합니다.",
      "videoPage.cards.s31.title": "S31 멀티 스팀 쿠커",
      "videoPage.cards.s31.description": "스팀 조리 기술, 다층 증기 선반 설계, 스마트 타이머 기능을 보여주며 빠른 스팀 발생, 영양 보존, 무연기 조리를 시연합니다. 건강한 식단을 추구하는 현대 가정에 적합합니다.",
      "videoPage.cards.dyzm1266.title": "DYZM-1266 멀티쿠커",
      "videoPage.cards.dyzm1266.description": "소형 다기능 조리기로 탕, 전골, 1인 요리를 준비하고 투명 뚜껑과 분리 세척을 시연합니다.",
      "videoPage.note.title": "더 많은 영상이 곧 업데이트됩니다",
      "videoPage.note.description": "신제품 출시, 설치 가이드, 고객 사례 영상을 계속 추가합니다. 오프라인 데모나 교육 자료가 필요하시면 DAEWOO 담당자에게 문의하세요.",
      "videoPage.note.cta": "오프라인 체험 예약",
      "contact.hero.eyebrow": "SERVICE NETWORK",
      "contact.hero.title": "다양한 접점으로 DAEWOO 서비스팀과 연결",
      "contact.hero.description": "24/7 고객센터, 온라인 상담, 오프라인 체험 공간, 기업 전담 컨설턴트가 연동되어 소비자·채널·B2B 프로젝트를 빠르게 지원합니다.",
      "contact.hero.meta1": "400+ 인증 서비스 거점",
      "contact.hero.meta2": "2시간 이내 1차 응답",
      "contact.hero.meta3": "24시간 모니터링",
      "contact.overview.eyebrow": "옴니채널 접점",
      "contact.overview.title": "희망 경로만 선택하세요, 나머지는 우리가 처리합니다",
      "contact.overview.description": "콜센터 + 스마트 티켓 + 지역 서비스센터를 하나의 플랫폼으로 운영해 판매 전후와 파트너 협업까지 한 번에 관리합니다.",
      "contact.overview.cards.hotline.title": "고객센터 핫라인",
      "contact.overview.cards.hotline.description": "400-123-0000 · 설치 문의, 고장 접수, 유지보수, 프리미엄 서비스까지 지원",
      "contact.overview.cards.hotline.item1": "연중무휴 24시간 상담원 연결",
      "contact.overview.cards.hotline.item2": "30초 이내 응답률 95% 이상",
      "contact.overview.cards.hotline.item3": "실시간 문자 알림",
      "contact.overview.cards.online.title": "AI 온라인 상담",
      "contact.overview.cards.online.description": "웹·미니프로그램 어디서든 대화를 시작하면 AI가 모델을 인식하고 가이드를 제공합니다.",
      "contact.overview.cards.online.item1": "사진/영상 업로드 지원",
      "contact.overview.cards.online.item2": "음성 설명 자동 텍스트화",
      "contact.overview.cards.online.item3": "전체 상담 이력 추적",
      "contact.overview.cards.partner.title": "채널 & 협업 창구",
      "contact.overview.cards.partner.description": "리셀러, 부동산/호텔 프로젝트, 크로스오버 브랜드에 맞춤 구매·교육·마케팅 패키지를 제공합니다.",
      "contact.overview.cards.partner.item1": "1:1 비즈니스 컨설턴트",
      "contact.overview.cards.partner.item2": "지역별 쇼룸/샘플 하우스 지원",
      "contact.overview.cards.partner.item3": "공동 데이터 대시보드",
      "contact.channels.eyebrow": "채널 매트릭스",
      "contact.channels.title": "고객 유형별 최적의 창구를 바로 찾으세요",
      "contact.channels.description": "엔드 유저, 기업 고객, 콘텐츠 파트너 등 모든 이해관계자가 전담팀과 곧바로 연결됩니다.",
      "contact.channels.consumer.tag": "소비자",
      "contact.channels.consumer.title": "A/S 케어 · 연장 보증",
      "contact.channels.consumer.description": "제품 보증 등록, 설치 정보 관리, 점검·필터 구독 등 연장 보증 서비스를 간편하게 신청하세요.",
      "contact.channels.consumer.item1": "영수증/시리얼 온라인 인증",
      "contact.channels.consumer.item2": "가전 헬스 리포트 연동",
      "contact.channels.consumer.item3": "서비스 진행 알림",
      "contact.channels.enterprise.tag": "기업 고객",
      "contact.channels.enterprise.title": "프로젝트형 납품 & 교육",
      "contact.channels.enterprise.description": "호텔·주거·오피스 프로젝트 요구를 접수하고 모델 선정, 설치, 교육, SLA까지 제공합니다.",
      "contact.channels.enterprise.item1": "7일 이내 제안서 초안",
      "contact.channels.enterprise.item2": "상주 교육 + 원격 지원",
      "contact.channels.enterprise.item3": "IoT 데이터 연동 API",
      "contact.channels.content.tag": "콘텐츠·채널 파트너",
      "contact.channels.content.title": "마케팅 & 공동 IP",
      "contact.channels.content.description": "틱톡, 티몰, 체험 매장 협업 시 소재·일정·신제품 체험 권한을 원스톱으로 제공합니다.",
      "contact.channels.content.item1": "신제품 론칭 일정 우선 확보",
      "contact.channels.content.item2": "공동 기획 팝업/체험존",
      "contact.channels.content.item3": "고해상도 에셋 라이브러리",
      "contact.service.eyebrow": "서비스 절차",
      "contact.service.title": "단일 티켓 플랫폼으로 전 과정을 가시화",
      "contact.service.description": "ITSM 기반 프로세스로 모든 단계의 상태를 공유하고, 복잡한 이슈는 전문가 협업으로 해결합니다.",
      "contact.service.step1.title": "요청 접수",
      "contact.service.step1.description": "콜·웹·위챗에서 들어오는 요청을 자동으로 티켓화하고 담당 지역/제품군으로 배정합니다.",
      "contact.service.step2.title": "진단 & 솔루션",
      "contact.service.step2.description": "원격 진단과 영상 분석으로 문제를 신속히 파악하고, 필요 시 현장 엔지니어를 배치합니다.",
      "contact.service.step3.title": "실행 & 피드백",
      "contact.service.step3.description": "부품 물류, 예약 시간, 현장 기록을 동기화하고 완료 후 리포트를 발송합니다.",
      "contact.service.step4.title": "재방문 & 업그레이드",
      "contact.service.step4.description": "만족도가 90% 미만이면 자동으로 이슈를 승격해 원인 분석과 개선에 반영합니다.",
      "contact.touchpoint.eyebrow": "전담 컨설턴트",
      "contact.touchpoint.title": "VIP·기업 지원이 필요하신가요?",
      "contact.touchpoint.description": "요청 내용을 남겨 주시면 산업별 전담 컨설턴트가 예산, 일정, 활용 시나리오에 맞춘 솔루션을 제안합니다.",
      "contact.touchpoint.item1": "상업 빌딩·호텔 통합 가전 조달",
      "contact.touchpoint.item2": "부동산 분양/임대 맞춤 납품 솔루션",
      "contact.touchpoint.item3": "브랜드 공동 마케팅 & 경험 공간 구축",
      "contact.form.name.label": "이름",
      "contact.form.name.placeholder": "이름을 입력하세요",
      "contact.form.company.label": "회사 / 기관",
      "contact.form.company.placeholder": "회사 또는 기관명을 입력하세요",
      "contact.form.phone.label": "연락처",
      "contact.form.phone.placeholder": "휴대폰 또는 이메일",
      "contact.form.intent.label": "요청 유형",
      "contact.form.intent.option1": "기업 구매",
      "contact.form.intent.option2": "프로젝트 납품",
      "contact.form.intent.option3": "마케팅 협업",
      "contact.form.intent.option4": "기타",
      "contact.form.message.label": "추가 메모",
      "contact.form.message.placeholder": "궁금한 내용을 자유롭게 작성하세요",
      "contact.form.submit": "요청 제출",
      "contact.faq.eyebrow": "자주 묻는 질문",
      "contact.faq.title": "가장 빠른 셀프 체크",
      "contact.faq.q1.title": "수리 진행 상황은 어떻게 확인하나요?",
      "contact.faq.q1.answer": "티켓 번호 또는 휴대폰 번호로 ‘온라인 상담-주문 센터’에서 확인하거나 문자 링크로 실시간 갱신할 수 있습니다.",
      "contact.faq.q2.title": "쇼룸 방문은 예약이 필요한가요?",
      "contact.faq.q2.answer": "주말/신제품 론칭 기간에는 온라인 예약을 권장하며, QR 코드로 빠르게 입장하고 전담 설명을 받을 수 있습니다.",
      "contact.faq.q3.title": "기업 프로젝트 맞춤 제작이 가능한가요?",
      "contact.faq.q3.answer": "OEM/ODM, 패널 컬러, 소프트웨어 기능 커스터마이징을 지원하며, 요청 접수 후 PM이 일정과 샘플 계획을 안내합니다.",
      "contact.faq.q4.title": "필터나 부품은 어떻게 구매하나요?",
      "contact.faq.q4.answer": "몰/서비스 계정에서 모델과 SN을 입력하면 호환 부품을 추천하며, 인근 서비스 센터에서도 바로 구매할 수 있습니다.",
      "about.hero.eyebrow": "BRAND STORY",
      "about.hero.title": "프리미엄 가전으로 동양 라이프스타일 재정의",
      "about.hero.description": "1967년 서울에서 시작된 DAEWOO는 기술 혁신과 미학을 기반으로 가전·웰니스·IoT 영역에서 전 세계 고객에게 프리미엄 솔루션을 제공합니다.",
      "about.hero.meta1": "60여 개 국가 사업 전개",
      "about.hero.meta2": "3,500+ 기술 특허",
      "about.hero.meta3": "22개 글로벌 이노베이션 랩",
      "about.pillars.eyebrow": "핵심 가치",
      "about.pillars.title": "DAEWOO 성장의 세 가지 축",
      "about.pillars.description": "사용자 인사이트 기반 디자인, 엔지니어링 역량, 파트너 에코시스템이 지속가능한 성장을 이끕니다.",
      "about.pillars.card1.title": "사람 중심 디자인",
      "about.pillars.card1.description": "서울·상하이·밀라노 스튜디오에서 건축·재료·인터랙션 전문가가 동양 라이프스타일을 탐구합니다.",
      "about.pillars.card1.item1": "연간 소비자 인사이트 리포트",
      "about.pillars.card1.item2": "컬러 & 소재 연구소",
      "about.pillars.card1.item3": "뮤지엄/아티스트 협업 전시",
      "about.pillars.card2.title": "엔지니어링 & 공급망",
      "about.pillars.card2.description": "모듈형 플랫폼과 글로벌 협력사 네트워크로 안정적인 품질과 납기를 보장합니다.",
      "about.pillars.card2.item1": "스마트 제조 클라우드 제어",
      "about.pillars.card2.item2": "부품 추적 가능 체계",
      "about.pillars.card2.item3": "48시간 이내 부품 공급",
      "about.pillars.card3.title": "파트너 동반 성장",
      "about.pillars.card3.description": "API, 공동 마케팅, 교육·서비스 네트워크를 개방해 전 라이프사이클 경험을 함께 만듭니다.",
      "about.pillars.card3.item1": "글로벌 체험 공간 코프로그램",
      "about.pillars.card3.item2": "채널 파트너 성장 프로그램",
      "about.pillars.card3.item3": "브랜드 코크리에이션 펀드",
      "about.stats.item1.title": "12개 제품 사업부",
      "about.stats.item1.description": "주방·공기·수건강·퍼스널케어·IoT 전 영역 커버",
      "about.stats.item2.title": "4대 지역 HQ",
      "about.stats.item2.description": "서울·상하이·뮌헨·LA가 글로벌 R&D/공급을 조율",
      "about.stats.item3.title": "97% 고객 만족도",
      "about.stats.item3.description": "NPS 지표 기반으로 경험과 서비스를 지속 개선",
      "about.stats.item4.title": "25% 그린 매출 비중",
      "about.stats.item4.description": "에너지 절감 제품과 리사이클 프로그램 확대",
      "about.story.eyebrow": "성장 전략",
      "about.story.title": "프리미엄 가전에서 스마트 라이프 서비스로",
      "about.story.description": "‘심플한 아름다움·쉬운 사용·간편 관리’를 R&D 기반 원칙으로 삼고 IoT/데이터를 결합해 제품을 라이프 파트너로 확장합니다.",
      "about.story.item1": "풀 시나리오 연동: 주방·욕실·공기·워터·클리닝을 DAEWOO Home OS로 통합",
      "about.story.item2": "데이터 기반 개선: 실제 사용 데이터를 통해 효율·안전·쾌적함을 최적화",
      "about.story.item3": "서비스=제품: A/S·컨설턴트가 제품 정의 단계부터 참여해 원스톱 케어 구현",
      "about.timeline.eyebrow": "이정표",
      "about.timeline.title": "주요 연혁",
      "about.timeline.item1.title": "1967 브랜드 탄생",
      "about.timeline.item1.description": "서울에서 가전 제조를 시작하며 혁신과 신뢰를 구축",
      "about.timeline.item2.title": "1994 중국 진출",
      "about.timeline.item2.description": "중국 제조 거점과 협업해 현지 라이프스타일에 맞는 제품을 출시",
      "about.timeline.item3.title": "2015 스마트 허브",
      "about.timeline.item3.description": "DAEWOO Smart Hub로 기기 연동과 클라우드 케어 실현",
      "about.timeline.item4.title": "2021 글로벌 프리미엄 전략",
      "about.timeline.item4.description": "디자인·경험 중심으로 프리미엄 소형가전 시장을 재정의, 다수 어워드 수상",
      "about.timeline.item5.title": "2025 지속가능 목표",
      "about.timeline.item5.description": "생산 거점 100% 재생에너지, 주력 제품 순환 설계 추진",
      "about.csr.eyebrow": "지속가능 경영",
      "about.csr.title": "제품을 넘어 지구에 대한 약속",
      "about.csr.description": "R&D-제조-물류-사용-회수 전 단계에서 ESG 목표를 실행하고 데이터를 통해 성과를 투명하게 공개합니다.",
      "about.csr.item1": "2030년 핵심 카테고리 탄소 배출 50% 감축",
      "about.csr.item2": "120개 도시 리사이클 & 보상 프로그램",
      "about.csr.item3": "재제조 공장 구축으로 매립 제로 지향",
      "about.csr.stat1": "포장재 90% 이상 재생 펄프 사용",
      "about.csr.stat2": "누적 150만 톤 CO₂ 절감",
      "about.csr.stat3": "120회 이상 사회공헌·기술 교육",
      "about.partners.eyebrow": "파트너 생태계",
      "about.partners.title": "산업 파트너와 미래 라이프스타일을 공동 설계",
      "about.partners.description": "부동산, 호텔, 홈퍼니싱, 콘텐츠 플랫폼, 리테일 파트너와 기술·운영·고객 데이터를 공유합니다.",
      "about.partners.card1.title": "부동산 · 공간 운영",
      "about.partners.card1.description": "스마트 모델하우스, 임대주택, 커뮤니티 가전 솔루션을 제공합니다.",
      "about.partners.card1.item1": "대량 설치 및 유지보수 서비스",
      "about.partners.card1.item2": "입주 즉시 사용 가능한 에너지 관리",
      "about.partners.card1.item3": "인테리어 맞춤 색상/재질",
      "about.partners.card2.title": "리테일 & 콘텐츠",
      "about.partners.card2.description": "온·오프라인 채널과 함께 몰입형 경험과 콘텐츠를 제작해 브랜드 임팩트를 키웁니다.",
      "about.partners.card2.item1": "공동 체험 매장·팝업 구축",
      "about.partners.card2.item2": "라이브커머스 기술·교육 지원",
      "about.partners.card2.item3": "데이터 기반 머천다이징 인사이트 공유",
      "about.partners.card3.title": "기술 에코 파트너",
      "about.partners.card3.description": "IoT·AI·소재·센서 등 기술을 개방해 칩셋/인터넷 기업과 공동 혁신합니다.",
      "about.partners.card3.item1": "개발자 플랫폼 & 샌드박스",
      "about.partners.card3.item2": "공동 연구소 및 표준 협의",
      "about.partners.card3.item3": "멀티 레이어 보안·프라이버시 거버넌스",
      "productCenter.eyebrow": "제품 센터",
      "productCenter.title": "DAEWOO 전 제품군 솔루션을<br />만나보세요",
      "productCenter.description": "가정부터 비즈니스 환경까지, 다양한 상황에 맞는 제품과 서비스를 제공합니다. 관심 시리즈를 선택하고 사양, 활용, 지원 정보를 손쉽게 확인하세요.",
      "productCenter.sidebarLabel": "제품 디렉터리",
      "productCenter.sidebarTitle": "제품 분류",
      "productCenter.sidebarNavLabel": "제품 분류 내비게이션",
      "productCenter.noteTitle": "구매 팁",
      "productCenter.noteDescription": "먼저 시리즈를 선택한 뒤, 모델별 기능과 연계 서비스를 확인하면 맞춤형 솔루션을 빠르게 파악할 수 있습니다.",
      "productCenter.collection": "제품 시리즈",
      "productCenter.badgeNew": "신제품",
      "productCenter.home.description": "주방, 청소, 공기 관리 등 다양한 생활 공간을 아우르며 건강하고 편리한 일상을 지원합니다.",
      "productCenter.cards.t2311.category": "계절가전 · 난방기",
      "productCenter.cards.t2311.title": "T2311AYV 플린스 히터",
      "productCenter.cards.dytn33.category": "모유·유아 가전 · 분유 조제기",
      "productCenter.cards.dytn33.title": "DY-TN33 액체 가열기(휴대 듀얼모드 분유기)",
      "productCenter.cards.s30pro.category": "주방가전 · 멀티 쿠커",
      "productCenter.cards.s30pro.title": "S30PRO 멀티 스튜 & 스팀 포트",
      "productCenter.cards.viewDetails": "자세히 보기",
      "productCenter.home.card1.summary": "노프로스트 냉각과 정밀 온도 제어로 식재료 본연의 맛을 지켜줍니다.",
      "productCenter.home.card1.meta1": "600L 대용량, 조절 가능한 냉장 존",
      "productCenter.home.card1.meta2": "AI 스마트 수분 케어 모드",
      "productCenter.home.card1.meta3": "모바일 원격 온도 제어 및 알림",
      "productCenter.home.card2.summary": "45분 고속 세탁·건조, 세제 자동 투입으로 최적 코스를 알아서 실행합니다.",
      "productCenter.home.card2.meta1": "플래티넘 이온 살균으로 민감 피부 케어",
      "productCenter.home.card2.meta2": "16가지 프로그램, 사용자 정의 저장",
      "productCenter.home.card2.meta3": "전 가전 연동, 원터치 예약",
      "productCenter.home.card3.summary": "양방향 순환 청정 시스템으로 30분 만에 실내 공기를 새롭게 바꿉니다.",
      "productCenter.home.card3.meta1": "PM0.1 등급 초미세 제거",
      "productCenter.home.card3.meta2": "슬립 모드 19dB 저소음",
      "productCenter.home.card3.meta3": "공기질을 실시간 센서 모니터링",
      "productCenter.home.tablistLabel": "생활가전 카테고리 전환",
      "productCenter.home.tabLarge": "대형 가전",
      "productCenter.home.tabSmall": "소형 가전",
      "productCenter.home.more": "전체 보기",
      "productCenter.home.large.refrigerator.title": "냉장고 시리즈",
      "productCenter.home.large.refrigerator.description": "프렌치도어와 양문형 등 대용량 보관 라인업을 제공합니다.",
      "productCenter.home.large.refrigerator.item1": "프렌치 도어 냉장고",
      "productCenter.home.large.refrigerator.item2": "양문형 냉장고",
      "productCenter.home.large.refrigerator.item3": "빌트인 슬림형",
      "productCenter.home.large.refrigerator.item4": "글라스 패널 시리즈",
      "productCenter.home.large.airConditioner.title": "에어컨 시리즈",
      "productCenter.home.large.airConditioner.description": "인버터 벽걸이와 스탠드형까지 쾌적한 온도를 유지합니다.",
      "productCenter.home.large.airConditioner.item1": "인버터 벽걸이형",
      "productCenter.home.large.airConditioner.item2": "거실 스탠드형",
      "productCenter.home.large.airConditioner.item3": "신선한 공기 순환 시스템",
      "productCenter.home.large.airConditioner.item4": "1등급 에너지 효율",
      "productCenter.home.large.tv.title": "TV 시리즈",
      "productCenter.home.large.tv.description": "초고화질과 스마트 AV 기능으로 홈시네마를 완성합니다.",
      "productCenter.home.large.tv.item1": "Mini LED 플래그십",
      "productCenter.home.large.tv.item2": "초고화질 베젤리스",
      "productCenter.home.large.tv.item3": "AI 음성 제어",
      "productCenter.home.large.tv.item4": "아이케어 모드",
      "productCenter.home.large.wineCabinet.title": "와인셀러 시리즈",
      "productCenter.home.large.wineCabinet.description": "온도·습도를 정밀 제어해 프리미엄 보관을 지원합니다.",
      "productCenter.home.large.wineCabinet.item1": "멀티 존 온도 제어",
      "productCenter.home.large.wineCabinet.item2": "계층형 보관 설계",
      "productCenter.home.large.wineCabinet.item3": "활성탄 탈취 시스템",
      "productCenter.home.large.wineCabinet.item4": "시인성 글라스 도어",
      "productCenter.home.large.dryer.title": "건조기 시리즈",
      "productCenter.home.large.dryer.description": "히트펌프 기술로 섬세한 의류까지 빠르게 건조합니다.",
      "productCenter.home.large.dryer.item1": "히트펌프 건조기",
      "productCenter.home.large.dryer.item2": "스마트 구김 방지",
      "productCenter.home.large.dryer.item3": "울 케어 모드",
      "productCenter.home.large.dryer.item4": "드럼 자동 세척",
      "productCenter.home.large.washerDryer.title": "세탁·건조기",
      "productCenter.home.large.washerDryer.description": "세탁과 건조를 한 번에, 다양한 세탁 시나리오를 지원합니다.",
      "productCenter.home.large.washerDryer.item1": "세탁·건조 겸용",
      "productCenter.home.large.washerDryer.item2": "스팀 살균 코스",
      "productCenter.home.large.washerDryer.item3": "초고속 쾌속 세탁",
      "productCenter.home.large.washerDryer.item4": "모바일 연동 제어",
      "productCenter.home.large.warmingDrawer.title": "빌트인 보온 서랍",
      "productCenter.home.large.warmingDrawer.description": "식기와 음식 온도를 일정하게 유지하는 키친 솔루션입니다.",
      "productCenter.home.large.warmingDrawer.item1": "다단 온도 조절",
      "productCenter.home.large.warmingDrawer.item2": "넉넉한 수납 용량",
      "productCenter.home.large.warmingDrawer.item3": "소프트 오픈·클로즈",
      "productCenter.home.large.warmingDrawer.item4": "빌트인 일체형 설치",
      "productCenter.home.small.kitchen.title": "주방 가전",
      "productCenter.home.small.kitchen.description": "요리와 음료 준비를 돕는 다기능 스마트 주방 가전입니다.",
      "productCenter.home.small.kitchen.item1": "블렌더",
      "productCenter.home.small.kitchen.item2": "에어프라이어",
      "productCenter.home.small.kitchen.item3": "멀티 쿠커",
      "productCenter.home.small.kitchen.item4": "스팀 오븐",
      "productCenter.home.small.living.title": "생활 가전",
      "productCenter.home.small.living.description": "청소와 공기 관리를 위한 필수 생활 가전 라인업입니다.",
      "productCenter.home.small.living.item1": "로봇 청소기",
      "productCenter.home.small.living.item2": "가습기",
      "productCenter.home.small.living.item3": "공기 순환 선풍기",
      "productCenter.home.small.living.item4": "침구 진드기 제거기",
      "productCenter.home.small.maternal.title": "육아 가전",
      "productCenter.home.small.maternal.description": "엄마와 아기를 위한 맞춤형 케어 가전입니다.",
      "productCenter.home.small.maternal.item1": "이유식 제조기",
      "productCenter.home.small.maternal.item2": "젖병 워머",
      "productCenter.home.small.maternal.item3": "살균 건조기",
      "productCenter.home.small.maternal.item4": "유아 이발기",
      "productCenter.home.small.seasonal.title": "사계절 가전",
      "productCenter.home.small.seasonal.description": "계절 온도 변화에 맞춰 집안을 쾌적하게 유지합니다.",
      "productCenter.home.small.seasonal.item1": "냉·온 겸용 선풍기",
      "productCenter.home.small.seasonal.item2": "온도 제어 히터",
      "productCenter.home.small.seasonal.item3": "온풍기",
      "productCenter.home.small.seasonal.item4": "제빙기",
      "productCenter.smart.description": "연결된 스마트 홈을 구축해 상황별 자동 제어와 시나리오를 구현합니다.",
      "productCenter.smart.card1.summary": "200개 이상 디바이스를 연동해 조명, 보안, 환경을 통합 제어합니다.",
      "productCenter.smart.card1.meta1": "Matter 프로토콜 호환",
      "productCenter.smart.card1.meta2": "멀티 디바이스 음성·앱 제어",
      "productCenter.smart.card1.meta3": "가족 구성원 권한 관리",
      "productCenter.smart.card2.summary": "초고화질 야간 감시와 지능형 분석으로 이상 상황을 즉시 알림합니다.",
      "productCenter.smart.card2.meta1": "AI가 가족·방문객·반려동물 구분",
      "productCenter.smart.card2.meta2": "정전 시 12시간 백업 전원",
      "productCenter.smart.card2.meta3": "금융 등급 데이터 암호화",
      "productCenter.smart.card3.summary": "맞춤 조명과 서캐디언 리듬으로 공간 분위기를 한층 높입니다.",
      "productCenter.smart.card3.meta1": "천만 가지 색온도 연출",
      "productCenter.smart.card3.meta2": "다중 안전 인증과 저전력 설계",
      "productCenter.smart.card3.meta3": "음성·동작 연동 지원",
      "productCenter.commercial.description": "외식, 호텔, 공공 공간을 위한 안정적이고 효율적인 상업용 장비를 제공합니다.",
      "productCenter.commercial.card1.summary": "모듈형 냉장 시스템으로 정확한 온도 제어와 식품 안전을 보장합니다.",
      "productCenter.commercial.card1.meta1": "-30℃~10℃ 광범위 온도대",
      "productCenter.commercial.card1.meta2": "Built-in HACCP traceability",
      "productCenter.commercial.card1.meta3": "24시간 원격 모니터링 유지보수",
      "productCenter.commercial.card2.summary": "증기·오븐·조림을 한 대로 수행해 주방 효율을 두 배로 높입니다.",
      "productCenter.commercial.card2.meta1": "10개 자동 프로그램 원터치 실행",
      "productCenter.commercial.card2.meta2": "스마트 배기와 연기 필터링",
      "productCenter.commercial.card2.meta3": "내구성 높은 스테인리스 챔버",
      "productCenter.commercial.card3.summary": "업무용 빌딩과 공공 공간의 대용량 정수 수요를 충족합니다.",
      "productCenter.commercial.card3.meta1": "다단계 멤브레인 필터",
      "productCenter.commercial.card3.meta2": "전 주기 유지관리 플랜",
      "productCenter.commercial.card3.meta3": "실시간 수질 모니터링 패널",
      "productCenter.care.description": "일상 뷰티와 헬스케어에 집중해 개인과 가족 모두에게 세심한 케어를 제공합니다.",
      "productCenter.care.card1.summary": "57℃ 일정 온도와 고농도 음이온으로 빠르게 말려도 모발 손상을 줄여줍니다.",
      "productCenter.care.card1.meta1": "4가지 노즐 자석 탈착",
      "productCenter.care.card1.meta2": "스마트 온도 제어로 과열 방지",
      "productCenter.care.card1.meta3": "여행에 적합한 폴딩 디자인",
      "productCenter.care.card2.summary": "4-in-1 케어 모드로 피부 결과 탄력을 개선합니다.",
      "productCenter.care.card2.meta1": "RF·EMS 리프팅 케어",
      "productCenter.care.card2.meta2": "조절 가능한 LED 광케어",
      "productCenter.care.card2.meta3": "사용 기록 자동 저장",
      "productCenter.care.card3.summary": "16가지 신체 지표를 정밀 측정해 건강 트렌드를 분석합니다.",
      "productCenter.care.card3.meta1": "AI 신체 나이 분석",
      "productCenter.care.card3.meta2": "가족별 개별 프로필",
      "productCenter.care.card3.meta3": "WeChat·앱 동시 연동",
      "productCenter.wearable.description": "일상 이동과 운동, 건강 관리에 기술을 더해 생활 리듬을 쉽게 관리하세요.",
      "productCenter.wearable.card1.summary": "전문 운동 추적과 다중 위성 위치로 아웃도어 활동을 안전하게 지원합니다.",
      "productCenter.wearable.card1.meta1": "100여 가지 운동 모드",
      "productCenter.wearable.card1.meta2": "듀얼 밴드 GPS + 베이더우",
      "productCenter.wearable.card1.meta3": "최대 14일 배터리",
      "productCenter.wearable.card2.summary": "환경에 따라 자동으로 소음을 제어해 이동 중에도 선명한 사운드를 제공합니다.",
      "productCenter.wearable.card2.meta1": "42dB 하이브리드 노이즈 캔슬링",
      "productCenter.wearable.card2.meta2": "저지연 게임 모드",
      "productCenter.wearable.card2.meta3": "무선 충전 및 고속 충전",
      "productCenter.wearable.card3.summary": "3단 풍속과 360° 바람으로 여름 야외에서도 시원함을 유지합니다.",
      "productCenter.wearable.card3.meta1": "초경량 실리콘 소재",
      "productCenter.wearable.card3.meta2": "USB-C 고속 충전 지원",
      "productCenter.wearable.card3.meta3": "자석식 폴딩 구조",
      "productCenter.digital.description": "영상/음향과 모바일 업무에 최적화된 디지털 경험을 제공합니다.",
      "productCenter.digital.card1.summary": "4K 초고해상도와 자동 초점, 키스톤 보정으로 언제든 홈 시네마를 구축하세요.",
      "productCenter.digital.card1.meta1": "2800 ANSI 루멘 밝기",
      "productCenter.digital.card1.meta2": "돌비 애트모스 사운드",
      "productCenter.digital.card1.meta3": "스크린 없는 시네마 경험",
      "productCenter.digital.card2.summary": "360° 회전과 펜 입력으로 창작과 업무를 모두 만족시키는 투인원 디바이스입니다.",
      "productCenter.digital.card2.meta1": "OLED 120Hz 터치 디스플레이",
      "productCenter.digital.card2.meta2": "롱 배터리 + 고속 충전",
      "productCenter.digital.card2.meta3": "AI 소음 억제 회의 마이크",
      "productCenter.digital.card3.summary": "무잉크 열전사 방식으로 사진과 메모를 즉시 출력합니다.",
      "productCenter.digital.card3.meta1": "블루투스 듀얼 디바이스 연결",
      "productCenter.digital.card3.meta2": "다양한 템플릿 즉시 사용",
      "productCenter.digital.card3.meta3": "최대 7일 대기 배터리",
      "productCenter.others.description": "맞춤형 및 계절 상품으로 다양한 비즈니스·생활 니즈를 충족합니다.",
      "productCenter.others.card1.summary": "기업 고객과 파트너를 위한 전용 기프트 패키지와 브랜드 커스터마이징을 제공합니다.",
      "productCenter.others.card1.meta1": "다품목 유연 구성",
      "productCenter.others.card1.meta2": "전용 패키지 디자인 선택",
      "productCenter.others.card1.meta3": "사후 서비스와 물류 지원",
      "productCenter.others.card2.summary": "공공·상업 공간을 위한 에너지 절감, 저탄소 통합 솔루션을 제안합니다.",
      "productCenter.others.card2.meta1": "에너지 진단 및 개선 컨설팅",
      "productCenter.others.card2.meta2": "IoT 기반 에너지 모니터링",
      "productCenter.others.card2.meta3": "라이프사이클 유지보수",
      "productCenter.others.card3.summary": "보증 연장과 방문 케어로 장비 운용의 안심을 더합니다.",
      "productCenter.others.card3.meta1": "다년 보증 옵션",
      "productCenter.others.card3.meta2": "전문 엔지니어 방문 서비스",
      "productCenter.others.card3.meta3": "신속 대응 서비스 네트워크",
      "productCenter.service.heading": "맞춤 제품 컨설팅과 서비스 제안을 받아보세요",
      "productCenter.service.description": "요구 사항을 보내주시면 전담 컨설턴트가 제품 추천, 설치 기획, 사후 지원 일정을 안내드립니다.",
      "productCenter.service.ctaPrimary": "컨설턴트에게 문의",
      "productCenter.service.ctaSecondary": "서비스 센터 예약",
      "product.description.title": "제품 설명",
      "productCenter.comingSoon.title": "제품이 곧 공개됩니다",
      "productCenter.comingSoon.description": "조금만 기다려 주세요",
      "hero.title": "DAEWOO와 함께하는 새로운 서비스 경험",
      "hero.description": "혁신적인 고객 지원과 믿을 수 있는 기술력으로 편안한 일상을 만들어 드립니다.",
      "footer.copy": "© 2025 DAEWOO SERVICE CO., LTD. All rights reserved.",
      "hero.prev": "이전 배너",
      "hero.next": "다음 배너",
    },
    en: {
      "brand.name": "DAEWOO Service",
      "search.label": "Search keywords",
      "search.placeholder": "Search for what you need",
      "search.button": "Search",
      "search.results.heading": "Search results",
      "search.results.hint": "Type any product, news, or video keyword to get started.",
      "search.results.empty": "No matching content. Try a different keyword.",
      "search.results.products": "Products",
      "search.results.news": "News",
      "search.results.videos": "Videos",
      "search.results.loading": "Preparing search data…",
      "search.results.viewAll": "View all",
      "search.results.remaining": "{{count}} more results",
      "search.results.count": "{{count}} matches",
      "search.results.shortQuery": "Enter at least 2 characters to search.",
      "search.results.close": "Close search",
      "lang.selector": "Language",
      "lang.selectorAria": "Language selector",
      "lang.zh": "Chinese",
      "lang.ko": "Korean",
      "lang.en": "English",
      "nav.toggle": "All Menu",
      "nav.label": "DAEWOO main navigation",
      "nav.product": "Product Center",
      "nav.news": "News & Updates",
      "nav.video": "Video Center",
      "nav.contact": "Contact Us",
      "nav.about": "About DAEWOO",
      "nav.language": "LANGUAGE",
      "mobileNav.toggle": "Open mobile menu",
      "mobileNav.panelLabel": "DAEWOO mobile directory",
      "mobileNav.close": "Close menu",
      "panel.product.heading": "Product Categories",
      "panel.product.home": "Humidifier",
      "panel.product.smartHome": "Iron",
      "panel.product.commercial": "Cooker",
      "panel.product.personalCare": "Juice Maker",
      "panel.product.wearable": "Smart Wearables",
      "panel.product.digital": "Smart Digital",
      "panel.product.others": "Other Products",
      "panel.news.heading": "News Channels",
      "panel.news.latest": "News & Industry Insights",
      "panel.video.heading": "Featured Videos",
      "panel.video.hi029pro": "HI-029PRO Handheld Garment Steamer",
      "panel.video.hi045": "HI-045 DAEWOO Hobo Handheld Steamer",
      "panel.video.hi046": "HI-046 DAEWOO Capsule Garment Care Device",
      "panel.video.hi050": "HI-050 DAEWOO Spray Steam Garment Steamer",
      "panel.video.ph05": "PH05 DAEWOO Mini Egg Humidifier",
      "panel.video.ph06": "PH06 DAEWOO Mist-Free Humidifier",
      "panel.video.s30pro": "S30PRO Multi-Function Steamer & Cooker",
      "panel.video.s31": "S31 Multi-Function Steam Cooker",
      "panel.video.more": "More",
      "panel.contact.heading": "Contact Channels",
      "panel.contact.hotline": "Hotline 400-123-0000",
      "panel.contact.online": "Live Chat Support",
      "panel.contact.center": "Service Center Booking",
      "panel.contact.partner": "Partner Assistance",
      "panel.contact.feedback": "Feedback & Suggestions",
      "panel.about.heading": "Inside DAEWOO",
      "panel.about.story": "Brand Story",
      "panel.about.timeline": "Milestones",
      "panel.about.leadership": "Leadership Team",
      "panel.about.csr": "Corporate Responsibility",
      "panel.about.partner": "Partners & Alliances",
      "panel.language.heading": "Select Language",
      "panel.language.description": "Choose your preferred language for browsing.",
      "panel.language.locale.zh": "Simplified Chinese",
      "panel.language.locale.ko": "Korean",
      "panel.language.locale.en": "English",
      "productInterest.heading": "Choose the products you're interested in",
      "productInterest.fridge": "Refrigerators",
      "productInterest.riceCooker": "Rice Cookers",
      "productInterest.soymilk": "Soy Milk Makers",
      "productInterest.juicer": "Juicers",
      "productInterest.iceMaker": "Ice Makers",
      "productInterest.blender": "Blenders",
      "productInterest.babyFood": "Baby Food Makers",
      "productInterest.robotVacuum": "Robot Vacuums",
      "productInterest.hairDryer": "Hair Dryers",
      "productInterest.humidifier": "Humidifiers",
      "productInterest.waterDispenser": "Water Dispensers",
      "productInterest.waterPurifier": "Water Purifiers",
      "productInterest.fan": "Electric Fans",
      "productInterest.heater": "Heaters",
      "homeVideo.eyebrow": "Video Center",
      "homeVideo.title": "Immersive video highlights",
      "homeVideo.description": "Explore three signature demos to sample what is streaming inside the DAEWOO Video Center.",
      "homeVideo.watch": "Watch video",
      "homeVideo.cta": "Go to Video Center",
      "homeNews.eyebrow": "News",
      "homeNews.title": "Latest Updates & Industry Insights",
      "homeNews.description": "Stay current with DAEWOO product announcements, brand stories, and industry insights.",
      "homeNews.more": "View all news",
      "homeNews.article6.title": "DAEWOO Smart Bidet Seat Highlights",
      "homeNews.article6.summary": "Automatic lid sensing, gentle aerated cleansing, and a heated seat deliver lasting comfort.",
      "homeNews.article5.title": "Introducing the DAEWOO Smart Bidet Seat",
      "homeNews.article5.summary": "Multi-mode washing, warm-air drying, and electrolyzed sterilization keep your bathroom hygienic.",
      "homeNews.article4.title": "DAEWOO Shines at the Douyin 818 Festival with Top-Selling Appliances",
      "homeNews.article4.summary": "High-performance, design-forward appliances stood out and captured livestream sales leadership.",
      "homeNews.article3.title": "Why DAEWOO Appliances Keep Thriving in China",
      "homeNews.article3.summary": "A premium-focused roadmap and deep customer insight continue to win local recognition.",
      "newsPage.hero.title": "News & Industry Insights",
      "newsPage.hero.description": "Discover DAEWOO brand updates, market insights, product stories, and service highlights.",
      "newsPage.breadcrumb.label": "News navigation",
      "newsPage.breadcrumb.home": "Home",
      "newsPage.breadcrumb.current": "News & Industry Insights",
      "newsPage.backHome": "Back to Home",
      "newsPage.article2.title": "DAEWOO Wall-Mounted Washer Nebula Launch: Relentless Pursuit of Quality",
      "newsPage.article2.summary": "The Nebula series preserves the space-saving design while adding baby-care programs for premium laundering needs.",
      "newsPage.article1.title": "AWE2021: DAEWOO Deepens Its Commitment to the Chinese Market",
      "newsPage.article1.summary": "Expo highlights showcase DAEWOO's strategies and achievements as it invests in the China market.",
      "newsPage.hero.eyebrow": "NEWSROOM",
      "newsPage.spotlight.eyebrow": "Focus · Highlights",
      "newsPage.spotlight.description": "Sensor-driven lid lift, gentle aerated cleansing, and a heated seat are demonstrated across real scenarios, along with installation and care tips for a healthier bathroom.",
      "newsPage.spotlight.bullet1": "Covers automatic lid opening, warm-air drying, and electrolyzed-water sterilization from start to finish.",
      "newsPage.spotlight.bullet2": "Blends customer quotes with real spaces to spark bathroom makeover ideas.",
      "newsPage.spotlight.bullet3": "Includes maintenance steps and after-sales guidance so channel teams can use it easily.",
      "newsPage.spotlight.cta": "View full story",
      "newsPage.collections.eyebrow": "News Library",
      "newsPage.collections.title": "Curated Themes · Article Collection",
      "newsPage.collections.description": "Filter by brand updates, industry trends, product launches, or service stories and enjoy a card-based reading experience.",
      "newsPage.filters.all": "All",
      "newsPage.filters.brand": "Brand Updates",
      "newsPage.filters.trend": "Industry Trends",
      "newsPage.filters.product": "Product Launches",
      "newsPage.filters.service": "Service & Reputation",
      "newsPage.tags.brand": "#BrandUpdates",
      "newsPage.tags.trend": "#IndustryTrends",
      "newsPage.tags.product": "#ProductLaunches",
      "newsPage.tags.service": "#ServiceStories",
      "newsPage.note.title": "Continuous Updates · Editorial Calendar",
      "newsPage.note.description": "The newsroom tracks product launches, channel news, customer stories, and service cases. Subscribe to the monthly brief or contact a DAEWOO consultant for bespoke materials.",
      "newsPage.note.cta": "Subscribe & Partnerships",
      "newsArticle.publishedLabel": "Published on: ",
      "newsArticle1.title": "AWE2021: DAEWOO Deepens Its Commitment to China",
      "newsArticle1.heroDescription": "The Appliance & Electronics World Expo (AWE) wrapped up at Shanghai's National Exhibition and Convention Center on 23–25 March 2021.",
      "newsArticle1.body1": "As a globally renowned brand from Korea, DAEWOO brought decades of R&D and engineering strength and naturally made a strong appearance at the show.",
      "newsArticle1.body2": "Beyond the latest home-care devices such as the steam mop and cordless mite vacuum, hero products like the HI-029 handheld steamer and S11 multi-function cooker also took the spotlight.",
      "newsArticle1.body3": "The S11 multi-function cooker from DAEWOO's kitchen lineup won the coveted AWE Aipland “Golden Word-of-Mouth” award.",
      "newsArticle1.body4": "Often called the “Oscars of the smart-living world,” the award proves that the S11 is trusted by both industry professionals and consumers.",
      "newsArticle1.body5": "Visitors experienced the multi-function cooker and steam appliances up close while staff demonstrated usage tips in real scenarios.",
      "newsArticle2.title": "DAEWOO Nebula Wall-Mounted Washer Launch: Relentless Pursuit of Quality",
      "newsArticle2.heroDescription": "DAEWOO has expanded its wall-mounted washer family with the new Nebula model, quickly capturing the attention of lifestyle creators.",
      "newsArticle2.body1": "As the pioneer of wall-mounted washers, DAEWOO kept the compact, space-saving form while upgrading baby-care hygiene with hand-wash simulation, nano-silver sterilization, automatic detergent dosing, mid-cycle refill, and rapid wash-and-dry modes.",
      "newsArticle2.body2": "The Nebula's ID design blends deep tones with a romantic gradient for an instantly recognizable look.",
      "newsArticle2.body3": "The product embodies DAEWOO’s philosophy: continual innovation, delightful experiences, and human warmth beyond pure functionality.",
      "newsArticle2.body4": "That philosophy extends across the entire appliance portfolio, from laundry and refrigeration to personal-care and kitchen devices, lifting comfort and happiness at home.",
      "newsArticle2.body5": "By observing fast-paced lifestyles, DAEWOO adds practical touches such as portable storage, multi-use modes, and easy cleaning—the wall-mounted washer has become a trusted helper for busy parents.",
      "newsArticle2.body6": "Each product feels refined and premium, earning recommendations from influencers and top livestream hosts, with multiple items entering Tmall’s official V-ranking.",
      "newsArticle2.body7": "Being selected by stringent hosts validates DAEWOO’s quality, while the 2021 AWE “Golden Word-of-Mouth” award proves that great products must also deliver aesthetic and experiential delight.",
      "newsArticle2.body8": "DAEWOO now serves millions of families across more than 60 countries and will continue helping people embrace a better life.",
      "newsArticle3.title": "Why DAEWOO Appliances Keep Thriving in China",
      "newsArticle3.heroDescription": "Founded in 1967, DAEWOO grew into a Korean powerhouse spanning automotive, heavy industry, real estate, exploration, and appliances—the brand is globally known, and especially loved in China for its premium appliances.",
      "newsArticle3.body1": "Industry data shows DAEWOO's appliance market share has doubled four years in a row, placing it alongside Bear, Morphy Richards, and other first-tier new-consumption brands.",
      "newsArticle3.body2Title": "Top 200 in the Fortune Global 500",
      "newsArticle3.body2": "Born in the automotive sector, DAEWOO now operates 164 overseas branches across 60+ countries, ranking within the top 200 of the Fortune Global 500.",
      "newsArticle3.body3": "More than 3,500 patents, unwavering quality, and the integration of Eastern aesthetics deliver experiences that exceed expectations.",
      "newsArticle3.body4Title": "54 Years Focused on Appliance Innovation",
      "newsArticle3.body4": "Founder Mr. Kim launched the appliance business to better care for his family, channeling decades of engineering expertise into products that make home life healthier and easier.",
      "newsArticle3.body5": "Over 54 years, the product line has expanded from small kitchen tools to major appliances, weaving quality, beauty, health, detail, and care into the brand’s DNA.",
      "newsArticle3.body6Title": "Golden Word-of-Mouth from Users",
      "newsArticle3.body6": "In March 2021, DAEWOO won the AWE “Golden Word-of-Mouth” award for its multi-function cooker—recognition from both users and experts.",
      "newsArticle3.body7": "To resonate with Chinese households, the design team led by a Korean President’s Award winner conducted long-term research and tailored products to local habits and aesthetics.",
      "newsArticle3.body8": "The combination of product beauty and intuitive interaction sparked strong responses—DAEWOO fans, garment steamers, and kettles became phenomenon-level items frequently featured by top livestreamers.",
      "newsArticle3.body9": "DAEWOO’s success reflects the pursuit of Eastern lifestyle aesthetics backed by R&D strength and the craftsmanship of Chinese manufacturing partners.",
      "newsArticle4.title": "DAEWOO Dominates the Douyin 818 Trend Festival with Premium Appliances",
      "newsArticle4.heroDescription": "DAEWOO’s viral garment steamer achieved over 1,000% daily sales growth during Douyin’s 818 Trend Festival, topping multiple category charts.",
      "newsArticle4.body1": "Since 1967, DAEWOO has combined technology and craftsmanship to craft premium appliances that elevate everyday happiness.",
      "newsArticle4.body2": "Every decade brought iconic products, and the brand’s China strategy showcases a philosophy built on global manufacturing and deep insight into Chinese lifestyles and aesthetics.",
      "newsArticle4.body3": "Today’s lineup spans large appliances, kitchen companions, and lifestyle devices—clearly focused on being more user-friendly, more refined, and more emotionally warm.",
      "newsArticle4.body4": "On the usability front, DAEWOO reimagines pain points—packing commercial-grade steam performance into a compact, easy-to-store steamer.",
      "newsArticle4.body5": "Inspired by an octopus, the wide-contact handheld vacuum removes dust and mites efficiently while interchangeable brushes tackle gaps and folds.",
      "newsArticle4.body6": "Practical innovations also come from precise audience segmentation—electric kettles, for instance, combine boiling, insulation, and portability to suit office workers and women’s wellness needs.",
      "newsArticle4.body7": "Believing that appliances should also be lifestyle objects, President’s Award-winning designer Jean brings cultural depth and artistic vision to every product.",
      "newsArticle4.body8": "DAEWOO products pair clean silhouettes with bold colors, are easy to clean and store, and effortlessly blend into any interior style for a consistently joyful experience.",
      "newsArticle4.body9": "The brand believes products can carry emotion—each device evokes different moods, from fresh to nostalgic, reflecting the feelings users invest in their homes.",
      "newsArticle4.body10": "By staying true to its premium roadmap, DAEWOO now serves 60+ countries and is featured on Tmall’s V-ranking of trusted brands.",
      "newsArticle5.title": "Introducing the DAEWOO Smart Bidet Seat",
      "newsArticle5.heroDescription": "Launched in December 2021, the DAEWOO Smart Bidet Seat delivers automatic lid sensing, aerated cleansing, adjustable seat heating, warm-air drying, instant heating, electrolyzed sterilization, and automatic flushing.",
      "newsArticle5.body2": "<strong>Daily Care</strong><br />1. Wipe the cover and seat with a slightly damp cloth.<br />2. For stubborn stains, use a mild cleanser only and avoid strong chemicals or direct sunlight.",
      "newsArticle5.body3": "<strong>Where It Fits</strong><br />Ideal for homes, hotels, restaurants, entertainment venues, spas, offices, hospitals, malls, airports, and convention centers.",
      "newsArticle6.title": "DAEWOO Smart Bidet Features & Highlights",
      "newsArticle6.heroDescription": "Discover the key functions and standout traits of the DAEWOO Smart Bidet Seat.",
      "newsArticle6.featureIntro": "<strong>Key Features</strong>",
      "newsArticle6.feature1": "<strong>Automatic Lid Lift</strong><br />A 120° radar sensor opens the lid hands-free when someone approaches within 0.5 meters.",
      "newsArticle6.feature2": "<strong>Air-Bubble Cleansing</strong><br />Multiple wash modes inject 500+ microbubbles per second, customizing spray angles for different body types.",
      "newsArticle6.feature3": "<strong>Adjustable Seat Heating</strong><br />Surface heating keeps 30 heat points within ±2°C for all-around comfort.",
      "newsArticle6.feature4": "<strong>Multi-Level Warm-Air Drying</strong><br />A large impeller turbo fan delivers several temperature settings to meet personal preferences.",
      "newsArticle6.feature5": "<strong>Automatic Flush</strong><br />Five seconds after the user stands up, the bidet flushes automatically.",
      "newsArticle6.feature6": "<strong>Product Highlights</strong>",
      "newsArticle6.feature7": "1. Broad Compatibility:<br />Fits 99% of mainstream toilet bowls.",
      "newsArticle6.feature8": "2. Easy Installation:<br />Quick to mount or remove, making repeat use effortless.",
      "newsArticle6.feature9": "3. Remodel-Friendly:<br />Smart seats cut renovation costs and reduce material waste.",
      "newsArticle.back": "Back to news list",
      "videoPage.hero.eyebrow": "Video Center",
      "videoPage.hero.title": "Immerse Yourself in DAEWOO's Premium Appliances",
      "videoPage.hero.description": "Curated brand stories, product demos, and scenario videos help you understand every hero product in minutes.",
      "videoPage.overview.title": "Content Highlights",
      "videoPage.overview.description": "Focused on fresh kitchen ideas, efficient cleaning, and comfortable living themes—updated regularly to reflect everyday needs.",
      "videoPage.overview.card1.title": "Kitchen Inspiration",
      "videoPage.overview.card1.description": "From portable juicers to multi-function cookers, see how premium appliances elevate daily cooking.",
      "videoPage.overview.card2.title": "Cleaning Tech",
      "videoPage.overview.card2.description": "Steam mops, wall-mounted laundry care, and more deliver fast, hygienic routines.",
      "videoPage.overview.card3.title": "Comfort Upgrades",
      "videoPage.overview.card3.description": "Neck fans, smart hydration, and lifestyle picks keep every season comfortable.",
      "videoPage.featured.badge": "FEATURED",
      "videoPage.featured.description": "Features an all-in-one design for braising, steaming, and boiling, demonstrating large-capacity inner pot, smart temperature control, and detachable cleaning, suitable for daily home cooking and healthy eating needs.",
      "videoPage.featured.bullet1": "Complete process demonstration of the all-in-one braising, steaming, and boiling design",
      "videoPage.featured.bullet2": "Tips on using large-capacity inner pot, smart temperature control, and detachable cleaning",
      "videoPage.featured.bullet3": "Suitable for daily home cooking and healthy eating needs",
      "videoPage.featured.cta": "Play in modal",
      "videoPage.featured.playLabel": "Play now",
      "videoPage.collections.eyebrow": "Video Library",
      "videoPage.collections.title": "Product Demo Library",
      "videoPage.collections.description": "Filter by theme to quickly find demos that match your lifestyle.",
      "videoPage.filters.all": "All",
      "videoPage.filters.kitchen": "Kitchen & Drinks",
      "videoPage.filters.cleaning": "Home Cleaning",
      "videoPage.filters.comfort": "Comfort Living",
      "videoPage.filters.care": "Laundry Care",
      "videoPage.tags.kitchen": "#KitchenDrinks",
      "videoPage.tags.cleaning": "#HomeCleaning",
      "videoPage.tags.comfort": "#ComfortLiving",
      "videoPage.tags.care": "#LaundryCare",
      "videoPage.cards.zb8.title": "ZB8 Portable Juicer Cup",
      "videoPage.cards.zb8.description": "Lightweight and portable—demonstrates three speed modes plus the double-tap safety start.",
      "videoPage.cards.smop02.title": "SMOP02 Steam Mop",
      "videoPage.cards.smop02.description": "30-second steam warm-up, simultaneous mop-and-vac, sanitizing, and quick brush swaps for efficient cleaning.",
      "videoPage.cards.k10.title": "K10 Electric Grill (Air Fryer)",
      "videoPage.cards.k10.description": "Independent upper and lower heating, rich accessories, and low-oil recipes for effortless cooking.",
      "videoPage.cards.f20.title": "F20 Neck Fan",
      "videoPage.cards.f20.description": "Shows daily commuting scenarios with four fan speeds, flexible airflow, and all-day battery life.",
      "videoPage.cards.dyks01.title": "DY-KS01 Electric Hot Water Dispenser",
      "videoPage.cards.dyks01.description": "Four temperature presets, dual safety locks, and dechlorination for round-the-clock hydration.",
      "videoPage.cards.dybgx09.title": "DY-BGX09 Wall-Mounted Washer",
      "videoPage.cards.dybgx09.description": "Highlights space-saving wall mounting, baby-care modes, and 60°C sanitizing cycles.",
      "videoPage.cards.dybgx09h.title": "DY-BGX09H Wall-Mounted Washer Dryer Combo",
      "videoPage.cards.dybgx09h.description": "Upgraded heat-pump drying and sanitizing, plus tips on load planning and installation.",
      "videoPage.cards.db01.title": "DB01 Drying Box + HI-031 Folding Steam Iron",
      "videoPage.cards.db01.description": "Shows quick drying and steam ironing in one, with travel-friendly packing and garment care advice.",
      "videoPage.cards.hi029pro.title": "HI-029PRO Handheld Garment Steamer",
      "videoPage.cards.hi029pro.description": "Highlights dual steam jets, one-touch dewrinkling, hanging/flat modes, travel storage tips, and auto shutoff reminders.",
      "videoPage.cards.hi045.title": "HI-045 DAEWOO Hobo Handheld Steamer",
      "videoPage.cards.hi045.description": "Covers consistent steam output, a widened soleplate, and detachable tank design for quick touch-ups at home or on the go.",
      "videoPage.cards.hi046.title": "HI-046 DAEWOO Capsule Garment Care Device",
      "videoPage.cards.hi046.description": "Demonstrates the circular chamber's steam reviving, low-temp drying, and aroma-refresh modes tailored for delicate pieces.",
      "videoPage.cards.hi050.title": "HI-050 DAEWOO Spray Steam Garment Steamer",
      "videoPage.cards.hi050.description": "Features dual-mode spray steaming, large-capacity water tank, and smart temperature control, demonstrating flexible hanging/flat ironing and efficient wrinkle removal.",
      "videoPage.cards.dybm05.title": "DY-BM05 Mini Juicer",
      "videoPage.cards.dybm05.description": "Morning kitchen footage features slow-press juicing, easy cleanup, and toddler-friendly recipes.",
      "videoPage.cards.dysp25f01.title": "DYSP-25F01 Electric Hot Water Dispenser",
      "videoPage.cards.dysp25f01.description": "Demonstrates large-capacity storage, scheduled keep-warm, and child-safe design for multi-user hydration.",
      "videoPage.cards.ph05.title": "PH05 DAEWOO Mini Egg Humidifier",
      "videoPage.cards.ph05.description": "Features a compact, rounded egg-shaped design with ultrasonic humidification technology and quiet operation modes, demonstrating multi-level humidity control and auto-humidity maintenance for bedroom and office use.",
      "videoPage.cards.ph06.title": "PH06 DAEWOO Mist-Free Humidifier",
      "videoPage.cards.ph06.description": "Features mist-free humidification technology, large-capacity water tank, and smart humidity maintenance system, demonstrating cold evaporation principles and quiet operation modes, suitable for homes and offices with high air quality requirements.",
      "videoPage.cards.s30pro.title": "S30PRO Multi-Function Steamer & Cooker",
      "videoPage.cards.s30pro.description": "Features an all-in-one design for braising, steaming, and boiling, demonstrating large-capacity inner pot, smart temperature control, and detachable cleaning, suitable for daily home cooking and healthy eating needs.",
      "videoPage.cards.s31.title": "S31 Multi-Function Steam Cooker",
      "videoPage.cards.s31.description": "Features steam cooking technology, multi-layer steaming rack design, and smart timer function, demonstrating rapid steam generation, nutrient preservation, and smoke-free cooking, suitable for modern families pursuing healthy eating.",
      "videoPage.cards.dyzm1266.title": "DYZM-1266 Multi-Cooker",
      "videoPage.cards.dyzm1266.description": "Compact multi-function cooker covers soups, hotpot, and solo meals with a clear lid and detachable pot.",
      "videoPage.note.title": "More videos coming soon",
      "videoPage.note.description": "We keep the library fresh with product launches, installation guides, and customer stories. Need demos or training assets? Contact your DAEWOO representative.",
      "videoPage.note.cta": "Book an in-person demo",
      "contact.hero.eyebrow": "SERVICE NETWORK",
      "contact.hero.title": "Connect with the DAEWOO service team across every touchpoint",
      "contact.hero.description": "Our 24/7 hotline, live chat, offline experience hubs, and enterprise consultants work together to deliver rapid, closed-loop support for consumers and partners.",
      "contact.hero.meta1": "400+ certified service hubs",
      "contact.hero.meta2": "2-hour initial response",
      "contact.hero.meta3": "Always-on monitoring",
      "contact.overview.eyebrow": "Omnichannel touchpoints",
      "contact.overview.title": "Tell us what you need—we’ll route it instantly",
      "contact.overview.description": "Hotline + smart ticketing + regional centers run as one platform so pre-sale, after-sale, and partner requests are processed in a single queue.",
      "contact.overview.cards.hotline.title": "Customer hotline",
      "contact.overview.cards.hotline.description": "400-123-0000 · Installation advice, repair bookings, maintenance plans, and premium upgrades.",
      "contact.overview.cards.hotline.item1": "Live agents 24/7/365",
      "contact.overview.cards.hotline.item2": "95% of calls answered within 30 seconds",
      "contact.overview.cards.hotline.item3": "Instant SMS confirmations",
      "contact.overview.cards.online.title": "AI-powered live chat",
      "contact.overview.cards.online.description": "Start a conversation on web or mini app; AI identifies the device and pushes tutorials before handing off to specialists.",
      "contact.overview.cards.online.item1": "Upload photos/videos for faster diagnostics",
      "contact.overview.cards.online.item2": "Voice descriptions auto-transcribed",
      "contact.overview.cards.online.item3": "Full conversation history is traceable",
      "contact.overview.cards.partner.title": "Channel & partnership desk",
      "contact.overview.cards.partner.description": "Serve resellers, property/hospitality projects, and crossover brands with tailored procurement, training, and co-marketing packages.",
      "contact.overview.cards.partner.item1": "Dedicated business consultant",
      "contact.overview.cards.partner.item2": "Multi-city showflat support",
      "contact.overview.cards.partner.item3": "Shared performance dashboards",
      "contact.channels.eyebrow": "Channel matrix",
      "contact.channels.title": "Jump to the pathway made for your role",
      "contact.channels.description": "End users, enterprise clients, and content partners connect straight to the team that can help.",
      "contact.channels.consumer.tag": "Consumers",
      "contact.channels.consumer.title": "After-sales care / extended warranty",
      "contact.channels.consumer.description": "Activate warranty, register installs, or upgrade to extended care plans with inspections and filter subscriptions.",
      "contact.channels.consumer.item1": "Verify invoice/SN online",
      "contact.channels.consumer.item2": "Sync appliance health records",
      "contact.channels.consumer.item3": "Receive real-time status notifications",
      "contact.channels.enterprise.tag": "Enterprise",
      "contact.channels.enterprise.title": "Project delivery & training",
      "contact.channels.enterprise.description": "Submit requirements for hotels, apartments, or offices—we recommend models, manage installation, training, and SLAs.",
      "contact.channels.enterprise.item1": "Proposal draft in 7 days",
      "contact.channels.enterprise.item2": "On-site training plus remote command",
      "contact.channels.enterprise.item3": "Open IoT data interfaces",
      "contact.channels.content.tag": "Content / channel partners",
      "contact.channels.content.title": "Marketing & co-created IP",
      "contact.channels.content.description": "Coordinate TikTok, Tmall, and experience stores via one desk for assets, schedules, and trial units.",
      "contact.channels.content.item1": "Reserve launch slots first",
      "contact.channels.content.item2": "Co-create city pop-ups",
      "contact.channels.content.item3": "Download hi-res asset library",
      "contact.service.eyebrow": "Service workflow",
      "contact.service.title": "One ticketing platform keeps every step visible",
      "contact.service.description": "Our ITSM-inspired flow shares status updates at each milestone and escalates complex issues to experts in real time.",
      "contact.service.step1.title": "Intake",
      "contact.service.step1.description": "Calls, web forms, and WeChat entries auto-create tickets and dispatch them to the right region/product team.",
      "contact.service.step2.title": "Diagnosis & plan",
      "contact.service.step2.description": "Remote diagnostics and image recognition pinpoint the issue; engineers are scheduled if on-site work is needed.",
      "contact.service.step3.title": "Execution & feedback",
      "contact.service.step3.description": "Spare parts, appointments, and field notes stay in sync, and a completion report is shared automatically.",
      "contact.service.step4.title": "Follow-up & improvement",
      "contact.service.step4.description": "Any satisfaction score below 90% triggers an escalation for root-cause analysis and continuous improvement.",
      "contact.touchpoint.eyebrow": "Dedicated advisors",
      "contact.touchpoint.title": "Need VIP or enterprise-level support?",
      "contact.touchpoint.description": "Leave your request and an industry-specific advisor will reach out with recommendations on budget, timeline, and application scenarios.",
      "contact.touchpoint.item1": "Commercial building & hospitality procurement",
      "contact.touchpoint.item2": "Real-estate handover and rental solutions",
      "contact.touchpoint.item3": "Co-branded marketing & experience spaces",
      "contact.form.name.label": "Name",
      "contact.form.name.placeholder": "Please enter your name",
      "contact.form.company.label": "Company / organization",
      "contact.form.company.placeholder": "Enter your company or organization name",
      "contact.form.phone.label": "Contact info",
      "contact.form.phone.placeholder": "Mobile number or email",
      "contact.form.intent.label": "Request type",
      "contact.form.intent.option1": "Enterprise procurement",
      "contact.form.intent.option2": "Project delivery",
      "contact.form.intent.option3": "Marketing collaboration",
      "contact.form.intent.option4": "Other",
      "contact.form.message.label": "Additional notes",
      "contact.form.message.placeholder": "Tell us what you’d like to learn",
      "contact.form.submit": "Submit request",
      "contact.faq.eyebrow": "FAQ",
      "contact.faq.title": "Quick self-service answers",
      "contact.faq.q1.title": "How do I track repair status?",
      "contact.faq.q1.answer": "Use your ticket number or phone inside “Online Service – Order Center,” or tap the SMS link for real-time updates.",
      "contact.faq.q2.title": "Do I need an appointment to visit a showroom?",
      "contact.faq.q2.answer": "Weekend and launch events are best reserved online; you’ll receive a QR code for fast entry and guided support.",
      "contact.faq.q3.title": "Can enterprise projects be customized?",
      "contact.faq.q3.answer": "Yes—OEM/ODM, panel finishes, and software features are available. A project manager will share timelines and sample plans after submission.",
      "contact.faq.q4.title": "How do I buy filters or spare parts?",
      "contact.faq.q4.answer": "Choose your product in the e-shop/service account, enter the SN to match compatible parts, or purchase directly at the nearest service hub.",
      "about.hero.eyebrow": "BRAND STORY",
      "about.hero.title": "Redefining East-Asian living aesthetics with premium appliances",
      "about.hero.description": "Founded in Seoul in 1967, DAEWOO blends engineering and design to deliver high-quality home, wellness, and IoT solutions worldwide.",
      "about.hero.meta1": "Business in 60+ countries",
      "about.hero.meta2": "3,500+ technology patents",
      "about.hero.meta3": "22 global innovation labs",
      "about.pillars.eyebrow": "Core philosophy",
      "about.pillars.title": "Three pillars powering sustainable growth",
      "about.pillars.description": "User insight-driven design, engineering excellence, and partner ecosystems keep DAEWOO moving forward.",
      "about.pillars.card1.title": "Human-centered design",
      "about.pillars.card1.description": "Studios in Seoul, Shanghai, and Milan unite architecture, materials, and interaction experts to explore modern East-Asian living.",
      "about.pillars.card1.item1": "Annual consumer insight report",
      "about.pillars.card1.item2": "Color & material lab",
      "about.pillars.card1.item3": "Museum / artist collaborations",
      "about.pillars.card2.title": "Engineering & supply synergy",
      "about.pillars.card2.description": "Modular platforms and a global supplier network guarantee reliable quality and delivery.",
      "about.pillars.card2.item1": "Smart manufacturing cloud control",
      "about.pillars.card2.item2": "Traceable component chain",
      "about.pillars.card2.item3": "48-hour spare-part fulfillment",
      "about.pillars.card3.title": "Partner co-creation",
      "about.pillars.card3.description": "Open APIs, co-marketing, training, and service networks create lifetime experiences together.",
      "about.pillars.card3.item1": "Global experience co-build program",
      "about.pillars.card3.item2": "Channel partner growth academy",
      "about.pillars.card3.item3": "Brand co-creation fund",
      "about.stats.item1.title": "12 business units",
      "about.stats.item1.description": "Covering kitchen, air, water, personal care, and IoT scenarios",
      "about.stats.item2.title": "4 regional HQs",
      "about.stats.item2.description": "Seoul, Shanghai, Munich, and L.A. orchestrate global R&D and supply",
      "about.stats.item3.title": "97% customer satisfaction",
      "about.stats.item3.description": "Continuous improvements driven by NPS",
      "about.stats.item4.title": "25% green revenue share",
      "about.stats.item4.description": "Expanding energy-saving products and recycling programs",
      "about.story.eyebrow": "Growth strategy",
      "about.story.title": "From premium appliances to smart-life services",
      "about.story.description": "“High aesthetics, easy control, light maintenance” guides R&D while IoT/data turn products into lifestyle companions.",
      "about.story.item1": "Full-scenario connectivity via DAEWOO Home OS",
      "about.story.item2": "Data-driven upgrades for efficiency, safety, comfort",
      "about.story.item3": "Service-as-product: care teams shape offerings from day one",
      "about.timeline.eyebrow": "Milestones",
      "about.timeline.title": "Key moments at a glance",
      "about.timeline.item1.title": "1967 · Brand founded",
      "about.timeline.item1.description": "Began appliance manufacturing in Seoul with a focus on innovation and reliability",
      "about.timeline.item2.title": "1994 · Entered China",
      "about.timeline.item2.description": "Partnered with Chinese manufacturing to launch local lifestyle hits",
      "about.timeline.item3.title": "2015 · Smart appliance hub",
      "about.timeline.item3.description": "Introduced DAEWOO Smart Hub for connected devices and cloud maintenance",
      "about.timeline.item4.title": "2021 · Global premium strategy",
      "about.timeline.item4.description": "Redefined the premium small-appliance segment and won multiple design awards",
      "about.timeline.item5.title": "2025 · Sustainability goals",
      "about.timeline.item5.description": "Commit to 100% renewable energy in plants and circular design for hero products",
      "about.csr.eyebrow": "Sustainability",
      "about.csr.title": "More than products—our pledge to the planet",
      "about.csr.description": "ESG goals span R&D, manufacturing, logistics, usage, and recycling, with transparent, data-backed metrics.",
      "about.csr.item1": "Cut core-category carbon emissions in half by 2030",
      "about.csr.item2": "120-city trade-in & recycling program",
      "about.csr.item3": "Home-appliance remanufacturing plants targeting zero landfill",
      "about.csr.stat1": "90% recycled pulp packaging",
      "about.csr.stat2": "1.5 Mt CO₂ reduced cumulatively",
      "about.csr.stat3": "120+ public classes & skills programs",
      "about.partners.eyebrow": "Partner ecosystem",
      "about.partners.title": "Co-designing future lifestyles with the industry",
      "about.partners.description": "We collaborate with property developers, hotels, home brands, content platforms, and retailers by sharing tech, operations, and customer insights.",
      "about.partners.card1.title": "Real estate & space ops",
      "about.partners.card1.description": "Deliver smart show flats, serviced apartment, and community appliance solutions.",
      "about.partners.card1.item1": "High-volume install & maintenance services",
      "about.partners.card1.item2": "Move-in-ready energy management",
      "about.partners.card1.item3": "Customized finishes for décor teams",
      "about.partners.card2.title": "Retail & content",
      "about.partners.card2.description": "Create immersive experiences and co-produced content across online and offline channels.",
      "about.partners.card2.item1": "Co-built experience stores & pop-ups",
      "about.partners.card2.item2": "Livestream tech and training support",
      "about.partners.card2.item3": "Shared merchandising and shopper insights",
      "about.partners.card3.title": "Technology partners",
      "about.partners.card3.description": "Open IoT, AI, and materials capabilities to chipset, sensor, and internet companies for joint innovation.",
      "about.partners.card3.item1": "Developer platform & sandbox",
      "about.partners.card3.item2": "Joint labs and standards work",
      "about.partners.card3.item3": "Multilayer security & privacy governance",
      "productCenter.eyebrow": "Product Center",
      "productCenter.title": "Explore DAEWOO's Complete Solution Portfolio",
      "productCenter.description": "From households to business environments, we provide reliable product and service combinations for every scenario. Choose a collection to review specs, use cases, and support details at a glance.",
      "productCenter.sidebarLabel": "Product Directory",
      "productCenter.sidebarTitle": "Product Categories",
      "productCenter.sidebarNavLabel": "Product category navigation",
      "productCenter.noteTitle": "Buying Tips",
      "productCenter.noteDescription": "Pick a collection first, then review model highlights and service bundles to get a tailored recommendation quickly.",
      "productCenter.collection": "Product Collection",
      "productCenter.badgeNew": "NEW",
      "productCenter.home.description": "Covering kitchen, cleaning, and air-quality scenarios to support healthier, easier living.",
      "productCenter.cards.t2311.category": "Seasonal Appliances · Heater",
      "productCenter.cards.t2311.title": "T2311AYV Baseboard Heater",
      "productCenter.cards.dytn33.category": "Nursery Appliances · Formula Maker",
      "productCenter.cards.dytn33.title": "DY-TN33 Liquid Heater (Portable Dual-Mode Formula Maker)",
      "productCenter.cards.s30pro.category": "Kitchen Appliances · Multi Cooker",
      "productCenter.cards.s30pro.title": "S30PRO Multi-function Stew & Steam Pot",
      "productCenter.cards.viewDetails": "View details",
      "productCenter.home.card1.summary": "No-frost cooling and precision temperature control keep ingredients fresh the way they should taste.",
      "productCenter.home.card1.meta1": "600L capacity with adjustable fridge zone",
      "productCenter.home.card1.meta2": "AI moisture-guard freshness mode",
      "productCenter.home.card1.meta3": "Remote temperature control and alerts via mobile",
      "productCenter.home.card2.summary": "45-minute wash & dry cycle with smart detergent dosing that selects the optimal program automatically.",
      "productCenter.home.card2.meta1": "Platinum-ion hygiene care for sensitive skin",
      "productCenter.home.card2.meta2": "16 programs with custom presets",
      "productCenter.home.card2.meta3": "Whole-home connectivity with one-tap scheduling",
      "productCenter.home.card3.summary": "Dual-circulation purification refreshes an entire home in 30 minutes.",
      "productCenter.home.card3.meta1": "PM0.1-grade filtration performance",
      "productCenter.home.card3.meta2": "Whisper sleep mode down to 19 dB",
      "productCenter.home.card3.meta3": "Real-time air-quality sensing",
      "productCenter.home.tablistLabel": "Switch household appliance categories",
      "productCenter.home.tabLarge": "Major Appliances",
      "productCenter.home.tabSmall": "Small Appliances",
      "productCenter.home.more": "View all",
      "productCenter.home.large.refrigerator.title": "Refrigerator Collection",
      "productCenter.home.large.refrigerator.description": "French-door, side-by-side, and slim built-in options for generous preservation.",
      "productCenter.home.large.refrigerator.item1": "French-door refrigerators",
      "productCenter.home.large.refrigerator.item2": "Side-by-side cooling",
      "productCenter.home.large.refrigerator.item3": "Slim built-in columns",
      "productCenter.home.large.refrigerator.item4": "Glass-panel designs",
      "productCenter.home.large.airConditioner.title": "Air Conditioner Lineup",
      "productCenter.home.large.airConditioner.description": "Inverter wall units and living-room floor models deliver efficient comfort.",
      "productCenter.home.large.airConditioner.item1": "Inverter wall-mounted",
      "productCenter.home.large.airConditioner.item2": "Floor-standing smart towers",
      "productCenter.home.large.airConditioner.item3": "Fresh-air purification system",
      "productCenter.home.large.airConditioner.item4": "Grade-1 energy efficiency",
      "productCenter.home.large.tv.title": "TV Series",
      "productCenter.home.large.tv.description": "Ultra HD visuals and smart AV features create a home cinema experience.",
      "productCenter.home.large.tv.item1": "Mini LED flagships",
      "productCenter.home.large.tv.item2": "Ultra HD bezel-less",
      "productCenter.home.large.tv.item3": "Intelligent voice control",
      "productCenter.home.large.tv.item4": "Eye-care viewing mode",
      "productCenter.home.large.wineCabinet.title": "Wine Cabinet Series",
      "productCenter.home.large.wineCabinet.description": "Precision temperature and humidity management for private cellars.",
      "productCenter.home.large.wineCabinet.item1": "Multi-zone temperature control",
      "productCenter.home.large.wineCabinet.item2": "Tiered storage layout",
      "productCenter.home.large.wineCabinet.item3": "Activated-carbon odor filter",
      "productCenter.home.large.wineCabinet.item4": "Crystal-view glass door",
      "productCenter.home.large.dryer.title": "Dryer Series",
      "productCenter.home.large.dryer.description": "Heat-pump technology dries quickly while protecting delicate fabrics.",
      "productCenter.home.large.dryer.item1": "Heat-pump dryers",
      "productCenter.home.large.dryer.item2": "Smart wrinkle care",
      "productCenter.home.large.dryer.item3": "Wool gentle cycle",
      "productCenter.home.large.dryer.item4": "Drum self-clean system",
      "productCenter.home.large.washerDryer.title": "Washer-Dryer Combos",
      "productCenter.home.large.washerDryer.description": "Space-saving laundry stations that cover multiple wash scenarios.",
      "productCenter.home.large.washerDryer.item1": "All-in-one washer dryers",
      "productCenter.home.large.washerDryer.item2": "Steam allergen care",
      "productCenter.home.large.washerDryer.item3": "Rapid quick-wash",
      "productCenter.home.large.washerDryer.item4": "App-connected control",
      "productCenter.home.large.warmingDrawer.title": "Built-in Warming Drawers",
      "productCenter.home.large.warmingDrawer.description": "Keep dishes ready-to-serve with flexible temperature programs.",
      "productCenter.home.large.warmingDrawer.item1": "Multi-level temperature settings",
      "productCenter.home.large.warmingDrawer.item2": "Wide-capacity storage",
      "productCenter.home.large.warmingDrawer.item3": "Soft-open, soft-close",
      "productCenter.home.large.warmingDrawer.item4": "Seamless built-in fit",
      "productCenter.home.small.kitchen.title": "Kitchen Appliances",
      "productCenter.home.small.kitchen.description": "Multi-function tools for cooking, drinks, and everyday meal prep.",
      "productCenter.home.small.kitchen.item1": "High-speed blenders",
      "productCenter.home.small.kitchen.item2": "Air fryers",
      "productCenter.home.small.kitchen.item3": "Multi-purpose cookers",
      "productCenter.home.small.kitchen.item4": "Steam ovens",
      "productCenter.home.small.living.title": "Home Living",
      "productCenter.home.small.living.description": "Cleaning and air-care devices for a healthier home.",
      "productCenter.home.small.living.item1": "Robot vacuums",
      "productCenter.home.small.living.item2": "Humidifiers",
      "productCenter.home.small.living.item3": "Air circulator fans",
      "productCenter.home.small.living.item4": "Anti-mite cleaners",
      "productCenter.home.small.maternal.title": "Mother & Baby",
      "productCenter.home.small.maternal.description": "Caring essentials that support every stage of family life.",
      "productCenter.home.small.maternal.item1": "Baby food processors",
      "productCenter.home.small.maternal.item2": "Bottle warmers",
      "productCenter.home.small.maternal.item3": "Sterilizer & dryer units",
      "productCenter.home.small.maternal.item4": "Baby hair trimmers",
      "productCenter.home.small.seasonal.title": "Seasonal Comfort",
      "productCenter.home.small.seasonal.description": "Cooling and heating companions to manage year-round climate.",
      "productCenter.home.small.seasonal.item1": "Cooling & heating fans",
      "productCenter.home.small.seasonal.item2": "Thermostatic heaters",
      "productCenter.home.small.seasonal.item3": "Warm-air blowers",
      "productCenter.home.small.seasonal.item4": "Ice makers",
      "productCenter.smart.description": "Build an interconnected smart living space with automated, scenario-based control.",
      "productCenter.smart.card1.summary": "Connect 200+ devices and orchestrate lighting, security, and environment from one hub.",
      "productCenter.smart.card1.meta1": "Matter protocol compatible",
      "productCenter.smart.card1.meta2": "Voice and app control across devices",
      "productCenter.smart.card1.meta3": "Household member permission management",
      "productCenter.smart.card2.summary": "Ultra-clear night vision and intelligent detection deliver instant alerts when something unusual happens.",
      "productCenter.smart.card2.meta1": "AI distinguishes family, visitors, and pets",
      "productCenter.smart.card2.meta2": "12-hour backup power during outages",
      "productCenter.smart.card2.meta3": "Bank-grade data encryption",
      "productCenter.smart.card3.summary": "Tailor lighting scenes and circadian rhythms to elevate your home atmosphere.",
      "productCenter.smart.card3.meta1": "Millions of color-temperature combinations",
      "productCenter.smart.card3.meta2": "Multi-layer safety certifications with low power draw",
      "productCenter.smart.card3.meta3": "Supports voice and gesture automations",
      "productCenter.commercial.description": "Serve restaurants, hotels, and public venues with dependable, high-efficiency commercial solutions.",
      "productCenter.commercial.card1.summary": "Modular cold-chain cabinets with precise temperature control safeguard ingredients.",
      "productCenter.commercial.card1.meta1": "Wide -30℃~10℃ temperature range",
      "productCenter.commercial.card1.meta2": "Built-in HACCP traceability",
      "productCenter.commercial.card1.meta3": "24/7 remote monitoring & maintenance",
      "productCenter.commercial.card2.summary": "Perform steaming, baking, and braising in one unit to double kitchen efficiency.",
      "productCenter.commercial.card2.meta1": "Ten one-touch programmable menus",
      "productCenter.commercial.card2.meta2": "Intelligent ventilation and grease filtration",
      "productCenter.commercial.card2.meta3": "Durable stainless-steel chamber",
      "productCenter.commercial.card3.summary": "Deliver high-volume purified water for office towers and public facilities.",
      "productCenter.commercial.card3.meta1": "Multi-stage membrane filtration",
      "productCenter.commercial.card3.meta2": "Lifecycle maintenance program",
      "productCenter.commercial.card3.meta3": "Live water-quality dashboard",
      "productCenter.care.description": "Focus on daily beauty and wellness care for individuals and the whole family.",
      "productCenter.care.card1.summary": "57℃ constant temperature plus high-density negative ions dry hair fast without damage.",
      "productCenter.care.card1.meta1": "Four magnetic nozzles included",
      "productCenter.care.card1.meta2": "Smart temperature guard prevents overheating",
      "productCenter.care.card1.meta3": "Foldable, travel-ready design",
      "productCenter.care.card2.summary": "Four-in-one treatment modes improve skin texture and firmness.",
      "productCenter.care.card2.meta1": "RF and EMS lifting care",
      "productCenter.care.card2.meta2": "Adjustable LED light therapy",
      "productCenter.care.card2.meta3": "Usage history logged automatically",
      "productCenter.care.card3.summary": "Measure 16 body metrics accurately and surface health trends instantly.",
      "productCenter.care.card3.meta1": "AI body-age analysis",
      "productCenter.care.card3.meta2": "Individual profiles for family members",
      "productCenter.care.card3.meta3": "Syncs with WeChat and mobile app",
      "productCenter.wearable.description": "Blend technology into commuting, sports, and wellness to stay on pace effortlessly.",
      "productCenter.wearable.card1.summary": "Professional workout tracking with multi-satellite positioning keeps outdoor adventures secure.",
      "productCenter.wearable.card1.meta1": "Supports 100+ sport modes",
      "productCenter.wearable.card1.meta2": "Dual-band GPS + BeiDou",
      "productCenter.wearable.card1.meta3": "Up to 14-day battery life",
      "productCenter.wearable.card2.summary": "Adaptive noise control preserves crystal sound on commutes and flights.",
      "productCenter.wearable.card2.meta1": "42 dB hybrid noise cancellation",
      "productCenter.wearable.card2.meta2": "Low-latency gaming mode",
      "productCenter.wearable.card2.meta3": "Wireless and fast charging",
      "productCenter.wearable.card3.summary": "Three fan speeds and wraparound airflow keep you cool on the go.",
      "productCenter.wearable.card3.meta1": "Featherlight silicone build",
      "productCenter.wearable.card3.meta2": "USB-C fast charging support",
      "productCenter.wearable.card3.meta3": "Magnetic foldable design",
      "productCenter.digital.description": "Deliver agile digital experiences for entertainment and mobile productivity.",
      "productCenter.digital.card1.summary": "4K clarity with smart focus and auto keystone let you create a home cinema anytime.",
      "productCenter.digital.card1.meta1": "2800 ANSI-lumen brightness",
      "productCenter.digital.card1.meta2": "Dolby Atmos audio",
      "productCenter.digital.card1.meta3": "Screen-free cinema experience",
      "productCenter.digital.card2.summary": "360° hinge and pen input balance creativity and productivity in one device.",
      "productCenter.digital.card2.meta1": "OLED 120Hz touch display",
      "productCenter.digital.card2.meta2": "Long-life battery with fast charge",
      "productCenter.digital.card2.meta3": "AI noise-suppression conference mic",
      "productCenter.digital.card3.summary": "Inkless thermal printing outputs photos and notes instantly.",
      "productCenter.digital.card3.meta1": "Bluetooth dual-device pairing",
      "productCenter.digital.card3.meta2": "Ready-to-use template library",
      "productCenter.digital.card3.meta3": "Up to 7-day standby battery",
      "productCenter.others.description": "Find custom and seasonal offerings to meet diverse business and lifestyle needs.",
      "productCenter.others.card1.summary": "Provide tailored gift bundles and brand customization for enterprise clients and partners.",
      "productCenter.others.card1.meta1": "Flexible multi-category combinations",
      "productCenter.others.card1.meta2": "Optional bespoke packaging design",
      "productCenter.others.card1.meta3": "After-sales and logistics support",
      "productCenter.others.card2.summary": "Design energy-saving, low-carbon solutions for public and commercial spaces.",
      "productCenter.others.card2.meta1": "Energy assessment and retrofit consulting",
      "productCenter.others.card2.meta2": "Integrated IoT energy monitoring",
      "productCenter.others.card2.meta3": "Lifecycle maintenance services",
      "productCenter.others.card3.summary": "Extended warranties and on-site care secure equipment uptime.",
      "productCenter.others.card3.meta1": "Multi-year warranty options",
      "productCenter.others.card3.meta2": "Factory engineers on site",
      "productCenter.others.card3.meta3": "Rapid-response service network",
      "productCenter.service.heading": "Get tailored product advice and service planning",
      "productCenter.service.description": "Share your needs and our consultants will recommend models, installation plans, and after-sales support.",
      "productCenter.service.ctaPrimary": "Contact a consultant",
      "productCenter.service.ctaSecondary": "Book a service center visit",
      "product.description.title": "Product Description",
      "productCenter.comingSoon.title": "Coming Soon",
      "productCenter.comingSoon.description": "Stay tuned for updates",
      "hero.title": "Experience new service with DAEWOO",
      "hero.description": "We deliver peace of mind with innovative support and trusted engineering.",
      "footer.copy": "© 2025 DAEWOO SERVICE CO., LTD. All rights reserved.",
      "hero.prev": "Previous banner",
      "hero.next": "Next banner",
    }
  };

  const SEARCH_NEWS_INDEX = [
    {
      type: "news",
      id: "article-6",
      url: "news/articles/article-6.html",
      titleKey: "homeNews.article6.title",
      summaryKey: "homeNews.article6.summary",
      badgeKey: "newsPage.tags.product",
      keywords: ["智能坐便盖", "bidet", "卫浴", "功能特点"],
    },
    {
      type: "news",
      id: "article-5",
      url: "news/articles/article-5.html",
      titleKey: "homeNews.article5.title",
      summaryKey: "homeNews.article5.summary",
      badgeKey: "newsPage.tags.product",
      keywords: ["坐便盖介绍", "新品", "舒适体验", "智能卫浴"],
    },
    {
      type: "news",
      id: "article-4",
      url: "news/articles/article-4.html",
      titleKey: "homeNews.article4.title",
      summaryKey: "homeNews.article4.summary",
      badgeKey: "newsPage.tags.brand",
      keywords: ["抖音818", "品牌动态", "直播带货", "상승세"],
    },
    {
      type: "news",
      id: "article-3",
      url: "news/articles/article-3.html",
      titleKey: "homeNews.article3.title",
      summaryKey: "homeNews.article3.summary",
      badgeKey: "newsPage.tags.brand",
      keywords: ["中国市场", "家电口碑", "品牌故事", "成长"],
    },
    {
      type: "news",
      id: "article-2",
      url: "news/articles/article-2.html",
      titleKey: "newsPage.article2.title",
      summaryKey: "newsPage.article2.summary",
      badgeKey: "newsPage.tags.product",
      keywords: ["壁挂洗衣机", "星云", "新品发布", "laundry"],
    },
    {
      type: "news",
      id: "article-1",
      url: "news/articles/article-1.html",
      titleKey: "newsPage.article1.title",
      summaryKey: "newsPage.article1.summary",
      badgeKey: "newsPage.tags.trend",
      keywords: ["AWE2021", "行业展会", "市场战略", "industry"],
    },
  ];

  const SEARCH_VIDEO_INDEX = [
    {
      type: "videos",
      id: "hi050",
      url: "video-center.html?video=hi050",
      titleKey: "videoPage.cards.hi050.title",
      summaryKey: "videoPage.cards.hi050.description",
      badgeKey: "videoPage.tags.care",
      keywords: ["HI-050", "喷熨挂烫机", "steam", "care"],
    },
    {
      type: "videos",
      id: "hi029pro",
      url: "video-center.html?video=hi029pro",
      titleKey: "videoPage.cards.hi029pro.title",
      summaryKey: "videoPage.cards.hi029pro.description",
      badgeKey: "videoPage.tags.care",
      keywords: ["HI-029PRO", "手持挂烫机", "steamer", "travel"],
    },
    {
      type: "videos",
      id: "hi045",
      url: "video-center.html?video=hi045",
      titleKey: "videoPage.cards.hi045.title",
      summaryKey: "videoPage.cards.hi045.description",
      badgeKey: "videoPage.tags.care",
      keywords: ["HI-045", "Hobo", "handheld steamer", "护理"],
    },
    {
      type: "videos",
      id: "hi046",
      url: "video-center.html?video=hi046",
      titleKey: "videoPage.cards.hi046.title",
      summaryKey: "videoPage.cards.hi046.description",
      badgeKey: "videoPage.tags.care",
      keywords: ["HI-046", "衣物护理机", "round box", "케어"],
    },
    {
      type: "videos",
      id: "db01",
      url: "video-center.html?video=db01",
      titleKey: "videoPage.cards.db01.title",
      summaryKey: "videoPage.cards.db01.description",
      badgeKey: "videoPage.tags.care",
      keywords: ["DB01", "干衣盒", "travel set", "steam"],
    },
    {
      type: "videos",
      id: "dybgx09",
      url: "video-center.html?video=dybgx09",
      titleKey: "videoPage.cards.dybgx09.title",
      summaryKey: "videoPage.cards.dybgx09.description",
      badgeKey: "videoPage.tags.cleaning",
      keywords: ["DY-BGX09", "壁挂洗衣机", "cleaning", "laundry"],
    },
    {
      type: "videos",
      id: "dybgx09h",
      url: "video-center.html?video=dybgx09h",
      titleKey: "videoPage.cards.dybgx09h.title",
      summaryKey: "videoPage.cards.dybgx09h.description",
      badgeKey: "videoPage.tags.cleaning",
      keywords: ["DY-BGX09H", "洗烘一体", "heat pump", "laundry"],
    },
    {
      type: "videos",
      id: "zb8",
      url: "video-center.html?video=zb8",
      titleKey: "videoPage.cards.zb8.title",
      summaryKey: "videoPage.cards.zb8.description",
      badgeKey: "videoPage.tags.kitchen",
      keywords: ["ZB8", "果汁杯", "portable blender", "juicer"],
    },
    {
      type: "videos",
      id: "smop02",
      url: "video-center.html?video=smop02",
      titleKey: "videoPage.cards.smop02.title",
      summaryKey: "videoPage.cards.smop02.description",
      badgeKey: "videoPage.tags.cleaning",
      keywords: ["SMOP02", "蒸汽洗地机", "steam mop", "clean"],
    },
    {
      type: "videos",
      id: "k10",
      url: "video-center.html?video=k10",
      titleKey: "videoPage.cards.k10.title",
      summaryKey: "videoPage.cards.k10.description",
      badgeKey: "videoPage.tags.kitchen",
      keywords: ["K10", "电烤炉", "air fryer", "kitchen"],
    },
    {
      type: "videos",
      id: "f20",
      url: "video-center.html?video=f20",
      titleKey: "videoPage.cards.f20.title",
      summaryKey: "videoPage.cards.f20.description",
      badgeKey: "videoPage.tags.comfort",
      keywords: ["F20", "挂脖风扇", "neck fan", "summer"],
    },
    {
      type: "videos",
      id: "dyks01",
      url: "video-center.html?video=dyks01",
      titleKey: "videoPage.cards.dyks01.title",
      summaryKey: "videoPage.cards.dyks01.description",
      badgeKey: "videoPage.tags.comfort",
      keywords: ["DY-KS01", "开水瓶", "hot water", "comfort"],
    },
    {
      type: "videos",
      id: "dybm05",
      url: "video-center.html?video=dybm05",
      titleKey: "videoPage.cards.dybm05.title",
      summaryKey: "videoPage.cards.dybm05.description",
      badgeKey: "videoPage.tags.kitchen",
      keywords: ["DY-BM05", "原汁机", "juicer", "slow press"],
    },
    {
      type: "videos",
      id: "dysp25f01",
      url: "video-center.html?video=dysp25f01",
      titleKey: "videoPage.cards.dysp25f01.title",
      summaryKey: "videoPage.cards.dysp25f01.description",
      badgeKey: "videoPage.tags.comfort",
      keywords: ["DYSP-25F01", "开水瓶", "office", "hydration"],
    },
    {
      type: "videos",
      id: "ph05",
      url: "video-center.html?video=ph05",
      titleKey: "videoPage.cards.ph05.title",
      summaryKey: "videoPage.cards.ph05.description",
      badgeKey: "videoPage.tags.comfort",
      keywords: ["PH05", "小巨蛋加湿器", "humidifier", "comfort"],
    },
    {
      type: "videos",
      id: "ph06",
      url: "video-center.html?video=ph06",
      titleKey: "videoPage.cards.ph06.title",
      summaryKey: "videoPage.cards.ph06.description",
      badgeKey: "videoPage.tags.comfort",
      keywords: ["PH06", "无雾加湿器", "cool mist", "comfort"],
    },
    {
      type: "videos",
      id: "dyzm1266",
      url: "video-center.html?video=dyzm1266",
      titleKey: "videoPage.cards.dyzm1266.title",
      summaryKey: "videoPage.cards.dyzm1266.description",
      badgeKey: "videoPage.tags.kitchen",
      keywords: ["DYZM-1266", "电煮锅", "one-pot", "kitchen"],
    },
    {
      type: "videos",
      id: "s30pro",
      url: "video-center.html?video=s30pro",
      titleKey: "videoPage.cards.s30pro.title",
      summaryKey: "videoPage.cards.s30pro.description",
      badgeKey: "videoPage.tags.kitchen",
      keywords: ["S30PRO", "炖蒸煮锅", "multi cooker", "kitchen"],
    },
    {
      type: "videos",
      id: "s31",
      url: "video-center.html?video=s31",
      titleKey: "videoPage.cards.s31.title",
      summaryKey: "videoPage.cards.s31.description",
      badgeKey: "videoPage.tags.kitchen",
      keywords: ["S31", "蒸汽料理锅", "steam cooker", "healthy"],
    },
  ];

  const SEARCH_GROUPS = [
    { key: "products", labelKey: "search.results.products", viewAllUrl: "product-center.html", limit: 3 },
    { key: "news", labelKey: "search.results.news", viewAllUrl: "news.html#news-section", limit: 3 },
    { key: "videos", labelKey: "search.results.videos", viewAllUrl: "video-center.html", limit: 3 },
  ];

  const PRODUCT_SEARCH_FALLBACK = [
    {
      type: "products",
      id: "product-988",
      url: "product-988.html",
      title: {
        zh: "DY-TN33 液体加热器（便携双模调奶器）",
        en: "DY-TN33 Liquid Heater (Portable Dual-Mode Formula Maker)",
        ko: "DY-TN33 액체 가열기(휴대 듀얼모드 분유기)",
      },
      summary: {
        zh: "搭载便携双模加热与恒温功能，满足宝宝喂养的多场景需求。",
        en: "Portable dual-mode heating with precise temperature control for every feeding scenario.",
        ko: "휴대 듀얼 모드와 정밀 온도 제어로 다양한 수유 상황에 맞게 빠르게 가열합니다.",
      },
      eyebrow: {
        zh: "母婴电器 · 调奶器",
        en: "Nursery Appliances · Formula Maker",
        ko: "모유·유아 가전 · 분유 조제기",
      },
      keywords: ["DY-TN33", "调奶器", "formula maker", "母婴", "portable heater"],
    },
    {
      type: "products",
      id: "product-t2311ayv",
      url: "product-t2311ayv.html",
      title: {
        zh: "T2311AYV 踢脚线取暖器",
        en: "T2311AYV Baseboard Heater",
        ko: "T2311AYV 플린스 히터",
      },
      summary: {
        zh: "纤薄踢脚线循环供暖，兼顾客厅、卧室与办公空间的舒适温度。",
        en: "Slim baseboard heating with circulating airflow and multi-stage modes for living rooms, bedrooms, and studios.",
        ko: "슬림한 플린스 난방과 순환 온풍으로 거실·침실·서재를 빠르게 데워 줍니다.",
      },
      eyebrow: {
        zh: "两季电器 · 取暖器",
        en: "Seasonal Appliances · Heater",
        ko: "계절가전 · 난방기",
      },
      keywords: ["T2311AYV", "踢脚线取暖", "baseboard heater", "温控", "난방기"],
    },
    {
      type: "products",
      id: "product-s30pro",
      url: "product-s30pro.html",
      title: {
        zh: "S30PRO 多功能炖蒸煮锅",
        en: "S30PRO Multi-function Stew & Steam Pot",
        ko: "S30PRO 멀티 스튜 & 스팀 포트",
      },
      summary: {
        zh: "一机多用支持炖、蒸、煮，让家庭轻松打造健康餐桌。",
        en: "An all-in-one cooker for stewing, steaming, and boiling to help families prepare healthy meals with ease.",
        ko: "찌기·끓이기·조림까지 가능한 올인원 쿠커로 건강한 식단을 손쉽게 완성하세요.",
      },
      eyebrow: {
        zh: "厨房电器 · 电炖锅",
        en: "Kitchen Appliances · Multi Cooker",
        ko: "주방가전 · 멀티 쿠커",
      },
      keywords: ["S30PRO", "多功能烹饪", "multi cooker", "厨房", "healthy meals"],
    },
  ];

  const fallbackLang = "zh";
  const supportedLangs = Object.keys(translations);
  const htmlElement = document.documentElement;
  const langSelector = document.getElementById("lang-select");
  let currentLang = fallbackLang;

  const formatLangAttr = (lang) => {
    switch (lang) {
      case "ko":
        return "ko";
      case "en":
        return "en";
      case "zh":
      default:
        return "zh-Hans";
    }
  };

  const getTranslation = (lang, key) => {
    const normalized = supportedLangs.includes(lang) ? lang : fallbackLang;
    return (
      translations[normalized]?.[key] ??
      translations[fallbackLang]?.[key] ??
      ""
    );
  };

  class GlobalSearchController {
    constructor({ supportedLangs, getTranslation, getCurrentLang }) {
      this.supportedLangs = Array.isArray(supportedLangs) && supportedLangs.length > 0 ? supportedLangs : [fallbackLang];
      this.getTranslation = getTranslation;
      this.getCurrentLang = typeof getCurrentLang === "function" ? getCurrentLang : () => fallbackLang;
      this.forms = Array.from(document.querySelectorAll(".global-search"));
      this.data = {
        products: [],
        news: SEARCH_NEWS_INDEX.slice(),
        videos: SEARCH_VIDEO_INDEX.slice(),
      };
      this.groupMeta = SEARCH_GROUPS;
      this.panels = new Map();
      this.renderCache = new WeakMap();
      this.queryTimers = new WeakMap();
      this.activeForm = null;
      this.readyPromise = this.loadProducts();
      if (this.forms.length === 0) {
        return;
      }
      this.forms.forEach((form) => this.enhanceForm(form));
      document.addEventListener("click", (event) => this.handleDocumentClick(event));
      document.addEventListener("keydown", (event) => this.handleKeydown(event));
      window.addEventListener("daewoo:languagechange", () => {
        this.panels.forEach((panel, form) => {
          if (!panel.classList.contains("is-visible")) return;
          const cached = this.renderCache.get(form);
          if (cached?.query && cached.matches) {
            this.renderResults(form, cached.query, cached.matches, { silent: true });
          }
        });
      });
    }

    async loadProducts() {
      try {
        const response = await fetch("data/products.json", { cache: "force-cache" });
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        const payload = await response.json();
        const items = Array.isArray(payload?.products) ? payload.products : [];
        this.data.products = items
          .map((product) => this.transformProduct(product))
          .filter(Boolean);
        if (this.data.products.length === 0) {
          this.data.products = PRODUCT_SEARCH_FALLBACK;
        }
      } catch (error) {
        console.warn("GlobalSearchController: failed to load product data", error);
        this.data.products = PRODUCT_SEARCH_FALLBACK;
      }
    }

    transformProduct(product) {
      if (!product || !product.id) {
        return null;
      }
      const localizedTitle = {};
      const localizedSummary = {};
      const localizedEyebrow = {};
      this.supportedLangs.forEach((lang) => {
        if (lang === "zh") {
          localizedTitle[lang] = product.hero?.title ?? "";
          localizedSummary[lang] = product.hero?.description ?? "";
          localizedEyebrow[lang] = product.hero?.eyebrow ?? "";
        } else {
          const translation = product.translations?.[lang];
          localizedTitle[lang] = translation?.hero?.title ?? "";
          localizedSummary[lang] = translation?.hero?.description ?? "";
          localizedEyebrow[lang] = translation?.hero?.eyebrow ?? "";
        }
      });
      const fallbackTitle = localizedTitle.zh || localizedTitle.en || "";
      const fallbackSummary = localizedSummary.zh || localizedSummary.en || "";
      const fallbackEyebrow = localizedEyebrow.zh || localizedEyebrow.en || "";
      this.supportedLangs.forEach((lang) => {
        if (!localizedTitle[lang]) localizedTitle[lang] = fallbackTitle;
        if (!localizedSummary[lang]) localizedSummary[lang] = fallbackSummary;
        if (!localizedEyebrow[lang]) localizedEyebrow[lang] = fallbackEyebrow;
      });
      const keywords = [
        product.id,
        product.slug,
        product.hero?.title,
        product.hero?.description,
        product.hero?.eyebrow,
      ];
      if (Array.isArray(product.summary?.details)) {
        product.summary.details.forEach((detail) => {
          if (detail?.value) {
            keywords.push(String(detail.value));
          }
        });
      }
      this.supportedLangs.forEach((lang) => {
        keywords.push(localizedTitle[lang], localizedSummary[lang], localizedEyebrow[lang]);
      });
      return {
        type: "products",
        id: product.id,
        url: `${product.id}.html`,
        title: localizedTitle,
        summary: localizedSummary,
        eyebrow: localizedEyebrow,
        keywords: keywords.filter(Boolean),
      };
    }

    enhanceForm(form) {
      const input = form.querySelector("input[type='search']");
      if (!input) return;
      const panel = document.createElement("div");
      panel.className = "global-search__results";
      panel.dataset.searchPanel = "true";
      panel.setAttribute("role", "region");
      panel.setAttribute("aria-live", "polite");
      panel.hidden = true;
      form.appendChild(panel);
      this.panels.set(form, panel);

      form.addEventListener("submit", (event) => {
        event.preventDefault();
        this.executeSearch(form, input.value);
      });

      input.addEventListener("input", () => {
        const previousTimer = this.queryTimers.get(form);
        if (previousTimer) {
          clearTimeout(previousTimer);
        }
        const value = input.value;
        if (!value.trim()) {
          this.hidePanel(form);
          return;
        }
        const timerId = window.setTimeout(() => {
          this.executeSearch(form, value, { isLive: true });
        }, 240);
        this.queryTimers.set(form, timerId);
      });

      input.addEventListener("focus", () => {
        if (!input.value.trim()) {
          this.renderMessage(form, "hint");
          return;
        }
        const cached = this.renderCache.get(form);
        if (cached?.query && cached.matches) {
          this.renderResults(form, cached.query, cached.matches, { silent: true });
        }
      });

      panel.addEventListener("click", (event) => {
        const target = event.target;
        if (target instanceof HTMLElement && target.closest("[data-search-close]")) {
          this.hidePanel(form);
        }
      });
    }

    async executeSearch(form, rawQuery) {
      const query = rawQuery.trim();
      if (!query) {
        this.hidePanel(form);
        return;
      }
      if (!this.isQueryLongEnough(query)) {
        this.renderMessage(form, "short");
        return;
      }
      this.renderMessage(form, "loading", { query });
      await this.readyPromise;
      const matches = this.runQuery(query);
      if (matches.total === 0) {
        this.renderMessage(form, "empty", { query });
        return;
      }
      this.renderResults(form, query, matches);
    }

    isQueryLongEnough(query) {
      if (!query) return false;
      const trimmed = query.trim();
      const hasCjk = /[\u3040-\u30ff\u3400-\u9fff]/.test(trimmed);
      if (hasCjk) {
        return trimmed.length >= 1;
      }
      return trimmed.replace(/\s+/g, "").length >= 2;
    }

    runQuery(query) {
      const normalized = query.toLowerCase();
      const tokens = normalized.split(/\s+/).filter(Boolean);
      const result = {
        products: [],
        news: [],
        videos: [],
        total: 0,
      };
      ["products", "news", "videos"].forEach((key) => {
        this.data[key].forEach((entry) => {
          if (this.entryMatches(entry, normalized, tokens)) {
            result[key].push(entry);
            result.total += 1;
          }
        });
      });
      return result;
    }

    entryMatches(entry, normalizedQuery, tokens) {
      const haystack = this.getEntrySearchText(entry);
      if (!haystack) {
        return false;
      }
      if (tokens.length <= 1) {
        return haystack.includes(normalizedQuery);
      }
      return tokens.every((token) => haystack.includes(token));
    }

    getEntrySearchText(entry) {
      if (entry._searchText) {
        return entry._searchText;
      }
      const parts = [];
      if (entry.titleKey) {
        this.supportedLangs.forEach((lang) => {
          parts.push(this.getTranslation(lang, entry.titleKey));
        });
      }
      if (entry.summaryKey) {
        this.supportedLangs.forEach((lang) => {
          parts.push(this.getTranslation(lang, entry.summaryKey));
        });
      }
      if (entry.title && typeof entry.title === "object") {
        this.supportedLangs.forEach((lang) => parts.push(entry.title[lang]));
      } else if (typeof entry.title === "string") {
        parts.push(entry.title);
      }
      if (entry.summary && typeof entry.summary === "object") {
        this.supportedLangs.forEach((lang) => parts.push(entry.summary[lang]));
      } else if (typeof entry.summary === "string") {
        parts.push(entry.summary);
      }
      if (entry.badge) {
        parts.push(entry.badge);
      }
      if (entry.keywords) {
        parts.push(...entry.keywords);
      }
      if (entry.id) {
        parts.push(entry.id);
      }
      entry._searchText = parts
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return entry._searchText;
    }

    getEntryTitle(entry, lang) {
      if (entry.titleKey) {
        return this.getTranslation(lang, entry.titleKey) || "";
      }
      if (entry.title && typeof entry.title === "object") {
        return entry.title[lang] || entry.title.zh || entry.title.en || "";
      }
      return entry.title ?? "";
    }

    getEntrySummary(entry, lang) {
      if (entry.summaryKey) {
        return this.getTranslation(lang, entry.summaryKey) || "";
      }
      if (entry.summary && typeof entry.summary === "object") {
        return entry.summary[lang] || entry.summary.zh || entry.summary.en || "";
      }
      return entry.summary ?? "";
    }

    getEntryBadge(entry, lang) {
      if (entry.badgeKey) {
        return this.getTranslation(lang, entry.badgeKey) || "";
      }
      if (entry.eyebrow && typeof entry.eyebrow === "object") {
        return entry.eyebrow[lang] || entry.eyebrow.zh || entry.eyebrow.en || "";
      }
      return entry.badge ?? "";
    }

    renderMessage(form, state, { query = "" } = {}) {
      const panel = this.panels.get(form);
      if (!panel) return;
      const lang = this.getCurrentLang();
      const keyMap = {
        hint: "search.results.hint",
        short: "search.results.shortQuery",
        loading: "search.results.loading",
        empty: "search.results.empty",
      };
      const message = this.getTranslation(lang, keyMap[state]) || "";
      const closeLabel = this.getTranslation(lang, "search.results.close") || "Close";
      panel.innerHTML = `
        <button type="button" class="global-search__close" data-search-close aria-label="${this.escapeHtml(closeLabel)}">&times;</button>
        <p class="global-search__status">${this.escapeHtml(message)}</p>
      `;
      panel.dataset.query = query;
      panel.classList.toggle("is-loading", state === "loading");
      panel.setAttribute("aria-live", "polite");
      this.renderCache.set(form, { query, matches: null });
      this.showPanel(form);
    }

    renderResults(form, query, matches, { silent = false } = {}) {
      const panel = this.panels.get(form);
      if (!panel) return;
      const lang = this.getCurrentLang();
      const heading = this.getTranslation(lang, "search.results.heading") || "Search";
      const closeLabel = this.getTranslation(lang, "search.results.close") || "Close";
      const countTemplate = this.getTranslation(lang, "search.results.count") || "{{count}}";
      const countLabel = this.fillTemplate(countTemplate, { count: matches.total });
      const groupsMarkup = this.groupMeta
        .map((group) => this.renderGroup(group, matches[group.key], lang))
        .filter(Boolean)
        .join("");
      const emptyMarkup = `<p class="global-search__empty">${this.escapeHtml(
        this.getTranslation(lang, "search.results.empty") || ""
      )}</p>`;
      panel.innerHTML = `
        <button type="button" class="global-search__close" data-search-close aria-label="${this.escapeHtml(closeLabel)}">&times;</button>
        <p class="global-search__status"><strong>${this.escapeHtml(heading)}</strong> · ${this.escapeHtml(countLabel)}</p>
        ${groupsMarkup || emptyMarkup}
      `;
      panel.dataset.query = query;
      panel.classList.remove("is-loading");
      panel.setAttribute("aria-live", silent ? "off" : "polite");
      this.renderCache.set(form, { query, matches });
      this.showPanel(form);
    }

    renderGroup(meta, entries = [], lang) {
      if (!entries || entries.length === 0) {
        return "";
      }
      const limit = meta.limit ?? 3;
      const subset = entries.slice(0, limit);
      const label = this.getTranslation(lang, meta.labelKey) || "";
      const itemsMarkup = subset.map((entry) => this.renderEntry(entry, lang)).join("");
      const remaining = entries.length - subset.length;
      const viewAllLabel = this.getTranslation(lang, "search.results.viewAll") || "";
      const viewAllLink =
        meta.viewAllUrl && viewAllLabel
          ? `<a class="global-search__view-all" href="${meta.viewAllUrl}">${this.escapeHtml(viewAllLabel)}</a>`
          : "";
      let footer = "";
      if (remaining > 0) {
        const remainingTemplate = this.getTranslation(lang, "search.results.remaining") || "+{{count}}";
        const remainingLabel = this.fillTemplate(remainingTemplate, { count: remaining });
        footer = `
          <div class="global-search__group-footer">
            <span>${this.escapeHtml(remainingLabel)}</span>
            ${viewAllLink}
          </div>
        `;
      } else if (viewAllLink) {
        footer = `<div class="global-search__group-footer">${viewAllLink}</div>`;
      }
      return `
        <section class="global-search__group">
          <p class="global-search__group-label">${this.escapeHtml(label)}</p>
          ${itemsMarkup}
          ${footer}
        </section>
      `;
    }

    renderEntry(entry, lang) {
      const title = this.getEntryTitle(entry, lang);
      const summary = this.getEntrySummary(entry, lang);
      const badge = this.getEntryBadge(entry, lang);
      const url = entry.url || "#";
      return `
        <a class="global-search__result" href="${url}">
          ${badge ? `<span class="global-search__result-eyebrow">${this.escapeHtml(badge)}</span>` : ""}
          <p class="global-search__result-title">${this.escapeHtml(title)}</p>
          ${summary ? `<p class="global-search__result-summary">${this.escapeHtml(summary)}</p>` : ""}
        </a>
      `;
    }

    handleDocumentClick(event) {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;
      const clickedInside = this.forms.some((form) => form.contains(target));
      if (!clickedInside) {
        this.forms.forEach((form) => this.hidePanel(form));
      }
    }

    handleKeydown(event) {
      if (event.key === "Escape") {
        this.forms.forEach((form) => this.hidePanel(form));
      }
    }

    showPanel(form) {
      const panel = this.panels.get(form);
      if (!panel) return;
      panel.hidden = false;
      panel.classList.add("is-visible");
      this.activeForm = form;
    }

    hidePanel(form) {
      const panel = this.panels.get(form);
      if (!panel) return;
      panel.hidden = true;
      panel.classList.remove("is-visible");
      panel.classList.remove("is-loading");
      if (this.activeForm === form) {
        this.activeForm = null;
      }
    }

    fillTemplate(template, replacements) {
      if (!template) return "";
      return template.replace(/\{\{\s*(\w+)\s*\}\}/g, (_, key) => {
        return replacements?.[key] != null ? String(replacements[key]) : "";
      });
    }

    escapeHtml(text) {
      if (!text) return "";
      return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
    }
  }

  const applyTranslations = (lang) => {
    const normalized = supportedLangs.includes(lang) ? lang : fallbackLang;
    currentLang = normalized;
    htmlElement.setAttribute("lang", formatLangAttr(normalized));
    window.dispatchEvent(
      new CustomEvent("daewoo:languagechange", {
        detail: { lang: normalized },
      })
    );

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      const translation = getTranslation(normalized, key);
      if (translation) {
        el.textContent = translation;
      }
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.dataset.i18nHtml;
      const translation = getTranslation(normalized, key);
      if (translation) {
        el.innerHTML = translation;
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.dataset.i18nPlaceholder;
      const translation = getTranslation(normalized, key);
      if (translation) {
        el.setAttribute("placeholder", translation);
      }
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
      const key = el.dataset.i18nAriaLabel;
      const translation = getTranslation(normalized, key);
      if (translation) {
        el.setAttribute("aria-label", translation);
      }
    });

    if (langSelector) {
      document
        .querySelectorAll("#lang-select option[data-i18n]")
        .forEach((option) => {
          const key = option.dataset.i18n;
          const translation = getTranslation(normalized, key);
          if (translation) {
            option.textContent = translation;
          }
        });
    }
  };

  let storedLang = null;
  try {
    storedLang = localStorage.getItem("preferredLang");
  } catch (error) {
    storedLang = null;
  }

  const defaultLang = supportedLangs.includes(storedLang)
    ? storedLang
    : fallbackLang;

  currentLang = defaultLang;
  applyTranslations(currentLang);

  new GlobalSearchController({
    supportedLangs,
    getTranslation,
    getCurrentLang: () => currentLang,
  });

  if (langSelector) {
    langSelector.value = defaultLang;
    langSelector.addEventListener("change", (event) => {
      const requestedLang = event.target.value;
      const normalized = supportedLangs.includes(requestedLang)
        ? requestedLang
        : fallbackLang;
      applyTranslations(normalized);
      try {
        localStorage.setItem("preferredLang", normalized);
      } catch (error) {
        // localStorage might be unavailable (e.g., privacy mode); safely ignore.
      }
    });
  }

  const nav = document.querySelector(".mega-nav");
  const navList = nav?.querySelector(".mega-nav__list");
  let navToggle = nav?.querySelector(".mega-nav__toggle");
  const navItems = nav ? Array.from(nav.querySelectorAll(".mega-nav__item")) : [];
  const board = document.getElementById("mega-board");
  const boardColumns = board ? Array.from(board.querySelectorAll(".mega-board__column")) : [];
  const mediaQuery = window.matchMedia("(max-width: 960px)");
  const bodyElement = document.body;
  const brandBar = document.querySelector(".brand-bar");
  let mobileMenuToggle = document.querySelector("[data-mobile-menu-toggle]");
  let mobileNavPanel = document.querySelector("[data-mobile-nav]");
  const getMobileNavTemplate = () => `
    <div class="mobile-nav-panel" data-mobile-nav aria-hidden="true">
      <div class="mobile-nav-panel__mask" data-mobile-nav-close></div>
      <div class="mobile-nav-panel__sheet" role="dialog" aria-modal="true" aria-label="DAEWOO 移动目录">
        <div class="mobile-nav-panel__header">
          <a class="mobile-nav-panel__brand" href="index.html">
            <img src="img/icons/DAEWOO-LOGO.png" alt="DAEWOO 服务" />
          </a>
          <button type="button" class="mobile-nav-panel__close" data-mobile-nav-close aria-label="关闭目录">
            <span aria-hidden="true">×</span>
            <span class="sr-only">Close menu</span>
          </button>
        </div>
        <ul class="mobile-nav-menu">
          <li><a href="product-center.html" data-i18n="nav.product">产品中心</a></li>
          <li><a href="news.html#news-section" data-i18n="nav.news">新闻动态</a></li>
          <li><a href="video-center.html" data-i18n="nav.video">视频中心</a></li>
          <li><a href="contact.html" data-i18n="nav.contact">联系我们</a></li>
          <li><a href="about.html" data-i18n="nav.about">公司概况</a></li>
          <li class="mobile-nav-menu__item mobile-nav-menu__item--collapsible">
            <button type="button" data-mobile-nav-collapsible aria-expanded="false">
              <span>LANGUAGE</span>
              <span class="mobile-nav-menu__chevron" aria-hidden="true"></span>
            </button>
            <div class="mobile-nav-menu__panel" data-mobile-nav-panel aria-hidden="true">
              <div class="mobile-nav-menu__language-group" data-language-list>
                <button type="button" data-lang="en">English</button>
                <button type="button" data-lang="zh">中文</button>
                <button type="button" data-lang="ko">한국어</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  `;

  if (!mobileNavPanel) {
    document.body.insertAdjacentHTML("beforeend", getMobileNavTemplate());
    mobileNavPanel = document.querySelector("[data-mobile-nav]");
    applyTranslations(currentLang);
  }

  let mobileNavCloseButtons = Array.from(document.querySelectorAll("[data-mobile-nav-close]"));
  let mobileNavCollapsibleTriggers = Array.from(
    document.querySelectorAll("[data-mobile-nav-collapsible]")
  );
  let mobileNavPanels = Array.from(document.querySelectorAll("[data-mobile-nav-panel]"));
  let mobileNavMenu = mobileNavPanel?.querySelector(".mobile-nav-menu");
  const isHomePage = bodyElement?.classList?.contains("home-page");
  if (!mobileMenuToggle && brandBar) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "mobile-menu-toggle";
    button.setAttribute("aria-controls", "mega-nav-menu");
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", "目录");
    button.dataset.mobileMenuToggle = "";

    const icon = document.createElement("img");
    icon.src = "img/icons/menu.svg";
    icon.alt = "";
    icon.setAttribute("aria-hidden", "true");
    icon.className = "mobile-menu-toggle__icon";
    button.appendChild(icon);

    const srLabel = document.createElement("span");
    srLabel.className = "sr-only";
    srLabel.textContent = "Open menu";
    button.appendChild(srLabel);

    brandBar.appendChild(button);
    mobileMenuToggle = button;
  }

  if (navToggle) {
    navToggle.remove();
    navToggle = null;
  }

  const canUseMobileNavPanel = Boolean(mobileNavPanel);

  let activePanelId = null;

  const currentPage = document.body?.dataset?.page;
  if (currentPage && navItems.length > 0) {
    const currentNavItem = navItems.find((item) => item.dataset.panel === currentPage);
    if (currentNavItem) {
      currentNavItem.classList.add("is-current-tab");
    }
  }

  const getValidPanelId = (panelId) => {
    if (!panelId) {
      return null;
    }
    const normalized = String(panelId);
    const hasColumn = boardColumns.some((column) => column.dataset.panel === normalized);
    return hasColumn ? normalized : null;
  };

  const clearActivePanel = () => {
    activePanelId = null;
    navItems.forEach((item) => {
      item.classList.remove("is-active");
      const trigger = item.querySelector(".mega-nav__trigger");
      if (trigger) {
        trigger.setAttribute("aria-expanded", "false");
      }
    });
    boardColumns.forEach((column) => {
      column.classList.remove("is-active");
    });
  };

  const setActivePanel = (panelId) => {
    const targetId = getValidPanelId(panelId);
    if (!targetId) {
      clearActivePanel();
      return;
    }
    if (targetId === activePanelId) {
      return;
    }
    activePanelId = targetId;

    navItems.forEach((item) => {
      const trigger = item.querySelector(".mega-nav__trigger");
      const isActive = item.dataset.panel === targetId;
      item.classList.toggle("is-active", isActive);
      if (trigger) {
        trigger.setAttribute("aria-expanded", String(isActive));
      }
    });

    boardColumns.forEach((column) => {
      const isActive = column.dataset.panel === targetId;
      column.classList.toggle("is-active", isActive);
    });
  };

  const showBoard = () => {
    if (!nav || mediaQuery.matches) return;
    nav.classList.add("is-board-open");
  };

  const hideBoard = () => {
    if (!nav || mediaQuery.matches) return;
    nav.classList.remove("is-board-open");
    clearActivePanel();
  };

  const syncToggleState = (expanded) => {
    navToggle?.setAttribute("aria-expanded", String(expanded));
    navToggle?.classList.toggle("is-active", expanded);
    mobileMenuToggle?.setAttribute("aria-expanded", String(expanded));
    mobileMenuToggle?.classList.toggle("is-active", expanded);
  };

  const setBodyScrollLock = (locked) => {
    if (!canUseMobileNavPanel) {
      bodyElement?.classList.remove("is-mobile-nav-open");
      return;
    }
    bodyElement?.classList.toggle("is-mobile-nav-open", locked);
  };

  const setMobileSectionState = (trigger, expanded) => {
    const container = trigger?.closest(".mobile-nav-menu__item--collapsible");
    const panel = container?.querySelector("[data-mobile-nav-panel]");
    trigger.setAttribute("aria-expanded", String(expanded));
    container?.classList.toggle("is-open", expanded);
    if (panel instanceof HTMLElement) {
      panel.setAttribute("aria-hidden", String(!expanded));
      panel.style.maxHeight = expanded ? `${panel.scrollHeight}px` : "0px";
    }
  };

  const collapseAllMobileSections = () => {
    mobileNavCollapsibleTriggers.forEach((trigger) => setMobileSectionState(trigger, false));
  };

  const setListExpanded = (expanded) => {
    if (!nav) return;
    syncToggleState(expanded);
    const useMobilePanel = canUseMobileNavPanel && mediaQuery.matches;
    nav.classList.toggle("is-expanded", expanded && !useMobilePanel);

    if (mediaQuery.matches) {
      if (useMobilePanel) {
        mobileNavPanel?.classList.toggle("is-open", expanded);
        mobileNavPanel?.setAttribute("aria-hidden", String(!expanded));
        setBodyScrollLock(expanded);
        if (!expanded) {
          collapseAllMobileSections();
        }
      } else if (navList) {
        navList.classList.toggle("is-open", expanded);
        if (expanded) {
          const firstPanel = navItems[0]?.dataset.panel ?? null;
          setActivePanel(firstPanel);
        } else {
          clearActivePanel();
        }
      }
    } else {
      navList?.classList.remove("is-open");
      mobileNavPanel?.classList.remove("is-open");
      mobileNavPanel?.setAttribute("aria-hidden", "true");
      collapseAllMobileSections();
      setBodyScrollLock(false);
      if (!expanded) {
        hideBoard();
      }
    }
  };

  if (navToggle && navList) {
    navToggle.addEventListener("click", () => {
      const willExpand = !(navToggle.getAttribute("aria-expanded") === "true");
      setListExpanded(willExpand);
    });
  }

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener("click", () => {
      const willExpand = !(mobileMenuToggle.getAttribute("aria-expanded") === "true");
      setListExpanded(willExpand);
    });
  }

  mobileNavCloseButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setListExpanded(false);
    });
  });

  mobileNavPanels.forEach((panel) => {
    if (panel instanceof HTMLElement) {
      panel.style.maxHeight = "0px";
      panel.setAttribute("aria-hidden", "true");
    }
  });

  mobileNavCollapsibleTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const isExpanded = trigger.getAttribute("aria-expanded") === "true";
      setMobileSectionState(trigger, !isExpanded);
    });
  });

  mobileNavMenu?.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    const link = target.closest("a");
    if (link && mobileNavPanel?.classList.contains("is-open")) {
      setListExpanded(false);
    }
  });

  navItems.forEach((item) => {
    const trigger = item.querySelector(".mega-nav__trigger");
    const panelId = item.dataset.panel;
    if (!trigger || !panelId) {
      return;
    }

    const activate = () => {
      if (!mediaQuery.matches) {
        showBoard();
      }
      setActivePanel(panelId);
    };

    trigger.addEventListener("focus", activate);
    trigger.addEventListener("mouseenter", () => {
      if (!mediaQuery.matches) {
        activate();
      }
    });
    trigger.addEventListener("click", (event) => {
      if (mediaQuery.matches) {
        event.preventDefault();
        activate();
        return;
      }
      const targetUrl = item.dataset.navUrl || trigger.getAttribute("data-nav-url");
      if (targetUrl) {
        window.location.href = targetUrl;
      }
    });
  });

  boardColumns.forEach((column) => {
    const panelId = column.dataset.panel;
    if (!panelId) return;

    column.addEventListener("mouseenter", () => {
      if (!mediaQuery.matches) {
        showBoard();
        setActivePanel(panelId);
      }
    });

    column.addEventListener("focusin", () => {
      if (!mediaQuery.matches) {
        showBoard();
      }
      setActivePanel(panelId);
    });
  });

  if (nav) {
    nav.addEventListener("mouseleave", () => {
      hideBoard();
    });

    nav.addEventListener("focusout", () => {
      if (mediaQuery.matches) {
        return;
      }
      requestAnimationFrame(() => {
        if (!nav.contains(document.activeElement)) {
          hideBoard();
        }
      });
    });
  }

  const handleMediaChange = () => {
    const isMobileView = mediaQuery.matches;
    bodyElement?.classList.toggle("is-mobile-screen", isMobileView);
    setListExpanded(false);
    if (isMobileView) {
      nav?.classList.remove("is-board-open");
      clearActivePanel();
    } else {
      hideBoard();
    }
  };

  // Initialize state based on current viewport
  handleMediaChange(mediaQuery);

  const isNewsLanding = document.body?.dataset?.page === "news";
  if (isNewsLanding) {
    const filterButtons = Array.from(document.querySelectorAll("[data-news-filter]"));
    const newsCards = Array.from(document.querySelectorAll("[data-news-card]"));
    let currentFilter = "all";

    const setActiveFilter = (filter) => {
      const normalized = filter.toLowerCase();
      currentFilter = normalized;

      filterButtons.forEach((button) => {
        const isActive = (button.dataset.newsFilter ?? "").toLowerCase() === normalized;
        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
      });

      newsCards.forEach((card) => {
        const tags = (card.dataset.newsTags ?? "")
          .split(",")
          .map((tag) => tag.trim().toLowerCase())
          .filter(Boolean);
        const shouldShow = normalized === "all" || tags.includes(normalized);
        card.hidden = !shouldShow;
        card.setAttribute("aria-hidden", String(!shouldShow));
      });
    };

    const getDefaultFilter = () => {
      const activeButton = filterButtons.find((button) => button.classList.contains("is-active"));
      return (activeButton?.dataset.newsFilter ?? "all").toLowerCase();
    };

    if (filterButtons.length > 0) {
      filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
          const targetFilter = (button.dataset.newsFilter ?? "all").toLowerCase();
          setActiveFilter(targetFilter);
        });
      });

      setActiveFilter(getDefaultFilter());
    }
  }

  // 检测是否为混合内容问题（HTTPS 网站加载 HTTP 资源）
  const isMixedContent = (url) => {
    return window.location.protocol === 'https:' && url && url.startsWith('http://');
  };

  // 视频弹窗功能（在所有页面可用）
  const modal = document.querySelector("[data-video-modal]");
  const iframe = modal?.querySelector("[data-video-iframe]");
  const videoPlayer = modal?.querySelector("[data-video-player]");
  let lastFocusedTrigger = null;
  let openVideoModal = null;
  let closeVideoModal = null;

  if (modal && iframe && videoPlayer) {
    const closeButton = modal.querySelector("[data-video-close]");
    const getModalOpenState = () => {
      if (typeof modal.open === "boolean") {
        return modal.open;
      }
      return modal.hasAttribute("open");
    };

    // 判断是否为 MP4 文件
    const isMp4File = (url) => {
      return url && (url.toLowerCase().endsWith('.mp4') || url.toLowerCase().includes('.mp4'));
    };

    openVideoModal = (src, title, trigger) => {
      if (!src) return;
      
      // 检测混合内容问题，如果是 HTTPS 网站但资源是 HTTP
      if (isMixedContent(src)) {
        // Safari 会阻止混合内容，无法绕过
        // 但我们可以尝试使用协议相对 URL（//），让浏览器根据当前协议选择
        // 不过如果当前是 HTTPS，协议相对 URL 还是会尝试 HTTPS
        // 所以最好的方案是提示用户使用 HTTP 访问网站
        console.warn('检测到混合内容，视频可能无法在 Safari 中播放:', src);
        
        // 对于图片，可以尝试使用协议相对 URL（虽然可能还是会被阻止）
        // 但对于视频，Safari 会严格阻止，所以只能提示用户
      }
      
      // 先打开模态框
      if (typeof modal.showModal === "function") {
        modal.showModal();
      } else {
        modal.setAttribute("open", "true");
      }
      document.documentElement.classList.add("is-video-modal-open");
      
      // 根据 URL 类型选择播放器
      if (isMp4File(src)) {
        // 使用 HTML5 video 标签播放 MP4
        iframe.style.display = "none";
        videoPlayer.style.display = "block";
        
        // 清空之前的视频
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
        
        // 使用 setTimeout 确保模态框已渲染后再设置视频源
        setTimeout(() => {
          // 先清空 src
          videoPlayer.removeAttribute("src");
          videoPlayer.load();
          
          // 然后设置新的 src（使用 source 标签，对 Safari 更友好）
          const videoSrc = document.createElement("source");
          videoSrc.src = src;
          videoSrc.type = "video/mp4";
          videoPlayer.innerHTML = "";
          videoPlayer.appendChild(videoSrc);
          videoPlayer.load();
          
          // 添加错误处理
          const handleError = (e) => {
            console.error("视频加载失败:", src, e);
            // 如果是混合内容问题，显示提示和解决方案
            if (isMixedContent(src)) {
              // 移除之前的错误消息（如果有）
              const existingError = videoPlayer.parentElement.querySelector('.video-error-message');
              if (existingError) {
                existingError.remove();
              }
              
              const errorMsg = document.createElement("div");
              errorMsg.className = "video-error-message";
              errorMsg.style.cssText = "padding: 2rem; text-align: center; color: #fff; background: rgba(0,0,0,0.9); border-radius: 8px; margin: 1rem; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: calc(100% - 2rem); max-width: 500px; z-index: 10;";
              const httpUrl = window.location.href.replace('https://', 'http://');
              errorMsg.innerHTML = `
                <p style="margin: 0 0 1rem 0; font-size: 1.1rem; font-weight: 600;">视频无法加载</p>
                <p style="margin: 0 0 1rem 0; font-size: 0.9rem; opacity: 0.9; line-height: 1.6;">由于浏览器安全策略，HTTPS 网站无法加载 HTTP 视频资源。</p>
                <a href="${httpUrl}" style="display: inline-block; padding: 0.75rem 1.5rem; background: var(--color-primary, #0980ff); color: #fff; text-decoration: none; border-radius: 6px; font-weight: 600; margin-top: 0.5rem;">使用 HTTP 访问网站</a>
              `;
              videoPlayer.parentElement.style.position = "relative";
              videoPlayer.parentElement.appendChild(errorMsg);
            }
          };
          videoPlayer.addEventListener("error", handleError, { once: true });
          
          // 也监听 loadeddata 事件，如果视频成功加载，移除错误消息并自动播放
          const handleLoadedData = () => {
            const existingError = videoPlayer.parentElement.querySelector('.video-error-message');
            if (existingError) {
              existingError.remove();
            }
            // 尝试自动播放（用户已经点击了按钮，满足交互要求）
            const playPromise = videoPlayer.play();
            if (playPromise !== undefined) {
              playPromise.then(() => {
                // 播放成功，尝试取消静音（某些浏览器允许在用户交互后取消静音）
                if (videoPlayer.muted) {
                  videoPlayer.muted = false;
                }
              }).catch((error) => {
                console.log("自动播放被阻止，用户需要手动点击播放:", error);
              });
            }
          };
          videoPlayer.addEventListener("loadeddata", handleLoadedData, { once: true });
          
          // 也监听 canplay 事件作为备选（某些情况下 loadeddata 可能不会触发）
          const handleCanPlay = () => {
            if (videoPlayer.paused) {
              const playPromise = videoPlayer.play();
              if (playPromise !== undefined) {
                playPromise.then(() => {
                  // 播放成功，尝试取消静音
                  if (videoPlayer.muted) {
                    videoPlayer.muted = false;
                  }
                }).catch((error) => {
                  console.log("自动播放被阻止:", error);
                });
              }
            }
          };
          videoPlayer.addEventListener("canplay", handleCanPlay, { once: true });
        }, 150);
      } else {
        // 使用 iframe 播放第三方播放器
        videoPlayer.style.display = "none";
        videoPlayer.src = "";
        videoPlayer.pause();
        iframe.style.display = "block";
        iframe.src = src;
        iframe.title = title || iframe.title || "视频播放";
      }
      
      if (trigger) {
        lastFocusedTrigger = trigger;
      }
    };

    closeVideoModal = () => {
      if (typeof modal.close === "function") {
        if (getModalOpenState()) {
          modal.close();
        }
      } else {
        modal.removeAttribute("open");
      }
      // 清理播放器
      iframe.src = "";
      videoPlayer.pause();
      videoPlayer.currentTime = 0;
      videoPlayer.removeAttribute("src");
      videoPlayer.innerHTML = "您的浏览器不支持视频播放。";
      videoPlayer.load();
      iframe.style.display = "none";
      videoPlayer.style.display = "none";
      document.documentElement.classList.remove("is-video-modal-open");
      if (lastFocusedTrigger && document.body.contains(lastFocusedTrigger)) {
        lastFocusedTrigger.focus();
      }
    };

    if (closeButton instanceof HTMLElement) {
      closeButton.addEventListener("click", () => {
        closeVideoModal?.();
      });
    }

    modal.addEventListener("cancel", (event) => {
      event.preventDefault();
      closeVideoModal?.();
    });

    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        closeVideoModal?.();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && getModalOpenState()) {
        closeVideoModal?.();
      }
    });
  }

  // 处理混合内容问题：为 HTTP 图片添加错误处理和降级方案
  if (window.location.protocol === 'https:') {
    document.querySelectorAll('img[src^="http://"]').forEach((img) => {
      const originalSrc = img.getAttribute('src');
      if (originalSrc && originalSrc.startsWith('http://')) {
        // 添加错误处理
        img.addEventListener('error', function() {
          // 如果图片加载失败（可能是混合内容阻止），尝试使用协议相对 URL
          // 或者显示占位符
          console.warn('图片加载失败（可能是混合内容阻止）:', originalSrc);
          // 可以在这里添加占位符图片
        }, { once: true });
      }
    });
  }

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    const trigger = target.closest("[data-video-src]");
    if (!trigger) return;
    let src = trigger.getAttribute("data-video-src");
    if (!src) return;
    const title = trigger.getAttribute("data-video-title") || trigger.textContent?.trim();
    lastFocusedTrigger = trigger;
    openVideoModal?.(src, title, trigger);
    if (modal && typeof modal.showModal !== "function") {
      event.preventDefault();
    }
  });

  const isVideoPage = document.body?.classList?.contains("video-page");
  if (isVideoPage) {
    const filterButtons = Array.from(document.querySelectorAll("[data-video-filter]"));
    const videoCards = Array.from(document.querySelectorAll("[data-video-card]"));
    let currentFilter = "all";

    const setActiveFilter = (filter) => {
      const normalized = filter.toLowerCase();
      currentFilter = normalized;
      filterButtons.forEach((button) => {
        const isActive = (button.dataset.videoFilter ?? "").toLowerCase() === normalized;
        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
      });

      videoCards.forEach((card) => {
        const tags = (card.dataset.videoTags ?? "")
          .split(",")
          .map((tag) => tag.trim().toLowerCase())
          .filter(Boolean);
        const shouldShow = normalized === "all" || tags.includes(normalized);
        card.hidden = !shouldShow;
        card.setAttribute("aria-hidden", String(!shouldShow));
      });
    };

    const getDefaultFilter = () => {
      const activeButton = filterButtons.find((button) => button.classList.contains("is-active"));
      return (activeButton?.dataset.videoFilter ?? "all").toLowerCase();
    };

    const getVideoCard = (videoId) =>
      document.querySelector(`[data-video-card][data-video-id="${videoId}"]`);
    const getVideoTrigger = (videoId) =>
      document.querySelector(`[data-video-src][data-video-id="${videoId}"]`);

    if (filterButtons.length > 0) {
      filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
          const targetFilter = (button.dataset.videoFilter ?? "all").toLowerCase();
          setActiveFilter(targetFilter);
        });
      });

      setActiveFilter(getDefaultFilter());
    }

    const activateVideoById = (videoId, { autoOpen = true } = {}) => {
      const normalizedId = (videoId ?? "").toLowerCase();
      if (!normalizedId) return;
      const targetCard = getVideoCard(normalizedId);
      const trigger =
        getVideoTrigger(normalizedId) ||
        targetCard?.querySelector("[data-video-src]");
      if (!trigger) {
        return;
      }

      const tagsSource = targetCard ?? trigger;
      const tags = (tagsSource?.dataset?.videoTags ?? "")
        .split(",")
        .map((tag) => tag.trim().toLowerCase())
        .filter(Boolean);

      if (tags.length > 0 && !tags.includes(currentFilter)) {
        setActiveFilter(tags[0]);
      } else if (tags.length === 0 && currentFilter !== "all") {
        setActiveFilter("all");
      }

      if (targetCard && typeof targetCard.scrollIntoView === "function") {
        targetCard.scrollIntoView({ behavior: "smooth", block: "center" });
      }

      if (trigger instanceof HTMLElement) {
        try {
          trigger.focus({ preventScroll: true });
        } catch (error) {
          trigger.focus();
        }
      }

      if (autoOpen && typeof openVideoModal === "function") {
        const src = trigger.getAttribute("data-video-src");
        if (src) {
          const title = trigger.getAttribute("data-video-title") || trigger.textContent?.trim();
          openVideoModal(src, title, trigger);
        }
      }
    };

    const url = new URL(window.location.href);
    const requestedVideoId =
      url.searchParams.get("video") || (window.location.hash ? window.location.hash.substring(1) : "");
    if (requestedVideoId) {
      setTimeout(() => {
        activateVideoById(requestedVideoId, { autoOpen: true });
      }, 150);
    }
  }

  document.querySelectorAll("[data-product-tabs]").forEach((tabsContainer) => {
    const tabButtons = Array.from(tabsContainer.querySelectorAll("[data-tab]"));
    const panels = Array.from(tabsContainer.querySelectorAll("[data-tab-panel]"));
    if (tabButtons.length === 0 || panels.length === 0) {
      return;
    }

    const setActiveTab = (tabId) => {
      tabButtons.forEach((button) => {
        const isActive = button.dataset.tab === tabId;
        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-selected", String(isActive));
        button.setAttribute("tabindex", isActive ? "0" : "-1");
      });

      panels.forEach((panel) => {
        const isActive = panel.dataset.tabPanel === tabId;
        panel.classList.toggle("is-active", isActive);
        panel.toggleAttribute("hidden", !isActive);
      });
    };

    const focusTab = (index) => {
      const button = tabButtons[index];
      if (!button) return;
      button.focus();
      setActiveTab(button.dataset.tab);
    };

    tabButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        setActiveTab(button.dataset.tab);
      });

      button.addEventListener("keydown", (event) => {
        if (event.key === "ArrowRight") {
          event.preventDefault();
          const nextIndex = (index + 1) % tabButtons.length;
          focusTab(nextIndex);
        } else if (event.key === "ArrowLeft") {
          event.preventDefault();
          const prevIndex = (index - 1 + tabButtons.length) % tabButtons.length;
          focusTab(prevIndex);
        }
      });
    });

    const initialTab =
      tabButtons.find((button) => button.classList.contains("is-active"))?.dataset.tab ??
      tabButtons[0]?.dataset.tab;

    if (initialTab) {
      setActiveTab(initialTab);
    }
  });

  const sliderContainers = Array.from(document.querySelectorAll("[data-slider]"));

  sliderContainers.forEach((slider) => {
    const track = slider.querySelector(".hero-track");
    const slides = track ? Array.from(track.querySelectorAll(".hero-slide")) : [];
    if (!track || slides.length === 0) {
      return;
    }

    const prevButton = slider.querySelector("[data-slider-prev]");
    const nextButton = slider.querySelector("[data-slider-next]");
    const dotsContainer = slider.querySelector("[data-slider-dots]");
    const autoInterval = Number(slider.dataset.sliderInterval) || 6000;
    let activeIndex = slides.findIndex((slide) => slide.classList.contains("is-active"));
    let timerId = null;
    let dots = [];

    if (activeIndex < 0) {
      activeIndex = 0;
    }

    const setBackdropFromSlide = (index) => {
      const slide = slides[index];
      if (!slide) return;
      const img = slide.querySelector("img");
      if (!img) return;
      const source =
        img.getAttribute("data-src") || img.getAttribute("src") || img.dataset.lazySrc;
      if (!source) return;
      slider.style.setProperty("--hero-backdrop", `url("${source}")`);
    };

    const setActiveSlide = (targetIndex) => {
      if (slides.length === 0) return;
      const normalized = (targetIndex + slides.length) % slides.length;
      slides.forEach((slide, index) => {
        const isActive = index === normalized;
        slide.classList.toggle("is-active", isActive);
        slide.setAttribute("aria-hidden", String(!isActive));
      });
      dots.forEach((dot, index) => {
        dot.classList.toggle("is-active", index === normalized);
        dot.setAttribute("aria-pressed", String(index === normalized));
      });
      activeIndex = normalized;
      setBackdropFromSlide(activeIndex);
    };

    const stopTimer = () => {
      if (timerId) {
        clearInterval(timerId);
        timerId = null;
      }
    };

    const startTimer = () => {
      if (slides.length <= 1 || timerId) {
        return;
      }
      timerId = setInterval(() => {
        setActiveSlide(activeIndex + 1);
      }, autoInterval);
    };

    if (dotsContainer) {
      dotsContainer.innerHTML = "";
      dots = slides.map((_, index) => {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.className = "hero-dot";
        dot.setAttribute("aria-label", `${index + 1} / ${slides.length}`);
        dot.setAttribute("aria-pressed", "false");
        dot.addEventListener("click", () => {
          stopTimer();
          setActiveSlide(index);
          startTimer();
        });
        dotsContainer.appendChild(dot);
        return dot;
      });
    }

    if (slides.length <= 1) {
      if (prevButton) prevButton.hidden = true;
      if (nextButton) nextButton.hidden = true;
      if (dotsContainer) dotsContainer.hidden = true;
      setActiveSlide(activeIndex);
      return;
    }

    if (prevButton) {
      prevButton.addEventListener("click", () => {
        stopTimer();
        setActiveSlide(activeIndex - 1);
        startTimer();
      });
    }

    if (nextButton) {
      nextButton.addEventListener("click", () => {
        stopTimer();
        setActiveSlide(activeIndex + 1);
        startTimer();
      });
    }

    slider.addEventListener("mouseenter", stopTimer);
    slider.addEventListener("mouseleave", startTimer);
    slider.addEventListener("focusin", stopTimer);
    slider.addEventListener("focusout", () => {
      setTimeout(() => {
        if (!slider.contains(document.activeElement)) {
          startTimer();
        }
      }, 100);
    });

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        stopTimer();
      } else {
        startTimer();
      }
    });

    setActiveSlide(activeIndex);
    startTimer();
  });

  const syncLanguageButtons = (lang) => {
    const normalized = supportedLangs.includes(lang) ? lang : fallbackLang;
    document.querySelectorAll("[data-language-list] button").forEach((button) => {
      const isActive = button.dataset.lang === normalized;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  };

  document.querySelectorAll("[data-language-list]").forEach((list) => {
    list.addEventListener("click", (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;
      const button = target.closest("button[data-lang]");
      if (!button) return;

      const requestedLang = button.dataset.lang;
      if (!requestedLang) return;

      applyTranslations(requestedLang);
      syncLanguageButtons(requestedLang);
      if (langSelector) {
        langSelector.value = requestedLang;
      }

      try {
        localStorage.setItem("preferredLang", requestedLang);
      } catch (error) {
        // ignore
      }

      if (canUseMobileNavPanel && mobileNavPanel?.classList.contains("is-open")) {
        setListExpanded(false);
      }
    });
  });

  syncLanguageButtons(defaultLang);

  const productMainImage = document.querySelector("[data-product-main]");
  const productThumbnails = Array.from(
    document.querySelectorAll("[data-product-thumbnails] .product-detail__thumbnail")
  );

  if (productMainImage && productThumbnails.length > 0) {
    const setActiveThumbnail = (targetButton) => {
      productThumbnails.forEach((button) => {
        button.classList.toggle("is-active", button === targetButton);
      });
    };

    productThumbnails.forEach((button) => {
      button.addEventListener("click", () => {
        const newSrc = button.getAttribute("data-img");
        if (!newSrc) {
          return;
        }

        if (productMainImage.getAttribute("src") !== newSrc) {
          productMainImage.setAttribute("src", newSrc);
        }

        const altText = button.querySelector("img")?.getAttribute("alt");
        if (altText) {
          productMainImage.setAttribute("alt", altText);
        }

        setActiveThumbnail(button);
      });
    });
  }

  if (document.body?.classList?.contains("product-detail-page")) {
    const topbar = document.querySelector(".product-detail__topbar");
    const heroEyebrow = document.querySelector(".product-detail__hero .page-hero__eyebrow");
    const heroTitle = document.querySelector(".product-detail__hero .page-hero__title");
    const siteHeader = document.querySelector(".site-header");

    if (topbar && heroTitle) {
      let titleGroup = topbar.querySelector(".product-detail__topbar-group");
      if (!titleGroup) {
        titleGroup = document.createElement("div");
        titleGroup.className = "product-detail__topbar-group";
        const backLink = topbar.querySelector(".product-detail__back");
        if (backLink) {
          topbar.insertBefore(titleGroup, backLink.nextSibling);
          titleGroup.insertAdjacentElement("afterbegin", backLink);
        } else {
          topbar.appendChild(titleGroup);
        }
      }

      if (!titleGroup.querySelector(".product-detail__topbar-title")) {
        const titleWrapper = document.createElement("div");
        titleWrapper.className = "product-detail__topbar-title";

        if (heroEyebrow?.textContent?.trim()) {
          const category = document.createElement("span");
          category.className = "product-detail__topbar-category";
          category.textContent = heroEyebrow.textContent.trim();
          titleWrapper.appendChild(category);
        }

        const name = document.createElement("span");
        name.className = "product-detail__topbar-name";
        name.textContent = heroTitle.textContent.trim();
        titleWrapper.appendChild(name);

        titleGroup.appendChild(titleWrapper);
      }

      const sentinel = document.createElement("div");
      sentinel.className = "product-detail__topbar-sentinel";
      sentinel.setAttribute("aria-hidden", "true");
      topbar.parentNode.insertBefore(sentinel, topbar);

      const observer = new IntersectionObserver(
        ([entry]) => {
          topbar.classList.toggle("is-stuck", entry ? !entry.isIntersecting : false);
        },
        { threshold: 0 }
      );

      observer.observe(sentinel);
    }

    const updateTopbarOffset = () => {
      if (!siteHeader) return;
      const offset = siteHeader.offsetHeight;
      document.documentElement.style.setProperty("--product-topbar-offset", `${offset}px`);
    };

    updateTopbarOffset();
    window.addEventListener("resize", updateTopbarOffset);
  }

  if (typeof mediaQuery.addEventListener === "function") {
    mediaQuery.addEventListener("change", handleMediaChange);
  } else if (typeof mediaQuery.addListener === "function") {
    mediaQuery.addListener(handleMediaChange);
  }
});


