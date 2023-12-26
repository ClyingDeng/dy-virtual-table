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
    lib: {
      entry: 'src/packages/index.ts',
      name: 'DyVirtualTable'
    },
    rollupOptions: {
      // input: {
      //   // main: 'dist/dy-virtual-table.umd.js', // 这是你的主入口文件，可以根据实际情况修改
      //   main: 'src/packages/index.ts' // 这是你想要打包的文件夹
      // },

      // Make sure to externalize dependencies
      external: ['vue'],
      output: {
        format: 'es',
        // Provide global variables to use in the UMD build
        globals: {
          vue: 'Vue'
        }
      }
    },
    cssTarget: 'chrome61'
  },
  plugins: [vue(), eslintPlugin(), vueSetupExtend()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
