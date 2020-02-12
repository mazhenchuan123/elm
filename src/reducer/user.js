import { handleActions } from 'redux-actions'
import { GET_ADDRESS, SEARCH_ADDRESS } from '@/constants/address'
import { GET_HONGBAOS, GET_EXPIREDHONGBAOS } from '@/constants/hongbaos'
import _ from 'loadsh'
// 最外层 必须这么写
const defaultState = {
  addressData: [],
  searchAddressData: [],
  hongBaosData: [],
  expriedHongBaos: [],
}
const setHongBaos = (data) => {
 
 const changeData = data.map(v => {
    return {
      money: v.amount, 
      title: v.name, 
      day: _.get(v, 'description_map.validity_delta', ''),
      maturity: _.get(v, 'description_map.validity_periods', ''), 
      condition: v.sum_condition,
      phone:  _.get(v, 'description_map.phone', ''),
      restricted: _.get(v, 'limit_map.restaurant_flavor_ids', ''),
    }
  })
  return changeData
} 

const setExpriedHongBaos = (data) => {
 
 const changeData = data.map(v => {
    return {
      money: v.amount, 
      title: v.name, 
      day: _.get(v, 'description_map.validity_delta', ''),
      maturity: _.get(v, 'description_map.validity_periods', ''), 
      condition: v.sum_condition,
      phone:  _.get(v, 'description_map.phone', ''),
      restricted: _.get(v, 'limit_map.restaurant_flavor_ids', ''),
      disabled: true,
    }
  })
  return changeData
} 

export default handleActions({
  [GET_ADDRESS]: (state, action) => ({ ...state, addressData: action.payload }),
  [SEARCH_ADDRESS]: (state, action) => ({ ...state, searchAddressData: action.payload }),
  [GET_HONGBAOS]: (state, action) => ({ ...state, hongBaosData: setHongBaos(action.payload) }),
  [GET_EXPIREDHONGBAOS]: (state, action) => ({ ...state, expriedHongBaos: setExpriedHongBaos(action.payload) }),

}, defaultState)