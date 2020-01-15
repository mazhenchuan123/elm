import loader from '@/utils/loader'   // 路由懒加载

export const Basic = loader(() => import('@/pages/basic'))
export const Users = loader(() => import('@/pages/users'))