// RequestOptions 申明
export type RequestOptionsMethod = 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT'

// 约束小写 Lowercase
export type RequestOptionsMethodAll = RequestOptionsMethod | Lowercase<RequestOptionsMethod>

// export const requestOptions: RequestOptionsMethodAll[] = [
//   'options',
//   'get',
//   'post',
//   'put',
//   'head',
//   'delete',
//   'trace',
//   'connect',
// ]
// type Methods = (typeof requestOptions)[number]
