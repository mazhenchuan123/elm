import React from 'react'
import './style.less'
export default class extends React.PureComponent {
  state = {
    visitible: this.props.visitible
  }
  componentWillReceiveProps (nextprops) {
    if(nextprops.visitible != this.state.visitible) {
      this.setState({
        visitible: nextprops.visitible
      })
    }
   
  }
  onCancel = () => {
    const { onCancel } = this.props
    onCancel && onCancel()
  }
  render () {
    const { title } = this.props
    const { visitible } = this.state
    return (
    <>
     {
       visitible && <div className="comm_alert">
        <div className="alert_body">
          <div className="alert_top">
            <span className="iconfont icon-tishishuoming"></span>
            <p>{title}</p>
          </div>
          <div className="alert_bm" onClick={this.onCancel}>
            确认
          </div>
        </div>
      </div>
     }
    </>
    )
  }
}