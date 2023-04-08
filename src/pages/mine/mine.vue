<script setup lang="ts">
/**
 * 导入 start
 * 顺序：1.依赖库		2.请求	3.常量 	4.组件 5. ts申明
 */
import { ref } from 'vue'
import { fetchUserInfo } from '@/api/user'

import pinia from '@/stores/index' // == createPinia()
import { useGolbalSysInfoStore } from '@/stores/golbalSysInfo'

import { userInfoType } from '@/api/user.d'

/**
 * 变量 start
 */
const title = ref<string>('Hello')
// const statusBarHeight = ref<number>(20)
const golbalSysInfo = useGolbalSysInfoStore(pinia)
console.log('customGlobalData------', golbalSysInfo.sysInfo)

/**
 * 函数 start
 */

/**
 * 调用 start
 */
fetchUserInfo()
  .then((r: userInfoType) => {
    console.log('r', r)
  })
  .catch((err: any) => console.log(err))
</script>

<template>
  <!-- 自定义导航 -->
  <uni-nav-bar dark :fixed="true" shadow background-color="#97AF13" status-bar title="茶姬独享"></uni-nav-bar>

  <view class="content">
    <view class="swiper-view">
      <uni-swiper></uni-swiper>
    </view>

    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
    <counter></counter>
  </view>
</template>

<style lang="scss">
@import './style.scss';
</style>
