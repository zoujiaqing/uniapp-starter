<script setup lang="ts">
/**
 * 导入 start
 * 顺序：1.依赖库		2.请求	3.常量 	4.组件 5. ts申明
 */
import { ref } from 'vue'
import { fetchUserInfo } from '@/api/user'

// import pinia from '@/stores/index' // == createPinia()
// import { useGolbalSysInfoStore } from '@/stores/golbalSysInfo'

// import { userInfoType } from './types'

/**
 * 变量 start
 */
const loading = ref<boolean>(true)
const store = {
  name: 'ganxb',
  distance_text: '1km',
}
const orderType = ref<string>('takeout')
const address = {
  street: '天府人文艺术图书馆',
}

/**
 * 函数 start
 */
const handlefetchUserInfo = () => new Promise(resolve => resolve(fetchUserInfo()))

const init = async () => {
  console.log('handlefetchUserInfo ----------111', 11)
  const userInfo = await handlefetchUserInfo()
  setTimeout(() => {
    loading.value = false
  }, 1000)
  console.log('handlefetchUserInfo ----------222', userInfo)
}

const handleTakein = (val: string): void => {}
const handleTakeout = (): void => {}
/**
 * 调用 start
 */
init()
</script>

<template>
  <uni-nav-bar dark :fixed="true" shadow background-color="#97AF13" status-bar title="廿壴茶姬"></uni-nav-bar>
  <!-- uni-nav-bar end -->

  <view class="content" v-if="!loading">
    <view class="nav">
      <view class="header">
        <view class="left" v-if="orderType == 'takein'">
          <view class="store-name">
            <text>{{ store.name }}</text>
            <view class="iconfont iconarrow-right"></view>
          </view>
          <view class="store-location">
            <image src="/static/images/order/location.png" style="width: 30rpx; height: 30rpx" class="mr-10"></image>
            <text>距离您 {{ store.distance_text }}</text>
          </view>
        </view>
        <view class="left overflow-hidden" v-else>
          <view class="d-flex align-items-center overflow-hidden">
            <image src="/static/images/order/location.png" style="width: 30rpx; height: 30rpx" class="mr-10"></image>
            <view class="font-size-extra-lg text-color-base font-weight-bold text-truncate">
              {{ address.street }}
            </view>
          </view>
          <view class="font-size-sm text-color-assist overflow-hidden text-truncate">
            由<text class="text-color-base" style="margin: 0 10rpx">{{ store.name }}</text
            >配送
          </view>
        </view>
        <view class="right">
          <!-- vuex中的方法 -->
          <view class="dinein" :class="{ active: orderType == 'takein' }" @tap="handleTakein('takein')">
            <text>自取</text>
          </view>
          <view class="takeout" :class="{ active: orderType == 'takeout' }" @tap="handleTakeout">
            <text>外卖</text>
          </view>
        </view>
      </view>

      <!-- <view class="coupon">
        <text class="title">"霸气mini卡"超级购券活动，赶紧去购买</text>
        <view class="iconfont iconarrow-right"></view>
      </view> -->
    </view>
    <!-- nav end -->
  </view>
  <view class="loading-sketch" v-else> loading-sketch </view>
</template>

<style lang="scss">
@import './style.scss';
</style>
