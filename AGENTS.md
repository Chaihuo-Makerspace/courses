# AI Collaboration Rules

Repository entry point for coding agents (Claude Code, Codex, Gemini CLI).
Read this first; descend into `ARCHITECTURE.md` and `.claude/rules/*.md` as
work demands.

## Scope

- Project is 柴火创客学院 (Chaihuo Maker Academy) — a Chinese-language
  marketing / 招生 / 招商 site. **Not** a docs platform, **not** a CMS-backed
  blog.
- Source-of-truth files in this repo: `ARCHITECTURE.md` (repo map),
  `.claude/rules/*.md` (topical rules). Everything under `docs/` is local
  working material and is intentionally gitignored.

## Do

- Read `ARCHITECTURE.md` before any change that crosses the data layer
  (`src/data/*.ts`) and the page layer (`src/pages/`).
- Edit marketing copy by changing `src/data/*.ts` only — `/llms.txt` and
  Course JSON-LD auto-sync on next `pnpm build`. See
  `.claude/rules/llm-surfaces.md`. zh-CN is read from the data files; never
  re-enter zh copy in an i18n dictionary.
- Add or change interface strings in all five locales in the same commit.
- Look at the rendered pages in a browser, in zh and en, before calling a
  visual or copy change done. Escaped-quote leaks, a heading borrowed from
  another module and characters missing from the display-font subset all
  pass check, lint and build.
- Follow `docs/DESIGN.md` (authoritative design system, v5.0) for the page
  contracts, the per-page dial, where the flame gradient may appear, the
  two-tier section rhythm, typography and button usage.
  `.claude/rules/styling.md` only points to it.
- Register new lucide icons in `src/data/icons.ts` before referencing them.
  See `.claude/rules/astro.md`.
- Use template literals when Chinese full-width quotes appear in `.astro`
  frontmatter or inline JS. See `.claude/rules/i18n-text.md`.

## Avoid

- Do not introduce a CMS, docs platform (Mintlify / Fern), or fetch course
  content from anywhere other than `src/data/*.ts`.
- Do not reintroduce removed Astro content collections (`courses`,
  `classic-courses`, `testimonials`) — they were retired with the M-matrix
  refactor.
- Do not hand-write `llms-full.txt` or add fake `hasCourseInstance`
  schedule/price data to the Course JSON-LD.
- Do not add brutalist visual touches (2px black borders, offset hard
  shadows, decorative geometry, wide red fills). The repo has drifted toward
  them once and was reverted.
- Do not commit AI process artifacts (`docs/` except `docs/DESIGN.md`,
  `.claude/` except `.claude/rules/`, `.superpowers/`). They are gitignored
  intentionally. `docs/DESIGN.md` is the one committed design-system doc.
- Do not put inline web forms anywhere — partnership intake is a `mailto:`
  link to business@chaihuo.org on `/contact`.
- Do not publish prices, unsourced numbers or placeholder trust signals.
- Do not branch on display copy (`label.includes('…')`). Give the data item
  a stable `id` and branch on that.
- Do not render the same information twice. The matrix, the three
  directions, the closing CTA and the FAQ each have exactly one component.

## Commands

```bash
pnpm install
pnpm dev       # :3001
pnpm check     # astro check — TypeScript / Astro validation
pnpm lint      # biome check src — TS/JS/JSON lint + format check
pnpm format    # biome format --write src
pnpm build     # server output + prerendered /llms.txt (course pages are SSR)
```

```bash
pnpm deslop    # report-only scan for zh clichés, bg-white, naked hex
python3 scripts/subset-display-font.py <SmileySans-Oblique.ttf>
               # regenerate the display-font subset after heading copy changes
```

Design system: `docs/DESIGN.md` is authoritative; `/styleguide` shows the
tokens and component classes live pages actually use (run `pnpm dev`, open
`/styleguide`).

## Tests

- No test runner exists. `pnpm check` (TypeScript) and `pnpm lint` (Biome)
  must pass before considering work done.
- After content edits, also run `pnpm build` and verify
  `dist/client/llms.txt` reflects the change.
- Course detail pages are **SSR** — there is no `dist/client/courses/*`
  artifact. Verify Course JSON-LD by starting the built server and checking
  `curl -s localhost:<port>/courses/m0 | grep -c 'application/ld+json'`
  returns ≥ 1.

## Related Rules

- `ARCHITECTURE.md` — repo map, data flow, prerender split
- `.claude/rules/astro.md` — Astro conventions: props, prerender, head slot,
  Preline, icons, path aliases
- `.claude/rules/data-layer.md` — editing `src/data/*.ts`
- `.claude/rules/llm-surfaces.md` — `/llms.txt` + Course JSON-LD operational
  rules
- `docs/DESIGN.md` — **authoritative design system**: page contracts, color
  tokens, layout rhythm, typography, components, copy voice, banned patterns
- `.claude/rules/styling.md` — thin pointer to `docs/DESIGN.md`
- `.claude/rules/i18n-text.md` — Chinese quote handling and punctuation
