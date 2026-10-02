# 柴火创客学院 · 设计方案（Design System）v5.0

> **这是设计系统的唯一权威文档。** Token 值与 `src/styles/themes/theme.css`
> 逐一对齐；改 token 时 theme.css、本文、`src/pages/styleguide.astro` 三处同步。
> 本地 `pnpm dev` 后打开 **`/styleguide`**，能看到线上页面真正在用的全部 token
> 与组件类。

v4.0 的规则大多是对的，但它只约束装饰、不约束决策，声明的效果（火焰渐变是
图形主体、版式有变化）在真实页面上并不存在。v5.0 的写法是：**只记录已经实现
的东西**，并给每个页面一份契约（§7），评审时回读真实截图而不是回读本文。

---

## 0. 定位

这是一个面向教育机构决策者（校长、信息中心主任、集成商负责人、企业培训负责
人）的 B2B 招生招商站。语言是**工程交付台账**：真实硬件、逐课时内容、敢写
边界、可验收。先锋官与基地是我们**招募的渠道伙伴**（学会课程再去推广），不是
终端客户。

**核心叙事**（贯穿所有文案，不变）：

> 我们培养人掌握新技术整合能力，不提供解决方案。

**招牌资产是 M0–M6 × L1/L2/L3 课程矩阵**，相当于 SaaS 站的产品截图。首页
首屏的主角是它。

**Dial（逐页，不是全站一个数）**：首页 5/4/4 · /courses 4/3/7 · 课程详情
5/3/7 · /about 5/4/3 · /contact 4/3/6 · /pioneer、/base 6/5/6
（VARIANCE / MOTION / DENSITY）。密度集中在证明类页面（矩阵、课程详情）。
评审时对照截图回读实测值，声明与实测偏差大于 2 就改设计或改声明。

---

## 1. 颜色

### 1.1 火焰渐变

`--gradient-flame: linear-gradient(135deg, brand-red, brand-yellow)`

**只有三处用法**，都能在静态截图里看见：

| 用法 | 类 | 在哪 |
|---|---|---|
| 铺面 | `.flame-band` | 仅首页 hero：矩阵卡片压在它上面 |
| 细线 | `.flame-rule`（3px） | 内页 hero 底边；**每页至多一处**分隔 |
| hover | `.btn-primary:hover` | 主按钮 |

不铺其他大面，不做整段纯红。

### 1.2 品牌色

| 用途 | Token | Hex |
|---|---|---|
| 主按钮、强调文字、L3 徽章 | `--color-brand-red` | `#d84144` |
| 主按钮 hover 底色 | `--color-brand-red-hover` | `#c13538` |
| L3 列底、警示底 | `--color-brand-red-light` | `#fdeaea` |
| L2 徽章、记号笔底、深色面上的序号 | `--color-brand-yellow` | `#f3d230` |
| L1 列底、柔黄面 | `--color-brand-yellow-light` | `#fef9e7` |
| L2 列底 | `--color-brand-yellow-mid` | `#fde68a` |
| 黄底上的文字 | `--color-brand-yellow-dark` | `#b8960a` |
| 标题与正文主色（暖炭灰） | `--color-brand-black` | `#2b2420` |
| 深色面、页脚（ember-dark） | `--color-brand-graphite` | `#3a231d` |
| 白墨 | `--color-brand-white` | `#ffffff` |

logo 里没有黑色，所以没有冷黑。调色时别往「暖米白 + 黄铜 + 咖啡棕」那套
消费品配色靠——本站的暖色语言是火焰红黄。

**L1 → L2 → L3 是一条由浅到热的色阶**（淡黄 → 中黄 → 淡红），矩阵列底、
详情页三档深度、首页 hero 矩阵都用同一条。深度越深，底色越热。

### 1.3 暖灰阶

`--color-neutral-1`→`-10`：`#f8f6f1 · #f1eee7 · #e5e0d5 · #d0c8b8 · #b0a695 ·
#8f8574 · #746a5c · #5a5145 · #3f382f · #2b2420`

`-3` hairline · `-6` 标签 · `-7` 次要文字 · `-8` 正文 · `-1` 交替段底。

### 1.4 画布

页面与卡片底统一用 `--color-background` = `#fbfaf6`（微暖白）。不用 `bg-white`
作面色。**唯一例外**：产品图自带白底，衬底用 `bg-brand-white` 才不露边
（见 `CourseEquipment.astro`）。

### 1.5 深色面

