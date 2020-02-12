import React, { PureComponent } from 'react'
import Head from '@@/Head'
import { detailData } from '@/constants/points'
import './style.less'

export default class extends PureComponent {
	render() {
		return (
			<div className="pages_vipcarddetail">
        <Head title="我的优惠" />
				<div className="vipcarddetail_body">
          <h4>
            尊敬的用户，随着会员体系逐渐完善，自2016年10月10日起，饿了么会员权益将做如下优化： 
            购卡后31天内，累积享有30单减免配送费服务（每日最多3单，每单最高减免4元）。 
            注：已购买的会员服务不受影响，当前会员服务失效前无法购买新卡。
          </h4>
          {
            detailData.map(v => (
              <div key={v.title}>
                <h2>{v.title}</h2>
                {
                  v.context.map(val => (
                    <p key={val}>{val}</p>
                  ))
                }
              </div>
            ))
          }
				</div>
      </div>
		)
	}
}

