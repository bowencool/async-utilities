import { defineConfig } from 'vite';
// import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
// import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      // '@element-pp': resolve(__dirname, '../packages'),
      // path: 'path-browserify',
    },
  },
  plugins: [
    vueJsx(),
  ],
  server: {
    port: 8765,
    fs: {
      strict: false,
      // 可以为项目根目录的上一级提供服务
      allow: ['..'],
    },
  },
  // build: {
  //   outDir: 'website-dist',
  // },
});