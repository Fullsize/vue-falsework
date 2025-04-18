import { createApp } from 'vue'
import 'ant-design-vue/dist/reset.css';
import './style.css'
import Layout from '@/layout/index.vue'
import router from './routes'
// import store from './store';
import { createPinia } from 'pinia'
const pinia = createPinia()
createApp(Layout).use(router).use(pinia).mount('#app')
