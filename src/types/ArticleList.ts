import { IDefaultRes } from './DefaultRes'
export interface IArticle {
  id: number
  version: number
  title: string
  description: string
  content: string
  createTime: Date
  updateTime: Date
  articleType: IArticleType[]
  user: IUser[]
}

interface IArticleType {
  id: number
  articleTypeName: string
  createTime: Date
  updateTime: Date
}

interface IUser {
  id: number
  username: string
}
