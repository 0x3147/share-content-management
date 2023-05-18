import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const ArticleList: FC<IProps> = () => {
  return <div>ArticleList</div>
}

export default memo(ArticleList)
