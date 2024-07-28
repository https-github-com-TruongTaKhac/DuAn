import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 5173,
    open: true, // Tự động mở trình duyệt khi khởi động server
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
});
