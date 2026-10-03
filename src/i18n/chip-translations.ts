import { fillStats } from '../data/stats';
import { type Locale, localizePath } from './types';

/**
 * 先锋官 / 基地 页面（src/data/ecosystem.ts）的国际化。
 *
 * 采用与 `module-translations.ts` 相同的「中文 → 目标语言」深拷贝映射：
 * 组件拿到 zh 数据后，用 `translateEcosystem(data, locale)` 一次整体翻译。
 *
 * 语言策略：zh-CN 为源文案；en / ja / es / pt-BR 均提供完整翻译，
 * 每个语种逐字符串查字典（未命中回退中文）。
 */

const zhToEn: Record<string, string> = {
  'M0 教具 5 套': '5 × M0 Kits',
  '赠送，不回收': 'Free, never taken back',
  'Codecraft 账号 5 个': '5 Codecraft Accounts',
  '365 天 / 5 席位': '365 days / 5 seats',
  '社区经理对接、技术答疑、课程更新': 'Community manager, technical Q&A, and course updates',
  'M1–M6 升级路径': 'M1–M6 Upgrade Path',
  '保证金租赁制，退出全退': 'Deposit-based rental, fully refundable on exit',
  '在你的城市 / 场地办一场 AI 编程体验': 'Run an AI coding experience in your city / venue',
  '教具到位、正式开课': 'Kits Delivered, Classes Start',
  '第一批名额多少？': 'How many spots are in the first batch?',
  '没选上怎么办？': "What if I'm not selected?",
  '需要交钱吗？': 'Is there a fee?',
  '不懂编程能当先锋官吗？': 'Can I be a Pioneer without coding skills?',
  '先锋官和基地什么关系？': 'How do Pioneers and Bases relate?',
  '准入标准（2 项核心）': 'Admission Criteria (2 Core Requirements)',
  '有专人负责、有运营计划': 'A dedicated person in charge with an operation plan',
  '已有创客 / STEAM 教育基础': 'Existing maker / STEAM education foundation',
  '先锋官（个人）': 'Pioneer (Individual)',
  '基地（空间）': 'Base (Space)',
  'M0 教具': 'M0 Kits',
  '5 套（赠送不回收）': '5 (free, not taken back)',
  '10 套（基地内共用）': '10 (shared within the base)',
  'Codecraft 账号': 'Codecraft Accounts',
  '5 个（365 天 / 5 席位）': '5 (365 days / 5 seats)',
  '10 个': '10',
  '牌匾 + 区域优先权': 'Plaque + regional priority',
  '学费 100% 归个人': '100% of tuition to the individual',
  '同 + 派单服务费': 'Same + work-order fees',
  '派单 / 销售佣金': 'Work orders / sales commission',
  '→ 基地': '→ Base',
  '→ 区域代理枢纽': '→ Regional Hub',
  '基地内开班，学费归基地运营方。': 'Run classes at the base — tuition goes to the operator.',
  '多基地协作项目，按贡献分佣。': 'Multi-base collaboration projects share fees by contribution.',
  '可挂靠多个基地，也可独立运营': 'Can affiliate with multiple bases or operate independently',
  '权益基地内共用，可有多个先锋官': 'Benefits shared within the base; can have multiple Pioneers',
  '基地必须有先锋官吗？': 'Must a base have a Pioneer?',
  '基地教具和先锋官教具是一回事吗？': 'Are base kits and Pioneer kits the same?',
  '先锋官：柴火招募的点火人': 'Pioneers: the Igniters Chaihuo recruits',
  'PPT + md 格式，可以自行修改和二次创作': 'PPT + md format; you may modify and rework it',
  '基地：柴火认证的本地授课点': 'Bases: Chaihuo-certified local teaching sites',
  教学合作网络与基地: 'Teaching Network & Bases',
  '已有海内外 {pioneers} 位先锋官，在 {countries} 个国家持续开课，首批 {bases} 家基地已签约。常年开放申请，支持个人讲师开课与机构空间挂牌。':
    '{pioneers} Pioneers are teaching in {countries} countries, and the first {bases} partner bases have signed. Applications are open year-round for independent instructors and educational spaces.',
  个人讲师申请: 'Instructor Application',
  实体空间合作: 'Physical Space Partnership',
  '先锋官：柴火教学点火人': 'Pioneers: Sparking Maker Education',
  '先锋官是柴火在各地的教学合作者。掌握柴火课程后，在本地组织授课、交付工作坊或拓展合作。柴火提供套件、逐课时讲义和认证支持，常年开放申请。目前已有海内外 {pioneers} 位先锋官，在 {countries} 个国家持续开课。':
    "Pioneers are Chaihuo's local teaching partners: mastering the curriculum to run classes, workshops, and educational projects locally. Chaihuo provides kits, lesson plans, and certification. Applications are open year-round; {pioneers} Pioneers are currently teaching in {countries} countries.",
  申请成为先锋官: 'Apply as a Pioneer',
  准入条件与合作机制: 'Eligibility & Collaboration Mechanism',
  '先锋官是柴火认证的本地讲师与合作者：掌握课程体系，在当地开课交付，并对接学校与机构培训需求。':
    'Pioneers are certified local instructors and partners: delivering the curriculum locally while connecting with schools and institutional training needs.',
  '申请条件（满足其一即可）': 'Eligibility (Meet Either Condition)',
  '有硬件或编程背景，希望用柴火课程与套件在本地开课':
    'Technical background in hardware or coding, wanting to teach using Chaihuo kits and courses',
  '拥有学校、机构或社区资源，希望引入创客课程并组织本地交付':
    'Access to educational, institutional, or community networks, looking to introduce maker courses locally',
  两类满足其一即可申请: 'Meet either criterion to apply',
  '每处基地须至少配备一名先锋官；先锋官也可独立运作，无需绑定实体基地。':
    'Each base must have at least one Pioneer; Pioneers can also operate independently without a physical base.',
  柴火提供的支持: 'Support Provided by Chaihuo',
  '通过认证即配发，支持常态开课': 'Issued upon certification to support ongoing classes',
  '365 天有效，含 5 个独立教学席位': 'Valid for 365 days, includes 5 dedicated seats',
  '含讲义与源码工程，支持根据本地学情二次开发与定制':
    'Complete courseware and code repositories, open for local customization',
  '通过评估后登载于 map.seeed.cc 全球创客网络':
    'Listed on map.seeed.cc global maker network upon evaluation',
  '社区经理直连、常态技术答疑与课程版本更新':
    'Direct community manager support, continuous technical Q&A, and curriculum updates',
  '支持押金租赁高阶硬件，项目结束押金全额退还':
    'Deposit-based hardware rental for advanced modules, fully refunded upon course completion',
  收益渠道与分成: 'Revenue Streams & Share',
  开课学费收益: 'Course Tuition',
  '在本地使用 M0 课程自主开班，学费由开课方全额留存。套件与备课讲义现成，重点投入本地学员招募与课堂交付。':
    'Deliver M0 courses locally and keep 100% of student tuition. With turnkey kits and lesson plans ready, focus your energy on local enrollment and teaching.',
  总部委托派单: 'HQ Dispatches',
  '柴火承接的异地企业实训与工作坊需求，就近委托当地先锋官交付，按场次结算讲师酬劳。':
    'Enterprise training and workshops booked by Chaihuo are dispatched to local Pioneers, paying competitive per-session trainer fees.',
  教具集采佣金: 'Kit Sales Commission',
  '协助本地学校与培训机构批量采购柴火硬件套件，根据成交规模结算佣金。':
    'Earn commissions on bulk hardware kit procurement from local schools and institutions.',
  加入与开课流程: 'Onboarding & Launch Process',
  体验与沟通: 'Experience & Discovery',
  '在本地组织一次小规模硬件体验，或与教研团队电话沟通':
    'Host a hands-on hardware trial session locally, or schedule an exploratory call with our curriculum team.',
  教研与试讲: 'Training & Demonstration',
  '参加总部线上备课辅导，提交一段实操项目试讲视频':
    'Attend online preparation sessions and submit a recorded demo lesson based on a hands-on build.',
  配发套件并开课: 'Receive Kits & Launch',
  '通过认证后配发 5 套 M0 教具与账号，启动本地首期课程':
    'Receive 5 complimentary M0 kits and accounts upon certification, and launch your first cohort.',
  进阶与基地升级: 'Scale & Base Upgrade',
  '常态开班后可申请高阶硬件，具备固定场地时可申请挂牌合作基地':
    'Access higher-tier hardware as classes run continuously; apply to establish a certified Base once you have dedicated space.',
  认证考核机制: 'Certification Standard',
  申领教具: 'Claim Kits',
  完成实操项目: 'Build a Project',
  录制试讲片段: 'Record Demo Video',
  总部教研评估: 'HQ Review',
  发放认证证书: 'Issue Certificate',
  '认证关注真实的课堂交付与动手能力：申请人需基于指定硬件完成一个实物作品并录制试讲片段，经教研评估合格后正式发放认证。能做出实物、讲清原理，是先锋官的核心标准。':
    'Certification focuses on real teaching and hands-on skill: applicants build a physical project and submit a demo teaching video. Being able to build it and teach it clearly is our core standard.',
  '申请有截止时间或名额限制吗？': 'Is there an application deadline or seat limit?',
  '先锋官计划常年开放申请，不设名额上限。提交申请后，教研团队会在 3 个工作日内通过邮件与你联系沟通。':
    'The Pioneer Program accepts applications year-round with no quota caps. Our curriculum team will follow up via email within 3 business days.',
  '目前先锋官网络的实际规模有多大？': 'What is the current scale of the Pioneer network?',
  '目前全球已有 {pioneers} 位先锋官，在 {countries} 个国家持续开课；首批 {bases} 家签约基地已配备教具开课。':
    'There are currently {pioneers} Pioneers teaching in {countries} countries, and the first {bases} signed bases are equipped and running classes.',
  '加入需要支付加盟费用吗？': 'Is there a franchise fee to join?',
  '不需要加盟费。M0 基础教具在认证通过后配发赠送；M1–M6 高阶模块教具实行押金租赁制，项目结课退还设备后押金全额退回。':
    'No franchise fees. 5 sets of M0 kits are provided complimentary upon certification. Advanced M1–M6 kits are leased on a deposit basis, fully refunded upon return.',
  '非计算机或工科专业可以申请吗？': 'Can non-CS or non-engineering backgrounds apply?',
  '可以。M0 课程使用图形化免配置沙盒环境，辅以 AI 助教指令，上手门槛低。有教学意愿或课堂组织经验的老师，演练 1–2 次即可熟练授课。':
    'Yes. M0 uses a zero-install graphical sandbox and AI assistant workflows with a gentle learning curve. Anyone with teaching experience can master delivery after 1–2 rehearsal runs.',
  '先锋官和基地之间如何协作？': 'How do Pioneers and Bases collaborate?',
  '每家基地须有至少一名签约先锋官负责实训。先锋官既可以是基地的专职教师，也可以是独立合作讲师，支持跨基地共享实训台架与设备资源。':
    'Each Base must have at least one certified Pioneer guiding workshops. Pioneers can be full-time staff or external partners, sharing hardware facilities across spaces.',
  申请成为柴火先锋官: 'Apply to Become a Chaihuo Pioneer',
  '常年开放个人讲师与创客申请。提交你的背景与开课计划，教研团队将在 3 个工作日内与你沟通对接。':
    'Open year-round for independent instructors and makers. Submit your background and teaching plan, and our team will get in touch within 3 business days.',
  提交申请: 'Submit Application',
  邮件咨询: 'Email Inquiry',
  '基地：柴火认证的本地授课中心': 'Bases: Certified Local Learning Hubs',
  '面向拥有固定教学场地与日常运营能力的机构。首批 {bases} 家基地已签约并交付教具，目前常年开放新基地申请。柴火提供教学套件、成套讲义与总部派单支持；基地在本地常态开课，并为先锋官提供工坊实训台架。':
    'For institutions with permanent teaching spaces and ongoing operational capability. {bases} bases have signed and received kits; new base applications are open year-round. Chaihuo provides kits, lesson packages, and workshop dispatches; bases run ongoing classes and host Pioneers with dedicated maker benches.',
  申请设立基地: 'Apply for a Base',
  准入条件与权益: 'Eligibility & Benefits',
  '基地是柴火官方认证的实体教学中心，具备承接实训与常态化开课的场地条件。':
    'A Base is an officially certified learning center with physical facilities for regular hands-on training.',
  '准入标准（2 项基本要求）': 'Admission Criteria (2 Core Requirements)',
  '具备可容纳 15–30 人同时动手的实训或创客工坊':
    'Dedicated workshop space accommodating 15–30 learners working hands-on',
  '配备专职教学或运营对接人，有明确的开班排课规划':
    'Dedicated education or operations coordinator with a concrete scheduling plan',
  两项都是基本要求: 'Both requirements are mandatory',
  优先合作条件: 'Preferred Qualifications',
  '具备创客、STEAM 或电子信息类社团与开课经验':
    'Prior experience hosting maker, STEAM, or electronics clubs and programs',
  基地与先锋官权益对照: 'Rights & Benefits Comparison',
  权益项目: 'Benefit Item',
  'M0 教学套件': 'M0 Teaching Kits',
  '5 套（通过认证后配发）': '5 sets (granted upon certification)',
  '10 套（工坊共用实训台架）': '10 sets (shared across workshop benches)',
  '5 个（365 天 / 5 独立席位）': '5 accounts (365 days / 5 seats)',
  '10 个独立教学席位': '10 dedicated seats',
  官方授牌: 'Official Recognition',
  登上全球创客网络地图: 'Featured on global maker map',
  '实体铜牌认证 + 本地业务优先权': 'Official plaque + regional priority',
  学费收益: 'Tuition Revenue',
  自主开班学费全额归个人: '100% of tuition retained by instructor',
  '学费归基地 + 派单讲师酬劳': 'Tuition to base + dispatch fees to trainers',
  多元收益渠道: 'Multiple Revenue Streams',
  '总部派单 / 教具佣金': 'HQ Dispatches / Kit Commissions',
  '套件代销 / 区域派单 / 多基地协同收益': 'Kit distribution / regional dispatches / network share',
  发展方向: 'Growth Trajectory',
  '→ 筹建独立基地': '→ Found an independent Base',
  '→ 区域教研与交付中心': '→ Regional Curriculum & Delivery Hub',
  基地收益来源: 'Base Revenue Sources',
  自主开课学费: 'Regular Course Tuition',
  '在基地工坊常态开设课程与工作坊，学费收益全部由基地运营方支配。':
    'Run regular courses and workshops in your maker space; all tuition fees are retained directly by the base operator.',
  '柴火承接的企事业单位区域实训需求，优先委托当地基地承办，按场次结算服务费。':
    'Enterprise and public sector training requests in your region are preferentially dispatched to the local base, settled per session.',
  '为本地高校、中小学及研学机构提供教具配套采购，根据订单流水获得返佣。':
    'Facilitate hardware kit procurement for local colleges, schools, and study groups to earn sales commissions.',
  多基地业务协作: 'Multi-Base Collaboration',
  '参与跨区域大型交付或承接异地集训，按照实际协作分工结算收益。':
    'Participate in cross-regional rollouts or host intensive training camps, splitting revenue based on actual contribution.',
  '另：支持对接地方公共科教专项与公益项目。':
    'Note: Also supports local public science education grants and community initiatives.',
  基地与先锋官的协作关系: 'Relationship Between Bases and Pioneers',
  '先锋官提供教学实操能力，基地提供工坊硬件承载，两者互为支撑、协同运转。':
    'Pioneers provide hands-on instructional capacity; Bases provide physical maker facilities. Both reinforce each other.',
  讲师与个人: 'Instructor / Individual',
  实体工坊: 'Physical Workshop',
  '可入驻签约多家基地，也可独立组织教学': 'Can partner with multiple bases or teach independently',
  '硬件设备在工坊共用，可聚合多位先锋官共同开课':
    'Shared workshop hardware, uniting multiple Pioneers to deliver classes',
  '先锋官既可以是基地的专职讲师，也可以作为外部特邀合作导师':
    'Pioneers can serve as full-time in-house instructors or external guest mentors.',
  '一位先锋官可与同城多家基地签约合作，在不同工坊授课':
    'A single Pioneer can partner with multiple local bases, delivering across different workshops.',
  基地配发的教具与云端账号供工坊内所有认证先锋官共同使用:
    'Kits and platform seats assigned to a base are shared among all certified Pioneers in that workshop.',
  基地发展路径: 'Base Growth Path',
  个人创客: 'Maker',
  认证先锋官: 'Certified Pioneer',
  合作基地: 'Partner Base',
  区域教研中心: 'Regional Hub',
  '运营良好、具备稳定开班能力的基地，可升级为区域教研中心，协同负责本区域内新先锋官的实操辅导与基地拓展。':
    'High-performing bases with steady enrollment can level up to Regional Hubs, helping onboard new local Pioneers and establish further bases.',
  '挂牌基地必须配备先锋官吗？': 'Does a Base need to have a Pioneer?',
  '是的。每家合作基地须至少有一位通过认证的先锋官担任教学督导，确保实训安全与教学质量。':
    'Yes. Each partner base must have at least one certified Pioneer as instructional lead to guarantee quality and safety.',
  '基地教具与先锋官个人教具如何管理？': 'How are Base kits and personal Pioneer kits handled?',
  '基地签约后配发 10 套教学套件，留存基地共用；入驻先锋官此前持有的个人教具归个人所有，可一同充实课堂台架。':
    'The 10 kits provided upon base signing remain shared workshop property. Personal kits previously awarded to Pioneers remain theirs and can complement classroom benches.',
  '有成熟场地但未做过开源硬件培训，能否申请？':
    "Can spaces apply if they haven't run open-source hardware training before?",
  '可以。只要场地具备基础动手条件且有团队持续运营，柴火提供完整的讲义备课包与师资辅导，协助跑通首期。':
    'Yes. As long as you have adequate maker benches and an active operating team, Chaihuo supplies full lesson packages and instructor coaching to launch your first session.',
  '基地申请需要缴纳加盟费吗？': 'Are there franchise or licensing fees for Bases?',
  '不收取加盟费。柴火负责提供首批教学套件、课程备课资料与派单机会，合作重点在于本地持续开课。':
    'No franchise fees. Chaihuo provides the initial teaching kits, lesson preparation materials, and dispatch opportunities, focusing entirely on sustaining local classes.',
  申请设立柴火教学基地: 'Apply to Establish a Chaihuo Learning Base',
  '常年开放机构合作。拥有线下教学场地并计划引入 AIoT 实训体系的团队，提交申请后教研顾问将在 3 个工作日内与你沟通方案。':
    'Institutional partnerships are open year-round. If you have physical facilities and want to bring in the AIoT curriculum, submit an application and our advisors will respond within 3 business days.',
  先锋官: 'Pioneer',
  先锋官计划: 'Pioneer Program',
  固定场地: 'Dedicated Space',
  基地: 'Base',
  基地计划: 'Base Program',
  官方认证: 'Official Certification',
  总部支持: 'HQ Support',
  技术型: 'Technical Profile',
  持续运营: 'Continuous Operation',
  '曾与柴火基地车或 Seeed 硬件合作举办过工作坊':
    'Prior workshop collaboration with Chaihuo Maker Truck or Seeed hardware',
  查看分布图: 'View Global Map',
  '科技馆、青少年活动中心、高校 Fab Lab 等公共空间':
    'Public spaces such as science museums, youth centers, or university Fab Labs',
  课程包: 'Curriculum Package',
  链接型: 'Network Profile',
};

