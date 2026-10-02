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
  查看分布图: 'View the Map',

  // 首页 · 先锋官 · 基地 双栏卡片（模块 B）
  先锋官: 'Pioneer',
  基地: 'Base',

  // 先锋官 Hero
  先锋官计划: 'Pioneer Program',
  基地计划: 'Base Program',
  立即申请: 'Apply Now',
  先了解基地: 'Learn About Bases First',
  先了解先锋官: 'Learn About Pioneers First',

  // 先锋官 · 什么是先锋官
  技术型: 'Technical',
  '有技术背景，想用创客技能开展教育 / 服务':
    'Has a technical background and wants to run education / services with maker skills',
  链接型: 'Connector',
  '有教育 / 社区资源，想引入创客课程但不一定亲自教':
    'Has education / community resources and wants to bring in maker courses without necessarily teaching',
  '每个基地必须先有先锋官；先锋官也可独立运营，不挂靠基地。':
    'Every base must first have a Pioneer; a Pioneer can also operate independently without affiliating with a base.',

  // 先锋官 · 你能得到什么
  'M0 教具 5 套': '5 × M0 Kits',
  '赠送，不回收': 'Free, never taken back',
  'Codecraft 账号 5 个': '5 Codecraft Accounts',
  '365 天 / 5 席位': '365 days / 5 seats',
  课程包: 'Course Pack',
  官方认证: 'Official Certification',
  '通过认证后登上 map.seeed.cc 全球分布图':
    'Get certified and appear on the map.seeed.cc global map',
  总部支持: 'HQ Support',
  '社区经理对接、技术答疑、课程更新': 'Community manager, technical Q&A, and course updates',
  'M1–M6 升级路径': 'M1–M6 Upgrade Path',
  '保证金租赁制，退出全退': 'Deposit-based rental, fully refundable on exit',

  // 先锋官 · 怎么赚钱
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
  '第一阶段 10 基地 + 20 先锋官，先到先评估。':
    'Phase 1 covers 10 bases + 20 pioneers; first come, first evaluated.',
  '没选上怎么办？': "What if I'm not selected?",
  '第二期、第三期陆续开放；也可选择交保证金提前参与作为预备。第一批报名者优先纳入后续筛选。':
    'Phase 2 and 3 will open later; you can also join early as a reserve with a deposit. First-batch applicants get priority in later rounds.',
  '需要交钱吗？': 'Is there a fee?',
  'M0 教具赠送不回收；M1–M6 教具保证金租赁制，退出全退。':
    'M0 kits are free and never taken back; M1–M6 kits use a deposit-based rental system, fully refundable on exit.',
  '不懂编程能当先锋官吗？': 'Can I be a Pioneer without coding skills?',
  '可以。Codecraft 沙盒零安装、浏览器即用，AI 帮你写代码。任何有上课经验的老师，跑一遍流程就能上课。':
    'Yes. The Codecraft sandbox needs zero installation — it runs in the browser and AI writes the code. Any teacher with classroom experience can run the flow and start teaching.',
  '先锋官和基地什么关系？': 'How do Pioneers and Bases relate?',
  '每个基地必须先有先锋官。先锋官可以是基地员工，也可以是合作制。先锋官可挂靠多个基地，基地权益是基地内先锋官共用的。':
    'Every base must first have a Pioneer. A Pioneer can be a base employee or an independent partner and can affiliate with multiple bases. Base benefits are shared by all Pioneers at that base.',

  // 先锋官 · CTA
  '第一阶段 10 基地 + 20 先锋官，先到先评估。填写申请表，社区经理将在 3 个工作日内联系你。':
    'Phase 1 covers 10 bases + 20 pioneers — first come, first evaluated. Fill in the application and a community manager will contact you within 3 working days.',
  联系我们: 'Contact Us',

  // 基地 · 什么是基地
  '准入标准（2 项核心）': 'Admission Criteria (2 Core Requirements)',
  固定场地: 'Fixed Venue',
  可承接活动与课程: 'Able to host events and courses',
  持续运营: 'Ongoing Operation',
  '有专人负责、有运营计划': 'A dedicated person in charge with an operation plan',
  加分项: 'Bonus Points',
  '科技馆 / 高校 Fab Lab 等公共教育空间':
    'Public education spaces like science museums / university Fab Labs',
  '已有创客 / STEAM 教育基础': 'Existing maker / STEAM education foundation',

  // 基地 · 权益对比
  基地权益: 'Base Benefits',
  权益: 'Benefit',
  '先锋官（个人）': 'Pioneer (Individual)',
  '基地（空间）': 'Base (Space)',
  'M0 教具': 'M0 Kits',
  '5 套（赠送不回收）': '5 (free, not taken back)',
  '10 套（基地内共用）': '10 (shared within the base)',
  'Codecraft 账号': 'Codecraft Accounts',
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
  '核心标准只有两条：固定场地 + 持续运营意愿。填写申请表，社区经理将在 3 个工作日内联系你。':
    'Only two core criteria: fixed venue + commitment to ongoing operation. Fill in the application and a community manager will contact you within 3 working days.',
  招募点火人与基地: 'Igniters and Bases wanted',
  '先锋官是柴火招募的点火人：先学会柴火的课，再在自己的城市开课、推广，把创客教育的火点到更多地方。有固定场地的，可以申请挂牌基地。':
    'Pioneers are Igniters recruited by Chaihuo: learn the courses first, then teach and promote them in your own city, carrying the maker-education flame to more places. Organisations with a permanent venue can apply to become a certified Base.',
  个人申请: 'For individuals',
  有固定场地的机构申请: 'For organisations with a permanent venue',
  '先锋官：柴火招募的点火人': 'Pioneers: the Igniters Chaihuo recruits',
  '先学会柴火的课，再在自己的城市开课、推广，把创客教育的火点到更多地方。柴火提供课程包、教具和认证；你负责招生、授课和本地推广。':
    'Learn Chaihuo courses first, then teach and promote them in your own city, carrying the maker-education flame to more places. Chaihuo provides the course pack, teaching kits and certification; you handle enrolment, teaching and local promotion.',
  条件与条款: 'Requirements and terms',
  '先锋官是柴火认证的点火人：学会课程，在当地开课，并向学校和机构推广。':
    'A Pioneer is an Igniter certified by Chaihuo: they learn the courses, run classes locally and promote them to schools and organisations.',
  谁可以申请: 'Who can apply',
  柴火提供什么: 'What Chaihuo provides',
  'PPT + md 格式，可以自行修改和二次创作': 'PPT + md format; you may modify and rework it',
  收益来自哪里: 'Where the income comes from',
  从申请到开课: 'From application to first class',
  申请成为先锋官: 'Apply to become a Pioneer',
  '基地：柴火认证的本地授课点': 'Bases: Chaihuo-certified local teaching sites',
  '有固定场地、有专人持续运营的机构可以申请挂牌基地。柴火提供教具、课程和总部派单；基地在本地开课，并为先锋官提供授课场地。':
    'Organisations with a permanent venue and someone to run it on an ongoing basis can apply to become a certified Base. Chaihuo provides teaching kits, courses and work dispatched from headquarters; the Base runs classes locally and gives Pioneers a place to teach.',
  条件与权益: 'Requirements and benefits',
  '基地是柴火认证的、有固定场地的本地授课点。':
    'A Base is a local teaching site with a permanent venue, certified by Chaihuo.',
  '柴火基地车巡游到过、双方已有合作基础':
    'Already reached by the Chaihuo Mobile Base Vehicle tour, with mutual trust established',
  申请挂牌基地: 'Apply to become a Base',
};

