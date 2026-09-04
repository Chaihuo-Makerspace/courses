export type ModuleId = 'm0' | 'm1' | 'm2' | 'm3' | 'm4' | 'm5';
export type LevelId = 'L1' | 'L2' | 'L3';

export interface ModuleCell {
  title: string;
  subtitle: string;
  durationDays: number;
  outcomes: string[];
  comingSoon?: boolean;
}

/** 一条 hero 速览事实（难度 / 时长 / 排课形态…）。 */
export interface ModuleFact {
  label: string;
  value: string;
}

/** 一件课程硬件：名称 + 一句话速览 + 图文说明。 */
export interface HardwareItem {
  name: string;
  /** 一句话速览（卡片副标题）。 */
  note: string;
  /** 详细介绍（卡片正文）。 */
  description: string;
  image: string;
  imageAlt: string;
}

/** 课程所需硬件的图文介绍区块（M1–M5 使用；M0 用 kits/hardwareList）。 */
export interface HardwareIntro {
  /** 区块主标题。缺省时用通用标题「课程所需硬件」。 */
  title?: string;
  subtitle?: string;
  items: HardwareItem[];
  /** 区块底部的配件备注（屏幕 / 电源 / 路由器等通用配件）。 */
  note?: string;
}

/** 一张能力卡：标题 + 展开说明。`capabilities` 的长文形态。 */
export interface Capability {
  title: string;
  body: string;
}

/** 一项交付物：标题 + 展开说明。`deliverables` 的长文形态。 */
export interface Deliverable {
  title: string;
  body: string;
}

/** 工具链接力的一段（如 Codecraft → aily-blockly 的前半程 / 后半程）。 */
export interface ToolchainStage {
  name: string;
  meta: string;
  steps: string[];
  /** 柔黄底强调这一段（全站唯一允许的黄面，见 docs/DESIGN.md §1.1）。 */
  highlight?: boolean;
}

export interface Toolchain {
  stages: ToolchainStage[];
  /** 两段之间的转折点，渲染为反转黑面窄条。 */
  hinge: { title: string; body: string };
  note?: string;
}

/** 一套子套件（M0-A / B / C）。 */
export interface Kit {
  code: string;
  title: string;
  hardware: string;
  body: string;
  image: string;
  imageAlt: string;
}

/** 备料池：套件之外可自由取用的模块。 */
export interface KitPool {
  title: string;
  body: string;
}

/** 覆盖深度：完整 / 精简 / 不含 / 比完整版更深。 */
export type Coverage = 'full' | 'part' | 'none' | 'plus';

/** 一个教学模块（10 模块骨架的一行）。 */
export interface CurriculumItem {
  no: string;
  title: string;
  detail: string;
  tool: string;
  /** 各排课形态对该模块的覆盖深度，键为 Format['id']。 */
  coverage: Record<string, Coverage>;
  /** 关键转折点，行内高亮。 */
  hinge?: boolean;
}

/** 一种排课形态（周课 / 课后 / 集训 / 马拉松 / 体验课…）。 */
export interface Format {
  id: string;
  name: string;
  meta: string;
  shortName: string;
  shortMeta: string;
}

/** 形态所属的层（完整版 / 马拉松版 / 体验课）。 */
export interface Tier {
  title: string;
  /** Final Project 的交付程度。 */
  finalProject: { label: string; included: boolean };
  summary: string;
  rows: { title: string; meta: string; body: string }[];
  footnote: string;
}

/** 「写给老师」：底座 + 可改写的口子 + 作者引言。 */
export interface TeacherNotes {
  heading: string;
  /** heading 中需要黄色下划线强调的片段，必须是 heading 的子串。 */
  emphasis?: string;
  intro: string;
  openings: { no: string; title: string; body: string }[];
  quote: { text: string; cite: string };
}

export interface Module {
  id: ModuleId;
  slug: string;
  code: string;
  title: string;
  subtitle: string;
  oneLiner: string;
  /** oneLiner 中需要黄色下划线强调的片段，必须是 oneLiner 的子串。 */
  oneLinerEmphasis?: string;
  realProblem: string;
  illustration: string;
  difficulty: string;
  duration: string;
  prerequisite?: string;
  scenarios: string[];
  painPoints: string[];
  techStack: string[];
  coreHardware: string[];
  capabilities: string[];
  audience: string[];
  deliverables: string[];
  accent: 'red' | 'yellow';
  cells: Record<LevelId, ModuleCell>;

  // ── 以下为可选深度内容 ─────────────────────────────────────────
  // 目前只有 M0 提供。字段缺席时 /courses/[slug] 直接跳过对应区块，
  // M1–M5 无需改动。将来任一模块想要同样的深度，填上即可。

  /** hero 速览条。缺省时不渲染。 */
  facts?: ModuleFact[];
  /** 核心硬件的图文清单（hero 侧栏）。 */
  hardwareList?: { key: string; name: string; note: string }[];
  /** M1–M5 课程所需硬件的图文介绍区块。 */
  hardwareIntro?: HardwareIntro;
  /** 能力卡长文版。存在时取代 `capabilities` 的短语渲染。 */
  capabilityCards?: Capability[];
  /** 能力卡下方的补充说明块。 */
  capabilityCallout?: string;
  /** 工具链接力。 */
  toolchain?: Toolchain;
  /** 子套件 + 备料池。 */
  kits?: { items: Kit[]; pool: KitPool };
  /** 10 模块骨架 × 排课形态矩阵。与 `formats` 成对出现。 */
  curriculum?: { items: CurriculumItem[]; callout?: string };
  /** 排课形态定义 + 分层详情。 */
  formats?: { items: Format[]; tiers: Tier[]; callouts?: string[]; warnings?: string[] };
  /** 交付物长文版。存在时取代 `deliverables` 的短语渲染。 */
  deliverableCards?: Deliverable[];
  /** 交付物区块的前言。 */
  deliverablesIntro?: string;
  /** 写给老师。 */
  teacherNotes?: TeacherNotes;
}

