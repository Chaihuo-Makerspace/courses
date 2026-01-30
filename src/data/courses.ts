// 课程数据类型定义
export interface Course {
  slug: string;
  number: string;
  title: string;
  titleEn: string;
  tagline: string;
  scenarios: string[];
  painPoints: string[];
  techStack: string[];
  content: {
    items: {
      phase: string;
      description: string;
    }[];
  };
  accent: "red" | "yellow";
  relatedCases?: {
    title: string;
    image?: string;
    link?: string;
  }[];
}

// 五大实战课程
export const courses: Course[] = [
  {
    slug: "smart-space-energy",
    number: "01",
    title: "空间智能与能源管理",
    titleEn: "Smart Space & Energy Management",
    tagline: "本地化智能中枢 / 能效优化",
    scenarios: ["智能楼宇", "工业园区", "酒店公寓", "数据中心"],
    painPoints: ["系统割裂", "能耗不透明", "传统BA系统笨重贵"],
    techStack: ["Home Assistant", "ESPHome", "Modbus"],
    content: {
      items: [
        { phase: "认知规划", description: "理解智能空间架构与能源管理核心概念" },
        { phase: "工具实战", description: "掌握 Home Assistant 与 ESPHome 开发" },
        { phase: "部署集成", description: "完成本地化智能中枢的部署与调试" },
      ],
    },
    accent: "yellow",
  },
  {
    slug: "spatial-ai-agent",
    number: "02",
    title: "空间交互智能体",
    titleEn: "Spatial Interactive AI Agent",
    tagline: "多模态 AI 主动服务 / 语音视觉交互",
    scenarios: ["智慧办公", "高端零售", "康养社区", "展厅展馆"],
    painPoints: ["操作复杂", "体验被动", "人力响应成本高"],
    techStack: ["SenseCraft AI", "LLM", "MCP协议"],
    content: {
      items: [
        { phase: "认知规划", description: "理解空间智能体与多模态交互原理" },
        { phase: "工具实战", description: "掌握 SenseCraft AI 与 LLM 集成开发" },
        { phase: "部署集成", description: "完成语音视觉交互系统的本地化部署" },
      ],
    },
    accent: "red",
  },
  {
    slug: "mesh-lora-network",
    number: "03",
    title: "可靠离网通信网络",
    titleEn: "Reliable Off-Grid Communication",
    tagline: "自组网通信系统 / 复杂环境数据传输",
    scenarios: ["应急救援", "智慧农业", "野外作业"],
    painPoints: ["信号盲区", "网络脆弱", "特殊场景部署难"],
    techStack: ["Meshtastic", "LoRa", "GPS"],
    content: {
      items: [
        { phase: "认知规划", description: "理解 Mesh 网络与 LoRa 通信原理" },
        { phase: "工具实战", description: "掌握 Meshtastic 节点配置与组网" },
        { phase: "部署集成", description: "完成离网通信系统的现场部署" },
      ],
    },
    accent: "yellow",
  },
  {
    slug: "vision-ai-security",
    number: "04",
    title: "视觉AI安防与巡检",
    titleEn: "Vision AI Security & Inspection",
    tagline: "边缘计算AI安防 / 智能巡检",
    scenarios: ["工厂巡检", "周界安防", "智慧门店", "零售客流分析"],
    painPoints: [`传统监控"只录不防"`, "误报多", "智能化门槛高"],
    techStack: ["reCamera", "NVIDIA Jetson", "RTSP"],
    content: {
      items: [
        { phase: "认知规划", description: "理解边缘视觉 AI 与安防系统架构" },
        { phase: "工具实战", description: "掌握 reCamera 与 Jetson 开发部署" },
        { phase: "部署集成", description: "完成 AI 安防系统的本地化集成" },
      ],
    },
    accent: "red",
  },
  {
    slug: "smart-city-agriculture",
    number: "05",
    title: "智慧城市与农业物联网",
    titleEn: "Smart City & Agricultural IoT",
    tagline: "一体化物联网监控平台 / 智能预警",
    scenarios: ["智慧农林", "环境监测", "市政设施管理"],
    painPoints: ["设备杂乱", "数据孤岛", "远程运维难"],
    techStack: ["SenseHub", "Node-RED", "Modbus"],
    content: {
      items: [
        { phase: "认知规划", description: "理解物联网平台架构与数据融合" },
        { phase: "工具实战", description: "掌握 SenseHub 与 Node-RED 开发" },
        { phase: "部署集成", description: "完成物联网监控平台的部署与预警配置" },
      ],
    },
    accent: "yellow",
  },
];

// 经典课程（无详情页）
export interface ClassicCourse {
  title: string;
  description: string;
  accent: "red" | "yellow";
}

export const classicCourses: ClassicCourse[] = [
  {
    title: "Arduino智能硬件入门",
    description: "从零开始掌握硬件开发基础",
    accent: "yellow",
  },
  {
    title: "AI当程序员，我当创客",
    description: "用 AI 工具加速创客项目开发",
    accent: "red",
  },
  {
    title: "如何将 AI 添加到几乎任何事物",
    description: "为现有设备赋予 AI 能力",
    accent: "yellow",
  },
];

// 课程收获（按受众分组）
export interface CourseOutcome {
  audience: string;
  outcomes: string[];
}

export const courseOutcomes: CourseOutcome[] = [
  {
    audience: "企业管理者/项目负责人",
    outcomes: [
      "获得清晰的技术选型决策依据与立即可用的提案方案框架",
      "大幅降低项目前期试错成本与风险，掌握赋能团队的关键抓手",
    ],
  },
  {
    audience: "工程师/技术开发者",
    outcomes: [
      "积累解决过真实部署难题的完整项目经验与可移植的代码资产",
      "突破职业瓶颈，从执行者转变为能独立负责模块或项目的解题专家",
    ],
  },
  {
    audience: "个人学习者/创客",
    outcomes: [
      `获得柴火官方认证证书，并进入"柴火人才库"`,
      "优先对接生态合作企业项目，将兴趣转化为职业竞争力与高价值入场券",
    ],
  },
];
