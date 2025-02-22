import { ref, type Ref } from 'vue';

const useState = <T>(initialState: T) => {
  const state = ref<T>(initialState);

  const updateState = (newState: T | ((prevState: T) => T)) => {
    state.value = typeof newState === 'function' ? (newState as Function)(state.value) : newState;
  };

  return [state, updateState] as [Ref<T>, typeof updateState];
};

export default useState;
