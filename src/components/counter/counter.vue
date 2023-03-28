<template>
  <view>
    <text class="title">{{ count }}</text>
    <view class="button" @tap="onAdd">ADD</view>
  </view>
</template>

<script setup lang="ts">
import pinia from '@/stores/index' // createPinia()
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

const counter = useCounterStore(pinia)
// 用 storeToRefs 双向后再解构出 count
let { count } = storeToRefs(counter) // 此时count为响应式的
const onAdd = (): void => {
  // counter.count++
  count.value++
  // with autocompletion ✨
  // counter.$patch({count: counter.count + 1})

  // or using an action instead
  // counter.increment()
}
</script>

<style>
.title {
  font-size: 32px;
}
.button {
  border: 1px solid lightgray;
  padding: 5px 10px;
}
</style>
