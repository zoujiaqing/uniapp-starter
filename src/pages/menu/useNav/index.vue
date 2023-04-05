<script setup lang="ts">
import { computed, watch, nextTick } from 'vue'
interface propsType {
  store: {
    name: string
    distance_text: string
  }
  orderType: string
  address: {
    street: string
  }
}

const props = withDefaults(defineProps<propsType>(), {
  store: () => {
    return {
      name: '',
      distance_text: '',
    }
  },
  orderType: '',
  address: () => {
    return {
      street: '',
    }
  },
  // 对象，数组全部都要用函数 return
  // labels: () => ['one', 'two']
})
const emits = defineEmits(['update:orderType'])

const updateOrderType = computed<string>({
  get() {
    return props.orderType
  },
  set(value) {
    // context.emit 除了采用update，也可以使用经典方式：emit把值传到父页面，父页面再调用方法修改
    emits('update:orderType', value)
    // emits异步，获取新值要么nextTick要么用watch
    nextTick(() => {
      console.log(1111, value, props.orderType)
    })
  },
})

const handleTakein = (val: string): void => {
  // props.orderType = val
  updateOrderType.value = val
}
const handleTakeout = (val: string): void => {
  // 跳到填写外卖地址的页面
  updateOrderType.value = val
}

// 当子组件修改值发生变化，更新值监控
watch(
  () => props.orderType,
  (newValue, oldValue) => {
    console.log(2222222, newValue, oldValue)
  }
  // {
  //   immediate: true, // 深度监听
  // }
)
</script>

<template>
  <view class="nav">
    <view class="header">
      <view class="left" v-if="props.orderType == 'takein'">
        <view class="store-name">
          <text>{{ props.store.name }}</text>
          <view class="iconfont iconarrow-right"></view>
        </view>
        <view class="store-location">
          <image src="/static/images/order/location.png" style="width: 30rpx; height: 30rpx" class="mr-10"></image>
          <text>距离您 {{ props.store.distance_text }}</text>
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
          由<text class="text-color-base" style="margin: 0 10rpx">{{ props.store.name }}</text
          >配送
        </view>
      </view>
      <view class="right">
        <!-- vuex中的方法 -->
        <view class="dinein" :class="{ active: orderType == 'takein' }" @tap="handleTakein('takein')">
          <text>自取</text>
        </view>
        <view class="takeout" :class="{ active: orderType == 'takeout' }" @tap="handleTakeout('takeout')">
          <text>外卖</text>
        </view>
      </view>
    </view>

    <view class="coupon">
      <text class="title">"霸气mini卡"超级购券活动，赶紧去购买</text>
      <view class="iconfont iconarrow-right"></view>
    </view>
  </view>
  <!-- nav end -->
</template>
