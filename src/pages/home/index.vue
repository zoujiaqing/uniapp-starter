<script setup lang="ts">
/**
 * 导入 start
 * 顺序：1.依赖库		2.请求	3.常量 	4.组件 5. ts申明
 */
import { fetchUserInfo } from '@/api/user'
import { gridList, avatar, tagsGrids } from './data'
import pinia from '@/stores/index' // == createPinia()
import { useGolbalSysInfoStore } from '@/stores/golbalSysInfo'

import { userInfoType } from '@/api/user.d'

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
 * @fetchUserInfo 用户信息接口 - 测试mock服务
 */
fetchUserInfo()
  .then((r: userInfoType) => {
    console.log('用户信息---', r)
  })
  .catch((err: any) => console.log(err))
</script>

<template>
  <view class="wrapper">
    <view class="swiper-view">
      <uni-swiper></uni-swiper>
    </view>
    <!-- swiper-view end -->
    <view class="icons">
      <uni-grid :column="4" :showBorder="false">
        <uni-grid-item>
			<view class="grid-item-box">
			  <image src="/static/images/icons/hecheng.png" class="icon"></image>
			  <text class="text">合成活动</text>
		  </view>
        </uni-grid-item>
        <uni-grid-item>
			<view class="grid-item-box">
			  <image src="/static/images/icons/zhihuan.png" class="icon"></image>
			  <text class="text">置换活动</text>
		  </view>
        </uni-grid-item>
        <uni-grid-item>
			<view class="grid-item-box">
			  <image src="/static/images/icons/yaoqing.png" class="icon"></image>
			  <text class="text">邀请好友</text>
		  </view>
        </uni-grid-item>
        <uni-grid-item>
			<view class="grid-item-box">
			  <image src="/static/images/icons/xinshou.png" class="icon"></image>
			  <text class="text">新手指引</text>
		  </view>
        </uni-grid-item>
        <uni-grid-item>
			<view class="grid-item-box">
			  <image src="/static/images/icons/shangxin.png" class="icon"></image>
			  <text class="text">新品兑换</text>
		  </view>
        </uni-grid-item>
      </uni-grid>
    </view>
    <view class="content">
      <view class="check-shop">
        <uni-card title="HI~~" sub-title="加入廿壴茶姬的大家庭享有更多优惠哟~" extra="" :thumbnail="avatar" spacing="0">
          <view class="uni-body">
            <view class="add-content">
              <view class="title"
                ><uni-icons type="location" size="24" color="#97af13"></uni-icons>天府人文艺术图书馆店</view
              >
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
            <image src="https://gumpbobo.github.io/img/about/blog_log.png" class="icon"></image>
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
