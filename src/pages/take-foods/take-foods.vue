<script setup lang="ts">
/**
 * 导入 start
 * 顺序：1.依赖库		2.请求	3.常量 	4.组件 5. ts申明
 */
// import { ref } from 'vue'
import { fetchUserInfo } from '@/api/user'

import pinia from '@/stores/index' // == createPinia()
import { useGolbalSysInfoStore } from '@/stores/golbalSysInfo'

import { userInfoType } from '@/api/user.d'

/**
 * 变量 start
 */
const golbalSysInfo = useGolbalSysInfoStore(pinia)
console.log('customGlobalData------', golbalSysInfo.sysInfo)

/**
 * 函数 start
 */
const actionsClick = (text: string): void => {
  uni.showToast({
    title: text,
    icon: 'none',
  })
}

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
  <!-- <view :style="{ height: golbalSysInfo.sysInfo.statusBarHeight + 'px' }"></view> -->
  <!-- 自定义导航 -->
  <uni-nav-bar dark :fixed="true" shadow background-color="#97AF13" status-bar title="茶姬到"></uni-nav-bar>

  <view class="content">
    <!-- <view class="swiper-view">
      <uni-swiper></uni-swiper>
    </view> -->

    <!-- <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view> -->
    <!-- <counter></counter> -->
    <uni-card cover="https://web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png">
      <text>这是一个带封面和操作栏的卡片示例，此示例展示了封面插槽和操作栏插槽的用法。</text>
      <template v-slot:actions>
        <view class="card-actions">
          <view class="card-actions-item" @click="actionsClick('分享')">
            <uni-icons type="pengyouquan" size="18" color="#999"></uni-icons>
            <text class="card-actions-item-text">分享</text>
          </view>
          <view class="card-actions-item" @click="actionsClick('点赞')">
            <uni-icons type="heart" size="18" color="#999"></uni-icons>
            <text class="card-actions-item-text">点赞</text>
          </view>
          <view class="card-actions-item" @click="actionsClick('评论')">
            <uni-icons type="chatbubble" size="18" color="#999"></uni-icons>
            <text class="card-actions-item-text">评论</text>
          </view>
        </view>
      </template>
    </uni-card>
  </view>
</template>

<style lang="scss">
@import './style.scss';
</style>
