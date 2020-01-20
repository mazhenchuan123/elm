import React, { PureComponent } from 'react'
import Head from '@@/Head'
import { detailData } from '@/constants/banlace'
import './style.less'

export default class extends PureComponent {
	render() {
		return (
			<div className="pages_balancedetail">
				<Head title="余额问题" />
				<div className="balancedetail_body">
          {
            detailData.map(v => (
              <div key={v.title}>
                <h2>{v.title}</h2>
                <p>{v.context}</p>
              </div>
            ))
          }
				</div>
      </div>
		)
	}
}

