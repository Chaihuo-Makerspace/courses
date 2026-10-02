import type { Locale } from './types';

const zh: Record<string, string> = {
  'track.make-with-ai.name': '用 AI 造物',
  'track.make-with-ai.goal': '用 AI 工具辅助创作，零编程基础即可上手',
  'track.make-with-ai.desc':
    '让 AI 当程序员，你来当创客。用自然语言驱动 AI 写代码，零基础也能从感知、交互到边缘视觉，做出属于自己的智能硬件作品。',
  'track.build-ai-products.name': '造 AI 的物',
  'track.build-ai-products.goal': '开发具备 AI 能力的产品',
  'track.build-ai-products.desc':
    '从多模态 AI 交互到边缘视觉 AI，做出能听懂业务、能看见需求、能秒级响应的智能终端与产品。',
  'track.solutions.name': '解决方案',
  'track.solutions.goal': '系统集成与场景落地',
  'track.solutions.desc':
    '设备互联、自组网通信、环境感知三条线组合，把跨品牌设备、离网通信与全域感知集成为可交付的行业方案。',

  'home.objects.title': '学习从真实硬件和现场材料开始',
  'home.objects.subtitle':
    'LED、传感器、网关、摄像头、空间设备、交付文档，这些不是概念入口，而是课堂实验、项目训练和合作交付里的真实材料。',
  'home.outcomes.title': '引入一门课，到手这四样',
  'home.outcomes.subtitle':
    '柴火创客空间 2011 年在深圳成立，是中国最早的创客空间之一。课上用的硬件全部是 Seeed Studio 在售的产品，按 SKU 就能买到。',
  'home.paths.title': '三大学习方向',
  'home.paths.subtitle':
    '用 AI 造物、造 AI 的物、解决方案——三条主线对应不同目标与模块组合；每个方向都能继续细分到 L1 / L2 / L3。',
  'home.map.title': 'M0–M6 是学习模块，L1–L3 是实践深度',
  'home.map.subtitle':
    '矩阵只是组织方式。真正交付时，它对应的是模块、课时深度、硬件材料和项目产出。',

  'home.paths.view': '查看方向',
  'home.paths.cta1': '查看路径指南',
  'home.paths.cta2': '查看完整学习体系',
  'home.map.cta': '查看完整学习体系',

  'level.l1.label': 'L1 · 展示层',
  'level.l1.desc': '适合短课、公开课与"魔法时刻"演示：看得懂、能讲解、能演示。',
  'level.l2.label': 'L2 · 顾问层',
  'level.l2.desc': '适合学习周、训练营：独立配置可用系统，交付体验工作坊。',
  'level.l3.label': 'L3 · 设计层',
  'level.l3.desc': '适合业务集成与深度定制：API 对接、模型训练、私有化部署。',

  'outcome.hardware.label': '真实硬件',
  'outcome.hardware.desc': '每个模块都有一份可复用的硬件采购清单，包含原生套件、自研板子与配件。',
  'outcome.project.label': '项目任务',
  'outcome.project.desc': '带有实操步骤的项目任务，可直接用于课堂或训练营。',
  'outcome.material.label': '交付材料',
  'outcome.material.desc': '结果导向的交付材料，包括课件、实验手册、项目模板和评测标准。',
  'outcome.reuse.label': '可复用性',
  'outcome.reuse.desc': '一次整理，反复使用。学习材料、硬件清单和项目任务可跨批次复用。',

  'object.led.label': 'LED 灯带',
  'object.led.hint': '从点亮第一颗 LED 开始',
  'object.led.module': 'M0',
  'object.sensor.label': '传感器套件',
  'object.sensor.hint': '温度、湿度、光照、运动',
  'object.sensor.module': 'M0',
  'object.gateway.label': '家庭网关',
  'object.gateway.hint': 'Home Assistant 智能管控',
  'object.gateway.module': 'M1',
  'object.camera.label': 'AI 摄像头',
  'object.camera.hint': '边缘视觉识别与推理',
  'object.camera.module': 'M4',
  'object.speaker.label': '空间设备',
  'object.speaker.hint': '麦克风阵列与语音交互',
  'object.speaker.module': 'M2',
  'object.docs.label': '交付文档',
  'object.docs.hint': '课件、实验手册与项目模板',
  'object.docs.module': 'M5',

  'eco.seeed.name': 'Seeed Studio',
  'eco.seeed.role': '全球硬件产品与供应链平台',
  'eco.seeed.desc': '为全球创客和企业提供硬件产品与解决方案，产品覆盖物联网、边缘计算、AI 等领域。',
  'eco.seeed.tag': '硬件产品',
  'eco.chaihuo.name': '柴火创客空间',
  'eco.chaihuo.role': '中国创客运动先驱',
  'eco.chaihuo.desc':
    '2011 年成立，中国最早的创客空间之一。提供物理空间、社区活动、项目孵化等服务。',
  'eco.chaihuo.tag': '创客空间',
  'eco.opc.name': '柴火创客学院',
  'eco.opc.role': '技术赋能平台',
  'eco.opc.desc': '将生态中的技术能力转化为可学习的课程，帮助个人和企业掌握新技术整合能力。',
  'eco.opc.tag': '技术学习',
  'eco.learnMore': '了解更多',
  'eco.title': '柴火创客三位一体生态',
  'eco.subtitle': '硬件产品 · 创客空间 · 技术学习——彼此支撑，形成闭环。',

  'values.title': '这为你带来什么价值？',
  'value.realHardware.title': '真硬件',
  'value.realHardware.desc': '课程使用的工具和设备，就是 Seeed Studio 的真实产品，不是教学道具。',
  'value.realScenario.title': '真场景',
  'value.realScenario.desc': '案例来自柴火生态中的真实项目，学的是已经被验证过的解决方案。',
  'value.realConnection.title': '真连接',
  'value.realConnection.desc':
    '学完不是结束，而是进入生态的开始——对接项目机会、加入人才库、持续成长。',

  'stat.2011.label': '柴火创客空间成立',
  'stat.20.label': '全国授权合作机构',
  'stat.4000.label': '累计赋能人次',
  'mapLegend.note': '每个模块都可以按 L1/L2/L3 三个深度单独引入，也可以跨模块组合成完整方案包。',
  'mapLegend.axisX.label': '横轴 · M0–M6',
  'mapLegend.axisX.desc':
    '学习方向。M0 是零基础旗舰入口（智能硬件入门），M1–M6 是六大行业方向，按目标可独立选学。',

  'mapLegend.axisY.label': '纵轴 · L1 / L2 / L3',
  'mapLegend.axisY.desc':
    '掌握深度。L1 展示层看得懂能演示，L2 顾问层独立配置可用系统，L3 设计层做到业务集成与深度定制。',
  'mapLegend.anchorM0': '零基础旗舰入口',
  'mapLegend.anchorM1M5': '六大行业方向',

  'faq.q1.q': '合作从提交表单到启动一般需要多久？',
  'faq.q1.a':
    '首次对齐通常 3 个工作日内安排会议；标准教学套件可快速发货开课；全托交付与师资培训从需求确认到开课一般 2–4 周。',
  'faq.q2.q': '课程硬件套件必须从 Seeed 采购吗？',
  'faq.q2.a':
    '裸硬件套件与标准教学套件使用 Seeed 原厂硬件，保证课程实验与教材一致。合作伙伴也可以在自己的硬件平台上做适配，但实验手册和课程素材以原厂硬件为准。',
  'faq.q3.q': '师资培训套件具体包含什么内容？',
  'faq.q3.a':
    '包含对应模块的硬件套件、完整学习资源包以及 Train-the-Trainer 师训。师训通常由柴火讲师现场授课，时间 2–3 天，培养机构自有讲师。',
  'faq.q4.q': '全托交付套件可以按需定制吗？',
  'faq.q4.a':
    '可以。全托交付套件可按模块、级别、学员人数和目标场景定制。我们会根据需求配置硬件、课程和讲师资源，端到端托管交付。',

  'scenario.university.title': '高校 · 职业院校',
  'scenario.university.subtitle': '课程共建 / 师资赋能',
  'scenario.university.f1': '有自研课程能力可选裸硬件套件',
  'scenario.university.f2': '标准教学套件开箱即开课',
  'scenario.university.f3': '师资培训套件培养自有讲师',
  'scenario.university.o1': '学生具备行业真实交付能力',
  'scenario.university.o2': '专业建设与产业需求对齐',
  'scenario.university.o3': '机构形成可持续自主开课能力',
  'scenario.integrator.title': '集成商 · 方案商',
  'scenario.integrator.subtitle': '技术栈升级 / 交付提速',
  'scenario.integrator.f1': '裸硬件套件灵活组合自有方案',
  'scenario.integrator.f2': '标准教学套件补齐团队能力',
  'scenario.integrator.f3': '师资培训套件沉淀内部讲师',
  'scenario.integrator.o1': '交付周期压缩',
  'scenario.integrator.o2': '团队可独立承接新品类',
  'scenario.integrator.o3': '毛利与议价空间提升',
  'scenario.enterprise.title': '企业 · 产业端',
  'scenario.enterprise.subtitle': '内训 / 定制交付',
  'scenario.enterprise.f1': '首次采购可选全托交付套件',
  'scenario.enterprise.f2': '标准教学套件用于内训',
  'scenario.enterprise.f3': '柴火讲师到场端到端交付',
  'scenario.enterprise.o1': '核心团队技术储备到位',
  'scenario.enterprise.o2': '新业务方向可快速验证',
  'scenario.enterprise.o3': '减少对外部供应商依赖',

  'form.A.title': '裸硬件套件',
  'form.A.subtitle': 'Bare Hardware Kit',
  'form.A.f1': '仅含硬件与配件，不含学习资源',
  'form.A.f2': '适配自研课程，灵活组合',
  'form.A.f3': '按 M0–M6 模块自由选配',
  'form.A.d1': 'Seeed 原厂硬件与配件',
  'form.A.d2': '模块选型清单',
  'form.A.d3': '硬件保修与供货支持',
  'form.B.title': '标准教学套件',
  'form.B.subtitle': 'Standard Teaching Kit',
  'form.B.f1': '硬件 + 完整学习资源包',
  'form.B.f2': '含 NLHD 教材、课件与实验手册',
  'form.B.f3': '开箱即可开课',
  'form.B.d1': '对应模块硬件套件',
  'form.B.d2': '完整学习资源包',
  'form.B.d3': '持续学习内容更新',
  'form.C.title': '全托交付套件',
  'form.C.subtitle': 'Full-Delivery Kit',
  'form.C.f1': '硬件 + 课程 + 柴火讲师到场授课',
  'form.C.f2': '适合首次采购、零师资客户',
  'form.C.f3': '端到端托管交付',
  'form.C.d1': '硬件与学习资源',
  'form.C.d2': '柴火讲师现场授课',
  'form.C.d3': '学习交付与结业支持',
  'form.D.title': '师资培训套件',
  'form.D.subtitle': 'Train-the-Trainer Kit',
  'form.D.f1': '硬件 + 课程 + Train-the-Trainer 师训',
  'form.D.f2': '培养机构自有讲师',
  'form.D.f3': '可持续自主开课',
  'form.D.d1': '硬件与学习资源',
  'form.D.d2': 'Train-the-Trainer 师资培训',
  'form.D.d3': '讲师认证与复训',

  'levelMeta.l1.label': 'L1 · 跑通',
  'levelMeta.l1.desc': '跟着教程完成 Demo，能独立演示和讲解，适合入门与公开课。',
  'levelMeta.l2.label': 'L2 · 小项目',
  'levelMeta.l2.desc': '独立完成一个完整小项目，能配置可用系统，适合学习周与训练营。',
  'levelMeta.l3.label': 'L3 · 可交付',
  'levelMeta.l3.desc':
    '具备可交付的系统能力，能对接 API、训练模型、私有化部署，适合业务集成与深度定制。',

  'section.ecosystemTitle': '柴火创客三位一体生态',
  'section.ecosystemSubtitle': '硬件产品 · 创客空间 · 技术学习——彼此支撑，形成闭环。',
  'section.valuesTitle': '这为你带来什么价值？',
  'section.statsTitle': '柴火创客 — 数据',
  'section.faqTitle': '常见问题',
  'section.faqSubtitle': '关于合作与学习引入的常见问题',
  'section.scenariosTitle': '你是哪一类机构',
  'section.scenariosSubtitle': '三类机构引入课程的常见用法和目标。字母对应下面的四种合作形态。',
  'section.formsTitle': '四种合作形态',
  'section.formsSubtitle': '从只买硬件，到柴火讲师到场授课。',

  'contact.interest.heading': '我感兴趣的方向',
  'contact.interest.o1': '学习引入',
  'contact.interest.o2': '先锋官',
  'contact.interest.o3': '基地',
  'contact.interest.note': '发送邮件时请说明意向方向，社区经理会帮你对接到相应负责人。',

  'course.backToMatrix': '返回学习矩阵',
  'course.coreHardware': '核心硬件',
  'course.keyCapabilities': '学完能做的事',
  'course.whatProblem': '这门课解决什么问题',
  'course.difficulty': '难度',
  'course.audienceCount': '类受众群体',
  'course.typicalScenarios': '典型应用场景',
  'course.days': '天',
  'course.comingSoon': '即将推出',
  'course.viewDetail': '查看学习详情',
  'course.platform': '平台',
  'course.audienceTitle': '适合这些人学',
  'course.relatedTracks': '包含此模块的学习组合',
  'course.relatedTracksAria': '查看包含本模块的学习组合',
  'course.deliverablesTitle': '学完拿走什么',
  'course.deliverablesTitleM0': '不是一堆 demo，是能被点亮、被验收、被复制的产出物',
  'course.deliverablesIntro': '不是一堆 demo，而是可以被现场点亮、被客户验收、被团队复制的产出物。',
  'course.curriculumModules': '个教学模块',
  'course.curriculumTitle': '模块顺序不变，切法由你定',
  'course.curriculumSubtitle':
    '选一种形态，看它覆盖哪些模块。完整版是同一门课的三种排法——内容、硬件、交付物完全一致，只是切法不同。',
  'course.curriculumModuleOutput': '模块 / 产出',
  'course.curriculumCoverage': '个教学模块在各排课形态下的覆盖深度',
  'course.curriculumChooseFormat': '选择排课形态',
  'course.curriculumCoverageLabels.full': '完整',
  'course.curriculumCoverageLabels.part': '精简',
  'course.curriculumCoverageLabels.none': '不含',
  'course.curriculumCoverageLabels.plus': '比完整版更深',
  'course.formatsTitle': '先选层，再选排法',
  'course.formatsSubtitle':
    '时间和目标决定选哪一层：要学生带走一个能继续演进的作品，选完整版；只有两天，选马拉松版；只有半天，两门体验课任选其一。',
  'course.capabilitiesTitle': '学完，学生会变成什么样的人',
  'course.capabilitiesSubtitle':
    'M0 不教语法。它教的是一套在门槛消失之后，仍然决定作品好坏的东西——想法、表达、协作、迭代、讲述。',
  'course.toolchainTitle': 'Codecraft 帮你"敢做"，aily-blockly 帮你"做完"',
  'course.toolchainSubtitle':
    'M0 不用 Arduino IDE 手写 C++，而是采用矽递自研的双平台接力工具链。前半程零安装、5 分钟见效；后半程把作品搬回自己的电脑，变成能带走、能继续演进的工程。',
  'course.toolchainTitle.m1': 'ESPHome 把设备接进来，Node-RED 把业务串起来',
  'course.toolchainSubtitle.m1':
    '先用 ESPHome + HA OS 完成设备固件烧录与统一接入，再用 Node-RED 做跨系统业务编排——从单平台联动走向业务集成。',
  'course.toolchainTitle.m2': '从云端多模态配置到本地离线部署',
  'course.toolchainSubtitle.m2':
    'SenseCraft AI 负责快速配置与验证，MCP 桥接把业务数据留在局域网，Jetson 离线管线彻底切断公网依赖。',
  'course.toolchainTitle.m3': 'Meshtastic 组网，Node-RED 上云，PlatformIO 定制',
  'course.toolchainSubtitle.m3':
    '先用 Meshtastic 打通离网通信，再经 Node-RED 接入公网与监控大屏，最后用 PlatformIO 裁剪自己的终端固件。',
  'course.toolchainTitle.m4': 'reCamera 端侧推理，Frigate 多路汇聚，YOLO 自训模型',
  'course.toolchainSubtitle.m4':
    '从单点位即插即用的端侧检测，到多路 NVR 集中分析与自定义模型量化部署，覆盖视觉方案的三级深度。',
  'course.toolchainTitle.m5': 'SenseCAP 上云，Modbus 接线，Open API 私有化',
  'course.toolchainSubtitle.m5':
    '工业传感器开箱接入云端看板，RS485 总线并联多传感器，再用 Open API 与 Grafana 搭私有化数据看板。',
  'course.toolchainTitle.m6': '从零代码遥操到确定性工程抓取',
  'course.toolchainSubtitle.m6':
    'SenseCraft Robotics 完成开箱遥操演示，Python + Pinocchio + Motorbridge 实现真机空间抓取，LeRobot 与 Isaac Sim 补齐具身智能与仿真验证。',
  'course.kitsTitle': '感知 · 交互 · 视觉，三级能力递进',
  'course.kitsSubtitle':
    '完整版人手一套三件；短形态只发对应的那一件。子套件按硬件平台划分，不代表 L1／L2／L3 的掌握深度。',
  'course.hardwareIntroTitle': '学习所需硬件',
  'course.hardwareIntroSubtitle': '本学习模块配套的教具清单，均为开箱即用的真实硬件。',

  'course.ladderTitleM0': '三套硬件平台：A 感知 · B 交互 · C 视觉',
  'course.ladderTitle': '三档深度，各学到哪一步',
  'course.ladderSubtitleM0':
    'M0 按硬件平台分层（A: Grove · B: Wio Terminal · C: XIAO ESP32S3 Sense），不是 L1/L2/L3 掌握深度。',
  'course.matrixTitle': 'M0–M6 × L1/L2/L3 全景',
  'course.matrixSubtitle':
    '横轴为 L1–L3 三个层级，纵轴为 M0–M6 七个模块；M0 是零基础旗舰入口，M1–M6 按方向可独立选学，每个模块内按 L1 展示层 → L2 顾问层 → L3 设计层逐级递进。',
  'course.matrixLegend': '图例',
  'course.explorerTitle': '七个可引入学习模块',
  'course.explorerSubtitle':
    '每个模块都包含真实硬件、课堂实验、能力目标和可带走材料。可以单独引入，也可以组合成系列方案。',

  'course.explorer.cardView': '详细卡片',
  'course.explorer.listView': '紧凑列表',
  'course.explorer.switchCard': '切换至卡片视图',
  'course.explorer.switchList': '切换至列表视图',
  'course.tracksTitle': '七个模块，分三个方向',
  'course.tracksSubtitle':
    '方向按目标分组，不是固定的学习顺序。M0 是零基础入口，其余六门可以单独开课。',

  'moduleCard.coreHardware': '核心硬件',
  'moduleCard.keyCapabilities': '关键能力',
  'moduleCard.viewDetail': '查看详情',
  'moduleCard.illustration': '插画',
  'moduleCard.about': '约',
  'moduleOneLiner.viewDetail': '查看学习详情',

  'courseMatrix.swipeHint': '← 左右滑动查看完整矩阵 →',
  'courseMatrix.srCaption':
    '学习矩阵：横轴为 L1–L3 三个层级，纵轴为 M0–M6 七个模块；每格列出该模块在该层级的模块标题、时长与产出。',
  'courseMatrix.srHeader': '模块 / 层级',

  'courseMatrix.platformLayers': 'A/B/C 硬件平台分层',
  'courseMatrix.comingSoon': '即将推出',

  'courseAxis.title': '模块与级别如何组合',
  'courseAxis.subtitle':
    'M0–M6 说明学习方向，L1 / L2 / L3 说明实践深度。机构引入时，可以按模块和级别确定方案包范围。',

  'courseAxis.l1': '展示层｜看得懂、能演示',
  'courseAxis.l2': '顾问层｜独立配置可用系统',
  'courseAxis.l3': '设计层｜业务集成与深度定制',

  'trackFlow.title': '三大学习方向',
  'trackFlow.subtitle': '按学习目标拼模块；M0 是零基础旗舰入口，M1–M6 按方向组合。',
  'trackFlow.viewCombo': '查看这组模块组合',

  'pathOr.moduleRange': '模块范围',
  'pathOr.chooseDirection': '选 M0–M6 中的课程方向',

  'pathOr.determineLevel': '确定 L1 / L2 / L3',
  'pathOr.confirmHardware': '确认硬件、实验和项目产出',
  'pathOr.formats': '裸硬件 / 标准教学 / 全托交付 / 师资培训',
  'pathOr.heading': '先确认学习包的四个维度',
  'pathOr.subheading': '这四项清楚了，后面的合作沟通会更具体。',

  'pathDepth.l1Title': '展示层 · 看得懂、能演示',
  'pathDepth.l1Desc':
    '单点体验：3 分钟跑出「魔法时刻」，看得懂、能讲解、能演示。适合销售、决策者、公众与零基础人群。',
  'pathDepth.l2Title': '顾问层 · 独立配置可用系统',
  'pathDepth.l2Desc':
    '场景联动：独立配置一套可用系统，交付体验工作坊。适合售前支持、技术顾问与集成商。',
  'pathDepth.l3Title': '设计层 · 业务集成与深度定制',
  'pathDepth.l3Desc':
    '业务集成：商业闭环与深度定制——API 对接、模型训练、私有化部署。适合售后工程师与高级技术支持。',
  'pathDepth.heading': '每个模块都可以按三种实践深度引入',
  'pathDepth.subheading': 'L1 展示层 / L2 顾问层 / L3 设计层对应课程深度，不是用户身份标签。',
  'pathDepth.cta': '在完整矩阵里查看每个模块的 L1 / L2 / L3',

  'pathTracks.title': '三大学习方向',
  'pathTracks.subtitle': '三个并列方向，按课程目标给出建议组合。',

  'pathTracks.locate': '在学习体系中定位',
  'pathTracks.consult': '申请合作咨询',
  'pathTracks.view': '查看',

  'partner.title': '生态合作伙伴',
  'partnership.features': '包含什么',
  'partnership.deliverables': '交付内容',
  'partnership.scanForm': '咨询此形态',
  'partnership.scanFormAria': '咨询形态',
  'scenario.features': '常见用法',
  'scenario.outcomes': '常见目标',
  'scenario.applicable': '适用合作形态',

  'heroMap.title': 'M0–M6 × L1/L2/L3 学习矩阵',
  'heroMap.subtitle': '每个模块都可按 L1/L2/L3 三个深度独立引入，也可以跨模块组合成完整方案包。',

  'heroMap.viewAll': '查看完整学习体系',
  'heroMap.viewGuide': '查看路径指南',

  'cta.home.title': '把学习体系引入你的教学、培训或项目现场',
  'cta.home.desc':
    '可以先引入单个模块，也可以按目标组合方案包；销售形态包括裸硬件套件、标准实训套件、全托交付与师资培训。',
  'cta.paths.title': '选好组合后，回到学习体系确认模块与级别',
  'cta.paths.desc':
    '路径指南只帮助你缩小范围。真正落地时，还要看模块内容、课堂实验、硬件清单、交付材料和销售形态。',
  'cta.courses.title': '把学习模块引入你的团队或项目现场',

  'cta.courses.desc':
    '如果你已经有明确方向，可以继续讨论裸硬件套件、标准教学套件、全托交付或师资培训。我们会根据目标推荐模块组合与实践深度。',
  'cta.about.title': '想把这份生态能力带到你的组织？',
  'cta.about.desc':
    '从裸硬件套件到全托交付，可以按你的目标选择销售形态。请留下意向信息，我们 3 个工作日内提供合作建议。',
  'cta.apply': '申请合作咨询',
  'cta.viewCourses': '查看学习体系',
  'cta.viewPaths': '查看路径指南',
  'cta.aboutOrg': '关于学院',
  'home.matrix.note':
    '格内数字是该档的课时天数（d = 天）。点模块名，看这门课的设备、大纲和验收标准。',
  'course.overseasOnly': '仅海外交付',
  'course.day': '天',
  'partnership.suitable': '适合',
};

