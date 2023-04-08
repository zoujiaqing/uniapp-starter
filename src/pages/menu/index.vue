<script setup lang="ts">
/**
 * 导入 start
 * 顺序：1.依赖库		2.请求	3.常量 	4.组件 5. ts申明
 */
import { ref, reactive, computed, watch } from 'vue'

import { fetchGoodsList } from '@/api/goods'
import { ads, loading, navBarHeight, goods } from './data'
import pinia from '@/stores/index' // == createPinia()
import { useGolbalSysInfoStore } from '@/stores/golbalSysInfo'

import useNav from './useNav/index.vue'
import useMenu from './useMenu/index.vue'

import { goodsResType, goodsType, goodsListType } from '@/api/goods.d'
import { stateType } from './types.d'

/**
 * 变量 start
 */
// 来自pinia中返回 start
const golbalSysInfo = useGolbalSysInfoStore(pinia)
console.log('customGlobalData------', golbalSysInfo.sysInfo)

let store = {
  name: 'ganxb',
  distance_text: '1km',
}

const orderType = ref<string>('takeout')

let address = {
  street: '天府人文艺术图书馆',
}
// 来自pinia中返回 end

const state: stateType = reactive({
  menuScrollIntoView: '',
  currentCateId: 6905,
  cateScrollTop: 0,
  sizeCalcState: false,
  cart: [
    {
      id: 0,
      cate_id: 6905,
      quantity: 0,
      props_text: '',
      price: 0,
      name: '',
      image: '',
      use_property: 0,
      props: '',
    },
  ],
  goods: [
    {
      id: 6905,
      name: '',
      icon: '',
      sort: 1,
      is_show_backstage: 0,
      goods_list: [],
    },
  ],
})

/**
 * 函数 start
 * @handleInit 初始 - 判断骨架屏处理
 * @calcSize 给 goods数组对象初始 top 和 bottom 参数
 * @handleGoodsScroll 右侧商品滚动事件，根据右侧滚动
 */
// any 应该对应接口返回值的申明
const handlefetchGoodsList = (): Promise<goodsResType> => new Promise(resolve => resolve(fetchGoodsList({})))

const handleInit = async (): Promise<void> => {
  // const testres = await handlefetchGoodsList()
  const testRes: goodsResType = {
    code: 200,
    msg: '成功',
    data: goods,
  }
  setTimeout(() => {
    loading.value = false
  }, 1000)
  console.log(111, testRes)

  state.goods = testRes.data
  console.log('goods---------', state.goods)
}

const calcSize = () => {
  let h = 10
  // uniapp 获取 dom ==> createSelectorQuery()
  let view = uni.createSelectorQuery().select('#ads')
  view
    .fields(
      {
        size: true,
      },
      // 因为 uniapp 定义的申明 不是对象，但是返回又是 {width: 314, height: 150} 改成 any 先解决报错
      (data: any) => {
        h += Math.floor(data.height)
      }
    )
    .exec()
  // 循环商品，根据 id 给 goods 初始 top bottom 参数
  state.goods.forEach(item => {
    let view = uni.createSelectorQuery().select(`#cate-${item.id}`)
    view
      .fields(
        {
          size: true,
        },
        (data: any) => {
          item.top = h
          h += data.height
          item.bottom = h
        }
      )
      .exec()
  })
  state.sizeCalcState = true
}

//{ detail: any }
const handleGoodsScroll = (): void => {
  //商品列表滚动事件
  if (!state.sizeCalcState) {
    calcSize()
  }
  // const { scrollTop } = detail
  // let tabs = state.goods.filter(item => item?.top || 0 <= scrollTop).reverse()
  // if (tabs.length > 0) {
  //   state.currentCateId = tabs[0].id
  // }
}

const handleShowGoodDetailModal = (item: goodsType, good: goodsListType): void => {}

const handleReduceFromCart = (item: goodsType, good: goodsListType): void => {}

const handleAddToCart = (cate: goodsType, good: goodsListType, quantity: number = 1): void => {
  const index = state.cart.findIndex(item => {
    if (good.use_property) {
      // good?.props_text
      return item.id === good.id && item.props_text == ''
    } else {
      return item.id === good.id
    }
  })
  if (index > -1) {
    state.cart[index].quantity += quantity
  } else {
    state.cart.push({
      id: good.id,
      cate_id: cate.id,
      name: good.name,
      price: good.price,
      quantity: quantity,
      image: good.images,
      use_property: good.use_property,
      props_text: good?.props_text || '',
      props: good?.props || '',
    })
  }
}

const computedGoodCartNum = computed((): ((id: number) => number) => {
  //计算单个饮品添加到购物车的数量
  return (id: number) =>
    state.cart.reduce((acc, cur) => {
      if (cur.id === id) {
        return (acc += cur.quantity)
      }
      return acc
    }, 0)
})

