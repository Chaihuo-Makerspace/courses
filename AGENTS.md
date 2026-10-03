# AGENTS.md

Entry point for coding agents. Read this, then `ARCHITECTURE.md` and the rule
files at the bottom as the work demands.

## What this is

The enrolment and partnership site of 柴火创客学院 (Chaihuo Maker Academy):
Astro, server-rendered, five locales (zh-CN is the source; en, ja, es, pt-BR).
All content is TypeScript data in `src/data/*.ts`. There is no CMS and no
remote content.

Positioning, for every piece of copy:

> 我们培养人掌握新技术整合能力，让团队自己能把解决方案部署落地。

## Content

- Change copy in `src/data/*.ts`. zh-CN is read straight from the data files;
  do not repeat zh copy in an i18n dictionary. `/llms.txt` and the Course
  JSON-LD regenerate from the data.
- Add or change interface strings in all five locales in the same change.
- Publish no prices, no unsourced numbers, no placeholder trust signals.
- Branch on a stable `id`, never on display text (`label.includes('…')`).
- Render each piece of information once. The matrix, the closing CTA and the
  FAQ each have one component.
- Partnership intake is a `mailto:` link on `/contact`. No web forms.

## Visual

- Read `docs/DESIGN.md` before visual work. It is short: what the site is,
  the design paradigms to judge by, color roles, typography facts, copy voice
  and the hard constraints. Exact values live in code and `/styleguide`.
- Write colors as role tokens (`bg-primary`, `text-foreground`,
  `text-primary-ink`, `bg-inverse` …), never hue names or raw hex. Color
  values live only in `src/data/themes.ts`.
- Register a lucide icon in `src/data/icons.ts` before using it.
- Use template literals when Chinese full-width quotes appear in `.astro`
  frontmatter or inline JS.

## Repository

- Do not commit AI working files: `docs/` except `docs/DESIGN.md`, `.claude/`
  except `.claude/rules/`, and `.superpowers/` are gitignored on purpose.

## Commands

```bash
pnpm install
pnpm dev       # :3001
pnpm check     # astro check — TypeScript / Astro validation
pnpm lint      # biome check src
pnpm format    # biome format --write src
pnpm build     # server output + prerendered /llms.txt (course pages are SSR)
pnpm deslop    # report-only scan for zh clichés and raw colors
python3 scripts/subset-display-font.py <SmileySans-Oblique.ttf>
               # regenerate the display-font subset after heading copy changes
```

## Before calling work done

- `pnpm check`, `pnpm lint` and `pnpm build` pass. There is no test runner.
- Look at the rendered pages in a browser, in zh and en. Escaped-quote leaks,
  a heading borrowed from another module and characters missing from the
  display-font subset all pass check, lint and build.
- After content edits, confirm `dist/client/llms.txt` reflects the change.
- Course detail pages are server-rendered, so there is no
  `dist/client/courses/*`. To verify the Course JSON-LD, start the built
  server and check that
  `curl -s localhost:<port>/courses/m0 | grep -c 'application/ld+json'`
  returns at least 1.

## More

- `ARCHITECTURE.md` — repo map, data flow, what is prerendered
- `docs/DESIGN.md` — design paradigms, color roles, typography, copy voice
- `.claude/rules/astro.md` — Astro conventions, Preline, icons, path aliases
- `.claude/rules/data-layer.md` — editing `src/data/*.ts`
- `.claude/rules/llm-surfaces.md` — `/llms.txt` and Course JSON-LD
- `.claude/rules/i18n-text.md` — quotes, punctuation, brand name, banned registers
