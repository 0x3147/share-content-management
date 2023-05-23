import MyRequest from './index'

import type { IDefaultRes } from '@/types/DefaultRes'
import type { IArticle } from '@/types/ArticleList'

const getArticleList = async () => {
  return await MyRequest.get<IDefaultRes<IArticle[]>>('/article/list')
}

export default getArticleList
