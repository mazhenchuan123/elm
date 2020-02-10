import React, { PureComponent } from 'react'
import Head from '@@/Head'
import { detailData } from '@/constants/points'
import './style.less'

export default class extends PureComponent {
	render() {
		return (
			<div className="pages_pointsdetail">
				<Head title="积分问题" />
				<div className="pointsdetail_body">
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

