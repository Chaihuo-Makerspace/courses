# Styling

视觉相关的改动先读 [`docs/DESIGN.md`](../../docs/DESIGN.md)：站点定位、设计范式、
颜色角色、字体事实、文案声音、硬约束。

- 颜色只改 `src/data/themes.ts`；组件里写角色名（`bg-primary`、`text-foreground`）。
- 其余 token（圆角、阴影、动效、字体）与组件类在 `src/styles/themes/theme.css`。
- 现成的 token 与组件类：`pnpm dev` 后打开 `/styleguide`。
