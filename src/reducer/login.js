import { handleActions } from 'redux-actions'

const defaultState = {
    userInfo:'',
}
export default handleActions({
    DWcity: (state, action) =>{ 
        return {...state, userInfo: action.payload }
    }
}, defaultState)
