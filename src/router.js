import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import loader from '@/utils/loader'   // 路由懒加载
import { 
	Basic, 
	Users,
	Home,
	Profile,
	Balance,
	Benefit,
	Points,
	Order,
	Integral,
	Vipcard,
	Download,
	Service,
	Userinfo,
	Setname,
	Address,
	FromAddress,
	SearchAddress,
	BalanceDetail,
	PointsDetail,
	Takeaway,
	Search,
	Screening,
	Details,
} from '@/services/ads'


const routes = [
	{
		component: Users,
		path: '/users',
	},
	{
		component: Basic,
		path: '/',
		routes: [
			{
				component: Search,
				path: '/search',
			},
			{
				component: Details,
				path: '/details',
			},
			{
				component: Screening,
				path:'/screening',
			},
			{
				component: Takeaway,
				path: '/takeaway',
			},
			{
				component: BalanceDetail,
				path: '/balance/detail',
			},
			{
				component: Balance,
				path: '/balance',
			},
			{
				component: Benefit,
				path: '/benefit',
			},
		
			{
				component: PointsDetail,
				path: '/points/detail',
			},
			{
				component: Points,
				path: '/points',
			},
			{
				component: Order,
				path: '/order',
			},
			{
				component: Integral,
				path: '/integral',
			},
			{
				component: Vipcard,
				path: '/vipcard',
			},
			{
				component: Download,
				path: '/download',
			},
			{
				component: Service,
				path: '/service',
			},
			{
				component: Userinfo,
				path: '/userinfo',
			},
			{
				component: Setname,
				path: '/setname',
			},
			{
				component: Address,
				path: '/address',
			},
			{
				component: FromAddress,
				path: '/fromaddress',
			},
			{
				component: SearchAddress,
				path: '/searchaddress',
			},
			{
				component: Home,
				path: '/',
				routes: [
					{
						component: Profile,
						path: '/profile',
					},
				]
			},

		]
	
	}
]

export default class extends React.PureComponent {
	render () {
		return(
			<BrowserRouter >
				{renderRoutes(routes)}
			</BrowserRouter>
		)
	}
}