const en: Record<string, string> = {
  'track.make-with-ai.name': 'Build with AI',
  'track.make-with-ai.goal':
    'No coding background needed: AI writes the code and you build working hardware',
  'track.make-with-ai.desc':
    'M0 covers three hardware platforms in one course: Grove for sensing, Wio Terminal for interaction and XIAO ESP32S3 Sense for image classification. AI writes the code; learners are responsible for stating the requirement clearly and getting the project to work.',
  'track.build-ai-products.name': 'Build AI Products',
  'track.build-ai-products.goal': 'Build terminals and devices with AI capabilities',
  'track.build-ai-products.desc':
    'M2 makes a terminal that understands speech and sees; M4 makes cameras detect targets and raise alerts; M6 makes a robotic arm grasp based on vision. The three modules cover voice interaction, visual detection and robot control.',
  'track.solutions.name': 'Solutions',
  'track.solutions.goal': 'Integrate multiple devices and networks into one site',
  'track.solutions.desc':
    'M1 brings devices from different brands onto one local platform; M3 builds a network where there is no public connectivity; M5 brings field sensor data back. Suited to integration teams working on building, emergency, agriculture and environmental projects.',

  'home.objects.title': 'Learning starts with real hardware and field materials',
  'home.objects.subtitle':
    'LEDs, sensors, gateways, cameras, spatial devices, and delivery documentation — real materials used in classroom experiments, project training, and collaborative delivery.',
  'home.outcomes.title': 'What you receive when you bring in one course',
  'home.outcomes.subtitle':
    "Chaihuo Makerspace was founded in Shenzhen in 2011, one of the earliest makerspaces in China. All hardware used in class is from Seeed Studio's current catalogue and can be ordered by SKU.",
  'home.paths.title': 'Three Learning Tracks',
  'home.paths.subtitle':
    'Build with AI, Build AI Products, Solutions — three tracks for different goals and module combinations.',
  'home.map.title': 'M0–M6 are learning modules, L1–L3 are hands-on depths',
  'home.map.subtitle':
    'The matrix is an organizational tool. In actual delivery, it corresponds to modules, class depth, hardware materials, and project outputs.',
  'home.paths.view': 'View Track',
  'home.paths.cta1': 'View Learning Paths',
  'home.paths.cta2': 'View Full Learning System',
  'home.map.cta': 'View Full Learning System',

  'level.l1.label': 'L1 · Demo Level',
  'level.l1.desc':
    'Suitable for short courses and open classes: understandable, explainable, and demonstrable.',
  'level.l2.label': 'L2 · Consultant Level',
  'level.l2.desc':
    'Suitable for learning weeks and bootcamps: independently configure usable systems.',
  'level.l3.label': 'L3 · Design Level',
  'level.l3.desc':
    'Suitable for business integration and deep customization: API integration, model training, private deployment.',

  'outcome.hardware.label': 'Real Hardware',
  'outcome.hardware.desc': 'Each module has a reusable hardware procurement list.',
  'outcome.project.label': 'Project Tasks',
  'outcome.project.desc': 'Hands-on project tasks for classrooms or bootcamps.',
  'outcome.material.label': 'Delivery Materials',
  'outcome.material.desc':
    'Results-oriented delivery materials including courseware, lab manuals, and project templates.',
  'outcome.reuse.label': 'Reusability',
  'outcome.reuse.desc': 'Organize once, reuse repeatedly across batches.',

  'object.led.label': 'LED Strip',
  'object.led.hint': 'Start by lighting your first LED',
  'object.led.module': 'M0',
  'object.sensor.label': 'Sensor Kit',
  'object.sensor.hint': 'Temperature, humidity, light, motion',
  'object.sensor.module': 'M0',
  'object.gateway.label': 'Home Gateway',
  'object.gateway.hint': 'Home Assistant smart control',
  'object.gateway.module': 'M1',
  'object.camera.label': 'AI Camera',
  'object.camera.hint': 'Edge vision recognition & inference',
  'object.camera.module': 'M4',
  'object.speaker.label': 'Spatial Devices',
  'object.speaker.hint': 'Microphone arrays & voice interaction',
  'object.speaker.module': 'M2',
  'object.docs.label': 'Delivery Docs',
  'object.docs.hint': 'Courseware, lab manuals & project templates',
  'object.docs.module': 'M5',

  'eco.seeed.name': 'Seeed Studio',
  'eco.seeed.role': 'Global Hardware & Supply Chain Platform',
  'eco.seeed.desc':
    'Provides hardware products and solutions for makers and enterprises worldwide, covering IoT, edge computing, AI, and more.',
  'eco.seeed.tag': 'Hardware',
  'eco.chaihuo.name': 'Chaihuo Makerspace',
  'eco.chaihuo.role': 'Pioneer of China Maker Movement',
  'eco.chaihuo.desc':
    "Founded in 2011, one of China's earliest makerspaces. Provides physical space, community events, project incubation, and more.",
  'eco.chaihuo.tag': 'Makerspace',
  'eco.opc.name': 'Chaihuo Maker Academy',
  'eco.opc.role': 'Technology Empowerment Platform',
  'eco.opc.desc':
    'Transforms ecosystem technical capabilities into learnable courses, helping individuals and enterprises master new technology integration skills.',
  'eco.opc.tag': 'Training',
  'eco.learnMore': 'Learn More',
  'eco.title': 'Chaihuo Maker Triune Ecosystem',
  'eco.subtitle': 'Hardware · Makerspace · Training — mutually supporting.',

  'values.title': 'What value does this bring you?',
  'value.realHardware.title': 'Real Hardware',
  'value.realHardware.desc':
    'Tools and equipment are Seeed Studio real products, not teaching props.',
  'value.realScenario.title': 'Real Scenarios',
  'value.realScenario.desc': 'Cases from real projects in the Chaihuo ecosystem.',
  'value.realConnection.title': 'Real Connections',
  'value.realConnection.desc': 'Completion is the beginning of entering the ecosystem.',

  'stat.2011.label': 'Chaihuo Makerspace founded',
  'stat.20.label': 'Authorized partner institutions',
  'stat.4000.label': 'Cumulative training participants',
  'mapLegend.note':
    'Each module can be introduced independently at L1/L2/L3 depths, or combined across modules.',
  'mapLegend.axisX.label': 'Horizontal Axis · M0–M6',
  'mapLegend.axisX.desc':
    'Learning direction. M0 is the zero-baseline flagship entry (smart hardware fundamentals), M1–M6 are six industry directions, independently selectable by goal.',
  'mapLegend.axisY.label': 'Vertical Axis · L1 / L2 / L3',
  'mapLegend.axisY.desc':
    'Mastery depth. L1 Demo Level — understandable and demonstrable, L2 Consultant Level — independently configure usable systems, L3 Design Level — business integration and deep customization.',
  'mapLegend.anchorM0': 'Zero-Baseline Flagship Entry',
  'mapLegend.anchorM1M5': 'Five Industry Directions',

  'faq.q1.q': 'How long from the first email to the first class?',
  'faq.q1.a':
    'Initial alignment within 3 business days; Standard Kits ship quickly; Full-Delivery and Train-the-Trainer take 2-4 weeks.',
  'faq.q2.q': 'Must hardware kits be purchased from Seeed?',
  'faq.q2.a':
    'Bare Hardware and Standard Kits use Seeed original hardware. Partners can adapt on their own platforms.',
  'faq.q3.q': 'What does the Train-the-Trainer Kit include?',
  'faq.q3.a':
    'Hardware kit, complete course resources, and Train-the-Trainer instruction over 2-3 days.',
  'faq.q4.q': 'Can the Full-Delivery Kit be customized?',
  'faq.q4.a':
    'Yes. Customizable by module, level, participants, and scenario for end-to-end managed delivery.',

  'scenario.university.title': 'Universities & Vocational Schools',
  'scenario.university.subtitle': 'Co-developed courses / Teacher training',
  'scenario.university.f1': 'Bare Hardware Kit for in-house curriculum',
  'scenario.university.f2': 'Standard teaching kit: classes can start as soon as it arrives',
  'scenario.university.f3': 'Train-the-Trainer Kit: develop instructors',
  'scenario.university.o1': 'Students can build systems that are fit to deliver',
  'scenario.university.o2': 'Course content keeps pace with technology in use in industry',
  'scenario.university.o3': 'Your own instructors, so courses keep running',
  'scenario.integrator.title': 'Integrators & Solution Providers',
  'scenario.integrator.subtitle': 'Close team skill gaps / Take on new device categories',
  'scenario.integrator.f1': 'Bare Hardware Kit: flexible combination',
  'scenario.integrator.f2': 'Standard Teaching Kit: fill team gaps',
  'scenario.integrator.f3': 'Train-the-Trainer Kit: internal instructors',
  'scenario.integrator.o1': 'Less preparation time before a new project',
  'scenario.integrator.o2': 'The team can take on new device categories',
  'scenario.integrator.o3': 'Less reliance on outside technical support',
  'scenario.enterprise.title': 'Enterprises & Industry',
  'scenario.enterprise.subtitle': 'Internal training / Custom delivery',
  'scenario.enterprise.f1': 'Full-Delivery Kit for first purchase',
  'scenario.enterprise.f2': 'Standard Kit for internal training',
  'scenario.enterprise.f3':
    'A Chaihuo instructor teaches on site and handles everything from materials to wrap-up',
  'scenario.enterprise.o1': 'The core team masters the relevant technology',
  'scenario.enterprise.o2': 'New business directions are tested at small scale first',
  'scenario.enterprise.o3': 'Less dependence on outside suppliers',

  'form.A.title': 'Bare Hardware Kit',
  'form.A.subtitle': 'Bare Hardware Kit',
  'form.A.f1': 'Hardware only, no course resources',
  'form.A.f2': 'Adaptable for in-house curriculum',
  'form.A.f3': 'Freely select M0-M6 modules',
  'form.A.d1': 'Seeed original hardware',
  'form.A.d2': 'Module selection checklist',
  'form.A.d3': 'Hardware warranty and supply support',
  'form.B.title': 'Standard Teaching Kit',
  'form.B.subtitle': 'Standard Teaching Kit',
  'form.B.f1': 'Hardware + complete course resources',
  'form.B.f2': 'Includes textbook, slides and lab manual',
  'form.B.f3': 'Classes can start as soon as the kit arrives',
  'form.B.d1': 'Module hardware kit',
  'form.B.d2': 'Complete course resource package',
  'form.B.d3': 'Continuous content updates',
  'form.C.title': 'Full-Delivery Kit',
  'form.C.subtitle': 'Full-Delivery Kit',
  'form.C.f1': 'Hardware + courses + Chaihuo instructors',
  'form.C.f2': 'For first-time buyers without their own instructors',
  'form.C.f3': 'Chaihuo handles everything from materials to wrap-up',
  'form.C.d1': 'Hardware and course resources',
  'form.C.d2': 'Chaihuo instructor on-site teaching',
  'form.C.d3': 'Course delivery and completion support',
  'form.D.title': 'Train-the-Trainer Kit',
  'form.D.subtitle': 'Train-the-Trainer Kit',
  'form.D.f1': 'Hardware + courses + TTT instruction',
  'form.D.f2': 'Develop institution instructors',
  'form.D.f3': 'Sustainable independent teaching',
  'form.D.d1': 'Hardware and course resources',
  'form.D.d2': 'TTT instructor training',
  'form.D.d3': 'Instructor certification and refresher',

  'levelMeta.l1.label': 'L1 · Demo',
  'levelMeta.l1.desc': 'Follow tutorials to complete a demo, suitable for beginners.',
  'levelMeta.l2.label': 'L2 · Project',
  'levelMeta.l2.desc': 'Independently complete a small project, suitable for learning weeks.',
  'levelMeta.l3.label': 'L3 · Deliverable',
  'levelMeta.l3.desc': 'Deliverable system capability, suitable for business integration.',

  'section.ecosystemTitle': 'Chaihuo Maker Triune Ecosystem',
  'section.ecosystemSubtitle': 'Hardware · Makerspace · Training — mutually supporting.',
  'section.valuesTitle': 'What value does this bring you?',
  'section.statsTitle': 'Chaihuo Maker — By the Numbers',
  'section.faqTitle': 'Frequently Asked Questions',
  'section.faqSubtitle': 'Common questions about partnerships and course adoption',
  'section.scenariosTitle': 'Which kind of organisation are you?',
  'section.scenariosSubtitle':
    'How each kind of organisation typically uses the courses and what it is aiming for. The letters refer to the four formats below.',
  'section.formsTitle': 'Four ways to work together',
  'section.formsSubtitle':
    'From buying hardware only to having a Chaihuo instructor teach on site.',

  'contact.interest.heading': 'What Brings You Here?',
  'contact.interest.o1': 'Course Introduction',
  'contact.interest.o2': 'Pioneer',
  'contact.interest.o3': 'Base',
  'contact.interest.note':
    'Mention your interest in your email — the community manager will route you to the right person.',

  'course.backToMatrix': 'Back to Learning Matrix',
  'course.coreHardware': 'Core Hardware',
  'course.keyCapabilities': 'What learners can do afterwards',
  'course.whatProblem': 'The problem this course addresses',
  'course.difficulty': 'Difficulty',
  'course.audienceCount': 'audience groups',
  'course.typicalScenarios': 'Typical Scenarios',
  'course.days': 'days',
  'course.comingSoon': 'Coming Soon',
  'course.viewDetail': 'View Course Details',
  'course.platform': 'Platform',
  'course.audienceTitle': 'Who This Course Is For',
  'course.relatedTracks': 'Course Combinations Including This Module',
  'course.relatedTracksAria': 'View course combinations',
  'course.deliverablesTitle': 'What You Take Away',
  'course.deliverablesTitleM0':
    'Not a pile of demos, but deliverables that can be lit up, validated, and replicated',
  'course.deliverablesIntro':
    'Not a pile of demos, but deliverables that can be lit up on-site, validated by clients, and replicated by teams.',
  'course.curriculumModules': 'teaching modules',
  'course.curriculumTitle': 'Same module order, you choose the cut',
  'course.curriculumSubtitle': 'Select a format to see which modules it covers.',
  'course.curriculumModuleOutput': 'Module / Output',
  'course.curriculumCoverage': 'teaching modules coverage across formats',
  'course.curriculumChooseFormat': 'Select teaching format',
  'course.curriculumCoverageLabels.full': 'Full',
  'course.curriculumCoverageLabels.part': 'Partial',
  'course.curriculumCoverageLabels.none': 'None',
  'course.curriculumCoverageLabels.plus': 'Extended',
  'course.formatsTitle': 'Pick the layer, then the format',
  'course.formatsSubtitle': 'Time and goals determine which layer to choose.',
  'course.capabilitiesTitle': 'What kind of person will the student become?',
  'course.capabilitiesSubtitle':
    'M0 teaches what determines quality after the entry barrier disappears.',
  'course.toolchainTitle': 'Codecraft helps you dare to make, aily-blockly helps you finish it',
  'course.toolchainSubtitle':
    'M0 adopts dual-platform relay toolchain for zero-install, 5-minute results.',
  'course.toolchainTitle.m1': 'ESPHome Brings Devices In, Node-RED Wires Up the Business',
  'course.toolchainSubtitle.m1':
    'Start with ESPHome + HA OS for firmware flashing and unified access, then use Node-RED for cross-system orchestration — from single-platform automation to business integration.',
  'course.toolchainTitle.m2': 'From Cloud Multimodal Setup to Local Offline Deployment',
  'course.toolchainSubtitle.m2':
    'SenseCraft AI handles fast configuration and validation, the MCP bridge keeps business data on the LAN, and the Jetson offline pipeline removes public-internet dependency entirely.',
  'course.toolchainTitle.m3':
    'Meshtastic Meshes, Node-RED Bridges to the Cloud, PlatformIO Customizes',
  'course.toolchainSubtitle.m3':
    'Use Meshtastic for off-grid communication, bridge mesh data to the public network and monitoring dashboards via Node-RED, then tailor your own device firmware with PlatformIO.',
  'course.toolchainTitle.m4':
    'reCamera Edge Inference, Frigate Multi-Channel Aggregation, YOLO Custom Models',
  'course.toolchainSubtitle.m4':
    'From plug-and-play single-point edge detection to multi-channel NVR analysis and quantized custom-model deployment — three depths of a vision solution.',
  'course.toolchainTitle.m5': 'SenseCAP to the Cloud, Modbus Wiring, Open API On-Prem',
  'course.toolchainSubtitle.m5':
    'Industrial sensors connect out of the box to cloud dashboards, RS485 buses parallel multiple sensors, and the Open API plus Grafana builds an on-prem data loop.',
  'course.toolchainTitle.m6': 'From No-Code Teleoperation to Deterministic Engineering Grasping',
  'course.toolchainSubtitle.m6':
    'SenseCraft Robotics delivers out-of-the-box teleoperation demos, Python + Pinocchio + Motorbridge enables real-machine spatial grasping, and LeRobot with Isaac Sim covers embodied intelligence and simulation validation.',
  'course.kitsTitle': 'Sensing · Interaction · Vision, three-tier capability progression',
  'course.kitsSubtitle': 'Sub-kits divided by hardware platform, not L1/L2/L3 mastery depth.',
  'course.hardwareIntroTitle': 'Course Hardware',
  'course.hardwareIntroSubtitle':
    'The teaching kit list for this course — real hardware, ready to use out of the box.',
  'course.ladderTitleM0': 'Three Hardware Platforms: A Sensing · B Interaction · C Vision',
  'course.ladderTitle': 'Three depths and where each one gets you',
  'course.ladderSubtitleM0':
    'M0 layered by hardware platform (A: Grove · B: Wio Terminal · C: XIAO ESP32S3 Sense).',
  'course.matrixTitle': 'M0–M6 × L1/L2/L3 Panorama',
  'course.matrixSubtitle':
    'Horizontal axis = L1–L3 three levels, vertical axis = M0–M6 seven modules; M0 is the zero-baseline entry, M1–M6 independently selectable by direction.',
  'course.matrixLegend': 'Legend',
  'course.explorerTitle': 'Seven Adoptable Learning Modules',
  'course.explorerSubtitle':
    'Each module includes real hardware, classroom experiments, and takeaway materials.',
  'course.explorer.cardView': 'Detailed Cards',
  'course.explorer.listView': 'Compact List',
  'course.explorer.switchCard': 'Switch to card view',
  'course.explorer.switchList': 'Switch to list view',
  'course.tracksTitle': 'Seven modules in three directions',
  'course.tracksSubtitle':
    'Directions group modules by goal, not by a fixed order. M0 is the entry point for beginners; the other six can each be run on their own.',

  'moduleCard.coreHardware': 'Core Hardware',
  'moduleCard.keyCapabilities': 'Key Capabilities',
  'moduleCard.viewDetail': 'View Details',
  'moduleCard.illustration': 'illustration',
  'moduleCard.about': '~',
  'moduleOneLiner.viewDetail': 'View Course Details',

  'courseMatrix.swipeHint': '← Swipe to view full matrix →',
  'courseMatrix.srCaption':
    'Learning matrix: horizontal = L1-L3 levels, vertical = M0-M6 modules; each cell shows the module title, duration, and outcomes for that module at that level.',
  'courseMatrix.srHeader': 'Module / Level',
  'courseMatrix.platformLayers': 'A/B/C Hardware Platform Layers',
  'courseMatrix.comingSoon': 'Coming Soon',

  'courseAxis.title': 'How Modules and Levels Combine',
  'courseAxis.subtitle': 'M0-M6 indicates learning direction, L1/L2/L3 indicates practice depth.',
  'courseAxis.l1': 'Demo Level | Understandable, demonstrable',
  'courseAxis.l2': 'Consultant Level | Independently configure systems',
  'courseAxis.l3': 'Design Level | Business integration',

  'trackFlow.title': 'Three Learning Tracks',
  'trackFlow.subtitle': 'Combine modules by learning goal; M0 is the zero-baseline entry.',
  'trackFlow.viewCombo': 'View this module combination',

  'pathOr.moduleRange': 'Module Range',
  'pathOr.chooseDirection': 'Choose from M0-M6 course directions',
  'pathOr.determineLevel': 'Determine L1 / L2 / L3',
  'pathOr.confirmHardware': 'Confirm hardware, experiments, and project outputs',
  'pathOr.formats': 'Bare Hardware / Standard Teaching / Full-Delivery / Train-the-Trainer',
  'pathOr.heading': 'First confirm the four dimensions',
  'pathOr.subheading': 'Once these are clear, partnership discussions will be more concrete.',

  'pathDepth.l1Title': 'Demo Level · Understandable, demonstrable',
  'pathDepth.l1Desc':
    'Achieve a magic moment in 3 minutes. Suitable for sales, decision-makers, beginners.',
  'pathDepth.l2Title': 'Consultant Level · Independently configure systems',
  'pathDepth.l2Desc':
    'Independently configure a usable system. Suitable for pre-sales, consultants, integrators.',
  'pathDepth.l3Title': 'Design Level · Business integration',
  'pathDepth.l3Desc':
    'API integration, model training, private deployment. Suitable for post-sales engineers.',
  'pathDepth.heading': 'Each module can be introduced at three practice depths',
  'pathDepth.subheading': 'L1/L2/L3 correspond to course depth, not user identity labels.',
  'pathDepth.cta': 'View each module L1/L2/L3 in the full matrix',

  'pathTracks.title': 'Three Learning Tracks',
  'pathTracks.subtitle': 'Three parallel tracks with recommended combinations.',
  'pathTracks.locate': 'Locate in Learning System',
  'pathTracks.consult': 'Apply for Partnership',
  'pathTracks.view': 'View',

  'partner.title': 'Ecosystem Partners',
  'partnership.features': 'What it includes',
  'partnership.deliverables': 'Deliverables',
  'partnership.scanForm': 'Inquire about this format',
  'partnership.scanFormAria': 'Inquire about format',
  'scenario.features': 'Typical use',
  'scenario.outcomes': 'Typical goals',
  'scenario.applicable': 'Applicable Partnership Formats',

  'heroMap.title': 'M0–M6 × L1/L2/L3 Learning Matrix',
  'heroMap.subtitle': 'Each module can be independently introduced at L1/L2/L3 depths.',
  'heroMap.viewAll': 'View Full Learning System',
  'heroMap.viewGuide': 'View Learning Paths',

  'cta.home.title': 'Start with one course.',
  'cta.home.desc':
    'Pick one module and run a trial cohort: the hardware kit, lesson plans and learner assignments are all provided. If it works for you, we can talk about adopting the full programme. Email us and we will reply with a proposal within 3 working days.',
  'cta.paths.title':
    'After selecting a combination, return to the learning system to confirm modules and levels',
  'cta.paths.desc':
    'The learning path guide only helps narrow down options. For actual implementation, you also need to review module content, classroom experiments, hardware lists, delivery materials, and delivery formats.',
  'cta.courses.title': 'Once the module and depth are chosen, we can talk about running it.',
  'cta.courses.desc':
    'Tell us the module, the depth (L1 / L2 / L3) and the class size. Pricing depends on class format and size; we send a proposal within 3 working days of your email.',
  'cta.about.title': 'Want to bring Chaihuo courses to your school or team?',
  'cta.about.desc':
    'Email us about who the learners are and what you want them to achieve. We reply with a partnership proposal within 3 working days.',
  'cta.apply': 'Apply for Partnership',
  'cta.viewCourses': 'View Courses',
  'cta.viewPaths': 'View Learning Paths',
  'cta.aboutOrg': 'Learn About the Academy',
  'home.matrix.note':
    'The number in each cell is the course length in days for that level. Select a module to see its hardware, syllabus and acceptance criteria.',
  'course.overseasOnly': 'Outside mainland China only',
  'outcome.lab.label': 'Labs that run in the classroom',
  'outcome.lab.desc':
    'Every module is built around real hardware: learners assemble it, debug it and demo it in class.',
  'outcome.kit.label': 'Hardware kit and course materials',
  'outcome.kit.desc':
    'Seeed hardware plus textbook, lab manual, teacher materials and learner assignments.',
  'outcome.docs.label': 'Project documents you can file',
  'outcome.docs.desc':
    'Deployment topology, configuration files, operations and acceptance documents, itemised on each module page.',
  'outcome.forms.label': 'Four ways to buy',
  'outcome.forms.desc':
    'Hardware only, the standard teaching kit, a Chaihuo instructor teaching on site, or training your own instructors first.',
  'course.day': 'day',
  'cta.module.title': 'Put {code} on your timetable',
  'cta.module.desc':
    'Pricing depends on class format and size. Email us the number of learners and the depth you want, and we will send a proposal within 3 working days.',
  'history.founded.when': '2011',
  'history.founded.title': 'Chaihuo Makerspace opens in Shenzhen',
  'history.founded.desc':
    "One of the earliest makerspaces in China. The Academy is part of Chaihuo Makerspace, so the makerspace's history is the Academy's history.",
  'history.seeed.when': 'Hardware',
  'history.seeed.title': 'Classes use products Seeed Studio sells today',
  'history.seeed.desc':
    'Development boards, sensors and edge-computing devices can all be ordered by SKU. None of it is a teaching prop.',
  'history.academy.when': 'Courses',
  'history.academy.title': 'Seven modules, each at three depths',
  'history.academy.desc':
    'M0 is the entry course for beginners. M1–M6 each address one kind of on-site problem: building energy use, voice and vision interaction, off-grid communication, vision alerts, environmental monitoring and robotic grasping.',
  'history.sites.when': 'Sites',
  'history.sites.title': 'Campuses in Shenzhen and Chengdu',
  'history.sites.desc':
    'Shenzhen: Vanke Cloud City Design Community, Nanshan District. Chengdu: No. 92 Shima Road, Qingyang District.',
  'person.name': 'Feng Lei',
  'person.role': 'General Coordinator, Chaihuo Maker Academy',
  'person.quote':
    'The best fate of a course is not being executed perfectly once, but being transformed beyond recognition by a teacher, becoming a course that only they can teach.',
  'partnership.suitable': 'Suited to',
  'faq.q5.q': 'Can we bring in just one module or one depth level?',
  'faq.q5.a':
    'Yes. Each of M0–M6 can be run on its own, and you can take only one of L1 / L2 / L3. We will suggest the smallest combination that meets your goal.',
  'faq.q6.q': 'Do you work with partners outside China?',
  'faq.q6.a':
    'Yes. The M3 mesh-networking module is delivered only outside mainland China. For other modules, email us to arrange teaching language and instructor travel.',
};

