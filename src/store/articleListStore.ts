import { create } from 'zustand'
import getArticleList from '@/service/queryArticleList'

import type { IArticle } from '@/types/ArticleList'
import React from 'react'

interface IArticleListState {
  articleList: IArticle[]
  queryArticleList: () => Promise<void>
}

export const useArticleListStore = create<IArticleListState>((set) => ({
  articleList: [] as IArticle[],
  queryArticleList: async () => {
    const res = await getArticleList()
    await set({ articleList: res.data })
  }
}))
