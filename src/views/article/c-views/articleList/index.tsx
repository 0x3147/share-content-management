import React, { memo, useState } from 'react'
import { Table, Pagination } from 'rsuite'

import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const { Column, HeaderCell, Cell } = Table

const defaultData = Array.from({ length: 100 }).map((_, index) => ({
  id: index,
  firstName: 'firstName',
  lastName: 'lastName',
  city: 'city',
  email: 'email'
}))

const ArticleList: FC<IProps> = () => {
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)

  const data = defaultData.filter((v, i) => {
    const start = limit * (page - 1)
    const end = start + limit
    return i >= start && i < end
  })

  const handleChangeLimit = (dataKey: any) => {
    setPage(1)
    setLimit(dataKey)
  }

  return (
    <div>
      <Table height={420} data={data}>
        <Column width={50} align="center" fixed>
          <HeaderCell>Id</HeaderCell>
          <Cell dataKey="id" />
        </Column>

        <Column width={100} fixed>
          <HeaderCell>First Name</HeaderCell>
          <Cell dataKey="firstName" />
        </Column>

        <Column width={100}>
          <HeaderCell>Last Name</HeaderCell>
          <Cell dataKey="lastName" />
        </Column>

        <Column width={200}>
          <HeaderCell>City</HeaderCell>
          <Cell dataKey="city" />
        </Column>
        <Column width={200} flexGrow={1}>
          <HeaderCell>Email</HeaderCell>
          <Cell dataKey="email" />
        </Column>
      </Table>
      <div style={{ padding: 20 }}>
        <Pagination
          prev
          next
          first
          last
          ellipsis
          boundaryLinks
          maxButtons={5}
          size="xs"
          layout={['total', '-', 'limit', '|', 'pager', 'skip']}
          total={defaultData.length}
          limitOptions={[10, 30, 50]}
          limit={limit}
          activePage={page}
          onChangePage={setPage}
          onChangeLimit={handleChangeLimit}
        />
      </div>
    </div>
  )
}

export default memo(ArticleList)
