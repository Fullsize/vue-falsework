// useEffectOnce.ts
import { onMounted, onBeforeUnmount } from 'vue'

export default function useEffectOnce(effect: () => void | (() => void)) {
  let cleanup: void | (() => void)

  // 仅在挂载时执行一次
  onMounted(() => {
    cleanup = effect()

    // 清理函数
    if (typeof cleanup === 'function') {
      onBeforeUnmount(() => {
        cleanup?.()
      })
    }
  })
}
