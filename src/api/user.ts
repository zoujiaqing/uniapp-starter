import request from '@/utils/request'
import { userInfoType } from './user.d'

/**
 * 获取用户信息
 * 考虑错误返回 还要联合申明，暂时只写正确返回
 */
export function fetchUserInfo(): Promise<userInfoType> {
  return request?.get?.('/user/userInfo', {}, { noAuth: true })
}
