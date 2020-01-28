import { requestPost } from '@/utils/request'
import { requestGet } from '@/utils/request'
import { createActions } from 'redux-actions'
import api from '@/services/api'

export const dwCity = createActions({
    DWcity: options => {
        console.log(options)
        return (
            requestGet(api.DWcityL, options)
        )
    },
   
})

export const Imgs = createActions({
    Imgs: option => requestPost(api.Imgs)
})
 
// Imgs: option => requestPost(api.Imgs)