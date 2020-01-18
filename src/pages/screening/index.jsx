import React, { Component } from 'react';
import {connect } from 'react-redux'
import {home} from '@/actions/home'
import Userlist from '@@/userlist'
import './style.less'
export default
@connect((state => {
	return {
    date:state.index.data
  }
}),{
	home:home.ceshi
})
class extends Component {
    go = () => {
        this.props.history.go(-1)
    }
    zhunshi = () => {
        console.log(1)
    }
    sort = () => {
        console.log(2)
    }
    sreening = () => {
        console.log(3)
    }
    render() {
        console.log(this.props.location.state,'----------')
        const { date = []} = this.props
        const da = '<'
        return(
            <div className="screening">
                <header>
                    <div className="head">
                        <p onClick={this.go}>{da}</p>
                        <div>{this.props.location.state}</div>
                    </div>
                    <div className="sec">
                        <p onClick={this.zhunshi}>准时达 ∨ </p>
                        <p onClick={this.sort}>排序 ∨ </p>
                        <p onClick={this.sreening}>筛选 ∨ </p>
                    </div>
                </header>
                <div className="screeningUserslist">
                    <Userlist date={date} />
                </div>
            </div>
        )
    }
}