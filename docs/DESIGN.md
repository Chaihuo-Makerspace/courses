# 柴火创客学园 · 设计方案（Design System）v4.0 — Warm Maker Signal

> **这是设计系统的唯一权威文档。** Token 值与 `src/styles/themes/theme.css` 的
> `@theme` 块逐一对齐；改 token 必须两边同步。本文不只记"用什么"，更记
> **"为什么、何时、怎么组合"** —— 给人和 AI 一个统一的设计北极星。
>
> 想快速看全貌：本地起 `pnpm dev` 打开 **`/styleguide`**（活货架，渲染所有
> token 与组件）。

---

## 0. 设计声音（North Star）

**温暖上升 · 手作能量 · 工程踏实感 · 专业可信。**

对着 `public/logo-horizontal.png` / `logo-vertical.png` 核实过：logo 是红→黄渐变
火焰从灰色齿轮升起，灰色描边 wordmark —— **没有黑色**。火焰是主角，齿轮是底座。
v3.0 的"技术编辑风"（黑底白字 CTA、石墨黑反转面、mono eyebrow 铺天盖地）比 logo
本身更冷、更企业化，没接住这份"暖"。v4.0 把火焰渐变升级为真正的图形主体（hero
背景、section 分隔、hover glow），黑色不再是识别色主导。

**核心叙事**（贯穿所有文案与视觉，不变）：

> 我们培养人掌握新技术整合能力，不是提供解决方案。

避免"我们提供 XXX 方案"的措辞与视觉暗示。

### 设计 Dial

替代 v3.0 的硬性配色比例指标，用三个维度定调，覆盖布局/动效/密度决策：

`DESIGN_VARIANCE: 6 / MOTION_INTENSITY: 4 / VISUAL_DENSITY: 4`

招生站，B2B/教育机构与教师受众，克制但不呆板——不是 Awwwards 潮流站,也不是
政务级极简站。改设计时先问"这个决定在 6/4/4 这个刻度下说得通吗"，而不是查一张
数字上限表。

**历史教训**：本仓库曾漂移到 brutalist / 贴纸风（2px 黑边、硬阴影、装饰几何块、
大红铺面）并被回退，这条禁令保留（§8）。v3.0 的配色比例硬指标（黄≤3%/红≤5%/
黑~15%/灰~25%/白~52%）在 v4.0 被判定为治理层面不合理——它挡住了火焰渐变作为
图形主体使用，也没帮上真正的问题（eyebrow 滥用、CTA 措辞重复、假 AI 照片、hero
超载、布局家族单一化，见 §8）。v4.0 用 Dial + 具体禁用清单替代它。

---

## 1. 颜色系统

### 1.1 火焰渐变 —— 图形主体

`--gradient-flame: linear-gradient(135deg, var(--color-brand-red), var(--color-brand-yellow))`

不再是"点缀角标"。用在：hero 背景层、section 之间的分隔带、关键 CTA 的 hover
glow、M0-M5 矩阵的强调态。**没有面积上限**——但仍遵守 §8 的具体禁令（不铺满整段
纯红、不做贴纸式硬边框）。

### 1.2 品牌识别色

| 用途 | Token | Hex |
|---|---|---|
| CTA 红 / 主 CTA | `--color-brand-red` | `#d84144` |
| 红 hover | `--color-brand-red-hover` | `#c13538` |
| 红 tint（仅 destructive 底） | `--color-brand-red-light` | `#fdeaea` |
| 主黄（识别色 / accent） | `--color-brand-yellow` | `#f3d230` |
| 黄 hover | `--color-brand-yellow-hover` | `#e5c420` |
| 柔黄 surface | `--color-brand-yellow-light` | `#fef9e7` |
| 中黄（L2 行） | `--color-brand-yellow-mid` | `#fde68a` |
| 黄 dark（黄底上的文字） | `--color-brand-yellow-dark` | `#b8960a` |
| 暖炭灰（标题文字，替代冷黑） | `--color-brand-black` | `#2b2420` |
| 暖炭灰 light | `--color-brand-black-light` | `#3f382f` |
| 暖 ember-dark（反转面 / footer，替代石墨） | `--color-brand-graphite` | `#3a231d` |
| 白 | `--color-brand-white` | `#ffffff` |

**注意**：`#2b2420` / `#3a231d` 是暖炭灰/ember-dark，**不是**"高级消费品暖米白+
黄铜+浓缩咖啡棕"那套（banned：`#f5f1ea` 系背景、`#b08947` 系黄铜/牛血红、
`#1a1714` 系espresso）。本站的暖色语言是**火焰红黄**，不是黄铜/赭石——调色时
注意区分色相，别往那几个 banned hex 靠。

