import { createApp } from 'vue'
import 'ant-design-vue/dist/reset.css';
import './style.css'
import Layout from '@/layout/index.vue'
import router from './routes'
createApp(Layout).use(router).mount('#app')
