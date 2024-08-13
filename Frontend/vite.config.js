import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const backendUrl = process.env.VITE_BACKEND_BASE_URL || 'http://localhost:5000';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/image/convert': backendUrl,
      '/audio/convert': backendUrl,
      '/video/convert': backendUrl,
    },
  },
});
