import React, { PureComponent } from 'react'
import user from '@/actions/user'
import { connect } from 'react-redux'
import { hump } from '@/utils/hump'
import { GET_ADDRESS } from '@/constants/userinfo'
import { requestDelete } from '@/utils/request'
import Head from '@@/Head'
import Lists from '@@/Lists'
import './style.less'

export default 
@connect(state => ({
	addressData: state.user.addressData
}), {
	getaddress: user[hump(GET_ADDRESS)]
})
class extends PureComponent {
	state={
		remove: false,
		title: '编辑',
	}

	componentDidMount () {
		this.props.getaddress(47248)
	}

	editAddress = () => {
		const { remove } = this.state
		this.setState({
			remove: !remove,
		}, () => {
			this.state.remove ? this.setState({ title: '完成'	}) : 	this.setState({ title: '编辑'	})
		})
	}
	removeAddress = (id) => {
		requestDelete(`/api/v1/users/${47248}/addresses/${id}`)
			.then( res => {
				this.props.getaddress(47248)
			})
	}
	goAddress = () => {
		this.props.history.push('/fromaddress')
	}
	render() {
		const { addressData } = this.props
		const { remove, title } = this.state
		return (
			<div className="pages_address">
				<Head title="编辑地址" features={title} onRightClick={this.editAddress} />
				<div className="pages_address_list">
					{
						addressData.map(v => (
							<div key={v.id} className="addrss_list_box">
								<div className="address_list_left">
									<p>{v.address}</p>
									<p>{v.phone}</p>
								</div>
								<span 
									style={{ display: remove ? 'block' : 'none'}}
									onClick={() => this.removeAddress(v.id)}
								>
									X
								</span>
							</div>
						))
					}
				</div>

				<div className="address_add" onClick={this.goAddress}>
					<Lists title='新增地址' />
				</div>
      </div>
		)
	}
}

