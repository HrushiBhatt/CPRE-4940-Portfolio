import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Relative asset paths, so the built site works from GitHub Pages' /CPRE-4940-Portfolio/ subfolder.
  base: './',
  test: {
    environment: 'jsdom',
  },
});
