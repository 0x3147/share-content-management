import { create } from 'zustand'
import DashboardIcon from '@rsuite/icons/legacy/Dashboard'
import GroupIcon from '@rsuite/icons/legacy/Group'
import ParagraphIcon from '@rsuite/icons/Paragraph'
import React from 'react'

import type { IMenuList } from '@/types/MenuList'

interface IMenuState {
  menus: IMenuList[]
}

export const useMenuStore = create<IMenuState>()((set) => ({
  menus: [
    {
      id: '1',
      path: '/home/dashboard',
      name: '首页',
      routeName: 'dashboard',
      icon: <DashboardIcon />
    },
    {
      id: '2',
      path: '/home/users',
      name: '用户管理',
      routeName: 'users',
      icon: <GroupIcon />
    },
    {
      id: '3',
      path: '/home/article',
      name: '文章管理',
      routeName: 'article',
      icon: <ParagraphIcon />,
      subMenu: [
        {
          id: '3-1',
          path: '/home/article/articleList',
          name: '文章列表',
          routeName: 'articleList'
        },
        {
          id: '3-2',
          path: '/home/article/newArticle',
          name: '新建文章',
          routeName: 'newArticle'
        }
      ]
    }
  ]
}))
