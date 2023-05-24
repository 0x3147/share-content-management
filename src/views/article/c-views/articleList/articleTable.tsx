import React, { memo } from 'react'
import { Table, Pagination, Button } from 'rsuite'
import { useArticleListStore } from '@/store/articleListStore'

import type { FC, ReactNode } from 'react'
import type { IArticle } from '@/types/ArticleList'
import articleList from '@/views/article/c-views/articleList/index'

interface IProps {
  children?: ReactNode
  page: number
  pageSize: number
  changePage: (page: number) => void
  changePageSize: (pageSize: number) => void
  tableData: IArticle[]
  dataCount: number
}

const { Column, HeaderCell, Cell, ColumnGroup } = Table

const ArticleTable: FC<IProps> = ({
  page,
  pageSize,
  changePage,
  changePageSize,
  tableData,
  dataCount
}) => {
  const [activePage, setActivePage] = React.useState(1)

  const data = tableData.filter((v, i) => {
    const start = pageSize * (page - 1)
    const end = start + pageSize
    return i >= start && i < end
  })

  const handleChangeLimit = (dataKey: number) => {
    changePage(1)
    changePageSize(dataKey)
  }

  const handlePageChange = (dataKey: number) => {
    changePage(dataKey)
    console.log(tableData)
  }

  return (
    <>
      <Table bordered cellBordered height={520} headerHeight={60} data={data}>
        <Column width={50} align="center" fixed>
          <HeaderCell>Id</HeaderCell>
          <Cell dataKey="id" />
        </Column>

        <Column width={150} fixed fullText>
          <HeaderCell>文章标题</HeaderCell>
          <Cell dataKey="title" />
        </Column>

        <Column width={150} fullText>
          <HeaderCell>文章描述</HeaderCell>
          <Cell dataKey="description" />
        </Column>

        <Column width={200}>
          <HeaderCell>创建时间</HeaderCell>
          <Cell dataKey="createTime" />
        </Column>

        <Column width={200} flexGrow={1}>
          <HeaderCell>更新时间</HeaderCell>
          <Cell dataKey="updateTime" />
        </Column>

        <ColumnGroup align="center" verticalAlign="middle" header="操作栏">
          <Column width={80}>
            <HeaderCell>详情</HeaderCell>
            <Cell>
              {(rowData) => (
                <Button
                  appearance="link"
                  onClick={() => alert(`id:${rowData.id}`)}
                >
                  详情
                </Button>
              )}
            </Cell>
          </Column>

          <Column width={80}>
            <HeaderCell>删除</HeaderCell>
            <Cell>
              {(rowData) => (
                <Button
                  appearance="link"
                  color="red"
                  onClick={() => alert(`id:${rowData.id}`)}
                >
                  删除
                </Button>
              )}
            </Cell>
          </Column>
        </ColumnGroup>
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
          total={dataCount}
          limitOptions={[10, 20, 30]}
          limit={pageSize}
          activePage={page}
          onChangePage={handlePageChange}
          onChangeLimit={handleChangeLimit}
        />
      </div>
    </>
  )
}

export default memo(ArticleTable)
