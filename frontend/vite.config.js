import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Vite configuration
export default defineConfig({
  plugins: [react()], // Use the React plugin
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'), // Alias for Bootstrap
      '@': path.resolve(__dirname, 'src') // Alias for src directory
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "~bootstrap/scss/bootstrap";' // Import Bootstrap SCSS
      }
    }
  },
  build: {
    rollupOptions: {
      external: ['~bootstrap/dist/css/bootstrap.min.css' , ] // Treat Bootstrap CSS as external

    }
  }
});