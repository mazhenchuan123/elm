import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
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
				component: Balance,
				path: '/balance',
			},
			{
				component: Benefit,
				path: '/benefit',
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
