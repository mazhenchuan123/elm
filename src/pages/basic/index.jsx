import React, { PureComponent } from 'react';
import { renderRoutes } from 'react-router-config'
import './style.less'
export default class extends PureComponent {

	render() {
		return (
			<div className="pages_basic">
				{renderRoutes(this.props.route.routes)}
      </div>
		)
	}
}

