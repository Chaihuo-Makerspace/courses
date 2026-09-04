export type ModuleId = 'm0' | 'm1' | 'm2' | 'm3' | 'm4' | 'm5' | 'm6';
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

/** 课程所需硬件的图文介绍区块（M1–M6 使用；M0 用 kits/hardwareList）。 */
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
  // M1–M6 无需改动。将来任一模块想要同样的深度，填上即可。

  /** hero 速览条。缺省时不渲染。 */
  facts?: ModuleFact[];
  /** 核心硬件的图文清单（hero 侧栏）。 */
  hardwareList?: { key: string; name: string; note: string }[];
  /** M1–M6 课程所需硬件的图文介绍区块。 */
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
    subtitle: 'Device Interconnection and Intelligent Management',
    oneLiner:
      '基于Home Assistant与ESPHome，在局域网内统一接入多协议设备，实现能耗监控与自动化联动。',
    realProblem:
      '商业楼宇、老旧设施、酒店公寓与工厂辅助车间中，空调、照明、安防等多套子系统独立运行，运维人员需多平台切换且数据互不相通。缺乏回路级能耗计量，仅能查看总表账单，无法精确定位高耗能设备与浪费时段。传统BA系统采用专有封闭协议，设备扩展与更换依赖原厂，改造成本高且周期长。',
    illustration: '/illustrations/m1.svg',
    difficulty: '入门 / 进阶 / 高级',
    duration: 'L1 1天 / L2 2–3天 / L3 3–5天',
    prerequisite:
      'L1无需编程基础，会基本电脑操作与本地区域网连接即可；L2需有基础编程概念，能读懂YAML配置文件；L3需有YAML/Node-RED与网络基础，熟悉L1–L2能力',
    scenarios: [
      '商业楼宇与办公园区智能化增量改造',
      '老旧设施电气与环境监测利旧升级',
      '酒店、公寓与公共空间的统一环境管控与能耗审计',
      '工厂辅助车间温湿度监视与用电回路计量',
      '园区配电回路能耗分项计量与异常告警',
    ],
    painPoints: [
      '多子系统割裂，数据互不相通',
      '能耗流向不明，缺乏回路级计量',
      '专有协议锁定，扩展改造成本高',
    ],
    techStack: [
      'Home Assistant OS',
      'ESPHome',
      'Node-RED',
      'Modbus RTU/TCP',
      'MQTT',
      'Wi-Fi / Zigbee',
      'YAML',
    ],
    coreHardware: [
      'reComputer R1125 / R1225 工业物联网网关',
      'XIAO ESP32-C6 开发板',
      'DDSU666 单相导轨式智能电表',
      'XY-MD02 工业温湿度变送器',
      'XIAO RS485 扩展板',
    ],
    capabilities: [
      '多协议设备统一接入与管理',
      '回路级能耗计量与监控看板搭建',
      '基于YAML与Node-RED的跨设备自动化编排',
      '第三方系统API/MQTT对接',
      '系统备份与灾难恢复',
    ],
    audience: [
      '方案顾问与商务销售',
      '实训讲师与教研团队',
      '职业院校与应用型本科师生',
      '企业运维与智能化改造工程师',
    ],
    deliverables: [
      '系统部署拓扑与网络配置说明',
      '接入设备清单与Modbus寄存器映射表',
      '能耗看板与自动化YAML/Node-RED流程配置文件',
      '系统备份恢复与日常运维指南',
    ],
    accent: 'yellow',
    cells: {
      L1: {
        title: '平台初识与基础设备接入',
        subtitle: '掌握Home Assistant核心架构，完成消费级设备与XIAO传感器节点快速接入',
        durationDays: 1,
        outcomes: [
          '理解Home Assistant基础架构与核心概念（实体、服务、状态、自动化）',
          '掌握ESPHome固件配置与XIAO ESP32-C6传感器接入流程',
          '能在Lovelace仪表盘中配置卡片并进行状态监控',
        ],
      },
      L2: {
        title: '工业总线对接与场景联动',
        subtitle: '掌握RS485/Modbus工业设备接入，搭建能耗看板与多条件自动化联动',
        durationDays: 3,
        outcomes: [
          '掌握Modbus RTU协议接线、调试与YAML寄存器配置',
          '独立搭建完整的能耗计量与监控看板',
          '掌握多条件自动化编排与异常告警配置',
        ],
      },
      L3: {
        title: '业务集成与系统运维',
        subtitle: '掌握跨系统API/MQTT对接、Node-RED复杂业务流开发与系统备份恢复',
        durationDays: 5,
        outcomes: [
          '掌握HA与外部管理系统的数据集成方法（REST API/MQTT/Webhook）',
          '能够使用Node-RED编排复杂业务流',
          '具备独立交付可维护系统与实施灾难备份的能力',
        ],
      },
    },

    hardwareIntro: {
      subtitle: '本课程的教学核心设备，围绕「统一管控中枢 + 多协议接入」构建。',
      items: [
        {
          name: 'reComputer R1125 / R1225 工业物联网网关',
          note: '现场中枢主机，运行Home Assistant平台与能耗看板',
          description:
            '国内版R1125，海外带LoRa版R1225。作为局域网边缘中枢，统一纳管多协议设备并承载能耗监控与自动化逻辑。',
          image: '/illustrations/m1-recomputer-r1225.png',
          imageAlt: 'reComputer R1125 / R1225 工业物联网网关',
        },
        {
          name: 'XIAO ESP32-C6 开发板',
          note: '双频Wi-Fi 6 + BLE 5微控制器主控',
          description:
            '分别用于灯带控制节点、RS485通信节点与备用节点。通过ESPHome固件配置实现传感器采集与执行器控制，支持OTA管理。',
          image: '/illustrations/m1-xiao-esp32-c5.png',
          imageAlt: 'XIAO ESP32-C6 开发板',
        },
        {
          name: 'DDSU666 单相导轨式智能电表',
          note: 'RS485 Modbus RTU能耗计量设备',
          description:
            '采集电压、电流、功率与累计电量，接入HA Energy模块实现实时用电功率曲线与分时能耗统计。',
          image: '',
          imageAlt: 'DDSU666 单相导轨式智能电表',
        },
        {
          name: 'XY-MD02 工业温湿度变送器',
          note: 'Modbus RTU协议工业级环境传感设备',
          description:
            '通过RS485差分总线接入，读取温湿度寄存器数据，用于工业环境状态监视与阈值联动。',
          image: '',
          imageAlt: 'XY-MD02 工业温湿度变送器',
        },
        {
          name: 'XIAO RS485 扩展板',
          note: '为XIAO开发板扩展工业RS485接口',
          description:
            '连接温湿度变送器与电表，支持Modbus RTU寄存器读取，是消费级主控与工业总线之间的桥接硬件。',
          image: '/illustrations/m1-rs485-breakout.png',
          imageAlt: 'XIAO RS485 扩展板',
        },
      ],
      note: '另配屏幕、整体电源设计、路由器等通用配件。',
    },
  },
  {
    id: 'm2',
    slug: 'm2',
    code: 'M2',
    title: '多模态 AI 交互',
    subtitle: 'Multimodal AI Interaction',
    oneLiner: '基于物理AI终端，融合边缘视觉、语音与业务系统API，实现多模态空间交互。',
    realProblem:
      '仓储管理、展厅导览、智能前台等场景中，现场人员需停下手工操作，通过键盘或手机手动检索业务数据，效率低下。传统交互终端缺乏视觉上下文，无法主动感知人员靠近或异常动作。智能终端多为封闭生态，难以与存量WMS/ERP/CRM系统对接；部分工业与政企场景禁止音频与业务数据上传公网。',
    illustration: '/illustrations/m2.svg',
    difficulty: '入门 / 进阶 / 高级',
    duration: 'L1 1天 / L2 2–3天 / L3 3–5天',
    prerequisite:
      'L1零基础或首次接触边缘AI交互设备；L2需具备Docker基础与REST API调用经验；L3需具备Linux、PyTorch/Jetson基础与shell操作能力',
    scenarios: [
      '智慧仓储与车间管理：免手动查库存、语音录入出入库、异常物料视觉提醒',
      '展厅与公共导览：主动人员识别、多语种语音讲解、展位联动控制',
      '智能前台与会议空间：访客接待、空间设备语音控制、日程自动化查询',
      '辅助看护与空间服务：特定行为感知告警、语音求助与远程联动',
      '工业隔离区语音交互：纯局域网离线语音查询与设备状态播报',
    ],
    painPoints: [
      '现场查询交互繁琐，需停下手工操作',
      '固定终端缺乏空间感知与视觉上下文',
      '业务系统封闭，难以与存量WMS/ERP对接',
      '隐私与离网诉求，数据禁止出域',
    ],
    techStack: [
      'SenseCraft AI',
      'SenseCAP Watcher',
      'MCP 协议（Model Context Protocol）',
      'Docker',
      'REST API',
      'OpenClaw',
      'VAD（Silero VAD）',
      'ASR（Whisper / FunASR）',
      'LLM（Qwen2.5-7B-Instruct 4-bit量化）',
      'TTS（ChatTTS / Piper）',
      'Jetson Orin NX',
    ],
    coreHardware: [
      'SenseCAP Watcher（小智英文版）',
      'reComputer RK3588-40 边缘智能控制器',
      'reComputer J4012（Jetson Orin NX 16GB）',
    ],
    capabilities: [
      '端侧视觉目标检测与事件触发',
      '自然语言语音查询与Agent角色配置',
      '基于MCP协议的业务系统工具调用',
      '本地WMS系统Docker部署与API集成',
      '纯本地离线语音AI管线部署（VAD→ASR→LLM→TTS）',
    ],
    audience: [
      '方案顾问与商务销售',
      '实训讲师与教研团队',
      '企业信息化与智能化工程师',
      '职业院校与应用型本科师生',
    ],
    deliverables: [
      'Watcher硬件配置与视觉模型参数说明书',
      '多模态Agent角色提示词与记忆策略配置文件',
      '本地业务系统与MCP桥接服务部署指南（Docker Compose + config.yml）',
      'OpenClaw自动化工具配置脚本',
      '本地离线语音AI管线部署与调优手册（L3）',
    ],
    accent: 'red',
    cells: {
      L1: {
        title: '多模态交互能力体验',
        subtitle: '理解边缘视觉、语音Agent与MCP工具调用的端到端交互链路',
        durationDays: 1,
        outcomes: [
          '理解边缘视觉与大模型Agent结合的技术架构',
          '掌握MCP协议在端侧AI与业务系统对接中的核心作用',
          '掌握云端协同与本地部署在不同业务场景下的选型逻辑',
        ],
      },
      L2: {
        title: '业务系统集成与联动配置',
        subtitle: '掌握Watcher配置、本地WMS部署、MCP桥接及自动化工具联调',
        durationDays: 3,
        outcomes: [
          '独立配置Watcher视觉与语音Agent参数',
          '掌握基于Docker的本地业务系统与MCP桥接服务部署',
          '掌握基于MCP协议扩展新业务API的方法',
        ],
      },
      L3: {
        title: '端到端本地离线语音AI管线部署',
        subtitle: '在Jetson Orin NX上部署VAD→ASR→LLM→TTS纯本地闭环系统',
        durationDays: 5,
        outcomes: [
          '掌握VAD→ASR→LLM→TTS完整本地端到端语音管线架构',
          '掌握在Jetson边缘计算硬件上进行大模型量化与部署优化的方法',
          '具备在强隐私与工业隔离网环境下交付AI交互方案的能力',
        ],
      },
    },
    hardwareIntro: {
      subtitle: '本课程以「看得见的 AI 终端 + 本地推理算力」为核心教具。',
      items: [
        {
          name: 'SenseCAP Watcher（小智英文版）',
          note: '端侧多模态交互终端，语音采集与视觉识别入口',
          description:
            '集成音视频采集与屏幕显示，支持目标检测、人员靠近感知与自然语言语音交互，通过Wi-Fi接入SenseCraft AI平台。',
          image: '/illustrations/m1-sensecap-watcher.png',
          imageAlt: 'SenseCAP Watcher 小智英文版',
        },
        {
          name: 'reComputer RK3588-40 边缘智能控制器',
          note: '运行业务系统与MCP桥接服务的边缘主机',
          description:
            '16GB内存，6 TOPS算力，运行Docker容器化WMS仓储系统与MCP Bridge桥接服务，实现局域网内业务数据与大模型工具调用的对接。',
          image: '/illustrations/m2-recomputer-rk3588.png',
          imageAlt: 'reComputer RK3588-40 边缘智能控制器',
        },
        {
          name: 'reComputer J4012（Jetson Orin NX 16GB）',
          note: 'L3进阶边缘算力主机，部署纯本地离线语音管线',
          description:
            '100 TOPS级别算力，预置JetPack/CUDA/TensorRT/PyTorch环境，部署Silero VAD+Whisper ASR+Qwen LLM+ChatTTS纯本地离线语音AI管线，断网依然可用。',
          image: '',
          imageAlt: 'reComputer J4012 Jetson Orin NX 16GB',
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
    subtitle: 'Self-organizing Mesh & Resilient Communication (Overseas Only)',
    oneLiner:
      '基于 LoRa Mesh 自组网协议，构建无公网依赖、多跳中继的离网应急通信与传感数据回传网络。',
    realProblem:
      '野外勘探、隧道施工、应急搜救等场景缺乏蜂窝基站覆盖，传统对讲机视距受限且无法回传坐标与传感数据。单点中继台依赖市电与高位节点，一旦受损整网中断；卫星电话终端昂贵且存在遮挡盲区，临时专网架设周期长、成本高。',
    illustration: '/illustrations/m3.svg',
    difficulty: '入门至高级（分 L1/L2/L3 三级）',
    duration: 'L1 1 天 / L2 2–3 天 / L3 3–5 天',
    prerequisite:
      'L1 会使用智能手机与蓝牙配对，了解基础物联网概念；L2 具备 Node-RED 或 MQTT 基础，能配置网络与 Broker；L3 熟悉 C/C++ 与 PlatformIO，能阅读并修改开源固件源码',
    scenarios: [
      '野外勘探与户外赛事：队员位置实时追踪、分组文字通信、SOS 告警广播',
      '应急搜救与抢险救灾：受灾失联区域多跳中继搭建、前线搜救态势标绘',
      '地下管廊、隧道与矿道施工：分段中继穿透阻隔、有害气体与温湿度离网监测',
      '林区与无网园区监控：太阳能中继节点长期值守、关键设施运行状态回传',
    ],
    painPoints: ['偏远与地下盲区失联', '单点中继故障导致整网中断', '应急通信架设成本高、周期长'],
    techStack: [
      'LoRa',
      'Meshtastic Mesh 协议',
      'ESP32-S3',
      'Wio Tracker L1 Pro',
      'MQTT',
      'Node-RED',
      'PlatformIO',
      'C/C++',
      'BME280',
    ],
    coreHardware: [
      'Meshtastic 应急通信套件 (Hazard Response Mission Pack, E2410180)',
      'Wio 追踪器开发板 L1 Pro (114993649)',
      'SenseCAP Meshtastic & LoRa 太阳能节点 P1-Pro (114993633)',
      'XIAO ESP32S3 & Wio-SX1262 Kit (102010611)',
      'Grove BME280 环境传感器 (101020193)',
    ],
    capabilities: [
      '构建 LoRa Mesh 去中心化自组网',
      '配置信道加密与多跳中继路由',
      '实现离线文字通信与 GPS 坐标回传',
      '搭建 LoRa-MQTT 网关桥接公网',
      '编排 Node-RED 态势监控与告警流',
      '定制 Meshtastic 端侧固件与传感器集成',
    ],
    audience: [
      '应急通信与搜救团队技术人员',
      '野外勘探与户外赛事组织者',
      '隧道/管廊/矿道施工通信工程师',
      '物联网与嵌入式开发工程师',
      '职业院校与应用型本科师生',
    ],
    deliverables: [
      'LoRa Mesh 应急通信网络规划与拓扑图',
      '设备快速配网与信道加密操作手册',
      'LoRa-MQTT 网关固件配置与 Node-RED 监控流程文件',
      '离网传感定制固件源码与编译工程（L3）',
    ],
    accent: 'yellow',
    cells: {
      L1: {
        title: '基础组网与离线通信',
        subtitle: '体验课',
        durationDays: 1,
        outcomes: [
          '理解 LoRa 物理特性与 Meshtastic 路由拓扑原理',
          '熟练配置节点角色（Client / Repeater / Router）与信道加密（256 位 AES PSK）',
          '掌握离网环境下终端通信与地图定位实操',
          '完成至少 3 节点现场组网，实现点对点、群组广播及位置共享',
        ],
      },
      L2: {
        title: '状态监控与 MQTT 桥接',
        subtitle: '实战课',
        durationDays: 3,
        outcomes: [
          '掌握 LoRa Mesh 与局域网/公网的 MQTT 桥接方法',
          '掌握基于 Node-RED 的 Mesh 遥测数据解析与自动化流编排',
          '具备搭建全域通信态势监控看板的能力',
          '完成 1 套 LoRa-MQTT 网关上线，看板实时显示节点坐标与电量状态',
        ],
      },
      L3: {
        title: '离网传感集成与固件定制',
        subtitle: '交付课',
        durationDays: 5,
        outcomes: [
          '掌握 Meshtastic 开源固件架构与 C++ 源码定制流程',
          '掌握基于 PlatformIO 的嵌入式编译与固件烧录',
          '具备独立设计与构建离网环境监测节点的能力',
          '完成集成 BME280 环境传感器的 Wio Tracker L1 Pro 定制固件编译与实机验证',
        ],
      },
    },
    hardwareIntro: {
      subtitle: '本课程围绕「离网组网终端 + 太阳能自治节点」展开，均基于 Mission Pack 生态。',
      items: [
        {
          name: 'Meshtastic 应急通信套件 (Hazard Response Mission Pack, E2410180)',
          note: '自组网标准实训包，含 4 台 T1000-E 卡片终端及配件',
          description:
            '去中心化离线文字与位置通信标准实训包。包含 4 台 SenseCAP T1000-E 卡片式追踪终端，支持蓝牙配对与 Meshtastic App 配置，适用于 L1 基础组网与离线通信体验。终端内置 GPS 与 LoRa 射频，开机自动入网，支持点对点与群组广播。',
          image: '/illustrations/m3-mission-pack.png',
          imageAlt: 'Meshtastic 应急通信套件 Hazard Response Mission Pack',
        },
        {
          name: 'Wio 追踪器开发板 L1 Pro (114993649)',
          note: '带屏手持开发终端，支持位置追踪与固件定制',
          description:
            '带 1.3" OLED 屏幕的手持开发终端，内置 GPS 与 2000mAh 电池。适用于 L3 端侧固件定制开发，支持屏幕 UI 自定义与 I2C/UART 传感器扩展。基于 PlatformIO 编译 Meshtastic 源码，目标板型为 seeed_wio_tracker_L1。',
          image: '/illustrations/m3-wio-tracker-l1-pro.png',
          imageAlt: 'Wio 追踪器开发板 L1 Pro',
        },
        {
          name: 'SenseCAP Meshtastic & LoRa 太阳能节点 P1-Pro (114993633)',
          note: '野外免维护中继基站，太阳能自供电',
          description:
            '户外太阳能自供电中继节点，IPX6 防护等级。扩展网络覆盖与跳数，适用于野外长期值守与高位中继部署。支持 Meshtastic 协议自动中继转发，无需市电供电。',
          image: '/illustrations/m3-solar-node-p1-pro.png',
          imageAlt: 'SenseCAP Meshtastic & LoRa 太阳能节点 P1-Pro',
        },
        {
          name: 'XIAO ESP32S3 & Wio-SX1262 Kit (102010611)',
          note: 'LoRa-MQTT 网关节点，桥接 Mesh 与局域网',
          description:
            '出厂预刷 Meshtastic 固件的网关节点。将 LoRa Mesh 报文桥接至局域网 MQTT Broker 与监控大屏，支持 Wi-Fi 连接与数据上行转发、下行命令广播。适用于 L2 公网融合与态势监控。',
          image: '',
          imageAlt: 'XIAO ESP32S3 & Wio-SX1262 Kit',
        },
        {
          name: 'Grove BME280 环境传感器 (101020193)',
          note: '高精度温湿度与气压测量传感器',
          description:
            '通过 Grove I2C 接口连接至 Wio Tracker L1 Pro，采集温湿度与气压数据。作为自定义遥测数据注入 Mesh 网络，适用于 L3 离网环境监测节点开发。',
          image: '',
          imageAlt: 'Grove BME280 环境传感器',
        },
      ],
    },
  },
  {
    id: 'm4',
    slug: 'm4',
    code: 'M4',
    title: '边缘视觉 AI',
    subtitle: 'Edge Vision AI',
    oneLiner:
      '基于轻量边缘摄像头与工业级多路 AI 计算主机，构建目标检测、区域入侵告警与自动化联动的边缘视觉方案。',
    realProblem:
      '传统监控仅能事后录像回溯，无法在风险发生瞬间产生结构化告警；移动侦测受光线变化、雨雪晃动干扰严重，误报率高。视觉 AI 定制开发周期长、需专门算法工程师与专用服务机架，方案商难以权衡单点嵌入式设备与多路集中服务器的性能与成本。',
    illustration: '/illustrations/m4.svg',
    difficulty: '入门至高级（分 L1/L2/L3 三级）',
    duration: 'L1 1 天 / L2 2–3 天 / L3 3–5 天',
    prerequisite:
      'L1 具备基础网络与浏览器操作经验，能连接 Wi-Fi 与访问 Web 界面；L2 理解 IP 网络、Docker 与 MQTT 基础，能编辑 YAML 配置文件；L3 具备 Python 与 Linux 命令行基础，了解目标检测基本原理',
    scenarios: [
      '物业与园区安防：周界防范、人员越界告警、夜间异常驻留检测',
      '工业制造与安全生产：未佩戴安全帽/反光衣检测、危险区域人员闯入、输送带状态监控',
      '智慧客流与商业统计：区域人流计数、驻留时长热力图',
      '农业与室外监控：PoE 供电户外点位监测、特定目标识别',
    ],
    painPoints: [
      '缺乏实时事件感知，仅能事后回溯',
      '移动侦测误报率高，规则单一',
      '视觉 AI 落地与工程门槛高',
      '边缘算力适配困难，单点与多路选型难',
    ],
    techStack: [
      'reCamera',
      'Jetson Orin NX',
      'Frigate NVR',
      'Home Assistant',
      'Node-RED',
      'YOLO',
      'TensorRT',
      'MQTT',
      'RTSP',
      'InfluxDB',
      'Grafana',
    ],
    coreHardware: [
      'reComputer RK3576-30 (100052518)',
      'reCamera 2002w/2002 (102991896/102991894)',
      'reCamera 2002 HQ PoE 8GB (100029708)',
      'reServer Industrial J4012 (Jetson Orin NX 16GB, 114110247)',
      '8+2 口千兆 PoE 工业交换机 (802.3af/at)',
      'CUDY AX3000 Wi-Fi 6 千兆路由器',
    ],
    capabilities: [
      '配置 reCamera 端侧目标检测与 RTSP 推流',
      '编排 Node-RED 视觉事件与声光告警联动',
      '搭建 Frigate 多路 RTSP 汇聚与 NVR 录像管理',
      '配置检测区域（Zones）与置信度阈值调优',
      '集成 Home Assistant 跨系统自动化联动',
      '训练 YOLO 自定义模型并完成 TensorRT/cvimodel 量化部署',
    ],
    audience: [
      '物业园区安防与运维工程师',
      '工业制造安全生产管理人员',
      '智慧商业与客流分析从业者',
      '农业与户外监控系统集成商',
      'AIoT 与计算机视觉开发工程师',
      '职业院校与应用型本科师生',
    ],
    deliverables: [
      '视觉系统架构设计图与网络拓扑说明',
      'reCamera Node-RED 联动流程配置文件',
      'Frigate 配置文件（frigate.yml）与 HA 自动化脚本',
      '误报率调优前后测试对比记录表',
      '自定义数据集、训练配置与量化后模型文件（L3）',
    ],
    accent: 'red',
    cells: {
      L1: {
        title: '双线体验与基础配置',
        subtitle: '体验课',
        durationDays: 1,
        outcomes: [
          '理解帧率、分辨率、置信度阈值与 IoU 等视觉核心概念',
          '独立完成 reCamera 设备的网络配置与视频流输出',
          '掌握轻节点与强节点方案的适用边界与选型依据',
          '完成 1 台 reCamera 节点的网络配置与基础目标识别验证',
        ],
      },
      L2: {
        title: '双线场景联动与多路汇聚',
        subtitle: '实战课',
        durationDays: 3,
        outcomes: [
          '掌握在 reCamera 上使用 Node-RED 实现边缘事件的本地联动',
          '掌握 Frigate frigate.yml 的多路配置、区域绘制与参数调优',
          '掌握 Frigate 与 Home Assistant 联动配置与跨系统事件驱动逻辑',
          '完成 1 套包含 2 路以上 RTSP 接入、Frigate 检测、HA 联动与误报调优的完整系统',
        ],
      },
      L3: {
        title: '模型定制与边缘部署优化',
        subtitle: '交付课',
        durationDays: 5,
        outcomes: [
          '掌握视觉 AI 从数据标注、模型训练到边缘部署的完整工程闭环',
          '掌握 TensorRT 与嵌入式模型量化转换的关键工具链',
          '具备独立设计和交付垂直行业视觉识别方案的能力',
          '交付 1 套自定义训练的目标检测模型，并在硬件上完成实跑验证',
        ],
      },
    },
    hardwareIntro: {
      subtitle: '本课程以「开源 AI 相机 + 边缘推理盒子」为核心教具，覆盖采集、推理到告警全链路。',
      items: [
        {
          name: 'reComputer RK3576-30 (100052518)',
          note: '轻量视觉推理主机，8GB 内存，6 TOPS 算力',
          description:
            '运行事件联动与轻量视频监控看板的边缘智能控制器。配备 8GB 内存与 6 TOPS NPU 算力，适用于 L1/L2 阶段的轻量视觉推理与 Node-RED 事件联动。可作为 Frigate 与 Home Assistant 的轻量部署主机。',
          image: '/illustrations/m4-recomputer-rk3576.png',
          imageAlt: 'reComputer RK3576-30 边缘 AI 盒子',
        },
        {
          name: 'reCamera 2002w/2002 (102991896/102991894)',
          note: '单机位视觉节点，端侧轻量目标检测与 RTSP 推流',
          description:
            '模块化开源 AI 相机，2002w 支持 Wi-Fi/AP 模式，2002 支持百兆有线以太网。内置 NPU 推理与 Node-RED 零代码编排，即插即用，适用于 L1 单点轻量节点体验与 L2 端侧自动化联动。支持 RTSP 视频流输出（554 端口）。',
          image: '/illustrations/m4-recamera-poe.png',
          imageAlt: 'reCamera 2002w/2002 开源 AI 相机',
        },
        {
          name: 'reCamera 2002 HQ PoE 8GB (100029708)',
          note: '多机位主力相机，PoE 单线供电推流',
          description:
            '模块化开源 AI 相机，支持 PoE 交换机单线供电与视频推流。8GB 内存配置，适用于多路 NVR 汇聚分析的主力机位。通过 RTSP 接入 Frigate，支持检测区域与置信度阈值配置。',
          image: '/illustrations/m4-recamera-poe.png',
          imageAlt: 'reCamera 2002 HQ PoE 8GB 开源 AI 相机',
        },
        {
          name: 'reServer Industrial J4012 (Jetson Orin NX 16GB, 114110247)',
          note: '高性能视频中枢，工业级 Jetson 边缘服务器',
          description:
            '工业级 Jetson Orin NX 16GB 边缘计算服务器，运行 Frigate NVR 汇聚多路检测。支持 GPU 硬件解码与 TensorRT 量化加速，适用于 L2 多路视频流汇聚与 L3 自定义模型推理部署。需刷写 JetPack 镜像并配置 Docker --runtime nvidia。',
          image: '',
          imageAlt: 'reServer Industrial J4012 Jetson Orin NX 16GB',
        },
        {
          name: '8+2 口千兆 PoE 工业交换机 (802.3af/at)',
          note: '集中供电与高速组网',
          description:
            '8+2 口千兆 PoE 交换机，符合 802.3af/at 标准。为 PoE 相机供电并汇聚局域网流量，适用于多路 reCamera HQ PoE 集中部署与 Frigate NVR 汇聚场景。',
          image: '',
          imageAlt: '8+2 口千兆 PoE 工业交换机',
        },
        {
          name: 'CUDY AX3000 Wi-Fi 6 千兆路由器',
          note: '独立现场局域网，承载多路视频推流',
          description:
            'Wi-Fi 6 千兆路由器，USB-C 供电。搭建独立现场局域网，分配静态 IP 地址段，承载多路高码率 RTSP 视频推流与开发调试。适用于培训现场与临时部署场景。',
          image: '',
          imageAlt: 'CUDY AX3000 Wi-Fi 6 千兆路由器',
        },
      ],
      note: '接入现场时另配监控支架及通用配件（屏幕、电源）。',
    },
  },
  {
    id: 'm5',
    slug: 'm5',
    code: 'M5',
    title: '环境感知与数据采集',
    subtitle: 'Environmental Sensing & Data Acquisition',
    oneLiner: '工业级传感器与4G/LoRaWAN双链路，实现广域场景低功耗环境监测与数据采集。',
    realProblem:
      '面向连栋温室大棚、设施园艺、河道水质监测、城市内涝点与工业仓储等广域分散场景，偏远点位布线取电成本高，野外山地与河流断面上百米至数公里铺设线缆工程量巨大。现场多厂商传感器各自定义私有协议，二次开发与协议适配周期长；霜冻、水质恶化、土壤干旱等异常依赖人工定期巡检，故障发现晚且耗费人力；采集到的环境数据停留在云端大屏或手机App，无法与既有灌溉/风机等执行机构联动，也无法对接第三方业务系统。',
    illustration: '/illustrations/m5.svg',
    difficulty: '入门 / 进阶 / 高级',
    duration: 'L1 1天 / L2 2–3天 / L3 3–5天',
    prerequisite:
      'L1无；L2建议具备RS485/Modbus或电子接线基础，能读懂传感器接线图；L3建议具备HTTP API调用、JSON解析与Linux命令行基础',
    scenarios: [
      '智慧农业与设施园艺：土壤温湿度/EC监测、温室CO2浓度调控、精准水肥灌溉联动',
      '水质与生态环境监测：河道断面与养殖水体pH值监测、户外微型气象站',
      '智慧市政与城市内涝：立交桥与低洼积水监测、管网温湿度与压力状态监测',
      '工业仓储与厂房监控：恒温恒湿库房监测、工业除尘与废气排放环境参数监控',
    ],
    painPoints: [
      '偏远点位取电与布线成本高',
      '传感器协议多且不兼容',
      '异常响应滞后与人工巡检耗时',
      '缺乏标准化自动化与第三方对接能力',
    ],
    techStack: [
      'Modbus RTU',
      'RS485',
      'LoRaWAN',
      '4G全网通',
      'SenseCraft Data',
      'Node-RED',
      'SenseCAP Open API',
      'Grafana',
      'InfluxDB',
    ],
    coreHardware: [
      '4G多通道数据采集器（114992169）',
      '七合一气象环境传感器（101991050）',
      '耘小果多要素农业监测仪（114993122）',
      '4G土壤墒情监测仪（114993646）',
      '叶面温湿度传感器（314990737）',
      'SenseCAP Outdoor Gateway（114992982）',
      'SenseCAP S2100 Data Logger（114992872）',
      'SenseCAP S2105土壤传感器（114992871）',
      'SenseCAP S2103 CO2/温湿度传感器（114992869）',
      'reComputer R1025-10（113991274）',
    ],
    capabilities: [
      '多环境要素采集（土壤/气象/气体/水质）',
      '无线广域传输（4G蜂窝直连 / LoRaWAN）',
      '云端报表与多条件告警配置',
      'SenseCAP Open API数据对接与提取',
      'Node-RED本地阈值联动控制编排',
      '时序数据库存储与Grafana私有化看板',
    ],
    audience: [
      '方案顾问与商务销售',
      '教研团队与实训讲师',
      '农业、环保、市政工程技术人员',
      '合作院校与政企实训学员',
    ],
    deliverables: [
      '传感器网络部署图与电气接线定义表',
      'Modbus RTU从机地址与寄存器映射字典',
      'SenseCraft Data告警策略配置清单',
      'Node-RED自动化流程文件（.json）与API集成调用示例代码（L3）',
      'Grafana监控大屏配置文件（L3）',
    ],
    accent: 'yellow',
    cells: {
      L1: {
        title: '环境感知网络架构与数据监视',
        subtitle: '理解4G与LoRaWAN双通信拓扑，掌握SenseCraft Data平台实时监视与报表操作',
        durationDays: 1,
        outcomes: [
          '理解4G DTU与LoRaWAN网关在物联网数据采集中的不同拓扑结构与适用条件',
          '熟练使用SenseCraft Data网页端与移动端App查看多维度环境参数与历史趋势曲线',
          '了解土壤、水质、气象等典型工业传感器的测量原理与部署注意事项',
        ],
      },
      L2: {
        title: '传感器接线、Modbus配置与规则告警',
        subtitle: '掌握RS485硬件接线、Modbus RTU寄存器配置与多条件告警策略',
        durationDays: 3,
        outcomes: [
          '掌握RS485差分接线、5V/12V电源分配与Modbus RTU寄存器寻址配置',
          '熟练完成4G数据采集器（或LoRaWAN网关）的设备绑定与轮询周期设置',
          '配置3类以上业务告警策略（温度上限报警、土壤水分过低告警、设备离线通知）',
        ],
      },
      L3: {
        title: 'API数据集成与本地边缘自动化',
        subtitle:
          '掌握SenseCAP Open API调用，使用reComputer R1025+Node-RED实现本地闭环控制与第三方平台对接',
        durationDays: 5,
        outcomes: [
          '掌握SenseCAP Open API鉴权（Access ID / Access Key，HTTP Basic Auth）与遥测数据提取接口调用',
          '在reComputer R1025上部署Node-RED编排本地自动化控制流，根据传感器数值触发执行机构',
          '将环境时序数据接入InfluxDB与Grafana，设计私有化数据监控大屏',
        ],
      },
    },
    hardwareIntro: {
      subtitle:
        '本课程以「4G 数据采集 + 多类传感终端」为核心教具，覆盖农田、气象到园区的感知采集。',
      items: [
        {
          name: '4G多通道数据采集器（114992169）',
          note: '4路RS485工业数采仪，经4G上报云平台',
          description:
            '数采中枢，支持4路RS485通道，可经分线器扩展至最多32个传感器；4G蜂窝全网通直连，插卡即用，标准Modbus RTU协议，12V/2A电源适配器供电。',
          image: '/illustrations/m5-4g-multi-channel-logger.png',
          imageAlt: '4G多通道数据采集器',
        },
        {
          name: '七合一气象环境传感器（101991050）',
          note: '工业七合一气象站，RS485/SDI-12输出',
          description:
            '集成超声波风速风向、雷达雨量、光照、温湿压与太阳总辐射；12~24V DC供电，IP66一体式防护，用于气象多参数总线解析实操。',
          image: '/illustrations/m5-s700-weather-station.png',
          imageAlt: '七合一气象环境传感器',
        },
        {
          name: '耘小果多要素农业监测仪（114993122）',
          note: '一体化微气象农业监测仪，RS485输出',
          description:
            '集成空气温湿度、光照度、CO2紧凑型一体化监测；12V DC供电，农业室外防护等级，用于农业多要素采集教学对比与扩展测试。',
          image: '/illustrations/m5-yunxiaoguo-monitor.png',
          imageAlt: '耘小果多要素农业监测仪',
        },
        {
          name: '4G土壤墒情监测仪（114993646）',
          note: '管式土壤多层监测仪，内置4G与太阳能',
          description:
            '免布线深层土壤水分与温度连续监测；太阳能+锂电自供电，IP68防护，4G全网通无线直发，适用于野外无人值守土壤墒情监测。',
          image: '/illustrations/m5-4g-soil-moisture.png',
          imageAlt: '4G土壤墒情监测仪',
        },
        {
          name: '叶面温湿度传感器（314990737）',
          note: '仿生叶片表面温湿度监测探头，RS485接口',
          description:
            '监测叶面温湿度与叶面结露时长；5~24V DC供电，IP67防护，用于作物叶面微气候监测与病害预警实验。',
          image: '/illustrations/m5-leaf-wetness.png',
          imageAlt: '叶面温湿度传感器',
        },
        {
          name: 'reComputer R1025-10（113991274）',
          note: '本地自动化主机，运行Node-RED与API对接',
          description:
            '带隔离RS485与双网口的边缘智能控制器；通过官方安装脚本部署Node-RED，访问http://[设备IP]:1880进行本地自动化编排，实现阈值判断与执行机构联动；12V/2A独立供电。',
          image: '',
          imageAlt: 'reComputer R1025-10',
        },
        {
          name: 'SenseCAP Outdoor Gateway（114992982）',
          note: '工业级室外LoRaWAN汇聚网关，IP66',
          description:
            '区域中心基站，汇聚无线传感器报文并经以太网/4G回传至云平台；EU868/US915频段，适用于野外大面积农场、无市电林区等远距离多点位免布线监测。',
          image: '',
          imageAlt: 'SenseCAP Outdoor Gateway',
        },
        {
          name: 'SenseCAP S2100 Data Logger（114992872）',
          note: '通用无线数据记录仪，协议转换节点',
          description:
            '将传统有线Modbus RS485传感器改造为LoRaWAN节点，实现有线传感器的无线化接入与远距离回传。',
          image: '',
          imageAlt: 'SenseCAP S2100 Data Logger',
        },
        {
          name: 'SenseCAP S2105土壤传感器（114992871）',
          note: '工业级探针型土壤水分/温度/EC传感器',
          description:
            '内置大容量锂亚电池，LoRaWAN无线报文，IP66防护；测量土壤水分（0~100%）、温度（-40~85℃）、电导率EC（0~20000 μS/cm），适用于农田土壤水肥环境无线远距离监测。',
          image: '',
          imageAlt: 'SenseCAP S2105土壤传感器',
        },
        {
          name: 'SenseCAP S2103 CO2/温湿度传感器（114992869）',
          note: '室内与大棚空气质量无线监测节点',
          description:
            '内置大容量锂亚电池，LoRaWAN无线报文，IP66防护；NDIR原理测量CO2（400~5000 ppm）与空气温湿度，适用于室内与大棚空气质量无线远距离监测。',
          image: '',
          imageAlt: 'SenseCAP S2103 CO2/温湿度传感器',
        },
      ],
      note: '通用配件含屏幕、整体电源设计、4G 物联网卡 ×2。',
    },
  },
  {
    id: 'm6',
    slug: 'm6',
    code: 'M6',
    title: '机器人控制与具身智能',
    subtitle: 'Robotic Control & Embodied Intelligence',
    oneLiner: '六轴桌面机械臂加多模态感知，实现主从遥操到3D空间精准抓取与具身智能开发。',
    realProblem:
      '面向农产品外观分拣、轻量自动化产线辅助上下料、展厅展位迎宾演示与辅助作业工位等场景，传统机械臂教学从运动学推导与电机控制讲起，应用侧人员上手周期长。大语言模型多局限于文本生成，缺乏接入物理执行机构的标准路径；从零搭建分拣/搬运演示需联调视觉识别、运动规划与抓取时序，多系统集成难度大；新手操作带动力机械臂，存在碰撞、误入工作空间等物理安全风险。',
    illustration: '/illustrations/m6.svg',
    difficulty: '入门 / 进阶 / 高级',
    duration: 'L1 1天 / L2 2–3天 / L3 3–5天',
    prerequisite:
      'L1无（零基础，具备基本电脑操作技能）；L2掌握基础网络配置与系统联动概念；L3具备基础Python编程与Linux技能',
    scenarios: [
      '农产品与工业件外观分拣：合格品、瑕疵品与疑似品分类抓取',
      '轻量自动化产线辅助：物料移载、工件推送、按序码放',
      '展厅展位与教学演示：语音/视觉交互迎宾、轨迹展示',
      '辅助作业与自动化工位：定时定点巡检摆拍、轻量协作抓取',
    ],
    painPoints: [
      '底层控制与算法门槛高',
      '自然语言到物理执行断层',
      '视觉与执行协同调试复杂',
      '现场运行安全风险',
    ],
    techStack: [
      'SenseCraft Robotics',
      'Pinocchio（Python刚体运动学解算库）',
      'Motorbridge SDK（总线伺服舵机驱动）',
      'HTTP / MQTT消息通知',
      'Python',
      'LeRobot（动作数据集标准）',
      'Isaac Sim（数字孪生仿真，L3选修）',
    ],
    coreHardware: [
      'reBot DevArm B601-RS机械臂（100019336）',
      'Star Arm 102主控示教臂（100004723）',
      'reComputer Super J4012（114110314）',
      '奥比中光Gemini 2 3D相机（101090144）',
      'ET-S231广角1080P USB摄像头（100035502）',
      '双机位摄像头支架（100006505）',
      '机械臂数据采集光控箱（100094392）',
      'reSpeaker Flex语音套件（100005504 / 100099135）',
      '工业级独立急停按钮（100091373）',
    ],
    capabilities: [
      '机械臂选型与商业取舍判断',
      '硬件急停与工作空间安全规范操作',
      '主从臂遥操与语音指令控制',
      '多动作流程编排与安全确认机制配置',
      '工位视觉事件触发与微场景联调',
      'RGB-D深度相机3D定位与手眼对齐',
      'Pinocchio逆运动学求解与异常处理',
      'Motorbridge驱动真机空间抓取闭环',
      '遥操动作数据集采集（LeRobot标准）',
      'VLA具身大模型与Isaac Sim数字孪生初探',
    ],
    audience: [
      '方案顾问与商务销售',
      '教研团队与实训讲师',
      '机器人与自动化工程技术人员',
      '合作院校与政企实训学员',
    ],
    deliverables: [
      '机械臂工作空间布置与安全操作记录',
      'SenseCraft动作流程配置与工位视觉联动演示系统',
      '3D空间自动抓取Python工程源码（深度相机 + Pinocchio + Motorbridge）',
      '遥操动作数据集样本与方案设计交付文档',
    ],
    accent: 'red',
    cells: {
      L1: {
        title: '选型认知、安全规范与开箱上手',
        subtitle: '建立商业选型认知与现场安全底线，使用SenseCraft平台零代码完成语音与遥操初体验',
        durationDays: 1,
        outcomes: [
          '理解工业机械臂分类（直角坐标滑台、SCARA、Delta、六轴关节）与速度/精度/负载/安全/成本的商业选型权衡',
          '掌握机械臂物理工作空间边界、硬件急停使用与安全操作规程',
          '掌握SenseCraft平台开箱连接，跑通主从遥操与语音指令夹取',
        ],
      },
      L2: {
        title: '场景剖析、空间直觉与多模态编排',
        subtitle: '讲清机械臂与3D场景的匹配价值，掌握多动作流程编排与工位视觉事件触发联动',
        durationDays: 3,
        outcomes: [
          '能向客户清晰阐述3D场景为什么需要六轴机械臂及其选型边界',
          '掌握SenseCraft多动作流程编排与"生成 → 3D预览 → 人工确认 → 真机执行"安全确认机制',
          '掌握基于工位视觉的事件触发与微场景搭建，连续3次稳定运行',
        ],
      },
      L3: {
        title: '3D空间抓取闭环与具身智能前瞻',
        subtitle: '通过深度相机打通确定性3D空间抓取工程底座，拓展具身大模型与数字孪生视野',
        durationDays: 5,
        outcomes: [
          '使用RGB-D深度相机获取目标3D物理坐标，通过Python调用Pinocchio完成电机角度自动换算，利用Motorbridge驱动真机完成空间抓取与异常处理',
          '掌握主从遥操动作数据集采集流程（LeRobot标准格式），理解VLA具身大模型与Isaac Sim数字孪生仿真基本原理',
          '交付完整Python抓取工程源码、遥操数据集与方案设计文档',
        ],
      },
    },
    hardwareIntro: {
      subtitle:
        '本课程以「六轴桌面机械臂 + 多模态感知 + 边缘算力」为核心教具，覆盖遥操到3D抓取全链路。',
      items: [
        {
          name: 'reBot DevArm B601-RS机械臂（100019336）',
          note: '6+1自由度开源从动机械臂成品，含电动夹爪与总线舵机',
          description:
            '受控从臂，响应指令执行动作与抓取；48V/600W工业级开关电源（SKU 100054289）独立稳压供电，需使用6寸G字夹（SKU 100014192）物理紧固于实验台防止动作倾倒。',
          image: '',
          imageAlt: 'reBot DevArm B601-RS机械臂',
        },
        {
          name: 'Star Arm 102主控示教臂（100004723）',
          note: '6自由度模块化主控示教臂，兼容LeRobot',
          description:
            '主控示教端，手动引导操作并驱动从臂实时镜像动作，实现1:1主从位姿镜像映射；12V/2A多国插脚电源适配器（SKU 100033211）独立供电，套件自带XT30公头线。',
          image: '',
          imageAlt: 'Star Arm 102主控示教臂',
        },
        {
          name: 'reComputer Super J4012（114110314）',
          note: 'Jetson Orin NX 16GB边缘算力主机',
          description:
            '控制中枢，运行机械臂运动学解算、控制服务与大模型推理；出厂预装JetPack 6.2，需确认SenseCraft Robotics服务与Python（Pinocchio / Motorbridge SDK）运行环境就绪；19V/4.7A大功率电源适配器供电。',
          image: '',
          imageAlt: 'reComputer Super J4012',
        },
        {
          name: '奥比中光Gemini 2 3D相机（101090144）',
          note: '双目红外3D深度相机，Type-C接口',
          description:
            '空间三维视觉引导，直接读取物体在空间中的三维物理坐标（X, Y, Z）实现空间闭环抓取；L3阶段需与机械臂基座坐标系完成手眼标定对齐，确保测出的坐标可被Pinocchio正确换算为关节角度。',
          image: '',
          imageAlt: '奥比中光Gemini 2 3D相机',
        },
        {
          name: 'ET-S231广角1080P USB摄像头（100035502）',
          note: '工位图像采集端',
          description:
            '用于机械臂工位物料到位检测、工序事件触发与具身数采视觉输入；配合双机位支架实现前视/俯视多角度采集，在结构化恒定光照环境中提供状态触发信号。',
          image: '',
          imageAlt: 'ET-S231广角1080P USB摄像头',
        },
        {
          name: '双机位摄像头支架（100006505）',
          note: '机械臂视觉安装支架，支持双摄像头固定',
          description:
            '支持前视与俯视双机位多角度灵活调整，配合光控箱构建结构化恒定光照实验环境，保障视觉识别与数据采集的稳定性。',
          image: '',
          imageAlt: '双机位摄像头支架',
        },
        {
          name: '机械臂数据采集光控箱（100094392）',
          note: 'SenseCraft Robotics标准实验箱',
          description:
            '集成恒定光源、相机固定位与工件标定区，消除环境杂光对识别的干扰，保障模型复现与稳定抓取；用于L2工位视觉事件触发与L3遥操动作数据采集。',
          image: '',
          imageAlt: '机械臂数据采集光控箱',
        },
        {
          name: 'reSpeaker Flex语音套件（100005504 / 100099135）',
          note: 'XVF3800 AI降噪麦克风阵列语音套件',
          description:
            '语音交互终端，现场语音指令采集与播报；配合SenseCraft Robotics平台实现自然语言描述触发预设夹取动作，USB-A转Type-C数据线连接。',
          image: '',
          imageAlt: 'reSpeaker Flex语音套件',
        },
        {
          name: '工业级独立急停按钮（100091373）',
          note: '带常闭机械触点的大蘑菇头急停开关',
          description:
            '安全闸门，串入动力电回路，拍下即刻硬切动力电；为独立硬件常闭回路，不接软件控制，置于操作者触手可及处。',
          image: '',
          imageAlt: '工业级独立急停按钮',
        },
      ],
      note: '另配屏幕、整体电源设计、路由器等通用配件。',
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
