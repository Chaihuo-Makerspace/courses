// 课程数据类型定义
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
  difficulty: "入门" | "进阶" | "高级";
  duration: string;
  prerequisite?: string;
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

// 经典课程（无详情页）
export interface ClassicCourse {
  title: string;
  description: string;
  targetAudience: string;
  duration: string;
  accent: "red" | "yellow";
}


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
