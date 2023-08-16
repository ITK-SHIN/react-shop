import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vue from '@vitejs/plugin-vue';
import sass from 'sass';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vue(), sass()],
  build: {
    rollupOptions: {
      external: ['react-icons/fa6'],
    },
  },
  resolve: {
    alias: {
      '@': '/vercel/path0/src',
      '@styles': '/vercel/path0/src/styles',
    },
  },
});
