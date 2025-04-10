<script setup lang="ts">
interface Props {
  msg: string;
}
import { withDefaults, onMounted } from "vue";
import vueIcon from "@images/vue.svg";
import { Button, Input } from "ant-design-vue";
import request from "@/service/request";
import { useState } from "@/hooks";
import useHomeStore from "@/store/home";
withDefaults(defineProps<Props>(), {
  msg: "hello vue ",
});
const [count, setCount] = useState(0);
const state = useHomeStore();
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
    <p>{{ state.title }}</p>
    <Input type="text" @change="(e) => state.changeTitle(e.target.value)" />
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
    <p>
      <RouterLink to="/test">Go to test</RouterLink>
    </p>
    <p><RouterLink to="/admin">Go to admin</RouterLink></p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
