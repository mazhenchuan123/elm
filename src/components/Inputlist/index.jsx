import React from 'react'
import { withRouter } from 'react-router-dom'
import './style.less'

export default @withRouter 
class extends React.PureComponent {
 
  state = {
   value: this.props.values,
   disabled: false,
  }
 
  regExp = () => {
    const { reg } = this.props
		const { value } = this.state
    reg && reg.test(value) ? this.setState({ disabled: false }) :
			this.setState({ disabled: true })
	}

  onClick = () => {
    const { onClick } = this.props
    onClick && onClick()
  }

  onChange = evt => {
    const { onChange } = this.props
    this.setState({
      value: evt.target.value
    },() => {
      onChange && onChange(this.state.value)
    })
  }

  render () {
    const { placeholder, prompt } = this.props
    const { value, disabled } = this.state

    return (
      <div className="comm_inputlist" onClick={this.onClick}>
        <div className="inputlist_top">
          <div className="inputlist_left">
            <input 
              type="text" 
              placeholder={placeholder}
              onChange={this.onChange}
              value={value}
              style={{border: disabled ? '1px solid red' : ''}}
              onKeyUp={this.regExp}
            />
          </div>
          <div className="inputlist_right">

          </div>
        </div>
        {
          disabled && <p>{prompt}</p>
        }
      </div>
    )
  }
}