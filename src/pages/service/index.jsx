import React, { PureComponent } from 'react';
import Head from '@@/Head'
import Lists from '@@/Lists'
import serviceImg1 from '@/assets/f1.png'
import serviceImg2 from '@/assets/f2.png'
import { listData } from '@/constants/service'
import './style.less'

export default class extends PureComponent {
	render() {
		return (
			<div className="pages_service">
				<Head title="服务中心" />
				<div className="service_top">
					<div style={{borderRight: '1px solid #f5f5f5'}}>
						<img src={serviceImg1} alt=""/>
						<p>在线客服</p>
					</div>
					<div>
						<img src={serviceImg2} alt=""/>
						<p>在线客服</p>
					</div>
				</div>
				<div className="service_title">热门问题</div>
				<div className="service_body">
					{
						listData.map((v) => (
							<Lists 
								title={v.title} 
								style={{fontSize: '.25rem', color: '#666'}}
								key={v.title}
								path={{ pathname: "/service/questiondetail", state: v }}
							/>
						))
					}
				</div>
      </div>
		)
	}
}

