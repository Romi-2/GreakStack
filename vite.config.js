import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
console.log(import.meta.env.VITE_APP_ENV); // This should log 'development' or 'production'

export default defineConfig({
  plugins: [react()],
  base: import.meta.env.VITE_APP_ENV === 'production' ? '/GreakStack/' : '/', // Use import.meta.env
});
