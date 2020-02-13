import { handleActions } from 'redux-actions'
import { CITY, GETCITY, SERCITY, HOTCITY, DWCITY } from '@/constants/actionTypes'
// 最外层 必须这么写
const defaultState = {
  data: [],
  idcity: '',
  searching: [],
  hotcity: [],
  dwcity: '',
  details:[],
  evrs:[],
  evr:[],
}
export default handleActions({
  [CITY]: (state, action) => ({ ...state, data: action.payload }),
  [GETCITY]: (state, action) => ({...state, idcity:action.payload }),
  [SERCITY]: (state, action) => ({...state, searching:action.payload }),
  [HOTCITY]: (state, action) => ({...state, hotcity:action.payload}),
  [DWCITY]: (state, action) => ({...state, dwcity:action.payload}),
  CESHI: (state, action) => ({ ...state, data: action.payload }),
  DETAILS: (state, action) => ({ ...state, details: action.payload }),
  EVR:(state, action) => ({ ...state, evr:action.payload}),
  EVRS:(state, action) => ({ ...state, evrs:action.payload}),
}, defaultState)

