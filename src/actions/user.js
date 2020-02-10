import { requestGet } from '@/utils/request'
import { createActions } from 'redux-actions'
import { GET_ADDRESS, SEARCH_ADDRESS } from '@/constants/address'
import api from '@/services/api'
export default createActions({
     [GET_ADDRESS]: options => requestGet(`/api/v1/users/${options}/addresses`),
     [SEARCH_ADDRESS]: options => requestGet(api.searchAddresses, options),
  })