import React from 'react';
import { renderRoutes } from 'react-router-config'
import './layouts.less'
export default class extends React.PureComponent {
	render() {
		return (
			<div className='layoputs_users'>
			  <div className="layoputs_users_box">
					{renderRoutes(this.props.route.routes)}
				</div>
			</div>
		)
	}
}
