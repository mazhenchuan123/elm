import React, { PureComponent } from 'react'
import Head from '@@/Head'
import Frame from '@@/Frame'
import emptyImg from '@/assets/empty.png'
import IconBtn from '@@/IconBtn'
import './style.less'

export default class extends PureComponent {
	handelClick = () => {
		this.props.history.push('/balance/detail')
	}
	render() {
		return (
			<div className="pages_balance">
				<Head title="我的余额" />
				<div className="balance_head">
					<Frame 
						tilte="当前余额"
						unit="元"
						money="0.00"
						btntext="提现"
						captionText="余额说明"
						handelClick={this.handelClick}
					/>
				</div>
				<div className="balance_body">
					<h6>交易明细</h6>
					<div className="balance_order">
						<div className="balance_empty">
							<img src={emptyImg} alt=""/>
							<p>暂无明细记录</p>
						</div>
					
					</div>
				</div>
      </div>
		)
	}
}

