/**
 * 配色主题 —— 单一事实源。
 *
 * 这个对象同时被消费于：
 *   1. `Layout.astro` —— 把每个主题输出成 `[data-theme="<id>"] { --c-*: … }`；
 *   2. `src/styles/themes/theme.css` 的 `@theme inline` —— 把 `--c-*` 映射成
 *      Tailwind 工具类（`bg-primary` / `text-foreground` …）；
 *   3. `/styleguide` —— 色卡直接读这里。
 *
 * 组件只写角色名（primary / accent / inverse …），不写色相名（red / yellow /
 * black）。换色调 = 改这里的值或改 `defaultThemeId`，组件不用动。
 * 角色定义。
 */

export const themeTokens = [
  // 面
  'background',
  'foreground',
  'inverse',
  'inverse-foreground',
  // 主色：行动（按钮填充、其上文字、hover、亮面上的主色文字）
  'primary',
  'primary-foreground',
  'primary-hover',
  'primary-ink',
  // 强调色：高亮填充；反转面上的强调文字
  'accent',
  'accent-foreground',
  'accent-ink',
  'accent-soft',
  // 最强强调（L3 徽章）与 M1–M6 模块牌
  'strong',
  'strong-foreground',
  'module',
  'module-foreground',
  // L1 / L2 / L3 学习深度色阶
  'level-1',
  'level-2',
  'level-3',
  // 焦点环
  'ring',
  // 结构灰阶：1 最浅、10 最深
  'neutral-1',
  'neutral-2',
  'neutral-3',
  'neutral-4',
  'neutral-5',
  'neutral-6',
  'neutral-7',
  'neutral-8',
  'neutral-9',
  'neutral-10',
] as const;

export type ThemeToken = (typeof themeTokens)[number];

export interface Theme {
  label: string;
  description: string;
  colors: Record<ThemeToken, string>;
}

export const themes = {
  /** 对齐 mcv.chaihuo.org：柴火黄承载行动，中性灰承载结构，近黑反转面 */
  mcv: {
    label: 'MCV',
    description: '柴火黄主色 · 白底 · 中性灰结构 · 近黑反转面（对齐 mcv.chaihuo.org）',
    colors: {
      background: '#ffffff',
      foreground: '#333333',
      inverse: '#1a1a1a',
      'inverse-foreground': '#ffffff',
      primary: '#f3d230',
      'primary-foreground': '#333333',
      'primary-hover': '#e6c22c',
      'primary-ink': '#806600',
      accent: '#f3d230',
      'accent-foreground': '#333333',
      'accent-ink': '#66520b',
      'accent-soft': '#fef9e7',
      strong: '#1a1a1a',
      'strong-foreground': '#f3d230',
      module: '#333333',
      'module-foreground': '#f3d230',
      'level-1': '#fef9e7',
      'level-2': '#fdefab',
      'level-3': '#f9df63',
      ring: '#1a1a1a',
      'neutral-1': '#fafafa',
      'neutral-2': '#f5f5f5',
      'neutral-3': '#e5e5e5',
      'neutral-4': '#d1d5db',
      'neutral-5': '#a3a3a3',
      'neutral-6': '#737373',
      'neutral-7': '#666666',
      'neutral-8': '#555555',
      'neutral-9': '#444444',
      'neutral-10': '#333333',
    },
  },
  /** K1 青绿：青色承载结构，红色承载行动，黄色标记学习深度 */
  k1: {
    label: 'K1 青绿',
    description: '红色主色 · 白底 · 青色结构 · 深青反转面',
    colors: {
      background: '#ffffff',
      foreground: '#001d20',
      inverse: '#004046',
      'inverse-foreground': '#ffffff',
      primary: '#c7353a',
      'primary-foreground': '#ffffff',
      'primary-hover': '#ad2c31',
      'primary-ink': '#c7353a',
      accent: '#f3d230',
      'accent-foreground': '#001d20',
      'accent-ink': '#66520b',
      'accent-soft': '#fffae6',
      strong: '#c7353a',
      'strong-foreground': '#ffffff',
      module: '#015259',
      'module-foreground': '#f3d230',
      'level-1': '#fffae6',
      'level-2': '#fdefab',
      'level-3': '#f9df63',
      ring: '#c7353a',
      'neutral-1': '#e8f7f9',
      'neutral-2': '#dbf0f2',
      'neutral-3': '#cae4e7',
      'neutral-4': '#adcfd2',
      'neutral-5': '#84adb2',
      'neutral-6': '#3a6c72',
      'neutral-7': '#2e6167',
      'neutral-8': '#16454a',
      'neutral-9': '#042f33',
      'neutral-10': '#001d20',
    },
  },
} as const satisfies Record<string, Theme>;

export type ThemeId = keyof typeof themes;

export const themeIds = Object.keys(themes) as ThemeId[];

/** 全站默认主题 —— 换色调只改这一行。 */
export const defaultThemeId: ThemeId = 'mcv';

/** 所有主题的 CSS 变量声明，由 Layout 注入 `<head>`。 */
export function buildThemeCss(): string {
  return themeIds
    .map((id) => {
      const theme: Theme = themes[id];
      const vars = themeTokens.map((token) => `--c-${token}:${theme.colors[token]}`);
      const selector =
        id === defaultThemeId ? `:root,[data-theme="${id}"]` : `[data-theme="${id}"]`;
      return `${selector}{${vars.join(';')}}`;
    })
    .join('\n');
}
