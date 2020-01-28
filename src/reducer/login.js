import { handleActions } from 'redux-actions'

const defaultState = {
    userInfo:'',
    yan: ''
}
export default handleActions({
    DWcity: (state, action) =>{ 
        return {...state, userInfo: action.payload }
    },
    Imgs: (state, action) => {
        return {...state, yan: action.payload}
    }
}, defaultState)
