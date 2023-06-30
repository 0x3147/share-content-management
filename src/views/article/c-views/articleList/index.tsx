import React, { memo } from 'react'
import useAsyncEffect from '@/hooks/useAsyncEffect'
import { useArticleListStore } from '@/store/articleListStore'
import ArticleTable from '@/views/article/c-views/articleList/articleTable'

import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

/**
 * @desc 文章列表页
 * @Author bk0x114
 * @Date 2023-06-26 16:28:11
 */
const ArticleList: FC<IProps> = () => {
  const {
    articleList,
    articleCount,
    page,
    pageSize,
    changePage,
    changePageSize,
    queryArticleList,
    queryArticleListCount
  } = useArticleListStore((state) => ({
    articleList: state.articleList,
    articleCount: state.articleCount,
    page: state.page,
    pageSize: state.pageSize,
    changePage: state.changePage,
    changePageSize: state.changePageSize,
    queryArticleList: state.queryArticleList,
    queryArticleListCount: state.queryArticleListCount
  }))
  // const page = useArticleListStore((state) => state.page)
  // const pageSize = useArticleListStore((state) => state.pageSize)
  // const changePage = useArticleListStore((state) => state.changePage)
  // const changePageSize = useArticleListStore((state) => state.changePageSize)
  // const data = useArticleListStore((state) => state.articleList)
  // const articleCount = useArticleListStore((state) => state.articleCount)
  // const queryArticleList = useArticleListStore(
  //   (state) => state.queryArticleList
  // )
  // const queryArticleListCount = useArticleListStore(
  //   (state) => state.queryArticleListCount
  // )

  useAsyncEffect(async () => {
    await queryArticleList(page, pageSize)
  }, [page, pageSize, articleCount])

  useAsyncEffect(async () => {
    await queryArticleListCount()
  }, [articleList])

  return (
    <div>
      <ArticleTable
        page={page}
        pageSize={pageSize}
        changePage={changePage}
        changePageSize={changePageSize}
        tableData={articleList}
        dataCount={articleCount}
      />
    </div>
  )
}

export default memo(ArticleList)
