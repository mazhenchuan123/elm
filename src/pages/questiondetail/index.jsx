import React, { PureComponent } from 'react'
import _ from 'loadsh'
import Head from '@@/Head'
import './style.less'

export default class extends PureComponent {
	
	render() {
		console.log(this.props)
		const data = _.get(this.props, 'location.state')
		return (
			<div className="pages_questiondetail">
				<Head title={data.title} />
				<div className="questiondetail_body">
					{
						data.content
					}
				</div>
      </div>
		)
	}
}

