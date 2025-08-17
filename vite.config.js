import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Replace 'portfolio-1' with your GitHub repo name
export default defineConfig({
  base: '/portfolio-1/',
  plugins: [react()],
});
