<script setup lang="ts">
/**
 * 导入 start
 * 顺序：1、依赖库 2. 请求 3. 常量 4.组件 5. ts申明
 */
import { computed, onMounted } from 'vue'
import { HeightProperty } from './types'
import statusBar from './uni-status-bar.vue'
/**
 * NavBar 自定义导航栏
 * @description 导航栏组件，主要用于头部导航
 * @tutorial https://ext.dcloud.net.cn/plugin?id=52
 * @property {Boolean} dark 开启黑暗模式
 * @property {String} title 标题文字
 * @property {String} leftText 左侧按钮文本
 * @property {String} rightText 右侧按钮文本
 * @property {String} leftIcon 左侧按钮图标（图标类型参考 [Icon 图标](http://ext.dcloud.net.cn/plugin?id=28) type 属性）
 * @property {String} rightIcon 右侧按钮图标（图标类型参考 [Icon 图标](http://ext.dcloud.net.cn/plugin?id=28) type 属性）
 * @property {String} color 图标和文字颜色
 * @property {String} backgroundColor 导航栏背景颜色
 * @property {Boolean} fixed = [true|false] 是否固定顶部
 * @property {Boolean} statusBar = [true|false] 是否包含状态栏
 * @property {Boolean} shadow = [true|false] 导航栏下是否有阴影
 * @property {Boolean} stat 是否开启统计标题上报
 * @event {Function} clickLeft 左侧按钮点击时触发
 * @event {Function} clickRight 右侧按钮点击时触发
 * @event {Function} clickTitle 中间标题点击时触发
 */
interface stateType {
  dark: boolean
  title: string
  leftText: string
  rightText: string
  leftIcon: string
  rightIcon: string
  fixed: boolean | String
  color: string
  backgroundColor: string
  statusBar: boolean | string
  shadow: boolean | string
  border: boolean | string
  height: number | string
  leftWidth: number | string
  rightWidth: number | string
  stat: string | Boolean
}

/**
 * 变量 start
 *  withDefaults() 设置默认值
 *  defineProps() 宏函数支持从它的参数中推导类型 ts申明无法导入，只能写在当前页面
 */
const props = withDefaults(defineProps<stateType>(), {
  dark: false,
  title: '',
  leftText: '',
  rightText: '',
  leftIcon: '',
  rightIcon: '',
  fixed: false,
  color: '',
  backgroundColor: '',
  statusBar: false,
  shadow: false,
  border: true,
  height: 44,
  leftWidth: 60,
  rightWidth: 60,
  stat: '',
})
const emits = defineEmits(['clickLeft', 'clickRight', 'clickTitle'])

/**
 * 函数 start
 */
const themeBgColor = computed<string>((): string => {
  if (props.dark) {
    // 默认值
    if (props.backgroundColor) {
      return props.backgroundColor
    } else {
      return props.dark ? '#333' : '#FFF'
    }
  }
  return props.backgroundColor || '#FFF'
})

const themeColor = computed<string>((): string => {
  if (props.dark) {
    // 默认值
    if (props.color) {
      return props.color
    } else {
      return props.dark ? '#fff' : '#333'
    }
  }
  return props.color || '#333'
})

const handleGetVal = (val: HeightProperty<string | number>): HeightProperty<string | number> | undefined =>
  typeof val === 'number' ? val + 'px' : val

const navbarHeight = computed<HeightProperty<string | number> | undefined>(() => {
  return handleGetVal(props.height)
})

const leftIconWidth = computed<HeightProperty<string | number> | undefined>(() => {
  return handleGetVal(props.leftWidth)
})

const rightIconWidth = computed<HeightProperty<string | number> | undefined>(() => {
  return handleGetVal(props.rightWidth)
})

const handleClickLeft = (): void => {
  // 1. 表示要通知父页面的函数 2. 表示值
  emits('clickLeft', 'emit返回??')
}

const handleClickTitle = (): void => {}

const handleClickRight = (): void => {}

/**
 * 调用 start
 */
onMounted(() => {
  // uni统计api
  // if (uni.report && props.stat && props.title !== '') {
  //   // uni.report('title', props.title)
  // }
})
</script>

<template>
  <view class="uni-navbar" :class="{ 'uni-dark': props.dark, 'uni-nvue-fixed': props.fixed }">
    <view
      class="uni-navbar__content"
      :class="{
        'uni-navbar--fixed': props.fixed,
        'uni-navbar--shadow': props.shadow,
        'uni-navbar--border': props.border,
      }"
      :style="{ 'background-color': themeBgColor }"
    >
      <status-bar></status-bar>
      <view
        :style="{ color: themeColor, backgroundColor: themeBgColor, height: navbarHeight }"
        class="uni-navbar__header"
      >
        <view
          @tap="handleClickLeft"
          class="uni-navbar__header-btns uni-navbar__header-btns-left"
          :style="{ width: leftIconWidth }"
        >
          <slot name="left">
            <view class="uni-navbar__content_view" v-if="props.leftIcon.length > 0">
              <uni-icons :color="themeColor" :type="props.leftIcon" size="20" />
            </view>
            <view
              :class="{ 'uni-navbar-btn-icon-left': !(props.leftIcon.length > 0) }"
              class="uni-navbar-btn-text"
              v-if="props.leftText.length"
            >
              <text :style="{ color: themeColor, fontSize: '12px' }">{{ props.leftText }}</text>
            </view>
          </slot>
        </view>
        <view class="uni-navbar__header-container" @tap="handleClickTitle">
          <slot>
            <view class="uni-navbar__header-container-inner" v-if="props.title.length > 0">
              <text class="uni-nav-bar-text uni-ellipsis-1" :style="{ color: themeColor }">{{ props.title }}</text>
            </view>
          </slot>
        </view>
        <view
          @tap="handleClickRight"
          class="uni-navbar__header-btns uni-navbar__header-btns-right"
          :style="{ width: rightIconWidth }"
        >
          <slot name="right">
            <view v-if="props.rightIcon.length">
              <uni-icons :color="themeColor" :type="props.rightIcon" size="22" />
            </view>
            <view class="uni-navbar-btn-text" v-if="props.rightText.length && !props.rightIcon.length">
              <text class="uni-nav-bar-right-text" :style="{ color: themeColor }">{{ props.rightText }}</text>
            </view>
          </slot>
        </view>
      </view>
    </view>

    <!-- uniapp特有判断 -->
    <!-- #ifndef APP-NVUE -->
    <view class="uni-navbar__placeholder" v-if="props.fixed">
      <!-- v-if="statusBar" -->
      <status-bar></status-bar>
      <view class="uni-navbar__placeholder-view" :style="{ height: navbarHeight }" />
    </view>
    <!-- #endif -->
  </view>
</template>

<style lang="scss" scoped>
@import './style.scss';
</style>