const ja: Record<string, string> = {
  'track.make-with-ai.name': 'AIでものづくり',
  'track.make-with-ai.goal': 'プログラミング未経験でも、AIにコードを書かせてハードウェア作品を作る',
  'track.make-with-ai.desc':
    'M0は1講座で3種類のハードウェアを扱います。Groveでセンシング、Wio Terminalでインタラクション、XIAO ESP32S3 Senseで画像分類。コードはAIが書き、受講者は要件を明確に伝え、作品を動く状態に仕上げます。',
  'track.build-ai-products.name': 'AIプロダクト開発',
  'track.build-ai-products.goal': 'AI機能を備えた端末・機器を作る',
  'track.build-ai-products.desc':
    'M2は音声を理解し映像を認識する端末、M4は対象を検出してアラートを出すカメラ、M6は視覚結果に基づいて把持するロボットアームを扱います。3つのモジュールはそれぞれ音声対話、視覚検出、ロボット制御に対応します。',
  'track.solutions.name': 'ソリューション',
  'track.solutions.goal': '複数の機器とネットワークを一つの現場に統合する',
  'track.solutions.desc':
    'M1は複数ブランドの機器を一つのローカルプラットフォームに接続し、M3は公衆網のない場所でネットワークを構築し、M5は屋外センサーのデータを回収します。ビル、防災、農業、環境分野の案件を手がけるインテグレーションチームに向いています。',
  'home.objects.title': '学習は本物のハードウェアと現場の教材から始まります',
  'home.objects.subtitle':
    'LED、センサー、ゲートウェイ、カメラ、空間デバイス、納品ドキュメント——これらは概念の入口ではなく、授業実験、プロジェクト演習、協業納品で使われる実際の教材です。',
  'home.outcomes.title': '1講座を導入すると手元に届く4つのもの',
  'home.outcomes.subtitle':
    '柴火創客空間は2011年に深圳で設立された、中国で最も早い時期のメイカースペースの一つです。授業で使うハードウェアはすべてSeeed Studioの現行製品で、SKUで購入できます。',
  'home.paths.title': '3つの学習方向',
  'home.paths.subtitle':
    'AIでものづくり、AIプロダクト開発、ソリューション——3つの主軸が異なる目標とモジュール構成に対応。各方向はさらにL1/L2/L3に細分化できます。',
  'home.map.title': 'M0–M6は学習モジュール、L1–L3は実践深度',
  'home.map.subtitle':
    'マトリックスは整理のための枠組みです。実際の納品時には、モジュール、授業深度、ハードウェア教材、プロジェクト成果物に対応します。',
  'home.paths.view': '方向を見る',
  'home.paths.cta1': 'パスガイドを見る',
  'home.paths.cta2': '学習体系全体を見る',
  'home.map.cta': '学習体系全体を見る',
  'level.l1.label': 'L1 · デモ層',
  'level.l1.desc':
    '短期講座、公開授業、「魔法の瞬間」デモに最適：理解でき、説明でき、実演できます。',
  'level.l2.label': 'L2 · コンサルタント層',
  'level.l2.desc':
    '学習ウィーク、ブートキャンプに最適：使用可能なシステムを独自に構成し、体験ワークショップを提供します。',
  'level.l3.label': 'L3 · 設計層',
  'level.l3.desc':
    'ビジネス統合と高度なカスタマイズに最適：API連携、モデル訓練、プライベートデプロイメント。',
  'outcome.hardware.label': '本物のハードウェア',
  'outcome.hardware.desc':
    '各モジュールには再利用可能なハードウェア調達リストがあり、標準キット、自社開発ボード、アクセサリを含みます。',
  'outcome.project.label': 'プロジェクト課題',
  'outcome.project.desc':
    '実践的な手順付きプロジェクト課題で、授業やブートキャンプでそのまま使用できます。',
  'outcome.material.label': '納品教材',
  'outcome.material.desc':
    '成果指向の納品教材で、コースウェア、実験マニュアル、プロジェクトテンプレート、評価基準を含みます。',
  'outcome.reuse.label': '再利用性',
  'outcome.reuse.desc':
    '一度整備すれば繰り返し使えます。学習教材、ハードウェアリスト、プロジェクト課題は複数回の実施で再利用可能です。',
  'object.led.label': 'LEDストリップ',
  'object.led.hint': '最初のLEDを点灯するところから',
  'object.led.module': 'M0',
  'object.sensor.label': 'センサーキット',
  'object.sensor.hint': '温度、湿度、照度、動き',
  'object.sensor.module': 'M0',
  'object.gateway.label': 'ホームゲートウェイ',
  'object.gateway.hint': 'Home Assistant スマート制御',
  'object.gateway.module': 'M1',
  'object.camera.label': 'AIカメラ',
  'object.camera.hint': 'エッジビジョン認識と推論',
  'object.camera.module': 'M4',
  'object.speaker.label': '空間デバイス',
  'object.speaker.hint': 'マイクアレイと音声インタラクション',
  'object.speaker.module': 'M2',
  'object.docs.label': '納品ドキュメント',
  'object.docs.hint': 'コースウェア、実験マニュアル、プロジェクトテンプレート',
  'object.docs.module': 'M5',
  'eco.seeed.name': 'Seeed Studio',
  'eco.seeed.role': 'グローバルハードウェア製品・サプライチェーンプラットフォーム',
  'eco.seeed.desc':
    '世界中のメイカーと企業にハードウェア製品とソリューションを提供し、IoT、エッジコンピューティング、AIなどの分野をカバーします。',
  'eco.seeed.tag': 'ハードウェア製品',
  'eco.chaihuo.name': '柴火創客空間',
  'eco.chaihuo.role': '中国メイカームーブメントの先駆者',
  'eco.chaihuo.desc':
    '2011年設立、中国最古のメイカースペースの一つ。物理スペース、コミュニティイベント、プロジェクトインキュベーションなどのサービスを提供しています。',
  'eco.chaihuo.tag': 'メイカースペース',
  'eco.opc.name': '柴火創客学院',
  'eco.opc.role': '技術エンパワーメントプラットフォーム',
  'eco.opc.desc':
    'エコシステムの技術力を学習可能なコースに変換し、個人や企業が新技術の統合力を習得できるよう支援します。',
  'eco.opc.tag': '技術トレーニング',
  'eco.learnMore': '詳細を見る',
  'eco.title': '柴火創客の三位一体エコシステム',
  'eco.subtitle':
    'ハードウェア製品 · メイカースペース · 技術トレーニング——相互に支え合い、閉ループを形成します。',
  'values.title': 'これがあなたにもたらす価値とは？',
  'value.realHardware.title': '本物のハードウェア',
  'value.realHardware.desc':
    'コースで使用するツールや機器は、Seeed Studioの実際の製品であり、教育用の模造品ではありません。',
  'value.realScenario.title': '本物の現場',
  'value.realScenario.desc':
    '事例は柴火エコシステム内の実際のプロジェクトから来ており、すでに検証済みのソリューションを学びます。',
  'value.realConnection.title': '本物のつながり',
  'value.realConnection.desc':
    '学び終わりが終点ではなく、エコシステムへの入口です——プロジェクト機会とのマッチング、人材プールへの登録、継続的な成長。',
  'stat.2011.label': '柴火創客空間 設立',
  'stat.20.label': '全国認定パートナー機関',
  'stat.4000.label': '累計研修受講者数',
  'mapLegend.note':
    '各モジュールはL1/L2/L3の3つの深度で個別に導入でき、またモジュールを組み合わせて完全なソリューションパッケージにすることもできます。',
  'mapLegend.axisX.label': '横軸 · M0–M6',
  'mapLegend.axisX.desc':
    '学習方向。M0はゼロ基礎の旗艦エントリー（スマートハードウェア入門）、M1–M6は5つの業界方向で、目標に応じて独立して選択可能。',
  'mapLegend.axisY.label': '縦軸 · L1 / L2 / L3',
  'mapLegend.axisY.desc':
    '習熟深度。L1デモ層は理解でき実演可能、L2コンサルタント層は使用可能なシステムを独自に構成、L3設計層はビジネス統合と高度なカスタマイズ。',
  'mapLegend.anchorM0': 'ゼロ基礎の旗艦エントリー',
  'mapLegend.anchorM1M5': '5つの業界方向',
  'faq.q1.q': '最初のメールから開講までどのくらいかかりますか？',
  'faq.q1.a':
    '初回の調整は通常3営業日以内にミーティングを設定します。標準教学キットは迅速に発送・開講可能です。フルデリバリーと講師トレーニングは、要件確認から開講まで通常2〜4週間です。',
  'faq.q2.q': 'コースのハードウェアキットは必ずSeeedから購入する必要がありますか？',
  'faq.q2.a':
    'Bare Hardware KitとStandard Teaching KitはSeeed純正ハードウェアを使用し、コース実験と教材の一貫性を保証します。パートナーは自社のハードウェアプラットフォームで適合させることも可能ですが、実験マニュアルとコース教材は純正ハードウェアを基準としています。',
  'faq.q3.q': 'Train-the-Trainer Kitには具体的に何が含まれていますか？',
  'faq.q3.a':
    '対応モジュールのハードウェアキット、完全なコースリソースパック、およびTrain-the-Trainer講師研修が含まれます。講師研修は通常、柴火の講師が現場で2〜3日間実施し、機関独自の講師を育成します。',
  'faq.q4.q': 'Full-Delivery Kitはオンデマンドでカスタマイズできますか？',
  'faq.q4.a':
    '可能です。Full-Delivery Kitはモジュール、レベル、受講者数、目標シーンに応じてカスタマイズできます。要件に基づいてハードウェア、コース、講師リソースを構成し、エンドツーエンドでデリバリーを委託します。',
  'scenario.university.title': '大学 · 職業院校',
  'scenario.university.subtitle': 'カリキュラム共同開発 / 講師育成',
  'scenario.university.f1': '自社開発コースがある場合はBare Hardware Kitを選択',
  'scenario.university.f2': '標準教育キットは届いたらすぐ開講できる',
  'scenario.university.f3': 'Train-the-Trainer Kitで自社講師を育成',
  'scenario.university.o1': '学生が納品できる水準のシステムを作れる',
  'scenario.university.o2': '授業内容が産業界で使われている技術に追いつく',
  'scenario.university.o3': '自前の講師を持ち、継続して開講できる',
  'scenario.integrator.title': 'インテグレーター · ソリューションプロバイダー',
  'scenario.integrator.subtitle': 'チームのスキル補完 / 新しい機器カテゴリーへの対応',
  'scenario.integrator.f1': 'Bare Hardware Kitで自社ソリューションに柔軟に組み合わせ',
  'scenario.integrator.f2': 'Standard Teaching Kitでチームの能力を補完',
  'scenario.integrator.f3': 'Train-the-Trainer Kitで社内講師を定着',
  'scenario.integrator.o1': '新規案件の納品準備を短縮する',
  'scenario.integrator.o2': 'チームが新しい機器カテゴリーを扱える',
  'scenario.integrator.o3': '外部の技術サポートへの依存を減らす',
  'scenario.enterprise.title': '企業 · 産業部門',
  'scenario.enterprise.subtitle': '社内研修 / カスタムデリバリー',
  'scenario.enterprise.f1': '初回導入はFull-Delivery Kitを選択可能',
  'scenario.enterprise.f2': 'Standard Teaching Kitを社内研修に活用',
  'scenario.enterprise.f3': '柴火の講師が現地で授業を行い、準備から修了まで担当',
  'scenario.enterprise.o1': '中核チームが関連技術を習得する',
  'scenario.enterprise.o2': '新規事業の方向性をまず小規模に検証する',
  'scenario.enterprise.o3': '外部ベンダーへの依存を減らす',
  'form.A.title': 'Bare Hardware Kit',
  'form.A.subtitle': 'Bare Hardware Kit',
  'form.A.f1': 'ハードウェアとアクセサリのみ、コースリソースは含まれません',
  'form.A.f2': '自社開発コースに適合、柔軟な組み合わせが可能',
  'form.A.f3': 'M0〜M7モジュールから自由に選択',
  'form.A.d1': 'Seeed純正ハードウェアとアクセサリ',
  'form.A.d2': 'モジュール選定リスト',
  'form.A.d3': 'ハードウェア保証と供給サポート',
  'form.B.title': 'Standard Teaching Kit',
  'form.B.subtitle': 'Standard Teaching Kit',
  'form.B.f1': 'ハードウェア + 完全なコースリソースパック',
  'form.B.f2': '教材、スライド、実験マニュアル付き',
  'form.B.f3': 'キットが届けばすぐ開講できる',
  'form.B.d1': '対応モジュールのハードウェアキット',
  'form.B.d2': '完全なコースリソースパック',
  'form.B.d3': '継続的なコースコンテンツの更新',
  'form.C.title': 'Full-Delivery Kit',
  'form.C.subtitle': 'Full-Delivery Kit',
  'form.C.f1': 'ハードウェア + コース + 柴火講師が現場で授業',
  'form.C.f2': '初回導入で自前の講師がいないお客様向け',
  'form.C.f3': '準備から修了まで柴火が担当',
  'form.C.d1': 'ハードウェアとコースリソース',
  'form.C.d2': '柴火講師による現場授業',
  'form.C.d3': 'コースデリバリーと修了サポート',
  'form.D.title': 'Train-the-Trainer Kit',
  'form.D.subtitle': 'Train-the-Trainer Kit',
  'form.D.f1': 'ハードウェア + コース + Train-the-Trainer講師研修',
  'form.D.f2': '機関独自の講師を育成',
  'form.D.f3': '持続的な自主開講が可能',
  'form.D.d1': 'ハードウェアとコースリソース',
  'form.D.d2': 'Train-the-Trainer講師研修',
  'form.D.d3': '講師認定と再研修',
  'levelMeta.l1.label': 'L1 · 動かす',
  'levelMeta.l1.desc':
    'チュートリアルに沿ってデモを完成させ、独立して実演・説明できる。入門と公開授業に最適です。',
  'levelMeta.l2.label': 'L2 · 小プロジェクト',
  'levelMeta.l2.desc':
    '一つの完全な小プロジェクトを独立して完成させ、使用可能なシステムを構成できる。学習ウィークとブートキャンプに最適です。',
  'levelMeta.l3.label': 'L3 · 納品可能',
  'levelMeta.l3.desc':
    '納品可能なシステム能力を備え、API連携、モデル訓練、プライベートデプロイメントができる。ビジネス統合と高度なカスタマイズに最適です。',
  'section.ecosystemTitle': '柴火創客の三位一体エコシステム',
  'section.ecosystemSubtitle':
    'ハードウェア製品 · メイカースペース · 技術トレーニング——相互に支え合い、閉ループを形成します。',
  'section.valuesTitle': 'これがあなたにもたらす価値とは？',
  'section.statsTitle': '柴火創客 — データ',
  'section.faqTitle': 'よくある質問',
  'section.faqSubtitle': '協業とコース導入に関するよくある質問',
  'section.scenariosTitle': 'どの種類の機関ですか',
  'section.scenariosSubtitle':
    '機関の種類ごとに、講座の一般的な使い方と目標をまとめました。アルファベットは下の4つの協業形態に対応します。',
  'section.formsTitle': '4つの協業形態',
  'section.formsSubtitle': 'ハードウェアのみの購入から、柴火講師による現地授業まで。',

  'contact.interest.heading': 'ご関心のある方向',
  'contact.interest.o1': 'コース導入',
  'contact.interest.o2': 'パイオニア',
  'contact.interest.o3': '拠点',
  'contact.interest.note':
    'メールの際は関心のある方向をお知らせください。コミュニティマネージャーが担当者へおつなぎします。',
  'course.backToMatrix': '学習マトリックスに戻る',
  'course.coreHardware': 'コアハードウェア',
  'course.keyCapabilities': '修了後にできること',
  'course.whatProblem': 'この講座が解決する課題',
  'course.difficulty': '難易度',
  'course.audienceCount': 'つの対象者グループ',
  'course.typicalScenarios': '典型的な応用シーン',
  'course.days': '日間',
  'course.comingSoon': '近日公開',
  'course.viewDetail': 'コース詳細を見る',
  'course.platform': 'プラットフォーム',
  'course.audienceTitle': 'こんな方におすすめ',
  'course.relatedTracks': 'このモジュールを含むコース構成',
  'course.relatedTracksAria': 'このモジュールを含むコース構成を見る',
  'course.deliverablesTitle': '修了時に得られるもの',
  'course.deliverablesTitleM0': '単なるデモではなく、点灯でき、検収でき、再現できる成果物',
  'course.deliverablesIntro':
    '単なるデモではなく、その場で点灯でき、顧客に検収され、チームで再現できる成果物です。',
  'course.curriculumModules': 'つの教学モジュール',
  'course.curriculumTitle': 'モジュール順序は不変、切り方はあなた次第',
  'course.curriculumSubtitle':
    '形態を選んで、どのモジュールをカバーするか確認してください。完全版は同じコースの3つの組み方——内容、ハードウェア、成果物は完全に同一で、切り方だけが異なります。',
  'course.curriculumModuleOutput': 'モジュール / 成果物',
  'course.curriculumCoverage': 'つの教学モジュールの各排課形態におけるカバー深度',
  'course.curriculumChooseFormat': '排課形態を選択',
  'course.curriculumCoverageLabels.full': '完全',
  'course.curriculumCoverageLabels.part': '簡略',
  'course.curriculumCoverageLabels.none': 'なし',
  'course.curriculumCoverageLabels.plus': '完全版より深い',
  'course.formatsTitle': 'まず層を選び、次に組み方を選ぶ',
  'course.formatsSubtitle':
    '時間と目標がどの層を選ぶかを決めます：学生に進化し続けられる作品を持ち帰らせたいなら完全版、2日間しかなければマラソン版、半日なら2つの体験コースからどちらかを選んでください。',
  'course.capabilitiesTitle': '修了後、学生はどのような人になるか',
  'course.capabilitiesSubtitle':
    'M0は文法を教えません。教えるのは、敷居が消えた後も作品の良し悪しを決めるもの——発想、表現、協働、反復、語りです。',
  'course.toolchainTitle':
    'Codecraftが「やってみよう」を支え、aily-blocklyが「やり遂げる」を支える',
  'course.toolchainSubtitle':
    'M0はArduino IDEでC++を手書きするのではなく、Seeed自社開発のデュアルプラットフォームリレーツールチェーンを採用しています。前半はゼロインストールで5分で効果を実感、後半は作品を自分のPCに移し、持ち帰って進化させ続けられるエンジニアリングにします。',
  'course.toolchainTitle.m1': 'ESPHomeで設備をつなぎ、Node-REDで業務を編む',
  'course.toolchainSubtitle.m1':
    'ESPHome + HA OSでファームウェア書き込みと統合接続を済ませ、Node-REDでシステム横断の業務オーケストレーションへ——単一プラットフォームの連動から業務統合へ。',
  'course.toolchainTitle.m2': 'クラウドのマルチモーダル設定からローカル・オフライン展開へ',
  'course.toolchainSubtitle.m2':
    'SenseCraft AIが素早い設定と検証を担い、MCPブリッジが業務データをLAN内に留め、Jetsonオフラインパイプラインが公網依存を完全に断ちます。',
  'course.toolchainTitle.m3': 'Meshtasticで組網、Node-REDでクラウド接続、PlatformIOでカスタム',
  'course.toolchainSubtitle.m3':
    'Meshtasticでオフグリッド通信を確立し、Node-REDでメッシュデータを公網と監視ダッシュボードへ橋渡し、最後にPlatformIOで端末ファームウェアを自作します。',
  'course.toolchainTitle.m4': 'reCameraのエッジ推論、Frigateの多路集約、YOLOの自前モデル',
  'course.toolchainSubtitle.m4':
    '単点で即時使えるエッジ検出から、多路NVRの集中分析、カスタムモデルの量子化展開まで、ビジョン方案の三段階の深さをカバーします。',
  'course.toolchainTitle.m5': 'SenseCAPでクラウドへ、Modbusで配線、Open APIでオンプレ化',
  'course.toolchainSubtitle.m5':
    '産業用センサーは開箱でクラウドダッシュボードに接続し、RS485バスで複数センサーを並列、Open APIとGrafanaでオンプレのデータループを構築します。',
  'course.toolchainTitle.m6': 'ノーコード遠隔操作から決定論的な工程グラスピングへ',
  'course.toolchainSubtitle.m6':
    'SenseCraft Roboticsが開箱の遠隔操作デモを担い、Python + Pinocchio + Motorbridgeが実機の空間グラスピングを実現、LeRobotとIsaac Simが身体化知能とシミュレーション検証を補完します。',
  'course.kitsTitle': 'センシング · インタラクション · ビジョン、3段階の能力ステップアップ',
  'course.kitsSubtitle':
    '完全版は1人1セットの3点キット、短縮形態は該当する1点のみ配布。サブキットはハードウェアプラットフォーム別に区分され、L1/L2/L3の習熟深度を表すものではありません。',
  'course.hardwareIntroTitle': 'コースで使用するハードウェア',
  'course.hardwareIntroSubtitle':
    'このコースに付属する教材キット一式——開封してすぐ使える本物のハードウェアです。',
  'course.ladderTitleM0':
    '3つのハードウェアプラットフォーム：A センシング · B インタラクション · C ビジョン',
  'course.ladderTitle': '3段階の深さと、それぞれの到達点',
  'course.ladderSubtitleM0':
    'M0はハードウェアプラットフォーム別に階層化（A: Grove · B: Wio Terminal · C: XIAO ESP32S3 Sense）、L1/L2/L3の習熟深度ではありません。',
  'course.matrixTitle': 'M0–M6 × L1/L2/L3 パノラマ',
  'course.matrixSubtitle':
    '横軸はL1〜L3の3レベル、縦軸はM0〜M6の7モジュール；M0はゼロ基礎の旗艦エントリー、M1〜M6は方向別に独立して選択可能。各モジュール内ではL1デモ層 → L2コンサルタント層 → L3設計層へと段階的に進みます。',
  'course.matrixLegend': '凡例',
  'course.explorerTitle': '導入可能な7つの学習モジュール',
  'course.explorerSubtitle':
    '各モジュールには本物のハードウェア、授業実験、能力目標、持ち帰り可能な教材が含まれています。単独導入も、シリーズソリューションとしての組み合わせも可能です。',
  'course.explorer.cardView': '詳細カード',
  'course.explorer.listView': 'コンパクトリスト',
  'course.explorer.switchCard': 'カードビューに切り替え',
  'course.explorer.switchList': 'リストビューに切り替え',
  'course.tracksTitle': '7つのモジュール、3つの方向',
  'course.tracksSubtitle':
    '方向は目的別のグループ分けで、決まった受講順ではありません。M0は未経験者向けの入口で、残りの6講座はそれぞれ単独で開講できます。',
  'moduleCard.coreHardware': 'コアハードウェア',
  'moduleCard.keyCapabilities': 'キー能力',
  'moduleCard.viewDetail': '詳細を見る',
  'moduleCard.illustration': 'イラスト',
  'moduleCard.about': '約',
  'moduleOneLiner.viewDetail': 'コース詳細を見る',
  'courseMatrix.swipeHint': '← 左右にスワイプしてマトリックス全体を表示 →',
  'courseMatrix.srCaption':
    '学習マトリックス：横軸はL1〜L3の3レベル、縦軸はM0〜M6の7モジュール。各マスには該当モジュール・レベルのモジュールタイトル、時間数、成果物を表示。',
  'courseMatrix.srHeader': 'モジュール / レベル',
  'courseMatrix.platformLayers': 'A/B/C ハードウェアプラットフォーム階層',
  'courseMatrix.comingSoon': '近日公開',
  'courseAxis.title': 'モジュールとレベルをどう組み合わせるか',
  'courseAxis.subtitle':
    'M0〜M6は学習の方向を示し、L1/L2/L3は実践の深度を示します。教育機関が導入する際は、モジュールとレベルに応じてプログラムパッケージの範囲を決定できます。',
  'courseAxis.l1': 'デモ層｜理解でき、実演できる',
  'courseAxis.l2': 'コンサルタント層｜使用可能なシステムを独自に構成',
  'courseAxis.l3': '設計層｜ビジネス統合と高度なカスタマイズ',
  'trackFlow.title': '3つの学習方向',
  'trackFlow.subtitle':
    '学習目標に応じてモジュールを組み合わせます。M0はゼロ基礎の旗艦エントリー、M1〜M6は方向別に組み合わせます。',
  'trackFlow.viewCombo': 'このモジュール構成を見る',
  'pathOr.moduleRange': 'モジュール範囲',
  'pathOr.chooseDirection': 'M0〜M6からコース方向を選択',
  'pathOr.determineLevel': 'L1 / L2 / L3を決定',
  'pathOr.confirmHardware': 'ハードウェア、実験、プロジェクト成果物を確認',
  'pathOr.formats': 'Bare Hardware / Standard Teaching / Full-Delivery / Train-the-Trainer',
  'pathOr.heading': 'まずコースパッケージの4つの次元を確認',
  'pathOr.subheading':
    'この4項目が明確になれば、その後の協業コミュニケーションがより具体的になります。',
  'pathDepth.l1Title': 'デモ層 · 理解でき、実演できる',
  'pathDepth.l1Desc':
    '単点体験：3分で「魔法の瞬間」を実現し、理解でき、説明でき、実演できる。営業、意思決定者、一般向け、ゼロ基礎の人に最適です。',
  'pathDepth.l2Title': 'コンサルタント層 · 使用可能なシステムを独自に構成',
  'pathDepth.l2Desc':
    'シーン連携：使用可能なシステムを独自に構成し、体験ワークショップを提供。プリセールスサポート、技術コンサルタント、インテグレーターに最適です。',
  'pathDepth.l3Title': '設計層 · ビジネス統合と高度なカスタマイズ',
  'pathDepth.l3Desc':
    'ビジネス統合：商業クローズドループと高度なカスタマイズ——API連携、モデル訓練、プライベートデプロイメント。アフターサービスエンジニアと高度な技術サポートに最適です。',
  'pathDepth.heading': '各モジュールは3つの実践深度で導入できます',
  'pathDepth.subheading':
    'L1デモ層 / L2コンサルタント層 / L3設計層はコース深度に対応し、ユーザー身分ラベルではありません。',
  'pathDepth.cta': '完全なマトリックスで各モジュールのL1/L2/L3を確認する',
  'pathTracks.title': '3つの学習方向',
  'pathTracks.subtitle': '3つの並列方向で、コース目標に応じた推奨組み合わせを提示します。',
  'pathTracks.locate': '学習体系内での位置付け',
  'pathTracks.consult': '協業相談を申し込む',
  'pathTracks.view': '見る',
  'partner.title': 'エコシステムパートナー',
  'partnership.features': '含まれるもの',
  'partnership.deliverables': '納品内容',
  'partnership.scanForm': 'この形態についてお問い合わせ',
  'partnership.scanFormAria': 'この形態についてお問い合わせ',
  'scenario.features': '一般的な使い方',
  'scenario.outcomes': '主な目標',
  'scenario.applicable': '適用可能な協業形態',
  'heroMap.title': 'M0–M6 × L1/L2/L3 学習マトリックス',
  'heroMap.subtitle':
    '各モジュールはL1/L2/L3の3つの深度で個別に導入でき、またモジュールを組み合わせて完全なソリューションパッケージにすることもできます。',
  'heroMap.viewAll': '学習体系全体を見る',
  'heroMap.viewGuide': 'パスガイドを見る',
  'cta.home.title': 'まずは1講座から。',
  'cta.home.desc':
    'モジュールを1つ選んで試験的に1期開講してみてください。ハードウェアキット、教案、受講者課題は一式そろっています。手応えがあれば、体系全体の導入をご相談ください。メールをいただければ、3営業日以内に協業のご提案をお返しします。',
  'cta.paths.title': '組み合わせを選んだら、学習体系に戻ってモジュールとレベルを確認',
  'cta.paths.desc':
    'パスガイドは範囲を絞り込むためのものです。実際の導入時には、モジュール内容、授業実験、ハードウェアリスト、納品教材、販売形態も確認する必要があります。',
  'cta.courses.title': 'モジュールと深さが決まれば、開講の相談ができます。',
  'cta.courses.desc':
    'モジュール、深さ（L1 / L2 / L3）、クラス規模をお知らせください。お見積りはクラス形態と規模に応じて行い、メール受領後3営業日以内にご提案をお送りします。',
  'cta.about.title': '柴火の講座を学校やチームに導入しませんか？',
  'cta.about.desc':
    '対象者と目標をメールでお知らせください。3営業日以内に協業のご提案を返信します。',
  'cta.apply': '協業相談を申し込む',
  'cta.viewCourses': '学習体系を見る',
  'cta.viewPaths': 'パスガイドを見る',
  'cta.aboutOrg': '学院の背景を知る',
  'home.matrix.note':
    '各セルの数字はそのレベルの日数（d = 日）です。モジュール名を選ぶと、使用機器・シラバス・検収基準を確認できます。',
  'course.overseasOnly': '中国本土以外のみ提供',
  'outcome.lab.label': '教室でその場で動かせる実験',
  'outcome.lab.desc':
    'どのモジュールも実機ハードウェアを中心に構成され、授業内で組み立て・結合調整・デモまで行います。',
  'outcome.kit.label': 'ハードウェアキットと講座資料',
  'outcome.kit.desc':
    'Seeed製ハードウェアに加え、教材、実験マニュアル、講師用資料、受講者課題が付きます。',
  'outcome.docs.label': '保管できるプロジェクト資料',
  'outcome.docs.desc':
    '構成図、設定ファイル、運用・検収ドキュメント。各モジュールページに項目ごとに記載しています。',
  'outcome.forms.label': '4つの購入形態',
  'outcome.forms.desc':
    'ハードウェアのみ、標準教育キット、柴火講師による現地授業、または自社講師の育成から。',
  'course.day': '日間',
  'cta.module.title': '{code}を時間割に組み込む',
  'cta.module.desc':
    'お見積りはクラス形態と規模に応じます。受講人数と希望する深さをメールでお知らせいただければ、3営業日以内にご提案をお送りします。',
  'history.founded.when': '2011',
  'history.founded.title': '柴火創客空間が深圳で設立',
  'history.founded.desc':
    '中国で最も早い時期のメイカースペースの一つです。学院は柴火創客空間に属しており、空間の歴史がそのまま学院の歴史です。',
  'history.seeed.when': '機器',
  'history.seeed.title': '授業で使うのはSeeed Studioの現行製品',
  'history.seeed.desc':
    '開発ボード、センサー、エッジコンピューティング機器はすべてSKUで購入できます。教育専用の模型ではありません。',
  'history.academy.when': '講座',
  'history.academy.title': '7つのモジュール、それぞれ3段階の深さ',
  'history.academy.desc':
    'M0は未経験者向けの入門講座です。M1〜M6はそれぞれ現場の課題に対応します：ビルのエネルギー使用、音声・視覚インタラクション、オフグリッド通信、映像によるアラート、環境モニタリング、ロボットアームによる把持。',
  'history.sites.when': '拠点',
  'history.sites.title': '深圳と成都にキャンパス',
  'history.sites.desc':
    '深圳は南山区の万科雲城設計コミュニティ、成都は青羊区獅馬路92号にあります。',
  'person.name': '馮磊',
  'person.role': '柴火創客学院 総括コーディネーター',
  'person.quote':
    '一つの講座の最良の行き先は、完璧に実施されることではなく、ある教師によって見分けがつかないほどに作り変えられ、その人にしか教えられない講座になることです。',
  'partnership.suitable': '対象',
  'faq.q5.q': '1つのモジュールだけ、または1つのレベルだけ導入できますか？',
  'faq.q5.a':
    'できます。M0〜M6はそれぞれ単独で開講でき、L1 / L2 / L3のいずれか一つだけの受講も可能です。目的に合わせて最小限の組み合わせをご提案します。',
  'faq.q6.q': '海外との協業は可能ですか？',
  'faq.q6.a':
    '可能です。M3（メッシュネットワーク）は中国本土以外でのみ提供しています。その他のモジュールの海外開講（授業言語や講師派遣）についてはメールでご相談ください。',
};

