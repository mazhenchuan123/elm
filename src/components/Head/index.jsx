import React from 'react'
import { withRouter } from 'react-router-dom'
import './style.less'

export default @withRouter 
class extends React.PureComponent {
  onLeftClick = () => {
    this.props.history.go(-1)
  }
  onRightClick = () => {
    const { onRightClick } = this.props
    onRightClick && onRightClick()
  }
  render () {
    const { title, features } = this.props
    return (
      <div className="comm_head">
        <span className="iconfont icon-icon4" onClick={this.onLeftClick}></span>
        <h3>{title}</h3>
        {features && <span onClick={this.onRightClick}>{features}</span>}
    </div>
    )
  }
}