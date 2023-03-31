<script setup lang="ts">
/**
 * 导入 start
 * 顺序：1.依赖库		2.请求	3.常量 	4.组件 5. ts申明
 */
// import { ref, reactive } from 'vue'
import { fetchUserInfo } from '@/api/user'
import { gridList, avatar, tagsGrids } from './data'

import pinia from '@/stores/index' // == createPinia()
import { useGolbalSysInfoStore } from '@/stores/golbalSysInfo'

import { userInfoType } from './types'

/**
 * 变量 start
 * @golbalSysInfo 用户手机系统相关信息
 */
const golbalSysInfo = useGolbalSysInfoStore(pinia)
console.log('customGlobalData------', golbalSysInfo.sysInfo)

/**
 * 函数 start
 * @handleGridClick 自取外卖点击
 */
const handleGridClick = (): void => {
  console.log('自取外卖点击')
}

/**
 * 调用 start
 * @fetchUserInfo 用户信息接口
 */
fetchUserInfo()
  .then((r: userInfoType) => {
    console.log('r', r)
  })
  .catch((err: any) => console.log(err))
</script>

<template>
  <view class="wrapper">
    <view class="swiper-view">
      <uni-swiper></uni-swiper>
    </view>
    <!-- swiper-view end -->

    <view class="content">
      <view class="check-shop">
        <uni-card title="HI~~" sub-title="加入廿壴茶姬的大家庭享有更多优惠哟~" extra="" :thumbnail="avatar" spacing="0">
          <view class="uni-body">
            <view class="add-content">
              <view class="title"
                >天府人文图书馆店<uni-icons type="location" size="24" color="#97af13"></uni-icons
              ></view>
              <view class="address-info">
                <text>四川省成都市天府111</text>
                <text>营业时间：06:00 - 22:00</text>
              </view>
              <view class="tags-grid">
                <uni-grid :column="3" :highlight="true" :showBorder="false" :square="false">
                  <uni-grid-item v-for="(item, index) in tagsGrids" :index="index" :key="index">
                    <view class="grid-item-box">
                      <uni-icons :type="item.icon" size="18" color="#97af13"></uni-icons>
                      <text class="text">{{ item.text }}</text>
                    </view>
                  </uni-grid-item>
                </uni-grid>
              </view>
            </view>
            <image src="https://blog.ganxb2.com/img/about/blog_log.png" class="icon"></image>
          </view>
        </uni-card>
      </view>
      <!-- check-shop end -->

      <view class="grid-entrance">
        <uni-grid :column="2" :highlight="true" @change="handleGridClick" :showBorder="false">
          <uni-grid-item v-for="(item, index) in gridList" :index="index" :key="index">
            <view class="grid-item-box">
              <image :src="item.image" class="icon"></image>
              <text class="text">{{ item.text }}</text>
            </view>
          </uni-grid-item>
        </uni-grid>
      </view>
      <!-- grid-entrance end -->
    </view>
  </view>
</template>

<style lang="scss">
@import './style.scss';
</style>

<!-- <view :style="{ height: golbalSysInfo.sysInfo.statusBarHeight + 'px' }"></view> -->
<!-- 自定义导航 -->
<!-- <uni-nav-bar dark :fixed="true" shadow background-color="#fa2c19" status-bar title="廿壴茶姬"></uni-nav-bar> -->

<!-- <image class="logo" src="/static/logo.png" />
      <view class="text-area">
        <text class="title">{{ title }}</text>
      </view>
      <counter></counter>
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
      </uni-card> -->
<!--// const title = ref<string>('Hello')
		// const statusBarHeight = ref<number>(20)
		// const actionsClick = (text: string): void => { // uni.showToast({ // title: text, // icon: 'none', // }) // } //
		const handleBack = (e: any): void => { // console.log('返回----------', e) // }
-->
