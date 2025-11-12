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
      "newsPage.article2.title": "DAEWOO 벽걸이 세탁기 네뷸라 출시, 완성도 높은 품질 추구",
      "newsPage.article2.summary": "네뷸라 시리즈는 공간 절약 장점을 유지하며 유아 의류 전용 케어를 더해 프리미엄 세탁 수요를 충족합니다.",
      "newsPage.article1.title": "AWE2021: DAEWOO, 중국 시장 공략을 더욱 강화하다",
      "newsPage.article1.summary": "가전 전시회 현장을 통해 DAEWOO의 중국 시장 전략과 성과를 조명합니다.",
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
      "productCenter.commercial.card1.meta2": "HACCP 추적 시스템 내장",
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
      "panel.video.k10": "K10 Electric Grill",
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
      "productInterest.heading": "Choose the products you’re interested in",
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
      "newsPage.article1.summary": "Expo highlights showcase DAEWOO’s strategies and achievements as it invests in the China market.",
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


