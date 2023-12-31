import request from '@/utils/request'

/**
 * 精选课程
 *
 */
export function fetchRecommendGoodsList(data: any) {
  return request?.get?.('/product/recommend', data, { noAuth: true })
}

/**
 * 商品详情
 *
 */
export function fetchGoodsDetail(data: any) {
  return request?.get?.('/product/detail', data, { noAuth: true })
}
