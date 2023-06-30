import React, { memo, useState } from 'react'
import { Sidenav, Nav } from 'rsuite'
import { useNavigate } from 'react-router-dom'
import { useMenuStore } from '@/store/menuStore'

import type { FC, ReactNode } from 'react'
import type { IMenuList } from '@/types/MenuList'

interface IProps {
  children?: ReactNode
}

/**
 * @desc 侧导航栏
 * @Author bk0x114
 * @Date 2023-03-18 21:31:04
 */
const NavSideBar: FC<IProps> = () => {
  const menuList = useMenuStore((state) => state.menus)
  const [activeKey, setActiveKey] = useState<string>('dashboard')
  const navigate = useNavigate()

  /**
   * @desc 渲染路由菜单
   * @Author bk0x114
   * @Date 2023-04-19 03:52:34
   * @param menuList 菜单列表
   */
  const routeRender = (menuList: IMenuList[]) => {
    return menuList.map((item) => {
      if (item.subMenu) {
        return (
          <Nav.Menu
            key={item.id}
            eventKey={item.routeName}
            title={item.name}
            icon={item.icon}
          >
            {item.subMenu.map((subItem) => (
              <Nav.Item
                key={subItem.id}
                eventKey={subItem.routeName}
                onSelect={(e) => handleNavigateTo(e as string, subItem.path)}
              >
                {subItem.name}
              </Nav.Item>
            ))}
          </Nav.Menu>
        )
      } else {
        return (
          <Nav.Item
            key={item.id}
            eventKey={item.routeName}
            icon={item.icon}
            onSelect={(e) => handleNavigateTo(e as string, item.path)}
          >
            {item.name}
          </Nav.Item>
        )
      }
    })
  }

  /**
   * @desc 路由跳转以及设置当前激活的菜单项
   * @Author bk0x114
   * @Date 2023-04-19 03:53:15
   * @param eventKey 菜单项的 eventKey
   * @param routeUrl 路由地址
   */
  const handleNavigateTo = (eventKey: string, routeUrl: string) => {
    setActiveKey(eventKey)
    navigate(routeUrl)
  }

  return (
    <Sidenav className="h-full">
      <Sidenav.Body>
        <Nav activeKey={activeKey}>{routeRender(menuList)}</Nav>
      </Sidenav.Body>
    </Sidenav>
  )
}

export default memo(NavSideBar)
