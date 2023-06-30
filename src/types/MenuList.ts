export interface IMenuList {
  id: string
  path: string
  name: string
  routeName?: string
  icon?: any
  subMenu?: IMenuList[]
}
