// import { createSSRApp } from 'vue'
// // 生命周期
// import App from '@/App.vue'
// const app = createSSRApp(App)

// import request from '@/utils/request'

// /**
//  * 获取用户信息
//  *
//  */
// export function fetchUserInfo() {
//   return request?.get?.('/user/userInfo', {}, { noAuth: true })
// }

import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { count: 0 }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.count++
    },
  },
})

// import { createTestingPinia } from '@pinia/testing';
// const pinia = createTestingPinia()

// it('should return something' () => {
//    const store1 = useStore1(pinia);
//    store1.name = "foobar";

//    const store2 = useStoreTwo();
//    expect(store2.value).toBe('foobar');
// })