const zhToJa: Record<string, string> = {
  'M0 教具 5 套': 'M0 キット 5 セット',
  '赠送，不回收': '贈呈・回収なし',
  'Codecraft 账号 5 个': 'Codecraft アカウント 5 つ',
  '365 天 / 5 席位': '365 日 / 5 席',
  '通过认证后登上 map.seeed.cc 全球分布图': '認証を通過すると map.seeed.cc の全世界分布図に掲載',
  '社区经理对接、技术答疑、课程更新': 'コミュニティマネージャー対応、技術サポート、コース更新',
  'M1–M6 升级路径': 'M1–M6 アップグレードパス',
  '保证金租赁制，退出全退': '保証金レンタル制、退会時は全額返金',
  '在你的城市 / 场地办一场 AI 编程体验': 'あなたの街 / 会場で AI プログラミング体験を開催',
  '教具到位、正式开课': 'キット到着、正式開講',
  '第一批名额多少？': '第 1 期の募集人数は？',
  '没选上怎么办？': '選ばれなかったら？',
  '需要交钱吗？': '費用はかかりますか？',
  '不懂编程能当先锋官吗？': 'プログラミングが分からなくてもパイオニアになれますか？',
  '先锋官和基地什么关系？': 'パイオニアと拠点の関係は？',
  '准入标准（2 项核心）': '参入基準（コア 2 項目）',
  '有专人负责、有运营计划': '専任担当者と運営計画があること',
  '科技馆 / 高校 Fab Lab 等公共教育空间': '科学館 / 大学の Fab Lab などの公共教育スペース',
  '已有创客 / STEAM 教育基础': 'すでにメーカー / STEAM 教育の基盤がある',
  '先锋官（个人）': 'パイオニア（個人）',
  '基地（空间）': '拠点（施設）',
  'M0 教具': 'M0 キット',
  '5 套（赠送不回收）': '5 セット（贈呈・回収なし）',
  '10 套（基地内共用）': '10 セット（拠点内で共用）',
  'Codecraft 账号': 'Codecraft アカウント',
  '5 个（365 天 / 5 席位）': '5 つ（365 日 / 5 席）',
  '10 个': '10 つ',
  '牌匾 + 区域优先权': 'プレート + エリア優先権',
  '学费 100% 归个人': '受講料は 100% 個人のもの',
  '同 + 派单服务费': '同 + 案件配信サービス料',
  '派单 / 销售佣金': '案件配信 / 販売コミッション',
  '佣金 / 派单 / 跨基地分佣 / 公益捐赠': 'コミッション / 案件配信 / 拠点間分与 / 公益寄付',
  '→ 基地': '→ 拠点',
  '→ 区域代理枢纽': '→ エリア代理ハブ',
  '基地内开班，学费归基地运营方。': '拠点内で講座を開き、受講料は拠点運営側の収益に。',
  '多基地协作项目，按贡献分佣。': '複数拠点の協働プロジェクトで、貢献度に応じて分与。',
  '另：公益捐赠渠道（适合公共教育空间）。': 'また：公益寄付のチャネル（公共教育スペースに最適）。',
  '可挂靠多个基地，也可独立运营': '複数の拠点に所属可能、独立運営も可能',
  '权益基地内共用，可有多个先锋官': '特典は拠点内で共有、複数のパイオニアを置くことも可能',
  '基地必须有先锋官吗？': '拠点にはパイオニアが必須ですか？',
  '基地教具和先锋官教具是一回事吗？': '拠点のキットとパイオニアのキットは同じものですか？',
  '先锋官：柴火招募的点火人': 'パイオニア：柴火が募集する点火人',
  'PPT + md 格式，可以自行修改和二次创作': 'PPT＋md形式。自由に改変・再構成できます',
  '基地：柴火认证的本地授课点': '拠点：柴火が認定する地域の授業拠点',
  教学合作网络与基地: '教育連携ネットワークと拠点',
  '已有海内外 {pioneers} 位先锋官，在 {countries} 个国家持续开课，首批 {bases} 家基地已签约。常年开放申请，支持个人讲师开课与机构空间挂牌。':
    '{pioneers}名のパイオニアが{countries}カ国で開講を続け、第1期{bases}拠点が契約済みです。個人講師の開講や教育拠点の設立申請を通年で受け付けています。',
  个人讲师申请: '個人講師の応募',
  实体空间合作: '実体拠点の連携',
  '先锋官：柴火教学点火人': 'パイオニア：柴火の教育イグナイター',
  '先锋官是柴火在各地的教学合作者。掌握柴火课程后，在本地组织授课、交付工作坊或拓展合作。柴火提供套件、逐课时讲义和认证支持，常年开放申请。目前已有海内外 {pioneers} 位先锋官，在 {countries} 个国家持续开课。':
    'パイオニアは各地で活動する教育パートナーです。カリキュラムを習得し、地元で授業やワークショップを展開します。柴火がキット、指導案、認定を提供し、通年で募集しています。現在{pioneers}名が{countries}カ国で開講を続けています。',
  申请成为先锋官: 'パイオニアに応募する',
  准入条件与合作机制: '参加条件と連携の仕組み',
  '先锋官是柴火认证的本地讲师与合作者：掌握课程体系，在当地开课交付，并对接学校与机构培训需求。':
    'パイオニアは公認の地域講師・パートナーです。体系を習得して授業を提供し、教育機関のニーズに応えます。',
  '申请条件（满足其一即可）': '応募要件（いずれか1つに該当）',
  '有硬件或编程背景，希望用柴火课程与套件在本地开课':
    'ハードウェアやプログラミングの知見を持ち、柴火の教材で教育サービスを展開したい方',
  '拥有学校、机构或社区资源，希望引入创客课程并组织本地交付':
    '学校や地域のネットワークを持ち、メイカー教育プログラムを導入・運営したい方',
  两类满足其一即可申请: 'いずれか1つの条件を満たせば応募可能',
  '每处基地须至少配备一名先锋官；先锋官也可独立运作，无需绑定实体基地。':
    '各拠点には最低1名のパイオニアが必要です。パイオニア単独での独立運営も可能です。',
  柴火提供的支持: '柴火からの提供サポート',
  '通过认证即配发，支持常态开课': '認定完了後に提供、日常授業に活用可能',
  '365 天有效，含 5 个独立教学席位': '365日間有効、5つの専用学習アカウント付き',
  '含讲义与源码工程，支持根据本地学情二次开发与定制':
    'スライドとソースコード一式、地域ニーズに合わせたカスタマイズが可能',
  '通过评估后登载于 map.seeed.cc 全球创客网络': '審査通過後、map.seeed.cc のグローバルマップに掲載',
  '社区经理直连、常态技术答疑与课程版本更新':
    '専任コミュニティマネージャー、技術サポート、教材アップデートの提供',
  '支持押金租赁高阶硬件，项目结束押金全额退还':
    'デポジット制で上位機材をレンタル可能、終了後に全額返金',
  收益渠道与分成: '収益モデルと分配',
  开课学费收益: '開講による受講料',
  '在本地使用 M0 课程自主开班，学费由开课方全额留存。套件与备课讲义现成，重点投入本地学员招募与课堂交付。':
    'M0コースで自主開講し、受講料は100%主催者の収益に。教材一式が揃っているため生徒集客と指導に集中できます。',
  总部委托派单: '本部からの案件紹介',
  '柴火承接的异地企业实训与工作坊需求，就近委托当地先锋官交付，按场次结算讲师酬劳。':
    '柴火が受託した企業研修やワークショップを地域のパイオニアに委託し、セッションごとに報酬を支払います。',
  教具集采佣金: '教材販売コミッション',
  '协助本地学校与培训机构批量采购柴火硬件套件，根据成交规模结算佣金。':
    '地元の学校や教育機関への教材導入を仲介し、成約規模に応じた手数料を獲得できます。',
  加入与开课流程: '参加から開講までのステップ',
  体验与沟通: '体験とヒアリング',
  '在本地组织一次小规模硬件体验，或与教研团队电话沟通':
    '地元で小規模な体験会を実施するか、教育担当チームとオンライン相談を実施。',
  教研与试讲: '研修と模擬授業',
  '参加总部线上备课辅导，提交一段实操项目试讲视频':
    'オンライン教材講習に参加し、自作プロジェクトの実演動画を提出。',
  配发套件并开课: '教材受領と初回開講',
  '通过认证后配发 5 套 M0 教具与账号，启动本地首期课程':
    '認定完了後に5セットの教材とアカウントを受領し、最初のクラスを開講。',
  进阶与基地升级: 'ステップアップと拠点化',
  '常态开班后可申请高阶硬件，具备固定场地时可申请挂牌合作基地':
    '定期開催の実績を重ねて上位教材へ進み、固定拠点を確保した段階で公式認定拠点へ移行。',
  认证考核机制: '認定審査の基準',
  申领教具: '教材受領',
  完成实操项目: '作品制作',
  录制试讲片段: '模擬授業録画',
  总部教研评估: '本部審査',
  发放认证证书: '認定証発行',
  '认证关注真实的课堂交付与动手能力：申请人需基于指定硬件完成一个实物作品并录制试讲片段，经教研评估合格后正式发放认证。能做出实物、讲清原理，是先锋官的核心标准。':
    '認定は実践力と指導力を重視します。所定の機材で作品を完成させ、模擬授業を提出して審査を受けます。作れること、そして教えられることが基準です。',
  '申请有截止时间或名额限制吗？': '応募締め切りや人数の制限はありますか？',
  '先锋官计划常年开放申请，不设名额上限。提交申请后，教研团队会在 3 个工作日内通过邮件与你联系沟通。':
    'パイオニア計画は通年で募集しており、定員制限はありません。申請後3営業日以内に担当チームからメールでご連絡します。',
  '目前先锋官网络的实际规模有多大？': '現在、パイオニアネットワークの規模はどのくらいですか？',
  '目前全球已有 {pioneers} 位先锋官，在 {countries} 个国家持续开课；首批 {bases} 家签约基地已配备教具开课。':
    '現在、{pioneers}名のパイオニアが{countries}カ国で開講しており、機材を配備済みの第1期{bases}拠点が活動しています。',
  '加入需要支付加盟费用吗？': '加盟金や初期費用はかかりますか？',
  '不需要加盟费。M0 基础教具在认证通过后配发赠送；M1–M6 高阶模块教具实行押金租赁制，项目结课退还设备后押金全额退回。':
    '加盟金は一切不要です。M0教材は認定完了後に無償提供されます。M1–M6の上位教材はデポジット制レンタルで、返却時に全額返金されます。',
  '非计算机或工科专业可以申请吗？': '情報科学や工学の専門でなくても応募できますか？',
  '可以。M0 课程使用图形化免配置沙盒环境，辅以 AI 助教指令，上手门槛低。有教学意愿或课堂组织经验的老师，演练 1–2 次即可熟练授课。':
    '可能です。M0はブラウザ完結のGUI環境とAIプロンプトを活用するため敷居が低く、指導経験のある方なら1〜2回の演習で授業を行えます。',
  '先锋官和基地之间如何协作？': 'パイオニアと拠点はどのように協力しますか？',
  '每家基地须有至少一名签约先锋官负责实训。先锋官既可以是基地的专职教师，也可以是独立合作讲师，支持跨基地共享实训台架与设备资源。':
    '各拠点には指導を担当する公認パイオニアが最低1名必要です。拠点の専任講師でも外部提携講師でもよく、機材や作業台を共有して活動します。',
  申请成为柴火先锋官: '柴火パイオニアに申し込む',
  '常年开放个人讲师与创客申请。提交你的背景与开课计划，教研团队将在 3 个工作日内与你沟通对接。':
    '個人講師やメイカー向けに随時受付中。ご経歴と開講プランをお知らせいただければ、3営業日以内にご連絡いたします。',
  提交申请: '申請を送信',
  邮件咨询: 'メールで問い合わせ',
  '基地：柴火认证的本地授课中心': '拠点：柴火認定の地域教育拠点',
  '面向拥有固定教学场地与日常运营能力的机构。首批 {bases} 家基地已签约并交付教具，目前常年开放新基地申请。柴火提供教学套件、成套讲义与总部派单支持；基地在本地常态开课，并为先锋官提供工坊实训台架。':
    '常設スペースと継続的な運営体制を持つ教育施設向け。すでに{bases}拠点が締結し教材を導入済みで、新規拠点の申請を通年で受け付けています。柴火がキット、指導案、案件委託を提供し、拠点は日常授業の実施とパイオニアへの実習スペース提供を担います。',
  申请设立基地: '拠点の設立を申請',
  准入条件与权益: '認定条件と特典',
  '基地是柴火官方认证的实体教学中心，具备承接实训与常态化开课的场地条件。':
    '拠点は公式認定の実践教育センターであり、常設の実習と定期開講が可能な施設です。',
  '准入标准（2 项基本要求）': '認定基準（2つの必須要件）',
  '具备可容纳 15–30 人同时动手的实训或创客工坊':
    '15〜30名が同時に手を動かせるメイカースペースまたは実習室',
  '配备专职教学或运营对接人，有明确的开班排课规划':
    '専任の教育または運営担当者を配置し、明確な開講スケジュールを持つこと',
  两项都是基本要求: '2項目とも満たす必要があります',
  优先合作条件: '優遇条件',
  '具备创客、STEAM 或电子信息类社团与开课经验':
    'メイカー、STEAM、電子工作関連のクラブや講座の実績があること',
  基地与先锋官权益对照: '拠点とパイオニアの特典比較',
  权益项目: '項目',
  'M0 教学套件': 'M0 教材セット',
  '5 套（通过认证后配发）': '5セット（認定完了時に配備）',
  '10 套（工坊共用实训台架）': '10セット（拠点共有の実習機材）',
  '5 个（365 天 / 5 独立席位）': '5アカウント（365日 / 5枠）',
  '10 个独立教学席位': '10専用アカウント',
  官方授牌: '公式認定',
  登上全球创客网络地图: '世界マップに掲載',
  '实体铜牌认证 + 本地业务优先权': '公式プレート授与 + 地域優先権',
  学费收益: '受講料収益',
  自主开班学费全额归个人: '自主開催の受講料は全額個人へ',
  '学费归基地 + 派单讲师酬劳': '受講料は拠点へ + 派遣講師報酬',
  多元收益渠道: '多様な収益ルート',
  '总部派单 / 教具佣金': '本部案件委託 / 教材販売手数料',
  '套件代销 / 区域派单 / 多基地协同收益': '教材再販 / 地域案件委託 / 拠点連携シェア',
  发展方向: '発展ステップ',
  '→ 筹建独立基地': '→ 独立拠点の設立',
  '→ 区域教研与交付中心': '→ 地域研修・教育中核拠点',
  基地收益来源: '拠点の収益モデル',
  自主开课学费: '定期講座の受講料',
  '在基地工坊常态开设课程与工作坊，学费收益全部由基地运营方支配。':
    '拠点で定期的に講座やワークショップを開講し、受講料収入は全額拠点の運営資金となります。',
  '柴火承接的企事业单位区域实训需求，优先委托当地基地承办，按场次结算服务费。':
    '柴火が受注した地域内の企業・公共向け研修を優先委託し、実施回数に応じて費用を精算します。',
  '为本地高校、中小学及研学机构提供教具配套采购，根据订单流水获得返佣。':
    '地元の学校や教育団体への教材導入を一括仲介し、調達額に応じたキックバックを獲得できます。',
  多基地业务协作: '複数拠点での共同受託',
  '参与跨区域大型交付或承接异地集训，按照实际协作分工结算收益。':
    '広域の大型受託や合宿型研修に共同で参画し、役割に応じた分配金を得られます。',
  '另：支持对接地方公共科教专项与公益项目。':
    '注：自治体の科学教育助成金やCSRプログラムとの連携も支援します。',
  基地与先锋官的协作关系: '拠点とパイオニアの協力体制',
  '先锋官提供教学实操能力，基地提供工坊硬件承载，两者互为支撑、协同运转。':
    'パイオニアが指導力を担い、拠点がハードウェアと空間を提供することで相互に補完し合います。',
  讲师与个人: '講師 / 個人',
  实体工坊: '実体工房',
  '可入驻签约多家基地，也可独立组织教学': '複数拠点と提携することも、単独で教えることも可能',
  '硬件设备在工坊共用，可聚合多位先锋官共同开课':
    '工房内の設備を共有し、複数のパイオニアが集まって授業を実施可能',
  '先锋官既可以是基地的专职讲师，也可以作为外部特邀合作导师':
    'パイオニアは拠点の専任講師でも、外部の客員メンターでも構いません。',
  '一位先锋官可与同城多家基地签约合作，在不同工坊授课':
    '1名のパイオニアが同一市内の複数拠点と提携し、教室を巡回して教えることも可能です。',
  基地配发的教具与云端账号供工坊内所有认证先锋官共同使用:
    '拠点に支給された機材とアカウントは、工房内の全公認パイオニアで共同利用できます。',
  基地发展路径: '拠点の発展ステップ',
  个人创客: 'メイカー',
  认证先锋官: '公認パイオニア',
  合作基地: '提携拠点',
  区域教研中心: '地域教育中核',
  '运营良好、具备稳定开班能力的基地，可升级为区域教研中心，协同负责本区域内新先锋官的实操辅导与基地拓展。':
    '安定して開講実績を上げている拠点は地域中核拠点へ昇格し、周辺地域での新規パイオニア育成や拠点立ち上げを支援します。',
  '挂牌基地必须配备先锋官吗？': '拠点には必ずパイオニアが必要ですか？',
  '是的。每家合作基地须至少有一位通过认证的先锋官担任教学督导，确保实训安全与教学质量。':
    'はい。各提携拠点には、指導品質と実習安全を担保するため最低1名の公認パイオニアが必要です。',
  '基地教具与先锋官个人教具如何管理？': '拠点の機材とパイオニア個人の機材はどう管理されますか？',
  '基地签约后配发 10 套教学套件，留存基地共用；入驻先锋官此前持有的个人教具归个人所有，可一同充实课堂台架。':
    '拠点締結時に支給される10セットは拠点の共用備品となります。パイオニア個人の機材はそのまま本人の所有で、教室の機材拡充に併用できます。',
  '有成熟场地但未做过开源硬件培训，能否申请？':
    '常設スペースはあるがハードウェア講座の経験がない場合でも応募できますか？',
  '可以。只要场地具备基础动手条件且有团队持续运营，柴火提供完整的讲义备课包与师资辅导，协助跑通首期。':
    '可能です。基礎的な工作スペースと専任スタッフがいれば、柴火が指導案一式とメンター研修を提供し、初回開講を伴走します。',
  '基地申请需要缴纳加盟费吗？': '拠点の申請に加盟金やロイヤリティは発生しますか？',
  '不收取加盟费。柴火负责提供首批教学套件、课程备课资料与派单机会，合作重点在于本地持续开课。':
    '加盟金はかかりません。柴火が教材、指導案、案件紹介を提供し、地域で継続的に授業を行っていただくことが目的です。',
  申请设立柴火教学基地: '柴火教育拠点の設立を申請',
  '常年开放机构合作。拥有线下教学场地并计划引入 AIoT 实训体系的团队，提交申请后教研顾问将在 3 个工作日内与你沟通方案。':
    '教育機関・施設との連携を通年で受付中。実習スペースを持ち AIoT カリキュラムの導入をお考えの場合、申請後3営業日以内にご提案をご案内します。',
  先锋官: 'パイオニア',
  先锋官计划: 'パイオニア計画',
  固定场地: '常設スペース',
  基地: '拠点',
  基地计划: '拠点計画',
  官方认证: '公式認定',
  总部支持: '本部サポート',
  技术型: '技術型',
  持续运营: '継続的な運営',
  '曾与柴火基地车或 Seeed 硬件合作举办过工作坊':
    '柴火ベーストラックやSeeed機材を活用したワークショップの共催実績',
  查看分布图: '分布マップを見る',
  '科技馆、青少年活动中心、高校 Fab Lab 等公共空间':
    '科学館、青少年センター、大学の Fab Lab 等の公共教育スペース',
  课程包: '教材パッケージ',
  链接型: 'コネクター型',
};

