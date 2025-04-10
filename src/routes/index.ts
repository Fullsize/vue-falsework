import { createWebHashHistory, createRouter } from 'vue-router'
import base from './base'
import useAuthStore from '@/store/auth'
// import { Meta } from './base'
const routes = [
  ...base,
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
// 全局前置守卫
router.beforeEach((to, from) => {
  const auth = useAuthStore()
  if (!auth.state.token) {
    auth.resstoreFromLocalstorage()
  }
  const isLogin = to.meta.requiresAuth;
  const role: any = to.meta.requireRole
  if (isLogin && !auth.isAuthenticated) {
    return { path: '/login' }
  }
  if (role && !role.includes(auth.state.role)) {
    return { path: '/forbidden' }
  }


})
// 全局解析守卫
router.beforeResolve((to, from) => {
  // console.log('beforeResolve', to, from)
})
// 全局后置守卫
router.afterEach((to) => {
  console.log('跳转至', to.path)
})
export default router