**每页至多一处**（页脚不算）。首页、/courses、/about、/pioneer、/base 是页尾
CTA；课程详情页是「学完拿走什么」，页尾 CTA 改用浅色（`tone="light"`）；
/contact 没有。

---

## 2. 版式

- **容器**：全站只有 `.container-page`（72rem + 响应式内边距）。导航、hero、
  每个 section、页脚共用同一条左边线。
- **纵向节奏只有两档**：`.section`（标准段）与 `.section-tight`（紧凑带）。
  hero 有自己的内边距。不再出现 `py-14 / py-16 / py-20 / py-24` 混用。
- **首屏**：900px 高的视口里要能看到第二个 section 的起点（zh）。
- **不用卡片装正文**。清单用 hairline 分隔的台账式行（`border-t` /
  `border-b`），需要分栏时用 `gap-x-10` 的多列。只有带图的设备卡用
  `.card-hairline`。
- **同一信息只渲染一次**：矩阵（含 L1–L3 图例）是 `CourseMatrix`，三个方向是
  `CourseDirections`，页尾 CTA 是 `FinalCtaSection`，FAQ 是 `FaqSection`。
- **渐进分层**：课程详情页的逐模块大纲、逐件设备图文清单默认折叠
  （原生 `<details>`，内容仍在 DOM 里）；「写给老师」与「能力边界与合规约束」
  保留全文。

圆角：`--radius-sm 4 · -md 6（按钮）· -lg 8（卡片）· -chip 999`。
阴影：`--shadow-xs · -sm-soft · -md-soft`，全部极淡；禁硬阴影、偏移阴影。

---

## 3. 字体

- `--font-display`：得意黑 Smiley Sans。**hero H1 与每个 section 的 H2**
  （`.font-display` / `.heading-section`）。H2 约 36px，与 16px 正文拉开约
  2 倍。H3 及以下用思源黑 Bold。
- `--font-sans`：Inter → Noto Sans SC。正文、UI、按钮、导航。
- `--font-mono`：JetBrains Mono。**只给拉丁代号**：`M2`、`L1`、`3d`、SKU。
- **中文小标签不套 mono / uppercase / tracking-widest**——那是拉丁字母的装置。
  用 `.label`（字重 + 字色）。
- **日语标题整行用正文字体**：得意黑没有日文汉字字形，混排会一行两种字体。
- 得意黑是**子集字体**（`public/fonts/SmileySans-Oblique.subset.woff2`）。
  标题里出现子集外的字，会在一行标题中间掉回思源黑，check / lint / build
  都发现不了。改了标题文案后跑
  `python3 scripts/subset-display-font.py <完整字体路径>` 重新生成。
- 中文排版：正文行高 1.75；全角标点；破折号 `——`。见
  `.claude/rules/i18n-text.md`。

---

## 4. 组件

### 4.1 Hero

- **首页**（`HomeHero`）：标题、描述、CTA 组，下面是压在火焰铺面上的紧凑矩阵。
- **内页**（`HeroBanner`）：标题、描述、CTA 组，**文本元素 ≤3**。没有 eyebrow，
  没有副题。
- **/courses** 没有独立 hero：页面标题直接接完整矩阵。
- **课程详情**：标题、一句话、CTA 组，右侧是事实台账（难度、时长、协议、
  所属方向）。

hero 里的每个元素都要回答访客的问题。重复品牌名、重复导航已有信息的元素
直接删。

### 4.2 按钮

| 类 | 用法 |
|---|---|
| `.btn .btn-primary` | 主行动，红底白字，hover 火焰渐变 |
| `.btn .btn-secondary` | 浅色面上的次行动 |
| `.btn .btn-ghost` | 深色面上的次行动 |

**同一去向全站一种措辞**。去往 /contact、/courses、/about 的按钮文案只在
`translations.ts` 的 `cta.contact / cta.courses / cta.about` 里各定义一次，
通过 `ctaLink(intent, locale)` 取用；`src/data/site.ts` 只写去向。按钮文案要
让读者预期到点击后发生什么（/contact 的主按钮直接写出邮箱）。

### 4.3 其他

| 类 / 组件 | 用途 |
|---|---|
| `SectionHeader` | section H2 + 可选引导句。没有 eyebrow 参数 |
| `.module-tile` | 模块代号。M0 红（`--red`），M1–M6 暗（`--dark`），全站同一语义 |
| `.level-badge` / `LevelBadge` | L1 / L2 / L3 |
| `.label` | 小标签 |
| `.highlight` | 关键词的黄色记号笔底 |
| `.card-hairline` | 带图设备卡 |
| `.focus-ring` / `.skip-link` / `.nav-link` | 可访问性与导航 |

