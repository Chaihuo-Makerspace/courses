import type { IconName } from './icons';

export type { IconName } from './icons';

/**
 * 先锋官 / 基地 / 创客生态 —— 数据层单一事实源。
 *
 * 内容与 `docs/DESIGN.md`（v4.0 Warm Maker Signal）保持一致：
 * 先锋官主色调用柴火黄（强调色），基地主色调为柴火红（限量，仅 Hero 与 CTA）。
 * 页面与组件只消费本文件导出；国际化在 `src/i18n/chip-translations.ts` 完成。
 */

/** 先锋官 / 基地 的注册入口（外部平台，新窗口打开）。 */
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
  icon: IconName;
  title: string;
  description: string;
}

export interface RevenueLine {
  icon: IconName;
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
  eyebrow: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  description: string;
  ctas: ChipLink[];
}

/** 「什么是先锋官 / 什么是基地」区块。 */
export interface ChipWhatData {
  title: string;
  intro: string;
  coreTitle: string;
  core: IconBullet[];
  note?: string;
  plusTitle?: string;
  plus?: string[];
}

export interface ChipBenefitsData {
  title: string;
  subtitle: string;
  items: IconBullet[];
}

export interface ChipRevenueData {
  title: string;
  subtitle: string;
  lines: RevenueLine[];
}

export interface ChipStepsData {
  title: string;
  subtitle?: string;
  steps: FlowStep[];
}

export interface ChipCertificationData {
  title: string;
  chain: string[];
  note: string;
}

export interface ChipComparisonData {
  title: string;
  subtitle: string;
  header: { first: string; pioneer: string; base: string };
  rows: ComparisonRow[];
}

export interface ChipRelationCard {
  icon: IconName;
  label: string;
  tag: string;
  description: string;
}

export interface ChipRelationData {
  title: string;
  intro: string;
  arrowLabel: string;
  mutual: string;
  cards: { pioneer: ChipRelationCard; base: ChipRelationCard };
  bullets: string[];
}

export interface ChipUpgradeData {
  title: string;
  chain: string[];
  description: string;
}

