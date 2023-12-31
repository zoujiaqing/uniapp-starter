import log from '../utils/logger'
import { MiddleWare } from '../type'

// 返回结果json的申明
export type ResultInfo = {
  code: number
  msg?: string
  data?: any
  token?: string
  message?: string
  err?: any
}

/**
 * 执行结果 handler 用来给每个响应对象包装响应码等
 */
export const ResultHandler: MiddleWare = () => async (ctx, next) => {
  const r: ResultInfo = { code: 200 }
  try {
    const data: any = await next()
    r.code = 200
    r.msg = 'success'
    r.data = data
  } catch (err) {
    log.error(err)
    log.error('xxx' + err.statusCode)

    r.code = err.statusCode
    switch (err.statusCode) {
      case 102:
        r.msg = '用户不存在'
        break

      default:
        break
    }
  }
  ctx.body = r
}
