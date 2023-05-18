import React, { memo } from 'react'
import { useBearStore } from '@/store/counterStore'
import { Button, ButtonToolbar } from 'rsuite'

import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Dashboard: FC<IProps> = () => {
  const bears = useBearStore((state) => state.bears)

  const increment = useBearStore((state) => state.increment)

  const decrement = useBearStore((state) => state.decrement)

  return (
    <div>
      <p>dashboard</p>
      <p>zustand 测试用例</p>
      <p>{bears}</p>
      <ButtonToolbar>
        <Button appearance="primary" onClick={increment}>
          +
        </Button>
        <Button appearance="primary" onClick={decrement}>
          -
        </Button>
      </ButtonToolbar>
    </div>
  )
}

export default memo(Dashboard)
