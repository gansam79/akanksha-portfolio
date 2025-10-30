import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173
  },
  build: {
    outDir: 'dist',
  },
  // For GitHub Pages (project site) the base should be the repo name.
  // Example: if repository is `gansam79/akanksha-portfolio` the base is '/akanksha-portfolio/'.
  base: '/akanksha-portfolio/',
})
