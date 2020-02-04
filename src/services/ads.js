import loader from '@/utils/loader'   // 路由懒加载

export const Basic = loader(() => import('@/pages/basic'))
export const Users = loader(() => import('@/pages/users'))
export const Home = loader(() => import('@/pages/home'))
export const Profile = loader(() => import('@/pages/profile'))
export const Balance = loader(() => import('@/pages/balance'))
export const BalanceDetail = loader(() => import('@/pages/balance/detail'))
export const Benefit = loader(() => import('@/pages/benefit'))
export const BenefitDetail = loader(() => import('@/pages/benefit/detail'))
export const BenefitHistory= loader(() => import('@/pages/benefit/history'))
export const BenefitCommend= loader(() => import('@/pages/benefit/commend'))
export const BenefitExchange= loader(() => import('@/pages/benefit/exchange'))
export const Points = loader(() => import('@/pages/points'))
export const PointsDetail = loader(() => import('@/pages/points/detail'))
export const Order = loader(() => import('@/pages/order'))
export const Integral = loader(() => import('@/pages/integral'))
export const Vipcard = loader(() => import('@/pages/vipcard'))
export const VipcardDetail = loader(() => import('@/pages/vipcard/detail'))
export const Download = loader(() => import('@/pages/download'))
export const Service = loader(() => import('@/pages/service'))
export const Userinfo = loader(() => import('@/pages/userinfo'))
export const Setname = loader(() => import('@/pages/setname'))
export const Address = loader(() => import('@/pages/address'))
export const FromAddress = loader(() => import('@/pages/fromaddress'))
export const SearchAddress = loader(() => import('@/pages/searchaddress'))
export const InvoiceRecord = loader(() => import('@/pages/invoicerecord'))
export const Usecart = loader(() => import('@/pages/usecart'))
export const Payment = loader(() => import('@/pages/payment'))
export const QuestionDetail = loader(() => import('@/pages/questiondetail'))
