import React from 'react'
import './style.less'
import { withRouter } from 'react-router-dom'

export default  @withRouter
class extends React.PureComponent {
  onClcik = (path) => {
    this.props.history.push(path)
  }
  render () {
    const { path, imgurl, title } = this.props
    return (
      <div className="comm_lists" onClick={() => this.onClcik(path)}>
        <div className="comm_lists_left">
          <span>
            <img src={imgurl} alt=""/>
          </span>
        </div>
        <div className="comm_lists_right">
          <p>{title}</p>
          <label className="iconfont icon-you1"></label>
        </div>
      </div>
    )
  }
}