export const modules: Module[] = [
  {
    id: 'm0',
    slug: 'm0',
    code: 'M0',
    title: '零基础智能硬件入门',
    subtitle: 'Smart Hardware Fundamentals',
    oneLiner:
      '用中文告诉 AI 你想做什么，AI 写代码、编译、烧录。零编程基础，也能做出属于自己的智能硬件作品。',
    oneLinerEmphasis: '零编程基础',
    realProblem:
      '学生不会写代码、合格师资极少、从创意到原型总是断层——硬件启蒙卡在"先学会编程"这道伪门槛上。M0 把门槛拆掉，让想象力重新成为真正的难题。',
    illustration: '/illustrations/m0.png',
    difficulty: '入门',
    duration: '半天起 · 完整版 16–20 小时',
    scenarios: [
      '高校通识课',
      '创客训练营',
      'K12 课后服务 / 四点半课堂',
      '科技节 · 双创周',
      '教师工作坊',
      '企业创新体验',
      '柴火基地车巡游',
    ],
    painPoints: ['学生不会写代码', '合格师资极少', '创意到原型断层'],
    techStack: ['Codecraft', 'aily-blockly', 'Grove · Wio Terminal · XIAO', 'BMAD', 'NLHD 教材'],
    coreHardware: ['Grove 套件', 'Wio Terminal', 'XIAO ESP32S3 Sense'],
    capabilities: [
      'AI 辅助编程 5 大法则',
      '感知→逻辑→输出 心智模型',
      'BMAD 五角色项目工作流',
      'SenseCraft AI 无代码模型部署',
    ],
    audience: ['零基础学生', '高校通识课教师', '创客训练营学员', '企业创新体验人员'],
    deliverables: [
      '第一个可运行的智能硬件原型',
      '一个有结构的完整项目（如智能番茄钟）',
      '边缘 AI 图像分类 demo',
    ],
    accent: 'red',
    // M0 按硬件平台分层（A: Grove / B: Wio Terminal / C: XIAO），映射到矩阵的 L1/L2/L3 三行。
    cells: {
      L1: {
        title: 'A · 感知',
        subtitle: 'Grove × Codecraft',
        durationDays: 1,
        outcomes: [
          '用 Grove 套件在 Codecraft 完成第一个可运行原型',
          '建立「感知→逻辑→输出」心智模型',
          '掌握 AI 辅助编程 5 大法则',
        ],
      },
      L2: {
        title: 'B · 交互',
        subtitle: 'Wio Terminal × BMAD',
        durationDays: 1,
        outcomes: [
          '用 Wio Terminal 彩屏实现人机交互界面',
          '以 BMAD 五角色工作流完成有结构的完整项目',
          '交付如智能番茄钟等可演示作品',
        ],
      },
      L3: {
        title: 'C · 视觉',
        subtitle: 'XIAO ESP32S3 Sense',
        durationDays: 1,
        outcomes: [
          '用 XIAO 摄像头实现图像分类与边缘 AI 推理',
          '体验 SenseCraft AI 无代码模型部署',
          '理解边缘视觉的基本流程',
        ],
      },
    },

    facts: [
      { label: '难度', value: '入门' },
      { label: '完整版', value: '16–20 小时' },
      { label: '最短形态', value: '半天 2 小时' },
      { label: '排课形态', value: '3 层 6 种' },
    ],

    hardwareList: [
      { key: 'A', name: 'Grove Beginner Kit', note: '11 模块一体式底板 · 免焊接' },
      { key: 'B', name: 'Wio Terminal', note: '2.4″ 彩屏 + 摇杆 + 按键' },
      { key: 'C', name: 'XIAO ESP32S3 Sense', note: '拇指盖大小 + 摄像头 + 麦克风' },
      { key: '＋', name: 'Grove 40 合一备料池', note: '分组共用 · 做项目时自由取用' },
    ],

    capabilityCards: [
      {
        title: '感知 → 逻辑 → 输出',
        body: '拿到任何一个智能产品，能立刻拆解出「它感知什么、怎么判断、输出什么」，并画出自己的系统草图。',
      },
      {
        title: '把想法说清楚',
        body: '把「我想做个提醒喝水的东西」变成 AI 能精确理解的结构化需求：输入 / 逻辑 / 输出 / 边界。',
      },
      {
        title: '和 AI 协作',
        body: 'AI 辅助编程 5 大法则：一次只改一件事、报错原样贴回去、先跑通再优化、让 AI 解释、留住能用的版本。',
      },
      {
        title: 'BMAD 五角色工作流',
        body: '用 PM / UX / 架构 / 开发 / 测试 五个角色分步驱动 AI，把「能跑」的原型做成「有结构、能维护」的项目。',
      },
      {
        title: '调试与迭代',
        body: '看得懂报错、找得到问题、改得动作品；知道卡住时的三步求助法——问 AI、问同桌、问老师。',
      },
      {
        title: '记录与讲述',
        body: '写创客日志、录 30 秒演示视频、用 2 分钟把「痛点 → 方案 → 演示 → 价值」讲给陌生人听。',
      },
    ],
    capabilityCallout:
      'BMAD 不只是做硬件的方法。写作业、做小组课题、策划一场活动，都能套用同一个流程。这是学生能带走的「元方法」——也是这门课里唯一一件，十年后大概率还在用的东西。',

    toolchain: {
      stages: [
        {
          name: 'Codecraft',
          meta: '浏览器 · 零安装 · 5 分钟见效',
          steps: ['完全新手', '能跑通'],
          highlight: true,
        },
        {
          name: 'aily-blockly',
          meta: '桌面 · 工程化 · 作品永久属于自己',
          steps: ['能改代码', '能造工程', '能带走继续做'],
        },
      ],
      hinge: {
        title: '关键转折点 · 模块 8',
        body: 'Codecraft 的作品在服务器上，关掉浏览器就带不走；aily-blockly 让学生第一次从"租户"变成项目的"主人"。',
      },
      note: '另需 SenseCraft AI（无代码部署与训练视觉模型，用于模块 5 与视觉体验课，需外网）、NLHD 15 章中文教材（开源免费，结课后可长期自学）。',
    },

    kits: {
      items: [
        {
          code: 'M0-A',
          title: '环境感知',
          hardware: 'Grove Beginner Kit',
          body: '11 个模块一体式底板：OLED 屏、按键、旋钮、蜂鸣器、LED、光线／温湿度／气压／声音／加速度传感器。免焊接、免面包板。第一个「感知→逻辑→输出」闭环作品。',
          image: '/illustrations/m0-kit-a.png',
          imageAlt: 'Grove Beginner Kit 一体式底板',
        },
        {
          code: 'M0-B',
          title: '交互设计',
          hardware: 'Wio Terminal',
          body: '2.4 寸彩屏 + 三向摇杆 + 三按键 + 内置加速度计 + Grove 接口的掌上开发板。做带界面的人机交互作品：智能番茄钟、水平仪、体感小游戏。',
          image: '/illustrations/m0-kit-b.png',
          imageAlt: 'Wio Terminal 掌上开发板',
        },
        {
          code: 'M0-C',
          title: '视觉智能',
          hardware: 'XIAO ESP32S3 Sense',
          body: '拇指盖大小主控 + OV2640 摄像头 + 数字麦克风 + SD 卡槽，配扩展板、蜂鸣器、mini 风扇。端侧 AI：图像分类、人脸／物体检测。',
          image: '/illustrations/m0-kit-c.png',
          imageAlt: 'XIAO ESP32S3 Sense 与扩展配件',
        },
      ],
      pool: {
        title: '＋ Grove 40 合一扩展套件（分组共用备料池）',
        body: '超声波测距、水位、土壤湿度、震动、舵机、继电器、MP3、RGB 灯带…… 做自己的项目时自由取用，不受「套件里只有这几个模块」的限制。',
      },
    },

    formats: {
      items: [
        {
          id: 'weekly',
          name: '完整版 · 周课排',
          meta: '10 次 × 2h',
          shortName: '周课',
          shortMeta: '10×2h',
        },
        {
          id: 'after-school',
          name: '完整版 · 课后排',
          meta: '16 次 × 1h',
          shortName: '课后',
          shortMeta: '16×1h',
        },
        {
          id: 'intensive',
          name: '完整版 · 集训排',
          meta: '4–5 天 × 4h',
          shortName: '集训',
          shortMeta: '4–5天',
        },
        {
          id: 'marathon',
          name: '马拉松版',
          meta: '2 天 · 12–14h',
          shortName: '马拉松',
          shortMeta: '2天',
        },
        {
          id: 'coding-taster',
          name: '编程体验课',
          meta: '半天 · 2h',
          shortName: '编程',
          shortMeta: '2h',
        },
        {
          id: 'vision-taster',
          name: '视觉体验课',
          meta: '半天 · 2h',
          shortName: '视觉',
          shortMeta: '2h',
        },
      ],
      tiers: [
        {
          title: '完整版',
          finalProject: { label: 'FP 完整', included: true },
          summary: '16–20h · M0-A + B + C + 备料池',
          rows: [
            {
              title: '周课排',
              meta: '10 次 × 2 小时 · 20h',
              body: '社团课、周末营、每周一次的常规课程',
            },
            {
              title: '课后排',
              meta: '16 次 × 1 小时 · 16h',
              body: '课后服务 / 四点半课堂等单节偏短的时段',
            },
            {
              title: '集训排',
              meta: '4–5 天 × 4 小时 · 16–20h',
              body: '寒暑假冬夏令营、驻校集训周',
            },
          ],
          footnote: 'Codecraft + aily-blockly + SenseCraft AI · 10 个模块全覆盖',
        },
        {
          title: '马拉松版',
          finalProject: { label: 'FP 精简', included: true },
          summary: '2 天 · 12–14h · 仅 M0-A + 备料池',
          rows: [
            {
              title: 'Day 1 上午',
              meta: '模块 1 + 2',
              body: '不可能挑战 → Grove 感知闭环 → 3 个小作品',
            },
            {
              title: 'Day 1 下午',
              meta: '模块 6 + 4（BMAD 精简）',
              body: '找一个真问题 → 组队选题 → PRD',
            },
            { title: 'Day 2 上午', meta: '模块 7', body: '备料池选型 → 原型冲刺 → MVP v0.1' },
            { title: 'Day 2 下午', meta: '模块 9 + 10', body: '迭代 → 文档 → 30 秒视频 → 路演' },
          ],
          footnote: '单一硬件平台是刻意的：把全部时间押在创意、原型、文档上。助教配比建议 1:5–6。',
        },
        {
          title: '体验课',
          finalProject: { label: '无 FP', included: false },
          summary: '半天 2h · 零安装 · 单一硬件',
          rows: [
            {
              title: '编程体验课',
              meta: 'Wio Terminal × Codecraft',
              body: '卖「AI 能帮我做事」——2 小时做出智能番茄钟，走一遍 BMAD。方法可迁移。',
            },
            {
              title: '视觉体验课',
              meta: 'XIAO × SenseCraft AI',
              body: '卖「AI 能装进指甲盖」——一行代码不写，训出自己的模型。门槛最低。',
            },
          ],
          footnote:
            '两门可合并成一个整天（4h）体验日：上午编程、下午视觉，覆盖生成式 AI + 端侧 AI 两条主线。',
        },
      ],
      callouts: [
        '编程体验课是柴火基地车（MCV）全国巡游的标配工作坊。零安装、单一硬件、2 小时闭环、断网只是慢不会废场——这四条正是「车到人到、当天开课」最需要的性质。基地车上的分工：快闪一站 → 编程体验课；驻校两天 → 马拉松版；有网络且做 AI 主题 → 视觉体验课。',
      ],
      warnings: [
        '选课后排（16×1h）前请注意：16 × 1h = 16 小时，比周课排的 20 小时少 4 小时；每节固定开销（开机、发设备、连线、收纳）约 10 分钟，节数越多损耗越大——实际动手时间约 13h vs 18h。取舍是真实的：FP 迭代从两轮压到一轮，发布会 1 小时偏紧，建议争取双节连堂。',
        '16 次建议每周 2 次，不要每周 1 次。每周 1 次战线拉到 16 周（约一整学期），学生对自己的 Final Project 会「掉线」。每周 2 次 ≈ 8 周，节奏与周课排接近。',
        '视觉体验课的唯一硬约束是网络。SenseCraft AI 在云端训练，必须能访问外网且撑住全班并发上传——编程体验课断网只是慢，视觉体验课断网就是整场报废。落地前柴火会到场实测完整链路，并备好热点与预制模型兜底。',
      ],
    },

    curriculum: {
      items: [
        {
          no: '01',
          title: '不可能挑战',
          detail: '5 分钟让屏幕显示自己的名字 · AI 编程心智建立',
          tool: 'Codecraft',
          coverage: {
            weekly: 'full',
            'after-school': 'full',
            intensive: 'full',
            marathon: 'full',
            'coding-taster': 'part',
            'vision-taster': 'none',
          },
        },
        {
          no: '02',
          title: 'Grove 进阶',
          detail: '感知→逻辑→输出闭环 · AI 辅助编程 5 大法则',
          tool: 'Codecraft',
          coverage: {
            weekly: 'full',
            'after-school': 'full',
            intensive: 'full',
            marathon: 'full',
            'coding-taster': 'none',
            'vision-taster': 'none',
          },
        },
        {
          no: '03',
          title: 'Wio Terminal 带屏交互',
          detail: '界面、状态、按键',
          tool: 'Codecraft',
          coverage: {
            weekly: 'full',
            'after-school': 'full',
            intensive: 'full',
            marathon: 'none',
            'coding-taster': 'full',
            'vision-taster': 'none',
          },
        },
        {
          no: '04',
          title: 'BMAD 五角色工作流',
          detail: '从「能跑」到「有结构」· 智能番茄钟',
          tool: 'Codecraft + BMAD',
          coverage: {
            weekly: 'full',
            'after-school': 'full',
            intensive: 'full',
            marathon: 'part',
            'coding-taster': 'full',
            'vision-taster': 'none',
          },
        },
        {
          no: '05',
          title: 'XIAO + 摄像头',
          detail: '什么是端侧 AI（TinyML）· 图像分类实战',
          tool: 'SenseCraft AI',
          coverage: {
            weekly: 'full',
            'after-school': 'full',
            intensive: 'full',
            marathon: 'none',
            'coding-taster': 'none',
            'vision-taster': 'plus',
          },
        },
        {
          no: '06',
          title: '找一个真问题',
          detail: 'Final Project 选题锁定 + PRD + 系统草图',
          tool: '—',
          coverage: {
            weekly: 'full',
            'after-school': 'full',
            intensive: 'full',
            marathon: 'full',
            'coding-taster': 'none',
            'vision-taster': 'none',
          },
        },
        {
          no: '07',
          title: '原型 v1',
          detail: 'MVP 拆解：最多 3 个功能，必须闭环',
          tool: 'Codecraft',
          coverage: {
            weekly: 'full',
            'after-school': 'full',
            intensive: 'full',
            marathon: 'full',
            'coding-taster': 'none',
            'vision-taster': 'none',
          },
        },
        {
          no: '08',
          title: '关键转折点',
          detail: '从浏览器到桌面，第一次「拥有」自己的工程',
          tool: 'aily-blockly',
          hinge: true,
          coverage: {
            weekly: 'full',
            'after-school': 'part',
            intensive: 'full',
            marathon: 'none',
            'coding-taster': 'none',
            'vision-taster': 'none',
          },
        },
        {
          no: '09',
          title: '从玩具到产品',
          detail: '自定义传感器／库 · 外观 · 用户试用 + 互相挑刺',
          tool: 'aily-blockly',
          coverage: {
            weekly: 'full',
            'after-school': 'part',
            intensive: 'full',
            marathon: 'part',
            'coding-taster': 'none',
            'vision-taster': 'none',
          },
        },
        {
          no: '10',
          title: '发布会',
          detail: '打磨 → 录视频 → 路演 → 结营',
          tool: '自选',
          coverage: {
            weekly: 'full',
            'after-school': 'full',
            intensive: 'full',
            marathon: 'full',
            'coding-taster': 'part',
            'vision-taster': 'part',
          },
        },
      ],
      callout:
        '●＋ 是怎么回事：完整版的模块 5 只有一节课，视觉体验课用整整 2 小时只做视觉——因此多出「自己采数据、自己训模型、故意把它训错」这一段，而这恰恰是最有价值的部分。',
    },

    deliverablesIntro:
      '以下为完整版交付；马拉松版交付作品、文档、视频与源码；两门体验课分别交付番茄钟项目与自训 AI 模型。',
    deliverableCards: [
      {
        title: 'Final Project 作品',
        body: '学生自己想解决的问题，不是老师布置的题目。硬件回收，作品照片／视频保留。',
      },
      {
        title: '完整源码',
        body: 'Codecraft 云端作品 3+ 个，aily-blockly 本地工程 1 个，可上传 GitHub。',
      },
      {
        title: '项目文档',
        body: '问题／方案／用户、系统草图、硬件清单、实现过程、AI 协作记录。',
      },
      { title: '30 秒演示视频', body: '横屏，可直接用于比赛、素养档案。' },
      {
        title: '创客日志',
        body: '贯穿全程的过程记录——它就是参赛与发布的现成素材，无需事后补做。',
      },
      {
        title: '自训 AI 模型',
        body: '自己采数据、云端训练、部署在 XIAO 上跑的图像分类模型。',
      },
      {
        title: 'Codecraft 平台席位',
        body: '人手一席，有效期内持续可用——结课后回家打开浏览器就能接着做。',
      },
      { title: '结课证书', body: '柴火创客学院 M0 结业认证（体验课为参与证明）。' },
    ],

    teacherNotes: {
      heading: '我们希望你把它改成我们认不出来的样子',
      emphasis: '我们认不出来的样子',
      intro:
        '这份课程不是一个封闭的产品，是一个底座。柴火是一家创客空间，开源是我们的底色——M0 交付的从来不只是「一次上课」，而是一整套可以被拆开、改写、重新组装的东西：10 模块骨架、教师教案与 PPT、学生手册、Codecraft 云端项目、NLHD 开源教材、40 合一备料池。',
      openings: [
        {
          no: '口子 01',
          title: '换主题',
          body: '模块 6「找一个真问题」的问题域是开放的：你的学科、贵校的科技节、这座城市正在发生的一件真事。问题越靠近学生的生活，效果越好——而这件事你比我们懂。',
        },
        {
          no: '口子 02',
          title: '接资源',
          body: '你已有的社团项目、竞赛课题、校本课程，可以接在模块 7 之后，成为 Final Project 的方向池。M0 负责把技术门槛拆掉，门后面是什么，由你来定。',
        },
        {
          no: '口子 03',
          title: '加你的东西',
          body: '你教了很多年书攒下的那些：讲法、比喻、能让学生眼睛亮起来的那一下——那正是我们没有、也给不了的部分。',
        },
      ],
      quote: {
        text: '一门课最好的归宿，不是被完整地执行一遍，而是被一位老师改到面目全非，然后变成只有他能上的那门课。',
        cite: '—— 冯磊，本系列课程作者',
      },
    },
  },
  {
    id: 'm1',
    slug: 'm1',
    code: 'M1',
    title: '设备互联与智能管控',
    subtitle: 'Device Integration & Intelligent Control',
    oneLiner: '跨品牌、跨代际设备统一管控，打破数据孤岛，构建全场景智能中枢。',
    realProblem:
      '管理系统碎片化、能耗流向不可见、过度依赖云端——空间里的设备各管一摊，没有统一可编排的中枢。',
    illustration: '/illustrations/m1.svg',
    difficulty: '入门',
    duration: '2 天',
    scenarios: ['楼宇能源管理', '办公空间自动化', '机房环境监测', '酒店客控', '实验室管理'],
    painPoints: ['管理系统碎片化', '能耗流向不可见', '云端依赖风险高'],
    techStack: ['Home Assistant', 'ESPHome', 'Node-RED', 'Modbus'],
    coreHardware: ['Home Assistant 智能中枢', 'ESPHome 设备', 'Modbus 网关'],
    capabilities: [
      'Home Assistant 部署与配网',
      'ESPHome 设备接入',
      'Node-RED 自动化编排',
      'Modbus 工业设备数字化',
    ],
    audience: ['楼宇 / 园区运维', '智能空间集成商', '机房与实验室管理', '酒店工程团队'],
    deliverables: [
      '跨品牌设备统一控制中枢',
      '能源流向看板与节能自动化',
      '工业设备数字化的私有化部署方案',
    ],
    accent: 'yellow',
    cells: {
      L1: {
        title: '统一控制中枢',
        subtitle: '展示层 · 单点体验',
        durationDays: 1,
        outcomes: ['部署智能中枢', '接入空调 / 照明 / 安防等跨品牌设备', '实现统一控制'],
      },
      L2: {
        title: '能源看板与自动化',
        subtitle: '顾问层 · 场景联动',
        durationDays: 1,
        outcomes: ['搭建能源流向看板', '配置「人走灯灭」等节能策略', '交付可用的自动化系统'],
      },
      L3: {
        title: '工业设备数字化',
        subtitle: '设计层 · 业务集成',
        durationDays: 1,
        outcomes: ['改造传统工业设备并数字化', '接入智能中枢', '实现私有化部署'],
      },
    },

    hardwareIntro: {
      subtitle: '本课程的教学核心设备，围绕「统一管控中枢 + 多协议接入」构建。',
      items: [
        {
          name: 'reComputer R1225',
          note: 'LoRaWAN 网关 & 工业控制器',
          description:
            '基于树莓派 CM4 的工业级边缘网关，自带 3×RS485、双以太网，原生支持 BACnet / Modbus，可对接楼宇自控与工业设备，做私有化部署的智能中枢。',
          image: '/illustrations/m1-recomputer-r1225.png',
          imageAlt: 'reComputer R1225 LoRaWAN 网关与工业控制器',
        },
        {
          name: 'XIAO ESP32-C5',
          note: '双频 Wi-Fi 6 · RISC-V',
          description:
            'XIAO 家族首款支持 5GHz Wi-Fi 的模块，体积拇指大小，作为 ESPHome 节点的低功耗主控，让普通电器快速联网入系。',
          image: '/illustrations/m1-xiao-esp32-c5.png',
          imageAlt: 'XIAO ESP32-C5 开发板',
        },
        {
          name: 'XIAO W5500 以太网适配器',
          note: '有线接入 · ESPHome 即插即用',
          description:
            '为 XIAO 提供稳定有线以太网接入，适合对 Wi-Fi 不稳、要求可靠连线的设备（弱电箱、工业柜等）做免维护部署。',
          image: '/illustrations/m1-xiao-ethernet-adapter.png',
          imageAlt: 'XIAO 以太网适配器',
        },
        {
          name: 'RS485 扩展板',
          note: 'RS-485 收发 · 1200m 传输',
          description:
            '把 XIAO 变成标准 RS-485 设备，配合 Modbus 协议读写工业仪表、电表、变频器等存量设备，是工业数字化改造的入口。',
          image: '/illustrations/m1-rs485-breakout.png',
          imageAlt: 'RS485 扩展板',
        },
        {
          name: 'Indicator D1S',
          note: '4 英寸触摸屏 IoT 开发平台',
          description:
            'ESP32S3 + RP2040 双主控的可编程触控屏，开源可定制，用来做温控面板、场景开关等本地交互终端。',
          image: '/illustrations/m1-indicator-d1s.png',
          imageAlt: 'SenseCAP Indicator D1S 触摸屏开发平台',
        },
        {
          name: 'reTerminal E1001',
          note: '7.5 英寸电子纸屏 · 续航 3 个月',
          description:
            '基于 ESP32-S3 的开源单色电子纸显示器，功耗极低，适合做能耗看板、房间状态牌等常显不插电的展示终端。',
          image: '/illustrations/m1-reterminal-e1001.png',
          imageAlt: 'reTerminal E1001 电子纸显示屏',
        },
        {
          name: '60GHz 毫米波跌倒检测',
          note: '人体存在与跌倒识别',
          description:
            'MR60FDA2 毫米波传感器套件，无需摄像头即可检测人体存在与跌倒，结合 ESPHome 接入中枢，实现安防与照护联动。',
          image: '/illustrations/m1-60ghz-mmwave-fall.png',
          imageAlt: 'XIAO 60GHz 毫米波人体跌倒检测传感器',
        },
        {
          name: 'SenseCAP Watcher',
          note: '小智 AI 语音交互设备',
          description:
            '能看、能听、能说的 AI 交互设备，接本地大模型后作为空间的语音控制入口，演示「说一句话开灯关空调」的完整闭环。',
          image: '/illustrations/m1-sensecap-watcher.png',
          imageAlt: 'SenseCAP Watcher 小智版',
        },
      ],
      note: '另配屏幕、整体电源设计、路由器等通用配件，以及 Wi-Fi 灯、485 传感器等待控制配件。',
    },
  },
  {
    id: 'm2',
    slug: 'm2',
    code: 'M2',
    title: '多模态 AI 交互',
    subtitle: 'Multimodal AI Interaction',
    oneLiner: '解放双手，主动服务：打造能听懂业务、能看见需求的 AI 交互终端。',
    realProblem:
      '系统操作依赖专业技能、物理交互限制效率、需求响应总是滞后——交互方式没跟上，AI 能力就落不了地。',
    illustration: '/illustrations/m2.svg',
    difficulty: '进阶',
    duration: '2 天',
    prerequisite: '建议先学习 M1 设备互联与智能管控',
    scenarios: ['展厅智能导览', '智能前台', '智慧零售', '仓库管理', '空间主动服务'],
    painPoints: ['系统操作依赖专业技能', '物理交互限制业务效率', '需求响应滞后，被动服务'],
    techStack: ['SenseCraft AI', 'Watcher', 'LLM', 'MCP 协议', '语音交互'],
    coreHardware: ['Watcher', '麦克风阵列', '边缘 AI 主机'],
    capabilities: [
      'SenseCraft AI 零代码训练',
      'Watcher 多模态交互',
      'LLM 本地部署',
      'MCP 工具开发',
    ],
    audience: ['展厅与文旅运营', '智慧零售方案商', '空间服务集成商', 'AI 应用开发者'],
    deliverables: ['零代码的多模态交互体验', '本地 AI 后端与工具库接入', '完全私有化的业务闭环'],
    accent: 'red',
    cells: {
      L1: {
        title: '零代码 AI 交互',
        subtitle: '展示层 · 单点体验',
        durationDays: 1,
        outcomes: ['零代码体验 AI 交互与视觉训练', '接入智能中枢', '实现基础的多模态交互'],
      },
      L2: {
        title: '本地 AI 后端',
        subtitle: '顾问层 · 场景联动',
        durationDays: 1,
        outcomes: ['本地部署 AI 后端服务', '配置模型参数', '连接现有的工具库'],
      },
      L3: {
        title: '私有化业务闭环',
        subtitle: '设计层 · 业务集成',
        durationDays: 1,
        outcomes: ['本地化部署大语言模型', '开发自定义工具', '实现完全私有化的业务闭环'],
      },
    },
    hardwareIntro: {
      subtitle: '本课程以「看得见的 AI 终端 + 本地推理算力」为核心教具。',
      items: [
        {
          name: 'reComputer RK3588-40',
          note: 'AI 边缘计算盒子 · 6 TOPS NPU',
          description:
            '8 核 + 6 TOPS NPU 的开源 AI 盒子，可一键扩展至 26 TOPS，用于本地部署大语言模型与多模态推理服务，是所有 AI 能力落地的算力底座。',
          image: '/illustrations/m2-recomputer-rk3588.png',
          imageAlt: 'reComputer RK3588-40 AI 边缘计算盒子',
        },
        {
          name: 'reTerminal D1001',
          note: '8 英寸触摸 HMI · Wi-Fi 6',
          description:
            '基于 ESP32-P4 的 8 英寸智能 HMI 终端，带摄像头与双麦克风，支持 Wi-Fi 6 / BLE 5 / Zigbee / Matter，是展厅导览、前台接待等交互场景的主力界面。',
          image: '/illustrations/m2-reterminal-d1001.png',
          imageAlt: 'reTerminal D1001 触摸屏 HMI 终端',
        },
        {
          name: 'SenseCAP Watcher ×2',
          note: '小智 AI 语音视觉交互设备',
          description:
            '能看、能听、能说的 AI 终端，接本地大模型后担当空间里的「主动服务口」——客人来了主动招呼，提问即时作答，演示多模态交互闭环。',
          image: '/illustrations/m1-sensecap-watcher.png',
          imageAlt: 'SenseCAP Watcher 小智版',
        },
      ],
      note: '另配屏幕、整体电源设计、路由器等通用配件。',
    },
  },
  {
    id: 'm3',
    slug: 'm3',
    code: 'M3',
    title: '自组网与韧性通信',
    subtitle: 'Mesh Networking & Resilient Communication',
    oneLiner: '零依赖，全连通，构建去中心化的韧性通信网络。',
    realProblem:
      '通信盲区就意味着失控、中心节点太脆弱、应急部署门槛又高——一旦断网，整个系统跟着失灵。',
    illustration: '/illustrations/m3.svg',
    difficulty: '进阶',
    duration: '1.5 天',
    scenarios: ['应急救援', '户外探索与赛事保障', '地下空间通信', '野外科考'],
    painPoints: ['通信盲区即失控', '中心节点太脆弱', '应急部署门槛高'],
    techStack: ['Mission Pack', 'Meshtastic', 'LoRa', 'GPS', 'Node-RED'],
    coreHardware: ['Mission Pack', 'Meshtastic 终端', 'LoRa 模块'],
    capabilities: [
      'Mesh 中继规划',
      'Meshtastic 组网与监听',
      'LoRa 离网通信',
      'Node-RED 自动化联动',
    ],
    audience: ['应急通信团队', '户外赛事保障', '野外科考', '公共安全集成商'],
    deliverables: [
      'Mesh 中继规划与盲区覆盖',
      '网络异常与位置信息的自动化联动',
      '自定义的离网传感设备',
    ],
    accent: 'yellow',
    cells: {
      L1: {
        title: '设备与中继规划',
        subtitle: '展示层 · 单点体验',
        durationDays: 1,
        outcomes: ['掌握设备基础操作', '规划 Mesh 中继', '解决复杂环境下的通信盲区'],
      },
      L2: {
        title: '网络监听与联动',
        subtitle: '顾问层 · 场景联动',
        durationDays: 1,
        outcomes: ['监听 Mesh 网络异常与位置信息', '结合低代码平台编排', '实现自动化联动'],
      },
      L3: {
        title: '离网传感设备',
        subtitle: '设计层 · 业务集成',
        durationDays: 1,
        outcomes: [
          '将外部传感器 / 自定义设备接入 Mesh',
          '设计、构建离网传感设备',
          '构建去中心化网络',
        ],
      },
    },
    hardwareIntro: {
      subtitle: '本课程围绕「离网组网终端 + 太阳能自治节点」展开，均基于 Mission Pack 生态。',
      items: [
        {
          name: 'Mission Pack（现有套件）',
          note: 'LoRa · GPS · 传感器一体的出发套件',
          description:
            '课程集成的基础套件，包含 LoRa 通信、GPS 定位与基础传感能力，是搭建 Mesh 网络的起点硬件平台。',
          image: '/illustrations/m3-mission-pack.png',
          imageAlt: 'Mission Pack 自组网套件',
        },
        {
          name: 'Wio Tracker L1 Pro',
          note: '低功耗 Meshtastic 节点',
          description:
            '专为 LoRa Mesh 通信设计的低功耗节点，内置 862–930MHz 长距 LoRa 射频，是构建去中心化消息与定位网络的主力终端。',
          image: '/illustrations/m3-wio-tracker-l1-pro.png',
          imageAlt: 'Wio Tracker L1 Pro Meshtastic 节点',
        },
        {
          name: 'SenseCAP Solar Node P1-Pro',
          note: '太阳能供电 · 户外自治节点',
          description:
            '由太阳能供电的 Mesh 通信节点，结合 Meshtastic 与 XIAO nRF52840 主控，可长期无人值守部署在野外做中继与传感采集。',
          image: '/illustrations/m3-solar-node-p1-pro.png',
          imageAlt: 'SenseCAP Solar Node P1-Pro 太阳能 Mesh 节点',
        },
      ],
    },
  },
  {
    id: 'm4',
    slug: 'm4',
    code: 'M4',
    title: '边缘视觉 AI',
    subtitle: 'Edge Visual AI',
    oneLiner: '从「事后追溯」进化为「事前阻断」，构建秒级响应的智能决策闭环。',
    realProblem:
      '摄像头只能录、不能防，无效告警形成风暴，自建智能化门槛又高——视频价值始终停在事后追溯。',
    illustration: '/illustrations/m4.svg',
    difficulty: '高级',
    duration: '2 天',
    scenarios: ['周界安防', '安全合规检测', '零售客流分析', '工业质检'],
    painPoints: ['只能录不能防', '无效告警风暴', '智能化门槛高'],
    techStack: ['reCamera', 'Jetson', 'Frigate', '目标检测', '视频分析'],
    coreHardware: ['reCamera', 'reComputer Jetson', '网络摄像头'],
    capabilities: ['预置模型目标检测', 'Frigate 本地告警', '专属模型训练与部署', '识别数据可视化'],
    audience: ['安防工程与集成商', '工业质检团队', '零售运营', '园区安全管理'],
    deliverables: [
      '预置模型的目标检测与区域入侵',
      '本地告警与设备控制自动化',
      '专属识别模型与业务看板',
    ],
    accent: 'red',
    cells: {
      L1: {
        title: '目标检测体验',
        subtitle: '展示层 · 单点体验',
        durationDays: 1,
        outcomes: ['接入视频流', '体验预置 AI 模型的目标检测', '感受区域入侵能力'],
      },
      L2: {
        title: '告警与设备联动',
        subtitle: '顾问层 · 场景联动',
        durationDays: 1,
        outcomes: ['将识别事件接入本地网关', '实现声光告警', '联动设备控制自动化'],
      },
      L3: {
        title: '专属模型与看板',
        subtitle: '设计层 · 业务集成',
        durationDays: 1,
        outcomes: ['训练专属识别模型并部署', '识别数据接入报表 / 可视化看板', '形成业务闭环'],
      },
    },
    hardwareIntro: {
      subtitle: '本课程以「开源 AI 相机 + 边缘推理盒子」为核心教具，覆盖采集、推理到告警全链路。',
      items: [
        {
          name: 'reComputer RK3576-30',
          note: '边缘 AI 盒子 · 6 TOPS NPU',
          description:
            '8 核 + 6 TOPS NPU 的开源 AI 计算盒子，用于本地跑视频推理、Frigate 告警与多路分析服务，是整套视觉系统的算力中枢。',
          image: '/illustrations/m4-recomputer-rk3576.png',
          imageAlt: 'reComputer RK3576-30 边缘 AI 盒子',
        },
        {
          name: 'reCamera 2002 HQ PoE',
          note: '开源模块化 AI 相机 · 1 TOPS',
          description:
            '完全开源、模块化的 AI 摄像头，内嵌 AI SoC 与 YOLO 目标检测预置模型，PoE 供电组网，是打造可用 AI 相机的最短路径。',
          image: '/illustrations/m4-recamera-poe.png',
          imageAlt: 'reCamera 2002 HQ PoE 开源 AI 相机',
        },
        {
          name: 'reCamera Pro',
          note: '边缘 AI 相机 · 3 TOPS',
          description:
            '基于 RK1126B 的开放 AI 相机，3 TOPS NPU 可本地运行计算机视觉、VLM 大模型与语音识别，8MP 星光级成像，告警识别直接发生在设备端。',
          image: '/illustrations/m4-recamera-pro.png',
          imageAlt: 'reCamera Pro 开放 AI 相机',
        },
      ],
      note: '接入现场时另配海康威视 / 大华 IP 摄像头、POE 交换机（约 500 元）、监控支架 ×3 及通用配件（屏幕、电源、路由器）。',
    },
  },
  {
    id: 'm5',
    slug: 'm5',
    code: 'M5',
    title: '环境感知与数据采集',
    subtitle: 'Environmental Sensing & Data Acquisition',
    oneLiner: '消灭现场盲区，打破距离成本：构建从城市到野外的全域感知网络。',
    realProblem:
      '现场状态是黑箱、运维半径受限、非标设备接入处处是坑——想看见远端，却被距离和成本挡住。',
    illustration: '/illustrations/m5.svg',
    difficulty: '入门',
    duration: '2 天',
    scenarios: ['智慧农业', '智慧城市', '气象监测', '工业园区环境监测'],
    painPoints: ['现场状态黑箱', '运维半径受限', '非标接入陷阱'],
    techStack: ['SenseCAP', 'RS485', 'Modbus', 'MQTT', '4G'],
    coreHardware: ['SenseCAP 传感器', '数据采集网关', '4G 回传模块'],
    capabilities: [
      'SenseCAP 即开即用采集',
      'Modbus / RS485 非标接入',
      'MQTT 数据上云',
      '云端与本地协同',
    ],
    audience: ['智慧农业方案商', '智慧城市与气象', '园区环境监测', '物联网集成商'],
    deliverables: [
      '即开即用的数据报表与实时状态',
      '跨设备协同与告警响应',
      'API 集成至客户已有系统（开发中）',
    ],
    accent: 'yellow',
    cells: {
      L1: {
        title: '即开即用数据',
        subtitle: '展示层 · 单点体验',
        durationDays: 1,
        outcomes: ['绑定设备', '通过 App / Web 即刻获取完整数据报表', '查看实时状态'],
      },
      L2: {
        title: '协同与告警',
        subtitle: '顾问层 · 场景联动',
        durationDays: 1,
        outcomes: ['配置云端或本地逻辑', '实现跨设备协同', '配置告警响应'],
      },
      L3: {
        title: 'API 系统集成（开发中）',
        subtitle: '设计层 · 即将推出',
        durationDays: 0,
        comingSoon: true,
        outcomes: [
          '调用 API 将数据集成至客户已有系统',
          '对接编排平台',
          '该层级正在开发中，敬请期待',
        ],
      },
    },
    hardwareIntro: {
      subtitle: '本课程以「4G 数据采集 + 多类传感终端」为核心教具，覆盖农田、气象到园区的感知采集。',
      items: [
        {
          name: '4G 多通道数据采集器',
          note: '工业级 4G 采集站 · MODBUS-RTU',
          description:
            '4 路 RS-485 通道、最多接入 32 个传感器，IP66 防护，支持 4G/3G/2G 全球蜂窝回传、内置 GPS 与本地存储，是传感数据的回传中枢。',
          image: '/illustrations/m5-4g-multi-channel-logger.png',
          imageAlt: '4G 多通道数据采集器',
        },
        {
          name: 'S700-C 7合1 气象站',
          note: '温湿度 · 气压 · 太阳辐射 · 雨量',
          description:
            '一台集成气温、湿度、气压、太阳辐射、日照、风速风向与雷达雨量的紧凑型气象站，适合智慧农业与气象监测的户外长期部署。',
          image: '/illustrations/m5-s700-weather-station.png',
          imageAlt: 'S700-C 7合1 紧凑型气象站',
        },
        {
          name: '4G 土壤墒情仪',
          note: '土壤三参数 · 单节电池续航 1~3 年',
          description:
            '超低功耗的土壤温度、湿度与电导率采集设备，4G 直连云端并内置 GPS，「插土-开机-扫码」三步即可远程查看全域墒情。',
          image: '/illustrations/m5-4g-soil-moisture.png',
          imageAlt: '4G 土壤墒情仪',
        },
        {
          name: '耘小果 多要素监测仪',
          note: '多要素采集 · 10 路 RS-485 扩展',
          description:
            '低功耗多要素数据采集器，内置温度、湿度、露点、光照、CO₂、大气压测量，并支持最多 10 个 Modbus-RTU RS-485 传感器扩展。',
          image: '/illustrations/m5-yunxiaoguo-monitor.png',
          imageAlt: '耘小果 多要素环境监测仪',
        },
        {
          name: '叶面温湿度传感器',
          note: '模拟叶面 · MODBUS-RTU RS485',
          description:
            '仿叶片形态的温湿度传感器，用于病害预警与灌溉决策，是理解非标传感器接入与数据建模的典型教学案例。',
          image: '/illustrations/m5-leaf-wetness.png',
          imageAlt: '工业级叶面温湿度传感器',
        },
      ],
      note: '海外形态另配 S2105 土壤传感器、SenseCAP M2 LoRaWAN 网关与 S2102 光照传感器；通用配件含屏幕、整体电源设计、4G 物联网卡 ×2。',
    },
  },
];

export const getModule = (id: ModuleId): Module | undefined => modules.find((m) => m.id === id);

export const getModuleBySlug = (slug: string): Module | undefined =>
  modules.find((m) => m.slug === slug);

export const levels: LevelId[] = ['L1', 'L2', 'L3'];

export const levelMeta: Record<LevelId, { label: string; description: string }> = {
  L1: { label: 'L1 · 展示层', description: '看得懂、能讲解、能演示——3 分钟跑出「魔法时刻」' },
  L2: { label: 'L2 · 顾问层', description: '独立配置可用系统，交付体验工作坊' },
  L3: { label: 'L3 · 设计层', description: '商业闭环与深度定制：API 对接 / 模型训练 / 私有化部署' },
};