const zhToJa: Record<string, string> = {
  查看分布图: '分布図を見る',
  先锋官: 'パイオニア',
  基地: '拠点',
  先锋官计划: 'パイオニア計画',
  基地计划: '拠点計画',
  立即申请: '今すぐ申し込む',
  先了解基地: 'まず拠点を知る',
  先了解先锋官: 'まずパイオニアを知る',
  技术型: 'テクニカル型',
  '有技术背景，想用创客技能开展教育 / 服务':
    '技術バックグラウンドを持ち、メーカースキルで教育 / サービスを展開したい方',
  链接型: 'コネクター型',
  '有教育 / 社区资源，想引入创客课程但不一定亲自教':
    '教育 / コミュニティ資源を持ち、メーカーコースを導入したいが自ら教えるとは限らない方',
  '每个基地必须先有先锋官；先锋官也可独立运营，不挂靠基地。':
    '各拠点には必ず先にパイオニアが必要です。パイオニアは拠点に属さず独立運営も可能です。',
  'M0 教具 5 套': 'M0 キット 5 セット',
  '赠送，不回收': '贈呈・回収なし',
  'Codecraft 账号 5 个': 'Codecraft アカウント 5 つ',
  '365 天 / 5 席位': '365 日 / 5 席',
  课程包: 'コースパック',
  官方认证: '公式認証',
  '通过认证后登上 map.seeed.cc 全球分布图': '認証を通過すると map.seeed.cc の全世界分布図に掲載',
  总部支持: '本部サポート',
  '社区经理对接、技术答疑、课程更新': 'コミュニティマネージャー対応、技術サポート、コース更新',
  'M1–M6 升级路径': 'M1–M6 アップグレードパス',
  '保证金租赁制，退出全退': '保証金レンタル制、退会時は全額返金',
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
  '第一阶段 10 基地 + 20 先锋官，先到先评估。':
    '第 1 期は拠点 10 か所 + パイオニア 20 名、先着順で評価します。',
  '没选上怎么办？': '選ばれなかったら？',
  '第二期、第三期陆续开放；也可选择交保证金提前参与作为预备。第一批报名者优先纳入后续筛选。':
    '第 2 期・第 3 期は順次開放。保証金を納めれば予備として先行参加も可能。第 1 期の申込者はその後の選考で優先されます。',
  '需要交钱吗？': '費用はかかりますか？',
  'M0 教具赠送不回收；M1–M6 教具保证金租赁制，退出全退。':
    'M0 キットは贈呈で回収なし。M1–M6 キットは保証金レンタル制で、退会時は全額返金。',
  '不懂编程能当先锋官吗？': 'プログラミングが分からなくてもパイオニアになれますか？',
  '可以。Codecraft 沙盒零安装、浏览器即用，AI 帮你写代码。任何有上课经验的老师，跑一遍流程就能上课。':
    'なれます。Codecraft サンドボックスはインストール不要、ブラウザですぐ使え、AI がコードを書きます。授業経験のある先生なら、流れを一度試せばそのまま授業ができます。',
  '先锋官和基地什么关系？': 'パイオニアと拠点の関係は？',
  '每个基地必须先有先锋官。先锋官可以是基地员工，也可以是合作制。先锋官可挂靠多个基地，基地权益是基地内先锋官共用的。':
    '各拠点には必ず先にパイオニアが必要です。パイオニアは拠点スタッフでも提携パートナーでも構いません。複数の拠点に所属でき、拠点の特典はその拠点内のパイオニア全員で共有されます。',
  '第一阶段 10 基地 + 20 先锋官，先到先评估。填写申请表，社区经理将在 3 个工作日内联系你。':
    '第 1 期は拠点 10 か所 + パイオニア 20 名、先着順で評価。申込フォームにご記入いただければ、コミュニティマネージャーが 3 営業日以内にご連絡します。',
  联系我们: 'お問い合わせ',
  '准入标准（2 项核心）': '参入基準（コア 2 項目）',
  固定场地: '固定会場',
  可承接活动与课程: 'イベントと講座を開催可能',
  持续运营: '継続運営',
  '有专人负责、有运营计划': '専任担当者と運営計画があること',
  加分项: '加点項目',
  '科技馆 / 高校 Fab Lab 等公共教育空间': '科学館 / 大学の Fab Lab などの公共教育スペース',
  '已有创客 / STEAM 教育基础': 'すでにメーカー / STEAM 教育の基盤がある',
  基地权益: '拠点の特典',
  权益: '特典',
  '先锋官（个人）': 'パイオニア（個人）',
  '基地（空间）': '拠点（スペース）',
  'M0 教具': 'M0 キット',
  '5 套（赠送不回收）': '5 セット（贈呈・回収なし）',
  '10 套（基地内共用）': '10 セット（拠点内で共用）',
  'Codecraft 账号': 'Codecraft アカウント',
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
  '基地内开班，学费归基地运营方。': '拠点内で講座を開き、受講料は拠点運営側の収益に。',
  '柴火接到的当地培训 / 工作坊需求，派给基地执行，直接收服务费。':
    '柴火に寄せられた地元の研修 / ワークショップ依頼を拠点が実施し、サービス料を直接受け取れます。',
  跨基地分佣: '拠点間分与',
  '多基地协作项目，按贡献分佣。': '複数拠点の協働プロジェクトで、貢献度に応じて分与。',
  '另：公益捐赠渠道（适合公共教育空间）。': 'また：公益寄付のチャネル（公共教育スペースに最適）。',
  基地与先锋官关系: '拠点とパイオニアの関係',
  '没有先锋官，就没有基地；有了基地，先锋官才有自己的主场。':
    'パイオニアがいなければ拠点はなく、拠点があってこそパイオニアは自分のホームを持てます。',
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
  '核心标准只有两条：固定场地 + 持续运营意愿。填写申请表，社区经理将在 3 个工作日内联系你。':
    'コア基準はたった 2 つ：固定会場 + 継続運営の意志。申込フォームにご記入いただければ、コミュニティマネージャーが 3 営業日以内にご連絡します。',
  招募点火人与基地: '点火人・拠点募集',
  '先锋官是柴火招募的点火人：先学会柴火的课，再在自己的城市开课、推广，把创客教育的火点到更多地方。有固定场地的，可以申请挂牌基地。':
    'パイオニアは柴火が募集する点火人です。まず柴火の講座を学び、その後自分の都市で開講・普及を行い、メーカー教育の火をより多くの場所へ届けます。常設の会場をお持ちの場合は、認定拠点に申請できます。',
  个人申请: '個人向け',
  有固定场地的机构申请: '常設会場を持つ団体向け',
  '先锋官：柴火招募的点火人': 'パイオニア：柴火が募集する点火人',
  '先学会柴火的课，再在自己的城市开课、推广，把创客教育的火点到更多地方。柴火提供课程包、教具和认证；你负责招生、授课和本地推广。':
    'まず柴火の講座を学び、その後自分の都市で開講・普及を行い、メーカー教育の火をより多くの場所へ届けます。柴火は講座パック、教具、認定を提供し、受講者募集・授業・地域での普及はパイオニアが担います。',
  条件与条款: '条件と規約',
  '先锋官是柴火认证的点火人：学会课程，在当地开课，并向学校和机构推广。':
    'パイオニアは柴火が認定する点火人です。講座を習得し、地元で開講し、学校や団体に普及します。',
  谁可以申请: '応募できる人',
  柴火提供什么: '柴火が提供するもの',
  'PPT + md 格式，可以自行修改和二次创作': 'PPT＋md形式。自由に改変・再構成できます',
  收益来自哪里: '収益の出どころ',
  从申请到开课: '応募から開講まで',
  申请成为先锋官: 'パイオニアに応募する',
  '基地：柴火认证的本地授课点': '拠点：柴火が認定する地域の授業拠点',
  '有固定场地、有专人持续运营的机构可以申请挂牌基地。柴火提供教具、课程和总部派单；基地在本地开课，并为先锋官提供授课场地。':
    '常設の会場があり、専任の担当者が継続して運営できる団体は、認定拠点に申請できます。柴火は教具、講座、本部からの案件紹介を提供し、拠点は地域で開講するとともに、パイオニアに授業の場を提供します。',
  条件与权益: '条件と特典',
  '基地是柴火认证的、有固定场地的本地授课点。':
    '拠点は、柴火が認定する常設会場を持つ地域の授業拠点です。',
  '柴火基地车巡游到过、双方已有合作基础':
    '柴火基地車キャラバンで訪問済み、相互の信頼関係が構築されている',
  申请挂牌基地: '拠点に応募する',
};

