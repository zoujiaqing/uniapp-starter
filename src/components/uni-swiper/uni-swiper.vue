<script setup lang="ts">
/**
 * 导入 start
 * 顺序：1.依赖库		2.请求	3.常量 	4.组件 5. ts申明
 */
import { reactive } from 'vue'

interface infoItemTypes {
  colorClass: string
  url: string
  content: string
  mode: string
  src: string
}
// 只能当前页面定义申明 因为绑给 props
interface propsTypes {
  info: Array<infoItemTypes>
  current: number
  mode: string
  dotsStyles: object
  swiperDotIndex: number
}

/**
 * 变量 start
 */
const props = withDefaults(defineProps<propsTypes>(), {
  info: () => {
    return [
      // 测试数据
      {
        colorClass: 'uni-bg-red',
        url: 'https://web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg',
        content: '内容 A',
        mode: 'aspectFill',
        src: 'https://img-shop.qmimg.cn/s23107/2020/04/26/3eb7808bf105262604.jpg',
      },
      {
        colorClass: 'uni-bg-green',
        url: 'https://web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg',
        content: '内容 B',
        mode: 'aspectFill',
        src: 'https://img-shop.qmimg.cn/s23107/2020/04/26/3eb7808bf105262604.jpg',
      },
      {
        colorClass: 'uni-bg-blue',
        url: 'https://web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg',
        content: '内容 C',
        mode: 'aspectFill',
        src: 'https://img-shop.qmimg.cn/s23107/2020/04/26/3eb7808bf105262604.jpg',
      },
    ]
  },
  current: 0,
  mode: 'round', //'nav',
  dotsStyles: () => {
    return {}
  },
  swiperDotIndex: 0,
})

// 组件要改props的值，得改成自己定义双向来做逻辑  报错： Unexpected mutation of "current" prop.eslint
const state: { current: number } = reactive({
  current: props.current,
})

/**
 * 函数 start
 */
const handleClickItem = (): void => {}

const handleChange = (e: any): void => {
  console.log('切换----')
  state.current = e.detail.current
}

const handleImageError = (e: any) => {
  console.error('image 发生 error 事件, 携带值为' + e.detail.errMsg)
}
</script>

<template>
  <uni-swiper-dot
    class="uni-swiper-dot-box"
    @clickItem="handleClickItem"
    :info="props.info"
    :current="state.current"
    :mode="props.mode"
    :dots-styles="props.dotsStyles"
    field="content"
  >
    <swiper class="swiper-box" @change="handleChange" :current="props.swiperDotIndex">
      <swiper-item v-for="(item, index) in props.info" :key="index">
        <view class="swiper-item" :class="'swiper-item' + index">
          <image
            style="width: 100%; height: 100%; background-color: #eeeeee"
            :mode="item.mode"
            :src="item.src"
            @error="handleImageError"
          ></image>
          <!-- <text style="color: #fff; font-size: 32px">{{ index + 1 }}</text> -->
        </view>
      </swiper-item>
    </swiper>
  </uni-swiper-dot>
</template>
<style lang="scss" scoped>
@import './style.scss';
</style>
