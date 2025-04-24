import { reactive } from 'vue'

export default function useSetState<T extends object>(initialState: T) {
  const state = reactive({ ...initialState })

  function setState(partialState: Partial<T> | ((prevState: T) => Partial<T>)) {
    const updates = typeof partialState === 'function'
      ? partialState(state as T)
      : partialState

    Object.assign(state, updates)
  }

  return [state as T, setState] as const
}