export interface HomeEcosystemMapData {
  eyebrow: string;
  title: string;
  description: string[];
  ctas: ChipLink[];
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
/* 首页模块 A —— 创客生态分布图卡片                                     */
/* ------------------------------------------------------------------ */

export const homeEcosystemMap: HomeEcosystemMapData = {
  eyebrow: '柴火生态',
  title: '柴火全球创客生态分布图',
  description: [
    '先锋官与基地正在全国及全球铺开。',
    '在地图上找到你身边的柴火节点，',
    '或者——成为下一个。',
  ],
  ctas: [
    { label: '查看分布图', href: ecosystemMapUrl, variant: 'primary' },
    { label: '我要加入', href: '/pioneer', variant: 'secondary' },
  ],
};

/* ------------------------------------------------------------------ */
/* 首页模块 B —— 先锋官 · 基地 双栏卡片                                */
/* ------------------------------------------------------------------ */

export interface PioneerBaseCard {
  icon: IconName;
  label: string;
  headline: string;
  points: string[];
  cta: ChipLink;
}

export const homePioneerBase: {
  pioneer: PioneerBaseCard;
  base: PioneerBaseCard;
  section: { title: string; subtitle: string };
} = {
  section: {
    title: '先锋官与基地计划',
    subtitle: '把 AI 创客教育带到你的城市——柴火给你课程、教具和认证，你做本地的那根火柴。',
  },
  pioneer: {
    icon: 'lucide:zap',
    label: '先锋官',
    headline: '在你的城市，做 AI 时代的点火人。',
    points: ['5 套 M0 教具赠送', '学费 100% 归你', '官方认证登上地图'],
    cta: { label: '了解先锋官', href: '/pioneer' },
  },
  base: {
    icon: 'lucide:home',
    label: '基地',
    headline: '城市里看得见的柴火。',
    points: ['10 套教具共用', '承接总部派单', '区域优先权'],
    cta: { label: '了解基地', href: '/base' },
  },
};

/* ------------------------------------------------------------------ */
/* 先锋官介绍页（/pioneer）                                           */
/* ------------------------------------------------------------------ */

export const pioneer: PioneerProgram = {
  hero: {
    eyebrow: '先锋官计划',
    title: '先锋官',
    titleHighlight: '点火人',
    subtitle: '在你的城市，做 AI 时代的点火人',
    description:
      '懂技术、能教技术，或者不懂技术但能链接本地网络——柴火给你课程、教具和认证，你把 AI 创客教育带到你的城市。',
    ctas: [
      { label: '立即申请', href: ecosystemApplyUrl, variant: 'primary' },
      { label: '先了解基地', href: '/base', variant: 'secondary' },
    ],
  },
  what: {
    title: '什么是先锋官',
    intro: '先锋官是柴火认证的在地的技术传播者 + 技术服务商。',
    coreTitle: '两类人都可以',
    core: [
      {
        icon: 'lucide:cpu',
        title: '技术型',
        description: '有技术背景，想用创客技能开展教育 / 服务',
      },
      {
        icon: 'lucide:network',
        title: '链接型',
        description: '有教育 / 社区资源，想引入创客课程但不一定亲自教',
      },
    ],
    note: '每个基地必须先有先锋官；先锋官也可独立运营，不挂靠基地。',
  },
  benefits: {
    title: '你能得到什么',
    subtitle: '从教具、账号到课程包与认证，起步所需全都配齐',
    items: [
      { icon: 'lucide:package', title: 'M0 教具 5 套', description: '赠送，不回收' },
      { icon: 'lucide:layers', title: 'CodeCraft 账号 5 个', description: '365 天 / 5 席位' },
      {
        icon: 'lucide:book-open',
        title: '课程包',
        description: 'PPT + md 格式，可魔改、可二次创作',
      },
      {
        icon: 'lucide:badge-check',
        title: '官方认证',
        description: '通过认证后登上 map.seeed.cc 全球分布图',
      },
      {
        icon: 'lucide:handshake',
        title: '总部支持',
        description: '社区经理对接、技术答疑、课程更新',
      },
      { icon: 'lucide:route', title: 'M1–M6 升级路径', description: '保证金租赁制，退出全退' },
    ],
  },
  revenue: {
    title: '怎么赚钱',
    subtitle: '三条盈利线，对应三种身份',
    lines: [
      {
        icon: 'lucide:graduation-cap',
        number: '01',
        title: '开课收费',
        description:
          '用 M0 课程在当地开班，学费 100% 归你。课程包现成、教具到位，你只需招生和上课。',
      },
      {
        icon: 'lucide:send',
        number: '02',
        title: '总部派单',
        description: '柴火接到的培训 / 工作坊需求，派给当地先锋官执行。你出人出力，直接收服务费。',
      },
      {
        icon: 'lucide:coins',
        number: '03',
        title: '教具销售佣金',
        description: '向当地学校 / 机构推荐柴火教具，成交后拿佣金。',
      },
    ],
  },
  steps: {
    title: '四步走',
    subtitle: '从一场体验活动，到一座城市的锚点',
    steps: [
      { step: 'Step 1', title: '体验活动', description: '在你的城市 / 场地办一场 AI 编程体验' },
      { step: 'Step 2', title: '培训认证', description: '参加总部讲师培训与认证（线上即可开始）' },
      {
        step: 'Step 3',
        title: '教具到位、正式开课',
        description: '认证通过后发放教具与账号，开第一期收费课',
      },
      {
        step: 'Step 4',
        title: '验证升级',
        description: '跑通首期 → 追加支持 → 条件成熟可挂牌基地',
      },
    ],
  },
  certification: {
    title: '认证流程',
    chain: ['拿到教具', '完成一个项目', '录一段讲课视频', '总部审核', '发证'],
    note: '参照校园大使机制：每人定一个教具，做项目 + 录课，审核通过才发证。不是给了教具就是先锋官——要做出来、讲出来。',
  },
  faqs: [
    {
      question: '第一批名额多少？',
      answer: '第一阶段 10 基地 + 20 先锋官，已有约 70 人意向报名，先到先评估。',
    },
    {
      question: '没选上怎么办？',
      answer:
        '第二期、第三期陆续开放；也可选择交保证金提前参与作为预备。第一批报名者优先纳入后续筛选。',
    },
    {
      question: '需要交钱吗？',
      answer: 'M0 教具赠送不回收；M1–M6 教具保证金租赁制，退出全退。具体金额以协议 v2.5 为准。',
    },
    {
      question: '不懂编程能当先锋官吗？',
      answer:
        '可以。Codecraft 沙盒零安装、浏览器即用，AI 帮你写代码。任何有上课经验的老师，跑一遍流程就能上课。',
    },
    {
      question: '先锋官和基地什么关系？',
      answer:
        '每个基地必须先有先锋官。先锋官可以是基地员工，也可以是合作制。先锋官可挂靠多个基地，基地权益是基地内先锋官共用的。',
    },
  ],
  cta: {
    title: '把这个计划，带回你的城市',
    description:
      '第一阶段 10 基地 + 20 先锋官，先到先评估。填写申请表，社区经理将在 3 个工作日内联系你。',
    primary: { label: '立即申请', href: ecosystemApplyUrl },
    secondary: { label: '联系我们', href: '/contact' },
    note: '或联系社区经理（会后分配专属对接人）',
  },
};

/* ------------------------------------------------------------------ */
/* 基地介绍页（/base）                                               */
/* ------------------------------------------------------------------ */

export const base: BaseProgram = {
  hero: {
    eyebrow: '基地计划',
    title: '基地',
    titleHighlight: '看得见的柴火',
    subtitle: '城市里看得见的柴火',
    description:
      '有固定场地、有持续运营意愿——柴火给你教具、课程、品牌背书和派单流量，你做城市里 AI 创客教育的锚点。',
    ctas: [
      { label: '立即申请', href: ecosystemApplyUrl, variant: 'primary' },
      { label: '先了解先锋官', href: '/pioneer', variant: 'secondary' },
    ],
  },
  what: {
    title: '什么是基地',
    intro: '基地是柴火认证的城市级实体空间节点。',
    coreTitle: '准入标准（2 项核心）',
    core: [
      { icon: 'lucide:building-2', title: '固定场地', description: '可承接活动与课程' },
      { icon: 'lucide:users', title: '持续运营', description: '有专人负责、有运营计划' },
    ],
    plusTitle: '加分项',
    plus: [
      '科技馆 / 高校 Fab Lab 等公共教育空间',
      '已有创客 / STEAM 教育基础',
      '基地车巡游已触达、双方已建立信任',
    ],
  },
  comparison: {
    title: '基地权益',
    subtitle: '同一套支持体系，个人与空间各取所需',
    header: { first: '权益', pioneer: '先锋官（个人）', base: '基地（空间）' },
    rows: [
      { label: 'M0 教具', pioneer: '5 套（赠送不回收）', base: '10 套（基地内共用）' },
      { label: 'CodeCraft 账号', pioneer: '5 个（365 天 / 5 席位）', base: '10 个' },
      { label: '官方认证', pioneer: '登上地图', base: '牌匾 + 区域优先权' },
      { label: '开课获利', pioneer: '学费 100% 归个人', base: '同 + 派单服务费' },
      {
        label: '额外盈利线',
        pioneer: '派单 / 销售佣金',
        base: '佣金 / 派单 / 跨基地分佣 / 公益捐赠',
      },
      { label: '升级路径', pioneer: '→ 基地', base: '→ 区域代理枢纽' },
    ],
  },
  revenue: {
    title: '基地怎么赚钱',
    subtitle: '四条盈利线，把场地变成营收来源',
    lines: [
      {
        icon: 'lucide:graduation-cap',
        number: '01',
        title: '开课收费',
        description: '基地内开班，学费归基地运营方。',
      },
      {
        icon: 'lucide:send',
        number: '02',
        title: '总部派单',
        description: '柴火接到的当地培训 / 工作坊需求，派给基地执行，直接收服务费。',
      },
      {
        icon: 'lucide:coins',
        number: '03',
        title: '教具销售佣金',
        description: '向当地学校 / 机构推荐教具，成交后拿佣金。',
      },
      {
        icon: 'lucide:network',
        number: '04',
        title: '跨基地分佣',
        description: '多基地协作项目，按贡献分佣。',
        note: '另：公益捐赠渠道（适合公共教育空间）。',
      },
    ],
  },
  relation: {
    title: '基地与先锋官关系',
    intro: '没有先锋官，就没有基地；有了基地，先锋官才有自己的主场。',
    arrowLabel: '必须先有',
    mutual: '互为支撑',
    cards: {
      pioneer: {
        icon: 'lucide:zap',
        label: '先锋官',
        tag: '个人',
        description: '可挂靠多个基地，也可独立运营',
      },
      base: {
        icon: 'lucide:home',
        label: '基地',
        tag: '空间',
        description: '权益基地内共用，可有多个先锋官',
      },
    },
    bullets: [
      '先锋官可以是基地员工，也可以是合作制',
      '一个先锋官可挂靠多个基地（如南山基地 + 龙岗基地）',
      '基地权益（教具、账号等）是基地内所有先锋官共用的',
    ],
  },
  upgrade: {
    title: '升级路径',
    chain: ['个人', '先锋官', '基地', '区域代理枢纽'],
    description:
      '条件成熟时，基地可升级为区域代理枢纽，负责区域内先锋官 / 基地的招募、培训与协调。',
  },
  faqs: [
    {
      question: '基地必须有先锋官吗？',
      answer: '是的。每个基地必须先有至少一名先锋官。先锋官可以是基地员工，也可以是外部合作。',
    },
    {
      question: '基地教具和先锋官教具是一回事吗？',
      answer:
        '基地获得 10 套教具（基地内共用），先锋官个人获得 5 套。如果先锋官挂靠基地，共用基地教具，不重复领取。',
    },
    {
      question: '已经有空间但没做过创客教育，能申请基地吗？',
      answer: '可以。核心标准是固定场地 + 持续运营意愿。柴火提供课程、教具和培训，帮你跑通第一期。',
    },
  ],
  cta: {
    title: '把城市的锚点，和柴火一起建',
    description:
      '核心标准只有两条：固定场地 + 持续运营意愿。填写申请表，社区经理将在 3 个工作日内联系你。',
    primary: { label: '立即申请', href: ecosystemApplyUrl },
    secondary: { label: '联系我们', href: '/contact' },
  },
};
