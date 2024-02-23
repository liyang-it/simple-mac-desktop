import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// layui组件库，http://www.layui-vue.com/zh-CN/guide/getStarted
import Layui from '@layui/layui-vue'
import '@layui/layui-vue/lib/index.css'
const app = createApp(App)

app.use(router)
app.use(Layui)
app.mount('#app')
