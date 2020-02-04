import { handleActions } from 'redux-actions'
import { CITY, POSITION } from '@/constants/actionTypes'
// 最外层 必须这么写
const defaultState = {
  data: [],
  cites: ''
}
export default handleActions({
  [CITY]: (state, action) => ({ ...state, data: action.payload }),
  [POSITION]: (state, action) => ({ ...state, cites: action.payload })
}, defaultState)

