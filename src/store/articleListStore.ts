import { create } from 'zustand'
import produce from 'immer'
import { getArticleList, getArticleListCount } from '@/service/articleListApis'

import type { IArticle } from '@/types/ArticleList'

interface IArticleListState {
  articleList: IArticle[]
  articleCount: number
  page: number
  pageSize: number
  changePage: (page: number) => void
  changePageSize: (pageSize: number) => void
  queryArticleList: (page: number, limit: number) => Promise<void>
  queryArticleListCount: () => Promise<void>
}

export const useArticleListStore = create<IArticleListState>((set) => ({
  articleList: [] as IArticle[], // 文章列表
  articleCount: 0, // 文章总数
  page: 1, // 当前页码
  pageSize: 10, // 每页条数
  // 改变页码
  changePage: (page: number) => set({ page }),
  // 改变每页条数
  changePageSize: (pageSize: number) => set({ pageSize }),
  // 获取文章列表
  queryArticleList: async (page: number, pageSize: number) => {
    const res = await getArticleList(page, pageSize)
    const tableData = res.data as IArticle[]
    set(
      produce((state: IArticleListState) => {
        state.articleList = [...state.articleList, ...tableData]
      })
    )
  },
  // 获取文章总数
  queryArticleListCount: async () => {
    const res = await getArticleListCount()
    set(
      produce((state: IArticleListState) => {
        state.articleCount = res.data as number
      })
    )
  }
}))
