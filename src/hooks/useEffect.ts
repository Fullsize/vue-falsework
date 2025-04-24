// useEffect.ts
import {
  watch,
  watchEffect,
  onMounted,
  onUpdated,
  onBeforeUnmount,
  isRef,
  isReactive,
  type WatchSource
} from 'vue'

type Dependency = WatchSource<unknown> | WatchSource<unknown>[] | undefined | null

export default function useEffect(
  effect: () => void | (() => void),
  deps?: Dependency
) {
  let cleanup: void | (() => void)

  const run = () => {
    if (cleanup) cleanup()
    const result = effect()
    if (typeof result === 'function') {
      cleanup = result
    }
  }

  // 空数组：只在 mounted 时运行一次
  if (Array.isArray(deps) && deps.length === 0) {
    onMounted(run)
    onBeforeUnmount(() => {
      if (cleanup) cleanup()
    })
    return
  }

  // 有依赖：监听依赖变化
  if (Array.isArray(deps) || isRef(deps) || isReactive(deps)) {
    const sources = Array.isArray(deps) ? deps : [deps]
    watch(sources, run, { immediate: true })
    onBeforeUnmount(() => {
      if (cleanup) cleanup()
    })
    return
  }

  // 未传依赖：模拟 React 每次渲染都运行（Vue 中只能每次 DOM 更新后）
  onMounted(run)
  onUpdated(run)
  onBeforeUnmount(() => {
    if (cleanup) cleanup()
  })
}
