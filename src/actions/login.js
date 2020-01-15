import { requestPost } from '@/utils/request'
import { createActions } from 'redux-actions'
import api from '@/services/api'
export default createActions({
    LOGIN: options => requestPost(api.login, options),
})
 
