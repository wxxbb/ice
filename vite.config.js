import { fileURLToPath, URL } from 'node:url'
import {viteMockServe} from 'vite-plugin-mock'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteMockServe({
      supportTs:false,
      logger:false,
      mockpath:"./mock/"
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server:{
    host:'0.0.0.0',
    proxy:{
      '/index':{
        target:'https://www.imooc.com',
        changeOrigin:true,
        //rewrite:(path)=>path.replace(/^\/data/,'')
      }
    }
  }
})
