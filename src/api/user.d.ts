interface HeaderType {
  Vary: string
  'Access-Control-Allow-Origin': string
  'Content-Type': string
  'Content-Length': string
  Date: string
  'Keep-Alive': string
  Connection: string
}

interface DataType {
  id: number
  username: string
  password: string
  name: string
  avatar: string
  introduction: string
  email: string
  phone: string
  roles: string[]
}

export interface userInfoType {
  code: number
  msg: string
  data: DataType
}

export interface userInfoErrType {
  cookies: any[]
  data: userInfoType
  errMsg: string
  header: HeaderType
  statusCode: number
}
