import { defineStore } from 'pinia'
import { reactive, computed } from 'vue';
const useAuthStore = defineStore('auth', () => {
  const state = reactive({
    token: '' as string,
    role: '' as 'user' | 'admin' | '',
  })
  const isAuthenticated = computed(() => !!state.token)
  const isAdmin = computed(() => state.role === 'admin')
  const login = (token: string, role: 'user' | 'admin') => {
    state.token = token
    state.role = role;
  }
  const logout = () => {
    state.token = ''
    state.role = ''
  }
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