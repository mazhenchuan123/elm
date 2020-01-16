import orderImg  from '@/assets/user1.png'
import integralImg  from '@/assets/user2.png'
import vipcardImg  from '@/assets/user3.png'
import serviceImg  from '@/assets/user4.png'
import downloadImg  from '@/assets/user5.png'
export  const actionsData = [
  {
    money: '0.00', 
    title: '我的余额', 
    color: '#f90', 
    unit: '元',
    path: '/balance',
  },
  {
    money: '3', 
    title: '我的优惠', 
    color: '#ff5f3e', 
    unit: '个',
    path: '/benefit',
  },
  {
    money: '0', 
    title: '我的积分', 
    color: '#6ac20b', 
    unit: '分',
    path: '/points',
  }
]

export  const listDataTop = [
  {
    imgurl: orderImg, 
    title: '我的订单',
    path: '/order',
  },
  {
    imgurl: integralImg, 
    title: '积分商城',
    path: '/integral', 
  },
  {
    imgurl: vipcardImg, 
    title: '饿了么会员',
    path: '/vipcard',
  },
]

export  const listDataBtm = [
  {
    imgurl: serviceImg, 
    title: '服务中心',
    path: '/service',
  },
  {
    imgurl: downloadImg, 
    title: '下载饿了么APP',
    path: '/download',
  },
]