### 1.3 中性灰阶（10 段，暖灰阶）

`--color-neutral-1`→`-10`：`#f8f6f1 · #f1eee7 · #e5e0d5 · #d0c8b8 · #b0a695 ·
#8f8574 · #746a5c · #5a5145 · #3f382f · #2b2420`

- 文本：标题 `neutral-10`、重要 `-9`、正文 `-8`、次要 `-7`、caption `-6`。
- 描边/分隔：`neutral-3`（hairline）。
- 替代底：`neutral-1`（section alt bg）。

### 1.4 语义 token（shadcn 风）

`--color-background #fbfaf6` · `--color-foreground #2b2420` · `--color-card #fbfaf6` ·
`--color-muted #f1eee7` · `--color-muted-foreground #8f8574` ·
`--color-border-subtle #e5e0d5` · `--color-surface #f8f6f1` ·
`--color-destructive #d84144`。

**Primary（v4.0 —— 火焰红回归主 CTA）**：`--color-primary` = brand-red，
`--color-primary-foreground` = `#fff`，`--color-accent` = brand-yellow（黄做
次级强调/highlight，红黄各司其职）。黑底白字 CTA 退休。

> Tailwind v4 会为每个 `--color-*` 自动生成 `bg-* / text-* / border-*`。
> **优先用 token 工具类，不要写裸 hex。**

### 1.5 画布用微暖白（不是纯白）

页面与卡片底统一用 `--color-background` / `--color-card` = **`#fbfaf6`**（微暖白），
纯白偏冷、偏"未样式化"。**全站不要再用 `bg-white`**（纯白）作面色 —— 用
`bg-background`（自动取暖白 token）。`--color-brand-white`（`#ffffff`）仅作"白墨"：
反转面上的文字、半透明叠加 `bg-white/xx` 等，保持纯白。

---

## 2. 圆角 · 阴影 · 动效

- **圆角**：`--radius-sm 4 · -md 6 · -lg 8 · -xl 14 · -card 8 · -chip 999`。卡片用
  `-card`(8)，按钮用 `-md`(6)，胶囊用 `-chip`。
- **阴影**（3 档，全部极淡 rgba 0.05–0.10）：`--shadow-xs · -sm-soft ·
  -md-soft`。hover 只允许微变到 `-xs`，**禁硬阴影/偏移阴影**。
- **动效**：时长 `--dur-fast 150 · -med 200 · -slow 300`，缓动
  `--ease-standard`。MOTION_INTENSITY 4——克制但有差异化；详见 §6。

---

## 3. 字体与排版

- `--font-sans`：Inter（西文）→ Noto Sans SC / 思源黑（中文回退）。正文、UI、
  按钮、导航全用它。
- `--font-mono`：JetBrains Mono。用于 eyebrow 小标（`font-mono uppercase
  tracking-widest`，**配额受限，见 §8**）和代码/数字。
- `--font-display`：得意黑 Smiley Sans（见 §7）。v4.0 本轮不换字体——先靠颜色/
  图像/CTA/布局把"暖"做出来，字体留到下一轮迭代评估。
- 中文排版：正文 `line-height 1.75`，标题 `1.3`；中文用全角标点
  （，。：、！？），英文/数字用半角；中文破折号 `——`。
  详见 `.claude/rules/i18n-text.md`。

---

## 4. 组合范式（Composition Patterns）

AI 拼版面时**默认照这个来**，才不会"语法对但平庸"。

### 4.1 Section 节奏

```astro
<section class="py-20 md:py-24 px-4 sm:px-6 lg:px-8 [panel bg]">
  <div class="max-w-6xl mx-auto">
    <div class="max-w-3xl">
      <!-- eyebrow 可选，配额见 §8.1 -->
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">标题</h2>
      <p class="mt-4 text-base md:text-lg text-neutral-8 leading-relaxed">引导句</p>
    </div>
    <!-- 内容网格：mt-10，hairline 分隔用 gap-px + bg 衬色 -->
  </div>
</section>
```

- 容器恒为 `max-w-6xl mx-auto` + `px-4 sm:px-6 lg:px-8`；文本块限 `max-w-3xl`。
- 段距恒为 `py-20 md:py-24`。
- eyebrow：亮面用 `text-brand-red`，暗面用 `text-brand-yellow`——但**每页有配额**
  （§8.1），标题本身够清楚就不用加。
- **hairline 网格**：`grid gap-px bg-neutral-3`（暗面用 `bg-white/10`）+ 子项
  自身底色 → 形成 1px 细分隔，技术感的招牌手法。

