import { goodsType } from '@/api/goods.d'

export interface cartType {
  cate_id: number
  quantity: number
  props_text: string
  id: number
  name: string
  price: number
  image: string
  use_property: number
  props: string
}

export interface stateType {
  menuScrollIntoView: string
  currentCateId: number
  cateScrollTop: number
  sizeCalcState: boolean
  goods: goodsType[]
  cart: cartType[]
}
