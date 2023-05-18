import React, { memo } from 'react'
import { Loader, Placeholder } from 'rsuite'

import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

/**
 * @desc loading组件
 * @Author 康佳星
 * @Date 2023-05-18 21:46:26
 */
const Loading: FC<IProps> = () => {
  return (
    <div>
      <Placeholder.Paragraph rows={8} />
      <Loader center content="loading" />
    </div>
  )
}

export default memo(Loading)