const zhToEs: Record<string, string> = {
  查看分布图: 'Ver el Mapa',
  先锋官: 'Pionero',
  基地: 'Base',
  先锋官计划: 'Programa de Pioneros',
  基地计划: 'Programa de Bases',
  立即申请: 'Solicitar ahora',
  先了解基地: 'Conoce las Bases primero',
  先了解先锋官: 'Conoce a los Pioneros primero',
  技术型: 'Perfil técnico',
  '有技术背景，想用创客技能开展教育 / 服务':
    'Con perfil técnico: impartir educación / servicios con habilidades maker',
  链接型: 'Perfil conector',
  '有教育 / 社区资源，想引入创客课程但不一定亲自教':
    'Con recursos educativos / comunitarios: traer cursos maker sin enseñar personalmente',
  '每个基地必须先有先锋官；先锋官也可独立运营，不挂靠基地。':
    'Toda Base debe tener primero un Pionero; el Pionero puede operar solo, sin adscribirse a una Base.',
  'M0 教具 5 套': '5 kits M0',
  '赠送，不回收': 'Regalo, no se recuperan',
  'Codecraft 账号 5 个': '5 cuentas de Codecraft',
  '365 天 / 5 席位': '365 días / 5 plazas',
  课程包: 'Paquete de cursos',
  官方认证: 'Certificación oficial',
  '通过认证后登上 map.seeed.cc 全球分布图':
    'Certifícate y aparece en el mapa global de map.seeed.cc',
  总部支持: 'Apoyo de la sede',
  '社区经理对接、技术答疑、课程更新':
    'Community manager, soporte técnico y actualización de cursos',
  'M1–M6 升级路径': 'Ruta de ascenso M1–M6',
  '保证金租赁制，退出全退': 'Alquiler con depósito; reembolso total al salir',
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
  '第一阶段 10 基地 + 20 先锋官，先到先评估。':
    'La fase 1 incluye 10 bases + 20 pioneros; primero en llegar, primero en evaluarse.',
  '没选上怎么办？': '¿Y si no me seleccionan?',
  '第二期、第三期陆续开放；也可选择交保证金提前参与作为预备。第一批报名者优先纳入后续筛选。':
    'Las fases 2 y 3 se abrirán luego; también puedes adelantarte como reserva con un depósito. El primer grupo tiene prioridad en las siguientes rondas.',
  '需要交钱吗？': '¿Hay que pagar?',
  'M0 教具赠送不回收；M1–M6 教具保证金租赁制，退出全退。':
    'Los kits M0 son un regalo; los M1–M6 se alquilan con depósito, reembolsable al salir.',
  '不懂编程能当先锋官吗？': '¿Puedo ser Pionero sin saber programar?',
  '可以。Codecraft 沙盒零安装、浏览器即用，AI 帮你写代码。任何有上课经验的老师，跑一遍流程就能上课。':
    'Sí. El sandbox de Codecraft no requiere instalación: corre en el navegador y la IA escribe el código. Cualquier docente puede empezar a enseñar tras probar el flujo.',
  '先锋官和基地什么关系？': '¿Qué relación hay entre Pioneros y Bases?',
  '每个基地必须先有先锋官。先锋官可以是基地员工，也可以是合作制。先锋官可挂靠多个基地，基地权益是基地内先锋官共用的。':
    'Toda Base debe tener primero un Pionero: empleado o socio independiente, adscrito a varias Bases. Los beneficios de la Base se comparten entre sus Pioneros.',
  '第一阶段 10 基地 + 20 先锋官，先到先评估。填写申请表，社区经理将在 3 个工作日内联系你。':
    'La fase 1 cubre 10 bases + 20 pioneros: primero en llegar, primero en evaluarse. Completa la solicitud y un community manager te contactará en 3 días hábiles.',
  联系我们: 'Contáctanos',
  '准入标准（2 项核心）': 'Criterios de admisión (2 requisitos clave)',
  固定场地: 'Espacio fijo',
  可承接活动与课程: 'Capaz de albergar eventos y cursos',
  持续运营: 'Operación continua',
  '有专人负责、有运营计划': 'Una persona responsable y un plan de operación',
  加分项: 'Puntos extra',
  '科技馆 / 高校 Fab Lab 等公共教育空间':
    'Espacios públicos como museos de ciencia / Fab Labs universitarios',
  '已有创客 / STEAM 教育基础': 'Con base previa en educación maker / STEAM',
  基地权益: 'Beneficios de la Base',
  权益: 'Beneficios',
  '先锋官（个人）': 'Pionero (individual)',
  '基地（空间）': 'Base (espacio)',
  'M0 教具': 'Kits M0',
  '5 套（赠送不回收）': '5 (regalo, no se recuperan)',
  '10 套（基地内共用）': '10 (compartidos en la Base)',
  'Codecraft 账号': 'Cuentas de Codecraft',
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
  '核心标准只有两条：固定场地 + 持续运营意愿。填写申请表，社区经理将在 3 个工作日内联系你。':
    'Solo dos criterios: espacio fijo + voluntad de operar a largo plazo. Completa la solicitud y un community manager te contactará en 3 días hábiles.',
  招募点火人与基地: 'Buscamos Ignitores y Bases',
  '先锋官是柴火招募的点火人：先学会柴火的课，再在自己的城市开课、推广，把创客教育的火点到更多地方。有固定场地的，可以申请挂牌基地。':
    'Los Pioneros son Ignitores que recluta Chaihuo: primero aprenden los cursos y después los imparten y promueven en su ciudad, llevando la llama de la educación maker a más lugares. Quien disponga de un espacio fijo puede solicitar ser Base certificada.',
  个人申请: 'Para particulares',
  有固定场地的机构申请: 'Para organizaciones con espacio fijo',
  '先锋官：柴火招募的点火人': 'Pioneros: los Ignitores que recluta Chaihuo',
  '先学会柴火的课，再在自己的城市开课、推广，把创客教育的火点到更多地方。柴火提供课程包、教具和认证；你负责招生、授课和本地推广。':
    'Primero aprenda los cursos de Chaihuo y después impártalos y promuévalos en su ciudad, llevando la llama de la educación maker a más lugares. Chaihuo aporta el paquete de cursos, los kits didácticos y la certificación; usted se ocupa de la captación, la docencia y la promoción local.',
  条件与条款: 'Requisitos y condiciones',
  '先锋官是柴火认证的点火人：学会课程，在当地开课，并向学校和机构推广。':
    'Un Pionero es un Ignitor certificado por Chaihuo: aprende los cursos, imparte clases en su zona y los promueve entre centros educativos y organizaciones.',
  谁可以申请: 'Quién puede solicitarlo',
  柴火提供什么: 'Qué aporta Chaihuo',
  'PPT + md 格式，可以自行修改和二次创作': 'Formato PPT + md; puede modificarlo y reelaborarlo',
  收益来自哪里: 'De dónde vienen los ingresos',
  从申请到开课: 'De la solicitud a la primera clase',
  申请成为先锋官: 'Solicite ser Pionero',
  '基地：柴火认证的本地授课点': 'Bases: puntos de enseñanza locales certificados por Chaihuo',
  '有固定场地、有专人持续运营的机构可以申请挂牌基地。柴火提供教具、课程和总部派单；基地在本地开课，并为先锋官提供授课场地。':
    'Las organizaciones con un espacio fijo y una persona que lo gestione de forma continuada pueden solicitar ser Base certificada. Chaihuo aporta kits didácticos, cursos y encargos derivados desde la sede; la Base imparte clases en su zona y ofrece a los Pioneros un lugar donde enseñar.',
  条件与权益: 'Requisitos y ventajas',
  '基地是柴火认证的、有固定场地的本地授课点。':
    'Una Base es un punto local de formación con espacio fijo, certificado por Chaihuo.',
  '柴火基地车巡游到过、双方已有合作基础':
    'Alcanzados por la gira del Vehículo Base Móvil Chaihuo, con confianza mutua establecida',
  申请挂牌基地: 'Solicite ser Base',
};

