import React, { Component } from 'react';
import { connect } from 'react-redux'
import home  from '@/actions/home'
import { SERSHOP } from '@/constants/actionTypes'
import string from '@/utils/string'


import './style.less'
export default @connect(state => ({
    dom: state
}),{
    SERSHOP: home[string(SERSHOP)]
}) class extends Component {
    constructor(props){
        super(props)
        this.state = {
            serL: '',
            dob: []
        } 
    }
    //input
    onSer = e => {
        this.setState({
            serL: e.target.value
        })
        if(this.state.serL = ''){
            this.setState({
                dob: []
            })
        }
    }
    //点击搜索
    onBtn = () => {
        this.props.SERSHOP(this.props.dom.login.dwcity.longitude, this.props.dom.login.dwcity.latitude, this.state.serL).then(res => {
            console.log(res)
            this.setState({
                dob:res.payload
            })
        })
    }
    render() {
        return (
           <div className="serch-dev">
               <header>
                    <div className="h-top">
                        <span>
                            《
                        </span>
                        <p>
                            搜索
                        </p>
                    </div>
                    <div className="h-bottom">
                            <input 
                            type="text" 
                            name=""
                            onChange={this.onSer}
                            placeholder="请输入商家或者美食名称"
                            />
                        <button onClick={this.onBtn}>搜索</button>
                    </div>
               </header>
               <section>  
               {
                     this.state.dob.map((v, k) => (
                        <dl className="s-div" key = {k}>
                            {/**<img src={image_path}/> */}
                                <dt><img src={v.image_path}/></dt>
                                <dd>
                                    <p>{v.name}</p>
                                    <p>月售{v.recent_order_num}单</p>
                                    <p>{v.float_minimum_order_amount}元起送/距离{v.distance}/公里</p>
                                </dd>
                        </dl>
                       ))
                   }
               </section>
           </div>
        )
    }
}

