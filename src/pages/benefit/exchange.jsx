import React, { PureComponent } from 'react'
import user from '@/actions/user'
import api from '@/services/api'
import { requestPost } from '@/utils/request'
import { hump } from '@/utils/hump'
import { GET_CAPTCHS } from '@/constants/hongbaos'
import { connect } from 'react-redux'
import Alert from '@@/Alert'
import Head from '@@/Head'
import Button from '@@/Button'
import './style.less'

export default 
@connect(state => ({
	captchas: state.user.captchas
}), {
	getCaptchas: user[hump(GET_CAPTCHS)]
})
class extends PureComponent {
  state = {
    options: {
      exchange_code: '',
      captcha_code: ''
    },
    disabled: true,
    message: '',
    visitible: false,
  }
  componentDidMount () {
    this.props.getCaptchas()
    
  }


  
  onCancel = () => {
		this.setState({
			visitible: false
		})
  }
  
  exchanggeCaptchs = () => {
    this.props.getCaptchas()
  }

  setExchange = (e) => {
    const { options } = this.state
    this.setState({
      options:{ ...options, exchange_code: e.target.value }
    })
  }

  setCaptchas = (e) => {
    const { options } = this.state
    this.setState({
      options:{ ...options, captcha_code: e.target.value }
    })
  }
  onsubmit = () => {
    const { options } = this.state
    requestPost(api.exchangeHongBaos, options)
      .then(res => {
        this.setState({
          message:res.message,
          visitible: true
        })
      })
  }
  regular = () => {
    const { options } = this.state
    options. exchange_code && options.captcha_code.length === 4 ?
      this.setState({
        disabled:false,
      }) :
      this.setState({
        disabled:true
      })
    if(options.captcha_code) {
      this.setState({
        options:{ ...options, captcha_code: options.captcha_code.slice(0,4) }
      })
    }
  }
	render() {
    const { captchas } = this.props
    const { options, disabled, message, visitible } = this.state
		return (
			<div className="pages_benefit_exchange">
				<Head title="兑换红包" />
				<div className="benefit_exchange_body">
          <div className="exchange_form_list">
            <input 
              type="text"
              placeholder="请输入兑换码"
              onChange={this.setExchange}
              value={options.exchange_code}
              onKeyUp={this.regular}
            />
          </div>
          <div className="exchange_form_list">
            <input 
              type="text"
              placeholder="验证码"
              onChange={this.setCaptchas}
              value={options.captcha_code}
              onKeyUp={this.regular}
            />
            <div className="exchange_img">
              <img src={captchas.code} alt=""/>
              <div className="exchange_exchange_btn" onClick={this.exchanggeCaptchs}>
                <p>看不清</p>
                <p style={{ 'color': '#3b95e9' }}>换一张</p>
              </div>
            </div>
          </div>
          <div className="exchange_form_list">
            <Button 
              btntext="兑换"
              style={{background: '#4cd964'}}
              disabled={disabled}
              onClick={this.onsubmit}
            />
          </div>
        </div>
        <Alert 
					title={message}
					visitible={visitible}
					onCancel={this.onCancel}
				 />
      </div>
		)
	}
}

