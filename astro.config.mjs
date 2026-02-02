// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import node from '@astrojs/node'
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  integrations: [
    icon({
      include: {
        lucide: ['menu', 'x', 'map-pin', 'rotate-cw', 'book-open', 'wrench', 'move-right', 'check', 'quote', 'chevron-down', 'chevron-up']
      }
    })
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      sourcemap: false
    }
  },
  server: {
    port: 3001,
    host: true
  }
});
