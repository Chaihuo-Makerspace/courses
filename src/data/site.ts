export interface LinkItem {
  label: string;
  href: string;
}

/**
 * 站内三个常用去向。同一去向全站只有一种按钮措辞：
 * 文案在 `src/i18n/translations.ts` 的 `cta.<intent>`，这里只定义去向。
 */
export const ctaTargets = {
  contact: '/contact',
  courses: '/courses',
  about: '/about',
} as const;

export type CtaIntent = keyof typeof ctaTargets;

/** 页尾 CTA 的数据形态：`id` 对应翻译 key `cta.<id>.title` / `cta.<id>.desc`。 */
export interface SiteCta {
  id: 'home' | 'courses' | 'about' | 'module';
  title: string;
  description: string;
  primary: CtaIntent;
  secondary?: CtaIntent;
}

export interface OutcomeItem {
  /** 翻译 key 前缀 `outcome.<id>.*`。 */
  id: 'lab' | 'kit' | 'docs' | 'forms';
  label: string;
  description: string;
}

export interface HistoryItem {
  /** 翻译 key 前缀 `history.<id>.*`。 */
  id: 'founded' | 'seeed' | 'academy' | 'sites';
  when: string;
  title: string;
  description: string;
  link?: string;
}

export interface FaqItem {
  /** 翻译 key `faq.<key>.q` / `faq.<key>.a`。 */
  key: 'q1' | 'q2' | 'q3' | 'q4' | 'q5' | 'q6';
  question: string;
  answer: string;
}

// ── 首页 ────────────────────────────────────────────────────────────

/** 引入一门课时机构实际拿到的四样东西；每条都能在模块页或 /contact 找到明细。 */
export const homeOutcomes: OutcomeItem[] = [
  {
    id: 'lab',
    label: '能当场跑起来的实验',
    description: '每个模块都围绕真实硬件，课堂上搭建、联调、演示。',
  },
  {
    id: 'kit',
    label: '硬件套件与课程资源',
    description: '体系内在售的硬件，加上教材、实验手册、教师材料和学员任务。',
  },
  {
    id: 'docs',
    label: '可归档的项目材料',
    description: '部署拓扑、配置文件、运维与验收文档，各模块页逐项列出。',
  },
  {
    id: 'forms',
    label: '四种采购形态',
    description: '只买硬件，买标准教学套件，请柴火讲师到场授课，或者先培训你的讲师。',
  },
];

export const homeFinalCta: SiteCta = {
  id: 'home',
  title: '先从一门课开始。',
  description:
    '选一个模块试排一期课：硬件套件、教案、学员任务配齐；用得顺，再谈整体系引入。发邮件联系，3 个工作日内给合作建议。',
  primary: 'contact',
  secondary: 'courses',
};

// ── /courses ────────────────────────────────────────────────────────

export const coursesFinalCta: SiteCta = {
  id: 'courses',
  title: '定了模块和深度，就可以谈怎么开课。',
  description:
    '课程根据开课人数、模块深度与所需硬件套件核算预算。发邮件说明你的机构类型、选定模块与计划排期，教研团队在 3 个工作日内回复合作建议与清单。',
  primary: 'contact',
  secondary: 'about',
};

/** 课程详情页页尾。标题里的 {code} 由页面替换为模块代号。 */
export const moduleFinalCta: SiteCta = {
  id: 'module',
  title: '把 {code} 排进你的课表',
  description:
    '开课预算根据学员规模与硬件套件核算。发邮件说明预期人数与目标深度，我们在 3 个工作日内提供详细排课与配置方案。',
  primary: 'contact',
  secondary: 'courses',
};

// ── /about ──────────────────────────────────────────────────────────

/**
 * 学院的来历。出处：
 * - 2011 年深圳成立、中国最早的创客空间之一：公开事实，owner 2026-10-02 确认
 *   「创客空间的历史就是学院的历史」。
 * - 硬件来自 Seeed 创办的产品体系：各模块设备清单的 SKU。
 * - 深圳、成都两处校区：页脚地址（owner 确认为实际联系通道）。
 */
