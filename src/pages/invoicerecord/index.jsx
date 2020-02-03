import React from 'react'
import Head from '@@/Head'
import emptyImg from '@/assets/empty.png'
import './style.less'
export default class extends React.PureComponent {
  render () {
    return (
      <div className="pages_invoicerecord">
        <Head title="购买记录" />
        <div className="invoicerecord_body">
          <div className="invoicerecord_empty">
              <img src={emptyImg} alt=""/>
							<p>没有购买记录</p>
          </div>
        </div>
      </div>
    )
  }
}