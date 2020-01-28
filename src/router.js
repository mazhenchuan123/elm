import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Basic, Users, City, Grt } from '@/services/ads'

const routes = [
	{
		component: Users,
		path: '/users',
	},
	{
		component: City,
		path: '/city',
		routes: [
			{
				component: Grt,
				path: '/city/grt'
			}
		]	
	},
	{
		component: Basic,
		path: '/',
		routes: [
			{
				component: Grt,
				path: '/grt'
			},
			{
				component: City,
				path: '/city',
			},	
		]
	}
]

export default class extends React.Component {
	render () {
		return(
			<BrowserRouter >
				{renderRoutes(routes)}
			</BrowserRouter>
		)
	}
}
