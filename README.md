# SharkFilm.Studio Deployment Guide

This guide outlines the steps and Git commands needed to build the project and deploy it to the `gh-pages` branch on GitHub. Use these instructions whenever you update your site.

## Prerequisites

- **Node.js** and **npm** are installed.
- Your project is using **Vite** and **Vue 3** with TypeScript.
- `vite.config.ts` is configured with the correct base URL:
  ```ts
  export default defineConfig({
    plugins: [vue()],
    base: '/SharkFilm.Studio/',  // Adjust as needed for GitHub Pages
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  })