const es: Record<string, string> = {
  'track.make-with-ai.name': 'Crear con IA',
  'track.make-with-ai.goal':
    'Sin saber programar: la IA escribe el código y usted construye hardware que funciona',
  'track.make-with-ai.desc':
    'M0 recorre tres plataformas de hardware en un solo curso: Grove para la percepción, Wio Terminal para la interacción y XIAO ESP32S3 Sense para la clasificación de imágenes. La IA escribe el código; el alumnado se encarga de expresar bien el requisito y de dejar el proyecto funcionando.',
  'track.build-ai-products.name': 'Construir productos con IA',
  'track.build-ai-products.goal': 'Construir terminales y dispositivos con capacidades de IA',
  'track.build-ai-products.desc':
    'M2 hace que un terminal entienda la voz y vea; M4, que las cámaras detecten objetivos y generen alertas; M6, que un brazo robótico agarre según lo que ve. Los tres módulos cubren interacción por voz, detección visual y control de robots.',
  'track.solutions.name': 'Soluciones',
  'track.solutions.goal': 'Integrar varios dispositivos y redes en una misma instalación',
  'track.solutions.desc':
    'M1 conecta dispositivos de distintas marcas a una plataforma local; M3 monta una red donde no hay conexión pública; M5 trae de vuelta los datos de sensores en campo. Indicado para equipos de integración en proyectos de edificios, emergencias, agricultura y medio ambiente.',
  'home.objects.title': 'El aprendizaje empieza con hardware real y materiales físicos',
  'home.objects.subtitle':
    'LEDs, sensores, gateways, cámaras, dispositivos espaciales, documentación de entrega — no son puertas de entrada conceptuales, sino materiales reales para experimentos en clase, entrenamiento de proyectos y entregas colaborativas.',
  'home.outcomes.title': 'Lo que recibe al incorporar un curso',
  'home.outcomes.subtitle':
    'Chaihuo Makerspace se fundó en Shenzhen en 2011 y es uno de los primeros makerspaces de China. Todo el hardware que se usa en clase pertenece al catálogo actual de Seeed Studio y se puede pedir por SKU.',
  'home.paths.title': 'Tres direcciones de aprendizaje',
  'home.paths.subtitle':
    'Crear con IA, Construir productos con IA, Soluciones — tres líneas principales que corresponden a diferentes objetivos y combinaciones de módulos; cada dirección puede profundizarse hasta L1 / L2 / L3.',
  'home.map.title':
    'M0–M6 son los módulos de aprendizaje, L1–L3 es la profundidad de formación práctica',
  'home.map.subtitle':
    'La matriz es solo una forma de organización. En la entrega real, corresponde a módulos, profundidad horaria, materiales de hardware y resultados de proyecto.',
  'home.paths.view': 'Ver direcciones',
  'home.paths.cta1': 'Ver rutas de aprendizaje',
  'home.paths.cta2': 'Ver sistema curricular completo',
  'home.map.cta': 'Ver sistema curricular completo',
  'level.l1.label': 'L1 · Nivel demostración',
  'level.l1.desc':
    'Adecuado para cursos cortos, clases abiertas y demostraciones "momento mágico": comprensible, explicable y demostrable.',
  'level.l2.label': 'L2 · Nivel consultor',
  'level.l2.desc':
    'Adecuado para semanas de aprendizaje y bootcamps: configurar sistemas funcionales de forma independiente y ofrecer talleres experienciales.',
  'level.l3.label': 'L3 · Nivel diseño',
  'level.l3.desc':
    'Adecuado para integración empresarial y personalización profunda: integración de APIs, entrenamiento de modelos, despliegue privado.',
  'outcome.hardware.label': 'Hardware real',
  'outcome.hardware.desc':
    'Cada módulo incluye una lista de compra de hardware reutilizable, con kits originales, placas propias y accesorios.',
  'outcome.project.label': 'Tareas de proyecto',
  'outcome.project.desc':
    'Tareas de proyecto con pasos prácticos, utilizables directamente en clase o en bootcamps.',
  'outcome.material.label': 'Materiales de entrega',
  'outcome.material.desc':
    'Materiales de entrega orientados a resultados, incluyendo presentaciones, manuales de laboratorio, plantillas de proyecto y criterios de evaluación.',
  'outcome.reuse.label': 'Reutilización',
  'outcome.reuse.desc':
    'Prepare una vez, use repetidamente. Los materiales de aprendizaje, las listas de hardware y las tareas de proyecto son reutilizables en múltiples ediciones.',
  'object.led.label': 'Tira LED',
  'object.led.hint': 'Empiece encendiendo el primer LED',
  'object.led.module': 'M0',
  'object.sensor.label': 'Kit de sensores',
  'object.sensor.hint': 'Temperatura, humedad, luz, movimiento',
  'object.sensor.module': 'M0',
  'object.gateway.label': 'Gateway doméstico',
  'object.gateway.hint': 'Control inteligente con Home Assistant',
  'object.gateway.module': 'M1',
  'object.camera.label': 'Cámara AI',
  'object.camera.hint': 'Reconocimiento visual e inferencia en el borde',
  'object.camera.module': 'M4',
  'object.speaker.label': 'Dispositivo espacial',
  'object.speaker.hint': 'Array de micrófonos e interacción por voz',
  'object.speaker.module': 'M2',
  'object.docs.label': 'Documentación de entrega',
  'object.docs.hint': 'Presentaciones, manuales de laboratorio y plantillas de proyecto',
  'object.docs.module': 'M5',
  'eco.seeed.name': 'Seeed Studio',
  'eco.seeed.role': 'Plataforma global de productos hardware y cadena de suministro',
  'eco.seeed.desc':
    'Provee productos y soluciones de hardware para makers y empresas globales, cubriendo IoT, edge computing, IA y otros campos.',
  'eco.seeed.tag': 'Productos hardware',
  'eco.chaihuo.name': 'Chaihuo Makerspace',
  'eco.chaihuo.role': 'Pionero del movimiento maker en China',
  'eco.chaihuo.desc':
    'Fundado en 2011, uno de los primeros makerspaces de China. Ofrece espacio físico, actividades comunitarias e incubación de proyectos.',
  'eco.chaihuo.tag': 'Makerspace',
  'eco.opc.name': 'Academia Chaihuo Maker',
  'eco.opc.role': 'Plataforma de capacitación tecnológica',
  'eco.opc.desc':
    'Transforma las capacidades tecnológicas del ecosistema en cursos accesibles, ayudando a personas y empresas a dominar la integración de nuevas tecnologías.',
  'eco.opc.tag': 'Capacitación técnica',
  'eco.learnMore': 'Más información',
  'eco.title': 'Ecosistema trinitario de Chaihuo Maker',
  'eco.subtitle':
    'Productos hardware · Makerspace · Capacitación técnica — se apoyan mutuamente, formando un ciclo cerrado.',
  'values.title': '¿Qué valor le aporta esto?',
  'value.realHardware.title': 'Hardware real',
  'value.realHardware.desc':
    'Las herramientas y equipos del curso son productos reales de Seeed Studio, no material didáctico simulado.',
  'value.realScenario.title': 'Escenarios reales',
  'value.realScenario.desc':
    'Los casos provienen de proyectos reales del ecosistema Chaihuo; lo que se aprende son soluciones ya validadas.',
  'value.realConnection.title': 'Conexión real',
  'value.realConnection.desc':
    'Terminar el curso no es el final, sino el inicio de su entrada al ecosistema — acceso a oportunidades de proyecto, inclusión en el banco de talento y crecimiento continuo.',
  'stat.2011.label': 'Fundación de Chaihuo Makerspace',
  'stat.20.label': 'Instituciones colaboradoras autorizadas a nivel nacional',
  'stat.4000.label': 'Personas capacitadas acumuladas',
  'mapLegend.note':
    'Cada módulo puede introducirse individualmente en las tres profundidades L1/L2/L3, o combinarse con otros módulos para formar paquetes de solución completos.',
  'mapLegend.axisX.label': 'Eje Horizontal · M0–M6',
  'mapLegend.axisX.desc':
    'Dirección de aprendizaje. M0 es la entrada principal desde cero (fundamentos de hardware inteligente), M1–M6 son cinco direcciones sectoriales, seleccionables independientemente por objetivo.',
  'mapLegend.axisY.label': 'Eje Vertical · L1 / L2 / L3',
  'mapLegend.axisY.desc':
    'Profundidad de dominio. L1 Nivel Demostración — comprensible y demostrable, L2 Nivel Consultor — configurar sistemas funcionales de forma independiente, L3 Nivel Diseño — integración empresarial y personalización profunda.',
  'mapLegend.anchorM0': 'Entrada Principal desde Cero',
  'mapLegend.anchorM1M5': 'Cinco Direcciones Sectoriales',
  'faq.q1.q': '¿Cuánto se tarda desde el primer correo hasta la primera clase?',
  'faq.q1.a':
    'La primera reunión de alineación suele programarse en un plazo de 3 días hábiles; el kit de enseñanza estándar puede enviarse rápidamente para comenzar las clases; la entrega integral y la capacitación de instructores, desde la confirmación de requisitos hasta el inicio del curso, generalmente toma de 2 a 4 semanas.',
  'faq.q2.q': '¿Es obligatorio adquirir los kits de hardware de Seeed?',
  'faq.q2.a':
    'El kit de hardware básico y el kit de enseñanza estándar utilizan hardware original de Seeed, garantizando que los experimentos del curso coincidan con los materiales didácticos. Los socios también pueden adaptar los cursos a sus propias plataformas de hardware, pero los manuales de laboratorio y los materiales del curso se basan en el hardware original.',
  'faq.q3.q': '¿Qué incluye exactamente el kit de capacitación de instructores?',
  'faq.q3.a':
    'Incluye el kit de hardware del módulo correspondiente, el paquete completo de recursos del curso y la capacitación Train-the-Trainer. La capacitación suele ser impartida presencialmente por instructores de Chaihuo durante 2 a 3 días, formando a los instructores propios de la institución.',
  'faq.q4.q': '¿Se puede personalizar el kit de entrega integral?',
  'faq.q4.a':
    'Sí. El kit de entrega integral puede personalizarse según módulo, nivel, número de estudiantes y escenario objetivo. Configuramos hardware, cursos y recursos de instructores según sus necesidades, gestionando la entrega de extremo a extremo.',
  'scenario.university.title': 'Universidades · Formación profesional',
  'scenario.university.subtitle': 'Cursos codesarrollados / Formación docente',
  'scenario.university.f1':
    'Si tiene capacidad de desarrollo curricular propio, elija el kit de hardware básico',
  'scenario.university.f2': 'Kit didáctico estándar: se puede empezar en cuanto llega',
  'scenario.university.f3': 'El kit de capacitación de instructores forma a sus propios docentes',
  'scenario.university.o1': 'El alumnado es capaz de construir sistemas entregables',
  'scenario.university.o2': 'Los contenidos siguen el ritmo de la tecnología que usa la industria',
  'scenario.university.o3': 'Instructores propios para impartir cursos de forma continuada',
  'scenario.integrator.title': 'Integradores · Proveedores de soluciones',
  'scenario.integrator.subtitle': 'Completar competencias del equipo / Asumir nuevas categorías',
  'scenario.integrator.f1':
    'El kit de hardware básico se combina flexiblemente con sus propias soluciones',
  'scenario.integrator.f2': 'El kit de enseñanza estándar completa las capacidades del equipo',
  'scenario.integrator.f3':
    'El kit de capacitación de instructores consolida instructores internos',
  'scenario.integrator.o1': 'Menos tiempo de preparación ante un proyecto nuevo',
  'scenario.integrator.o2': 'El equipo puede asumir nuevas categorías de dispositivos',
  'scenario.integrator.o3': 'Menor dependencia del soporte técnico externo',
  'scenario.enterprise.title': 'Empresas · Sector industrial',
  'scenario.enterprise.subtitle': 'Capacitación interna / Entrega personalizada',
  'scenario.enterprise.f1': 'Para la primera adquisición, opte por el kit de entrega integral',
  'scenario.enterprise.f2': 'El kit de enseñanza estándar se utiliza para capacitación interna',
  'scenario.enterprise.f3':
    'Un instructor de Chaihuo imparte en sus instalaciones y se ocupa de todo, de los materiales al cierre',
  'scenario.enterprise.o1': 'El equipo principal domina la tecnología',
  'scenario.enterprise.o2': 'Las nuevas líneas de negocio se validan primero a pequeña escala',
  'scenario.enterprise.o3': 'Menor dependencia de proveedores externos',
  'form.A.title': 'Kit de hardware básico',
  'form.A.subtitle': 'Bare Hardware Kit',
  'form.A.f1': 'Solo hardware y accesorios, sin recursos curriculares',
  'form.A.f2': 'Adaptable a cursos propios, combinación flexible',
  'form.A.f3': 'Selección libre por módulos M0–M6',
  'form.A.d1': 'Hardware y accesorios originales de Seeed',
  'form.A.d2': 'Lista de selección de módulos',
  'form.A.d3': 'Garantía de hardware y soporte de suministro',
  'form.B.title': 'Kit de enseñanza estándar',
  'form.B.subtitle': 'Standard Teaching Kit',
  'form.B.f1': 'Hardware + paquete completo de recursos curriculares',
  'form.B.f2': 'Incluye libro de texto, presentaciones y manual de prácticas',
  'form.B.f3': 'Se puede empezar en cuanto llega el kit',
  'form.B.d1': 'Kit de hardware del módulo correspondiente',
  'form.B.d2': 'Paquete completo de recursos curriculares',
  'form.B.d3': 'Actualización continua de contenidos del curso',
  'form.C.title': 'Kit de entrega integral',
  'form.C.subtitle': 'Full-Delivery Kit',
  'form.C.f1': 'Hardware + cursos + instructores de Chaihuo presenciales',
  'form.C.f2': 'Para quien compra por primera vez y no tiene instructores',
  'form.C.f3': 'Chaihuo se ocupa de todo, de los materiales al cierre',
  'form.C.d1': 'Hardware y recursos curriculares',
  'form.C.d2': 'Clases presenciales con instructores de Chaihuo',
  'form.C.d3': 'Entrega del curso y soporte de certificación',
  'form.D.title': 'Kit de capacitación de instructores',
  'form.D.subtitle': 'Train-the-Trainer Kit',
  'form.D.f1': 'Hardware + cursos + capacitación Train-the-Trainer',
  'form.D.f2': 'Forma a los instructores propios de la institución',
  'form.D.f3': 'Capacidad sostenible para impartir cursos de forma autónoma',
  'form.D.d1': 'Hardware y recursos curriculares',
  'form.D.d2': 'Capacitación de instructores Train-the-Trainer',
  'form.D.d3': 'Certificación de instructores y recertificación',
  'levelMeta.l1.label': 'L1 · Ejecutar',
  'levelMeta.l1.desc':
    'Complete una demo siguiendo el tutorial, capaz de demostrar y explicar de forma independiente. Adecuado para iniciación y clases abiertas.',
  'levelMeta.l2.label': 'L2 · Mini-proyecto',
  'levelMeta.l2.desc':
    'Complete un mini-proyecto completo de forma independiente, capaz de configurar un sistema funcional. Adecuado para semanas de aprendizaje y bootcamps.',
  'levelMeta.l3.label': 'L3 · Entregable',
  'levelMeta.l3.desc':
    'Capacidad de sistema entregable, capaz de integrar APIs, entrenar modelos y realizar despliegues privados. Adecuado para integración empresarial y personalización profunda.',
  'section.ecosystemTitle': 'Ecosistema trinitario de Chaihuo Maker',
  'section.ecosystemSubtitle':
    'Productos hardware · Makerspace · Capacitación técnica — se apoyan mutuamente, formando un ciclo cerrado.',
  'section.valuesTitle': '¿Qué valor le aporta esto?',
  'section.statsTitle': 'Chaihuo Maker — Datos',
  'section.faqTitle': 'Preguntas frecuentes',
  'section.faqSubtitle': 'Preguntas frecuentes sobre colaboración e introducción de cursos',
  'section.scenariosTitle': '¿Qué tipo de organización es?',
  'section.scenariosSubtitle':
    'Cómo suele usar los cursos cada tipo de organización y qué busca. Las letras remiten a las cuatro modalidades de abajo.',
  'section.formsTitle': 'Cuatro formas de colaborar',
  'section.formsSubtitle':
    'Desde comprar solo el hardware hasta que un instructor de Chaihuo imparta en sus instalaciones.',

  'contact.interest.heading': 'Áreas de interés',
  'contact.interest.o1': 'Introducción de cursos',
  'contact.interest.o2': 'Pionero',
  'contact.interest.o3': 'Base',
  'contact.interest.note':
    'Indica tu área de interés en tu correo y el community manager te pondrá en contacto con la persona adecuada.',
  'course.backToMatrix': 'Volver a la matriz de aprendizaje',
  'course.coreHardware': 'Hardware principal',
  'course.keyCapabilities': 'Lo que sabrán hacer al terminar',
  'course.whatProblem': 'El problema que aborda este curso',
  'course.difficulty': 'Dificultad',
  'course.audienceCount': 'tipos de público objetivo',
  'course.typicalScenarios': 'Escenarios típicos de aplicación',
  'course.days': 'días',
  'course.comingSoon': 'Próximamente',
  'course.viewDetail': 'Ver detalles del curso',
  'course.platform': 'Plataforma',
  'course.audienceTitle': 'A quién va dirigido',
  'course.relatedTracks': 'Combinaciones curriculares que incluyen este módulo',
  'course.relatedTracksAria': 'Ver combinaciones curriculares que incluyen este módulo',
  'course.deliverablesTitle': 'Qué se lleva al terminar',
  'course.deliverablesTitleM0':
    'No son demos sueltas, son entregables que se pueden encender, validar y replicar',
  'course.deliverablesIntro':
    'No son demos sueltas, sino entregables que pueden encenderse en el momento, ser validados por el cliente y replicados por el equipo.',
  'course.curriculumModules': 'módulos de enseñanza',
  'course.curriculumTitle':
    'El orden de los módulos es fijo, la forma de impartirlos la elige usted',
  'course.curriculumSubtitle':
    'Seleccione una modalidad y vea qué módulos cubre. La versión completa es el mismo curso con tres formas de impartirlo — el contenido, el hardware y los entregables son exactamente iguales, solo cambia la segmentación.',
  'course.curriculumModuleOutput': 'Módulo / Entregable',
  'course.curriculumCoverage':
    'módulos de enseñanza y su profundidad de cobertura en cada modalidad',
  'course.curriculumChooseFormat': 'Seleccione la modalidad de impartición',
  'course.curriculumCoverageLabels.full': 'Completo',
  'course.curriculumCoverageLabels.part': 'Reducido',
  'course.curriculumCoverageLabels.none': 'No incluido',
  'course.curriculumCoverageLabels.plus': 'Más profundo que la versión completa',
  'course.formatsTitle': 'Primero elija el nivel, luego la modalidad',
  'course.formatsSubtitle':
    'El tiempo y el objetivo determinan qué nivel elegir: si quiere que los estudiantes se lleven un proyecto que puedan seguir desarrollando, elija la versión completa; si solo tiene dos días, elija la versión maratón; si solo tiene medio día, elija uno de los dos talleres experienciales.',
  'course.capabilitiesTitle':
    'Al terminar, ¿en qué tipo de profesional se convierte el estudiante?',
  'course.capabilitiesSubtitle':
    'M0 no enseña sintaxis. Enseña lo que determina la calidad de un proyecto cuando la barrera de entrada desaparece: ideas, expresión, colaboración, iteración y narración.',
  'course.toolchainTitle': 'Codecraft le ayuda a "atreverse", aily-blockly le ayuda a "terminar"',
  'course.toolchainSubtitle':
    'M0 no utiliza Arduino IDE para escribir C++ manualmente, sino que emplea una cadena de herramientas de doble plataforma desarrollada por Seeed. La primera mitad: cero instalación, resultados en 5 minutos; la segunda mitad: traslade el proyecto a su propio ordenador, convirtiéndolo en un proyecto portable y evolutivo.',
  'course.toolchainTitle.m1': 'ESPHome conecta los dispositivos, Node-RED teje el negocio',
  'course.toolchainSubtitle.m1':
    'Primero ESPHome + HA OS para grabar firmware y unificar el acceso; después Node-RED para orquestar procesos entre sistemas: de la automatización de una sola plataforma a la integración de negocio.',
  'course.toolchainTitle.m2':
    'De la configuración multimodal en la nube al despliegue local sin conexión',
  'course.toolchainSubtitle.m2':
    'SenseCraft AI se encarga de la configuración y validación rápidas, el puente MCP mantiene los datos de negocio en la LAN y el pipeline offline de Jetson elimina por completo la dependencia de internet.',
  'course.toolchainTitle.m3':
    'Meshtastic crea la malla, Node-RED la sube a la nube, PlatformIO personaliza',
  'course.toolchainSubtitle.m3':
    'Meshtastic resuelve la comunicación fuera de red, Node-RED conecta los datos de malla a la red pública y a los paneles de monitoreo, y PlatformIO permite adaptar el firmware del terminal.',
  'course.toolchainTitle.m4':
    'Inferencia en el borde con reCamera, agregación multicanal con Frigate, modelos YOLO propios',
  'course.toolchainSubtitle.m4':
    'De la detección en el borde plug-and-play en un punto, al análisis centralizado multicanal con NVR y al despliegue cuantizado de modelos propios: tres niveles de profundidad de una solución de visión.',
  'course.toolchainTitle.m5': 'SenseCAP a la nube, cableado Modbus, Open API on-premise',
  'course.toolchainSubtitle.m5':
    'Los sensores industriales se conectan listos para usar a paneles en la nube, el bus RS485 pone en paralelo varios sensores y la Open API con Grafana construye un circuito de datos on-premise.',
  'course.toolchainTitle.m6':
    'De la teleoperación sin código a la captura de ingeniería determinista',
  'course.toolchainSubtitle.m6':
    'SenseCraft Robotics ofrece demostraciones de teleoperación listas para usar, Python + Pinocchio + Motorbridge logra la captura espacial en máquina real, y LeRobot con Isaac Sim cubre la inteligencia corporizada y la validación por simulación.',
  'course.kitsTitle':
    'Percepción · Interacción · Visión, progresión de capacidades en tres niveles',
  'course.kitsSubtitle':
    'En la versión completa, cada persona recibe un juego de tres kits; en las modalidades cortas, solo se entrega el kit correspondiente. Los sub-kits se dividen por plataforma de hardware, no representan la profundidad de dominio L1/L2/L3.',
  'course.hardwareIntroTitle': 'Hardware del curso',
  'course.hardwareIntroSubtitle':
    'La lista de material didáctico de este curso: hardware real, listo para usar nada más abrirlo.',
  'course.ladderTitleM0': 'Tres plataformas de hardware: A Percepción · B Interacción · C Visión',
  'course.ladderTitle': 'Tres niveles y hasta dónde llega cada uno',
  'course.ladderSubtitleM0':
    'M0 se estratifica por plataforma de hardware (A: Grove · B: Wio Terminal · C: XIAO ESP32S3 Sense), no por profundidad de dominio L1/L2/L3.',
  'course.matrixTitle': 'Panorama completo M0–M6 × L1/L2/L3',
  'course.matrixSubtitle':
    'Eje horizontal = L1–L3 tres niveles, eje vertical = M0–M6 siete módulos; M0 es la entrada de nivel cero, M1–M6 seleccionables independientemente por dirección; dentro de cada módulo se progresa de L1 Demostración → L2 Consultor → L3 Diseño.',
  'course.matrixLegend': 'Leyenda',
  'course.explorerTitle': 'Siete módulos de aprendizaje disponibles',
  'course.explorerSubtitle':
    'Cada módulo incluye hardware real, experimentos en clase, objetivos de capacidad y materiales que el estudiante se lleva. Pueden introducirse individualmente o combinarse en soluciones seriadas.',
  'course.explorer.cardView': 'Vista de tarjetas',
  'course.explorer.listView': 'Vista de lista',
  'course.explorer.switchCard': 'Cambiar a vista de tarjetas',
  'course.explorer.switchList': 'Cambiar a vista de lista',
  'course.tracksTitle': 'Siete módulos en tres orientaciones',
  'course.tracksSubtitle':
    'Las orientaciones agrupan los módulos por objetivo, no por un orden fijo. M0 es la entrada para principiantes; los otros seis se pueden impartir por separado.',
  'moduleCard.coreHardware': 'Hardware principal',
  'moduleCard.keyCapabilities': 'Capacidades clave',
  'moduleCard.viewDetail': 'Ver detalles',
  'moduleCard.illustration': 'Ilustración',
  'moduleCard.about': 'Aprox.',
  'moduleOneLiner.viewDetail': 'Ver detalles del curso',
  'courseMatrix.swipeHint': '← Deslice para ver la matriz completa →',
  'courseMatrix.srCaption':
    'Matriz de aprendizaje: eje horizontal con los tres niveles L1–L3, eje vertical con los siete módulos M0–M6; cada celda muestra el título del módulo, la duración y los entregables para ese módulo en ese nivel.',
  'courseMatrix.srHeader': 'Módulo / Nivel',
  'courseMatrix.platformLayers': 'Estratificación por plataforma de hardware A/B/C',
  'courseMatrix.comingSoon': 'Próximamente',
  'courseAxis.title': 'Cómo se combinan módulos y niveles',
  'courseAxis.subtitle':
    'M0–M6 indican la dirección de aprendizaje, L1 / L2 / L3 indican la profundidad de práctica. Al introducir los módulos, las instituciones pueden definir el alcance del paquete de programas por módulo y nivel.',
  'courseAxis.l1': 'Nivel demostración | Comprensible y demostrable',
  'courseAxis.l2': 'Nivel consultor | Configuración independiente de sistemas funcionales',
  'courseAxis.l3': 'Nivel diseño | Integración empresarial y personalización profunda',
  'trackFlow.title': 'Tres direcciones de aprendizaje',
  'trackFlow.subtitle':
    'Combine módulos según el objetivo de aprendizaje; M0 es la puerta de entrada principal desde cero, M1–M6 se combinan por dirección.',
  'trackFlow.viewCombo': 'Ver esta combinación de módulos',
  'pathOr.moduleRange': 'Rango de módulos',
  'pathOr.chooseDirection': 'Seleccione la dirección curricular entre M0–M6',
  'pathOr.determineLevel': 'Determine L1 / L2 / L3',
  'pathOr.confirmHardware': 'Confirme hardware, experimentos y resultados de proyecto',
  'pathOr.formats':
    'Hardware básico / Enseñanza estándar / Entrega integral / Capacitación de instructores',
  'pathOr.heading': 'Primero confirme las cuatro dimensiones del paquete curricular',
  'pathOr.subheading':
    'Una vez claros estos cuatro aspectos, la comunicación posterior sobre la colaboración será más concreta.',
  'pathDepth.l1Title': 'Nivel demostración · Comprensible y demostrable',
  'pathDepth.l1Desc':
    'Experiencia puntual: logre un "momento mágico" en 3 minutos, comprensible, explicable y demostrable. Adecuado para ventas, tomadores de decisiones, público general y personas sin experiencia previa.',
  'pathDepth.l2Title': 'Nivel consultor · Configuración independiente de sistemas funcionales',
  'pathDepth.l2Desc':
    'Integración de escenarios: configure un sistema funcional de forma independiente y ofrezca talleres experienciales. Adecuado para soporte de preventa, consultores técnicos e integradores.',
  'pathDepth.l3Title': 'Nivel diseño · Integración empresarial y personalización profunda',
  'pathDepth.l3Desc':
    'Integración empresarial: cierre comercial y personalización profunda — integración de APIs, entrenamiento de modelos, despliegue privado. Adecuado para ingenieros de posventa y soporte técnico avanzado.',
  'pathDepth.heading': 'Cada módulo puede introducirse en tres profundidades de práctica',
  'pathDepth.subheading':
    'L1 Nivel demostración / L2 Nivel consultor / L3 Nivel diseño corresponden a la profundidad del curso, no a etiquetas de identidad del usuario.',
  'pathDepth.cta': 'Ver L1 / L2 / L3 de cada módulo en la matriz completa',
  'pathTracks.title': 'Tres direcciones de aprendizaje',
  'pathTracks.subtitle':
    'Tres direcciones paralelas, con combinaciones sugeridas según el objetivo del curso.',
  'pathTracks.locate': 'Ubicar en el sistema curricular',
  'pathTracks.consult': 'Solicitar consultoría de colaboración',
  'pathTracks.view': 'Ver',
  'partner.title': 'Socios del ecosistema',
  'partnership.features': 'Qué incluye',
  'partnership.deliverables': 'Contenido de la entrega',
  'partnership.scanForm': 'Consultar esta modalidad',
  'partnership.scanFormAria': 'Consultar la modalidad',
  'scenario.features': 'Uso habitual',
  'scenario.outcomes': 'Objetivos habituales',
  'scenario.applicable': 'Modalidades de colaboración aplicables',
  'heroMap.title': 'Matriz de aprendizaje M0–M6 × L1/L2/L3',
  'heroMap.subtitle':
    'Cada módulo puede introducirse individualmente en las tres profundidades L1/L2/L3, o combinarse con otros módulos para formar paquetes de solución completos.',
  'heroMap.viewAll': 'Ver sistema curricular completo',
  'heroMap.viewGuide': 'Ver rutas de aprendizaje',
  'cta.home.title': 'Empiece con un curso.',
  'cta.home.desc':
    'Elija un módulo y pruebe con un primer grupo: el kit de hardware, los planes de clase y las tareas del alumnado están incluidos. Si funciona, hablamos de incorporar el programa completo. Escríbanos y le responderemos con una propuesta en 3 días hábiles.',
  'cta.paths.title':
    'Una vez seleccionada la combinación, vuelva al sistema curricular para confirmar módulos y niveles',
  'cta.paths.desc':
    'La guía de rutas solo le ayuda a acotar opciones. Para la implementación real, deberá revisar el contenido de los módulos, los experimentos en clase, las listas de hardware, los materiales de entrega y las modalidades de venta.',
  'cta.courses.title': 'Con el módulo y el nivel elegidos, podemos hablar de cómo impartirlo.',
  'cta.courses.desc':
    'Indíquenos el módulo, el nivel (L1 / L2 / L3) y el tamaño del grupo. El presupuesto depende del formato y del tamaño de la clase; enviamos una propuesta en 3 días hábiles tras su correo.',
  'cta.about.title': '¿Quiere llevar los cursos de Chaihuo a su centro o a su equipo?',
  'cta.about.desc':
    'Escríbanos indicando a quién va dirigido y qué objetivo persigue. Respondemos con una propuesta de colaboración en 3 días hábiles.',
  'cta.apply': 'Solicitar consultoría de colaboración',
  'cta.viewCourses': 'Ver sistema curricular',
  'cta.viewPaths': 'Ver rutas de aprendizaje',
  'cta.aboutOrg': 'Conocer la academia',
  'home.matrix.note':
    'El número de cada celda indica los días de curso de ese nivel. Seleccione un módulo para ver su hardware, temario y criterios de aceptación.',
  'course.overseasOnly': 'Solo fuera de China continental',
  'outcome.lab.label': 'Prácticas que funcionan en el aula',
  'outcome.lab.desc':
    'Cada módulo gira en torno a hardware real: se monta, se ajusta y se demuestra en clase.',
  'outcome.kit.label': 'Kit de hardware y materiales del curso',
  'outcome.kit.desc':
    'Hardware de Seeed más libro de texto, manual de prácticas, materiales para el docente y tareas para el alumnado.',
  'outcome.docs.label': 'Documentación de proyecto archivable',
  'outcome.docs.desc':
    'Topología de despliegue, archivos de configuración y documentos de operación y aceptación, detallados en la página de cada módulo.',
  'outcome.forms.label': 'Cuatro modalidades de compra',
  'outcome.forms.desc':
    'Solo hardware, el kit didáctico estándar, un instructor de Chaihuo en sus instalaciones o formar primero a sus propios instructores.',
  'course.day': 'día',
  'cta.module.title': 'Incorpore {code} a su programación',
  'cta.module.desc':
    'El presupuesto depende del formato y del tamaño de la clase. Indíquenos por correo el número de participantes y el nivel deseado y enviaremos una propuesta en 3 días hábiles.',
  'history.founded.when': '2011',
  'history.founded.title': 'Chaihuo Makerspace abre en Shenzhen',
  'history.founded.desc':
    'Uno de los primeros makerspaces de China. La Academia forma parte de Chaihuo Makerspace, de modo que la historia del makerspace es la de la Academia.',
  'history.seeed.when': 'Hardware',
  'history.seeed.title': 'En clase se usan productos que Seeed Studio vende hoy',
  'history.seeed.desc':
    'Placas de desarrollo, sensores y equipos de computación en el borde se pueden pedir por SKU. Nada es material de utilería.',
  'history.academy.when': 'Cursos',
  'history.academy.title': 'Siete módulos, cada uno en tres niveles',
  'history.academy.desc':
    'M0 es el curso de entrada para principiantes. M1–M6 abordan cada uno un tipo de problema sobre el terreno: consumo energético en edificios, interacción por voz y visión, comunicación sin red, alertas por visión, monitorización ambiental y agarre robótico.',
  'history.sites.when': 'Sedes',
  'history.sites.title': 'Sedes en Shenzhen y Chengdu',
  'history.sites.desc':
    'Shenzhen: Vanke Cloud City Design Community, distrito de Nanshan. Chengdu: n.º 92 de Shima Road, distrito de Qingyang.',
  'person.name': 'Feng Lei',
  'person.role': 'Coordinador general, Academia Chaihuo Maker',
  'person.quote':
    'El mejor destino de un curso no es ser ejecutado perfectamente una vez, sino ser transformado más allá del reconocimiento por un profesor, convirtiéndose en un curso que solo él puede impartir.',
  'partnership.suitable': 'Indicado para',
  'faq.q5.q': '¿Se puede incorporar solo un módulo o solo un nivel?',
  'faq.q5.a':
    'Sí. Cada módulo de M0 a M6 puede impartirse por separado y también es posible cursar solo uno de los niveles L1 / L2 / L3. Le propondremos la combinación mínima que cumpla su objetivo.',
  'faq.q6.q': '¿Colaboran con socios de fuera de China?',
  'faq.q6.a':
    'Sí. El módulo M3 de redes en malla solo se imparte fuera de China continental. Para los demás módulos, escríbanos para acordar el idioma de impartición y el desplazamiento de instructores.',
};

