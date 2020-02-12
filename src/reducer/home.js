import { handleActions } from 'redux-actions'
import { CITY, POSITION, GETCITY, SERCITY, HOTCITY, DWCITY } from '@/constants/actionTypes'
// 最外层 必须这么写
const defaultState = {
  data: [],
  idcity: '',
  searching: [],
  hotcity: [],
  dwcity: ''
}
export default handleActions({
  [CITY]: (state, action) => ({ ...state, data: action.payload }),
  [GETCITY]: (state, action) => ({...state, idcity:action.payload }),
  [SERCITY]: (state, action) => ({...state, searching:action.payload }),
  [HOTCITY]: (state, action) => ({...state, hotcity:action.payload}),
  [DWCITY]: (state, action) => ({...state, dwcity:action.payload})
}, defaultState)

