import { mount } from '@vue/test-utils'
// 导入需要测试页面
import HelloWorld from '@/components/counter/counter.vue'
import { useCounterStore } from '../request'

test('add stores count', async () => {
  // 获取整个wrapper
  const wrapper = mount(HelloWorld)

  // 获取dom: title的text判断是不是'0'
  expect(wrapper.find('.title').text()).toBe('0')
  // 触发按钮点击
  await wrapper.find('.button').trigger('tap')
  const acount = useCounterStore()
  expect(acount.count).toBe(1)
  // 再获取dom: title的text判断是不是'1'
  expect(wrapper.find('.title').text()).toBe('1')
})

// Assert the rendered text of the component 断点测试步骤
/*
		expect()返回被称作“expectation”的对象。
		toBe()被称作matcher
		expect(wrapper.classes()).toContain('hidden')
   */

// vue2: wrapper.vm.method 测试写在里面的函数
// wrapper.vm.$nextTick(() => {
//   // expect(wrapper.classes()).not.toContain('hidden')
//   expect(wrapper.find('.title').text()).toBe('1')
// })

// the store I want to mock
// export const useStore1 = defineStore({
// 	id: 'store1',
// 	state: (): State => ({

// 			someName:'blarg', // I know this is static but lets pretend it can change.
// 	}),
// 	// getter I want to mock
// 	getters: {
// 			name: (state) => state.someName,
// 	}
// }
// // store I want to test
// export const useStoreTwo = defineStore({
// 	id: 'store2',
// 	state: (): State => ({

// 		 someValue:'bar'
// 	}),
// 	getters: {
// 			value: (state) => {
// 			const store1 = useStore1() // dependency here
// 			return `${store1.name} state.someValue`
// 			},
// 	}
// }
// // test
// it('should return something' () => {
// 		//****
// 			 someplace I would mock useStateOne and have it return
// 			 a stub store with the getter name that returns 'foo'
// 		***//
// 		const store2 = useStoreTwo();
// 		expect(store2.value).toBe('foo bar');
// })
