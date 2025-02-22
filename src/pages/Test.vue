<script setup lang="ts">
  import {useSetState} from '@/hooks';
  import {Button} from 'ant-design-vue'
  const defaultValue={a:1,b:1}
  const [state,setState]=useSetState(defaultValue)

</script>
<template>
  <div>
    <h1>test</h1>
    <p>默认值为{{ defaultValue }}</p>
    <p>当前值为{{ state }}</p>
    <Button type="primary" @click="()=>{setState({a:state.a+1})}">点击a+1</Button>
    <Button type="primary" @click="()=>{setState({b:state.b+1})}">点击b+1</Button>
    <Button type="primary" @click="()=>{setState(defaultValue)}">重制</Button>
  </div>
</template>