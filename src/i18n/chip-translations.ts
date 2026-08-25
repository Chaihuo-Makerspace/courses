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
  // 首页 · 创客生态分布图（模块 A）
  柴火生态: 'Chaihuo Ecosystem',
  柴火全球创客生态分布图: 'Chaihuo Global Maker Ecosystem Map',
  '先锋官与基地正在全国及全球铺开。':
    'Pioneers and bases are spreading across China and the world.',
  '在地图上找到你身边的柴火节点，': 'Find the Chaihuo node near you on the map,',
  '或者——成为下一个。': 'or become the next one.',
  查看分布图: 'View the Map',
  我要加入: 'I Want to Join',

  // 首页 · 先锋官 · 基地 双栏卡片（模块 B）
  先锋官与基地计划: 'Pioneer & Base Program',
  '把 AI 创客教育带到你的城市——柴火给你课程、教具和认证，你做本地的那根火柴。':
    'Bring AI maker education to your city — Chaihuo provides courses, kits, and certification; you light the local spark.',
  先锋官: 'Pioneer',
  基地: 'Base',
  '在你的城市，做 AI 时代的点火人。': 'In your city, be the spark of the AI era.',
  '5 套 M0 教具赠送': '5 free M0 kits',
  '学费 100% 归你': '100% of tuition is yours',
  官方认证登上地图: 'Official certification on the map',
  了解先锋官: 'Learn About Pioneers',
  '城市里看得见的柴火。': 'Chaihuo you can see in the city.',
  '10 套教具共用': '10 shared kits',
  承接总部派单: 'Receive HQ work orders',
  区域优先权: 'Regional priority',
  了解基地: 'Learn About Bases',

  // 先锋官 Hero
  先锋官计划: 'Pioneer Program',
  点火人: 'the Spark',
  基地计划: 'Base Program',
  看得见的柴火: 'Chaihuo You Can See',
  '在你的城市，做 AI 时代的点火人': 'In your city, be the spark of the AI era',
  '懂技术、能教技术，或者不懂技术但能链接本地网络——柴火给你课程、教具和认证，你把 AI 创客教育带到你的城市。':
    'Tech-savvy or not — if you can teach, or connect your local network, Chaihuo gives you courses, kits, and certification to bring AI maker education to your city.',
  立即申请: 'Apply Now',
  先了解基地: 'Learn About Bases First',
  先了解先锋官: 'Learn About Pioneers First',
  '有固定场地、有持续运营意愿——柴火给你教具、课程、品牌背书和派单流量，你做城市里 AI 创客教育的锚点。':
    'With a fixed venue and commitment to ongoing operation, Chaihuo provides kits, courses, brand backing, and work-order flow — you become your city\u2019s anchor for AI maker education.',

  // 先锋官 · 什么是先锋官
  什么是先锋官: 'What Is a Pioneer',
  '先锋官是柴火认证的在地的技术传播者 + 技术服务商。':
    'A Pioneer is a Chaihuo-certified local technology evangelist and service provider.',
  两类人都可以: 'Two Profiles Both Work',
  技术型: 'Technical',
  '有技术背景，想用创客技能开展教育 / 服务':
    'Has a technical background and wants to run education / services with maker skills',
  链接型: 'Connector',
  '有教育 / 社区资源，想引入创客课程但不一定亲自教':
    'Has education / community resources and wants to bring in maker courses without necessarily teaching',
  '每个基地必须先有先锋官；先锋官也可独立运营，不挂靠基地。':
    'Every base must first have a Pioneer; a Pioneer can also operate independently without affiliating with a base.',

  // 先锋官 · 你能得到什么
  你能得到什么: 'What You Get',
  '从教具、账号到课程包与认证，起步所需全都配齐':
    'From kits, accounts, and course packs to certification — everything you need to start',
  'M0 教具 5 套': '5 × M0 Kits',
  '赠送，不回收': 'Free, never taken back',
  'CodeCraft 账号 5 个': '5 CodeCraft Accounts',
  '365 天 / 5 席位': '365 days / 5 seats',
  课程包: 'Course Pack',
  'PPT + md 格式，可魔改、可二次创作': 'PPT + MD formats — remixable and re-editable',
  官方认证: 'Official Certification',
  '通过认证后登上 map.seeed.cc 全球分布图':
    'Get certified and appear on the map.seeed.cc global map',
  总部支持: 'HQ Support',
  '社区经理对接、技术答疑、课程更新': 'Community manager, technical Q&A, and course updates',
  'M1–M6 升级路径': 'M1–M6 Upgrade Path',
  '保证金租赁制，退出全退': 'Deposit-based rental, fully refundable on exit',

  // 先锋官 · 怎么赚钱
  怎么赚钱: 'How You Earn',
  '三条盈利线，对应三种身份': 'Three revenue lines for three roles',
  开课收费: 'Course Fees',
  '用 M0 课程在当地开班，学费 100% 归你。课程包现成、教具到位，你只需招生和上课。':
    'Run M0 courses locally — 100% of tuition is yours. The course pack is ready and kits are in place; you only handle enrollment and teaching.',
  总部派单: 'HQ Work Orders',
  '柴火接到的培训 / 工作坊需求，派给当地先锋官执行。你出人出力，直接收服务费。':
    'Chaihuo routes local training / workshop demand to you. You provide the people and effort and collect the service fee directly.',
  教具销售佣金: 'Kit Sales Commission',
  '向当地学校 / 机构推荐柴火教具，成交后拿佣金。':
    'Refer Chaihuo kits to local schools / institutions and earn commission on closed deals.',
  '向当地学校 / 机构推荐教具，成交后拿佣金。':
    'Refer kits to local schools / institutions and earn commission on closed deals.',

  // 先锋官 · 四步走
  四步走: 'Four Steps',
  '从一场体验活动，到一座城市的锚点': 'From one hands-on event to your city\u2019s anchor point',
  体验活动: 'Hands-On Event',
  '在你的城市 / 场地办一场 AI 编程体验': 'Run an AI coding experience in your city / venue',
  培训认证: 'Training & Certification',
  '参加总部讲师培训与认证（线上即可开始）':
    'Join HQ instructor training & certification (can start online)',
  '教具到位、正式开课': 'Kits Delivered, Classes Start',
  '认证通过后发放教具与账号，开第一期收费课':
    'After certification, kits and accounts are issued — launch your first paid class',
  验证升级: 'Validate & Upgrade',
  '跑通首期 → 追加支持 → 条件成熟可挂牌基地':
    'Complete the first cohort → get more support → qualify for base status when ready',

  // 先锋官 · 认证流程
  认证流程: 'Certification Process',
  拿到教具: 'Receive Kits',
  完成一个项目: 'Complete a Project',
  录一段讲课视频: 'Record a Teaching Video',
  总部审核: 'HQ Review',
  发证: 'Get Certified',
  '参照校园大使机制：每人定一个教具，做项目 + 录课，审核通过才发证。不是给了教具就是先锋官——要做出来、讲出来。':
    'Modeled on the campus ambassador mechanism: each person picks a kit, builds a project, and records a lesson — certification comes only after review. Getting kits doesn\u2019t make you a Pioneer — you have to build it and teach it.',

  // 先锋官 · FAQ
  '第一批名额多少？': 'How many spots are in the first batch?',
  '第一阶段 10 基地 + 20 先锋官，已有约 70 人意向报名，先到先评估。':
    'Phase 1 covers 10 bases + 20 pioneers; about 70 people have already registered interest — first come, first evaluated.',
  '没选上怎么办？': "What if I'm not selected?",
  '第二期、第三期陆续开放；也可选择交保证金提前参与作为预备。第一批报名者优先纳入后续筛选。':
    'Phase 2 and 3 will open later; you can also join early as a reserve with a deposit. First-batch applicants get priority in later rounds.',
  '需要交钱吗？': 'Is there a fee?',
  'M0 教具赠送不回收；M1–M6 教具保证金租赁制，退出全退。具体金额以协议 v2.5 为准。':
    'M0 kits are free and never taken back; M1–M6 kits use a deposit-based rental system, fully refundable on exit. Exact amounts follow agreement v2.5.',
  '不懂编程能当先锋官吗？': 'Can I be a Pioneer without coding skills?',
  '可以。Codecraft 沙盒零安装、浏览器即用，AI 帮你写代码。任何有上课经验的老师，跑一遍流程就能上课。':
    'Yes. The Codecraft sandbox needs zero installation — it runs in the browser and AI writes the code. Any teacher with classroom experience can run the flow and start teaching.',
  '先锋官和基地什么关系？': 'How do Pioneers and Bases relate?',
  '每个基地必须先有先锋官。先锋官可以是基地员工，也可以是合作制。先锋官可挂靠多个基地，基地权益是基地内先锋官共用的。':
    'Every base must first have a Pioneer. A Pioneer can be a base employee or an independent partner and can affiliate with multiple bases. Base benefits are shared by all Pioneers at that base.',

  // 先锋官 · CTA
  '把这个计划，带回你的城市': 'Bring This Program to Your City',
  '第一阶段 10 基地 + 20 先锋官，先到先评估。填写申请表，社区经理将在 3 个工作日内联系你。':
    'Phase 1 covers 10 bases + 20 pioneers — first come, first evaluated. Fill in the application and a community manager will contact you within 3 working days.',
  联系我们: 'Contact Us',
  '或联系社区经理（会后分配专属对接人）':
    'Or reach your community manager (a dedicated contact is assigned after the session)',

  // 基地 · 什么是基地
  什么是基地: 'What Is a Base',
  '基地是柴火认证的城市级实体空间节点。':
    'A Base is a Chaihuo-certified city-level physical space node.',
  '准入标准（2 项核心）': 'Admission Criteria (2 Core Requirements)',
  城市里看得见的柴火: 'Chaihuo you can see in the city',
  固定场地: 'Fixed Venue',
  可承接活动与课程: 'Able to host events and courses',
  持续运营: 'Ongoing Operation',
  '有专人负责、有运营计划': 'A dedicated person in charge with an operation plan',
  加分项: 'Bonus Points',
  '科技馆 / 高校 Fab Lab 等公共教育空间':
    'Public education spaces like science museums / university Fab Labs',
  '已有创客 / STEAM 教育基础': 'Existing maker / STEAM education foundation',
  '基地车巡游已触达、双方已建立信任':
    'Already reached by the MCV tour, with mutual trust established',

  // 基地 · 权益对比
  基地权益: 'Base Benefits',
  '同一套支持体系，个人与空间各取所需': 'One support system, tailored for individuals and spaces',
  权益: 'Benefit',
  '先锋官（个人）': 'Pioneer (Individual)',
  '基地（空间）': 'Base (Space)',
  'M0 教具': 'M0 Kits',
  '5 套（赠送不回收）': '5 (free, not taken back)',
  '10 套（基地内共用）': '10 (shared within the base)',
  'CodeCraft 账号': 'CodeCraft Accounts',
  '5 个（365 天 / 5 席位）': '5 (365 days / 5 seats)',
  '10 个': '10',
  登上地图: 'On the map',
  '牌匾 + 区域优先权': 'Plaque + regional priority',
  开课获利: 'Course Profits',
  '学费 100% 归个人': '100% of tuition to the individual',
  '同 + 派单服务费': 'Same + work-order fees',
  额外盈利线: 'Extra Revenue Lines',
  '派单 / 销售佣金': 'Work orders / sales commission',
  '佣金 / 派单 / 跨基地分佣 / 公益捐赠':
    'Commission / work orders / cross-base sharing / public donations',
  升级路径: 'Upgrade Path',
  '→ 基地': '→ Base',
  '→ 区域代理枢纽': '→ Regional Hub',

  // 基地 · 怎么赚钱
  基地怎么赚钱: 'How a Base Earns',
  '四条盈利线，把场地变成营收来源': 'Four revenue lines that turn a venue into income',
  '基地内开班，学费归基地运营方。': 'Run classes at the base — tuition goes to the operator.',
  '柴火接到的当地培训 / 工作坊需求，派给基地执行，直接收服务费。':
    'Chaihuo routes local training / workshop demand to your base — you execute and collect service fees directly.',
  跨基地分佣: 'Cross-Base Sharing',
  '多基地协作项目，按贡献分佣。': 'Multi-base collaboration projects share fees by contribution.',
  '另：公益捐赠渠道（适合公共教育空间）。':
    'Also: a public donation channel (great for public education spaces).',

  // 基地 · 关系
  基地与先锋官关系: 'How Bases and Pioneers Relate',
  '没有先锋官，就没有基地；有了基地，先锋官才有自己的主场。':
    'No Pioneers, no base; with a base, Pioneers have their home turf.',
  必须先有: 'Requires First',
  互为支撑: 'Mutually Supporting',
  个人: 'Individual',
  '可挂靠多个基地，也可独立运营': 'Can affiliate with multiple bases or operate independently',
  空间: 'Space',
  '权益基地内共用，可有多个先锋官': 'Benefits shared within the base; can have multiple Pioneers',
  '先锋官可以是基地员工，也可以是合作制':
    'A Pioneer can be a base employee or an independent partner',
  '一个先锋官可挂靠多个基地（如南山基地 + 龙岗基地）':
    'One Pioneer can affiliate with multiple bases (e.g., Nanshan + Longgang)',
  '基地权益（教具、账号等）是基地内所有先锋官共用的':
    'Base benefits (kits, accounts, etc.) are shared by all Pioneers at that base',

  // 基地 · 升级路径
  区域代理枢纽: 'Regional Hub',
  '条件成熟时，基地可升级为区域代理枢纽，负责区域内先锋官 / 基地的招募、培训与协调。':
    'When conditions mature, a base can upgrade to a regional hub responsible for recruiting, training, and coordinating Pioneers / bases in its region.',

  // 基地 · FAQ
  '基地必须有先锋官吗？': 'Must a base have a Pioneer?',
  '是的。每个基地必须先有至少一名先锋官。先锋官可以是基地员工，也可以是外部合作。':
    'Yes. Every base must first have at least one Pioneer — either an employee or an external partner.',
  '基地教具和先锋官教具是一回事吗？': 'Are base kits and Pioneer kits the same?',
  '基地获得 10 套教具（基地内共用），先锋官个人获得 5 套。如果先锋官挂靠基地，共用基地教具，不重复领取。':
    'A base receives 10 kits (shared internally); a Pioneer receives 5. If a Pioneer affiliates with a base, they share the base kits instead of receiving duplicate ones.',
  '已经有空间但没做过创客教育，能申请基地吗？':
    'Can I apply as a base if I have a space but no maker education experience?',
  '可以。核心标准是固定场地 + 持续运营意愿。柴火提供课程、教具和培训，帮你跑通第一期。':
    'Yes. The core criteria are a fixed venue + commitment to ongoing operation. Chaihuo provides courses, kits, and training to help you complete your first cohort.',

  // 基地 · CTA
  '把城市的锚点，和柴火一起建': 'Build Your City\u2019s Anchor Together with Chaihuo',
  '核心标准只有两条：固定场地 + 持续运营意愿。填写申请表，社区经理将在 3 个工作日内联系你。':
    'Only two core criteria: fixed venue + commitment to ongoing operation. Fill in the application and a community manager will contact you within 3 working days.',
};

