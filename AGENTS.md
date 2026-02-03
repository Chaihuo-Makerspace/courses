# AGENTS.md - AI Collaboration Guide

Guidelines for AI agents working on the 柴火创客 OPC 学院 (Chaihuo OPC Academy) course website.

## Project Overview

Chinese-language educational platform built with Astro 5.x, Tailwind CSS v4, and Preline UI. Part of the Chaihuo Maker ecosystem backed by Seeed Studio.

**Core Narrative**: "We cultivate people's ability to integrate new technologies" - not "We provide solutions".

## Build Commands

```bash
# Install dependencies
pnpm install

# Development
pnpm dev                 # Start dev server on port 3001

# Production
pnpm build               # Build for production (server output)
pnpm preview             # Preview production build on port 3001
pnpm start               # Start production server (HOST=0.0.0.0 PORT=3001)

# Type checking
pnpm check               # Run astro check for TypeScript validation
```

**Note**: No test runner, linter, or formatter is currently configured. Type checking via `pnpm check` is the primary validation.

## Tech Stack

- **Framework**: Astro 5.x (server output mode with @astrojs/node adapter)
- **Styling**: Tailwind CSS v4 with @tailwindcss/vite plugin
- **UI Components**: Preline UI v4 (interactive components like collapse/accordion)
- **Icons**: astro-icon with lucide icon set
- **Fonts**: Noto Sans SC (Chinese), loaded via Google Fonts
- **TypeScript**: Strict mode enabled

## Project Structure

```
src/
├── components/          # Reusable Astro components
│   ├── Navbar.astro
│   ├── Footer.astro
│   └── ui/             # UI primitives (HeroBackground, Card)
├── layouts/            # Page layouts
│   └── Layout.astro    # Main layout with Preline init
├── pages/              # File-based routing
│   ├── index.astro     # Homepage
│   ├── about.astro     # About page
│   ├── contact.astro   # Contact/consultation
│   └── courses/        # Course pages
│       ├── index.astro
│       └── [slug].astro
├── data/               # TypeScript data files
│   └── courses.ts      # Course type definitions
├── content/            # Astro content collections
│   ├── config.ts       # Collection schemas (zod)
│   ├── courses/        # Course data (YAML/JSON)
│   ├── classic-courses/
│   ├── partners/
│   └── testimonials/
└── styles/
    ├── global.css      # Tailwind + Preline imports
    └── themes/
        └── theme.css   # Brand colors and utilities
```

## Code Style Guidelines

### Imports

- Use path aliases defined in tsconfig.json:
  - `~/components/*` → `src/components/*`
  - `~/layouts/*` → `src/layouts/*`
  - `~/data/*` → `src/data/*`
  - `~/styles/*` → `src/styles/*`
- Group imports: Astro built-ins → third-party → local aliases → relative
- Use single quotes for string literals

### TypeScript

- Strict mode enabled (extends `astro/tsconfigs/strict`)
- Define interfaces for component props in the frontmatter script
- Use explicit return types for helper functions
- Prefer `interface` over `type` for object shapes

### Astro Components

- Use `class:list` directive for conditional classes
- Use `aria-current` for active navigation states
- Always include `aria-label` and `aria-expanded` for interactive elements
- Use Preline's `hs-*` prefixed classes and `data-hs-*` attributes

### Naming Conventions

- **Files**: PascalCase for components (`.astro`), camelCase for utilities (`.ts`)
- **Components**: PascalCase (e.g., `Navbar.astro`)
- **Variables**: camelCase for JS/TS, kebab-case for CSS classes
- **Types/Interfaces**: PascalCase with descriptive names
- **CSS Classes**: kebab-case, use brand color utilities

### Chinese Text Handling

- **CRITICAL**: Strings containing Chinese quotation marks ("") must use template literals or proper escaping
- Example: `` `获得柴火官方认证证书，并进入"柴火人才库"` ``
- Always use Chinese punctuation for Chinese content

### Brand Colors (CSS Variables)

| Color | Variable | Hex |
|-------|----------|-----|
| Red | `--color-brand-red` | #d84144 |
| Yellow | `--color-brand-yellow` | #f3d230 |
| Black | `--color-brand-black` | #1a1a1a |
| White | `--color-brand-white` | #ffffff |

**Color Ratio**: White 70% / Yellow 15% / Black 10% / Red 5%

Use utility classes: `.bg-brand-red`, `.text-brand-yellow`, `.border-brand-red`

### Preline UI Integration

Preline is initialized in `src/layouts/Layout.astro`:

```javascript
import 'preline/preline';
document.addEventListener('astro:page-load', () => {
  if (window.HSStaticMethods) {
    window.HSStaticMethods.autoInit();
  }
});
```

- Use `hs-collapse-toggle` for collapsible elements
- Use `data-hs-collapse` to target collapse elements
- Preline classes: `hs-collapse`, `hs-collapse-open`, `hs-collapse-toggle`

### Content Collections

Collections defined in `src/content/config.ts`:
- `courses` - Main course data
- `classic-courses` - Legacy courses
- `testimonials` - Student quotes
- `partners` - Partner organizations

Use `getCollection()` from `astro:content` to fetch data.

### Error Handling

- No explicit error handling framework in place
- Use TypeScript strict mode to catch errors at build time
- Validate content collection schemas via Zod in `src/content/config.ts`

## Common Patterns

### Component Props Interface

```astro
---
interface Props {
  title: string;
  description?: string;
}

const { title, description = "Default value" } = Astro.props;
---
```

### Conditional Classes

```astro
<a class:list={[
  "base-classes",
  isActive ? "active-classes" : "inactive-classes"
]}>
```

### Content Collection Query

```astro
---
import { getCollection } from "astro:content";
const courses = await getCollection("courses");
---
```

## Gotchas

1. **Chinese quotes in strings**: Always use template literals
2. **Preline initialization**: Requires `astro:page-load` event for view transitions
3. **Course order**: M01 → M02 must be sequential; M03/M04/M05 are independent
4. **Path aliases**: Must match tsconfig.json exactly
5. **No tests/linter**: Use `pnpm check` for validation
