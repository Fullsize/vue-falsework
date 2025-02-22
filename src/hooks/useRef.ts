import { ref } from 'vue';

const useRef = <T>(initialValue?: T) => {
  return ref<T | undefined>(initialValue);
};

export default useRef;
