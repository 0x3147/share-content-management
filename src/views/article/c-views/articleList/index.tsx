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
  const page = articleListStore.page
  const pageSize = articleListStore.pageSize
  const changePage = articleListStore.changePage
  const changePageSize = articleListStore.changePageSize
  const data = articleListStore.articleList
  const articleCount = articleListStore.articleCount

  useAsyncEffect(async () => {
    await articleListStore.queryArticleList(page, pageSize)
  }, [page, pageSize])

  useAsyncEffect(async () => {
    await articleListStore.queryArticleListCount()
  }, [])

  return (
    <div>
      <ArticleTable
        page={page}
        pageSize={pageSize}
        changePage={changePage}
        changePageSize={changePageSize}
        tableData={data}
        dataCount={articleCount}
      />
    </div>
  )
}

export default memo(ArticleList)
