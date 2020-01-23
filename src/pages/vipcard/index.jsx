import React, { PureComponent } from 'react'
import Head from '@@/Head'
import Lists from '@@/Lists'
import { remitData } from '@/constants/vipcard'
import './style.less'

export default class extends PureComponent {

	render() {
		return (
			<div className="pages_vipcard">
				<Head title="会员中心" />
				<div className="vipcard_buy_for">
					为账户<span>lep123456</span>购买会员
				</div>
				<div className="vipcard_title">
					<Lists
						title="会员特权"
						prompt="会员说明"
						path="/vipcard/detail"
					/>
				</div>
				<div className="vipcard_remit">
					{
						remitData.map( (v,k) => (
							<div className="vipcard_remit_list" key={k}>
								<div className="remit_list_left">
									<img src={v.imgurl} />
								</div>
								<div className="remit_list_right">
									<p>{v.title}</p>
									<span>{v.info}</span>
								</div>
							</div>
						))
					}
				</div>
				<div className="vipcard_buy">
					<p className="vipcard_buy_title">开通会员</p>
					<div className="vipcard_buy_vip">
						<p>1个月 <span>￥20</span></p>
						<button>购买</button>
					</div>
				</div>
				<Lists
						title="兑换会员"
						prompt="使用卡密卡号"
						path="/vipcard/usecart"
				/>
				<div style={{margin: '10px 0'}}></div>
				<Lists
						title="购买记录"
						prompt="开发票"
						path="/invoicerecord"
				/>
      </div>
		)
	}
}