const zhToEs: Record<string, string> = {
  'M0 教具 5 套': '5 kits M0',
  '赠送，不回收': 'Regalo, no se recuperan',
  'Codecraft 账号 5 个': '5 cuentas de Codecraft',
  '365 天 / 5 席位': '365 días / 5 plazas',
  'M1–M6 升级路径': 'Ruta de ascenso M1–M6',
  '保证金租赁制，退出全退': 'Alquiler con depósito; reembolso total al salir',
  '教具到位、正式开课': 'Kits entregados, clases en marcha',
  '第一批名额多少？': '¿Cuántas plazas hay en el primer grupo?',
  '没选上怎么办？': '¿Y si no me seleccionan?',
  '需要交钱吗？': '¿Hay que pagar?',
  '不懂编程能当先锋官吗？': '¿Puedo ser Pionero sin saber programar?',
  '先锋官和基地什么关系？': '¿Qué relación hay entre Pioneros y Bases?',
  '准入标准（2 项核心）': 'Criterios de admisión (2 requisitos clave)',
  '有专人负责、有运营计划': 'Una persona responsable y un plan de operación',
  '已有创客 / STEAM 教育基础': 'Con base previa en educación maker / STEAM',
  '先锋官（个人）': 'Pionero (Individual)',
  '基地（空间）': 'Base (Espacio)',
  'M0 教具': 'Kits M0',
  '5 套（赠送不回收）': '5 (regalo, no se recuperan)',
  '10 套（基地内共用）': '10 (compartidos en la Base)',
  'Codecraft 账号': 'Cuentas de Codecraft',
  '5 个（365 天 / 5 席位）': '5 (365 días / 5 plazas)',
  '10 个': '10',
  '牌匾 + 区域优先权': 'Placa + prioridad regional',
  '学费 100% 归个人': 'El 100% de la matrícula para el individuo',
  '同 + 派单服务费': 'Igual + tarifa por pedidos',
  '派单 / 销售佣金': 'Pedidos / comisión por ventas',
  '佣金 / 派单 / 跨基地分佣 / 公益捐赠': 'Comisión / pedidos / reparto entre Bases / donaciones',
  '→ 基地': '→ Base',
  '→ 区域代理枢纽': '→ Hub regional',
  '基地内开班，学费归基地运营方。': 'Imparte clases en la Base: la matrícula es del operador.',
  '多基地协作项目，按贡献分佣。': 'En proyectos entre Bases, el reparto sigue la contribución.',
  '先锋官可以是基地员工，也可以是合作制': 'El Pionero puede ser empleado de la Base o un socio',
  '基地必须有先锋官吗？': '¿Una Base debe tener un Pionero?',
  '基地教具和先锋官教具是一回事吗？': '¿Los kits de la Base y del Pionero son lo mismo?',
  '先锋官：柴火招募的点火人': 'Pioneros: los Ignitores que recluta Chaihuo',
  'PPT + md 格式，可以自行修改和二次创作': 'Formato PPT + md; puede modificarlo y reelaborarlo',
  '基地：柴火认证的本地授课点': 'Bases: puntos de enseñanza locales certificados por Chaihuo',
  教学合作网络与基地: 'Red de Enseñanza y Bases',
  '已有海内外 {pioneers} 位先锋官，在 {countries} 个国家持续开课，首批 {bases} 家基地已签约。常年开放申请，支持个人讲师开课与机构空间挂牌。':
    '{pioneers} Pioneros imparten cursos en {countries} países y las primeras {bases} bases ya han firmado. Solicitudes abiertas todo el año para instructores independientes y espacios educativos.',
  个人讲师申请: 'Solicitud de instructor',
  实体空间合作: 'Colaboración de espacio físico',
  '先锋官：柴火教学点火人': 'Pioneros: Impulsores de la Educación Maker',
  '先锋官是柴火在各地的教学合作者。掌握柴火课程后，在本地组织授课、交付工作坊或拓展合作。柴火提供套件、逐课时讲义和认证支持，常年开放申请。目前已有海内外 {pioneers} 位先锋官，在 {countries} 个国家持续开课。':
    'Los Pioneros son socios docentes locales de Chaihuo: dominan los cursos para impartir clases y talleres en su comunidad. Chaihuo aporta kits, temarios y certificación con convocatoria continua. Actualmente {pioneers} Pioneros imparten cursos en {countries} países.',
  申请成为先锋官: 'Solicitar ser Pionero',
  准入条件与合作机制: 'Criterios de Admisión y Modelo de Trabajo',
  '先锋官是柴火认证的本地讲师与合作者：掌握课程体系，在当地开课交付，并对接学校与机构培训需求。':
    'Los Pioneros son formadores certificados que imparten los cursos localmente y canalizan la demanda formativa de escuelas e instituciones.',
  '申请条件（满足其一即可）': 'Requisitos de Admisión (Cumplir al menos uno)',
  '有硬件或编程背景，希望用柴火课程与套件在本地开课':
    'Con experiencia en hardware o programación, con interés en enseñar con los kits de Chaihuo',
  '拥有学校、机构或社区资源，希望引入创客课程并组织本地交付':
    'Con acceso a centros educativos o comunidades, buscando implementar cursos maker en su entorno',
  两类满足其一即可申请: 'Cualquiera de los dos perfiles puede postular',
  '每处基地须至少配备一名先锋官；先锋官也可独立运作，无需绑定实体基地。':
    'Cada base debe contar con al menos un Pionero; los Pioneros también pueden operar de forma independiente.',
  柴火提供的支持: 'Apoyo Proporcionado por Chaihuo',
  '通过认证即配发，支持常态开课': 'Entregado tras la certificación para impartir clases habituales',
  '365 天有效，含 5 个独立教学席位': 'Válido por 365 días, incluye 5 licencias independientes',
  '含讲义与源码工程，支持根据本地学情二次开发与定制':
    'Material didáctico y código fuente completo, adaptable a necesidades locales',
  '通过评估后登载于 map.seeed.cc 全球创客网络':
    'Publicado en el mapa global map.seeed.cc tras la evaluación',
  '社区经理直连、常态技术答疑与课程版本更新':
    'Contacto directo con gestores de comunidad, soporte técnico continuo y actualizaciones',
  '支持押金租赁高阶硬件，项目结束押金全额退还':
    'Alquiler de hardware avanzado mediante depósito reembolsable al finalizar',
  收益渠道与分成: 'Fuentes de Ingresos y Distribución',
  开课学费收益: 'Ingresos por Matrícula',
  '在本地使用 M0 课程自主开班，学费由开课方全额留存。套件与备课讲义现成，重点投入本地学员招募与课堂交付。':
    'Organiza cursos M0 en tu zona y conserva el 100% de las matrículas. Con el material listo, tu foco es la captación y la enseñanza.',
  总部委托派单: 'Derivaciones de la Central',
  '柴火承接的异地企业实训与工作坊需求，就近委托当地先锋官交付，按场次结算讲师酬劳。':
    'Talleres y formaciones de empresas son derivados a los Pioneros locales, liquidando honorarios por jornada.',
  教具集采佣金: 'Comisión por Venta de Kits',
  '协助本地学校与培训机构批量采购柴火硬件套件，根据成交规模结算佣金。':
    'Facilita la compra de kits para escuelas e instituciones locales y recibe comisiones por venta.',
  加入与开课流程: 'Proceso de Incorporación y Lanzamiento',
  体验与沟通: 'Experiencia y Contacto Inicial',
  '在本地组织一次小规模硬件体验，或与教研团队电话沟通':
    'Organiza una sesión práctica en tu entorno o mantén una llamada con el equipo docente.',
  教研与试讲: 'Capacitación y Clase de Prueba',
  '参加总部线上备课辅导，提交一段实操项目试讲视频':
    'Participa en sesiones online de preparación y envía una breve clase grabada demostrando un proyecto.',
  配发套件并开课: 'Recepción de Kits y Apertura',
  '通过认证后配发 5 套 M0 教具与账号，启动本地首期课程':
    'Obtén 5 kits M0 y licencias tras la certificación para inaugurar tu primer grupo.',
  进阶与基地升级: 'Consolidación y Base Propia',
  '常态开班后可申请高阶硬件，具备固定场地时可申请挂牌合作基地':
    'Accede a módulos superiores con clases regulares; postula para fundar una Base cuando cuentes con local fijo.',
  认证考核机制: 'Mecanismo de Certificación',
  申领教具: 'Solicitar Kits',
  完成实操项目: 'Completar Proyecto',
  录制试讲片段: 'Grabar Demostración',
  总部教研评估: 'Evaluación Central',
  发放认证证书: 'Emisión de Certificado',
  '认证关注真实的课堂交付与动手能力：申请人需基于指定硬件完成一个实物作品并录制试讲片段，经教研评估合格后正式发放认证。能做出实物、讲清原理，是先锋官的核心标准。':
    'La certificación evalúa capacidad docente y técnica: los candidatos crean un proyecto físico y graban una clase de prueba. Construirlo y explicarlo con claridad es el requisito clave.',
  '申请有截止时间或名额限制吗？': '¿Hay fechas límite o cupos máximos?',
  '先锋官计划常年开放申请，不设名额上限。提交申请后，教研团队会在 3 个工作日内通过邮件与你联系沟通。':
    'El programa está abierto todo el año sin límite de plazas. El equipo pedagógico se pondrá en contacto por correo en un plazo de 3 días laborables.',
  '目前先锋官网络的实际规模有多大？': '¿Cuál es el alcance actual de la red de Pioneros?',
  '目前全球已有 {pioneers} 位先锋官，在 {countries} 个国家持续开课；首批 {bases} 家签约基地已配备教具开课。':
    'Actualmente hay {pioneers} Pioneros impartiendo cursos en {countries} países, y las primeras {bases} bases firmadas ya están equipadas y en marcha.',
  '加入需要支付加盟费用吗？': '¿Se cobra alguna cuota de franquicia o adhesión?',
  '不需要加盟费。M0 基础教具在认证通过后配发赠送；M1–M6 高阶模块教具实行押金租赁制，项目结课退还设备后押金全额退回。':
    'No hay cuota de franquicia. Los kits M0 se entregan de forma gratuita tras certificarse; los módulos M1–M6 usan depósito reembolsable íntegro al devolver el equipo.',
  '非计算机或工科专业可以申请吗？':
    '¿Pueden postular personas sin formación técnica o informática?',
  '可以。M0 课程使用图形化免配置沙盒环境，辅以 AI 助教指令，上手门槛低。有教学意愿或课堂组织经验的老师，演练 1–2 次即可熟练授课。':
    'Sí. M0 funciona en navegador con entorno gráfico y apoyo de IA. Cualquier docente con experiencia en aula puede dominarlo en una o dos sesiones de práctica.',
  '先锋官和基地之间如何协作？': '¿Cómo colaboran los Pioneros y las Bases?',
  '每家基地须有至少一名签约先锋官负责实训。先锋官既可以是基地的专职教师，也可以是独立合作讲师，支持跨基地共享实训台架与设备资源。':
    'Cada Base debe contar con al menos un Pionero certificado. Puede ser personal propio o un colaborador externo que comparta instalaciones y equipos.',
  申请成为柴火先锋官: 'Solicitar ser Pionero de Chaihuo',
  '常年开放个人讲师与创客申请。提交你的背景与开课计划，教研团队将在 3 个工作日内与你沟通对接。':
    'Convocatoria continua para instructores y creadores. Envíanos tu perfil y plan formativo; te responderemos en 3 días laborables.',
  提交申请: 'Enviar Solicitud',
  邮件咨询: 'Consulta por Correo',
  '基地：柴火认证的本地授课中心': 'Bases: Centros Locales de Formación Certificados',
  '面向拥有固定教学场地与日常运营能力的机构。首批 {bases} 家基地已签约并交付教具，目前常年开放新基地申请。柴火提供教学套件、成套讲义与总部派单支持；基地在本地常态开课，并为先锋官提供工坊实训台架。':
    'Dirigido a centros con espacio permanente y gestión activa. {bases} bases ya han firmado y recibido material; nuevas solicitudes abiertas todo el año. Chaihuo provee kits, temarios y proyectos; las bases imparten cursos y albergan a los Pioneros en sus talleres.',
  申请设立基地: 'Solicitar una Base',
  准入条件与权益: 'Requisitos y Beneficios',
  '基地是柴火官方认证的实体教学中心，具备承接实训与常态化开课的场地条件。':
    'Una Base es un centro formativo certificado con instalaciones preparadas para talleres periódicos.',
  '准入标准（2 项基本要求）': 'Criterios de Entrada (2 Requisitos Clave)',
  '具备可容纳 15–30 人同时动手的实训或创客工坊':
    'Espacio de taller con capacidad para 15–30 alumnos trabajando de forma práctica',
  '配备专职教学或运营对接人，有明确的开班排课规划':
    'Responsable docente u operativo designado con un calendario formativo definido',
  两项都是基本要求: 'Ambos requisitos son indispensables',
  优先合作条件: 'Condiciones Preferentes',
  '具备创客、STEAM 或电子信息类社团与开课经验':
    'Experiencia previa en clubes o talleres maker, STEAM o de electrónica',
  基地与先锋官权益对照: 'Comparativa de Beneficios',
  权益项目: 'Concepto',
  'M0 教学套件': 'Kits Docentes M0',
  '5 套（通过认证后配发）': '5 kits (entregados al certificarse)',
  '10 套（工坊共用实训台架）': '10 kits (compartidos en el taller)',
  '5 个（365 天 / 5 独立席位）': '5 licencias (365 días / 5 accesos)',
  '10 个独立教学席位': '10 accesos dedicados',
  官方授牌: 'Reconocimiento Oficial',
  登上全球创客网络地图: 'Inclusión en el mapa global',
  '实体铜牌认证 + 本地业务优先权': 'Placa oficial + prioridad regional',
  学费收益: 'Rendimiento de Matrículas',
  自主开班学费全额归个人: '100% de la matrícula para el formador',
  '学费归基地 + 派单讲师酬劳': 'Matrícula para la base + remuneración por derivación',
  多元收益渠道: 'Vías de Ingreso Adicionales',
  '总部派单 / 教具佣金': 'Derivaciones / Comisiones de kits',
  '套件代销 / 区域派单 / 多基地协同收益':
    'Distribución de kits / derivaciones / ingresos compartidos',
  发展方向: 'Vía de Crecimiento',
  '→ 筹建独立基地': '→ Fundar una Base independiente',
  '→ 区域教研与交付中心': '→ Centro Regional de Formación e Innovación',
  基地收益来源: 'Vías de Financiación de la Base',
  自主开课学费: 'Matrículas de Cursos Propios',
  '在基地工坊常态开设课程与工作坊，学费收益全部由基地运营方支配。':
    'Organiza cursos periódicos en tu taller; todos los ingresos por matrícula van directamente a la base.',
  '柴火承接的企事业单位区域实训需求，优先委托当地基地承办，按场次结算服务费。':
    'Las formaciones corporativas de la zona se asignan con prioridad a la base local, cobrando por sesión.',
  '为本地高校、中小学及研学机构提供教具配套采购，根据订单流水获得返佣。':
    'Canaliza la compra de material para centros educativos locales con comisiones por volumen.',
  多基地业务协作: 'Cooperación entre Bases',
  '参与跨区域大型交付或承接异地集训，按照实际协作分工结算收益。':
    'Participa en grandes programas multisede o campamentos formativos, repartiendo beneficios según aportación.',
  '另：支持对接地方公共科教专项与公益项目。':
    'Nota: Compatible con convocatorias públicas de divulgación y proyectos comunitarios.',
  基地与先锋官的协作关系: 'Relación entre Bases y Pioneros',
  '先锋官提供教学实操能力，基地提供工坊硬件承载，两者互为支撑、协同运转。':
    'Los Pioneros aportan la docencia práctica; las Bases facilitan el taller físico y su equipamiento.',
  讲师与个人: 'Instructor / Individual',
  实体工坊: 'Taller Físico',
  '可入驻签约多家基地，也可独立组织教学':
    'Puede afiliarse a varias bases o enseñar de manera autónoma',
  '硬件设备在工坊共用，可聚合多位先锋官共同开课':
    'Equipos compartidos en el taller, reuniendo a varios Pioneros para dar clase',
  '先锋官既可以是基地的专职讲师，也可以作为外部特邀合作导师':
    'El Pionero puede ser formador contratado de la base o mentor externo colaborador.',
  '一位先锋官可与同城多家基地签约合作，在不同工坊授课':
    'Un mismo Pionero puede colaborar con varios centros de la ciudad e impartir talleres en diferentes sedes.',
  基地配发的教具与云端账号供工坊内所有认证先锋官共同使用:
    'Los kits y accesos asignados a la base son de uso común para todos los Pioneros acreditados.',
  基地发展路径: 'Trayectoria de Desarrollo de la Base',
  个人创客: 'Maker',
  认证先锋官: 'Pionero Certificado',
  合作基地: 'Base Asociada',
  区域教研中心: 'Centro Regional',
  '运营良好、具备稳定开班能力的基地，可升级为区域教研中心，协同负责本区域内新先锋官的实操辅导与基地拓展。':
    'Las bases con actividad consolidada pueden ascender a Centros Regionales, coordinando la formación de nuevos Pioneros y la expansión local.',
  '挂牌基地必须配备先锋官吗？': '¿Es obligatorio contar con un Pionero para constituir una Base?',
  '是的。每家合作基地须至少有一位通过认证的先锋官担任教学督导，确保实训安全与教学质量。':
    'Sí. Toda base debe tener al menos un Pionero acreditado como referente pedagógico para garantizar la calidad y seguridad.',
  '基地教具与先锋官个人教具如何管理？':
    '¿Cómo se gestiona el material de la base frente al equipo personal del Pionero?',
  '基地签约后配发 10 套教学套件，留存基地共用；入驻先锋官此前持有的个人教具归个人所有，可一同充实课堂台架。':
    'Los 10 kits entregados a la base pertenecen al centro; el material personal previo del Pionero sigue siendo suyo y puede sumarse al aula.',
  '有成熟场地但未做过开源硬件培训，能否申请？':
    '¿Puede solicitarlo un espacio sin experiencia previa en hardware abierto?',
  '可以。只要场地具备基础动手条件且有团队持续运营，柴火提供完整的讲义备课包与师资辅导，协助跑通首期。':
    'Sí. Con mesas de trabajo adecuadas y un equipo operativo, Chaihuo aporta temarios completos y asesoramiento para arrancar la primera edición.',
  '基地申请需要缴纳加盟费吗？': '¿La solicitud de Base conlleva cánones o costes de franquicia?',
  '不收取加盟费。柴火负责提供首批教学套件、课程备课资料与派单机会，合作重点在于本地持续开课。':
    'No se cobra canon ni franquicia. Chaihuo entrega los kits iniciales, materiales didácticos y oportunidades de proyectos con el objetivo de fomentar la docencia local.',
  申请设立柴火教学基地: 'Solicitar la Apertura de una Base Chaihuo',
  '常年开放机构合作。拥有线下教学场地并计划引入 AIoT 实训体系的团队，提交申请后教研顾问将在 3 个工作日内与你沟通方案。':
    'Colaboración abierta todo el año con centros. Si cuentas con aulas prácticas y deseas incorporar la formación en AIoT, envía tu solicitud y te contactaremos en 3 días laborables.',
  先锋官: 'Pionero',
  先锋官计划: 'Programa de Pioneros',
  固定场地: 'Espacio Físico Dedicado',
  基地: 'Base',
  基地计划: 'Programa de Bases',
  官方认证: 'Certificación Oficial',
  总部支持: 'Apoyo de la Central',
  技术型: 'Perfil Técnico',
  持续运营: 'Gestión Continua',
  '曾与柴火基地车或 Seeed 硬件合作举办过工作坊':
    'Colaboración previa en talleres con Chaihuo Maker Truck o hardware de Seeed',
  查看分布图: 'Ver Mapa Global',
  '科技馆、青少年活动中心、高校 Fab Lab 等公共空间':
    'Espacios públicos como museos de ciencia, centros juveniles o Fab Labs universitarios',
  课程包: 'Paquete Didáctico',
  链接型: 'Perfil Conector',
};

