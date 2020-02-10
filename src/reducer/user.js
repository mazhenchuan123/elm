import { handleActions } from 'redux-actions'
import { GET_ADDRESS, SEARCH_ADDRESS } from '@/constants/address'
// 最外层 必须这么写
const defaultState = {
  addressData: [],
  searchAddressData: []
}

export default handleActions({
  [GET_ADDRESS]: (state, action) => ({ ...state, addressData: action.payload }),
  [SEARCH_ADDRESS]: (state, action) => ({ ...state, searchAddressData: action.payload }),
 
}, defaultState)