const zhToJa: Record<string, string> = {
  柴火生态: '柴火エコシステム',
  柴火全球创客生态分布图: '柴火グローバルメーカーエコシステム分布図',
  '先锋官与基地正在全国及全球铺开。': 'パイオニアと拠点は全国・全世界に広がっています。',
  '在地图上找到你身边的柴火节点，': '地図でお近くの柴火ノードを見つけて、',
  '或者——成为下一个。': 'あるいは——次の一員に。',
  查看分布图: '分布図を見る',
  我要加入: '参加する',
  先锋官与基地计划: 'パイオニア＆拠点計画',
  '把 AI 创客教育带到你的城市——柴火给你课程、教具和认证，你做本地的那根火柴。':
    'AI メーカー教育をあなたの街へ——柴火がコース・キット・認証を提供し、あなたが地域の火種になります。',
  先锋官: 'パイオニア',
  基地: '拠点',
  '在你的城市，做 AI 时代的点火人。': 'あなたの街で、AI 時代の火付け人に。',
  '5 套 M0 教具赠送': 'M0 キット 5 セット贈呈',
  '学费 100% 归你': '受講料は 100% あなたのもの',
  官方认证登上地图: '公式認証で地図に掲載',
  了解先锋官: 'パイオニアを知る',
  '城市里看得见的柴火。': '街で見える柴火。',
  '10 套教具共用': 'キット 10 セット共用',
  承接总部派单: '本部からの案件配信',
  区域优先权: 'エリア優先権',
  了解基地: '拠点を知る',
  先锋官计划: 'パイオニア計画',
  点火人: '火付け人',
  基地计划: '拠点計画',
  看得见的柴火: '見える柴火',
  '在你的城市，做 AI 时代的点火人': 'あなたの街で、AI 時代の火付け人に',
  '懂技术、能教技术，或者不懂技术但能链接本地网络——柴火给你课程、教具和认证，你把 AI 创客教育带到你的城市。':
    '技術に詳しい方、教えるのが得意な方、あるいは技術は分からなくても地域ネットワークを持っている方——柴火がコース・キット・認証を提供し、あなたが AI メーカー教育を自分の街に届けます。',
  立即申请: '今すぐ申し込む',
  先了解基地: 'まず拠点を知る',
  先了解先锋官: 'まずパイオニアを知る',
  '有固定场地、有持续运营意愿——柴火给你教具、课程、品牌背书和派单流量，你做城市里 AI 创客教育的锚点。':
    '固定の場と継続運営への意志がある方——柴火がキット・コース・ブランドと案件配信を提供し、あなたが街の AI メーカー教育のアンカーになります。',
  什么是先锋官: 'パイオニアとは',
  '先锋官是柴火认证的在地的技术传播者 + 技术服务商。':
    'パイオニアは柴火認証の地域密着型テクノロジー伝道師であり、技術サービス提供者です。',
  两类人都可以: 'どちらのタイプも歓迎',
  技术型: 'テクニカル型',
  '有技术背景，想用创客技能开展教育 / 服务':
    '技術バックグラウンドを持ち、メーカースキルで教育 / サービスを展開したい方',
  链接型: 'コネクター型',
  '有教育 / 社区资源，想引入创客课程但不一定亲自教':
    '教育 / コミュニティ資源を持ち、メーカーコースを導入したいが自ら教えるとは限らない方',
  '每个基地必须先有先锋官；先锋官也可独立运营，不挂靠基地。':
    '各拠点には必ず先にパイオニアが必要です。パイオニアは拠点に属さず独立運営も可能です。',
  你能得到什么: '得られるもの',
  '从教具、账号到课程包与认证，起步所需全都配齐':
    'キット・アカウントからコースパック・認証まで、スタートに必要なものがすべて揃います',
  'M0 教具 5 套': 'M0 キット 5 セット',
  '赠送，不回收': '贈呈・回収なし',
  'CodeCraft 账号 5 个': 'CodeCraft アカウント 5 つ',
  '365 天 / 5 席位': '365 日 / 5 席',
  课程包: 'コースパック',
  'PPT + md 格式，可魔改、可二次创作': 'PPT + md 形式、自由にカスタマイズ・二次創作可能',
  官方认证: '公式認証',
  '通过认证后登上 map.seeed.cc 全球分布图': '認証を通過すると map.seeed.cc の全世界分布図に掲載',
  总部支持: '本部サポート',
  '社区经理对接、技术答疑、课程更新': 'コミュニティマネージャー対応、技術サポート、コース更新',
  'M1–M6 升级路径': 'M1–M6 アップグレードパス',
  '保证金租赁制，退出全退': '保証金レンタル制、退会時は全額返金',
  怎么赚钱: '収益の仕組み',
  '三条盈利线，对应三种身份': '3 つの収益ライン、3 つの役割に対応',
  开课收费: '講座開催で収益',
  '用 M0 课程在当地开班，学费 100% 归你。课程包现成、教具到位，你只需招生和上课。':
    'M0 コースで地元に講座を開き、受講料は 100% あなたのもの。コースパックもキットも準備済み、生徒募集と授業に集中できます。',
  总部派单: '本部からの案件配信',
  '柴火接到的培训 / 工作坊需求，派给当地先锋官执行。你出人出力，直接收服务费。':
    '柴火に寄せられた研修 / ワークショップの依頼を地元のパイオニアに配信。人と労力を提供し、サービス料を直接受け取れます。',
  教具销售佣金: 'キット販売コミッション',
  '向当地学校 / 机构推荐柴火教具，成交后拿佣金。':
    '地元の学校 / 機関に柴火キットを紹介し、成約後にコミッションを獲得。',
  '向当地学校 / 机构推荐教具，成交后拿佣金。':
    '地元の学校 / 機関にキットを紹介し、成約後にコミッションを獲得。',
  四步走: '4 ステップ',
  '从一场体验活动，到一座城市的锚点': 'ひとつの体験イベントから、街のアンカーへ',
  体验活动: '体験イベント',
  '在你的城市 / 场地办一场 AI 编程体验': 'あなたの街 / 会場で AI プログラミング体験を開催',
  培训认证: '研修・認証',
  '参加总部讲师培训与认证（线上即可开始）':
    '本部の講師研修と認証に参加（オンラインからでも開始可能）',
  '教具到位、正式开课': 'キット到着、正式開講',
  '认证通过后发放教具与账号，开第一期收费课':
    '認証通過後にキットとアカウントを発行し、第 1 期の有料講座を開講',
  验证升级: '検証とアップグレード',
  '跑通首期 → 追加支持 → 条件成熟可挂牌基地':
    '第 1 期を完走 → 追加サポート → 条件が整えば拠点へ昇格',
  认证流程: '認証フロー',
  拿到教具: 'キットを受け取る',
  完成一个项目: 'プロジェクトを 1 つ完成',
  录一段讲课视频: '授業動画を 1 本録画',
  总部审核: '本部審査',
  发证: '認証発行',
  '参照校园大使机制：每人定一个教具，做项目 + 录课，审核通过才发证。不是给了教具就是先锋官——要做出来、讲出来。':
    'キャンパスアンバサダー制度と同じ：各自キットを 1 つ選び、プロジェクト + 録画、審査通過で認証発行。キットをもらっただけでパイオニアにはなれません——作り、教えることが必要です。',
  '第一批名额多少？': '第 1 期の募集人数は？',
  '第一阶段 10 基地 + 20 先锋官，已有约 70 人意向报名，先到先评估。':
    '第 1 期は拠点 10 か所 + パイオニア 20 名、すでに約 70 名が参加意向、先着順で評価します。',
  '没选上怎么办？': '選ばれなかったら？',
  '第二期、第三期陆续开放；也可选择交保证金提前参与作为预备。第一批报名者优先纳入后续筛选。':
    '第 2 期・第 3 期は順次開放。保証金を納めれば予備として先行参加も可能。第 1 期の申込者はその後の選考で優先されます。',
  '需要交钱吗？': '費用はかかりますか？',
  'M0 教具赠送不回收；M1–M6 教具保证金租赁制，退出全退。具体金额以协议 v2.5 为准。':
    'M0 キットは贈呈で回収なし。M1–M6 キットは保証金レンタル制で、退会時は全額返金。金額の詳細は契約書 v2.5 に準じます。',
  '不懂编程能当先锋官吗？': 'プログラミングが分からなくてもパイオニアになれますか？',
  '可以。Codecraft 沙盒零安装、浏览器即用，AI 帮你写代码。任何有上课经验的老师，跑一遍流程就能上课。':
    'なれます。Codecraft サンドボックスはインストール不要、ブラウザですぐ使え、AI がコードを書きます。授業経験のある先生なら、流れを一度試せばそのまま授業ができます。',
  '先锋官和基地什么关系？': 'パイオニアと拠点の関係は？',
  '每个基地必须先有先锋官。先锋官可以是基地员工，也可以是合作制。先锋官可挂靠多个基地，基地权益是基地内先锋官共用的。':
    '各拠点には必ず先にパイオニアが必要です。パイオニアは拠点スタッフでも提携パートナーでも構いません。複数の拠点に所属でき、拠点の特典はその拠点内のパイオニア全員で共有されます。',
  '把这个计划，带回你的城市': 'この計画を、あなたの街へ',
  '第一阶段 10 基地 + 20 先锋官，先到先评估。填写申请表，社区经理将在 3 个工作日内联系你。':
    '第 1 期は拠点 10 か所 + パイオニア 20 名、先着順で評価。申込フォームにご記入いただければ、コミュニティマネージャーが 3 営業日以内にご連絡します。',
  联系我们: 'お問い合わせ',
  '或联系社区经理（会后分配专属对接人）':
    'またはコミュニティマネージャーへ（説明会後に専属担当者を割り当てます）',
  什么是基地: '拠点とは',
  '基地是柴火认证的城市级实体空间节点。':
    '拠点とは、柴火認証を受けた都市レベルの実体スペースノードです。',
  '准入标准（2 项核心）': '参入基準（コア 2 項目）',
  城市里看得见的柴火: '街で見える柴火',
  固定场地: '固定会場',
  可承接活动与课程: 'イベントと講座を開催可能',
  持续运营: '継続運営',
  '有专人负责、有运营计划': '専任担当者と運営計画があること',
  加分项: '加点項目',
  '科技馆 / 高校 Fab Lab 等公共教育空间': '科学館 / 大学の Fab Lab などの公共教育スペース',
  '已有创客 / STEAM 教育基础': 'すでにメーカー / STEAM 教育の基盤がある',
  '基地车巡游已触达、双方已建立信任': '基地車キャラバンで訪問済み、相互の信頼関係が構築されている',
  基地权益: '拠点の特典',
  '同一套支持体系，个人与空间各取所需': '同じサポート体制で、個人もスペースも必要なものを選択',
  权益: '特典',
  '先锋官（个人）': 'パイオニア（個人）',
  '基地（空间）': '拠点（スペース）',
  'M0 教具': 'M0 キット',
  '5 套（赠送不回收）': '5 セット（贈呈・回収なし）',
  '10 套（基地内共用）': '10 セット（拠点内で共用）',
  'CodeCraft 账号': 'CodeCraft アカウント',
  '5 个（365 天 / 5 席位）': '5 つ（365 日 / 5 席）',
  '10 个': '10 つ',
  登上地图: '地図に掲載',
  '牌匾 + 区域优先权': 'プレート + エリア優先権',
  开课获利: '講座で収益',
  '学费 100% 归个人': '受講料は 100% 個人のもの',
  '同 + 派单服务费': '同 + 案件配信サービス料',
  额外盈利线: '追加の収益ライン',
  '派单 / 销售佣金': '案件配信 / 販売コミッション',
  '佣金 / 派单 / 跨基地分佣 / 公益捐赠': 'コミッション / 案件配信 / 拠点間分与 / 公益寄付',
  升级路径: 'アップグレードパス',
  '→ 基地': '→ 拠点',
  '→ 区域代理枢纽': '→ エリア代理ハブ',
  基地怎么赚钱: '拠点の収益の仕組み',
  '四条盈利线，把场地变成营收来源': '4 つの収益ラインで、会場を収益源に変える',
  '基地内开班，学费归基地运营方。': '拠点内で講座を開き、受講料は拠点運営側の収益に。',
  '柴火接到的当地培训 / 工作坊需求，派给基地执行，直接收服务费。':
    '柴火に寄せられた地元の研修 / ワークショップ依頼を拠点が実施し、サービス料を直接受け取れます。',
  跨基地分佣: '拠点間分与',
  '多基地协作项目，按贡献分佣。': '複数拠点の協働プロジェクトで、貢献度に応じて分与。',
  '另：公益捐赠渠道（适合公共教育空间）。': 'また：公益寄付のチャネル（公共教育スペースに最適）。',
  基地与先锋官关系: '拠点とパイオニアの関係',
  '没有先锋官，就没有基地；有了基地，先锋官才有自己的主场。':
    'パイオニアがいなければ拠点はなく、拠点があってこそパイオニアは自分のホームを持てます。',
  必须先有: 'まず必要',
  互为支撑: '相互サポート',
  个人: '個人',
  '可挂靠多个基地，也可独立运营': '複数の拠点に所属可能、独立運営も可能',
  空间: 'スペース',
  '权益基地内共用，可有多个先锋官': '特典は拠点内で共有、複数のパイオニアを置くことも可能',
  '先锋官可以是基地员工，也可以是合作制':
    'パイオニアは拠点スタッフでも提携パートナーでも構いません',
  '一个先锋官可挂靠多个基地（如南山基地 + 龙岗基地）':
    '1 人のパイオニアは複数の拠点に所属可能（例：南山拠点 + 龍崗拠点）',
  '基地权益（教具、账号等）是基地内所有先锋官共用的':
    '拠点の特典（キット、アカウントなど）は拠点内の全パイオニアで共有されます',
  区域代理枢纽: 'エリア代理ハブ',
  '条件成熟时，基地可升级为区域代理枢纽，负责区域内先锋官 / 基地的招募、培训与协调。':
    '条件が整えば、拠点はエリア代理ハブにアップグレードでき、エリア内のパイオニア / 拠点の募集・研修・調整を担当します。',
  '基地必须有先锋官吗？': '拠点にはパイオニアが必須ですか？',
  '是的。每个基地必须先有至少一名先锋官。先锋官可以是基地员工，也可以是外部合作。':
    'はい。各拠点には必ず先に少なくとも 1 名のパイオニアが必要です。スタッフでも外部パートナーでも構いません。',
  '基地教具和先锋官教具是一回事吗？': '拠点のキットとパイオニアのキットは同じものですか？',
  '基地获得 10 套教具（基地内共用），先锋官个人获得 5 套。如果先锋官挂靠基地，共用基地教具，不重复领取。':
    '拠点はキット 10 セット（拠点内共用）、パイオニア個人は 5 セットを獲得。パイオニアが拠点に所属する場合は拠点のキットを共用し、重複して受け取りません。',
  '已经有空间但没做过创客教育，能申请基地吗？':
    'スペースはあるがメーカー教育の経験がない場合、拠点に応募できますか？',
  '可以。核心标准是固定场地 + 持续运营意愿。柴火提供课程、教具和培训，帮你跑通第一期。':
    'できます。コア基準は固定会場 + 継続運営の意志です。柴火がコース・キット・研修を提供し、第 1 期の完走をサポートします。',
  '把城市的锚点，和柴火一起建': '街のアンカーを、柴火と一緒に築こう',
  '核心标准只有两条：固定场地 + 持续运营意愿。填写申请表，社区经理将在 3 个工作日内联系你。':
    'コア基準はたった 2 つ：固定会場 + 継続運営の意志。申込フォームにご記入いただければ、コミュニティマネージャーが 3 営業日以内にご連絡します。',
};

