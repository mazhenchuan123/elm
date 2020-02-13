import { requestPost } from '@/utils/request'
import { requestGet } from '@/utils/request'
import { createActions } from 'redux-actions'
import { DWCITY, IMG } from '@/constants/actionTypes'
import api from '@/services/api'

export default createActions({
    [DWCITY]: options => requestPost(api.DWcityL, options),
    [IMG]: options => requestPost(api.YanL)
})
 
// Imgs: option => requestPost(api.Imgs)