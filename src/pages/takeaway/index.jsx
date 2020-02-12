import React, { Component } from 'react';
import {connect } from 'react-redux'
import { Icon } from "antd"
import {home} from '@/actions/home'
import Userlist from '@@/userlist'
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
// 11
class extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: []
		}
		axios.get('https://elm.cangdu.org/v2/index_entry')
			.then(res => {
				this.setState({
					data: res.data
				},()=>{
					this.state.data.length=8
				})
			})
		this.props.home()
	}
	food = e => {
		console.log(e)
		console.log(this.props)
		// this.props.histoey.push('/users/screening')
		this.props.history.push({ pathname: '/screening', state: e ,stata:this})
  	}
  
	render() {
    const { data = [] } = this.state
    const { date = []} = this.props
    console.log(data)
    ////elm.cangdu.org/img//d/49/7757ff22e8ab28e7dfa5f7e2c2692jpeg.jpeg
                         // 164ad0b6a3917599.jpg
                         //https://fuss10.elemecdn.com/d/49/7757ff22e8ab28e7dfa5f7e2c2692jpeg.jpeg
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
								let img = "https://fuss10.elemecdn.com" + v.image_url
								return (
									<div key={k} className="food" onClick={() => this.food(v.title)}>
										<img src={img} className="headimg"/>
										<p>{v.title}</p>
									</div>
								)
							})
						}
					</div>
          <div className="secinfo">
            <p>附近商家</p>
            <Userlist date={date} />
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


