import React, { PureComponent } from 'react'
import Head from '@@/Head'
import Frame from '@@/Frame'
import emptyImg from '@/assets/empty.png'
import IconBtn from '@@/IconBtn'
import './style.less'

export default class extends PureComponent {
	handelClick = () => {
		this.props.history.push('/points/detail')
	}
	render() {
		return (
			<div className="pages_points">
				<Head title="我的积分" />
				<div className="points_head">
					<Frame 
						tilte="当前余额"
						unit="分"
						money="0"
						btntext="积分兑换商品"
						captionText="积分说明"
						handelClick={this.handelClick}
					/>
				</div>
				<div className="points_body">
					<h6>最近30天积分记录</h6>
					<div className="points_order">
						<div className="points_empty">
							<img src={emptyImg} alt=""/>
							<p>最近30天无积分记录</p>
							<span>快去下单赚取大量积分吧</span>
						</div>
					
					</div>
				</div>
      </div>
		)
	}
}

