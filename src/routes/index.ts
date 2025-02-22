import { createWebHashHistory, createRouter } from 'vue-router'
import base from './base'
const routes = [
  ...base,
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
export default router