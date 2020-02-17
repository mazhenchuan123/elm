import React from 'react';
import './style.less'
import { connect } from 'react-redux'
import  getCeshi  from '@/actions/login'
// import User from '@/components/User'
import { IMG, DWCITY } from '@/constants/actionTypes'
import string from '@/utils/string'

import Head from '@/components/Head'
import Inputlist from '@@/Inputlist'
import Alert from '@@/Alert'

export default @connect((state) => ({
    adr: state.login
}),{
	IMG: getCeshi[string(IMG)],
	DWcity: getCeshi[string(DWCITY)]
}) class extends React.Component {
    constructor(props){
		super(props)
		this.state = {
			username: '',
            password: '',
			captcha_code: '',
			visitible: false,

			hide:'···'
		}
		props.IMG()
	}

	onName = e => {
		this.setState({
			username: e
		})	
	}
	onPass = e => {
		this.setState({
			password: e
		})	
	}
	onYan = e => {
		this.setState({
			captcha_code: e
		})	
	}
	//设置一个弹出框的状态
	onShow = () => {
		this.setState({
			visitible: true
		})
	}
	//点击弹出框关闭
	onCancel = () => {
		this.setState({
			visitible: false
		})
	}
	//点击切换验证码
	onImgs = () => {
		this.props.IMG()
	}
	//点击登录 
	btn = () => {
		this.props.DWcity(this.state).then(res => {
            if(res.payload.status == 0){
				this.onShow()
            }else{
                
            }
        })
	}
	//点击显示密码
	
	render() {
		console.log()
		return (
			<div className="res">
				<header>
					<Head title="密码登录"/>
				</header>
				<section>
					<div>
						<Inputlist 
							placeholder="账号"
							onChange={this.onName}
							values={this.state.username}
						/>
						<Inputlist 
							type="password"
							placeholder="密码"
							onChange={this.onPass}
							values={this.state.password}
						/>
						<Inputlist 
							placeholder="验证码"
							onChange={this.onYan}
							values={this.state.captcha_code}
						/>
						<p className="ps">
							温馨提示：未注册过的账号，登录时将自动注册
						</p>
						<p className="ps">	
							注册过的用户可凭账号密码登录
						</p>
						<button onClick={this.btn} className="btn">
							确定
						</button>
						{/*验证码定位 */}
						<span className="ys">
							<span className="ys-left">
								<img src={this.props.adr.yan.code}/>
							</span>
							<span className="ys-right" onClick={this.onImgs}>
								看不清<br/>
								<span>换一张</span>
							</span>
						</span>
						{/*显示密码定位 */}
						<button onClick={this.open} className="open">
							{this.state.hide}
						</button>
					</div>
				</section>
				{
					/*弹出框 */
				 <Alert 
					title={this.props.adr.userInfo.message}
					visitible={this.state.visitible}
					onCancel={this.onCancel}
				/>
				}
			</div>
		)
	}
}



