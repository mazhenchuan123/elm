import React from 'react'
import { withRouter } from 'react-router-dom'
import './style.less'

export default @withRouter 
class extends React.PureComponent {
  onClick = () => {
    this.props.history.go(-1)
  }
  render () {
    const { title } = this.props
    return (
      <div className="comm_head">
          <span className="iconfont icon-icon4" onClick={this.onClick}></span>
        <h3>{title}</h3>
    </div>
    )
  }
}