const ptBR: Record<string, string> = {
  'track.make-with-ai.name': 'Criar com IA',
  'track.make-with-ai.goal':
    'Sem saber programar: a IA escreve o código e você constrói hardware que funciona',
  'track.make-with-ai.desc':
    'O M0 percorre três plataformas de hardware em um único curso: Grove para sensoriamento, Wio Terminal para interação e XIAO ESP32S3 Sense para classificação de imagens. A IA escreve o código; os alunos cuidam de expressar bem o requisito e de deixar o projeto funcionando.',
  'track.build-ai-products.name': 'Criar produtos com IA',
  'track.build-ai-products.goal': 'Construir terminais e dispositivos com capacidades de IA',
  'track.build-ai-products.desc':
    'O M2 faz um terminal entender a fala e enxergar; o M4 faz as câmeras detectarem alvos e gerarem alertas; o M6 faz um braço robótico agarrar com base na visão. Os três módulos cobrem interação por voz, detecção visual e controle de robôs.',
  'track.solutions.name': 'Soluções',
  'track.solutions.goal': 'Integrar vários dispositivos e redes em uma mesma instalação',
  'track.solutions.desc':
    'O M1 conecta dispositivos de marcas diferentes a uma plataforma local; o M3 monta uma rede onde não há conexão pública; o M5 traz de volta os dados de sensores em campo. Indicado para equipes de integração em projetos de edifícios, emergências, agricultura e meio ambiente.',
  'home.objects.title': 'O aprendizado começa com hardware real e materiais práticos',
  'home.objects.subtitle':
    'LEDs, sensores, gateways, câmeras, dispositivos espaciais e documentação de entrega — estes não são portas de entrada conceituais, mas materiais reais usados em experimentos em sala de aula, treinamento de projetos e entregas para parceiros.',
  'home.outcomes.title': 'O que você recebe ao adotar um curso',
  'home.outcomes.subtitle':
    'O Chaihuo Makerspace foi fundado em Shenzhen em 2011 e é um dos primeiros makerspaces da China. Todo o hardware usado em aula faz parte do catálogo atual da Seeed Studio e pode ser pedido por SKU.',
  'home.paths.title': 'Três direções de aprendizado',
  'home.paths.subtitle':
    'Criar com IA, Criar produtos com IA, Soluções — três eixos principais com diferentes objetivos e combinações de módulos; cada direção pode ser detalhada em L1 / L2 / L3.',
  'home.map.title': 'M0–M6 são módulos de aprendizado, L1–L3 são níveis de profundidade prática',
  'home.map.subtitle':
    'A matriz é apenas a forma de organização. Na entrega real, ela corresponde a módulos, profundidade de carga horária, materiais de hardware e resultados de projeto.',
  'home.paths.view': 'Ver direções',
  'home.paths.cta1': 'Ver trilhas de aprendizado',
  'home.paths.cta2': 'Ver grade curricular completa',
  'home.map.cta': 'Ver grade curricular completa',
  'level.l1.label': 'L1 · Demonstração',
  'level.l1.desc':
    'Ideal para cursos curtos, aulas abertas e demonstrações do "momento mágico": compreensível, explicável e demonstrável.',
  'level.l2.label': 'L2 · Consultoria',
  'level.l2.desc':
    'Ideal para semanas de aprendizado e bootcamps: configurar sistemas funcionais de forma independente e ministrar workshops práticos.',
  'level.l3.label': 'L3 · Design',
  'level.l3.desc':
    'Ideal para integração de negócios e personalização profunda: integração de APIs, treinamento de modelos e implantação privada.',
  'outcome.hardware.label': 'Hardware real',
  'outcome.hardware.desc':
    'Cada módulo possui uma lista reutilizável de aquisição de hardware, incluindo kits originais, placas proprietárias e acessórios.',
  'outcome.project.label': 'Tarefas de projeto',
  'outcome.project.desc':
    'Tarefas de projeto com etapas práticas, prontas para uso em sala de aula ou bootcamps.',
  'outcome.material.label': 'Materiais de entrega',
  'outcome.material.desc':
    'Materiais de entrega orientados a resultados, incluindo slides, manuais de experimentos, modelos de projeto e critérios de avaliação.',
  'outcome.reuse.label': 'Reutilizabilidade',
  'outcome.reuse.desc':
    'Organize uma vez, reutilize sempre. Materiais de aprendizado, listas de hardware e tarefas de projeto podem ser reutilizados em múltiplas turmas.',
  'object.led.label': 'Fita de LED',
  'object.led.hint': 'Comece acendendo o primeiro LED',
  'object.led.module': 'M0',
  'object.sensor.label': 'Kit de sensores',
  'object.sensor.hint': 'Temperatura, umidade, luminosidade, movimento',
  'object.sensor.module': 'M0',
  'object.gateway.label': 'Gateway residencial',
  'object.gateway.hint': 'Controle inteligente com Home Assistant',
  'object.gateway.module': 'M1',
  'object.camera.label': 'Câmera IA',
  'object.camera.hint': 'Reconhecimento visual e inferência na borda',
  'object.camera.module': 'M4',
  'object.speaker.label': 'Dispositivo espacial',
  'object.speaker.hint': 'Array de microfones e interação por voz',
  'object.speaker.module': 'M2',
  'object.docs.label': 'Documentação de entrega',
  'object.docs.hint': 'Slides, manuais de experimentos e modelos de projeto',
  'object.docs.module': 'M5',
  'eco.seeed.name': 'Seeed Studio',
  'eco.seeed.role': 'Plataforma global de produtos de hardware e cadeia de suprimentos',
  'eco.seeed.desc':
    'Fornece produtos e soluções de hardware para makers e empresas em todo o mundo, abrangendo IoT, computação de borda, IA e outras áreas.',
  'eco.seeed.tag': 'Produtos de hardware',
  'eco.chaihuo.name': 'Chaihuo Makerspace',
  'eco.chaihuo.role': 'Pioneiro do movimento maker na China',
  'eco.chaihuo.desc':
    'Fundado em 2011, um dos primeiros makerspaces da China. Oferece espaço físico, eventos comunitários, incubação de projetos e outros serviços.',
  'eco.chaihuo.tag': 'Makerspace',
  'eco.opc.name': 'Academia Chaihuo Maker',
  'eco.opc.role': 'Plataforma de capacitação técnica',
  'eco.opc.desc':
    'Transforma as capacidades técnicas do ecossistema em cursos acessíveis, ajudando indivíduos e empresas a dominar novas tecnologias de integração.',
  'eco.opc.tag': 'Treinamento técnico',
  'eco.learnMore': 'Saiba mais',
  'eco.title': 'Ecossistema trino Chaihuo Maker',
  'eco.subtitle':
    'Produtos de hardware · Makerspace · Treinamento técnico — sustentando-se mutuamente em ciclo fechado.',
  'values.title': 'Que valor isso traz para você?',
  'value.realHardware.title': 'Hardware real',
  'value.realHardware.desc':
    'As ferramentas e equipamentos usados no curso são produtos reais da Seeed Studio, não adereços didáticos.',
  'value.realScenario.title': 'Cenários reais',
  'value.realScenario.desc':
    'Os casos vêm de projetos reais do ecossistema Chaihuo. O que você aprende são soluções já validadas.',
  'value.realConnection.title': 'Conexão real',
  'value.realConnection.desc':
    'Concluir o curso não é o fim, mas o início da entrada no ecossistema — conexão com oportunidades de projetos, ingresso no banco de talentos e crescimento contínuo.',
  'stat.2011.label': 'Fundação do Chaihuo Makerspace',
  'stat.20.label': 'Instituições parceiras autorizadas em todo o país',
  'stat.4000.label': 'Total acumulado de pessoas capacitadas',
  'mapLegend.note':
    'Cada módulo pode ser introduzido individualmente nos três níveis de profundidade L1/L2/L3, ou combinado com outros módulos para formar pacotes completos de solução.',
  'mapLegend.axisX.label': 'Eixo Horizontal · M0–M6',
  'mapLegend.axisX.desc':
    'Direção de aprendizado. M0 é a entrada principal para iniciantes (fundamentos de hardware inteligente), M1–M6 são cinco direções setoriais, selecionáveis independentemente por objetivo.',
  'mapLegend.axisY.label': 'Eixo Vertical · L1 / L2 / L3',
  'mapLegend.axisY.desc':
    'Profundidade de domínio. L1 Demonstração — compreensível e demonstrável, L2 Consultoria — configurar sistemas funcionais de forma independente, L3 Design — integração de negócios e personalização profunda.',
  'mapLegend.anchorM0': 'Entrada Principal para Iniciantes',
  'mapLegend.anchorM1M5': 'Cinco Direções Setoriais',
  'faq.q1.q': 'Quanto tempo leva do primeiro e-mail até a primeira aula?',
  'faq.q1.a':
    'O alinhamento inicial geralmente é agendado em até 3 dias úteis. O Kit de Ensino Padrão pode ser enviado rapidamente para início das aulas. A entrega completa e o treinamento de instrutores levam geralmente de 2 a 4 semanas, desde a confirmação dos requisitos até o início das aulas.',
  'faq.q2.q': 'Os kits de hardware do curso precisam ser adquiridos da Seeed?',
  'faq.q2.a':
    'O Bare Hardware Kit e o Standard Teaching Kit utilizam hardware original Seeed, garantindo consistência entre os experimentos do curso e os materiais didáticos. Parceiros também podem adaptar em suas próprias plataformas de hardware, mas os manuais de experimentos e materiais do curso tomam como referência o hardware original.',
  'faq.q3.q': 'O que o Train-the-Trainer Kit inclui especificamente?',
  'faq.q3.a':
    'Inclui o kit de hardware do módulo correspondente, o pacote completo de recursos do curso e o treinamento Train-the-Trainer. O treinamento geralmente é ministrado presencialmente por instrutores Chaihuo, com duração de 2 a 3 dias, para formar instrutores próprios da instituição.',
  'faq.q4.q': 'O Full-Delivery Kit pode ser personalizado sob demanda?',
  'faq.q4.a':
    'Sim. O Full-Delivery Kit pode ser personalizado por módulo, nível, número de alunos e cenário-alvo. Configuramos hardware, currículo e recursos de instrutores conforme a necessidade, gerenciando a entrega de ponta a ponta.',
  'scenario.university.title': 'Universidades · Escolas Técnicas',
  'scenario.university.subtitle': 'Cursos codesenvolvidos / Formação de professores',
  'scenario.university.f1':
    'Com capacidade de desenvolver currículo próprio, pode optar pelo Bare Hardware Kit',
  'scenario.university.f2': 'Kit didático padrão: as aulas começam assim que ele chega',
  'scenario.university.f3': 'Train-the-Trainer Kit para formar seus próprios instrutores',
  'scenario.university.o1': 'Os alunos conseguem construir sistemas entregáveis',
  'scenario.university.o2': 'O conteúdo acompanha a tecnologia em uso na indústria',
  'scenario.university.o3': 'Instrutores próprios para manter os cursos em andamento',
  'scenario.integrator.title': 'Integradores · Provedores de Soluções',
  'scenario.integrator.subtitle': 'Completar competências da equipe / Assumir novas categorias',
  'scenario.integrator.f1':
    'Bare Hardware Kit para combinar com flexibilidade suas próprias soluções',
  'scenario.integrator.f2': 'Standard Teaching Kit para complementar as competências da equipe',
  'scenario.integrator.f3': 'Train-the-Trainer Kit para consolidar instrutores internos',
  'scenario.integrator.o1': 'Menos tempo de preparação para um projeto novo',
  'scenario.integrator.o2': 'A equipe consegue assumir novas categorias de dispositivos',
  'scenario.integrator.o3': 'Menos dependência de suporte técnico externo',
  'scenario.enterprise.title': 'Empresas · Setor Industrial',
  'scenario.enterprise.subtitle': 'Treinamento interno / Entrega personalizada',
  'scenario.enterprise.f1': 'Na primeira aquisição, pode optar pelo Full-Delivery Kit',
  'scenario.enterprise.f2': 'Standard Teaching Kit para treinamento interno',
  'scenario.enterprise.f3':
    'Um instrutor da Chaihuo ministra no local e cuida de tudo, dos materiais ao encerramento',
  'scenario.enterprise.o1': 'A equipe principal domina a tecnologia',
  'scenario.enterprise.o2': 'Novas frentes de negócio são validadas primeiro em pequena escala',
  'scenario.enterprise.o3': 'Menos dependência de fornecedores externos',
  'form.A.title': 'Bare Hardware Kit',
  'form.A.subtitle': 'Bare Hardware Kit',
  'form.A.f1': 'Apenas hardware e acessórios, sem recursos de curso',
  'form.A.f2': 'Adaptável a currículos próprios, combinação flexível',
  'form.A.f3': 'Seleção livre por módulos M0–M6',
  'form.A.d1': 'Hardware e acessórios originais Seeed',
  'form.A.d2': 'Lista de seleção de módulos',
  'form.A.d3': 'Garantia de hardware e suporte ao fornecimento',
  'form.B.title': 'Standard Teaching Kit',
  'form.B.subtitle': 'Standard Teaching Kit',
  'form.B.f1': 'Hardware + pacote completo de recursos do curso',
  'form.B.f2': 'Inclui apostila, slides e manual de experimentos',
  'form.B.f3': 'As aulas começam assim que o kit chega',
  'form.B.d1': 'Kit de hardware do módulo correspondente',
  'form.B.d2': 'Pacote completo de recursos do curso',
  'form.B.d3': 'Atualização contínua do conteúdo do curso',
  'form.C.title': 'Full-Delivery Kit',
  'form.C.subtitle': 'Full-Delivery Kit',
  'form.C.f1': 'Hardware + curso + instrutores Chaihuo no local',
  'form.C.f2': 'Para quem contrata pela primeira vez e não tem instrutores',
  'form.C.f3': 'A Chaihuo cuida de tudo, dos materiais ao encerramento',
  'form.C.d1': 'Hardware e recursos do curso',
  'form.C.d2': 'Aulas presenciais com instrutores Chaihuo',
  'form.C.d3': 'Suporte à entrega do curso e certificação',
  'form.D.title': 'Train-the-Trainer Kit',
  'form.D.subtitle': 'Train-the-Trainer Kit',
  'form.D.f1': 'Hardware + curso + treinamento Train-the-Trainer',
  'form.D.f2': 'Formação de instrutores próprios da instituição',
  'form.D.f3': 'Capacidade sustentável de oferecer cursos de forma autônoma',
  'form.D.d1': 'Hardware e recursos do curso',
  'form.D.d2': 'Treinamento de instrutores Train-the-Trainer',
  'form.D.d3': 'Certificação de instrutores e reciclagem',
  'levelMeta.l1.label': 'L1 · Executar',
  'levelMeta.l1.desc':
    'Siga o tutorial para completar uma demonstração, capaz de apresentar e explicar de forma independente. Ideal para iniciantes e aulas abertas.',
  'levelMeta.l2.label': 'L2 · Miniprojeto',
  'levelMeta.l2.desc':
    'Conclua um miniprojeto completo de forma independente, capaz de configurar sistemas funcionais. Ideal para semanas de aprendizado e bootcamps.',
  'levelMeta.l3.label': 'L3 · Entregável',
  'levelMeta.l3.desc':
    'Possua capacidade de entrega de sistemas, capaz de integrar APIs, treinar modelos e realizar implantação privada. Ideal para integração de negócios e personalização profunda.',
  'section.ecosystemTitle': 'Ecossistema trino Chaihuo Maker',
  'section.ecosystemSubtitle':
    'Produtos de hardware · Makerspace · Treinamento técnico — sustentando-se mutuamente em ciclo fechado.',
  'section.valuesTitle': 'Que valor isso traz para você?',
  'section.statsTitle': 'Chaihuo Maker — Dados',
  'section.faqTitle': 'Perguntas Frequentes',
  'section.faqSubtitle': 'Perguntas comuns sobre parceria e introdução de cursos',
  'section.scenariosTitle': 'Que tipo de organização você é?',
  'section.scenariosSubtitle':
    'Como cada tipo de organização costuma usar os cursos e o que busca. As letras remetem às quatro modalidades abaixo.',
  'section.formsTitle': 'Quatro formas de parceria',
  'section.formsSubtitle':
    'De comprar apenas o hardware a ter um instrutor da Chaihuo ministrando no local.',

  'contact.interest.heading': 'Áreas de interesse',
  'contact.interest.o1': 'Introdução de cursos',
  'contact.interest.o2': 'Pioneiro',
  'contact.interest.o3': 'Base',
  'contact.interest.note':
    'Informe sua área de interesse no e-mail; o community manager vai encaminhar você à pessoa certa.',
  'course.backToMatrix': 'Voltar à matriz de aprendizado',
  'course.coreHardware': 'Hardware principal',
  'course.keyCapabilities': 'O que saberão fazer ao concluir',
  'course.whatProblem': 'O problema que este curso resolve',
  'course.difficulty': 'Dificuldade',
  'course.audienceCount': 'perfis de público-alvo',
  'course.typicalScenarios': 'Cenários típicos de aplicação',
  'course.days': 'dias',
  'course.comingSoon': 'Em breve',
  'course.viewDetail': 'Ver detalhes do curso',
  'course.platform': 'Plataforma',
  'course.audienceTitle': 'Para quem é este curso',
  'course.relatedTracks': 'Combinações de curso que incluem este módulo',
  'course.relatedTracksAria': 'Ver combinações de curso que incluem este módulo',
  'course.deliverablesTitle': 'O que você leva ao concluir',
  'course.deliverablesTitleM0':
    'Não são apenas demos, mas entregáveis que podem ser ativados, validados e replicados',
  'course.deliverablesIntro':
    'Não são apenas demos, mas entregáveis que podem ser ativados no local, validados pelo cliente e replicados pela equipe.',
  'course.curriculumModules': 'módulos de ensino',
  'course.curriculumTitle': 'A ordem dos módulos não muda, a divisão é você quem define',
  'course.curriculumSubtitle':
    'Escolha um formato e veja quais módulos ele cobre. A versão completa é o mesmo curso organizado de três maneiras — conteúdo, hardware e entregáveis são idênticos, apenas a divisão difere.',
  'course.curriculumModuleOutput': 'Módulo / Resultado',
  'course.curriculumCoverage': 'módulos de ensino e sua profundidade de cobertura em cada formato',
  'course.curriculumChooseFormat': 'Escolha o formato',
  'course.curriculumCoverageLabels.full': 'Completo',
  'course.curriculumCoverageLabels.part': 'Reduzido',
  'course.curriculumCoverageLabels.none': 'Não inclui',
  'course.curriculumCoverageLabels.plus': 'Mais aprofundado que o completo',
  'course.formatsTitle': 'Primeiro escolha o nível, depois o formato',
  'course.formatsSubtitle':
    'O tempo e o objetivo determinam qual nível escolher: se você quer que o aluno leve um projeto que possa continuar evoluindo, escolha a versão completa; se tem apenas dois dias, escolha a versão hackathon; se tem apenas meio dia, escolha uma das duas oficinas rápidas.',
  'course.capabilitiesTitle': 'Ao concluir, que tipo de profissional o aluno se torna',
  'course.capabilitiesSubtitle':
    'O M0 não ensina sintaxe. Ele ensina um conjunto de habilidades que, mesmo depois que as barreiras técnicas desaparecerem, ainda determinarão a qualidade do trabalho — ideação, expressão, colaboração, iteração e narrativa.',
  'course.toolchainTitle':
    'Codecraft ajuda você a "ousar fazer", aily-blockly ajuda você a "concluir"',
  'course.toolchainSubtitle':
    'O M0 não usa o Arduino IDE para escrever C++ manualmente, mas adota a cadeia de ferramentas em dois estágios desenvolvida pela Seeed. A primeira metade: zero instalação, resultados em 5 minutos; a segunda metade: traga o projeto para seu próprio computador, transformando-o em uma engenharia que pode ser levada e continuamente evoluída.',
  'course.toolchainTitle.m1': 'ESPHome conecta os dispositivos, Node-RED costura o negócio',
  'course.toolchainSubtitle.m1':
    'Comece com ESPHome + HA OS para gravar firmware e unificar o acesso; depois use Node-RED para orquestrar processos entre sistemas — da automação de uma plataforma à integração de negócio.',
  'course.toolchainTitle.m2': 'Da configuração multimodal na nuvem à implantação local offline',
  'course.toolchainSubtitle.m2':
    'O SenseCraft AI cuida da configuração e validação rápidas, a ponte MCP mantém os dados de negócio na LAN e o pipeline offline do Jetson elimina totalmente a dependência da internet pública.',
  'course.toolchainTitle.m3':
    'Meshtastic forma a malha, Node-RED leva à nuvem, PlatformIO personaliza',
  'course.toolchainSubtitle.m3':
    'O Meshtastic resolve a comunicação fora da rede, o Node-RED conecta os dados da malha à rede pública e aos painéis de monitoramento, e o PlatformIO permite adaptar o firmware do terminal.',
  'course.toolchainTitle.m4':
    'Inferência na borda com reCamera, agregação multicanal com Frigate, modelos YOLO próprios',
  'course.toolchainSubtitle.m4':
    'Da detecção plug-and-play em um ponto ao NVR multicanal com análise centralizada e à implantação quantizada de modelos próprios — três níveis de profundidade de uma solução de visão.',
  'course.toolchainTitle.m5': 'SenseCAP na nuvem, cabeamento Modbus, Open API on-premise',
  'course.toolchainSubtitle.m5':
    'Os sensores industriais conectam prontos para uso a painéis na nuvem, o barramento RS485 coloca vários sensores em paralelo e a Open API com Grafana monta um ciclo de dados on-premise.',
  'course.toolchainTitle.m6': 'Da teleoperação no-code à captura de engenharia determinística',
  'course.toolchainSubtitle.m6':
    'O SenseCraft Robotics entrega demonstrações de teleoperação prontas para uso, Python + Pinocchio + Motorbridge realiza a captura espacial na máquina real, e LeRobot com Isaac Sim cobre a inteligência corporificada e a validação por simulação.',
  'course.kitsTitle': 'Sensoriamento · Interação · Visão, progressão em três níveis',
  'course.kitsSubtitle':
    'Na versão completa, cada aluno recebe o conjunto de três peças; nos formatos reduzidos, apenas o kit correspondente. Os subkits são divididos por plataforma de hardware, não representando profundidade de domínio L1/L2/L3.',
  'course.hardwareIntroTitle': 'Hardware do curso',
  'course.hardwareIntroSubtitle':
    'A lista de material didático deste curso — hardware real, pronto para usar ao abrir a caixa.',
  'course.ladderTitleM0': 'Três plataformas de hardware: A Sensoriamento · B Interação · C Visão',
  'course.ladderTitle': 'Três níveis e até onde cada um leva',
  'course.ladderSubtitleM0':
    'O M0 é dividido por plataforma de hardware (A: Grove · B: Wio Terminal · C: XIAO ESP32S3 Sense), não por profundidade de domínio L1/L2/L3.',
  'course.matrixTitle': 'Panorama M0–M6 × L1/L2/L3',
  'course.matrixSubtitle':
    'Eixo horizontal = L1–L3 três níveis, eixo vertical = M0–M6 sete módulos; M0 é a porta de entrada principal para iniciantes, M1–M6 selecionáveis independentemente por direção; dentro de cada módulo, a progressão é L1 Demonstração → L2 Consultoria → L3 Design.',
  'course.matrixLegend': 'Legenda',
  'course.explorerTitle': 'Sete módulos de aprendizado disponíveis para introdução',
  'course.explorerSubtitle':
    'Cada módulo inclui hardware real, experimentos em sala de aula, objetivos de competência e materiais que podem ser levados. Podem ser introduzidos individualmente ou combinados em soluções seriadas.',
  'course.explorer.cardView': 'Cartões detalhados',
  'course.explorer.listView': 'Lista compacta',
  'course.explorer.switchCard': 'Alternar para visualização em cartões',
  'course.explorer.switchList': 'Alternar para visualização em lista',
  'course.tracksTitle': 'Sete módulos em três direções',
  'course.tracksSubtitle':
    'As direções agrupam os módulos por objetivo, não por uma ordem fixa. O M0 é a entrada para iniciantes; os outros seis podem ser oferecidos separadamente.',
  'moduleCard.coreHardware': 'Hardware principal',
  'moduleCard.keyCapabilities': 'Competências-chave',
  'moduleCard.viewDetail': 'Ver detalhes',
  'moduleCard.illustration': 'Ilustração',
  'moduleCard.about': 'Aprox.',
  'moduleOneLiner.viewDetail': 'Ver detalhes do curso',
  'courseMatrix.swipeHint': '← Deslize para os lados para ver a matriz completa →',
  'courseMatrix.srCaption':
    'Matriz de aprendizado: eixo horizontal com três níveis L1–L3, eixo vertical com sete módulos M0–M6; cada célula exibe o título do módulo, carga horária e entregáveis daquele módulo naquele nível.',
  'courseMatrix.srHeader': 'Módulo / Nível',
  'courseMatrix.platformLayers': 'Camadas de plataforma de hardware A/B/C',
  'courseMatrix.comingSoon': 'Em breve',
  'courseAxis.title': 'Como combinar módulos e níveis',
  'courseAxis.subtitle':
    'M0–M6 indicam a direção de aprendizado, L1 / L2 / L3 indicam a profundidade de prática. Ao introduzir os módulos, a instituição pode definir o escopo do pacote de programas por módulo e nível.',
  'courseAxis.l1': 'Demonstração | Compreensível e demonstrável',
  'courseAxis.l2': 'Consultoria | Configurar sistemas funcionais de forma independente',
  'courseAxis.l3': 'Design | Integração de negócios e personalização profunda',
  'trackFlow.title': 'Três direções de aprendizado',
  'trackFlow.subtitle':
    'Combine módulos de acordo com os objetivos de aprendizado; M0 é a porta de entrada principal para iniciantes, M1–M6 são combinados por direção.',
  'trackFlow.viewCombo': 'Ver esta combinação de módulos',
  'pathOr.moduleRange': 'Escopo de módulos',
  'pathOr.chooseDirection': 'Escolha a direção entre M0–M6',
  'pathOr.determineLevel': 'Defina L1 / L2 / L3',
  'pathOr.confirmHardware': 'Confirme hardware, experimentos e entregáveis do projeto',
  'pathOr.formats': 'Bare Hardware / Standard Teaching / Full-Delivery / Train-the-Trainer',
  'pathOr.heading': 'Primeiro confirme as quatro dimensões do pacote de curso',
  'pathOr.subheading':
    'Com estes quatro itens definidos, a comunicação da parceria será mais concreta.',
  'pathDepth.l1Title': 'Demonstração · Compreensível e demonstrável',
  'pathDepth.l1Desc':
    'Experiência pontual: execute o "momento mágico" em 3 minutos — compreensível, explicável e demonstrável. Ideal para vendas, tomadores de decisão, público geral e iniciantes.',
  'pathDepth.l2Title': 'Consultoria · Configurar sistemas funcionais de forma independente',
  'pathDepth.l2Desc':
    'Integração de cenários: configure de forma independente um sistema funcional e ministre workshops práticos. Ideal para suporte de pré-vendas, consultores técnicos e integradores.',
  'pathDepth.l3Title': 'Design · Integração de negócios e personalização profunda',
  'pathDepth.l3Desc':
    'Integração de negócios: ciclo comercial completo e personalização profunda — integração de APIs, treinamento de modelos e implantação privada. Ideal para engenheiros de pós-venda e suporte técnico avançado.',
  'pathDepth.heading': 'Cada módulo pode ser introduzido em três níveis de profundidade',
  'pathDepth.subheading':
    'L1 Demonstração / L2 Consultoria / L3 Design correspondem à profundidade do curso, não a rótulos de identidade do usuário.',
  'pathDepth.cta': 'Veja L1 / L2 / L3 de cada módulo na matriz completa',
  'pathTracks.title': 'Três direções de aprendizado',
  'pathTracks.subtitle':
    'Três direções paralelas, com combinações sugeridas de acordo com os objetivos do curso.',
  'pathTracks.locate': 'Localizar na grade curricular',
  'pathTracks.consult': 'Solicitar consultoria de parceria',
  'pathTracks.view': 'Ver',
  'partner.title': 'Parceiros do ecossistema',
  'partnership.features': 'O que inclui',
  'partnership.deliverables': 'Conteúdo da entrega',
  'partnership.scanForm': 'Consultar este formato',
  'partnership.scanFormAria': 'Consultar formato',
  'scenario.features': 'Uso típico',
  'scenario.outcomes': 'Objetivos típicos',
  'scenario.applicable': 'Formatos de parceria aplicáveis',
  'heroMap.title': 'Matriz de aprendizado M0–M6 × L1/L2/L3',
  'heroMap.subtitle':
    'Cada módulo pode ser introduzido individualmente nos três níveis de profundidade L1/L2/L3, ou combinado com outros módulos para formar pacotes completos de solução.',
  'heroMap.viewAll': 'Ver grade curricular completa',
  'heroMap.viewGuide': 'Ver trilhas de aprendizado',
  'cta.home.title': 'Comece por um curso.',
  'cta.home.desc':
    'Escolha um módulo e faça uma turma piloto: kit de hardware, planos de aula e tarefas dos alunos já vêm incluídos. Se der certo, conversamos sobre adotar o programa completo. Envie um e-mail e respondemos com uma proposta em até 3 dias úteis.',
  'cta.paths.title':
    'Após escolher a combinação, volte à grade curricular para confirmar módulos e níveis',
  'cta.paths.desc':
    'O guia de trilhas apenas ajuda a reduzir o escopo. Para a implementação real, é preciso ver o conteúdo dos módulos, experimentos em sala, lista de hardware, materiais de entrega e formatos comerciais.',
  'cta.courses.title': 'Com o módulo e o nível definidos, podemos conversar sobre como oferecê-lo.',
  'cta.courses.desc':
    'Informe o módulo, o nível (L1 / L2 / L3) e o tamanho da turma. O orçamento depende do formato e do tamanho da turma; enviamos uma proposta em até 3 dias úteis após o seu e-mail.',
  'cta.about.title': 'Quer levar os cursos da Chaihuo para a sua escola ou equipe?',
  'cta.about.desc':
    'Envie um e-mail dizendo quem são os participantes e qual é o objetivo. Respondemos com uma proposta de parceria em até 3 dias úteis.',
  'cta.apply': 'Solicitar consultoria de parceria',
  'cta.viewCourses': 'Ver grade curricular',
  'cta.viewPaths': 'Ver trilhas de aprendizado',
  'cta.aboutOrg': 'Conhecer a Academia',
  'home.matrix.note':
    'O número em cada célula indica os dias de curso daquele nível. Selecione um módulo para ver hardware, programa e critérios de aceitação.',
  'course.overseasOnly': 'Somente fora da China continental',
  'outcome.lab.label': 'Práticas que funcionam em sala',
  'outcome.lab.desc':
    'Cada módulo gira em torno de hardware real: montagem, ajuste e demonstração acontecem em aula.',
  'outcome.kit.label': 'Kit de hardware e materiais do curso',
  'outcome.kit.desc':
    'Hardware da Seeed mais apostila, manual de experimentos, materiais do professor e tarefas dos alunos.',
  'outcome.docs.label': 'Documentação de projeto arquivável',
  'outcome.docs.desc':
    'Topologia de implantação, arquivos de configuração e documentos de operação e aceitação, detalhados na página de cada módulo.',
  'outcome.forms.label': 'Quatro formas de contratar',
  'outcome.forms.desc':
    'Apenas hardware, o kit didático padrão, um instrutor da Chaihuo no local ou treinar primeiro os seus próprios instrutores.',
  'course.day': 'dia',
  'cta.module.title': 'Inclua o {code} na sua grade',
  'cta.module.desc':
    'O orçamento depende do formato e do tamanho da turma. Informe por e-mail o número de participantes e o nível desejado e enviaremos uma proposta em até 3 dias úteis.',
  'history.founded.when': '2011',
  'history.founded.title': 'O Chaihuo Makerspace é fundado em Shenzhen',
  'history.founded.desc':
    'Um dos primeiros makerspaces da China. A Academia faz parte do Chaihuo Makerspace, portanto a história do makerspace é a da Academia.',
  'history.seeed.when': 'Hardware',
  'history.seeed.title': 'As aulas usam produtos que a Seeed Studio vende hoje',
  'history.seeed.desc':
    'Placas de desenvolvimento, sensores e equipamentos de computação de borda podem ser pedidos por SKU. Nada é material cenográfico.',
  'history.academy.when': 'Cursos',
  'history.academy.title': 'Sete módulos, cada um em três níveis',
  'history.academy.desc':
    'O M0 é o curso de entrada para iniciantes. M1–M6 tratam cada um de um tipo de problema em campo: consumo de energia em edifícios, interação por voz e visão, comunicação fora da rede, alertas por visão, monitoramento ambiental e preensão robótica.',
  'history.sites.when': 'Sedes',
  'history.sites.title': 'Unidades em Shenzhen e Chengdu',
  'history.sites.desc':
    'Shenzhen: Vanke Cloud City Design Community, distrito de Nanshan. Chengdu: nº 92 da Shima Road, distrito de Qingyang.',
  'person.name': 'Feng Lei',
  'person.role': 'Coordenador-geral, Academia Chaihuo Maker',
  'person.quote':
    'O melhor destino de um curso não é ser executado perfeitamente uma vez, mas ser transformado por um professor até ficar irreconhecível, tornando-se um curso que só ele pode ministrar.',
  'partnership.suitable': 'Indicado para',
  'faq.q5.q': 'É possível adotar apenas um módulo ou apenas um nível?',
  'faq.q5.a':
    'Sim. Cada módulo de M0 a M6 pode ser oferecido separadamente e também é possível fazer apenas um dos níveis L1 / L2 / L3. Vamos sugerir a menor combinação que atenda ao seu objetivo.',
  'faq.q6.q': 'Vocês trabalham com parceiros de fora da China?',
  'faq.q6.a':
    'Sim. O módulo M3 de redes em malha é oferecido apenas fora da China continental. Para os demais módulos, envie um e-mail para combinarmos o idioma das aulas e o deslocamento de instrutores.',
};

export const dataTranslations: Record<Locale, Record<string, string>> = {
  'zh-CN': zh,
  en,
  ja,
  es,
  'pt-BR': ptBR,
};

export function dt(locale: Locale, key: string): string {
  return dataTranslations[locale]?.[key] ?? dataTranslations['zh-CN'][key] ?? key;
}
