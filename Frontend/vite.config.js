import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/image/convert': `http://localhost:5000`,
      '/audio/convert': 'http://localhost:5000',
      '/video/convert': 'http://localhost:5000',
     
      
    },
  },
});
