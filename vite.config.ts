import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [vue()],
  base: '/SharkFilm.Studio/',  // This tells Vite to prefix all asset paths accordingly
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
