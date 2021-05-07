import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';
import 'animate.min.css';
import 'ant-design-vue/dist/antd.css';
import '@/assets/styles/_common.scss';
import '@/assets/styles/_utils.scss';


const app = createApp(App)
app.use(Antd)
app.use(store)
app.use(router)
app.mount('#app')
