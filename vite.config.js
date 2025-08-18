import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolio-1/', // EXACT GitHub repo name
  plugins: [react()],
});
