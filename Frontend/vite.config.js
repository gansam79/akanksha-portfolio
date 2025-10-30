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
  // When deploying to GitHub Pages as a project page, set the base to the repo name
  // so assets and router paths resolve correctly. Change this if your repo name
  // changes.
  base: '/akanksha-portfolio/',
})
