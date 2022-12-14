import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  base: '/fylo/',
  build: {
    // outDir: '../backend/public',
    // emptyOutDir: true,
    // chunkSizeWarningLimit: 2500,
    publicPath: process.env.NODE_ENV === 'production' ? '/fylo/' : '/',
  },
});

// function getImageUrl(name) {
//   return new URL(`./dir/${name}.png`, import.meta.url).href
// }
