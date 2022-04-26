import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import "./globalStyle/index.scss"


import { createRouter, createWebHashHistory } from 'vue-router'


import routes from './router/index'
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})


const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.mount('#app')