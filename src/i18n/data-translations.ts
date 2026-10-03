import type { Locale } from './types';

// zh 只放没有数据文件来源的界面文案（区块标题、标签）。
// 凡是 src/data/*.ts 里已有的内容（方向、合作对象、形态、FAQ、页尾 CTA…）不在这里重复：
// zh 直接取数据文件，其他语种按 id 取下面各自的字典。
const zh: Record<string, string> = {
  'home.outcomes.title': '引入一门课，到手这四样',
  'home.outcomes.subtitle':
    '包含课件讲义、实训套件、工程源码与师资培训，教会机构自己的团队独立开课交付。',

  'section.faqTitle': '常见问题',
  'section.scenariosTitle': '你是哪一类机构',
  'section.scenariosSubtitle': '三类机构引入课程的常见用法和目标。字母对应下面的四种合作形态。',
  'section.formsTitle': '四种合作形态',
  'section.formsSubtitle': '从只买硬件，到柴火讲师到场授课。',

  'course.backToMatrix': '返回学习矩阵',
  'course.keyCapabilities': '学完能做的事',
  'course.typicalScenarios': '典型应用场景',
  'course.days': '天',
  'course.audienceTitle': '适合这些人学',
  'course.deliverablesTitle': '学完拿走什么',
  'course.curriculumModuleOutput': '模块 / 产出',
  'course.curriculumCoverage': '个教学模块在各排课形态下的覆盖深度',
  'course.curriculumChooseFormat': '选择排课形态',
  'course.curriculumCoverageLabels.full': '完整',
  'course.curriculumCoverageLabels.part': '精简',
  'course.curriculumCoverageLabels.none': '不含',
  'course.curriculumCoverageLabels.plus': '比完整版更深',
  'course.capabilitiesTitle': '学完，学生会变成什么样的人',
  'course.capabilitiesSubtitle':
    'M0 不教语法。它教的是一套在门槛消失之后，仍然决定作品好坏的东西——想法、表达、协作、迭代、讲述。',
  'course.toolchainTitle': 'Codecraft 帮你"敢做"，aily-blockly 帮你"做完"',
  'course.toolchainSubtitle':
    'M0 不用 Arduino IDE 手写 C++，而是采用 Seeed Studio（矽递科技）自研的双平台接力工具链。前半程零安装、5 分钟见效；后半程把作品搬回自己的电脑，变成能带走、能继续演进的工程。',
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
  'course.kitsSubtitle':
    '完整版人手一套三件；短形态只发对应的那一件。子套件按硬件平台划分，不代表 L1／L2／L3 的掌握深度。',

  'course.ladderTitle': '三档深度，各学到哪一步',

  'courseMatrix.swipeHint': '← 左右滑动查看完整矩阵 →',
  'courseMatrix.srCaption':
    '学习矩阵：横轴为 L1–L3 三个层级，纵轴为 M0–M6 七个模块；每格列出该模块在该层级的模块标题、时长与产出。',
  'courseMatrix.srHeader': '模块 / 层级',

  'partnership.features': '包含什么',
  'partnership.deliverables': '交付内容',
  'partnership.scanForm': '咨询此形态',
  'scenario.features': '常见用法',
  'scenario.outcomes': '常见目标',
  'scenario.applicable': '适用合作形态',

  'home.matrix.note':
    '格内数字是该档的课时天数（d = 天）。点任意一格，看这门课的设备、大纲和验收标准。',
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

  'home.outcomes.title': 'What you receive when you bring in one course',
  'home.outcomes.subtitle':
    'A complete set of teaching assets including courseware, training kits, source code, and instructor training, enabling your team to teach and deliver independently.',

  'outcome.hardware.label': 'Real Hardware',
  'outcome.hardware.desc': 'Each module has a reusable hardware procurement list.',
  'outcome.project.label': 'Project Tasks',
  'outcome.project.desc': 'Hands-on project tasks for classrooms or bootcamps.',
  'outcome.material.label': 'Delivery Materials',
  'outcome.material.desc':
    'Results-oriented delivery materials including courseware, lab manuals, and project templates.',
  'outcome.reuse.label': 'Reusability',
  'outcome.reuse.desc': 'Organize once, reuse repeatedly across batches.',

  'faq.q1.q': 'How long from the first email to the first class?',
  'faq.q1.a':
    'Initial alignment within 3 business days; Standard Kits ship quickly; Full-Delivery and Train-the-Trainer take 2-4 weeks.',
  'faq.q2.q': 'Must hardware kits be purchased from the original manufacturer?',
  'faq.q2.a':
    'Bare Hardware and Standard Kits use factory-original hardware, so course experiments stay consistent with the materials. That original hardware consists of standard production products sold by the ecosystem Chaihuo Makerspace belongs to — founded by Seeed. Partners can also adapt courses to their own hardware platforms, but lab manuals and course materials follow the original hardware.',
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
  'form.A.d1': 'Factory-original hardware and accessories',
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

  'section.faqTitle': 'Frequently Asked Questions',
  'section.scenariosTitle': 'Which kind of organisation are you?',
  'section.scenariosSubtitle':
    'How each kind of organisation typically uses the courses and what it is aiming for. The letters refer to the four formats below.',
  'section.formsTitle': 'Four ways to work together',
  'section.formsSubtitle':
    'From buying hardware only to having a Chaihuo instructor teach on site.',

  'course.backToMatrix': 'Back to Learning Matrix',
  'course.keyCapabilities': 'What learners can do afterwards',
  'course.typicalScenarios': 'Typical Scenarios',
  'course.days': 'days',
  'course.audienceTitle': 'Who This Course Is For',
  'course.deliverablesTitle': 'What You Take Away',
  'course.curriculumModuleOutput': 'Module / Output',
  'course.curriculumCoverage': 'teaching modules coverage across formats',
  'course.curriculumChooseFormat': 'Select teaching format',
  'course.curriculumCoverageLabels.full': 'Full',
  'course.curriculumCoverageLabels.part': 'Partial',
  'course.curriculumCoverageLabels.none': 'None',
  'course.curriculumCoverageLabels.plus': 'Extended',
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
  'course.kitsSubtitle': 'Sub-kits divided by hardware platform, not L1/L2/L3 mastery depth.',
  'course.ladderTitle': 'Three depths and where each one gets you',

  'courseMatrix.swipeHint': '← Swipe to view full matrix →',
  'courseMatrix.srCaption':
    'Learning matrix: horizontal = L1-L3 levels, vertical = M0-M6 modules; each cell shows the module title, duration, and outcomes for that module at that level.',
  'courseMatrix.srHeader': 'Module / Level',

  'partnership.features': 'What it includes',
  'partnership.deliverables': 'Deliverables',
  'partnership.scanForm': 'Inquire about this format',
  'scenario.features': 'Typical use',
  'scenario.outcomes': 'Typical goals',
  'scenario.applicable': 'Applicable Partnership Formats',

  'cta.home.title': 'Start with one course.',
  'cta.home.desc':
    'Pick one module and run a trial cohort: the hardware kit, lesson plans and learner assignments are all provided. If it works for you, we can talk about adopting the full programme. Email us and we will reply with a proposal within 3 working days.',
  'cta.paths.title':
    'After selecting a combination, return to the learning system to confirm modules and levels',
  'cta.paths.desc':
    'The learning path guide only helps narrow down options. For actual implementation, you also need to review module content, classroom experiments, hardware lists, delivery materials, and delivery formats.',
  'cta.courses.title': 'Once the module and depth are chosen, we can talk about running it.',
  'cta.courses.desc':
    'Course fees are determined by cohort size, depth, and hardware kits. Email us your organisation type, target module, and timeline to receive an itemized proposal within 3 business days.',
  'cta.about.title': 'Want to bring Chaihuo courses to your school or team?',
  'cta.about.desc':
    'Email us about who the learners are and what you want them to achieve. We reply with a partnership proposal within 3 working days.',
  'cta.apply': 'Apply for Partnership',
  'cta.viewCourses': 'View Courses',
  'cta.viewPaths': 'View Learning Paths',
  'cta.aboutOrg': 'Learn About the Academy',
  'home.matrix.note':
    'The number in each cell is the course length in days for that level. Select any cell to see that course’s hardware, syllabus and acceptance criteria.',
  'course.overseasOnly': 'Outside mainland China only',
  'outcome.lab.label': 'Labs that run in the classroom',
  'outcome.lab.desc':
    'Every module is built around real hardware: learners assemble it, debug it and demo it in class.',
  'outcome.kit.label': 'Hardware kit and course materials',
  'outcome.kit.desc':
    "Hardware from the ecosystem's own catalogue, plus textbook, lab manual, teacher materials and learner assignments.",
  'outcome.docs.label': 'Project documents you can file',
  'outcome.docs.desc':
    'Deployment topology, configuration files, operations and acceptance documents, itemised on each module page.',
  'outcome.forms.label': 'Four ways to buy',
  'outcome.forms.desc':
    'Hardware only, the standard teaching kit, a Chaihuo instructor teaching on site, or training your own instructors first.',
  'course.day': 'day',
  'cta.module.title': 'Put {code} on your timetable',
  'cta.module.desc':
    'Budgets are based on participant count and hardware requirements. Email us your expected group size and target depth to receive a detailed syllabus and kit plan within 3 business days.',
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
  'home.outcomes.title': '1講座を導入すると手元に届く4つのもの',
  'home.outcomes.subtitle':
    '教材講義、実習キット、ソースコード、講師研修を包括し、チームが自立して講座を開講・提供できるようにします。',
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
  'faq.q1.q': '最初のメールから開講までどのくらいかかりますか？',
  'faq.q1.a':
    '初回の調整は通常3営業日以内にミーティングを設定します。標準教学キットは迅速に発送・開講可能です。フルデリバリーと講師トレーニングは、要件確認から開講まで通常2〜4週間です。',
  'faq.q2.q': 'コースのハードウェアキットは必ず純正ハードウェアを購入する必要がありますか？',
  'faq.q2.a':
    'Bare Hardware KitとStandard Teaching Kitは純正標準ハードウェアを使用し、コース実験と教材の一贯性を保証します。そのハードウェアは柴火創客空間が属するSeeed製品体系の量産現行製品です。パートナーは自社のハードウェアプラットフォームで適合させることも可能ですが、実験マニュアルとコース教材は純正ハードウェアを基準としています。',
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
  'form.A.d1': '純正ハードウェアとアクセサリ',
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
  'section.faqTitle': 'よくある質問',
  'section.scenariosTitle': 'どの種類の機関ですか',
  'section.scenariosSubtitle':
    '機関の種類ごとに、講座の一般的な使い方と目標をまとめました。アルファベットは下の4つの協業形態に対応します。',
  'section.formsTitle': '4つの協業形態',
  'section.formsSubtitle': 'ハードウェアのみの購入から、柴火講師による現地授業まで。',

  'course.backToMatrix': '学習マトリックスに戻る',
  'course.keyCapabilities': '修了後にできること',
  'course.typicalScenarios': '典型的な応用シーン',
  'course.days': '日間',
  'course.audienceTitle': 'こんな方におすすめ',
  'course.deliverablesTitle': '修了時に得られるもの',
  'course.curriculumModuleOutput': 'モジュール / 成果物',
  'course.curriculumCoverage': 'つの教学モジュールの各排課形態におけるカバー深度',
  'course.curriculumChooseFormat': '排課形態を選択',
  'course.curriculumCoverageLabels.full': '完全',
  'course.curriculumCoverageLabels.part': '簡略',
  'course.curriculumCoverageLabels.none': 'なし',
  'course.curriculumCoverageLabels.plus': '完全版より深い',
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
  'course.kitsSubtitle':
    '完全版は1人1セットの3点キット、短縮形態は該当する1点のみ配布。サブキットはハードウェアプラットフォーム別に区分され、L1/L2/L3の習熟深度を表すものではありません。',
  'course.ladderTitle': '3段階の深さと、それぞれの到達点',
  'courseMatrix.swipeHint': '← 左右にスワイプしてマトリックス全体を表示 →',
  'courseMatrix.srCaption':
    '学習マトリックス：横軸はL1〜L3の3レベル、縦軸はM0〜M6の7モジュール。各マスには該当モジュール・レベルのモジュールタイトル、時間数、成果物を表示。',
  'courseMatrix.srHeader': 'モジュール / レベル',
  'partnership.features': '含まれるもの',
  'partnership.deliverables': '納品内容',
  'partnership.scanForm': 'この形態についてお問い合わせ',
  'scenario.features': '一般的な使い方',
  'scenario.outcomes': '主な目標',
  'scenario.applicable': '適用可能な協業形態',
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
    '各セルの数字はそのレベルの日数（d = 日）です。セルを選ぶと、その講座の使用機器・シラバス・検収基準を確認できます。',
  'course.overseasOnly': '中国本土以外のみ提供',
  'outcome.lab.label': '教室でその場で動かせる実験',
  'outcome.lab.desc':
    'どのモジュールも実機ハードウェアを中心に構成され、授業内で組み立て・結合調整・デモまで行います。',
  'outcome.kit.label': 'ハードウェアキットと講座資料',
  'outcome.kit.desc':
    'その製品体系の現行製品ハードウェアに加え、教材、実験マニュアル、講師用資料、受講者課題が付きます。',
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
  'home.outcomes.title': 'Lo que recibe al incorporar un curso',
  'home.outcomes.subtitle':
    'Un conjunto completo de activos que incluye temarios, kits de hardware, código fuente y formación docente, para que su equipo imparta los cursos con total autonomía.',
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
  'faq.q1.q': '¿Cuánto se tarda desde el primer correo hasta la primera clase?',
  'faq.q1.a':
    'La primera reunión de alineación suele programarse en un plazo de 3 días hábiles; el kit de enseñanza estándar puede enviarse rápidamente para comenzar las clases; la entrega integral y la capacitación de instructores, desde la confirmación de requisitos hasta el inicio del curso, generalmente toma de 2 a 4 semanas.',
  'faq.q2.q': '¿Es obligatorio adquirir los kits con hardware original?',
  'faq.q2.a':
    'El kit de hardware básico y el kit de enseñanza estándar utilizan hardware original estándar, garantizando que los experimentos del curso coincidan con los materiales didácticos. Ese hardware pertenece a la línea de productos de producción en catálogo del ecosistema de Seeed. Los socios también pueden adaptar los cursos a sus propias plataformas de hardware, pero los manuales de laboratorio y los materiales del curso se basan en el hardware original.',
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
  'form.A.d1': 'Hardware y accesorios originales',
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
  'section.faqTitle': 'Preguntas frecuentes',
  'section.scenariosTitle': '¿Qué tipo de organización es?',
  'section.scenariosSubtitle':
    'Cómo suele usar los cursos cada tipo de organización y qué busca. Las letras remiten a las cuatro modalidades de abajo.',
  'section.formsTitle': 'Cuatro formas de colaborar',
  'section.formsSubtitle':
    'Desde comprar solo el hardware hasta que un instructor de Chaihuo imparta en sus instalaciones.',

  'course.backToMatrix': 'Volver a la matriz de aprendizaje',
  'course.keyCapabilities': 'Lo que sabrán hacer al terminar',
  'course.typicalScenarios': 'Escenarios típicos de aplicación',
  'course.days': 'días',
  'course.audienceTitle': 'A quién va dirigido',
  'course.deliverablesTitle': 'Qué se lleva al terminar',
  'course.curriculumModuleOutput': 'Módulo / Entregable',
  'course.curriculumCoverage':
    'módulos de enseñanza y su profundidad de cobertura en cada modalidad',
  'course.curriculumChooseFormat': 'Seleccione la modalidad de impartición',
  'course.curriculumCoverageLabels.full': 'Completo',
  'course.curriculumCoverageLabels.part': 'Reducido',
  'course.curriculumCoverageLabels.none': 'No incluido',
  'course.curriculumCoverageLabels.plus': 'Más profundo que la versión completa',
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
  'course.kitsSubtitle':
    'En la versión completa, cada persona recibe un juego de tres kits; en las modalidades cortas, solo se entrega el kit correspondiente. Los sub-kits se dividen por plataforma de hardware, no representan la profundidad de dominio L1/L2/L3.',
  'course.ladderTitle': 'Tres niveles y hasta dónde llega cada uno',
  'courseMatrix.swipeHint': '← Deslice para ver la matriz completa →',
  'courseMatrix.srCaption':
    'Matriz de aprendizaje: eje horizontal con los tres niveles L1–L3, eje vertical con los siete módulos M0–M6; cada celda muestra el título del módulo, la duración y los entregables para ese módulo en ese nivel.',
  'courseMatrix.srHeader': 'Módulo / Nivel',
  'partnership.features': 'Qué incluye',
  'partnership.deliverables': 'Contenido de la entrega',
  'partnership.scanForm': 'Consultar esta modalidad',
  'scenario.features': 'Uso habitual',
  'scenario.outcomes': 'Objetivos habituales',
  'scenario.applicable': 'Modalidades de colaboración aplicables',
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
    'El número de cada celda indica los días de curso de ese nivel. Seleccione cualquier celda para ver el hardware, el temario y los criterios de aceptación del curso.',
  'course.overseasOnly': 'Solo fuera de China continental',
  'outcome.lab.label': 'Prácticas que funcionan en el aula',
  'outcome.lab.desc':
    'Cada módulo gira en torno a hardware real: se monta, se ajusta y se demuestra en clase.',
  'outcome.kit.label': 'Kit de hardware y materiales del curso',
  'outcome.kit.desc':
    'Hardware de la propia línea de productos del ecosistema, más libro de texto, manual de prácticas, materiales para el docente y tareas para el alumnado.',
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
  'home.outcomes.title': 'O que você recebe ao adotar um curso',
  'home.outcomes.subtitle':
    'Um conjunto completo de recursos com material didático, kits de prática, código-fonte e capacitação docente, capacitando sua equipe a lecionar de forma independente.',
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
  'faq.q1.q': 'Quanto tempo leva do primeiro e-mail até a primeira aula?',
  'faq.q1.a':
    'O alinhamento inicial geralmente é agendado em até 3 dias úteis. O Kit de Ensino Padrão pode ser enviado rapidamente para início das aulas. A entrega completa e o treinamento de instrutores levam geralmente de 2 a 4 semanas, desde a confirmação dos requisitos até o início das aulas.',
  'faq.q2.q': 'Os kits de hardware do curso precisam ser adquiridos com hardware original?',
  'faq.q2.a':
    'O Bare Hardware Kit e o Standard Teaching Kit utilizam hardware original padrão, garantindo consistência entre os experimentos do curso e os materiais didáticos. Esse hardware é a linha de produtos de produção do catálogo do ecossistema Seeed. Parceiros também podem adaptar em suas próprias plataformas de hardware, mas os manuais de experimentos e materiais do curso tomam como referência o hardware original.',
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
  'form.A.d1': 'Hardware e acessórios originais',
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
  'section.faqTitle': 'Perguntas Frequentes',
  'section.scenariosTitle': 'Que tipo de organização você é?',
  'section.scenariosSubtitle':
    'Como cada tipo de organização costuma usar os cursos e o que busca. As letras remetem às quatro modalidades abaixo.',
  'section.formsTitle': 'Quatro formas de parceria',
  'section.formsSubtitle':
    'De comprar apenas o hardware a ter um instrutor da Chaihuo ministrando no local.',

  'course.backToMatrix': 'Voltar à matriz de aprendizado',
  'course.keyCapabilities': 'O que saberão fazer ao concluir',
  'course.typicalScenarios': 'Cenários típicos de aplicação',
  'course.days': 'dias',
  'course.audienceTitle': 'Para quem é este curso',
  'course.deliverablesTitle': 'O que você leva ao concluir',
  'course.curriculumModuleOutput': 'Módulo / Resultado',
  'course.curriculumCoverage': 'módulos de ensino e sua profundidade de cobertura em cada formato',
  'course.curriculumChooseFormat': 'Escolha o formato',
  'course.curriculumCoverageLabels.full': 'Completo',
  'course.curriculumCoverageLabels.part': 'Reduzido',
  'course.curriculumCoverageLabels.none': 'Não inclui',
  'course.curriculumCoverageLabels.plus': 'Mais aprofundado que o completo',
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
  'course.kitsSubtitle':
    'Na versão completa, cada aluno recebe o conjunto de três peças; nos formatos reduzidos, apenas o kit correspondente. Os subkits são divididos por plataforma de hardware, não representando profundidade de domínio L1/L2/L3.',
  'course.ladderTitle': 'Três níveis e até onde cada um leva',
  'courseMatrix.swipeHint': '← Deslize para os lados para ver a matriz completa →',
  'courseMatrix.srCaption':
    'Matriz de aprendizado: eixo horizontal com três níveis L1–L3, eixo vertical com sete módulos M0–M6; cada célula exibe o título do módulo, carga horária e entregáveis daquele módulo naquele nível.',
  'courseMatrix.srHeader': 'Módulo / Nível',
  'partnership.features': 'O que inclui',
  'partnership.deliverables': 'Conteúdo da entrega',
  'partnership.scanForm': 'Consultar este formato',
  'scenario.features': 'Uso típico',
  'scenario.outcomes': 'Objetivos típicos',
  'scenario.applicable': 'Formatos de parceria aplicáveis',
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
    'O número em cada célula indica os dias de curso daquele nível. Selecione qualquer célula para ver hardware, programa e critérios de aceitação do curso.',
  'course.overseasOnly': 'Somente fora da China continental',
  'outcome.lab.label': 'Práticas que funcionam em sala',
  'outcome.lab.desc':
    'Cada módulo gira em torno de hardware real: montagem, ajuste e demonstração acontecem em aula.',
  'outcome.kit.label': 'Kit de hardware e materiais do curso',
  'outcome.kit.desc':
    'Hardware da própria linha de produtos do ecossistema, mais apostila, manual de experimentos, materiais do professor e tarefas dos alunos.',
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
