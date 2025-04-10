<script setup lang="ts">
import { ref } from "vue";
function useRefCost(initial: any) {
  return new Proxy({ value: initial }, {});
}
const a = ref(1);
</script>
<template>
  <div>{{ a }}</div>
  <button @click="a++">添加</button>
</template>
<style></style>
