import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import eslintPlugin from 'vite-plugin-eslint'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
// const prettier = require('prettier')
const resolve = (p) => path.resolve(__dirname, p)

// https://vitejs.dev/config/
export default defineConfig({
  server: {
  port: 8086,
  host: '0.0.0.0'
},
build: {
  cssTarget: 'chrome61'
},
  plugins: [vue(),    eslintPlugin(),
    vueSetupExtend(),],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
