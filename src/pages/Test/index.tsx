import { defineComponent } from "vue";
import { Button } from "ant-design-vue";
import { useSetState } from "@/hooks";
import styles from "./index.module.css";
export default defineComponent({
  setup() {
    const defaultValue = { a: 1, b: 1 };
    const [state, setState] = useSetState(defaultValue);
    return () => (
      <>
        <h1>test</h1>
        <p>默认值为{defaultValue.a}</p>
        <p>当前值为{state.a}</p>
        <Button onClick={() => setState({ a: state.a + 1 })}>增加</Button>
        <Button
          class={styles["red"]}
          onClick={() => setState({ a: state.a - 1 })}
        >
          减少
        </Button>
      </>
    );
  },
});
