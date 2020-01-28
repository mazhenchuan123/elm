import React, { Component } from 'react';
import './index.less'
export default class extends Component{
    state = {
      arr:[],
      addr: ''
    }
    back = () => {
        this.props.history.replace('/city')
    }
    onC  = e => {
        this.setState({
            addr: e.target.value
        })
    }
    onSub = () => {
        const arr = []
        arr.push(this.state.addr)
        console.log(arr)
    }
    //切换城市
    onQ = () => {
        this.props.history.replace('city') //直接返回想要的页面 
    }
    render() {
        return (
            <div className="pages-grt">
                <header>
                    <span onClick={this.back}>
                        《
                    </span>
                    {/* <p>{this.props.location.query.addr}</p> */}
                    <span onClick={this.onQ}>
                        切换城市
                    </span>
                </header>
                <section>
                    <div className='grt-yop'>
                        <input type="text" onChange = {this.onC}/>
                        <button onClick={this.onSub}>提交</button>
                    </div>
                    <p>搜索历史</p>
                    <div>

                    </div>
                </section>
            </div>
        )
    }
}