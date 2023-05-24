import { create } from 'zustand'
import { getArticleList, getArticleListCount } from '@/service/queryArticleList'

import type { IArticle } from '@/types/ArticleList'
import React from 'react'

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
  articleList: [] as IArticle[],
  articleCount: 0,
  page: 1,
  pageSize: 10,
  changePage: (page: number) => set({ page }),
  changePageSize: (pageSize: number) => set({ pageSize }),
  queryArticleList: async (page: number, pageSize: number) => {
    const res = await getArticleList(page, pageSize)
    await set({ articleList: res.data })
  },
  queryArticleListCount: async () => {
    const res = await getArticleListCount()
    await set({ articleCount: res.data })
  }
}))
