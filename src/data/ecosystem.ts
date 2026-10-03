/**
 * 先锋官 / 基地 / 创客生态 —— 数据层单一事实源。
 *
 * 内容与 docs/DESIGN.md 规范保持一致：
 * 页面与组件只消费本文件导出；国际化在 src/i18n/chip-translations.ts 完成。
 */

/** 先锋官 / 基地的注册入口（外部平台，新窗口打开）。 */
export const ecosystemApplyUrl = 'https://map.seeed.cc';

/** 创客生态分布图（外部平台，新窗口打开）。 */
export const ecosystemMapUrl = 'https://map.seeed.cc';

export interface ChipLink {
  label: string;
  /** 站内路径（如 '/pioneer'）或绝对 URL（http 开头按外部链接处理）。 */
  href: string;
  variant?: 'primary' | 'secondary';
}

export interface IconBullet {
  title: string;
  description: string;
}

export interface RevenueLine {
  number: string;
  title: string;
  description: string;
  note?: string;
}

export interface FlowStep {
  /** 步骤标识（如 "Step 1"），可选——渲染时按数组序号编号。 */
  step?: string;
  title: string;
  description?: string;
}

export interface ChipFaqItem {
  question: string;
  answer: string;
}

export interface ComparisonRow {
  label: string;
  pioneer: string;
  base: string;
}

export interface ChipCta {
  title: string;
  description: string;
  primary: ChipLink;
  secondary?: ChipLink;
  note?: string;
}

/** Hero 区块（先锋官 / 基地 通用）。 */
export interface ChipHeroData {
  title: string;
  description: string;
  ctas: ChipLink[];
}

/** 「什么是先锋官 / 什么是基地」区块。 */
export interface ChipWhatData {
  title: string;
  intro: string;
  coreTitle: string;
  core: IconBullet[];
  /** 准入条件的醒目标注（如「两类满足其一即可申请」），渲染在强调面板内。 */
  coreNote?: string;
  note?: string;
  plusTitle?: string;
  plus?: string[];
}

export interface ChipBenefitsData {
  title: string;
  items: IconBullet[];
}

export interface ChipRevenueData {
  title: string;
  lines: RevenueLine[];
}

export interface ChipStepsData {
  title: string;
  steps: FlowStep[];
}

export interface ChipCertificationData {
  title: string;
  chain: string[];
  note: string;
}

export interface ChipComparisonData {
  title: string;
  header: { first: string; pioneer: string; base: string };
  rows: ComparisonRow[];
}

export interface ChipRelationCard {
  label: string;
  tag: string;
  description: string;
}

export interface ChipRelationData {
  title: string;
  intro: string;
  cards: { pioneer: ChipRelationCard; base: ChipRelationCard };
  bullets: string[];
}

export interface ChipUpgradeData {
  title: string;
  chain: string[];
  description: string;
}

export interface PioneerProgram {
  hero: ChipHeroData;
  what: ChipWhatData;
  benefits: ChipBenefitsData;
  revenue: ChipRevenueData;
  steps: ChipStepsData;
  certification: ChipCertificationData;
  faqs: ChipFaqItem[];
  cta: ChipCta;
}

export interface BaseProgram {
  hero: ChipHeroData;
  what: ChipWhatData;
  comparison: ChipComparisonData;
  revenue: ChipRevenueData;
  relation: ChipRelationData;
  upgrade: ChipUpgradeData;
  faqs: ChipFaqItem[];
  cta: ChipCta;
}

/* ------------------------------------------------------------------ */
/* 首页 —— 教学合作网络入口（先锋官 / 基地 / 生态分布图）             */
/* ------------------------------------------------------------------ */

export const homeChannel: {
  title: string;
  description: string;
  links: (ChipLink & { note: string })[];
} = {
  title: '招募点火人与基地',
  description:
    '先锋官是柴火招募的点火人：先学会柴火的课，再在自己的城市开课，把创客教育的火点到更多地方。目前已有海内外 {pioneers} 位，分布在 {countries} 个国家。有固定场地的机构，可以申请挂牌基地。',
  links: [
    { label: '先锋官计划', note: '个人讲师申请', href: '/pioneer' },
    { label: '基地计划', note: '实体空间合作', href: '/base' },
    { label: '查看分布图', note: 'map.seeed.cc', href: ecosystemMapUrl },
  ],
};

/* ------------------------------------------------------------------ */
/* 先锋官介绍页（/pioneer）                                           */
/* ------------------------------------------------------------------ */

