import React, { PureComponent } from 'react'
import Head from '@@/Head'
import Alert from '@@/Alert'
import commendImg from '@/assets/commend.png'
import wechatImg from '@/assets/wechat.png'
import qqImg from '@/assets/qq.png'
import maImg from '@/assets/ma.png'
import baoImg from '@/assets/bao.png'
import './style.less'

export default class extends PureComponent {
  state = {
    visitible: false,
  }
  onShow = () => {
		this.setState({
			visitible: true
		})
  }
  
  onCancel = () => {
		this.setState({
			visitible: false
		})
	}
  
	render() {
    const { visitible } = this.state
		return (
			<div className="pages_benfit_commend">
				<Head title="推荐有奖" />
				<div className="benfit_commend_body">
         <div className="commend_img">
           <img src={commendImg} alt=""/>
         </div>
         <div className="benfit_commend_list">
           <dl onClick={this.onShow}>
             <dt><img src={wechatImg} alt=""/></dt>
             <dd>邀请微信好友</dd>
           </dl>
           <dl onClick={this.onShow}>
             <dt><img src={qqImg} alt=""/></dt>
             <dd>邀请QQ好友</dd>
           </dl>
           <dl onClick={this.onShow}>
             <dt><img src={maImg} alt=""/></dt>
             <dd>面对面邀请</dd>
           </dl>
         </div>
         <div className="befit_commend_invite">
           <div className="befit_commend_num"style={{borderRight:'1px solid #ccc'}} >
             <p>累计收益</p>
             <p><span>0</span>元</p>
           </div>
           <div className="befit_commend_num">
             <p>成功邀请</p>
             <p><span style={{color:'#666'}}>0</span>人</p>
           </div>
         </div>
         <p className="befit_commend_detail">-收益明细-</p>
         <dl className="befit_commend_tips">
           <dt><img src={baoImg} alt=""/></dt>
           <dd>还不赶快去邀请好友</dd>
         </dl>
				</div>
        <Alert 
					title="请在饿了么app打开" 
					visitible={visitible}
					onCancel={this.onCancel}
				 />
      </div>
		)
	}
}

