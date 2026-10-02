export type ScenarioId = 'university' | 'integrator' | 'enterprise';
export type FormCode = 'A' | 'B' | 'C' | 'D';

export interface Scenario {
  id: ScenarioId;
  title: string;
  subtitle: string;
  features: string[];
  outcomes: string[];
  applicableForms: FormCode[];
}

export interface PartnershipForm {
  code: FormCode;
  title: string;
  subtitle: string;
  features: string[];
  deliverables: string[];
  suitableScenarios: ScenarioId[];
}

export const scenarios: Scenario[] = [
  {
    id: 'university',
    title: '高校 · 职业院校',
    subtitle: '课程共建 / 师资培训',
    features: [
      '有自研课程能力可选裸硬件套件',
      '标准教学套件到货就能开课',
      '师资培训套件培养自有讲师',
    ],
    outcomes: ['学生能做出可交付的系统', '课程内容跟上产业在用的技术', '有自己的讲师，能持续开课'],
    applicableForms: ['A', 'B', 'C', 'D'],
  },
  {
    id: 'integrator',
    title: '集成商 · 方案商',
    subtitle: '团队技能补齐 / 承接新品类',
    features: [
      '裸硬件套件灵活组合自有方案',
      '标准教学套件补齐团队能力',
      '师资培训套件沉淀内部讲师',
    ],
    outcomes: ['缩短新项目的交付准备', '团队能承接新的设备品类', '少依赖外部技术支持'],
    applicableForms: ['A', 'B', 'C', 'D'],
  },
  {
    id: 'enterprise',
    title: '企业 · 产业端',
    subtitle: '内训 / 定制交付',
    features: [
      '首次采购可选全托交付套件',
      '标准教学套件用于内训',
      '柴火讲师到场授课，从备料到结课全程负责',
    ],
    outcomes: ['核心团队掌握相关技术', '新业务方向先小范围验证', '减少对外部供应商的依赖'],
    applicableForms: ['B', 'C'],
  },
];

// 四种销售形态（硬件套件口径）：A 裸硬件 / B 标准教学 / C 全托交付 / D 师资培训。
export const partnershipForms: PartnershipForm[] = [
  {
    code: 'A',
    title: '裸硬件套件',
    subtitle: 'Bare Hardware Kit',
    features: ['仅含硬件与配件，不含课程资源', '适配自研课程，灵活组合', '按 M0–M6 模块自由选配'],
    deliverables: ['原厂硬件与配件', '模块选型清单', '硬件保修与供货支持'],
    suitableScenarios: ['university', 'integrator'],
  },
  {
    code: 'B',
    title: '标准教学套件',
    subtitle: 'Standard Teaching Kit',
    features: ['硬件 + 完整课程资源包', '含教材、课件与实验手册', '套件到货就能开课'],
    deliverables: ['对应模块硬件套件', '完整课程资源包', '持续课程内容更新'],
    suitableScenarios: ['university', 'integrator', 'enterprise'],
  },
  {
    code: 'C',
    title: '全托交付套件',
    subtitle: 'Full-Delivery Kit',
    features: [
      '硬件 + 课程 + 柴火讲师到场授课',
      '适合首次采购、没有讲师的客户',
      '从备料到结课由柴火负责',
    ],
    deliverables: ['硬件与课程资源', '柴火讲师现场授课', '课程交付与结业支持'],
    suitableScenarios: ['enterprise', 'university', 'integrator'],
  },
  {
    code: 'D',
    title: '师资培训套件',
    subtitle: 'Train-the-Trainer Kit',
    features: ['硬件 + 课程 + Train-the-Trainer 师训', '培养机构自有讲师', '可持续自主开课'],
    deliverables: ['硬件与课程资源', 'Train-the-Trainer 师资培训', '讲师认证与复训'],
    suitableScenarios: ['university', 'integrator'],
  },
];
