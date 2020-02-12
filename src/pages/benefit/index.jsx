import React, { PureComponent } from 'react'
import IconBtn from '@@/IconBtn'
import Head from '@@/Head'
import Card from '@@/Card'
import user from '@/actions/user'
import { hump } from '@/utils/hump'
import { GET_HONGBAOS } from '@/constants/hongbaos'
import { connect } from 'react-redux'
import './style.less'

export default 
@connect(state => ({
	hongBaosData: state.user.hongBaosData
}), {
	gethongbaos: user[hump(GET_HONGBAOS)]
})
class extends PureComponent {
	state = {
		active: 1
	}
	componentDidMount () {
		const options = {
			limit: 20,
			offset: 0,
		}
		this.props.gethongbaos(options)
	}

	switchActive = () => {
		const { active } = this.state
		if(active == 1) {
			this.setState({
				active: 2
			})
		} else {
			this.setState({
				active: 1
			})
		}
	}
	handelClick =() => {
		this.props.history.push('/benefit/detail')
	}
	goHistory = () => {
		this.props.history.push('/benefit/history')
	}
	render() {
		const { active } = this.state
		const { hongBaosData } = this.props

		return (
			<div className="pages_benefit">
				<Head title="我的优惠" />
				<div className="benefit_nav">
					<p>
						<span 
							className={ active == 1 ? 'active' : ''}
							onClick={this.switchActive}
						>
							红包
						</span>
					</p>
					<p>
						<span 
							className={ active == 2 ? 'active' : ''}
							onClick={this.switchActive}
						>
							商家代金券
						</span>
					</p>
				</div>
				<div className="benefit_body">
					{
						active == 1 ? (
							<div className="benfit_redenvelope">
								<div className="benfit_redenvelope_body">
										<div className="benfit_num">
											<p>有<span>{hongBaosData && hongBaosData.length}</span>个红包即将到期</p>
											<IconBtn 
												text="红包说明"
												iconClass="icon-shuoming"
												onClick={this.handelClick}
											/>
										</div>
										<div className="benfit_list_box">
											{
												hongBaosData.map(v => (
													<Card {...v} key={v.money}/>
												))
											}
										</div>
										<div className="benfit_history" onClick={this.goHistory}>
											<span>查看历史红包</span> <span className="iconfont icon-you1"></span>
										</div>
									</div>
								<div className="benefit_redenvelope_foot">
									<p style={{ borderRight: '1px solid #f5f5f5' }}>兑换红包</p>
									<p>推荐有奖</p>
								</div>
							</div>
						) : (
							<div className="benfit_voucher">
								<div className="benfit_voucher_body">
								
								</div>
							</div>
						)
					}
				</div>
			
      </div>
		)
	}
}

