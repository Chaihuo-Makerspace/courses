// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [
    icon({
      include: {
        lucide: ['menu', 'x', 'map-pin', 'rotate-cw', 'book-open', 'wrench', 'move-right', 'check', 'quote', 'chevron-down', 'chevron-up']
      }
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});