export const pioneer: PioneerProgram = {
  hero: {
    title: '先锋官：柴火招募的点火人',
    description:
      '先学会柴火的课，再在自己的城市开课、推广，把创客教育的火点到更多地方。柴火提供套件、逐课时讲义和认证；你负责招生、授课和本地推广。',
    ctas: [{ label: '申请成为先锋官', href: ecosystemApplyUrl, variant: 'primary' }],
  },
  what: {
    title: '准入条件与合作机制',
    intro: '先锋官是柴火认证的点火人：学会课程，在当地开课，并对接学校和机构的培训需求。',
    coreTitle: '申请条件（满足其一即可）',
    core: [
      {
        title: '技术型',
        description: '有硬件或编程背景，希望用柴火课程与套件在本地开课',
      },
      {
        title: '链接型',
        description: '拥有学校、机构或社区资源，希望引入创客课程并组织本地交付',
      },
    ],
    coreNote: '两类满足其一即可申请',
    note: '每处基地须至少配备一名先锋官；先锋官也可独立运作，无需绑定实体基地。',
  },
  benefits: {
    title: '柴火提供的支持',
    items: [
      { title: 'M0 教具 5 套', description: '通过认证即配发，支持常态开课' },
      { title: 'Codecraft 账号 5 个', description: '365 天有效，含 5 个独立教学席位' },
      {
        title: '课程包',
        description: '含讲义与源码工程，支持根据本地学情二次开发与定制',
      },
      {
        title: '官方认证',
        description: '通过评估后登载于 map.seeed.cc 全球创客网络',
      },
      {
        title: '总部支持',
        description: '社区经理直连、常态技术答疑与课程版本更新',
      },
      { title: 'M1–M6 升级路径', description: '支持押金租赁高阶硬件，项目结束押金全额退还' },
    ],
  },
  revenue: {
    title: '收益渠道与分成',
    lines: [
      {
        number: '01',
        title: '开课学费收益',
        description:
          '在本地使用 M0 课程自主开班，学费由开课方全额留存。套件与备课讲义现成，重点投入本地学员招募与课堂交付。',
      },
      {
        number: '02',
        title: '总部委托派单',
        description:
          '柴火承接的异地企业实训与工作坊需求，就近委托当地先锋官交付，按场次结算讲师酬劳。',
      },
      {
        number: '03',
        title: '教具集采佣金',
        description: '协助本地学校与培训机构批量采购柴火硬件套件，根据成交规模结算佣金。',
      },
    ],
  },
  steps: {
    title: '加入与开课流程',
    steps: [
      {
        step: 'Step 1',
        title: '体验与沟通',
        description: '在本地组织一次小规模硬件体验，或与教研团队电话沟通',
      },
      {
        step: 'Step 2',
        title: '教研与试讲',
        description: '参加总部线上备课辅导，提交一段实操项目试讲视频',
      },
      {
        step: 'Step 3',
        title: '配发套件并开课',
        description: '通过认证后配发 5 套 M0 教具与账号，启动本地首期课程',
      },
      {
        step: 'Step 4',
        title: '进阶与基地升级',
        description: '常态开班后可申请高阶硬件，具备固定场地时可申请挂牌合作基地',
      },
    ],
  },
  certification: {
    title: '认证考核机制',
    chain: ['申领教具', '完成实操项目', '录制试讲片段', '总部教研评估', '发放认证证书'],
    note: '认证关注真实的课堂交付与动手能力：申请人需基于指定硬件完成一个实物作品并录制试讲片段，经教研评估合格后正式发放认证。能做出实物、讲清原理，是先锋官的核心标准。',
  },
  faqs: [
    {
      question: '申请有截止时间或名额限制吗？',
      answer:
        '先锋官计划常年开放申请，不设名额上限。提交申请后，教研团队会在 3 个工作日内通过邮件与你联系沟通。',
    },
    {
      question: '目前先锋官网络的实际规模有多大？',
      answer:
        '目前全球已有 {pioneers} 位先锋官，在 {countries} 个国家持续开课；首批 {bases} 家签约基地已配备教具开课。',
    },
    {
      question: '加入需要支付加盟费用吗？',
      answer:
        '不需要加盟费。M0 基础教具在认证通过后配发赠送；M1–M6 高阶模块教具实行押金租赁制，项目结课退还设备后押金全额退回。',
    },
    {
      question: '非计算机或工科专业可以申请吗？',
      answer:
        '可以。M0 课程使用图形化免配置沙盒环境，辅以 AI 助教指令，上手门槛低。有教学意愿或课堂组织经验的老师，演练 1–2 次即可熟练授课。',
    },
    {
      question: '先锋官和基地之间如何协作？',
      answer:
        '每家基地须有至少一名签约先锋官负责实训。先锋官既可以是基地的专职教师，也可以是独立合作讲师，支持跨基地共享实训台架与设备资源。',
    },
  ],
  cta: {
    title: '申请成为柴火先锋官',
    description:
      '常年开放个人讲师与创客申请。提交你的背景与开课计划，教研团队将在 3 个工作日内与你沟通对接。',
    primary: { label: '提交申请', href: ecosystemApplyUrl },
    secondary: { label: '邮件咨询', href: '/contact' },
  },
};

/* ------------------------------------------------------------------ */
/* 基地介绍页（/base）                                               */
/* ------------------------------------------------------------------ */

