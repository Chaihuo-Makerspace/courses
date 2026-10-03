# Chaihuo Maker Academy Architecture Map

A small Chinese-language marketing site for 柴火创客学院 (Chaihuo Maker
Academy). Built on Astro 6 with a strict TypeScript data layer
driving every page.

**Context** — the Academy belongs to 柴火创客空间 (founded in Shenzhen in
2011) and teaches on Seeed Studio hardware. Core positioning: **培养人掌握
新技术整合能力**, not "提供解决方案". The audience is institutions (schools,
integrators, enterprises); Pioneers and Bases are channel partners we
recruit, not consumers.

## System Surfaces

- `src/pages/` — route entrypoints. Mostly SSR (per `output: 'server'`),
  with `/llms.txt` prerendered and everything else rendered per request
  (`/courses/[slug]` is SSR so it can respect the request locale).
- `src/components/` — reusable Astro components (chrome + composite cards).
- `src/components/sections/` — page-level sections (home, courses,
  courses/[slug], about, contact, pioneer/base). Shared pieces live one level
  up: `CourseMatrix` (the only matrix and the only L1–L3 legend),
  `SectionHeader`, `HeroBanner`, `sections/FinalCtaSection`,
  `sections/FaqSection`.
- `src/layouts/Layout.astro` — HTML shell + Preline init + Google Fonts +
  `<slot name="head" />` for per-page extras (JSON-LD, extra meta).
- `src/data/*.ts` — typed data layer; **single source of truth for all
  marketing content**.
- `src/styles/` — Tailwind v4; `themes/theme.css` maps `--c-*` theme tokens to utilities. Color values live in `src/data/themes.ts`.

## Course Matrix (Two-Dimensional)

The product is an **M0–M6 × L1/L2/L3** matrix:

- **Rows**: 7 modules — M0 is the entry course for beginners, M1–M6 each
  address one kind of on-site problem
  - M0 零基础智能硬件入门 — Smart Hardware Fundamentals (AI-assisted coding;
    layered A/B/C by hardware platform, mapped onto the L1/L2/L3 rows)
  - M1 设备互联与智能管控 — Device Interconnection and Intelligent Management
  - M2 多模态 AI 交互 — Multimodal AI Interaction
  - M3 自组网与韧性通信 — Self-organizing Mesh & Resilient Communication
    (`overseasOnly: true` — marked on the matrix, the module list, the detail
    hero and in `llms.txt`)
  - M4 边缘视觉 AI — Edge Vision AI
  - M5 环境感知与数据采集 — Environmental Sensing & Data Acquisition
  - M6 机器人控制与具身智能 — Robotic Control & Embodied Intelligence
- **Columns**: 3 learning depths — L1 展示层 / L2 顾问层 / L3 设计层
- **3 goal-oriented directions** (`src/data/tracks.ts`):
  `make-with-ai` 用 AI 造物 (M0), `build-ai-products` 造 AI 的物 (M2 · M4 · M6),
  `solutions` 解决方案 (M1 · M3 · M5).

M0 is the recommended entry; M1–M6 can each be run on their own. Tracks
group modules by goal, not by a fixed `M0 → … → M6` sequence. They are
rendered once, on `/courses` (`CourseDirections`, anchors `#track-<id>`).
`/paths` was retired; the middleware answers `/paths` and `/<locale>/paths`
with a 301 to the matching `/courses`.

## Partnership IA (3 × 4)

`src/data/partnerships.ts`:

- **3 scenarios**: `university` / `integrator` / `enterprise`
- **4 sales forms (hardware-kit framing)**: `A` 裸硬件套件 · `B` 标准教学套件 ·
  `C` 全托交付套件 · `D` 师资培训套件
- Each scenario cross-links to applicable forms via `applicableForms`
  (anchor `#form-{code}` on `/contact`); forms cross-link back via
  `suitableScenarios` (anchor `#scenario-{id}`).
- Intake is a **`mailto:` link** to business@chaihuo.org on `/contact`. No
  inline web forms anywhere.

## Data Flow

Edits flow in exactly one direction:

```
src/data/{modules,tracks,partnerships,site,icons}.ts   (source of truth)
        │
        ├──► src/pages/courses/[slug].astro      (SSR HTML + Course JSON-LD)
        ├──► src/pages/courses/index.astro       (SSR overview)
        ├──► src/pages/contact.astro             (SSR — scenarios × formats ledger)
        ├──► src/pages/index.astro               (SSR homepage)
        ├──► src/pages/about.astro               (SSR)
        └──► src/pages/llms.txt.ts               (prerendered AI surface)
```

`/llms.txt` and per-module Course JSON-LD auto-sync from this data layer.
Operational rules live in `.claude/rules/llm-surfaces.md`.

**zh-CN is read straight from `src/data/*.ts`.** The i18n dictionaries hold
the other four locales, keyed by each data item's stable `id` (site, tracks,
partnerships) or by the Chinese source string (modules, pioneer/base). The
zh block of `data-translations.ts` only carries interface strings that have
no data file behind them. Never re-enter zh copy in a dictionary — that fork
has lost content before.

## Prerender Boundary

`output: 'server'` with `@astrojs/node` standalone adapter. Static prerender
is opt-in per page (`export const prerender = true`):

| Route | Mode | Build artifact |
|---|---|---|
| `/courses/m0..m6` | SSR (per request, locale-aware) | server entrypoint (no `dist/client/courses/*`) |
| `/llms.txt` | Prerendered | `dist/client/llms.txt` |
| `/` `/courses` `/contact` `/about` `/pioneer` `/base` `/404` | SSR | server entrypoint |
| `/paths` | 301 → `/courses` (middleware) | — |

Course detail pages are **not** prerendered: they render on demand so the
request locale is respected, and they still emit Course JSON-LD on every
request. Acceptance therefore means starting the built server and curling a
course page — see `.claude/rules/llm-surfaces.md`.

## Tech Stack

- Astro 6 + `@astrojs/node` (standalone)
- Tailwind CSS v4 via `@tailwindcss/vite`
- Preline UI v4 (collapse / accordion only)
- `astro-icon` + `@iconify-json/lucide`
- TypeScript strict (`astro/tsconfigs/strict`)

## TypeScript Path Aliases

```
~/components/*  → src/components/*
~/layouts/*     → src/layouts/*
~/data          → src/data/index.ts
~/data/*        → src/data/*
~/styles/*      → src/styles/*
```

Existing files mostly use relative imports. Either convention is fine —
match the surrounding file.

## Pointers

- Astro / TS conventions: `.claude/rules/astro.md`
- Content edits: `.claude/rules/data-layer.md`
- AI-facing surfaces: `.claude/rules/llm-surfaces.md`
- Visual rules: `.claude/rules/styling.md`
- Chinese text rules: `.claude/rules/i18n-text.md`
