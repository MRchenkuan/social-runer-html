import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue'
import App from './App.vue'
import Icon from '@arco-design/web-vue/es/icon'
import router from './router'
import '@arco-design/web-vue/dist/arco.css'
import './styles/global.less'

const app = createApp(App)

app.use(ArcoVue)
app.use(Icon)
app.use(router)
app.mount('#app') 