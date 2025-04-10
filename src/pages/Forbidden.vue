<script setup></script>
<template>
  <div class="forbidden">
    <h1>权限不足</h1>
    <p>抱歉，您没有权限访问此页面。</p>
    <RouterLink to="/">返回首页</RouterLink>
  </div>
</template>

<style scoped>
.forbidden {
  text-align: center;
  padding: 50px;
}

h1 {
  color: #f44336;
  font-size: 36px;
}

p {
  font-size: 18px;
  margin: 20px 0;
}

a {
  text-decoration: none;
  color: #2196f3;
  font-size: 16px;
}
</style>
