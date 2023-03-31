// https://pinia.esm.dev/introduction.html
import { defineStore } from 'pinia'
// import { reactive } from 'vue'

export const useGolbalSysInfoStore = defineStore('golbalSysInfo', () => {
  // const golbalSysInfoObj = reactive({})
  const sysInfo: golbalSysInfoType = {
    statusBarHeight: 20,
    windowWidth: 0,
    navBarHeight: 0,
  }
  // function handleSysInfo() {
  //   return golbalSysInfoObj
  // }
  return { sysInfo }
})

// You can even use a function (similar to a component setup()) to define a Store for more advanced use cases:
// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//
//   function increment() {
//     count.value++
//   }
//
//   return {count, increment}
// })
