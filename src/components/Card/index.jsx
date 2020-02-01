import React from 'react'
import './style.less'
import cs from 'classnames'
import { withRouter } from 'react-router-dom'

export default  @withRouter
class extends React.PureComponent {
  onClcik = () => {
  }
  render () {
    const { 
      money = '1', 
      title = '分享红包', 
      disabled,
      day = '3',
      maturity = '2017-02-23', 
      condition = '20',
      phone= '17600370390',
      restricted,
     } = this.props
    return (
      <div className="comm_card" onClick={() => this.onClcik()}>
        <div 
          className={cs("comm_card_top", { comm_card_top_disabled: disabled })}
         
        >
          <div className="comm_card_left">
            <p style={{color: disabled && '#ccc' }}>
              ￥<span style={{color: disabled && '#ccc' }}>{money}</span>
            </p>
            <span>满<label>{condition}</label>元可用</span>
          </div>
          <div className="comm_card_right">
            <div className="card_right_info">
              <h2>{title}</h2>
              <p>{maturity}</p>
              <p>{phone}</p>
            </div>
            {
              !disabled ? <div className="card_right_date">
                   {day}
                </div> :
                <div className="card_right_date">
                  <p>过期</p>
                </div>
            }
          </div>
        </div>
        {
          restricted && <div className="comm_card_btm">
            限品类: {restricted}
           
          </div>
        }
      </div>
    )
  }
}