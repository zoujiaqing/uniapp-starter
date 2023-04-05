import request from '@/utils/request'
import { goodsResType } from '@/api/goods.d'

/**
 * 商品
 *
 */
export function fetchGoodsList(data: any): Promise<goodsResType> {
  return request?.get?.('/goods/goodsList', data, { noAuth: true })
}