### 4.2 Panel 三态（面系统）

页面靠交替 panel 制造节奏，**亮 → 暗 → 亮**：

| Panel | 何时用 |
|---|---|
| 白 / `panel-light` | 默认内容段 |
| 柔黄 `bg-brand-yellow-light` | 想"暖一下"的窄强调段 |
| 反转 `panel-dark`（暖 ember-dark） | 每页至少一处，制造对比与可信厚重感 |
| 火焰渐变 `var(--gradient-flame)` | hero 背景层 / 关键分隔带，v4.0 新增 |

### 4.3 Hero 范式 + 招牌器件

- Hero 文本块左对齐、`max-w-3xl`，**文本元素 ≤4 个**（eyebrow/徽章、标题、副题、
  CTA 组）——不塞事实条/场景标签/工具列表，见 §8.4。
- **招牌可信器件 = M0–M5 课程矩阵**。它是本站最独特的资产；hero / 课程页应让它
  可见，相当于 SaaS 站的"产品截图"，一眼传达"这是真课程体系"。
  实现：`HeroCourseMap.astro` + `HeroBanner` 的 `anchor` slot（首页 hero 用，
  其他页 hero 仍单栏文本）。

### 4.4 按钮（v4.0）

| 变体 | 用法 |
|---|---|
| Primary（CTA） | `bg-brand-red text-white hover:bg-brand-red-hover`（亮面/暗面统一，不再分黑/红两套） |
| Secondary | `bg-background border border-neutral-3 text-brand-black hover:border-brand-black/30`（亮面）/ `border border-white/30 text-white hover:bg-white/10`（暗面） |

统一 `rounded-md`(6px) · `px-5 py-2.5` · `text-sm font-semibold` ·
`focus-ring` · 配 `lucide:arrow-right` 图标。**同一意图（如"联系我们"）全站只用
一种措辞**，见 §8.2。

---

## 5. 组件货架（Active vs Deprecated）

**先复用，再造新的。** 下列为 `theme.css @layer utilities` 提供的现成件：

### Active

| Class | 用途 |
|---|---|
| `.panel-yellow` / `.panel-dark` / `.panel-light` | 面系统（段落/卡片底）；`+.panel-interactive` 加 hover 微变与 active 缩放 |
| `.card-hairline` | 带 1px `neutral-3` 边 + 极淡 hover 阴影的**内容卡**（与 panel 不同：panel 无边、用于大面，card-hairline 用于带边的小卡） |
| `.module-tile` | M 代码徽章；配 `--red`/`--yellow`/`--dark` + 可选 `--sm`/`--lg` |
| `.level-badge` | L1/L2/L3 胶囊；配 `--l1`/`--l2`/`--l3` |
| `.section-flag` | 标题前的红色竖条（5px） |
| `.nav-link` | 导航：hover/active 红色滑动下划线 |
| `.focus-ring` | focus-visible 焦点环（红 2px + 白偏移） |
| `.skip-link` | 跳到主内容 |
| `.highlight` | 关键词的黄色 marker 底 |
| `.noise-overlay` | 给饱和黄面/反转黑面加 2.5% 噪点纹理 |

> **panel vs card-hairline 怎么选**：整段/大块底色、需要黄或黑面 → 用 `panel-*`；
> 列表里带边框的内容卡片 → 用 `card-hairline`。二者都 active，职责不同。

### Deprecated / 不要用

- 任何 §8 禁用清单中的写法。

---

## 6. 动效规则

- `MOTION_INTENSITY: 4`——克制但要有差异化，不是"每个 section 一模一样淡入"。
- 基础机制：scroll-reveal（淡入 + 微上移），`data-reveal` 触发
  （IntersectionObserver，不引 AOS 等依赖）。
- **卡片网格 stagger**：给循环里的每个子项加 `data-reveal` + 内联
  `style={\`--reveal-delay: ${i * 70}ms\`}`（密集网格用更小步进，如 45ms），
  取代整段一起淡入。已应用于 `HomeGoalPaths` / `PathDepthSection` /
  `AboutEcosystemSection` / `AboutValuesSection` / `CourseLearningLadder` /
  `ContactScenariosSection`（经 `ScenarioCard` 的 `delayMs` prop）/
  `HomeFamiliarObjects`。新增同类卡片网格时照此模式加。