const zhToPt: Record<string, string> = {
  查看分布图: 'Ver o Mapa',

  先锋官: 'Pioneiro',
  基地: 'Base',

  先锋官计划: 'Programa de Pioneiros',
  基地计划: 'Programa de Bases',
  立即申请: 'Inscreva-se Agora',
  先了解基地: 'Conheça as Bases Primeiro',
  先了解先锋官: 'Conheça os Pioneiros Primeiro',

  技术型: 'Técnico',
  '有技术背景，想用创客技能开展教育 / 服务':
    'Tem formação técnica e quer atuar com educação / serviços usando habilidades maker',
  链接型: 'Conector',
  '有教育 / 社区资源，想引入创客课程但不一定亲自教':
    'Tem recursos de educação / comunidade e quer trazer cursos maker sem necessariamente dar aulas',
  '每个基地必须先有先锋官；先锋官也可独立运营，不挂靠基地。':
    'Toda base precisa primeiro ter um Pioneiro; um Pioneiro também pode operar de forma independente, sem vínculo com uma base.',

  'M0 教具 5 套': '5 kits M0',
  '赠送，不回收': 'Grátis, sem devolução',
  'Codecraft 账号 5 个': '5 contas Codecraft',
  '365 天 / 5 席位': '365 dias / 5 vagas',
  课程包: 'Pacote de Cursos',
  官方认证: 'Certificação Oficial',
  '通过认证后登上 map.seeed.cc 全球分布图':
    'Após a certificação, apareça no mapa global do map.seeed.cc',
  总部支持: 'Suporte da Central',
  '社区经理对接、技术答疑、课程更新':
    'Gerente de comunidade, suporte técnico e atualizações de cursos',
  'M1–M6 升级路径': 'Trilha de upgrade M1–M6',
  '保证金租赁制，退出全退': 'Locação com caução, reembolso total ao sair',

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
  '第一阶段 10 基地 + 20 先锋官，先到先评估。':
    'A fase 1 tem 10 bases + 20 pioneiros; quem chega primeiro é avaliado primeiro.',
  '没选上怎么办？': 'E se eu não for selecionado?',
  '第二期、第三期陆续开放；也可选择交保证金提前参与作为预备。第一批报名者优先纳入后续筛选。':
    'As fases 2 e 3 serão abertas em breve; você também pode participar antes como reserva com caução. Quem se inscreveu no primeiro lote tem prioridade nas seleções seguintes.',
  '需要交钱吗？': 'Preciso pagar alguma coisa?',
  'M0 教具赠送不回收；M1–M6 教具保证金租赁制，退出全退。':
    'Os kits M0 são grátis e não são devolvidos; os kits M1–M6 usam locação com caução, com reembolso total ao sair.',
  '不懂编程能当先锋官吗？': 'Posso ser Pioneiro sem saber programar?',
  '可以。Codecraft 沙盒零安装、浏览器即用，AI 帮你写代码。任何有上课经验的老师，跑一遍流程就能上课。':
    'Sim. O sandbox Codecraft não exige instalação — roda no navegador e a IA escreve o código. Qualquer professor com experiência em sala de aula segue o fluxo e começa a ensinar.',
  '先锋官和基地什么关系？': 'Qual é a relação entre Pioneiros e Bases?',
  '每个基地必须先有先锋官。先锋官可以是基地员工，也可以是合作制。先锋官可挂靠多个基地，基地权益是基地内先锋官共用的。':
    'Toda base precisa primeiro ter um Pioneiro. O Pioneiro pode ser funcionário da base ou parceiro e pode se vincular a várias bases. Os benefícios da base são compartilhados por todos os Pioneiros dela.',
  '第一阶段 10 基地 + 20 先锋官，先到先评估。填写申请表，社区经理将在 3 个工作日内联系你。':
    'A fase 1 tem 10 bases + 20 pioneiros — quem chega primeiro é avaliado primeiro. Preencha o formulário e um gerente de comunidade entrará em contato em até 3 dias úteis.',
  联系我们: 'Fale Conosco',

  '准入标准（2 项核心）': 'Critérios de Admissão (2 Requisitos Essenciais)',
  固定场地: 'Espaço Fixo',
  可承接活动与课程: 'Pode sediar eventos e cursos',
  持续运营: 'Operação Contínua',
  '有专人负责、有运营计划': 'Com uma pessoa responsável e um plano de operação',
  加分项: 'Pontos Extras',
  '科技馆 / 高校 Fab Lab 等公共教育空间':
    'Espaços públicos de educação, como museus de ciência / Fab Labs universitários',
  '已有创客 / STEAM 教育基础': 'Com base em educação maker / STEAM',

  基地权益: 'Benefícios da Base',
  权益: 'Benefício',
  '先锋官（个人）': 'Pioneiro (Pessoa)',
  '基地（空间）': 'Base (Espaço)',
  'M0 教具': 'Kits M0',
  '5 套（赠送不回收）': '5 (grátis, sem devolução)',
  '10 套（基地内共用）': '10 (compartilhados na base)',
  'Codecraft 账号': 'Contas Codecraft',
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

  '核心标准只有两条：固定场地 + 持续运营意愿。填写申请表，社区经理将在 3 个工作日内联系你。':
    'Apenas dois critérios essenciais: espaço fixo + vontade de operação contínua. Preencha o formulário e um gerente de comunidade entrará em contato em até 3 dias úteis.',
  招募点火人与基地: 'Buscamos Ignitores e Bases',
  '先锋官是柴火招募的点火人：先学会柴火的课，再在自己的城市开课、推广，把创客教育的火点到更多地方。有固定场地的，可以申请挂牌基地。':
    'Os Pioneiros são Ignitores recrutados pela Chaihuo: primeiro aprendem os cursos e depois os ministram e divulgam na própria cidade, levando a chama da educação maker a mais lugares. Quem tem um espaço fixo pode se candidatar a Base certificada.',
  个人申请: 'Para pessoas físicas',
  有固定场地的机构申请: 'Para organizações com espaço fixo',
  '先锋官：柴火招募的点火人': 'Pioneiros: os Ignitores que a Chaihuo recruta',
  '先学会柴火的课，再在自己的城市开课、推广，把创客教育的火点到更多地方。柴火提供课程包、教具和认证；你负责招生、授课和本地推广。':
    'Primeiro aprenda os cursos da Chaihuo e depois ministre e divulgue-os na sua cidade, levando a chama da educação maker a mais lugares. A Chaihuo fornece o pacote de cursos, os kits didáticos e a certificação; você cuida das matrículas, das aulas e da divulgação local.',
  条件与条款: 'Requisitos e condições',
  '先锋官是柴火认证的点火人：学会课程，在当地开课，并向学校和机构推广。':
    'Um Pioneiro é um Ignitor certificado pela Chaihuo: aprende os cursos, ministra aulas na sua região e os divulga a escolas e organizações.',
  谁可以申请: 'Quem pode se candidatar',
  柴火提供什么: 'O que a Chaihuo fornece',
  'PPT + md 格式，可以自行修改和二次创作': 'Formato PPT + md; você pode modificar e reelaborar',
  收益来自哪里: 'De onde vem a receita',
  从申请到开课: 'Da candidatura à primeira aula',
  申请成为先锋官: 'Candidate-se a Pioneiro',
  '基地：柴火认证的本地授课点': 'Bases: pontos de ensino locais certificados pela Chaihuo',
  '有固定场地、有专人持续运营的机构可以申请挂牌基地。柴火提供教具、课程和总部派单；基地在本地开课，并为先锋官提供授课场地。':
    'Organizações com espaço fixo e alguém para operá-lo de forma contínua podem se candidatar a Base certificada. A Chaihuo fornece kits didáticos, cursos e demandas encaminhadas pela sede; a Base ministra aulas na região e oferece aos Pioneiros um lugar para ensinar.',
  条件与权益: 'Requisitos e benefícios',
  '基地是柴火认证的、有固定场地的本地授课点。':
    'Uma Base é um ponto local de ensino com espaço fixo, certificado pela Chaihuo.',
  '柴火基地车巡游到过、双方已有合作基础':
    'Já alcançado pela turnê do Veículo Base Móvel Chaihuo, com confiança mútua estabelecida',
  申请挂牌基地: 'Candidate-se a Base',
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
