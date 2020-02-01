import user from '@/actions/user'
import { hump } from '@/utils/hump'
import qs from 'qs'
import { GET_HONGBAOS, GET_EXPIREDHONGBAOS } from '@/constants/hongbaos'

const options = {
  limit: 20,
  offset: 0,
}
window.store.dispatch(user[hump(GET_HONGBAOS)](options))

export const hongBaosData = [
  
]