const zhToPt: Record<string, string> = {
  'M0 教具 5 套': '5 kits M0',
  '赠送，不回收': 'Grátis, sem devolução',
  'Codecraft 账号 5 个': '5 contas Codecraft',
  '365 天 / 5 席位': '365 dias / 5 vagas',
  'M1–M6 升级路径': 'Trilha de upgrade M1–M6',
  '保证金租赁制，退出全退': 'Locação com caução, reembolso total ao sair',
  '教具到位、正式开课': 'Kits Entregues, Aulas Começam',
  '第一批名额多少？': 'Quantas vagas há na primeira turma?',
  '没选上怎么办？': 'E se eu não for selecionado?',
  '需要交钱吗？': 'Preciso pagar alguma coisa?',
  '不懂编程能当先锋官吗？': 'Posso ser Pioneiro sem saber programar?',
  '先锋官和基地什么关系？': 'Qual é a relação entre Pioneiros e Bases?',
  '准入标准（2 项核心）': 'Critérios de Admissão (2 Requisitos Essenciais)',
  '有专人负责、有运营计划': 'Com uma pessoa responsável e um plano de operação',
  '已有创客 / STEAM 教育基础': 'Com base em educação maker / STEAM',
  '先锋官（个人）': 'Pioneiro (Individual)',
  '基地（空间）': 'Base (Espaço)',
  'M0 教具': 'Kits M0',
  '5 套（赠送不回收）': '5 (grátis, sem devolução)',
  '10 套（基地内共用）': '10 (compartilhados na base)',
  'Codecraft 账号': 'Contas Codecraft',
  '5 个（365 天 / 5 席位）': '5 (365 dias / 5 vagas)',
  '10 个': '10',
  '牌匾 + 区域优先权': 'Placa + prioridade regional',
  '学费 100% 归个人': '100% da mensalidade para a pessoa',
  '同 + 派单服务费': 'O mesmo + taxas de demandas',
  '派单 / 销售佣金': 'Demandas / comissão de vendas',
  '→ 基地': '→ Base',
  '→ 区域代理枢纽': '→ Hub Regional',
  '可挂靠多个基地，也可独立运营': 'Pode se vincular a várias bases ou operar de forma independente',
  '权益基地内共用，可有多个先锋官': 'Benefícios compartilhados na base; pode ter vários Pioneiros',
  '基地必须有先锋官吗？': 'Uma base precisa ter um Pioneiro?',
  '基地教具和先锋官教具是一回事吗？': 'Os kits da base e os kits do Pioneiro são os mesmos?',
  '先锋官：柴火招募的点火人': 'Pioneiros: os Ignitores que a Chaihuo recruta',
  'PPT + md 格式，可以自行修改和二次创作': 'Formato PPT + md; você pode modificar e reelaborar',
  '基地：柴火认证的本地授课点': 'Bases: pontos de ensino locais certificados pela Chaihuo',
  教学合作网络与基地: 'Rede de Ensino e Bases',
  '已有海内外 {pioneers} 位先锋官，在 {countries} 个国家持续开课，首批 {bases} 家基地已签约。常年开放申请，支持个人讲师开课与机构空间挂牌。':
    '{pioneers} Pioneiros dão aulas em {countries} países e as primeiras {bases} bases já assinaram. Inscrições abertas o ano todo para instrutores e espaços educacionais.',
  个人讲师申请: 'Inscrição para instrutores',
  实体空间合作: 'Parceria para espaços físicos',
  '先锋官：柴火教学点火人': 'Pioneiros: Multiplicadores da Educação Maker',
  '先锋官是柴火在各地的教学合作者。掌握柴火课程后，在本地组织授课、交付工作坊或拓展合作。柴火提供套件、逐课时讲义和认证支持，常年开放申请。目前已有海内外 {pioneers} 位先锋官，在 {countries} 个国家持续开课。':
    'Os Pioneiros são parceiros locais de ensino da Chaihuo: dominam o currículo para ministrar aulas e oficinas em suas regiões. A Chaihuo fornece kits, planos de aula e certificação contínua. Atualmente, {pioneers} Pioneiros dão aulas em {countries} países.',
  申请成为先锋官: 'Inscreva-se como Pioneiro',
  准入条件与合作机制: 'Critérios de Admissão e Modelo de Parceria',
  '先锋官是柴火认证的本地讲师与合作者：掌握课程体系，在当地开课交付，并对接学校与机构培训需求。':
    'Os Pioneiros são instrutores certificados que ministram o currículo localmente e atendem à demanda de instituições de ensino.',
  '申请条件（满足其一即可）': 'Requisitos de Admissão (Cumprir pelo menos um)',
  '有硬件或编程背景，希望用柴火课程与套件在本地开课':
    'Com experiência em hardware ou programação, com interesse em ensinar usando os kits da Chaihuo',
  '拥有学校、机构或社区资源，希望引入创客课程并组织本地交付':
    'Com acesso a redes educacionais ou comunitárias, buscando implementar cursos maker localmente',
  两类满足其一即可申请: 'Qualquer um dos perfis pode se inscrever',
  '每处基地须至少配备一名先锋官；先锋官也可独立运作，无需绑定实体基地。':
    'Cada base deve contar com ao menos um Pioneiro; os Pioneiros também podem atuar de forma independente.',
  柴火提供的支持: 'Suporte Oferecido pela Chaihuo',
  '通过认证即配发，支持常态开课': 'Entregue após a certificação para apoiar aulas contínuas',
  '365 天有效，含 5 个独立教学席位': 'Válido por 365 dias, inclui 5 licenças dedicadas',
  '含讲义与源码工程，支持根据本地学情二次开发与定制':
    'Material didático e código-fonte completos, adaptáveis às necessidades locais',
  '通过评估后登载于 map.seeed.cc 全球创客网络':
    'Listado no mapa global map.seeed.cc após a avaliação',
  '社区经理直连、常态技术答疑与课程版本更新':
    'Contato direto com gestor comunitário, suporte técnico contínuo e atualizações de conteúdo',
  '支持押金租赁高阶硬件，项目结束押金全额退还':
    'Locação de hardware avançado mediante depósito, reembolsado integralmente ao final',
  收益渠道与分成: 'Fontes de Renda e Repasse',
  开课学费收益: 'Mensalidades e Matrículas',
  '在本地使用 M0 课程自主开班，学费由开课方全额留存。套件与备课讲义现成，重点投入本地学员招募与课堂交付。':
    'Ministre cursos M0 localmente e retenha 100% do valor das matrículas. Com kits e apostilas prontos, foque em captação e ensino.',
  总部委托派单: 'Encaminhamentos da Matriz',
  '柴火承接的异地企业实训与工作坊需求，就近委托当地先锋官交付，按场次结算讲师酬劳。':
    'Treinamentos corporativos e oficinas são repassados aos Pioneiros da região, com remuneração por sessão.',
  教具集采佣金: 'Comissão por Venda de Kits',
  '协助本地学校与培训机构批量采购柴火硬件套件，根据成交规模结算佣金。':
    'Intermedeie a aquisição de kits para escolas e instituições locais e receba comissões por venda.',
  加入与开课流程: 'Passo a Passo de Entrada e Lançamento',
  体验与沟通: 'Experiência e Alinhamento',
  '在本地组织一次小规模硬件体验，或与教研团队电话沟通':
    'Realize uma sessão prática local ou agende uma reunião com a equipe pedagógica.',
  教研与试讲: 'Capacitação e Demonstração',
  '参加总部线上备课辅导，提交一段实操项目试讲视频':
    'Participe de sessões online de preparação e envie um vídeo demonstrativo de um projeto prático.',
  配发套件并开课: 'Recebimento de Kits e Abertura',
  '通过认证后配发 5 套 M0 教具与账号，启动本地首期课程':
    'Receba 5 kits M0 e licenças após a certificação para dar início à sua primeira turma.',
  进阶与基地升级: 'Expansão e Criação de Base',
  '常态开班后可申请高阶硬件，具备固定场地时可申请挂牌合作基地':
    'Acesse módulos avançados conforme as aulas se tornam regulares; estabeleça uma Base quando possuir espaço físico fixo.',
  认证考核机制: 'Processo de Certificação',
  申领教具: 'Receber Kits',
  完成实操项目: 'Criar Projeto',
  录制试讲片段: 'Gravar Demonstração',
  总部教研评估: 'Avaliação da Matriz',
  发放认证证书: 'Emissão de Certificado',
  '认证关注真实的课堂交付与动手能力：申请人需基于指定硬件完成一个实物作品并录制试讲片段，经教研评估合格后正式发放认证。能做出实物、讲清原理，是先锋官的核心标准。':
    'A certificação avalia a didática e a prática técnica: os candidatos constroem um projeto real e gravam uma aula demonstrativa. Construir e ensinar com clareza são os critérios essenciais.',
  '申请有截止时间或名额限制吗？': 'Existe prazo de inscrição ou limite de vagas?',
  '先锋官计划常年开放申请，不设名额上限。提交申请后，教研团队会在 3 个工作日内通过邮件与你联系沟通。':
    'O programa tem inscrições abertas o ano todo, sem limite de vagas. A equipe pedagógica responderá por e-mail em até 3 dias úteis.',
  '目前先锋官网络的实际规模有多大？': 'Qual é a abrangência atual da rede de Pioneiros?',
  '目前全球已有 {pioneers} 位先锋官，在 {countries} 个国家持续开课；首批 {bases} 家签约基地已配备教具开课。':
    'Atualmente há {pioneers} Pioneiros dando aulas em {countries} países, e as primeiras {bases} bases firmadas já estão equipadas e em funcionamento.',
  '加入需要支付加盟费用吗？': 'É cobrada alguma taxa de franquia ou adesão?',
  '不需要加盟费。M0 基础教具在认证通过后配发赠送；M1–M6 高阶模块教具实行押金租赁制，项目结课退还设备后押金全额退回。':
    'Não há taxa de franquia. Os kits M0 são fornecidos gratuitamente após a certificação; os módulos M1–M6 operam com depósito totalmente reembolsável na devolução.',
  '非计算机或工科专业可以申请吗？':
    'Quem não tem formação em computação ou engenharia pode se candidatar?',
  '可以。M0 课程使用图形化免配置沙盒环境，辅以 AI 助教指令，上手门槛低。有教学意愿或课堂组织经验的老师，演练 1–2 次即可熟练授课。':
    'Sim. O M0 roda diretamente no navegador em ambiente visual com apoio de IA. Qualquer professor experiente consegue dominá-lo com apenas 1 ou 2 ensaios.',
  '先锋官和基地之间如何协作？': 'Como funciona a colaboração entre Pioneiros e Bases?',
  '每家基地须有至少一名签约先锋官负责实训。先锋官既可以是基地的专职教师，也可以是独立合作讲师，支持跨基地共享实训台架与设备资源。':
    'Cada Base deve ter pelo menos um Pioneiro certificado. Ele pode ser funcionário da instituição ou parceiro externo, compartilhando as bancadas de laboratório.',
  申请成为柴火先锋官: 'Candidate-se a Pioneiro da Chaihuo',
  '常年开放个人讲师与创客申请。提交你的背景与开课计划，教研团队将在 3 个工作日内与你沟通对接。':
    'Inscrições abertas o ano todo para instrutores e makers. Envie seu histórico e plano de aulas; entraremos em contato em até 3 dias úteis.',
  提交申请: 'Enviar Inscrição',
  邮件咨询: 'Contato por E-mail',
  '基地：柴火认证的本地授课中心': 'Bases: Centros Locais de Ensino Certificados',
  '面向拥有固定教学场地与日常运营能力的机构。首批 {bases} 家基地已签约并交付教具，目前常年开放新基地申请。柴火提供教学套件、成套讲义与总部派单支持；基地在本地常态开课，并为先锋官提供工坊实训台架。':
    'Para instituições com espaço fixo e operação ativa. {bases} bases já assinaram e receberam materiais; novas inscrições abertas o ano todo. A Chaihuo fornece kits, apostilas e projetos; as bases realizam aulas regulares e acolhem Pioneiros em suas oficinas.',
  申请设立基地: 'Solicitar uma Base',
  准入条件与权益: 'Requisitos e Benefícios',
  '基地是柴火官方认证的实体教学中心，具备承接实训与常态化开课的场地条件。':
    'Uma Base é um centro de ensino certificado com infraestrutura física para cursos contínuos.',
  '准入标准（2 项基本要求）': 'Critérios de Entrada (2 Requisitos Essenciais)',
  '具备可容纳 15–30 人同时动手的实训或创客工坊':
    'Espaço de oficina com capacidade para 15–30 alunos realizando práticas simultâneas',
  '配备专职教学或运营对接人，有明确的开班排课规划':
    'Responsável pedagógico ou operacional com plano de aulas e turmas definido',
  两项都是基本要求: 'Ambos os requisitos são obrigatórios',
  优先合作条件: 'Condições Preferenciais',
  '具备创客、STEAM 或电子信息类社团与开课经验':
    'Experiência prévia em oficinas maker, STEAM ou eletrônica aplicada',
  基地与先锋官权益对照: 'Comparativo de Benefícios',
  权益项目: 'Item',
  'M0 教学套件': 'Kits Didáticos M0',
  '5 套（通过认证后配发）': '5 kits (concedidos após certificação)',
  '10 套（工坊共用实训台架）': '10 kits (compartilhados na bancada)',
  '5 个（365 天 / 5 独立席位）': '5 contas (365 dias / 5 acessos)',
  '10 个独立教学席位': '10 licenças dedicadas',
  官方授牌: 'Reconhecimento Oficial',
  登上全球创客网络地图: 'Inclusão no mapa global',
  '实体铜牌认证 + 本地业务优先权': 'Placa física oficial + prioridade regional',
  学费收益: 'Receita de Matrículas',
  自主开班学费全额归个人: '100% das matrículas para o instrutor',
  '学费归基地 + 派单讲师酬劳': 'Matrículas para a base + honorários de repasse',
  多元收益渠道: 'Fontes Diversificadas de Renda',
  '总部派单 / 教具佣金': 'Repasses da Matriz / Comissões de kits',
  '套件代销 / 区域派单 / 多基地协同收益':
    'Revenda de kits / repasses regionais / receitas compartilhadas',
  发展方向: 'Trajetória de Crescimento',
  '→ 筹建独立基地': '→ Criar uma Base independente',
  '→ 区域教研与交付中心': '→ Centro Regional de Ensino e Formação',
  基地收益来源: 'Fontes de Receita da Base',
  自主开课学费: 'Matrículas de Cursos Próprios',
  '在基地工坊常态开设课程与工作坊，学费收益全部由基地运营方支配。':
    'Realize cursos regulares na oficina; todas as mensalidades ficam integralmente com a gestão da base.',
  '柴火承接的企事业单位区域实训需求，优先委托当地基地承办，按场次结算服务费。':
    'Demandas corporativas na região são repassadas prioritariamente à base local, remuneradas por evento.',
  '为本地高校、中小学及研学机构提供教具配套采购，根据订单流水获得返佣。':
    'Atenda a demanda de compras de kits para escolas e faculdades locais com comissão por volume.',
  多基地业务协作: 'Cooperação entre Bases',
  '参与跨区域大型交付或承接异地集训，按照实际协作分工结算收益。':
    'Participe de grandes entregas regionais ou acampamentos de formação, repartindo resultados de acordo com a atuação.',
  '另：支持对接地方公共科教专项与公益项目。':
    'Nota: Compatível com editais de fomento à educação e projetos sociais.',
  基地与先锋官的协作关系: 'Relação entre Bases e Pioneiros',
  '先锋官提供教学实操能力，基地提供工坊硬件承载，两者互为支撑、协同运转。':
    'Os Pioneiros trazem a capacidade didática; as Bases oferecem o laboratório físico e os equipamentos.',
  讲师与个人: 'Instrutor / Pessoa Física',
  实体工坊: 'Espaço Físico',
  '可入驻签约多家基地，也可独立组织教学':
    'Pode vincular-se a várias bases ou lecionar de forma autônoma',
  '硬件设备在工坊共用，可聚合多位先锋官共同开课':
    'Equipamentos compartilhados na oficina, reunindo múltiplos Pioneiros para lecionar',
  '先锋官既可以是基地的专职讲师，也可以作为外部特邀合作导师':
    'O Pioneiro pode ser instrutor contratado da base ou mentor parceiro convidado.',
  '一位先锋官可与同城多家基地签约合作，在不同工坊授课':
    'Um mesmo Pioneiro pode atuar em várias bases da cidade, ministrando aulas em diferentes locais.',
  基地配发的教具与云端账号供工坊内所有认证先锋官共同使用:
    'Os kits e acessos atribuídos à base são compartilhados por todos os Pioneiros certificados do local.',
  基地发展路径: 'Plano de Evolução da Base',
  个人创客: 'Maker',
  认证先锋官: 'Pioneiro Certificado',
  合作基地: 'Base Parceira',
  区域教研中心: 'Centro Regional',
  '运营良好、具备稳定开班能力的基地，可升级为区域教研中心，协同负责本区域内新先锋官的实操辅导与基地拓展。':
    'Bases consolidadas com fluxo regular de turmas podem evoluir para Centros Regionais, auxiliando na formação de novos Pioneiros e expansão da rede.',
  '挂牌基地必须配备先锋官吗？': 'É obrigatório ter um Pioneiro para criar uma Base?',
  '是的。每家合作基地须至少有一位通过认证的先锋官担任教学督导，确保实训安全与教学质量。':
    'Sim. Toda base deve ter pelo menos um Pioneiro certificado como responsável técnico para garantir a segurança e a qualidade do ensino.',
  '基地教具与先锋官个人教具如何管理？':
    'Como são geridos os materiais da base em relação ao kit pessoal do Pioneiro?',
  '基地签约后配发 10 套教学套件，留存基地共用；入驻先锋官此前持有的个人教具归个人所有，可一同充实课堂台架。':
    'Os 10 kits entregues na assinatura pertencem à base; os kits prévios do Pioneiro permanecem sendo dele e podem complementar as bancadas.',
  '有成熟场地但未做过开源硬件培训，能否申请？':
    'Espaços que nunca realizaram oficinas de hardware livre podem se candidatar?',
  '可以。只要场地具备基础动手条件且有团队持续运营，柴火提供完整的讲义备课包与师资辅导，协助跑通首期。':
    'Sim. Contando com bancadas adequadas e equipe dedicada, a Chaihuo oferece material completo e tutoria para colocar a primeira turma de pé.',
  '基地申请需要缴纳加盟费吗？': 'A inscrição de uma Base envolve taxas de franquia ou royalties?',
  '不收取加盟费。柴火负责提供首批教学套件、课程备课资料与派单机会，合作重点在于本地持续开课。':
    'Sem taxas de franquia. A Chaihuo fornece os kits iniciais, materiais de aula e oportunidades de projetos, visando à continuidade das turmas locais.',
  申请设立柴火教学基地: 'Solicitar a Abertura de uma Base Chaihuo',
  '常年开放机构合作。拥有线下教学场地并计划引入 AIoT 实训体系的团队，提交申请后教研顾问将在 3 个工作日内与你沟通方案。':
    'Parcerias institucionais abertas o ano todo. Se você possui espaço físico e deseja implementar a formação em AIoT, inscreva-se e entraremos em contato em até 3 dias úteis.',
  先锋官: 'Pioneiro',
  先锋官计划: 'Programa de Pioneiros',
  固定场地: 'Espaço Físico Dedicado',
  基地: 'Base',
  基地计划: 'Programa de Bases',
  官方认证: 'Certificação Oficial',
  总部支持: 'Suporte da Matriz',
  技术型: 'Perfil Técnico',
  持续运营: 'Operação Contínua',
  '曾与柴火基地车或 Seeed 硬件合作举办过工作坊':
    'Colaboração prévia em oficinas com o Chaihuo Maker Truck ou hardware da Seeed',
  查看分布图: 'Ver Mapa Global',
  '科技馆、青少年活动中心、高校 Fab Lab 等公共空间':
    'Espaços públicos como museus de ciências, centros juvenis ou Fab Labs universitários',
  课程包: 'Pacote Curricular',
  链接型: 'Perfil Conector',
};

