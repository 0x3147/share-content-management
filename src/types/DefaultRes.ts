export interface IDefaultRes<T = []> {
  code: number
  success: boolean
  data?: T
  resTime?: Date
  message?: string
  timeStamps?: Date
}
