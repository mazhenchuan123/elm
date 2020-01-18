import { requestGet } from '@/utils/request'
import { createActions } from 'redux-actions'
import { GET_ADDRESS } from '@/constants/userinfo'

export default createActions({
     [GET_ADDRESS]: options => requestGet(`/api/v1/users/${options}/addresses`),
  })