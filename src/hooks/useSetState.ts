import { reactive, type Reactive } from 'vue';
/**
 * 自定义 Hook 用于处理组件状态更新
 * 类似于 React 的 useState，但基于 Reactive programming
 * 
 * @param initialState 初始状态对象，用于创建一个响应式状态副本
 * @returns 返回一个包含当前状态和更新状态函数的数组
 */
const useSetState = <T>(initialState: T) => {
  const state = reactive<T>({ ...initialState });

  const updateState = (newState: Partial<T> | ((prevState: Reactive<T>) => Partial<T>)) => {
    const nextState = typeof newState === 'function' ? newState(state) : newState;
    Object.assign(state, nextState);
  };

  return [state, updateState] as const;
};

export default useSetState;
