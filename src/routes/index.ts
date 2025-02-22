import { createWebHistory, createRouter } from 'vue-router'
import base from './base'
const routes = [
  ...base,
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router