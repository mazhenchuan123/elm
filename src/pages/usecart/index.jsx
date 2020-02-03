import React from 'react'
import Head from '@@/Head'
import Button from '@@/Button'
import './style.less'
export default class extends React.PureComponent {
  state = {
    obj: {
      account: '',
      password: '',
    }
  }

  regExp = () => {
    // const { reg } = this.props
		// const { value } = this.state
    // reg && reg.test(value) ? this.setState({ disabled: false }) :
		// 	this.setState({ disabled: true })
  }
  
  setAccount = () => {

  }
  render () {
    const { obj } = this.state
    return (
      <div className="pages_usecart">
        <Head title="兑换会员" />
        <div className="usecart_buy_for">
          成功兑换后将关联到当前帐号：<span>lep123456</span>
				</div>
        <div className="usecart_body">
          <input 
            type="text" 
            placeholder="请输入10位卡号"
            onChange={this.setAccount}
            value={obj.account}
            onKeyUp={this.regExp}
          />
           <input 
            type="text" 
            placeholder="请输入6位卡密"
            onChange={this.setAccount}
            value={obj.account}
            onKeyUp={this.regExp}
          />
        </div>
        <div className="usecart_btn">
          <Button disabled btntext="兑换"/>
        </div>
        <div className="usecart_foot">
          <h4>——— 温馨提示 ———</h4>
          <p>新兑换的会员服务，权益以「会员说明」为准。</p>
          <p>月卡：30次减免配送费。</p>
          <p>季卡：90次减免配送费。</p>
          <p>年卡：360次减免配送费。</p>
          <p>＊仅限蜂鸟专送订单，每日最多减免3单，每单最高减免4元（一个月按31天计算）</p>
        </div>
      </div>
    )
  }
}