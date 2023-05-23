import React, { memo, useState } from 'react'
import useAsyncEffect from '@/hooks/useAsyncEffect'
import { useArticleListStore } from '@/store/articleListStore'
import ArticleTable from '@/views/article/c-views/articleList/articleTable'

import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const ArticleList: FC<IProps> = () => {
  const articleListStore = useArticleListStore()

  useAsyncEffect(async () => {
    await articleListStore.queryArticleList()
  }, [])

  return (
    <div>
      <ArticleTable />
    </div>
  )
}

export default memo(ArticleList)
