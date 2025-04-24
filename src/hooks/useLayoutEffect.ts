// useLayoutEffect.ts
import {
  nextTick,
  onMounted,
  onUpdated,
  onBeforeUnmount,
  watch,
  isRef,
  isReactive,
  type WatchSource
} from 'vue'

type Dependency = WatchSource<unknown> | WatchSource<unknown>[] | undefined | null

export default function useLayoutEffect(
  effect: () => void | (() => void),
  deps?: Dependency
) {
  let cleanup: void | (() => void)

  const run = () => {
    if (cleanup) cleanup()
    nextTick(() => {
      const result = effect()
      if (typeof result === 'function') {
        cleanup = result
      }
    })
  }

  // 空依赖：只在挂载阶段执行一次
  if (Array.isArray(deps) && deps.length === 0) {
    onMounted(run)
    onBeforeUnmount(() => cleanup?.())
    return
  }

  // 依赖项变化触发
  if (Array.isArray(deps) || isRef(deps) || isReactive(deps)) {
    const sources = Array.isArray(deps) ? deps : [deps]
    watch(sources, run, { immediate: true })
    onBeforeUnmount(() => cleanup?.())
    return
  }

  // 未传依赖：每次渲染（mounted + updated）都执行
  onMounted(run)
  onUpdated(run)
  onBeforeUnmount(() => cleanup?.())
}