export const base: BaseProgram = {
  hero: {
    title: '基地：柴火认证的本地授课点',
    description:
      '有固定场地、有专人持续运营的机构可以申请挂牌基地。柴火提供教学套件、成套讲义和总部派单；基地在本地常态开课，并为先锋官提供授课场地。首批 {bases} 家已签约。',
    ctas: [{ label: '申请设立基地', href: ecosystemApplyUrl, variant: 'primary' }],
  },
  what: {
    title: '准入条件与权益',
    intro: '基地是柴火官方认证的实体教学中心，具备承接实训与常态化开课的场地条件。',
    coreTitle: '准入标准（2 项基本要求）',
    core: [
      { title: '固定场地', description: '具备可容纳 15–30 人同时动手的实训或创客工坊' },
      { title: '持续运营', description: '配备专职教学或运营对接人，有明确的开班排课规划' },
    ],
    coreNote: '两项都是基本要求',
    plusTitle: '优先合作条件',
    plus: [
      '科技馆、青少年活动中心、高校 Fab Lab 等公共空间',
      '具备创客、STEAM 或电子信息类社团与开课经验',
      '曾与柴火基地车或 Seeed 硬件合作举办过工作坊',
    ],
  },
  comparison: {
    title: '基地与先锋官权益对照',
    header: { first: '权益项目', pioneer: '先锋官（个人）', base: '基地（空间）' },
    rows: [
      {
        label: 'M0 教学套件',
        pioneer: '5 套（通过认证后配发）',
        base: '10 套（工坊共用实训台架）',
      },
      {
        label: 'Codecraft 账号',
        pioneer: '5 个（365 天 / 5 独立席位）',
        base: '10 个独立教学席位',
      },
      { label: '官方授牌', pioneer: '登上全球创客网络地图', base: '实体铜牌认证 + 本地业务优先权' },
      { label: '学费收益', pioneer: '自主开班学费全额归个人', base: '学费归基地 + 派单讲师酬劳' },
      {
        label: '多元收益渠道',
        pioneer: '总部派单 / 教具佣金',
        base: '套件代销 / 区域派单 / 多基地协同收益',
      },
      { label: '发展方向', pioneer: '→ 筹建独立基地', base: '→ 区域教研与交付中心' },
    ],
  },
  revenue: {
    title: '基地收益来源',
    lines: [
      {
        number: '01',
        title: '自主开课学费',
        description: '在基地工坊常态开设课程与工作坊，学费收益全部由基地运营方支配。',
      },
      {
        number: '02',
        title: '总部委托派单',
        description: '柴火承接的企事业单位区域实训需求，优先委托当地基地承办，按场次结算服务费。',
      },
      {
        number: '03',
        title: '教具集采佣金',
        description: '为本地高校、中小学及研学机构提供教具配套采购，根据订单流水获得返佣。',
      },
      {
        number: '04',
        title: '多基地业务协作',
        description: '参与跨区域大型交付或承接异地集训，按照实际协作分工结算收益。',
        note: '另：支持对接地方公共科教专项与公益项目。',
      },
    ],
  },
  relation: {
    title: '基地与先锋官的协作关系',
    intro: '没有先锋官，就没有基地；有了基地，先锋官才有自己的主场。',
    cards: {
      pioneer: {
        label: '先锋官',
        tag: '讲师与个人',
        description: '可入驻签约多家基地，也可独立组织教学',
      },
      base: {
        label: '基地',
        tag: '实体工坊',
        description: '硬件设备在工坊共用，可聚合多位先锋官共同开课',
      },
    },
    bullets: [
      '先锋官既可以是基地的专职讲师，也可以作为外部特邀合作导师',
      '一位先锋官可与同城多家基地签约合作，在不同工坊授课',
      '基地配发的教具与云端账号供工坊内所有认证先锋官共同使用',
    ],
  },
  upgrade: {
    title: '基地发展路径',
    chain: ['个人创客', '认证先锋官', '合作基地', '区域教研中心'],
    description:
      '运营良好、具备稳定开班能力的基地，可升级为区域教研中心，协同负责本区域内新先锋官的实操辅导与基地拓展。',
  },
  faqs: [
    {
      question: '挂牌基地必须配备先锋官吗？',
      answer:
        '是的。每家合作基地须至少有一位通过认证的先锋官担任教学督导，确保实训安全与教学质量。',
    },
    {
      question: '基地教具与先锋官个人教具如何管理？',
      answer:
        '基地签约后配发 10 套教学套件，留存基地共用；入驻先锋官此前持有的个人教具归个人所有，可一同充实课堂台架。',
    },
    {
      question: '有成熟场地但未做过开源硬件培训，能否申请？',
      answer:
        '可以。只要场地具备基础动手条件且有团队持续运营，柴火提供完整的讲义备课包与师资辅导，协助跑通首期。',
    },
    {
      question: '基地申请需要缴纳加盟费吗？',
      answer:
        '不收取加盟费。柴火负责提供首批教学套件、课程备课资料与派单机会，合作重点在于本地持续开课。',
    },
  ],
  cta: {
    title: '申请设立柴火教学基地',
    description:
      '常年开放机构合作。拥有线下教学场地并计划引入 AIoT 实训体系的团队，提交申请后教研顾问将在 3 个工作日内与你沟通方案。',
    primary: { label: '提交申请', href: ecosystemApplyUrl },
    secondary: { label: '邮件咨询', href: '/contact' },
  },
};
