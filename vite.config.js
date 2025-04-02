import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://order-app-backend-three.vercel.app',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
        // Configure CORS headers properly
        headers: {
          //'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Origin': "https://frontend25-steel.vercel.app";
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
          'Access-Control-Allow-Credentials': 'true'
        }
      }
    },
    // Enable CORS for dev server
    cors: {
      origin: 'http://localhost:5173',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: true
    }
  },
  // Build configuration
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: process.env.NODE_ENV !== 'production'
  },
  // Base path configuration
  base: process.env.NODE_ENV === 'production' 
    ? 'https://frontend25-my0qy0ogo-binhdinh26051985s-projects.vercel.app'  // Change this to your production base path if needed
    : '/',
  // Environment variables
  define: {
    'process.env': process.env
  }
});
