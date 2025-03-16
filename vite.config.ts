import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [vue()],
  base: '/SharkFilm.Studio/',  // <-- This tells Vite where your site will be hosted
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
