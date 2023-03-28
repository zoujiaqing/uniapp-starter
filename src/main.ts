import { createSSRApp } from 'vue'
// 生命周期
import App from '@/App.vue'
// pinia状态管理
import pinia from '@/stores/index'

export function createApp() {
  const app = createSSRApp(App)
  app.use(pinia)
  return {
    app,
  }
}
