import React, { Component } from 'react'
import { connect } from 'react-redux'
import { home } from '@/actions/home'
import classnames from 'classnames'
import defaultImg from './err.jpg'
import './style.less'
import XX from './xx'
export default 
@connect((state => {
  return {
    details: state.index.details,
    homeevr: state.index.evr,
    homeevrs: state.index.evrs,
  }
}), {
  home: home.details,
  evr: home.evr,
  evrs: home.evrs,
})
class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bool: true,
      evrbool: 0,
      evrnum: 2,
    }
  }
  componentDidMount() {
    this.props.home()
    this.props.evr(1)
    this.props.evrs()
  }
  bool1 = () => {
    this.setState({
      bool: false
    })
  }
  bool2 = () => {
    this.setState({
      bool: true
    })
  }
  onError = e => {
    e.target.setAttribute('src', defaultImg)
  }
  go = () => {
    this.props.history.go(-1)
  }
  evrs = e => {
    this.setState({
      evrbool: e
    })
  }
  // https://fuss10.elemecdn.com/1/5f/6cf782b0c9cd5ca8daa7f76ab05aejpeg.jpeg
  // 15f6cf782b0c9cd5ca8daa7f76ab05aejpeg
  // https://fuss10.elemecdn.com/1/b5/23ca27369a0eed1ce0c3fc0a5ba8bjpeg.jpeg
  render() {
    const { details, homeevrs, homeevr } = this.props
    const { state } = this.props.location
    const { evrbool, evrnum } = this.state
    const imgs = '//elm.cangdu.org/img/'
    console.log(state)
    console.log(details)
    console.log(homeevrs)
    console.log(homeevr)
    const im = imgs + state.image_path
    const dy = '>'
    const xy = '<'
    return (
      <div className="details">
        <span className="back" onClick={this.go}>{dy}</span>
        <div className="detailshead" style={{ backgroundImage: `url(${im})`, backgroundSize: '100%' }}>
          <div className="detailsheadL">
            <img src={`${imgs}` + `${state.image_path}`} className="headimg" />
          </div>
          <div className="detailsheadR">
            <h2>{state.name}</h2>
            <p>商家配送/ 分钟送达 / 配送费￥{state.float_delivery_fee}</p>
            <p>公告：{state.promotion_info}</p>
          </div>
        </div>
        <div className="detailstype">
          <p onClick={this.bool2} className={classnames({ foo: this.state.bool, })}>商品</p>
          <p onClick={this.bool1} className={classnames({ foo: !this.state.bool, })}>评价</p>
        </div>
        {
          this.state.bool ?
            <div className="shopping">
              <section>
                <div className="secL">
                  {
                    details.map((v, k) => {
                      return <p key={k} >{v.name}</p>
                    })
                  }
                </div>
                <div className="secR">
                  {
                    details.map((v, k) => {
                      return <div key={k} >
                        {v.name}

                        <span className="size">{v.description}</span>
                        {
                          v.foods.map((val, key) => {
                            let img = "//elm.cangdu.org/img/" + val.image_path
                            return <div key={key} className="info">
                              <p className="img">
                                <img src={img} alt="2" />
                              </p>
                              <div className="infoinfo">
                                <p>{val.name}</p>
                                <p>{val.description}</p>
                                <p>月售{val.month_sales}份，好评率{val.satisfy_rate}%</p>
                                <p className="count">
                                  <span className="countL">
                                    <span className="red">
                                      <span className="qi">￥</span>
                                      {val.specfoods[0].price}
                                    </span>
                                    {
                                      val.specfoods.length > 1 ? <span className="qi">起</span> : null
                                    }
                                  </span>
                                  <span className="counts">
                                    {
                                      true ?
                                        <span>
                                          <span className="redu">
                                            <span className="reduction">-</span>
                                          </span>
                                          <span className="nums">1</span>
                                        </span> : null
                                    }

                                    {
                                      val.specfoods.length > 1 ?
                                        <span className="auxspecifications">选规格</span>
                                        : <span className="add">
                                          <span className="adds">
                                            +
																										</span></span>
                                    }


                                  </span>
                                </p>
                              </div>
                            </div>
                          })
                        }
                      </div>
                    })
                  }
                </div>
              </section>
              <footer>
                <p className="num">1</p>
                <img src="image/s1.gif" alt="1" className="shpopingimg" />
                <img src="image/s2.gif" alt="1" className=" shoppingimggo" />
              </footer>
            </div> :
            <div className="evr">
              <div className="evrevr">
                {
                  homeevrs.map((v, k) => {
                    return <span key={k} onClick={() => this.evrs(k)} className={classnames({ foo: (evrbool == k), no: (evrnum == k) })}>{v.name}({v.count})</span>
                  })
                }
              </div>
              <div className="evrall">
                {
                  homeevr.map((v, k) => {
                    let img = `https://fuss10.elemecdn.com/`
                    let imgs = img + v.avatar.slice(0, 1) + '/' + v.avatar.slice(1, 3) + '/' + v.avatar.slice(3) + '.jpeg'
                    return (<div key={k} className="evrsdiv">
                      {/* {
																v.item_ratings.map((val,key) => {
																	return (
																		<div className="evaluationdetails">
																			<li>
																				<p></p>
																			</li>
																		</div>
																	)
																})
															} */}
                      <div className="evrdivimg">
                        <img src={imgs} onError={this.onError} className="evrimg" style={{width:'0.7rem',height:'auto',borderRadius:'50%',paddingLeft:'0.1rem',boxSizing:'borderBox'}}/>
                      </div>
                      <div className="evaluationdetails">
                        <li className="evaluationdetailsnames">
                          <p className="evaluationdetailsname">
                            {v.username}
                          </p>
                          <span className="time">
                            {v.rated_at}
                          </span>
                        </li>
                        <p>
                          <XX />
                          {v.time_spent_desc}
                        </p>
                        <div className="evaluate">
                          {
                            v.item_ratings.map((val,key) => {
                              let imgevrs = img + val.image_hash.slice(0, 1) + '/' + val.image_hash.slice(1, 3) + '/' + val.image_hash.slice(3) + '.jpeg'
                              return (
                                <dl key={key}>
                                  <dt>
                                    <img src={imgevrs} alt="1" className="evaluateimg"/>
                                  </dt>
                                  <dd>
                                    {val.food_name}
                                  </dd>
                                </dl>
                              )
                            })
                          }
                        </div>
                        
                      </div>
                    </div>)
                  })
                }
              </div>
            </div>
        }
      </div>
    )
  }
}