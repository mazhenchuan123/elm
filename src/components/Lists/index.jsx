import React from 'react'
import './style.less'
import { withRouter } from 'react-router-dom'

export default  @withRouter
class extends React.PureComponent {
  onClcik = (path) => {
    const { onClick } = this.props
    path && this.props.history.push(path)
    onClick && onClick()
  }
  render () {
    const { path, imgurl, title, prompt, style } = this.props
    return (
      <div className="comm_lists" onClick={() => this.onClcik(path)}>
          {
            imgurl && <div className="comm_lists_left">
              <span>
                <img src={imgurl} alt=""/>
              </span>
            </div>
          }
        <div className="comm_lists_right">
          <p style={style} >{title}</p>
          <span>{prompt}<label className="iconfont icon-you1"></label></span>
        </div>
      </div>
    )
  }
}