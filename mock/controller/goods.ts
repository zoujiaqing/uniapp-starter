import { prefix, get } from '../requestDecorator'
import goods from '../mockdb/goods'
@prefix('/goods')
export default class Goods {
  @get('/goodsList')
  async goodsList() {
    return goods
  }
}
