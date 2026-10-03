// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import node from '@astrojs/node'
import tailwindcss from '@tailwindcss/vite';
import { LUCIDE_ICONS } from './src/data/icons';

// https://astro.build/config
export default defineConfig({
  // Production URL — used for canonical links + absolute OG/Twitter image URLs.
  // Update to the real deployed domain before going live.
  site: 'https://opc.chaihuo.org',
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  integrations: [
    icon({
      include: {
        lucide: [...LUCIDE_ICONS]
      }
    })
  ],
  vite: {
    plugins: [tailwindcss()],
    // 启动时就预打包 preline：否则 dev 首次打开页面时 Vite 才发现它并重新优化依赖，
    // Layout 的模块脚本拿到 504，scroll-reveal 不执行，整页停在 opacity: 0。
    optimizeDeps: {
      include: ['preline/preline'],
    },
    build: {
      sourcemap: false
    }
  },
  server: {
    port: 3001,
    host: true
  }
});
