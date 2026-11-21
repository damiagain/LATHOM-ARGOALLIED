import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const root = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        "about": resolve(root, 'pages/about/index.html'),
        "home": resolve(root, 'pages/home/index.html'),
        "landing": resolve(root, 'pages/landing/index.html'),
        "lathom-website": resolve(root, 'pages/lathom-website/index.html'),
        "service-page": resolve(root, 'pages/service-page/index.html'),
        "services": resolve(root, 'pages/services/index.html'),
        "sub-page": resolve(root, 'pages/sub-page/index.html'),
      },
    },
  },
})
