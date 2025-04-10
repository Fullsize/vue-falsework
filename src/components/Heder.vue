<script setup lang="ts">
import useAuthStore from "@/store/auth";
import { Button } from "ant-design-vue";
import { useRouter, useRoute } from "vue-router";
const auth = useAuthStore();
const router = useRouter();
const route = useRoute();
const noBack = ["/", "/login", "/forbidden"];
const logout = () => {
  auth.logout();
  localStorage.removeItem("token");
  localStorage.removeItem("role");
  router.push("/login");
};
</script>
<template>
  <div v-if="auth.state.token" class="header">
    <div v-if="noBack.includes(route.path)" @click="router.back"></div>
    <Button v-if="!noBack.includes(route.path)" @click="router.back"
      >返回</Button
    >
    <div>
      <span>用户:{{ auth.state.role }}</span>
      <Button @click="logout">登出</Button>
    </div>
  </div>
</template>
<style scoped>
.header {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
</style>
