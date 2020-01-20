import React, { PureComponent } from 'react'
import './style.less'

export default class extends PureComponent {
  onClick = () => {
   
    const { onClick } = this.props
    onClick && onClick()
  }
  render () {
    const { iconClass, text, color } = this.props
    return (
      <div className="comm_iconbtn" style={{color}} onClick={this.onClick} >
        <span className={`iconfont ${iconClass}`}></span>
        <p>{text}</p>
      </div>
    )
  }
}