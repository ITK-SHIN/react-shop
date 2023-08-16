import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
