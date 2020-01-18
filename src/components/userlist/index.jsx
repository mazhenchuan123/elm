import React, { Component } from 'react';
import './style.less'
import defaultImg from './b3.gif'
export default class extends Component {
    onError = e => {
        e.target.setAttribute('src', defaultImg)
    }
    render() {
        const { date } = this.props
        return (
            date.map((v,k) => {
                let img = '//elm.cangdu.org/img/'+ v.license.business_license_image
                return (
                  <div key={k} className="secinfolist">
                    <img src={img} onError={this.onError} className="infoimg" />
                    <ul className="details">
                      <li className="shopname">
                        <p className="brandID">品牌</p>
                        <p className="shopnames">{v.name}</p>
                        <span>保准票</span>
                      </li>
                      <li className="express">
                        <p className="press">
                          {v.rating}
                          月销{v.recent_order_num}
                        </p>
                        <p className="type">
                          <span className="fn">蜂鸟专送</span>
                          <span className="zs">准时达</span>
                        </p>
                      </li>
                      <li className="fist">
                        <p className="price">￥20起送 / {v.piecewise_agent_fee.tips}</p>
                        <p className="time">{v.distance} / <span className="times" style={{color:'#3190e8'}}> {v.order_lead_time} </span></p>
                      </li>
                    </ul>
                  </div>
                )
              })
        )
    }
}
