# Content Data Layer

All marketing content lives in `src/data/*.ts`. There is no CMS, no
markdown content collection for course/track/partnership data, no remote
fetch. Architecture / data flow: see `ARCHITECTURE.md`.

## Files

| File | Owns |
|---|---|
| `src/data/modules.ts` | M0–M6 modules + L1/L2/L3 cells per module |
| `src/data/tracks.ts` | 3 goal-oriented course directions |
| `src/data/partnerships.ts` | 3 scenarios + 4 sales-form kits (3 × 4 IA) |
| `src/data/site.ts` | Closing CTAs, home outcomes, /about history + named person, contact FAQ and email |
| `src/data/ecosystem.ts` | Pioneer / Base programme pages and the home channel-partner band |
| `src/data/icons.ts` | Lucide icon registry (single source for `astro-icon`) |
| `src/data/index.ts` | Barrel re-export |

## Iteration patterns

```astro
---
import { modules, levels, levelMeta } from '../data/modules';
import { tracks, getTracksForModule } from '../data/tracks';
import { scenarios, partnershipForms } from '../data/partnerships';
---
```

## Editing rules

- **Module combination rule** — M0 is the entry course for beginners; M1–M6
  can each be run on their own. M0 is layered A/B/C by hardware platform
  (mapped onto the L1/L2/L3 cells). Tracks are 3 goal directions
  (`make-with-ai` M0, `build-ai-products` M2·M4·M6, `solutions` M1·M3·M5) —
  they group by goal, not a fixed `M0 → … → M6` sequence.
- **zh lives here and only here** — pages read zh-CN straight from these
  files. Do not repeat zh copy in `src/i18n/data-translations.ts`; its zh
  block is for interface strings with no data file behind them. Other
  locales are looked up by each item's stable `id`.
- **Changing a Chinese string in `modules.ts` or `ecosystem.ts`** changes
  its dictionary key: those two files are translated by exact source string.
  Add the new key to all four locale dictionaries (`module-{en,ja,es,pt}.ts`
  or `chip-translations.ts`) in the same commit, or that string silently
  falls back to Chinese in the other locales.
- **Every visitor-facing number or factual claim needs a source** — a
  comment next to it naming the source document, the public fact, or the
  date the owner confirmed it. No source, no claim.
- **No prices.** Use the action wording: 按班型与规模报价，邮件后 3 个工作日内
  给方案.
- **Bidirectional cross-references** — scenario `applicableForms` ↔ form
  `suitableScenarios` are mirrored. Keep them consistent when editing
  either side.
- **Don't reintroduce removed collections** — `courses` /
  `classic-courses` / `testimonials` content collections were retired with
  the matrix refactor. No Astro content collection remains; the placeholder
  `partners` collection was deleted (no real partner logos exist yet).
- **No inline forms** — partnership intake is a `mailto:` link on `/contact`.
  Don't add `<form>` elements or contact-form components.

## Side effects when editing

Edits to `modules.ts` / `tracks.ts` / `partnerships.ts` also propagate to:

- `/llms.txt` (auto-regenerated on `pnpm build`)
- Course JSON-LD on `/courses/m0..m6` `<head>` (SSR — rendered on demand,
  no `dist/client/courses/*` artifact)

See `.claude/rules/llm-surfaces.md` for the full mapping and the rule on
when to hand-edit the endpoint vs. let it auto-sync.

## Verification

```bash
pnpm check          # TypeScript validation
pnpm build          # confirms llms.txt regeneration (course pages are SSR)
```
