import { requestPost } from '@/utils/request'
import { requestGet } from '@/utils/request'
import { createActions } from 'redux-actions'
import { CITY, POSITION } from '@/constants/actionTypes'
import api from '@/services/api'

export default createActions({
    [CITY]: options => {
        return (
            requestGet(api.CityL, options)
        )  
    },
    [POSITION]: options => {
        console.log(options,'options')
        return (
            requestGet(api.PosLL,options)
        )  
    },
})
 