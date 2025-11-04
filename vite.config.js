import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve('src'), // Resolve `@` to the `src` folder
    },
  },
  plugins: [react()],
  base: '/Data_Visual_Presentation/',
})
