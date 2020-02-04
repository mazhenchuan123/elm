import { handleActions } from 'redux-actions'
import { DWCITY, IMG } from '@/constants/actionTypes'

const defaultState = {
    userInfo:'',
    yan: ''
}
export default handleActions({
    [DWCITY]: (state, action) => ({ ...state, userInfo: action.payload}),
    [IMG]: (state, action) => ({ ...state, yan: action.payload})
}, defaultState)
