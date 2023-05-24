import MyRequest from './index'

import type { IDefaultRes } from '@/types/DefaultRes'
import type { IArticle } from '@/types/ArticleList'

export const getArticleList = async (page: number, pageSize: number) => {
  return await MyRequest.get<IDefaultRes<IArticle[]>>(
    `/article/list?page=${page}&pageSize=${pageSize}`
  )
}

export const getArticleListCount = async () => {
  return await MyRequest.get<IDefaultRes<number>>('/article/list/count')
}
