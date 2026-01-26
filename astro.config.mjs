import { defineConfig } from 'astro/config'
import cloudflare from '@astrojs/cloudflare'
import node from '@astrojs/node'
import { fileURLToPath } from 'node:url'

const useNodeAdapter = process.env.ADAPTER === 'node'

export default defineConfig({
  output: 'server',
  adapter: useNodeAdapter
    ? node({ mode: 'standalone' })
    : cloudflare(),
  vite: {
    resolve: {
      alias: {
        '~': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  },
})

