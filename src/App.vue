<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'
import pinia from '@/stores/index' // createPinia()
import { useGolbalSysInfoStore } from '@/stores/golbalSysInfo'

onLaunch(() => {
  console.log('App Launch')
  // 获取手机信息
  const info = uni.getSystemInfoSync()
  console.log('sysInfo------', info)

  let golbalSysInfo = useGolbalSysInfoStore(pinia)
  // statusBarHeight可能是 undefined
  golbalSysInfo.sysInfo.statusBarHeight = info.statusBarHeight || 20
  golbalSysInfo.sysInfo.windowWidth = info.windowWidth
  // console.log('golbalSysInfo------', golbalSysInfo)

  // #ifndef H5 || APP-PLUS || MP-ALIPAY
  // 获取胶囊位置
  const menuButtonInfo = uni.getMenuButtonBoundingClientRect()
  console.log('menuButtonInfo----', menuButtonInfo)
  golbalSysInfo.sysInfo.navBarHeight =
    menuButtonInfo.bottom -
    golbalSysInfo.sysInfo.statusBarHeight +
    (menuButtonInfo.top - golbalSysInfo.sysInfo.statusBarHeight)
  golbalSysInfo.sysInfo.windowWidth = menuButtonInfo.left
  // #endif

  // this.navBarHeight = menuButtonInfo.bottom - info.statusBarHeight + (menuButtonInfo.top - info.statusBarHeight)
  // this.windowWidth = menuButtonInfo.left
  // 状态栏高度  statusBarHeight, windowWidth, menuButtonInfo, navBarHeight
  // this.statusBarHeight = info.statusBarHeight
  // 窗口宽度
  // this.windowWidth = info.windowWidth

  // App.provide('$customGlobalData', customGlobalData)
})
onShow(() => {
  console.log('App Show')
})
onHide(() => {
  console.log('App Hide')
})

// export golbalSysInfo
</script>
<style></style>
