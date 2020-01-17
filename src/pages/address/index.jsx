import React, { PureComponent } from 'react'
import Head from '@@/Head'
import './style.less'

export default class extends PureComponent {
	removeAddress = () => {
		
	}
	render() {
		return (
			<div className="pages_address">
				<Head title="编辑地址" features="编辑" onRightClick={this.removeAddress} />
      </div>
		)
	}
}

