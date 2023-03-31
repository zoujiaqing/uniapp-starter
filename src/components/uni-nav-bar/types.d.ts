// ?: HeightProperty<string | number> | undefined
// 利用泛型来指定传入什么类型，返回即同类型
export type HeightProperty<TLength> = TLength | string
