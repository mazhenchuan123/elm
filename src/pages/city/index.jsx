import React from 'react';
import { connect } from 'react-redux'
import home  from '@/actions/home'
import { CITY, HOTCITY, DWCITY } from '@/constants/actionTypes'
import string from '@/utils/string'
import './index.less'

export default 
@connect(state => ({
    cit: state.index
}),{
   CITY: home[string(CITY)],
   HOTCITY: home[string(HOTCITY)],
   DWCITY: home[string(DWCITY)]
}) class extends React.Component {
    constructor(props){
        super(props)
        //所有城市
        props.CITY('group')    
        //热门城市 
        props.HOTCITY('hot')
        //定位城市
        props.DWCITY('guess')
}
    //所有城市跳转
    onCity = option => {
        this.props.history.push({pathname: '/grt', query:{addr: option}})
    }
    //定位城市跳船
    onCities = (coo) => {
        this.props.history.push({pathname: '/grt', query:{addr: coo}})
    }
    jump = () => {
        this.props.history.push('/users')
    }
    render() {
 
        return (
            <div className="pages-city">
                <header>
                    <span className="sp1">ele.me</span>
                    <span className="sp2" onClick={this.jump}><a>登录</a>|<a>注册</a></span>
                </header>
                <section>
                    <p>
                        <span className="sp1">当前定位城市:</span>
                        <span className="sp2">定位不准时，请在城市列表选择</span>
                    </p>
                    <p onClick = {() => this.onCities(this.props.cit.dwcity.id)} className="pss">
                        <span className="sp1">{this.props.cit.dwcity.name ? this.props.cit.dwcity.name : 'loading'}</span>
                        <span className="sp2">></span>
                    </p>
                    {/*热门城市*/}
                    <div className="re">
                        <p>热门城市</p>
                        <div className="cts">
                            {
                              this.props.cit.hotcity.length > 0 ? this.props.cit.hotcity.map((v,k) => (
                                    <span onClick={() => this.onCity(v.id)}  key={k} className="hotcity">
                                       {v.name}
                                    </span>
                                )): 'loading'
                            }
                        </div>
                    </div>
                    {/*所有城市 */}
                    <div className="re" >
                        {
                            Object.keys(this.props.cit.data).sort().map((v,k) => (
                                <div key={k}>
                                    <p>{v}</p>
                                    <div className="cts">
                                        {
                                            this.props.cit.data[v].map((v,k) => 
                                                <span onClick={() => this.onCity(v.id)} key={k}>
                                                    {v.name}
                                                </span>
                                            )
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </section>
            </div>
        )
    }
}