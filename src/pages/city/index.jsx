import React from 'react';
import { connect } from 'react-redux'
import home  from '@/actions/home'
import { CITY, POSITION } from '@/constants/actionTypes'
import string from '@/utils/string'
import axios from 'axios'
import './index.less'
import qs from 'qs'

export default 
@connect(state => ({
    adr: state.index
}),{
   CITY: home[string(CITY)],
   POSITION: home[string(POSITION)]

}) class extends React.Component {
    constructor(props){
        super(props)
        props.POSITION({geohash: '31.22967,121.4762'}).then(res => {
            console.log(res,'res')
        })
        // props.CITY({type: 'group'}).then(res => {
        //     console.log(res)
        // })
    this.state = {
        adr: '',
        datas: []
    }
}
    componentDidMount () {
        /*地理位置定位 */
        // axios.get('https://elm.cangdu.org/v2/pois/31.22967,121.4762').then(res => {
        //     this.setState({
        //         adr: res.data.city
        //     })
        // })
        /*所有城市*/
        axios.get('/api/v1/cities?type=group').then(res => {
            this.setState({
                datas: res.data
            })
        })
    }
    
    onCity = option => {
        this.props.history.push({pathname: '/grt', query:{addr: option}})
    }
    //
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
                    <p>
                        <span className="sp1">{this.state.adr}</span>
                        <span className="sp2">></span>
                    </p>

                    <div className="re">
                        <p>热门城市</p>
                        <div className="cts">
                            <span>
                                上海
                            </span>
                            <span>
                                哈尔滨
                            </span>
                            <span>
                                南京
                            </span>
                            <span>
                                广州
                            </span>
                            <span>
                                厦门
                            </span>
                            <span>
                                杭州
                            </span>
                            <span>
                                天津
                            </span>
                            <span>
                                青岛
                            </span>
                        </div>
                    </div>
                    {/*所有城市 */}
                    <div className="re" >
                        {
                            Object.keys(this.state.datas).sort().map((v,k) => (
                                <div key={k}>
                                    <p>{v}</p>
                                    <div className="cts">
                                        {
                                            this.state.datas[v].map((v,k) => (
                                                <span onClick={() => this.onCity(v.name)} key={k}>
                                                    {v.name}
                                                </span>
                                            ))
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