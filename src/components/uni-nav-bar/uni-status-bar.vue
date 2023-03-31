<script setup lang="ts">
/**
 * 导入 start
 * 顺序：1、依赖库 2. 请求 3. 常量 4.组件 5. ts申明
 */
import { ref, onMounted } from 'vue'

const statusBarHeight = ref<string>('20px')

onMounted(() => {
  statusBarHeight.value = `${uni.getSystemInfoSync().statusBarHeight || 0}px`
})
</script>

<template>
  <view :style="{ height: statusBarHeight }" class="uni-status-bar">
    <slot />
  </view>
</template>

<style lang="scss">
.uni-status-bar {
  // width: 750rpx;
  height: 20px;
  // height: var(--status-bar-height);
}
</style>
