import React, { PureComponent } from 'react';
import './style.less'
import Head from '@@/Head'

export default class extends PureComponent {
	state= {
		msg: ''
	}
	countDown = () => {
		function time () {
		const maxtime = 15 * 60 
		if (maxtime >= 0) {
			let	minutes = Math.floor(maxtime / 60)
			let	seconds = Math.floor(maxtime % 60)
				this.setState({
					msg: `00:${minutes}:${seconds}`
				})

		} else{
			clearInterval(timer)
		}
		}
		
		let	timer = setInterval(time, 1000) 
	}
	
	render() {
		return (
			<div className="pages_payment">
					<Head title="在线支付" />
					<div className="payment_time">
						<p className="payment_time_title">支付剩余时间</p>
						<h2>{this.state.msg}</h2>
					</div>
      </div>
		)
	}
}

