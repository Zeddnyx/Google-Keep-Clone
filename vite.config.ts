import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path" // npm i @types/node

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
      pages: path.resolve(__dirname, 'src/pages'),
      assets: path.resolve(__dirname, 'src/assets'),
      components: path.resolve(__dirname, 'src/components'),
      routes: path.resolve(__dirname, 'src/routes'),
      hooks: path.resolve(__dirname, 'src/hooks'),
      utils: path.resolve(__dirname, 'src/utils'),
    },
  },
})
