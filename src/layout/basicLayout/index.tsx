import React, { memo } from 'react'
import { Outlet } from 'react-router-dom'
import { Container, Header, Content, Footer, Sidebar } from 'rsuite'
import NavSidebar from 'src/components/navSideBar'
import HeaderBar from 'src/components/headerBar'

import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const BasicLayout: FC<IProps> = () => {
  return (
    <Container className="h-full w-full">
      <Header className="h-14">
        <HeaderBar />
      </Header>
      <Container>
        <Sidebar>
          <NavSidebar />
        </Sidebar>
        <Content className="ml-2 p-2">
          <Outlet />
        </Content>
      </Container>
      <Footer className="h-9">Footer</Footer>
    </Container>
  )
}

export default memo(BasicLayout)
