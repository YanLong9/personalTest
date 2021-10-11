import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
// 引入element日历组件
import { Calendar } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Calendar)

// 引入vue滚动条组件
import GeminiScrollbar from 'vue-gemini-scrollbar'
Vue.use(GeminiScrollbar)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
