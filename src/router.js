import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import loader from '@/utils/loader'   // 路由懒加载
import { Basic, Users } from '@/services/ads'

const Takeaway = loader(() => import('@/pages/takeaway'))
const Search = loader(() => import('@/pages/search'))
const Screening = loader(() => import('@/pages/screening'))
const routes = [
	{
		component: Users,
		path: '/users',
		routes: [
			
			{
				component: Search,
				path: '/users/search',
			},
			{
				component: Screening,
				path:'/users/screening',
			},
			{
				component: Takeaway,
				path: '/users',
			}
		]
		
	},
	{
		component: Basic,
		path: '/',
	
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
