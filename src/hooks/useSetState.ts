import { reactive } from 'vue';
const useSetState = <T>(initialState: T) => {
  const state = reactive<T>({ ...initialState });

  const updateState = (newState: Partial<T> | ((prevState: T) => Partial<T>)) => {
    const oldState: any = { ...state }
    const nextState = typeof newState === 'function' ? newState(oldState) : newState;
    Object.assign(state, nextState);
  };

  return [state, updateState] as const;
};

export default useSetState;
