import React, { PureComponent } from 'react'
import _ from 'loadsh'
import user from '@/actions/user'
import { connect } from 'react-redux'
import { hump } from '@/utils/hump'
import { SEARCH_ADDRESS } from '@/constants/address'
import Head from '@@/Head'
import Search from '@@/Search'
import './style.less'

export default 
@connect(state => ({
	searchAddressData: state.user.searchAddressData
}), {
	searchaddress: user[hump(SEARCH_ADDRESS)]
})
class extends PureComponent {
	onSearch = (val) => {
		this.props.searchaddress({keyword: val})
	}

	onClick = (options) => {
		const state = _.get(this.props, 'location.state', '')
		console.log(this.props,11)
		this.props.history.push({ pathname: "/fromaddress", state: { ...state, data: options } })
	}

	render() {
		const { searchAddressData } = this.props
	
		return (
			<div className="pages_searchaddress">
				<Head title="搜索地址" />
				<div className="searchaddress_search">
					<Search placeholder="请输入小区/写字楼/学校等" onSearch={this.onSearch}/>
				</div>
				<p className="searchaddress_prompt">为了满足商家的送餐要求，建议您从列表中选择地址</p>
				<div className="searchaddress_body">
					{
						searchAddressData && searchAddressData.map(v => (
							<div 
								className="searchaddress_list" 
								key={v.latitude} 
								onClick={() => this.onClick(v)}
							>
								<p>{v.name}</p>
								<p>{v.address}</p>
							</div>
						))
					}
				</div>
      </div>
		)
	}
}

