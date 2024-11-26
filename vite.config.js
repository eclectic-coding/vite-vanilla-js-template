import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  publicDir: true,
  root: './',
  build: {
    outDir: 'dist'
  },
  plugins: [
    eslint({
      cache: false,
      fix: true
    })
  ]
});
