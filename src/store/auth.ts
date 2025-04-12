import { defineStore } from 'pinia'
import { reactive, computed } from 'vue';
const useAuthStore = defineStore('auth', () => {
  // 存储用户认证相关的状态
  const state = reactive({
    // 用户令牌
    token: '' as string,
    // 用户角色：'user'普通用户，'admin'管理员
    role: '' as 'user' | 'admin' | '',
  })

  // 判断用户是否已认证
  const isAuthenticated = computed(() => !!state.token)

  // 判断用户是否是管理员
  const isAdmin = computed(() => state.role === 'admin')

  // 用户登录，设置 token 和角色
  const login = (token: string, role: 'user' | 'admin') => {
    state.token = token
    state.role = role;
  }

  // 用户登出，清除认证信息
  const logout = () => {
    state.token = ''
    state.role = ''
  }

  // 从 localStorage 恢复用户认证状态
  const resstoreFromLocalstorage = () => {
    state.token = localStorage.getItem('token') as string;
    state.role = localStorage.getItem('role') as 'user' | 'admin' | ''
  }

  return {
    state,
    isAdmin,
    isAuthenticated,
    login,
    logout,
    resstoreFromLocalstorage
  }
})
export default useAuthStore