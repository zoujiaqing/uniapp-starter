interface spec_textType {
  [key: string]: string
  // 温度: '冷'
  // 糖度: '无糖'
}
interface specType {
  [key: string]: number
  // 温度: '冷'
  // 糖度: '无糖'
}

interface entityType {
  spec_id: string
  trade_mark: string
  id: string
  stock: string
  spec_text: spec_textType | any[]
  spec: specType | any[]
  image: string
  num: number
  price: number
  membership_price: number
}
export interface goodsListType {
  // [index: number]: number
  sell_time_status: number
  id: number
  is_sell: boolean
  pack_cost: string
  sales: number
  goods_type: number
  cover_img: string
  property: any[]
  goods_meals_info?: any[]
  is_add?: number
  use_spec: boolean
  entity: entityType[]
  stall_code: string
  sort: number
  price: number
  unit: string
  imageArr: string[]
  membership_price: number
  use_property: number
  unit_type: number
  min_buy_num: number
  specs: any[]
  content: string
  is_follow_suit?: number
  stock: string
  type: number
  is_label: number
  name: string
  images: string
  props_text?: string
  props?: string
}

export interface goodsType {
  // [index: number]: number
  id: number
  name: string
  sort: number
  icon: string
  is_show_backstage: number
  goods_list: goodsListType[]
  top?: number
  bottom?: number
}

export interface goodsResType {
  code: number
  msg: string
  data: goodsType[]
}
