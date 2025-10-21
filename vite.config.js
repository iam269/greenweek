import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  base: '/greenweek/', // numele repo-ului tău GitHub
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src') // pentru importuri cu @
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
})
