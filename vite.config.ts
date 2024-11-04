import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "node:path";
import postcss from 'postcss-pxtorem'
// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  server:{
    hmr: true
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  css: {
    postcss: {
      plugins: [
        postcss({ // 把px单位换算成rem单位
          rootValue: 16, 
          propList: ['*'], //属性的选择器，*表示通用
          unitPrecision: 5, // 允许REM单位增长到的十进制数字,小数点后保留的位数。
          exclude: /(node_module)/,  // 默认false，可以（reg）利用正则表达
          //式 排除某些文件夹的方法
            })
          ]
        }
  }
})
