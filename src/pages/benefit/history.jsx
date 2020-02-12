import React, { PureComponent } from 'react'
import Head from '@@/Head'
import Card from '@@/Card'
import user from '@/actions/user'
import { hump } from '@/utils/hump'
import { GET_EXPIREDHONGBAOS } from '@/constants/hongbaos'
import { connect } from 'react-redux'
import './style.less'

export default 
@connect(state => ({
	expriedHongBaos: state.user.expriedHongBaos
}), {
	getexpriedhongbaos: user[hump(GET_EXPIREDHONGBAOS)]
})
class extends PureComponent {

  componentDidMount () {
		const options = {
			limit: 20,
			offset: 0,
		}
		this.props.getexpriedhongbaos(options)
  }
  
	render() {
    const { expriedHongBaos } = this.props
    console.log(expriedHongBaos)
		return (
			<div className="pages_benfit_history">
				<Head title="历史红包" />
				<div className="benfit_history_body">
          {
            expriedHongBaos.map((v, k) => (
              <Card {...v} key={k}/>
            ))
          }
				</div>
      </div>
		)
	}
}

