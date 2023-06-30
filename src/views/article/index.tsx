import React, { memo, Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Loading from '@/components/loading'

import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Article: FC<IProps> = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Outlet />
    </Suspense>
  )
}

export default memo(Article)
