<script setup lang="ts">
interface Props {
  msg: string;
}
import { withDefaults, onMounted } from "vue";
import vueIcon from "@images/vue.svg";
import { Button, Input } from "ant-design-vue";
import request from "@/service/request";
import { useState } from "@/hooks";
import { useStore } from "vuex";
withDefaults(defineProps<Props>(), {
  msg: "hello vue ",
});
const store = useStore();
const [count, setCount] = useState(0);
const add = () => {
  setCount((prev) => prev + 1);
};
onMounted(() => {
  request.post("123", { a: 1 });
});
</script>

<template>
  <h1>{{ msg }}</h1>
  <img :src="vueIcon" alt="" />
  <div class="card">
    <Button type="primary" @click="add">count is {{ count }}</Button>
    <p>{{ store.state.base.title }}</p>
    <Input
      type="text"
      @change="(e) => store.commit('base/changeTitle', e.target.value)"
    />
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
    <RouterLink to="/test">Go to test</RouterLink>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
