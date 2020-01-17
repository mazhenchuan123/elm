import React from 'react';
import { renderRoutes } from 'react-router-config'
export default class extends React.PureComponent {
	render() {
		return (
			<div className='layoputs_users'>
					{renderRoutes(this.props.route.routes)}
			</div>
		)
	}
}


