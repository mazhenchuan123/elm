import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import Gird from '@@/Gird'
import Lists from '@@/Lists'
import { actionsData, listDataTop, listDataBtm } from '@/constants/profile'
import './style.less'
export default class extends PureComponent {
	render() {
		return (
			<div className="pages_profile">
				<div className="pages_profile_head">
					<div className="pages_profile_title">
						<Link to="/">
							<span className="iconfont icon-icon4"></span>
						</Link>	
						<h3>我的</h3>
					</div>
					<div className="pages_profile_info">
						<dl>
							<dt>
								<img src="//elm.cangdu.org/img/default.jpg" alt=""/>
							</dt>
							<dd>
								<h4>lep123456</h4>
								<p>
									<span className="iconfont icon-jinggao3"></span>
									暂无绑定手机号
								</p>
							</dd>
						</dl>
						<Link to="/userinfo">
							<span className="iconfont  icon-you1"></span>
						</Link>	
					</div>
				</div>
				<div className="pages_profile_actions">
					{
						actionsData.map((v, k) => (
							<Gird key={k} { ...v }/>
						))
					}
				</div>
				<div className="pages_profile_lists">
					{
						listDataTop.map((v, k) => (
							<Lists key={k} { ...v }/>
						))
					}
				</div>
				<div className="pages_profile_lists">
					{
						listDataBtm.map((v, k) => (
							<Lists key={k} { ...v }/>
						))
					}
				</div>

      </div>
		)
	}
}

