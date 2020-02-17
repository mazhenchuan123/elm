import React, { Component } from 'react';
import { connect } from 'react-redux'
import home  from '@/actions/home'
import { GETCITY, SERCITY} from '@/constants/actionTypes'
import string from '@/utils/string'
import './index.less'
import Head from '@/components/Head'
export default @connect(state => ({
    idcity: state.index
}),{
    GETCITY: home[string(GETCITY)],
    SERCITY: home[string(SERCITY)]
}) class extends Component{
    constructor(props){
        super(props)
        this.state = {
            addr: '',
            sercity: []
        }
        props.GETCITY(this.props.location.query.addr)
        props.SERCITY(this.props.location.query.addr, this.state.addr)
    }
   
    back = () => {
        this.props.history.replace('/city')
    }
    onC  = e => {
        this.setState({
            addr: e.target.value,
        })
    }
   //点击提交
   onSub = () => {
        this.props.SERCITY(this.props.location.query.addr, this.state.addr)
   }
    //切换城市
    onQ = () => {
        this.props.history.replace('city') //直接返回想要的页面 
    }
    //点击跳转主页
    onjump = (opt) => {
        console.log(opt)
        // this.props.history.push({pathname: '/grt', query:{addr: coo}})
    }
    render() {
        return (
            <div className="pages-grt">
                <header>
                    {/* <span onClick={this.back}>
                        《
                    </span>
                    <p>{this.props.idcity.idcity.name}</p> */}
                    <Head className="head" title={this.props.idcity.idcity.name}/>
                    <span onClick={this.onQ}>
                        切换城市
                    </span>
                </header>
                <section>
                    <div className='grt-yop'>
                        <input type="text" onChange = {this.onC}/>
                        <button onClick={this.onSub}>提交</button>
                    </div>
                    <p className="ss-ls">搜索历史</p>
                    <div className="ser-history">
                        {
                            this.props.idcity.searching ? this.props.idcity.searching.map((v,k) => (
                                <div key = {k} onClick={() => this.onjump(v.name)}>
                                    <p>{v.name}</p>
                                    <p className="sp">{v.address}</p>
                                </div>
                            )) : 'loading'
                        }
                    </div>
                </section>
            </div>
        )
    }
}