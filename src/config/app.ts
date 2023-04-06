import ENV_CONFIG from '@/config/env'

console.log('不同环境不同地址---', ENV_CONFIG)

// app名字
export const APP_NAME = '廿壴博客'
// app的图片 // 静态资源的cos地址
export const IMAGE_URL = 'https://blog.ganxb2.com/img/about/blog_log.png'
// mock请求地址
export const HTTP_REQUEST_URL = ENV_CONFIG.BASE_API //'http://localhost:3300'
// 请求头 - json
export const HEADER = {
  'content-type': 'application/json',
}
// 请求头 - 表单
export const HEADERPARAMS = {
  'content-type': 'application/x-www-form-urlencoded',
}
// tokenName
export const TOKENNAME = 'Authorization'
