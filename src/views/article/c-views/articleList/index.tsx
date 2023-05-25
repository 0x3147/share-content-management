import React, { memo } from 'react'
import useAsyncEffect from '@/hooks/useAsyncEffect'
import { useArticleListStore } from '@/store/articleListStore'
import ArticleTable from '@/views/article/c-views/articleList/articleTable'

import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const ArticleList: FC<IProps> = () => {
  const page = useArticleListStore((state) => state.page)
  const pageSize = useArticleListStore((state) => state.pageSize)
  const changePage = useArticleListStore((state) => state.changePage)
  const changePageSize = useArticleListStore((state) => state.changePageSize)
  const data = useArticleListStore((state) => state.articleList)
  const articleCount = useArticleListStore((state) => state.articleCount)
  const queryArticleList = useArticleListStore(
    (state) => state.queryArticleList
  )
  const queryArticleListCount = useArticleListStore(
    (state) => state.queryArticleListCount
  )

  useAsyncEffect(async () => {
    await queryArticleList(page, pageSize)
  }, [page, pageSize, articleCount])

  useAsyncEffect(async () => {
    await queryArticleListCount()
  }, [data])

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
