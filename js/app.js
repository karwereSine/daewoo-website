document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    zh: {
      "brand.name": "DAEWOO 服务",
      "search.label": "输入搜索词",
      "search.placeholder": "请输入想了解的内容",
      "search.button": "搜索",
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
      "panel.product.heading": "产品类别",
      "panel.product.home": "家用电器",
      "panel.product.smartHome": "智能家居",
      "panel.product.commercial": "商用电器",
      "panel.product.personalCare": "个人护理",
      "panel.product.wearable": "智能穿戴",
      "panel.product.digital": "智能数码",
      "panel.product.others": "其他产品",
      "panel.news.heading": "新闻分类",
      "panel.news.latest": "新闻资讯 · 行业资讯",
      "panel.video.heading": "精选视频",
      "panel.video.zb10": "ZB10便携式果汁杯",
      "panel.video.smop02": "SMOP02电动蒸汽洗地机",
      "panel.video.k10": "K10电烤炉",
      "panel.video.f20": "F20挂脖风扇",
      "panel.video.dyks01": "DY-KS01电热开水瓶",
      "panel.video.dygx09": "DY-BGX09全自动壁挂滚筒洗衣机",
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
      "videoPage.featured.description": "一杯新鲜随行的轻生活演绎：双杯体搭配磁吸主机，按下即可高速搅拌，视频中演示了户外、办公室与家庭场景的应用方式，帮助您掌握清洗与安全锁扣技巧。",
      "videoPage.featured.bullet1": "演示快速榨汁、分离杯体与便携饮用的完整流程",
      "videoPage.featured.bullet2": "讲解 Type-C 充电与旅行收纳的小贴士",
      "videoPage.featured.bullet3": "适合看重颜值、轻便与健康饮食的年轻家庭",
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
      "videoPage.cards.dybm05.title": "DY-BM05迷你原汁机",
      "videoPage.cards.dybm05.description": "以清晨厨房场景展示慢速挤压护营养、易拆洗部件与儿童辅食扩展玩法。",
      "videoPage.cards.dysp25f01.title": "DYSP-25F01电热开水瓶",
      "videoPage.cards.dysp25f01.description": "多角度展示大容量储水、定时保温与童锁防烫功能，满足办公室与家庭多人饮水。",
      "videoPage.cards.dyzm1266.title": "DYZM-1266电煮锅",
      "videoPage.cards.dyzm1266.description": "小容量多功能烹饪演示，覆盖煲汤、火锅与一人食，展示可视盖与分体清洗设计。",
      "videoPage.note.title": "更多视频即将上新",
      "videoPage.note.description": "视频中心会同步更新新品上市、安装指南与客户故事，敬请关注。 如需线下演示或培训资料，请联系 DAEWOO 服务顾问。",
      "videoPage.note.cta": "预约线下体验",
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
      "panel.product.heading": "제품 카테고리",
      "panel.product.home": "생활가전",
      "panel.product.smartHome": "스마트홈",
      "panel.product.commercial": "상업용 가전",
      "panel.product.personalCare": "개인 케어",
      "panel.product.wearable": "스마트 웨어러블",
      "panel.product.digital": "스마트 디지털",
      "panel.product.others": "기타 제품",
      "panel.news.heading": "뉴스 채널",
      "panel.news.latest": "뉴스 & 업계 소식",
      "panel.video.heading": "추천 영상",
      "panel.video.zb10": "ZB10 휴대용 주스 컵",
      "panel.video.smop02": "SMOP02 전동 스팀 물걸레",
      "panel.video.k10": "K10 전기 그릴",
      "panel.video.f20": "F20 넥밴드 선풍기",
      "panel.video.dyks01": "DY-KS01 전기 온수 포트",
      "panel.video.dygx09": "DY-BGX09 벽걸이 전자동 세탁기",
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
      "videoPage.featured.description": "자석 결합 듀얼 컵 설계로 언제 어디서나 신선한 주스를 즐기는 방법과 세척·안전 잠금 팁을 담았습니다.",
      "videoPage.featured.bullet1": "빠른 주스 제조, 컵 분리, 휴대 음용 과정을 단계별로 안내",
      "videoPage.featured.bullet2": "Type-C 충전과 여행 보관 노하우를 소개",
      "videoPage.featured.bullet3": "감각적인 디자인과 건강한 라이프스타일을 추구하는 가족에게 적합",
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
      "videoPage.cards.dybm05.title": "DY-BM05 미니 원액기",
      "videoPage.cards.dybm05.description": "아침 주방 씬을 통해 저속 착즙, 손쉬운 세척, 유아 보조식 활용법을 보여줍니다.",
      "videoPage.cards.dysp25f01.title": "DYSP-25F01 전기 온수 포트",
      "videoPage.cards.dysp25f01.description": "대용량 급수, 예약 보온, 어린이 안전 설계로 다인 급수에 적합함을 보여줍니다.",
      "videoPage.cards.dyzm1266.title": "DYZM-1266 멀티쿠커",
      "videoPage.cards.dyzm1266.description": "소형 다기능 조리기로 탕, 전골, 1인 요리를 준비하고 투명 뚜껑과 분리 세척을 시연합니다.",
      "videoPage.note.title": "더 많은 영상이 곧 업데이트됩니다",
      "videoPage.note.description": "신제품 출시, 설치 가이드, 고객 사례 영상을 계속 추가합니다. 오프라인 데모나 교육 자료가 필요하시면 DAEWOO 담당자에게 문의하세요.",
      "videoPage.note.cta": "오프라인 체험 예약",
      "productCenter.eyebrow": "제품 센터",
      "productCenter.title": "DAEWOO 전 제품군 솔루션을 만나보세요",
      "productCenter.description": "가정부터 비즈니스 환경까지, 다양한 상황에 맞는 제품과 서비스를 제공합니다. 관심 시리즈를 선택하고 사양, 활용, 지원 정보를 손쉽게 확인하세요.",
      "productCenter.sidebarLabel": "제품 디렉터리",
      "productCenter.sidebarTitle": "제품 분류",
      "productCenter.sidebarNavLabel": "제품 분류 내비게이션",
      "productCenter.noteTitle": "구매 팁",
      "productCenter.noteDescription": "먼저 시리즈를 선택한 뒤, 모델별 기능과 연계 서비스를 확인하면 맞춤형 솔루션을 빠르게 파악할 수 있습니다.",
      "productCenter.collection": "제품 시리즈",
      "productCenter.badgeNew": "신제품",
      "productCenter.home.description": "주방, 청소, 공기 관리 등 다양한 생활 공간을 아우르며 건강하고 편리한 일상을 지원합니다.",
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
      "panel.product.heading": "Product Categories",
      "panel.product.home": "Home Appliances",
      "panel.product.smartHome": "Smart Home",
      "panel.product.commercial": "Commercial Appliances",
      "panel.product.personalCare": "Personal Care",
      "panel.product.wearable": "Smart Wearables",
      "panel.product.digital": "Smart Digital",
      "panel.product.others": "Other Products",
      "panel.news.heading": "News Channels",
      "panel.news.latest": "News & Industry Insights",
      "panel.video.heading": "Featured Videos",
      "panel.video.zb10": "ZB10 Portable Juicer Cup",
      "panel.video.smop02": "SMOP02 Steam Mop",
      "panel.video.k10": "K10 Electric Grill (Air Fryer)",
      "panel.video.f20": "F20 Neck Fan",
      "panel.video.dyks01": "DY-KS01 Electric Hot Water Dispenser",
      "panel.video.dygx09": "DY-BGX09 Wall-Mounted Washer",
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
      "videoPage.featured.description": "Dual cups plus a magnetic motor keep fresh juice within reach. Watch outdoor, office, and home demos along with cleaning and safety tips.",
      "videoPage.featured.bullet1": "Step-by-step juicing, cup separation, and take-and-go sipping.",
      "videoPage.featured.bullet2": "Covers Type-C charging and smart travel storage hacks.",
      "videoPage.featured.bullet3": "Ideal for design-focused families who value convenience and healthy habits.",
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
      "videoPage.cards.dybm05.title": "DY-BM05 Mini Juicer",
      "videoPage.cards.dybm05.description": "Morning kitchen footage features slow-press juicing, easy cleanup, and toddler-friendly recipes.",
      "videoPage.cards.dysp25f01.title": "DYSP-25F01 Electric Hot Water Dispenser",
      "videoPage.cards.dysp25f01.description": "Demonstrates large-capacity storage, scheduled keep-warm, and child-safe design for multi-user hydration.",
      "videoPage.cards.dyzm1266.title": "DYZM-1266 Multi-Cooker",
      "videoPage.cards.dyzm1266.description": "Compact multi-function cooker covers soups, hotpot, and solo meals with a clear lid and detachable pot.",
      "videoPage.note.title": "More videos coming soon",
      "videoPage.note.description": "We keep the library fresh with product launches, installation guides, and customer stories. Need demos or training assets? Contact your DAEWOO representative.",
      "videoPage.note.cta": "Book an in-person demo",
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
      "productCenter.comingSoon.title": "Coming Soon",
      "productCenter.comingSoon.description": "Stay tuned for updates",
      "hero.title": "Experience new service with DAEWOO",
      "hero.description": "We deliver peace of mind with innovative support and trusted engineering.",
      "footer.copy": "© 2025 DAEWOO SERVICE CO., LTD. All rights reserved.",
      "hero.prev": "Previous banner",
      "hero.next": "Next banner",
    }
  };

  const fallbackLang = "zh";
  const supportedLangs = Object.keys(translations);
  const htmlElement = document.documentElement;
  const langSelector = document.getElementById("lang-select");

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

  const applyTranslations = (lang) => {
    const normalized = supportedLangs.includes(lang) ? lang : fallbackLang;
    htmlElement.setAttribute("lang", formatLangAttr(normalized));

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      const translation = getTranslation(normalized, key);
      if (translation) {
        el.textContent = translation;
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

  applyTranslations(defaultLang);

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
  const navToggle = nav?.querySelector(".mega-nav__toggle");
  const navItems = nav ? Array.from(nav.querySelectorAll(".mega-nav__item")) : [];
  const board = document.getElementById("mega-board");
  const boardColumns = board ? Array.from(board.querySelectorAll(".mega-board__column")) : [];
  const mediaQuery = window.matchMedia("(max-width: 960px)");
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

  const setListExpanded = (expanded) => {
    if (!nav || !navToggle || !navList) return;
    navToggle.setAttribute("aria-expanded", String(expanded));
    nav.classList.toggle("is-expanded", expanded);
    if (mediaQuery.matches) {
      navList.classList.toggle("is-open", expanded);
      if (expanded) {
        const firstPanel = navItems[0]?.dataset.panel ?? null;
        setActivePanel(firstPanel);
      } else {
        clearActivePanel();
      }
    } else {
      navList.classList.remove("is-open");
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
    setListExpanded(false);
    if (mediaQuery.matches) {
      nav?.classList.remove("is-board-open");
      clearActivePanel();
    } else {
      hideBoard();
    }
  };

  // Initialize state based on current viewport
  handleMediaChange(mediaQuery);

  const isVideoPage = document.body?.classList?.contains("video-page");
  if (isVideoPage) {
    const filterButtons = Array.from(document.querySelectorAll("[data-video-filter]"));
    const videoCards = Array.from(document.querySelectorAll("[data-video-card]"));
    const modal = document.querySelector("[data-video-modal]");
    const iframe = modal?.querySelector("iframe");
    let lastFocusedTrigger = null;
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

    let openVideoModal = null;
    let closeVideoModal = null;

    if (modal && iframe) {
      const closeButton = modal.querySelector("[data-video-close]");
      const getModalOpenState = () => {
        if (typeof modal.open === "boolean") {
          return modal.open;
        }
        return modal.hasAttribute("open");
      };

      openVideoModal = (src, title, trigger) => {
        if (!src) return;
        iframe.src = src;
        iframe.title = title || iframe.title || "视频播放";
        if (typeof modal.showModal === "function") {
          modal.showModal();
        } else {
          modal.setAttribute("open", "true");
        }
        document.documentElement.classList.add("is-video-modal-open");
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
        iframe.src = "";
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

    document.addEventListener("click", (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;
      const trigger = target.closest("[data-video-src]");
      if (!trigger) return;
      const src = trigger.getAttribute("data-video-src");
      if (!src) return;
      const title = trigger.getAttribute("data-video-title") || trigger.textContent?.trim();
      lastFocusedTrigger = trigger;
      openVideoModal?.(src, title, trigger);
      if (modal && typeof modal.showModal !== "function") {
        event.preventDefault();
      }
    });

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
    });
  });

  syncLanguageButtons(defaultLang);

  if (typeof mediaQuery.addEventListener === "function") {
    mediaQuery.addEventListener("change", handleMediaChange);
  } else if (typeof mediaQuery.addListener === "function") {
    mediaQuery.addListener(handleMediaChange);
  }
});


