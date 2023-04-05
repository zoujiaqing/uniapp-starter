<script setup lang="ts">
/**
 * 导入 start
 * 顺序：1.依赖库		2.请求	3.常量 	4.组件 5. ts申明
 */
import { computed, nextTick, watch, toRefs } from 'vue'

import { goodsType } from '@/api/goods.d'
import { cartType } from '../types.d'
interface stateType {
  menuScrollIntoView: string
  currentCateId: number
  cateScrollTop: number
  sizeCalcState: boolean
  goods: goodsType[]
  cart: cartType[]
  computedMenuCartNum: (id: number) => number
}

/**
 * 变量 start
 */
const props = withDefaults(defineProps<stateType>(), {
  menuScrollIntoView: '',
  currentCateId: 6905,
  cateScrollTop: 0,
  sizeCalcState: false,
  goods: () => [
    {
      id: 6905,
      name: '',
      icon: '',
      sort: 1,
      is_show_backstage: 0,
      goods_list: [],
    },
  ],
  cart: () => [
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
  computedMenuCartNum: () => {
    return 0
  },
})
const emits = defineEmits(['update:currentCateId', 'update:cart', 'update:cateScrollTop', 'calcSize'])
//解构 props 拿到 cart  TODO: 当从组合式函数中返回响应式对象时，toRefs 相当有用。使用它，消费者组件可以解构/展开返回的对象而不会失去响应性： 父子完美双向
let { cart } = toRefs(props)

/**
 * 函数 start
 * @computedMenuCartNum 计算商品下单数量
 */

const computedMenuCartNum = computed((): ((id: number) => number) => {
  return id =>
    cart.value.reduce((acc, cur) => {
      if (cur.cate_id === id) {
        return (acc += cur.quantity)
      }
      // 通知父页面更新 cart
      emits('update:cart', props.cart)
      return acc
    }, 0)
})

const computedUpdatecurrentCateId = computed<number>({
  get() {
    return props.currentCateId
  },
  set(value) {
    // context.emit 除了采用update，也可以使用经典方式：emit把值传到父页面，父页面再调用方法修改
    // emits('update:currentCateId', value)
    emits('update:currentCateId', value)
    // emits异步，获取新值要么nextTick要么用watch
    nextTick(() => {
      // console.log(222, value, props.currentCateId)
    })
  },
})

const computedUpdateCateScrollTop = computed<number>({
  get() {
    return props.cateScrollTop
  },
  set(value) {
    emits('update:cateScrollTop', value)
  },
})

const handleMenuTap = (id: number): void => {
  // 默认进来给没一个商品初始 top bottom
  if (!props.sizeCalcState) {
    emits('calcSize')
  }
  // props.currentCateId = id
  computedUpdatecurrentCateId.value = id
  // 根据点的菜单获取id，然后找到对应这个id的 top 间距
  // this.$nextTick(() => (state.cateScrollTop = state.goods.find(item => item.id == id).top))
  nextTick(() => {
    // FIXME: 第一次进来，虽然emits('calcSize')执行了，但是组件并未更新 Props，导致第一次点击无效
    const testItem = props.goods.find(item => item.id == id)
    computedUpdateCateScrollTop.value = testItem?.top || 0
  })
}

/**
 * 调用 start
 */
watch(
  () => props.cart,
  (newValue, oldValue) => {
    console.log('watch-----cart', newValue, oldValue)
  },
  { deep: true, immediate: true }
)
</script>

<template>
  <scroll-view class="menus" :scroll-into-view="props.menuScrollIntoView" scroll-with-animation scroll-y>
    <view class="wrapper">
      <view
        class="menu"
        v-for="(item, index) in props.goods"
        :key="index"
        @tap="handleMenuTap(item.id)"
        :id="`menu-${item.id}`"
        :class="{ current: item.id === props.currentCateId }"
      >
        <text>{{ item.name }}</text>
        <view class="dot" v-show="computedMenuCartNum(item.id)">{{ computedMenuCartNum(item.id) }}</view>
      </view>
    </view>
  </scroll-view>
  <!-- menus end -->
</template>
