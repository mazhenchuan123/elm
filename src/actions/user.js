import { requestGet, requestPost } from '@/utils/request'
import { createActions } from 'redux-actions'
import { GET_ADDRESS, SEARCH_ADDRESS } from '@/constants/address'
import { GET_HONGBAOS, GET_EXPIREDHONGBAOS, GET_CAPTCHS } from '@/constants/hongbaos'
import api from '@/services/api'
export default createActions({
     [GET_ADDRESS]: options => requestGet(`/api/v1/users/${options}/addresses`),
     [SEARCH_ADDRESS]: options => requestGet(api.searchAddresses, options),
     [GET_HONGBAOS]: options => requestGet(api.hongBaos, options),
     [GET_EXPIREDHONGBAOS]: options => requestGet(api.expiredHongBaos, options),
     [GET_CAPTCHS]: options => requestPost(api.captchas, options),
  })