import { reactive, type Reactive } from 'vue';
const useSetState = <T>(initialState: T) => {
  const state = reactive<T>({ ...initialState });

  const updateState = (newState: Partial<T> | ((prevState: Reactive<T>) => Partial<T>)) => {
    const nextState = typeof newState === 'function' ? newState(state) : newState;
    Object.assign(state, nextState);
  };

  return [state, updateState] as const;
};

export default useSetState;
