import { handleActions } from 'redux-actions'
// 最外层 必须这么写
const defaultState = {
  data: [],
  details:[],
  evrs:[],
  evr:[],
}



export default handleActions({
  CESHI: (state, action) => ({ ...state, data: action.payload }),
  DETAILS: (state, action) => ({ ...state, details: action.payload }),
  EVR:(state, action) => ({ ...state, evr:action.payload}),
  EVRS:(state, action) => ({ ...state, evrs:action.payload}),
}, defaultState)

