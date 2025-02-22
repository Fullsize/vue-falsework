import { createMemoryHistory, createRouter } from 'vue-router'
import base from './base'
const routes = [
  ...base,
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
export default router