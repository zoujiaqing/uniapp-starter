import dev from './.env.dev'
import test from './.env.test'
import pre from './.env.pre'
import prod from './.env.pro'

// import.meta.env 这是vite环境变量
const NODE_ENV = import.meta.env.MODE

let ENV_VAR: { BASE_API: string } = { BASE_API: 'dev' }
if (NODE_ENV === 'dev') {
  console.log('开发---')
  ENV_VAR = dev
} else if (NODE_ENV === 'test') {
  console.log('测试---')
  ENV_VAR = test
} else if (NODE_ENV === 'pre') {
  ENV_VAR = pre
} else if (NODE_ENV === 'pro') {
  console.log('生产---')
  ENV_VAR = prod
}
// else if (NODE_ENV === 'demo') {
//   ENV_VAR = demo
// }

export default ENV_VAR
