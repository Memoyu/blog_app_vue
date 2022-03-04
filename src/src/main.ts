import { createApp } from 'vue'
import 'element-plus/dist/index.css'
import App from '@/App.vue'
import router from '@/router/index'
import store from '@/store/index'

createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
