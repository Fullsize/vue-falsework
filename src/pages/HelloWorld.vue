<script setup lang="ts">
interface Props{
  msg:string
}
import { ref,withDefaults,onMounted} from 'vue'
import vueIcon from '@images/vue.svg';
import {Button} from 'ant-design-vue';
import request from '@/service/request'
 withDefaults(defineProps<Props>(), {
  msg: 'hello vue '
})

const count = ref(0)
onMounted(()=>{
  request.post('123',{a:1})
})
</script>

<template>
  <h1>{{ msg }}</h1>
  <img :src='vueIcon' alt="">
  <div class="card">
    <Button type="primary" @click="count++">count is {{ count }}</Button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

 
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