---

## 5. 文案声音

**一个真的在开课的教研团队在回合作方邮件。** 说课时、说设备型号、说验收、
敢说边界。短句，名词和数字优先于形容词；每段话回答一个买家真的关心的问题。
「不交付 / 不承诺」清单保留——这是全站最稀缺的信任资产。

禁用语域：

- 黑话：赋能、打造、一站式、助力、抓手、闭环（营销语境；控制闭环、抓取闭环
  等技术用法合法）、轻松实现、魔法时刻、旗舰入口。
- 模板装置：「零…门槛」排比、每个模块复用同一句引言或脚注。模板化 = 没有说。
- 内部代号外泄：OPC、NLHD、数据 schema 术语、未解释的缩写。
- 空转修辞：与标题同义的 eyebrow、重复 logo 文字的副题。
- 日式词与直译词：学园、之旅、解锁、拥抱。见 `.claude/rules/i18n-text.md`。

**价格**：全站不写任何价格数字，只给行动话术——「按班型与规模报价，邮件后
3 个工作日内给方案」。

**数字也是信任信号**：`src/data/*.ts` 里每个面向访客的数字与事实声明，注释里
要有出处（源材料路径、公开事实、或 owner 确认日期）。没有出处就删。

---

## 6. 动效

- scroll-reveal（淡入 + 微上移）：`data-reveal` + IntersectionObserver，见
  `src/scripts/reveal.ts`。列表项可加 `--reveal-delay` 做 stagger。
- 主按钮 hover 的火焰渐变位移。
- 两者在 `prefers-reduced-motion: reduce` 下关闭，且内容不依赖动效才可见。
- 不引入 GSAP / Motion 等依赖。

---

## 7. 页面契约

每页一份。评审从这里进。

| 页面 | 访客的问题 | 必须回答 | section（含 hero） |
|---|---|---|---|
| `/` | 你们是谁？跟我（机构）有什么关系？ | 一句话定位 + 矩阵 + 一条可核实事实 + 下一步 | hero（矩阵）· 引入一门课到手什么 · 渠道伙伴入口带 · CTA |
| `/courses` | 教什么？多深？怎么组合？ | 完整矩阵 + 按方向分组的模块列表 | 矩阵 · 三个方向 · CTA |
| `/courses/m*` | 值不值得引入？几天？什么设备？能验收什么？ | 首屏答四个问题；大纲与设备清单折叠；边界全文 | hero · 问题 · 三档深度 · 设备与工具链 · 大纲与排课 · 交付物 · 写给老师 · 边界 · CTA |
| `/about` | 你们可信吗？ | 可核实的来历 + 一位具名负责人；没有真料就短 | hero · 来历 · CTA |
| `/contact` | 怎么合作？什么价位？找谁？ | 邮箱 + 报价话术 + 对象 × 形态 + FAQ | hero（mailto）· 对象与形态 · FAQ |
| `/pioneer` `/base` | 怎么成为渠道伙伴？ | 条件、条款、流程，平铺 | hero · 条件与条款 · 流程 · FAQ · CTA |

`/paths` 已退休，301 到 `/courses`。

---

## 8. 禁用清单

1. **伪造信任信号**：没有出处的数字、占位合作伙伴 logo、AI 生成的仿真实拍。
   图像层级是：真实照片 > 真实产品图 > 统一扁平插画。
2. **同一信息渲染两遍**：新增区块前先确认 §2 里的唯一组件是否已经讲过。
3. **brutalist 残留**：2px 黑边、硬阴影、装饰几何块、整段纯红。
4. **token 体系外的裸 hex、自造圆角**。
5. **中文 mono eyebrow**，以及任何与标题同义的小标。
6. **按显示文案做逻辑判断**（`label.includes('…')`）。数据项带稳定 `id`，
   翻译与分支按 id。

---

## 9. 改设计时的纪律

1. 改 token → theme.css、本文、styleguide 三处同步。
2. 先用现有组件类（§4），再考虑新建。
3. **提交前在浏览器里看真实页面**，zh 和 en 都看：`pnpm check && pnpm lint
   && pnpm build` 全绿不代表页面正确。转义泄漏、串了别的模块的标题、字体
   子集缺字，都只在渲染结果里看得见。
4. 内容只改 `src/data/*.ts`；zh 文案不在 i18n 字典里再写一遍。
5. 新增界面文案的 key，五个语种同一次提交补齐。