const chipDeepTranslations: Record<string, Record<string, string>> = {
  'zh-CN': {},
  en: zhToEn,
  ja: zhToJa,
  es: zhToEs,
  'pt-BR': zhToPt,
};

function chipTranslate(text: string, locale: Locale): string {
  if (locale === 'zh-CN') return fillStats(text);
  return fillStats(chipDeepTranslations[locale]?.[text] ?? text);
}

/**
 * 深拷贝翻译：把 `src/data/ecosystem.ts` 的整棵数据对象按 locale 翻译。
 * 逐字符串查字典（zh-CN 用原文，其他语言含回退），并填入 `src/data/stats.ts` 的规模数字。
 */
export function translateEcosystem<T>(value: T, locale: Locale): T {
  if (typeof value === 'string') return chipTranslate(value, locale) as unknown as T;
  if (Array.isArray(value))
    return value.map((item) => translateEcosystem(item, locale)) as unknown as T;
  if (value && typeof value === 'object') {
    const result: Record<string, unknown> = {};
    for (const [key, item] of Object.entries(value as Record<string, unknown>)) {
      result[key] = translateEcosystem(item, locale);
    }
    return result as T;
  }
  return value;
}

/**
 * 生成链接 href：站内路径按 locale 前缀化；http(s) 绝对 URL 原样返回（外部链接）。
 */
export function chipHref(locale: Locale, href: string): string {
  if (href.startsWith('http://') || href.startsWith('https://')) return href;
  return localizePath(locale, href);
}

/** 该 href 是否外部链接（决定 target / rel）。 */
export function isExternalHref(href: string): boolean {
  return href.startsWith('http://') || href.startsWith('https://');
}
