// useIsomorphicLayoutEffect.ts
import useEffect from './useEffect'
import useLayoutEffect from './useLayoutEffect'

// 检测是否是浏览器环境
const isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined'

export const useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect
