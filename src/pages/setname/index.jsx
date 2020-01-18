import React, { PureComponent } from 'react'
import Head from '@@/Head'
import './style.less'

export default class extends PureComponent {
	state = {
		name: '',
		disabled: false,
	}
	regExp = () => {
		const { name } = this.state
		const reg = /^[\w]{5,24}$/
		reg.test(name) ? this.setState({ disabled: false }) :
			this.setState({ disabled: true })
	}
	setName = event => {
		this.setState({
			name: event.target.value
		})
	}

	render() {
		const { name, disabled } = this.state
		return (
			<div className="pages_setname">
				<Head title="修改用户名"  />
				<div className="setname_list">
					<input 
						type="text" 
						onChange={this.setName}
						onKeyUp={this.regExp}
						value={name} 
						placeholder="输入用户名"
						style={{border: disabled ? '1px solid red' : ''}}
					/>
					<p style={{color: disabled ? 'red' : ''}}>
						{disabled ? '用户名长度在5到24位之间' :  '用户名只能修改一次 (5-24字符之间)'}
					</p>
				</div>
				<div className="setname_foot">
					<button disabled={disabled} style={{color: disabled ? '#ccc' : 'white'}}>确认修改</button>
				</div>
      </div>
		)
	}
}

