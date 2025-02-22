import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import path from 'path';
import image from '@rollup/plugin-image'
// https://vite.dev/config/
export default defineConfig({
  base: './',
  server: {
    port: 3000,
    hmr: {
      overlay: false,
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // 设置 @ 别名为 src 目录的绝对路径
      '@images': path.resolve(__dirname, 'src/assets/images')
    }
  },
  plugins: [vue(), image(), legacy({
    targets: ['defaults', 'not IE 11'],
  }),],
})