const zhToEs: Record<string, string> = {
  柴火生态: 'Ecosistema Chaihuo',
  柴火全球创客生态分布图: 'Mapa global del ecosistema maker de Chaihuo',
  '先锋官与基地正在全国及全球铺开。':
    'Los Pioneros y las Bases se están expandiendo por todo el país y el mundo.',
  '在地图上找到你身边的柴火节点，': 'Encuentra en el mapa el nodo de Chaihuo más cercano a ti,',
  '或者——成为下一个。': 'o conviértete en el siguiente.',
  查看分布图: 'Ver el Mapa',
  我要加入: 'Quiero Unirme',
  先锋官与基地计划: 'Programa de Pioneros y Bases',
  '把 AI 创客教育带到你的城市——柴火给你课程、教具和认证，你做本地的那根火柴。':
    'Lleva la educación maker con IA a tu ciudad: Chaihuo te da cursos, kits y certificación; tú eres la chispa local.',
  先锋官: 'Pionero',
  基地: 'Base',
  '在你的城市，做 AI 时代的点火人。': 'En tu ciudad, sé la chispa de la era de la IA.',
  '5 套 M0 教具赠送': '5 kits M0 gratis',
  '学费 100% 归你': 'El 100% de la matrícula es tuyo',
  官方认证登上地图: 'Certificación oficial en el mapa',
  了解先锋官: 'Conoce a los Pioneros',
  '城市里看得见的柴火。': 'Chaihuo visible en tu ciudad.',
  '10 套教具共用': '10 kits compartidos',
  承接总部派单: 'Recibe pedidos de la sede',
  区域优先权: 'Prioridad regional',
  了解基地: 'Conoce las Bases',
  先锋官计划: 'Programa de Pioneros',
  点火人: 'la chispa',
  基地计划: 'Programa de Bases',
  看得见的柴火: 'Chaihuo que se ve',
  '在你的城市，做 AI 时代的点火人': 'En tu ciudad, sé la chispa de la era de la IA',
  '懂技术、能教技术，或者不懂技术但能链接本地网络——柴火给你课程、教具和认证，你把 AI 创客教育带到你的城市。':
    'Domines o no la tecnología, si enseñas o conectas tu red local, Chaihuo te da cursos, kits y certificación para llevar la educación maker con IA a tu ciudad.',
  立即申请: 'Solicitar ahora',
  先了解基地: 'Conoce las Bases primero',
  先了解先锋官: 'Conoce a los Pioneros primero',
  '有固定场地、有持续运营意愿——柴火给你教具、课程、品牌背书和派单流量，你做城市里 AI 创客教育的锚点。':
    'Con un espacio fijo y ganas de operar a largo plazo, Chaihuo te da kits, cursos, marca y flujo de pedidos: tú eres el ancla maker de IA de tu ciudad.',
  什么是先锋官: '¿Qué es un Pionero?',
  '先锋官是柴火认证的在地的技术传播者 + 技术服务商。':
    'Un Pionero es un divulgador tecnológico y proveedor de servicios certificado por Chaihuo.',
  两类人都可以: 'Dos perfiles funcionan',
  技术型: 'Perfil técnico',
  '有技术背景，想用创客技能开展教育 / 服务':
    'Con perfil técnico: impartir educación / servicios con habilidades maker',
  链接型: 'Perfil conector',
  '有教育 / 社区资源，想引入创客课程但不一定亲自教':
    'Con recursos educativos / comunitarios: traer cursos maker sin enseñar personalmente',
  '每个基地必须先有先锋官；先锋官也可独立运营，不挂靠基地。':
    'Toda Base debe tener primero un Pionero; el Pionero puede operar solo, sin adscribirse a una Base.',
  你能得到什么: 'Qué obtienes',
  '从教具、账号到课程包与认证，起步所需全都配齐':
    'De kits y cuentas a paquetes de cursos y certificación: todo para empezar',
  'M0 教具 5 套': '5 kits M0',
  '赠送，不回收': 'Regalo, no se recuperan',
  'CodeCraft 账号 5 个': '5 cuentas de CodeCraft',
  '365 天 / 5 席位': '365 días / 5 plazas',
  课程包: 'Paquete de cursos',
  'PPT + md 格式，可魔改、可二次创作': 'En formato PPT + md: personalizable y editable',
  官方认证: 'Certificación oficial',
  '通过认证后登上 map.seeed.cc 全球分布图':
    'Certifícate y aparece en el mapa global de map.seeed.cc',
  总部支持: 'Apoyo de la sede',
  '社区经理对接、技术答疑、课程更新':
    'Community manager, soporte técnico y actualización de cursos',
  'M1–M6 升级路径': 'Ruta de ascenso M1–M6',
  '保证金租赁制，退出全退': 'Alquiler con depósito; reembolso total al salir',
  怎么赚钱: 'Cómo ganar dinero',
  '三条盈利线，对应三种身份': 'Tres líneas de ingresos para tres roles',
  开课收费: 'Ingresos por cursos',
  '用 M0 课程在当地开班，学费 100% 归你。课程包现成、教具到位，你只需招生和上课。':
    'Imparte cursos M0 en tu ciudad: el 100% de la matrícula es tuyo. Paquete listo y kits a mano; solo capta alumnos y enseña.',
  总部派单: 'Pedidos de la sede',
  '柴火接到的培训 / 工作坊需求，派给当地先锋官执行。你出人出力，直接收服务费。':
    'Chaihuo deriva a los Pioneros locales las demandas de formación / talleres; tú pones el trabajo y cobras directo.',
  教具销售佣金: 'Comisión por venta de kits',
  '向当地学校 / 机构推荐柴火教具，成交后拿佣金。':
    'Recomienda kits de Chaihuo a escuelas e instituciones locales y gana comisión por venta.',
  '向当地学校 / 机构推荐教具，成交后拿佣金。':
    'Recomienda kits a escuelas e instituciones locales y gana comisión por venta.',
  四步走: 'Cuatro pasos',
  '从一场体验活动，到一座城市的锚点': 'De un evento de experiencia al ancla de una ciudad',
  体验活动: 'Evento de experiencia',
  '在你的城市 / 场地办一场 AI 编程体验':
    'Organiza una experiencia de programación con IA en tu ciudad / espacio',
  培训认证: 'Formación y certificación',
  '参加总部讲师培训与认证（线上即可开始）':
    'Formación y certificación de la sede (puedes empezar en línea)',
  '教具到位、正式开课': 'Kits entregados, clases en marcha',
  '认证通过后发放教具与账号，开第一期收费课':
    'Tras certificarte recibes kits y cuentas: lanza tu primera clase de pago',
  验证升级: 'Valida y asciende',
  '跑通首期 → 追加支持 → 条件成熟可挂牌基地':
    'Completa la primera cohorte → recibe más apoyo → califica como Base',
  认证流程: 'Proceso de certificación',
  拿到教具: 'Recibir los kits',
  完成一个项目: 'Completar un proyecto',
  录一段讲课视频: 'Grabar un video de clase',
  总部审核: 'Revisión de la sede',
  发证: 'Obtener la certificación',
  '参照校园大使机制：每人定一个教具，做项目 + 录课，审核通过才发证。不是给了教具就是先锋官——要做出来、讲出来。':
    'Como los embajadores de campus: cada uno elige un kit, hace un proyecto y graba una clase; la certificación llega tras la revisión. Los kits no te hacen Pionero: hay que crearlo y enseñarlo.',
  '第一批名额多少？': '¿Cuántas plazas hay en el primer grupo?',
  '第一阶段 10 基地 + 20 先锋官，已有约 70 人意向报名，先到先评估。':
    'La fase 1 incluye 10 bases + 20 pioneros; unas 70 personas ya mostraron interés: primero en llegar, primero en evaluarse.',
  '没选上怎么办？': '¿Y si no me seleccionan?',
  '第二期、第三期陆续开放；也可选择交保证金提前参与作为预备。第一批报名者优先纳入后续筛选。':
    'Las fases 2 y 3 se abrirán luego; también puedes adelantarte como reserva con un depósito. El primer grupo tiene prioridad en las siguientes rondas.',
  '需要交钱吗？': '¿Hay que pagar?',
  'M0 教具赠送不回收；M1–M6 教具保证金租赁制，退出全退。具体金额以协议 v2.5 为准。':
    'Los kits M0 son un regalo; los M1–M6 se alquilan con depósito, reembolsable al salir. Los montos siguen el acuerdo v2.5.',
  '不懂编程能当先锋官吗？': '¿Puedo ser Pionero sin saber programar?',
  '可以。Codecraft 沙盒零安装、浏览器即用，AI 帮你写代码。任何有上课经验的老师，跑一遍流程就能上课。':
    'Sí. El sandbox de Codecraft no requiere instalación: corre en el navegador y la IA escribe el código. Cualquier docente puede empezar a enseñar tras probar el flujo.',
  '先锋官和基地什么关系？': '¿Qué relación hay entre Pioneros y Bases?',
  '每个基地必须先有先锋官。先锋官可以是基地员工，也可以是合作制。先锋官可挂靠多个基地，基地权益是基地内先锋官共用的。':
    'Toda Base debe tener primero un Pionero: empleado o socio independiente, adscrito a varias Bases. Los beneficios de la Base se comparten entre sus Pioneros.',
  '把这个计划，带回你的城市': 'Lleva este programa a tu ciudad',
  '第一阶段 10 基地 + 20 先锋官，先到先评估。填写申请表，社区经理将在 3 个工作日内联系你。':
    'La fase 1 cubre 10 bases + 20 pioneros: primero en llegar, primero en evaluarse. Completa la solicitud y un community manager te contactará en 3 días hábiles.',
  联系我们: 'Contáctanos',
  '或联系社区经理（会后分配专属对接人）':
    'O contacta a tu community manager (te asignan un enlace exclusivo tras la reunión)',
  什么是基地: '¿Qué es una Base?',
  '基地是柴火认证的城市级实体空间节点。':
    'Una Base es un nodo físico a nivel ciudad certificado por Chaihuo.',
  '准入标准（2 项核心）': 'Criterios de admisión (2 requisitos clave)',
  城市里看得见的柴火: 'Chaihuo visible en la ciudad',
  固定场地: 'Espacio fijo',
  可承接活动与课程: 'Capaz de albergar eventos y cursos',
  持续运营: 'Operación continua',
  '有专人负责、有运营计划': 'Una persona responsable y un plan de operación',
  加分项: 'Puntos extra',
  '科技馆 / 高校 Fab Lab 等公共教育空间':
    'Espacios públicos como museos de ciencia / Fab Labs universitarios',
  '已有创客 / STEAM 教育基础': 'Con base previa en educación maker / STEAM',
  '基地车巡游已触达、双方已建立信任':
    'Contactados por la gira móvil de Chaihuo, con confianza mutua establecida',
  基地权益: 'Beneficios de la Base',
  '同一套支持体系，个人与空间各取所需':
    'Un mismo sistema de apoyo, a medida para personas y espacios',
  权益: 'Beneficios',
  '先锋官（个人）': 'Pionero (individual)',
  '基地（空间）': 'Base (espacio)',
  'M0 教具': 'Kits M0',
  '5 套（赠送不回收）': '5 (regalo, no se recuperan)',
  '10 套（基地内共用）': '10 (compartidos en la Base)',
  'CodeCraft 账号': 'Cuentas de CodeCraft',
  '5 个（365 天 / 5 席位）': '5 (365 días / 5 plazas)',
  '10 个': '10',
  登上地图: 'En el mapa',
  '牌匾 + 区域优先权': 'Placa + prioridad regional',
  开课获利: 'Ganancias por cursos',
  '学费 100% 归个人': 'El 100% de la matrícula para el individuo',
  '同 + 派单服务费': 'Igual + tarifa por pedidos',
  额外盈利线: 'Líneas de ingreso extra',
  '派单 / 销售佣金': 'Pedidos / comisión por ventas',
  '佣金 / 派单 / 跨基地分佣 / 公益捐赠': 'Comisión / pedidos / reparto entre Bases / donaciones',
  升级路径: 'Ruta de ascenso',
  '→ 基地': '→ Base',
  '→ 区域代理枢纽': '→ Hub regional',
  基地怎么赚钱: 'Cómo gana dinero una Base',
  '四条盈利线，把场地变成营收来源':
    'Cuatro líneas de ingresos que convierten tu espacio en ganancias',
  '基地内开班，学费归基地运营方。': 'Imparte clases en la Base: la matrícula es del operador.',
  '柴火接到的当地培训 / 工作坊需求，派给基地执行，直接收服务费。':
    'Chaihuo deriva a la Base las demandas locales de formación / talleres; ejecuta y cobra directo.',
  跨基地分佣: 'Reparto entre Bases',
  '多基地协作项目，按贡献分佣。': 'En proyectos entre Bases, el reparto sigue la contribución.',
  '另：公益捐赠渠道（适合公共教育空间）。':
    'Además: canal de donaciones (ideal para espacios educativos públicos).',
  基地与先锋官关系: 'Relación entre Bases y Pioneros',
  '没有先锋官，就没有基地；有了基地，先锋官才有自己的主场。':
    'Sin Pioneros no hay Base; con una, los Pioneros tienen su propio terreno.',
  必须先有: 'Se requiere primero',
  互为支撑: 'Se apoyan mutuamente',
  个人: 'Individual',
  '可挂靠多个基地，也可独立运营':
    'Puede adscribirse a varias Bases u operar de forma independiente',
  空间: 'Espacio',
  '权益基地内共用，可有多个先锋官':
    'Beneficios compartidos en la Base; puede tener varios Pioneros',
  '先锋官可以是基地员工，也可以是合作制': 'El Pionero puede ser empleado de la Base o un socio',
  '一个先锋官可挂靠多个基地（如南山基地 + 龙岗基地）':
    'Un Pionero puede adscribirse a varias Bases (p. ej., la base de Nanshan + la de Longgang)',
  '基地权益（教具、账号等）是基地内所有先锋官共用的':
    'Los beneficios de la Base (kits, cuentas, etc.) son compartidos por todos sus Pioneros',
  区域代理枢纽: 'Hub regional',
  '条件成熟时，基地可升级为区域代理枢纽，负责区域内先锋官 / 基地的招募、培训与协调。':
    'Cuando maduren las condiciones, la Base puede ascender a hub regional y coordinar el reclutamiento y la formación de Pioneros / Bases de su región.',
  '基地必须有先锋官吗？': '¿Una Base debe tener un Pionero?',
  '是的。每个基地必须先有至少一名先锋官。先锋官可以是基地员工，也可以是外部合作。':
    'Sí. Toda Base necesita al menos un Pionero: empleado o socio externo.',
  '基地教具和先锋官教具是一回事吗？': '¿Los kits de la Base y del Pionero son lo mismo?',
  '基地获得 10 套教具（基地内共用），先锋官个人获得 5 套。如果先锋官挂靠基地，共用基地教具，不重复领取。':
    'La Base recibe 10 kits (compartidos) y el Pionero 5. Si se adscribe a la Base, comparte sus kits en lugar de recibir otros.',
  '已经有空间但没做过创客教育，能申请基地吗？':
    '¿Puedo solicitar ser Base si tengo un espacio pero no experiencia en educación maker?',
  '可以。核心标准是固定场地 + 持续运营意愿。柴火提供课程、教具和培训，帮你跑通第一期。':
    'Sí. Clave: un espacio fijo + voluntad de operar a largo plazo. Chaihuo aporta cursos, kits y formación para tu primera cohorte.',
  '把城市的锚点，和柴火一起建': 'Construye el ancla de tu ciudad junto a Chaihuo',
  '核心标准只有两条：固定场地 + 持续运营意愿。填写申请表，社区经理将在 3 个工作日内联系你。':
    'Solo dos criterios: espacio fijo + voluntad de operar a largo plazo. Completa la solicitud y un community manager te contactará en 3 días hábiles.',
};

