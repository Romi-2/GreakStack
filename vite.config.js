import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Default to 'development' if VITE_APP_ENV is not defined
const env = process.env.VITE_APP_ENV || 'development';
console.log('Environment:', env);

export default defineConfig({
  plugins: [react()],
  base: env === 'production' ? '/GreakStack/' : '/',
});
