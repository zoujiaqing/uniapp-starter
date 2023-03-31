export interface userInfoType {
  cookies: any[]
  data: Data2Type
  errMsg: string
  header: HeaderType
  statusCode: number
}

interface HeaderType {
  Vary: string
  'Access-Control-Allow-Origin': string
  'Content-Type': string
  'Content-Length': string
  Date: string
  'Keep-Alive': string
  Connection: string
}

interface Data2Type {
  code: number
  msg: string
  data: DataType
}

interface DataType {
  avatar: string
  email: string
  id: number
  introduction: string
  name: string
  password: string
  phone: string
  roles: string[]
  username: string
}
