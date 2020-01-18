import { handleActions } from 'redux-actions'
import { GET_ADDRESS } from '@/constants/userinfo'
// 最外层 必须这么写
const defaultState = {
  addressData: [],
}

export default handleActions({
  [GET_ADDRESS]: (state, action) => ({ ...state, addressData: action.payload }),
 
}, defaultState)