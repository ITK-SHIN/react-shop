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
      // 모듈 별칭 지정
      'react-icons/fa6': 'react-icons/fa',
    },
  },
});
