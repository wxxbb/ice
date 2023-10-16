import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import "@/mock/index.js"
import 'element-plus/theme-chalk/index.css'
import App from './App.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import './assets/main.css'
import router from './router/router.js'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.use(ElementPlus).use(router).mount('#app')
