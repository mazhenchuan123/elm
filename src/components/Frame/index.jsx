import React, { PureComponent } from 'react'
import IconBtn from '@@/IconBtn'
import Button from '@@/Button'
import './style.less'

export default class extends PureComponent {
  handelClick = () => {
    const { handelClick } = this.props
    handelClick && handelClick()
  }
  onSubmit = () => {
    const { onSubmit } = this.props
    onSubmit && onSubmit()
  }

  render () {
    const { 
      tilte, 
      unit, 
      money = "0.00", 
      btntext, 
      captionText, 
      disabled,
      btnStyle,
     } = this.props
    return (
      <div className="comm_frame">
        <div className="comm_frame_head">
          <h6>{tilte}</h6>
          <div>
            <IconBtn 
              text={captionText}
              iconClass="icon-shuoming"
              onClick={this.handelClick}
            />
          </div>
        </div>
        <div className="comm_frame_body">
          <h2>{money}<span>{unit}</span></h2>
        </div>
        <div className="comm_frame_foot">
         <Button 
          btntext={btntext} 
          disabled={disabled} 
          onClick={this.onSubmit}
          style={btnStyle}
         />
        </div>
      </div>
    )
  }
}