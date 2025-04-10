<script setup lang="ts">
import Heder from "@/components/Heder.vue";
</script>
<template>
  <div class="main">
    <Heder />
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>
<style scoped>
.main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.content {
  width: 500px;
}
</style>
