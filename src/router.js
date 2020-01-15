import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Basic, Users } from '@/services/ads'

const routes = [
	{
		component: Users,
		path: '/users',
		
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
