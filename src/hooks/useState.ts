import { ref, type Ref } from 'vue';
/**
 * 实现一个自定义的 useState 函数
 * 该函数用于在函数组件中使用状态管理，提供了一种在不编写类的情况下处理可变状态的方法
 * 
 * @param initialState 初始化状态，可以是任意类型
 * @returns 返回一个状态对象和一个更新状态的函数
 */
const useState = <T>(initialState: T) => {
  const state = ref<T>(initialState);

  const updateState = (newState: T | ((prevState: T) => T)) => {
    state.value = typeof newState === 'function' ? (newState as Function)(state.value) : newState;
  };

  return [state, updateState] as [Ref<T>, typeof updateState];
};

export default useState;
