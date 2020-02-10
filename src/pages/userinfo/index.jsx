import React, { PureComponent } from 'react'
import Head from '@@/Head'
import Lists from '@@/Lists'

import { listDataTop, listDataBtm } from '@/constants/userinfo'
import api from '@/services/api'
import { requestGet } from '@/utils/request'
import './style.less'

export default class extends PureComponent {
	onsignOut = () => {
		requestGet(api.signout)
			.then( res => {
			
			})

	}
	render() {
		return (
			<div className="pages_userinfo">
				<Head title="账户信息" />
				<div className="pages_userinfo_body">
					<div className="pages_userinfo_avatar">
						<div className="userinfo_avatar_img">
							<p>头像</p>
							<span>
								<img src="//elm.cangdu.org/img/default.jpg" alt=""/>
								<label className="iconfont icon-you1"></label>
							</span>
						</div>
					</div>
					{
						listDataTop.map(v => (
							<Lists {...v} key={v.title} />
						))
					}
				
					{
						listDataBtm.map(v => (
							<React.Fragment key={v.title}>
								<p className="userinfo_prompt">{v.label}</p>
								<Lists {...v} />
							</React.Fragment>
						))
					}
				</div>
				<div className="pages_userinfo_foot">
					<button onClick={this.onsignOut}>退出登录</button>
				</div>
				
      </div>
		)
	}
}