export const aboutHistory: HistoryItem[] = [
  {
    id: 'founded',
    when: '2011',
    title: '柴火创客空间在深圳成立',
    description: '中国最早的创客空间之一。学院隶属于柴火创客空间，空间的历史就是学院的历史。',
    link: 'https://www.chaihuo.org',
  },
  {
    id: 'seeed',
    when: '硬件',
    title: '课上用的是体系内在售的同款硬件',
    description: '开发板、传感器、边缘计算设备按 SKU 就能买到，不是专供教学的道具。',
    link: 'https://www.seeedstudio.com',
  },
  {
    id: 'academy',
    when: '课程',
    title: '七个模块，每个分三档深度',
    description:
      'M0 零基础入门，M1–M6 各对应一类现场问题：楼宇能耗、语音与视觉交互、离网通信、视觉告警、环境监测、机械臂抓取。',
  },
  {
    id: 'sites',
    when: '两地',
    title: '深圳、成都各有一个校区',
    description: '深圳在南山区万科云城设计社区，成都在青羊区狮马路 92 号。',
  },
];

/**
 * 具名负责人。出处：owner 2026-10-02 确认冯磊为学院总协调负责人，可具名。
 * 引言原为 M0「写给老师」一节的署名引言，全站只在 /about 出现这一次。
 */
export const aboutPerson = {
  name: '冯磊',
  role: '柴火创客学院总协调负责人',
  quote:
    '一门课最好的归宿，不是被完整地执行一遍，而是被一位老师改到面目全非，然后变成只有他能上的那门课。',
};

export const aboutFinalCta: SiteCta = {
  id: 'about',
  title: '想把柴火的课带进你的学校或团队？',
  description: '发邮件说明对象和目标，我们 3 个工作日内回复合作建议。',
  primary: 'contact',
  secondary: 'courses',
};

// ── /contact ────────────────────────────────────────────────────────

/** 合作邮箱。全站唯一的合作收口（owner 决定：mailto，不做站内表单）。 */
export const contactEmail = 'business@chaihuo.org';

export const contactFaqs: FaqItem[] = [
  {
    key: 'q1',
    question: '从发邮件到开课一般要多久？',
    answer:
      '通常 3 个工作日内安排第一次沟通。标准教学套件发货后即可开课；全托交付和师资培训从确认需求到开课一般 2–4 周。',
  },
  {
    key: 'q5',
    question: '可以只引入某一个模块或某一档深度吗？',
    answer:
      '可以。M0–M6 每个模块都能单独开课，L1 / L2 / L3 也可以只上其中一档。我们会按你的目标建议最小的组合。',
  },
  {
    key: 'q2',
    question: '课程硬件套件必须从原厂采购吗？',
    answer:
      '裸硬件套件与标准教学套件使用原厂硬件，保证课程实验与教材一致。原厂硬件就是柴火创客空间所属产品体系内在售的产品（空间由 Seeed 创办），按 SKU 可购。合作伙伴也可以在自己的硬件平台上做适配，但实验手册和课程素材以原厂硬件为准。',
  },
  {
    key: 'q3',
    question: '师资培训套件具体包含什么内容？',
    answer:
      '包含对应模块的硬件套件、完整课程资源包以及 Train-the-Trainer 师训。师训通常由柴火讲师现场授课，时间 2–3 天，培养机构自有讲师。',
  },
  {
    key: 'q4',
    question: '全托交付套件可以按需定制吗？',
    answer:
      '可以。全托交付套件可按模块、级别、学员人数和目标场景定制，硬件、课程和讲师由柴火配齐，从备料到结课都由柴火负责。',
  },
  {
    key: 'q6',
    question: '接受海外合作吗？',
    answer:
      '接受。M3 自组网模块只在海外交付；其他模块的海外开课安排（授课语言、讲师外派）发邮件沟通。',
  },
];
