import React, { Component } from 'react';
import {connect } from 'react-redux'
import { Icon } from "antd"
import defaultImg from './b3.gif'
import {home} from '@/actions/home'
import axios from 'axios'
import './style.less'
console.log(home.ceshi)
export default
@connect((state => {
	return {
    date:state.index.data
  }
}),{
	home:home.ceshi
})
class extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: []
		}
		axios.get('index.json')
			.then(res => {
				this.setState({
					data: res.data
				})
			})
		this.props.home()
	}
	food = e => {
		console.log(e)
  }
  onError = e => {
    e.target.setAttribute('src', defaultImg)
  }
	render() {
		console.log(this.props)
    const { data = [] } = this.state
    const { date = []} = this.props
    console.log(this.props.date)
    ////elm.cangdu.org/img//d/49/7757ff22e8ab28e7dfa5f7e2c2692jpeg.jpeg
                         // 164ad0b6a3917599.jpg
                         //https://fuss10.elemecdn.com/
		return (
			<div className="takeaway">
				<header>
					<p><img src="/image/a1.png" /></p>
					<div className="takeawayHead">
						地址
          </div>
					<p><img src="/image/a2.png" /></p>
				</header>
				<section>
					<div className="secHead">
						{
							data.map((v, k) => {
								return (
									<div key={k} className="food" onClick={() => this.food(v.name)}>
										<img src={v.img} />
										<p>{v.name}</p>
									</div>
								)
							})
						}
					</div>
          <div className="secinfo">
            <p>附近商家</p>
            {
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
            }
          </div>

				</section>
				<footer>
						<p><Icon type="google" /><span>外卖</span></p>
						<p><Icon type="google" /><span>搜索</span></p>
						<p><Icon type="google" /><span>订单</span></p>
						<p><Icon type="google" /><span>我的</span></p>
				</footer>
			</div>
		)
	}
}


