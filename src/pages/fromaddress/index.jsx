import React, { PureComponent } from 'react'
import _ from 'loadsh'
import { requestPost } from '@/utils/request'
import Head from '@@/Head'
import Alert from '@@/Alert'
import Inputlist from '@@/Inputlist'
import api from '@/services/api'
import './style.less'

export default class extends PureComponent {
	state = {
		addressData: {
			name: '',
			address_detail: '1',
			address: '',
			phone: '',
			phone_bk: null,
			poi_type: 0,
			sex: 1,
			tag: "公司",
			tag_type: 4,
			geohash: '1',
		},
		visitible: false,
	}
	componentDidMount () {
		const { addressData } = this.state
		this.setState({
			addressData: {...addressData, ..._.get(this.props, 'location.state.addressData', '') }
		})
	
	}
	setName = (val) => {
		const { addressData } = this.state
		this.setState({
			addressData: {...addressData, name: val}
		})
		
	}

	searchAddrss = () => {
		const { addressData } = this.state
		this.props.history.push({ pathname: "/searchaddress", state: { addressData } })
	}

	setAddressInfo= (val) => {
		const { addressData } = this.state
		this.setState({
			addressData: {...addressData, address: val}
		})
		
	}

	setPhone= (val) => {
		const { addressData } = this.state
		this.setState({
			addressData: {...addressData, phone: val}
		})
	
	}

	setSparePhone= (val) => {
		const { addressData } = this.state
		this.setState({
			addressData: {...addressData, phone_bk: val}
		})
	
	}
	onSubmit = () => {
		if(this.isEmpty()){
			const { addressData } = this.state
			const address_detail = _.get(this.props, 'location.state.data.name', '')
			const geohash = _.get(this.props, 'location.state.data.geohash', '')
			const data = {
				...addressData,
				address_detail,
				geohash,
			}
			requestPost(api.addAddress, data)
			this.props.history.push("/address")
		} else {
			this.onShow()
		}
	}
	onCancel = () => {
		this.setState({
			visitible: false
		})
	}

	onShow = () => {
		this.setState({
			visitible: true
		})
	}

	isEmpty  ()  {
		const { addressData } = this.state
		return 	Object.values(addressData).every( v =>  v !== '')
	}
	render() {
		const { visitible, addressData } = this.state
		const address_detail = _.get(this.props, 'location.state.data.name', '')
		const name = _.get(this.props, 'location.state.addressData.name', '')
		const address = _.get(this.props, 'location.state.addressData.address', '')
		const phone = _.get(this.props, 'location.state.addressData.phone', '')
		const phone_bk = _.get(this.props, 'location.state.addressData.phone_bk', '')
		return (
			<div className="pages_formaddress">
				<Head title="新增地址" />
				<div className="formaddress_body">
					<Inputlist 
						placeholder="请填写你的姓名"
						onChange={this.setName}
						prompt="请填写您的姓名"
						values={name}
						reg={/\S/}
					/>
					<Inputlist 
						placeholder="小区/写字楼/学校等"
						onChange={this.setName}
						onClick={this.searchAddrss}
						values={address_detail}
					/>
					<Inputlist 
						placeholder="请填写详细送餐地址"
						onChange={this.setAddressInfo}
						prompt="请详细填写送餐地址"
						values={address}
						reg={/\S/}
					/>
					<Inputlist 
						placeholder="请填写能够联系到您的的手机号"
						onChange={this.setPhone}
						prompt="请输入正确的手机号"
						values={phone}
						reg={/^1[3456789]\d{9}$/}
					/>
					<Inputlist 
						placeholder="备用联系电话(选填)"
						onChange={this.setSparePhone}
						prompt="请输入正确的手机号"
						values={phone_bk}
						reg={/^1[3456789]\d{9}$/}
					/>
				
				</div>
				<div className="formaddress_foot">
					<button
						style={{color: !this.isEmpty() ? '#ccc' : 'white'}}
						onClick={this.onSubmit}
					>
						新增地址
					</button>
				</div>
				{
				 <Alert 
					title="地址信息错误" 
					visitible={visitible}
					onCancel={this.onCancel}
				 />
				}
      </div>
		)
	}
}

