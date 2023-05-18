import React, { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'

const Login = lazy(() => import('@/views/login'))
const BasicLayout = lazy(() => import('@/layout/basicLayout'))
const Dashboard = lazy(() => import('@/views/dashboard'))
const Users = lazy(() => import('@/views/users'))
const Article = lazy(() => import('@/views/article'))
const ArticleList = lazy(() => import('@/views/article/c-views/articleList'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/login" />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/home',
    element: <BasicLayout />,
    children: [
      {
        path: '/home',
        element: <Navigate to="/home/dashboard" />
      },
      {
        path: '/home/dashboard',
        element: <Dashboard />
      },
      {
        path: '/home/users',
        element: <Users />
      },
      {
        path: '/home/article',
        element: <Article />,
        children: [
          {
            path: '/home/article',
            element: <Navigate to="/home/article/articleList" />
          },
          {
            path: '/home/article/articleList',
            element: <ArticleList />
          }
        ]
      }
    ]
  }
]

export default routes
