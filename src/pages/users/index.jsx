import React, { Component } from 'react';
import './style.less'
import axios from 'axios'
import qs from 'qs'
import { Imgs } from '@/actions/login'
import { connect } from 'react-redux'
export default @connect((state) => ({
    adr: state
}),{
    Imgs
}) class extends Component {

    state = {
        num: '',
        pass: '',
        imgs: '',
        img: ''
    }
    componentDidMount() {
        this.tu()
    }
    tu = () => {
        axios.post('https://elm.cangdu.org/v1/captchas').then(res => {
            this.setState({
                imgs: res.data.code
            })
        })
    }
    btn = () => {
        axios({
            method: 'post',
            url: 'https://elm.cangdu.org/v2/login',
            data: qs.stringify({
                username: this.state.num,
                password: this.state.pass,
                captcha_code: this.state.img
            })
        }).then(res => {
            console.log(res)
        })
        this.tu()
    }
    onNum = e => {
        this.setState({
            num: e.target.value
        })
    }
    onPass = e => {
        this.setState({
            pass: e.target.value
        })
    }
    onImg = e => {
        this.setState({
            img: e.target.value
        })
    }
    onImgs = () => {
        axios.post('https://elm.cangdu.org/v1/captchas').then(res => {
            this.setState({
                imgs: res.data.code
            })
        })
    }
    render() {
        return (
            <div className="res">
               <header>
                  密码登录
               </header>
               <section>
                   <input 
                        type="text" 
                        name="" 
                        id=""
                        placeholder="账号"
                        onChange={this.onNum}
                   />
                   <input 
                        type="text" 
                        name="" 
                        id=""
                        placeholder="密码"
                        onChange={this.onPass}
                   />
                   <div className="ps">
                   <input 
                        type="text" 
                        name="" 
                        id=""
                        placeholder="验证码"
                        onChange={this.onImg}
                   />
                   <span onClick={this.onImgs}>
                       <img src={this.state.imgs}/>
                   </span>
                   </div>
                   <p>
                       温馨提示：未注册过的账号，登录时将自动注册 注册过的用户可凭账号密码登录
                   </p>
                   <button onClick={this.btn}>
                       登录
                   </button>
               </section>
            </div>
        )
    }
}

