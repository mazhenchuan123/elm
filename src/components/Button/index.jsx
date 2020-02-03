
import React from 'react'
import cs from 'classnames'
import './style.less'
export default class extends React.PureComponent {
  render () {
    const { style, disabled, btntext = '确定', onClick } = this.props
    return (
      <button
        className={cs('comm_button', { comm_btn_disabled:disabled })}
        disabled={disabled} 
        style={style}
        onClick={onClick}
      >
       {btntext}
      </button>
    )
    
  }
}