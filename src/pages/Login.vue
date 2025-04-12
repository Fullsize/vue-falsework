<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Input, Button } from "ant-design-vue";
import { useRouter } from "vue-router";
import useAuthStore from "@/store/auth";
const username = ref("");
const password = ref("");
const route = useRouter();
const auth = useAuthStore();
onMounted(() => {
  username.value = "abc";
  password.value = "123";
});
const handleLogin = () => {
  const role = username.value === "abc123" ? "admin" : "user";
  auth.login(username.value + password.value, role);
  localStorage.setItem("token", username.value + password.value);
  localStorage.setItem("role", role);
  route.push("/");
};
</script>
<template>
  <div class="login">
    <div class="login-form">
      <h1>登录</h1>
      <p>当用户为 abc123 时，角色为 admin</p>
      <Input v-model:value="username" placeholder="用户名" />

      <Input v-model:value="password" type="password" placeholder="密码" />
      <Button type="primary" @click="handleLogin">登录</Button>
    </div>
  </div>
</template>