// const computedMenuCartNum = computed((): ((id: number) => number) => {
//   return id =>
//     state.cart.reduce((acc, cur) => {
//       if (cur.cate_id === id) {
//         return (acc += cur.quantity)
//       }
//       // 通知父页面更新 cart
//       // emits('update:cart', props.cart)
//       return acc
//     }, 0)
// })

/**
 * 调用 start
 */
handleInit()

// FIXME: 怎么没进？？？ 官网有坑，子组件修改，这里ref只能去监听 x.value
watch(
  () => orderType.value,
  (newValue, oldValue) => {
    console.log('watch-----', newValue, oldValue)
  }
)
</script>

<template>
  <view class="menu-wrapper">
    <view class="custom-nav-bar" :style="{ height: `${navBarHeight + golbalSysInfo.sysInfo.statusBarHeight}px` }">
      <uni-nav-bar
        dark
        :fixed="true"
        shadow
        background-color="#97AF13"
        status-bar
        title="廿壴茶姬"
        :height="navBarHeight"
      ></uni-nav-bar>
    </view>
    <!-- custom-nav-bar end -->

    <view class="container" v-if="!loading">
      <view class="main" v-if="state.goods.length">
        <use-nav v-model:store="store" v-model:orderType="orderType" v-model:address="address"></use-nav>
        <!-- nav end -->

        <view class="content">
          <use-menu
            v-model:menuScrollIntoView="state.menuScrollIntoView"
            v-model:currentCateId="state.currentCateId"
            v-model:cateScrollTop="state.cateScrollTop"
            v-model:sizeCalcState="state.sizeCalcState"
            v-model:goods="state.goods"
            v-model:cart="state.cart"
            @calcSize="calcSize"
          ></use-menu>
          <!-- :computedMenuCartNum="computedMenuCartNum" -->
          <!-- menus end -->

          <scroll-view
            class="goods"
            scroll-with-animation
            scroll-y
            :scroll-top="state.cateScrollTop"
            @scroll="handleGoodsScroll"
          >
            <view class="wrapper">
              <view class="swiper-ads">
                <swiper class="ads" id="ads" autoplay :interval="3000" indicator-dots>
                  <swiper-item v-for="(item, index) in ads" :key="index">
                    <image :src="item.image"></image>
                  </swiper-item>
                </swiper>
              </view>
              <!-- swiper-ads end -->

              <view class="list">
                <!-- category begin -->
                <view class="category" v-for="(item, index) in state.goods" :key="index" :id="`cate-${item.id}`">
                  <view class="title">
                    <text>{{ item.name }}</text>
                    <image :src="item.icon" class="icon"></image>
                  </view>
                  <view class="items">
                    <!-- 商品 begin -->
                    <view class="good" v-for="(good, key) in item.goods_list" :key="key">
                      <image :src="good.images" class="image" @tap="handleShowGoodDetailModal(item, good)"></image>
                      <view class="right">
                        <text class="name">{{ good.name }}</text>
                        <text class="tips">{{ good.content }}</text>
                        <view class="price_and_action">
                          <text class="price">￥{{ good.price }}</text>
                          <view class="btn-group" v-if="good.use_property">
                            <button
                              type="button"
                              class="btn property_btn"
                              hover-class="none"
                              size="mini"
                              @tap="handleShowGoodDetailModal(item, good)"
                            >
                              选规格
                            </button>
                            <view class="dot" v-show="computedGoodCartNum(good.id)">{{
                              computedGoodCartNum(good.id)
                            }}</view>
                          </view>
                          <view class="btn-group" v-else>
                            <button
                              type="button"
                              v-show="computedGoodCartNum(good.id)"
                              plain
                              class="btn reduce_btn"
                              size="mini"
                              hover-class="none"
                              @tap="handleReduceFromCart(item, good)"
                            >
                              <view class="iconfont iconsami-select"></view>
                            </button>
                            <view class="number" v-show="computedGoodCartNum(good.id)">{{
                              computedGoodCartNum(good.id)
                            }}</view>
                            <button
                              type="button"
                              class="btn add_btn"
                              size="min"
                              hover-class="none"
                              @tap="handleAddToCart(item, good, 1)"
                            >
                              <view class="iconfont iconadd-select"></view>
                            </button>
                          </view>
                        </view>
                      </view>
                    </view>
                    <!-- 商品 end -->
                  </view>
                </view>
                <!-- category end -->
              </view>
              <!-- list end -->
            </view>
          </scroll-view>
        </view>
        <!-- content end -->
      </view>
    </view>
    <view class="loading-sketch" v-else> loading-sketch </view>
  </view>
</template>

<style lang="scss">
@import './style.scss';
</style>
