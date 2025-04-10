import { defineStore } from 'pinia';
import { ref } from 'vue'
const useHomeStore = defineStore('home', () => {
  const title = ref('')
  const changeTitle = (value: string | undefined) => {
    title.value = value || ''
  }
  return {
    title, changeTitle
  }
})
export default useHomeStore