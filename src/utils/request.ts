/* eslint-disable @typescript-eslint/ban-types */
// 获取常量
import { HEADER, HEADERPARAMS, TOKENNAME, HTTP_REQUEST_URL } from '@/config/app'
// import { useCounterStore } from '@/stores/counter'
// import { useStore } from 'vuex'
// 导入申明
import type { RequestOptionsMethod, RequestOptionsMethodAll } from '@/utils/request.d'
/**
 * 发送请求
 */
function handleBaseRequest(
  url: string,
  method: RequestOptionsMethod,
  data: any,
  { noAuth = false, noVerify = false }: any,
  params: unknown
) {
  // const store = useStore()
  // const token = store.state.app.token
  // 从pinia中获取
  const token = 'islogin'
  const Url = HTTP_REQUEST_URL
  let header = JSON.parse(JSON.stringify(HEADER))

  // 如果传了参数 => 表单
  if (params != undefined) {
    header = HEADERPARAMS
  }
  // 如果未授权
  if (!noAuth) {
    // 并且token也是false
    if (!token) {
      // 提示未登录
      return Promise.reject({
        msg: '未登录',
      })
    }
    // 有token并且不是Null
    if (token && token !== null) header[TOKENNAME] = 'Bearer ' + token
  }

  // 返回封装请求
  return new Promise((reslove, reject) => {
    // 加载提示
    uni.showLoading({
      title: '加载中',
      mask: true,
    })

    // uni请求
    uni.request({
      // 常量Url拼上调用时传入的不同接口
      url: Url + url,
      method: method || 'GET',
      header: header,
      data: data || {},
      success: (res: any) => {
        console.log('res-------', res)
        // 成功关闭loading
        uni.hideLoading()
        // 如果有token并且token不为null则修改状态管理的token
        res.data.token && res.data.token !== 'null' && console.log('修改状态管理的token')
        // store.commit('LOGIN', {
        //   token: res.data.token,
        // })
        // 如果未验证抛出返回对象
        if (noVerify) {
          reslove(res)
        } else if (res.statusCode === 200) {
          // 如果验证了并且code = 200 则抛出返回的data
          reslove(res.data)
        } else {
          // code不是200也没有验证标识抛出错误
          reject(res.data.message || '系统错误')
        }
      },
      // 请求失败
      fail: msg => {
        uni.hideLoading()
        reject('请求失败')
      },
    })
  })
}

// const request: Request = {}
// 请求类型数组
const requestOptions: RequestOptionsMethodAll[] = [
  'options',
  'get',
  'post',
  'put',
  'head',
  'delete',
  'trace',
  'connect',
]
// 自定义ts的校验 methods
type Methods = (typeof requestOptions)[number]
// 定义request对象去接封装的请求（TS申明：如果在Methods中的一项）
const request: { [key in Methods]?: Function } = {}

// 循环请求类型数组
requestOptions.forEach(method => {
  // item
  const m = method.toUpperCase() as unknown as RequestOptionsMethod
  // ge: { get(){} }
  request[method] = (api: string, data: any, opt: RequestOptionsMethod, params: unknown) =>
    handleBaseRequest(api, m, data, opt || {}, params)
})

export default request
