import React from 'react'
import './style.less'
import { withRouter } from 'react-router-dom'

export default  @withRouter
class extends React.PureComponent {
  onClcik = (path) => {
    this.props.history.push(path)
  }
  render () {
    const { money, title, color, unit, path } = this.props
    return (
      <div className="comm_gird" onClick={() => this.onClcik(path)}>
        <h1><span style={{color}}>{money}</span>{unit}</h1>
        <p>{title}</p>
      </div>
    )
  }
}