- **CTA 火焰 hover**：`a.bg-brand-red:hover` / `button.bg-brand-red:hover`
  全局叠加 `var(--gradient-flame)` + 暖色 `box-shadow` + 缓慢
  `background-position` 位移动画（`theme.css` 里的 `flame-shift`
  keyframe）。只按标签选择器生效（`a`/`button`），不影响 `module-tile` /
  `level-badge` 等静态徽章 `span`。`prefers-reduced-motion` 下关闭动画、保留
  静态渐变。
- **必须**在 `@media (prefers-reduced-motion: reduce)` 下禁用，且不依赖动效才
  可见的内容（reduce 时直接显示）。
- 不堆砌、不炫技——不引入 GSAP/Motion 等依赖，原生 CSS + IntersectionObserver
  够用。

---

## 7. 字体策略

大标题用 display 字面制造层级对比，方向为**几何工业体**（契合硬件/创客，齿轮
母题的踏实感）。

- **Display = 得意黑 Smiley Sans**（倾斜几何工业体，OFL 免费商用）。自托管
  子集：`public/fonts/SmileySans-Oblique.subset.woff2`（仅站内用字，~95KB），
  `@font-face` 在 `theme.css`，`font-display: swap`，并在 `Layout.astro`
  `<link rel="preload">`（hero H1 常为 LCP）。
- Token：`--font-display: "Smiley Sans", Inter, "Noto Sans SC", sans-serif`
  （缺字优雅回退）。
- **仅用于 display 级大标题**：通过 `.font-display` 工具类应用。目前用在
  `HeroBanner` 的 H1（覆盖全部页面 hero）。section H2 保持思源黑 Bold —— 形成
  「display marquee → bold sans 段落」的层级，别全站滥用倾斜体。
- **改字符集后需重新子集**：站内新增大量生僻字时，用 `pyftsubset` 以全站文本
  为字符集重新生成（缺字会自动回退，不致破版）。
- v4.0 本轮不换字体，见 §3。

---

## 8. 禁用清单（Banned）

替代 v3.0 的配色比例硬指标，针对审计出的真实问题：

1. **Eyebrow 配额** — 每页 eyebrow 数量 ≤ `ceil(section 数 / 3)`，hero 算 1 个
   section。标题本身够清楚就别加 eyebrow。
2. **CTA 意图去重** — 同一目的地（如"联系我们"）在全站只用同一个措辞，不许
   "申请合作咨询"/"了解合作方式"/"直接咨询合作"这样各页各写一套。
3. **不得用 AI 生成的"仿真实拍"充当真实照片** — 教学场景/学员/工坊要么用真实
   影像，要么统一走扁平图标插画风格，不要伪造照片质感（乱码 UI/乱码人名牌一类
   AI 生成瑕疵尤其不可接受）。
4. **Hero 文本元素 ≤4 个**（eyebrow/徽章、标题、副题、CTA 组）——不塞事实条/
   场景标签/工具清单卡进 hero，这些下移到 hero 之后的第一个内容 section。
5. **同一布局家族（如 3-col-card）连续出现 <3 次** ——一页里如果要连续放同款
   网格/卡片布局，最多两次，第三次必须换一种构图（横向 scroll、非对称网格、
   全宽数字带等）。
6. **不得用占位符充当真实信任信号** —— 没有真实合作伙伴 logo/名单前，先不上
   "合作伙伴墙"这类 section，不要用"合作伙伴1"这种占位文案顶替。
7. **brutalist 相关禁令（沿用 v3.0，不冲突）**：
   - 万物加 2px 黑边。
   - 硬阴影 / 偏移阴影（贴纸风）。
   - hero 里的装饰几何块。
   - 宽幅纯红铺面（`bg-brand-red` 覆盖整段，火焰渐变除外）。
   - token 体系外的裸 hex / 自造圆角。
   - 纯白卡片不配 `card-hairline` / 不进 panel（看着像未样式化的裸 HTML）。

---

## 9. 改设计时的纪律

1. 改 token → `theme.css` 与本文**两边同步**，`styleguide.astro` 的硬编码色卡
   数组也要同步（它没有从 CSS 读取，是独立维护的镜像）。
2. 先用现有 token / 组件（§5 货架），再考虑新建。
3. 不写裸 hex、不造体系外圆角。
4. 动效尊重 `prefers-reduced-motion`。
5. 改完打开 `/styleguide` 自检对比度（尤其按钮文字/focus-ring/表单），并跑
   `pnpm check && pnpm build`。
6. 内容只改 `src/data/*.ts`（`/llms.txt` 与 Course JSON-LD 会自动同步）。
7. 新增/改动前对照 §8 禁用清单逐条自查，尤其 eyebrow 配额和 CTA 措辞一致性——
   这两条最容易在多人/多次改动里悄悄破戒。
