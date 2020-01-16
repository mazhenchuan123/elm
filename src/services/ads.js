import loader from '@/utils/loader'   // 路由懒加载

export const Basic = loader(() => import('@/pages/basic'))
export const Users = loader(() => import('@/pages/users'))
export const Home = loader(() => import('@/pages/home'))
export const Profile = loader(() => import('@/pages/profile'))
export const Balance = loader(() => import('@/pages/balance'))
export const Benefit = loader(() => import('@/pages/benefit'))
export const Points = loader(() => import('@/pages/points'))
export const Order = loader(() => import('@/pages/order'))
export const Integral = loader(() => import('@/pages/integral'))
export const Vipcard = loader(() => import('@/pages/vipcard'))
export const Download = loader(() => import('@/pages/download'))
export const Service = loader(() => import('@/pages/service'))
export const Userinfo = loader(() => import('@/pages/userinfo'))