// import React from 'react';
// import './index.less'
// import { connect } from 'react-redux'
// import  getCeshi  from '@/actions/login'
// import { DWCITY } from '@/constants/actionTypes'
// import string from '@/utils/string'


// export default @connect((state) => ({
//     adr: state.login
// }),{
//     DWcity: getCeshi[string(DWCITY)],
// }) class extends React.Component {
//     constructor(props){
//         super(props)
//         console.log(this.props.name)
//         props.DWcity(this.props.name).then(res => {
//             if(res.payload.status == 0){
//                 alert(res.payload.message)
//             }else{
//                 alert('登录成功')
//             }
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <button>登录</button>
//             </div>
//         )
//     }
// }

import React from 'react';
import './index.less'
import { connect } from 'react-redux'
import  getCeshi  from '@/actions/login'
import { DWCITY, IMG } from '@/constants/actionTypes'
import string from '@/utils/string'
export default @connect((state) => ({
    adr: state.login
}),{
    DWcity: getCeshi[string(DWCITY)],
    IMG: getCeshi[string(IMG)]
}) class extends React.Component {
    constructor(props){
        super(props)
        this. state = {
            username: '',
            password: '',
            captcha_code: '',
        }
       props.IMG()
    }
   

    btn = () => {
        this.props.DWcity(this.state).then(res => {
            if(res.payload.status == 0){
                alert(res.payload.message)
            }else{
                alert('登录成功')
            }
        })
    }
    onNum = e => {
        this.setState({
            username: e.target.value
        })
    }
    onPass = e => {
        this.setState({
            password: e.target.value
        })
    }
    onImg = e => {
        this.setState({
            captcha_code: e.target.value
        })
    }
    //点击时调用一次
    onImgs = () => {
        this.props.IMG()
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
                       <img src={this.props.adr.yan.code}/>
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

