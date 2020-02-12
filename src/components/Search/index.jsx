import React, { PureComponent } from 'react'
import './style.less'

export default class extends PureComponent {
  state = {
    value: ''
  }
  onClick = () => {
    const { onSearch } = this.props
    const { value } = this.state
    onSearch && onSearch(value)
  }
  onChange = e => {
    this.setState({
      value:e.target.value
    })
  }
	render() {
    const { btnText = '确认', placeholder } = this.props
    const { value } = this.state
		return (
			<div className="comm_search">
        <input 
          type="text" 
          placeholder={placeholder} 
          value={value}
          onChange={this.onChange}
        />
				<button onClick={this.onClick}>{btnText}</button>	
      </div>
		)
	}
}