const zhToPt: Record<string, string> = {
  柴火生态: 'Ecossistema Chaihuo',
  柴火全球创客生态分布图: 'Mapa Global do Ecossistema Maker Chaihuo',
  '先锋官与基地正在全国及全球铺开。':
    'Pioneiros e bases estão se espalhando pelo país e pelo mundo.',
  '在地图上找到你身边的柴火节点，': 'Encontre no mapa o nó Chaihuo mais próximo de você,',
  '或者——成为下一个。': 'ou torne-se o próximo.',
  查看分布图: 'Ver o Mapa',
  我要加入: 'Quero Entrar',

  先锋官与基地计划: 'Programa de Pioneiros e Bases',
  '把 AI 创客教育带到你的城市——柴火给你课程、教具和认证，你做本地的那根火柴。':
    'Leve a educação maker com IA para a sua cidade — a Chaihuo fornece cursos, kits e certificação; você acende a faísca local.',
  先锋官: 'Pioneiro',
  基地: 'Base',
  '在你的城市，做 AI 时代的点火人。': 'Na sua cidade, seja quem acende a faísca da era da IA.',
  '5 套 M0 教具赠送': '5 kits M0 grátis',
  '学费 100% 归你': '100% da mensalidade é sua',
  官方认证登上地图: 'Certificação oficial no mapa',
  了解先锋官: 'Conhecer os Pioneiros',
  '城市里看得见的柴火。': 'A Chaihuo que se vê na cidade.',
  '10 套教具共用': '10 kits compartilhados',
  承接总部派单: 'Recebe demandas da central',
  区域优先权: 'Prioridade regional',
  了解基地: 'Conhecer as Bases',

  先锋官计划: 'Programa de Pioneiros',
  点火人: 'a faísca',
  基地计划: 'Programa de Bases',
  看得见的柴火: 'A Chaihuo Que Você Vê',
  '在你的城市，做 AI 时代的点火人': 'Na sua cidade, seja quem acende a faísca da era da IA',
  '懂技术、能教技术，或者不懂技术但能链接本地网络——柴火给你课程、教具和认证，你把 AI 创客教育带到你的城市。':
    'Entenda de tecnologia, saiba ensinar ou apenas conecte redes locais — a Chaihuo fornece cursos, kits e certificação; você leva a educação maker com IA para a sua cidade.',
  立即申请: 'Inscreva-se Agora',
  先了解基地: 'Conheça as Bases Primeiro',
  先了解先锋官: 'Conheça os Pioneiros Primeiro',
  '有固定场地、有持续运营意愿——柴火给你教具、课程、品牌背书和派单流量，你做城市里 AI 创客教育的锚点。':
    'Com espaço fixo e vontade de operação contínua — a Chaihuo oferece kits, cursos, respaldo da marca e fluxo de demandas; você se torna a âncora da educação maker com IA na cidade.',

  什么是先锋官: 'O Que É um Pioneiro',
  '先锋官是柴火认证的在地的技术传播者 + 技术服务商。':
    'Um Pioneiro é um divulgador de tecnologia e provedor de serviços certificado pela Chaihuo.',
  两类人都可以: 'Os Dois Perfis Funcionam',
  技术型: 'Técnico',
  '有技术背景，想用创客技能开展教育 / 服务':
    'Tem formação técnica e quer atuar com educação / serviços usando habilidades maker',
  链接型: 'Conector',
  '有教育 / 社区资源，想引入创客课程但不一定亲自教':
    'Tem recursos de educação / comunidade e quer trazer cursos maker sem necessariamente dar aulas',
  '每个基地必须先有先锋官；先锋官也可独立运营，不挂靠基地。':
    'Toda base precisa primeiro ter um Pioneiro; um Pioneiro também pode operar de forma independente, sem vínculo com uma base.',

  你能得到什么: 'O Que Você Recebe',
  '从教具、账号到课程包与认证，起步所需全都配齐':
    'De kits e contas a pacotes de cursos e certificação — tudo o que você precisa para começar',
  'M0 教具 5 套': '5 kits M0',
  '赠送，不回收': 'Grátis, sem devolução',
  'CodeCraft 账号 5 个': '5 contas CodeCraft',
  '365 天 / 5 席位': '365 dias / 5 vagas',
  课程包: 'Pacote de Cursos',
  'PPT + md 格式，可魔改、可二次创作': 'Formatos PPT + md — fáceis de adaptar e remixar',
  官方认证: 'Certificação Oficial',
  '通过认证后登上 map.seeed.cc 全球分布图':
    'Após a certificação, apareça no mapa global do map.seeed.cc',
  总部支持: 'Suporte da Central',
  '社区经理对接、技术答疑、课程更新':
    'Gerente de comunidade, suporte técnico e atualizações de cursos',
  'M1–M6 升级路径': 'Trilha de upgrade M1–M6',
  '保证金租赁制，退出全退': 'Locação com caução, reembolso total ao sair',

  怎么赚钱: 'Como Você Ganha',
  '三条盈利线，对应三种身份': 'Três linhas de receita para três papéis',
  开课收费: 'Mensalidades de Cursos',
  '用 M0 课程在当地开班，学费 100% 归你。课程包现成、教具到位，你只需招生和上课。':
    'Use os cursos M0 para abrir turmas locais — 100% da mensalidade é sua. O pacote de cursos está pronto e os kits entregues; você só cuida das matrículas e das aulas.',
  总部派单: 'Demandas da Central',
  '柴火接到的培训 / 工作坊需求，派给当地先锋官执行。你出人出力，直接收服务费。':
    'A Chaihuo repassa as demandas locais de treinamento / workshops ao Pioneiro. Você fornece a equipe e o esforço e recebe o valor do serviço diretamente.',
  教具销售佣金: 'Comissão de Vendas de Kits',
  '向当地学校 / 机构推荐柴火教具，成交后拿佣金。':
    'Indique kits Chaihuo a escolas / instituições locais e ganhe comissão em cada venda fechada.',
  '向当地学校 / 机构推荐教具，成交后拿佣金。':
    'Indique kits a escolas / instituições locais e ganhe comissão em cada venda fechada.',

  四步走: 'Quatro Passos',
  '从一场体验活动，到一座城市的锚点': 'De um evento de experiência a uma âncora na cidade',
  体验活动: 'Evento de Experiência',
  '在你的城市 / 场地办一场 AI 编程体验':
    'Realize uma experiência de programação com IA na sua cidade / espaço',
  培训认证: 'Treinamento e Certificação',
  '参加总部讲师培训与认证（线上即可开始）':
    'Participe do treinamento e da certificação de instrutores da central (pode começar online)',
  '教具到位、正式开课': 'Kits Entregues, Aulas Começam',
  '认证通过后发放教具与账号，开第一期收费课':
    'Após a certificação, kits e contas são liberados — lance sua primeira turma paga',
  验证升级: 'Valide e Evolua',
  '跑通首期 → 追加支持 → 条件成熟可挂牌基地':
    'Conclua a primeira turma → ganhe mais apoio → torne-se uma base quando estiver pronto',

  认证流程: 'Processo de Certificação',
  拿到教具: 'Receber os Kits',
  完成一个项目: 'Concluir um Projeto',
  录一段讲课视频: 'Gravar um Vídeo de Aula',
  总部审核: 'Revisão da Central',
  发证: 'Receber a Certificação',
  '参照校园大使机制：每人定一个教具，做项目 + 录课，审核通过才发证。不是给了教具就是先锋官——要做出来、讲出来。':
    'Inspirado no mecanismo de embaixadores de campus: cada pessoa escolhe um kit, faz um projeto e grava uma aula — a certificação sai só após a revisão. Ter kits não torna você um Pioneiro — é preciso construir e ensinar.',

  '第一批名额多少？': 'Quantas vagas há na primeira turma?',
  '第一阶段 10 基地 + 20 先锋官，已有约 70 人意向报名，先到先评估。':
    'A fase 1 tem 10 bases + 20 pioneiros; cerca de 70 pessoas já demonstraram interesse — quem chega primeiro é avaliado primeiro.',
  '没选上怎么办？': 'E se eu não for selecionado?',
  '第二期、第三期陆续开放；也可选择交保证金提前参与作为预备。第一批报名者优先纳入后续筛选。':
    'As fases 2 e 3 serão abertas em breve; você também pode participar antes como reserva com caução. Quem se inscreveu no primeiro lote tem prioridade nas seleções seguintes.',
  '需要交钱吗？': 'Preciso pagar alguma coisa?',
  'M0 教具赠送不回收；M1–M6 教具保证金租赁制，退出全退。具体金额以协议 v2.5 为准。':
    'Os kits M0 são grátis e não são devolvidos; os kits M1–M6 usam locação com caução, com reembolso total ao sair. Os valores exatos seguem o acordo v2.5.',
  '不懂编程能当先锋官吗？': 'Posso ser Pioneiro sem saber programar?',
  '可以。Codecraft 沙盒零安装、浏览器即用，AI 帮你写代码。任何有上课经验的老师，跑一遍流程就能上课。':
    'Sim. O sandbox Codecraft não exige instalação — roda no navegador e a IA escreve o código. Qualquer professor com experiência em sala de aula segue o fluxo e começa a ensinar.',
  '先锋官和基地什么关系？': 'Qual é a relação entre Pioneiros e Bases?',
  '每个基地必须先有先锋官。先锋官可以是基地员工，也可以是合作制。先锋官可挂靠多个基地，基地权益是基地内先锋官共用的。':
    'Toda base precisa primeiro ter um Pioneiro. O Pioneiro pode ser funcionário da base ou parceiro e pode se vincular a várias bases. Os benefícios da base são compartilhados por todos os Pioneiros dela.',
  '把这个计划，带回你的城市': 'Leve Este Programa para a Sua Cidade',
  '第一阶段 10 基地 + 20 先锋官，先到先评估。填写申请表，社区经理将在 3 个工作日内联系你。':
    'A fase 1 tem 10 bases + 20 pioneiros — quem chega primeiro é avaliado primeiro. Preencha o formulário e um gerente de comunidade entrará em contato em até 3 dias úteis.',
  联系我们: 'Fale Conosco',
  '或联系社区经理（会后分配专属对接人）':
    'Ou fale com o gerente de comunidade (um contato dedicado é designado após a reunião)',

  什么是基地: 'O Que É uma Base',
  '基地是柴火认证的城市级实体空间节点。':
    'Uma Base é um nó de espaço físico certificado pela Chaihuo em nível de cidade.',
  '准入标准（2 项核心）': 'Critérios de Admissão (2 Requisitos Essenciais)',
  城市里看得见的柴火: 'A Chaihuo que se vê na cidade',
  固定场地: 'Espaço Fixo',
  可承接活动与课程: 'Pode sediar eventos e cursos',
  持续运营: 'Operação Contínua',
  '有专人负责、有运营计划': 'Com uma pessoa responsável e um plano de operação',
  加分项: 'Pontos Extras',
  '科技馆 / 高校 Fab Lab 等公共教育空间':
    'Espaços públicos de educação, como museus de ciência / Fab Labs universitários',
  '已有创客 / STEAM 教育基础': 'Com base em educação maker / STEAM',
  '基地车巡游已触达、双方已建立信任':
    'Já alcançado pela turnê da base móvel, com confiança mútua estabelecida',

  基地权益: 'Benefícios da Base',
  '同一套支持体系，个人与空间各取所需':
    'Um mesmo sistema de apoio, adaptado para pessoas e espaços',
  权益: 'Benefício',
  '先锋官（个人）': 'Pioneiro (Pessoa)',
  '基地（空间）': 'Base (Espaço)',
  'M0 教具': 'Kits M0',
  '5 套（赠送不回收）': '5 (grátis, sem devolução)',
  '10 套（基地内共用）': '10 (compartilhados na base)',
  'CodeCraft 账号': 'Contas CodeCraft',
  '5 个（365 天 / 5 席位）': '5 (365 dias / 5 vagas)',
  '10 个': '10',
  登上地图: 'No mapa',
  '牌匾 + 区域优先权': 'Placa + prioridade regional',
  开课获利: 'Lucro com Cursos',
  '学费 100% 归个人': '100% da mensalidade para a pessoa',
  '同 + 派单服务费': 'O mesmo + taxas de demandas',
  额外盈利线: 'Linhas Extras de Receita',
  '派单 / 销售佣金': 'Demandas / comissão de vendas',
  '佣金 / 派单 / 跨基地分佣 / 公益捐赠':
    'Comissão / demandas / divisão entre bases / doações sociais',
  升级路径: 'Trilha de Upgrade',
  '→ 基地': '→ Base',
  '→ 区域代理枢纽': '→ Hub Regional',

  基地怎么赚钱: 'Como uma Base Ganha',
  '四条盈利线，把场地变成营收来源':
    'Quatro linhas de receita que transformam o espaço em fonte de renda',
  '基地内开班，学费归基地运营方。':
    'Abra turmas na base — a mensalidade vai para quem opera a base.',
  '柴火接到的当地培训 / 工作坊需求，派给基地执行，直接收服务费。':
    'A Chaihuo repassa as demandas locais de treinamento / workshops para a sua base — você executa e recebe o valor do serviço diretamente.',
  跨基地分佣: 'Divisão Entre Bases',
  '多基地协作项目，按贡献分佣。':
    'Projetos colaborativos entre várias bases dividem os ganhos pela contribuição de cada uma.',
  '另：公益捐赠渠道（适合公共教育空间）。':
    'Além disso: um canal de doações sociais (ideal para espaços públicos de educação).',

  基地与先锋官关系: 'Como Bases e Pioneiros Se Relacionam',
  '没有先锋官，就没有基地；有了基地，先锋官才有自己的主场。':
    'Sem Pioneiros, não há base; com uma base, os Pioneiros têm seu próprio território.',
  必须先有: 'Exige Primeiro',
  互为支撑: 'Apoio Mútuo',
  个人: 'Pessoa',
  '可挂靠多个基地，也可独立运营': 'Pode se vincular a várias bases ou operar de forma independente',
  空间: 'Espaço',
  '权益基地内共用，可有多个先锋官': 'Benefícios compartilhados na base; pode ter vários Pioneiros',
  '先锋官可以是基地员工，也可以是合作制':
    'Um Pioneiro pode ser funcionário da base ou parceiro independente',
  '一个先锋官可挂靠多个基地（如南山基地 + 龙岗基地）':
    'Um Pioneiro pode se vincular a várias bases (ex.: base de Nanshan + base de Longgang)',
  '基地权益（教具、账号等）是基地内所有先锋官共用的':
    'Os benefícios da base (kits, contas etc.) são compartilhados por todos os Pioneiros da base',

  区域代理枢纽: 'Hub Regional',
  '条件成熟时，基地可升级为区域代理枢纽，负责区域内先锋官 / 基地的招募、培训与协调。':
    'Quando as condições amadurecerem, a base pode evoluir para um hub regional que recruta, treina e coordena Pioneiros / bases na região.',

  '基地必须有先锋官吗？': 'Uma base precisa ter um Pioneiro?',
  '是的。每个基地必须先有至少一名先锋官。先锋官可以是基地员工，也可以是外部合作。':
    'Sim. Toda base precisa primeiro ter pelo menos um Pioneiro — pode ser um funcionário ou um parceiro externo.',
  '基地教具和先锋官教具是一回事吗？': 'Os kits da base e os kits do Pioneiro são os mesmos?',
  '基地获得 10 套教具（基地内共用），先锋官个人获得 5 套。如果先锋官挂靠基地，共用基地教具，不重复领取。':
    'A base recebe 10 kits (compartilhados na base) e o Pioneiro recebe 5. Se o Pioneiro se vincula a uma base, ele usa os kits da base em vez de receber outros.',
  '已经有空间但没做过创客教育，能申请基地吗？':
    'Já tenho um espaço, mas nunca fiz educação maker. Posso me candidatar a uma base?',
  '可以。核心标准是固定场地 + 持续运营意愿。柴火提供课程、教具和培训，帮你跑通第一期。':
    'Sim. Os critérios essenciais são espaço fixo + vontade de operação contínua. A Chaihuo fornece cursos, kits e treinamento para você concluir sua primeira turma.',

  '把城市的锚点，和柴火一起建': 'Construa a Âncora da Cidade Junto com a Chaihuo',
  '核心标准只有两条：固定场地 + 持续运营意愿。填写申请表，社区经理将在 3 个工作日内联系你。':
    'Apenas dois critérios essenciais: espaço fixo + vontade de operação contínua. Preencha o formulário e um gerente de comunidade entrará em contato em até 3 dias úteis.',
};

const chipDeepTranslations: Record<string, Record<string, string>> = {
  'zh-CN': {},
  en: zhToEn,
  ja: zhToJa,
  es: zhToEs,
  'pt-BR': zhToPt,
};

function chipTranslate(text: string, locale: Locale): string {
  if (locale === 'zh-CN') return text;
  return chipDeepTranslations[locale]?.[text] ?? text;
}

/**
 * 深拷贝翻译：把 `src/data/ecosystem.ts` 的整棵数据对象按 locale 翻译。
 * zh-CN 直接返回原引用；其他语言逐字符串查字典（含回退）。
 */
export function translateEcosystem<T>(value: T, locale: Locale): T {
  if (locale === 'zh-CN') return value;
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
