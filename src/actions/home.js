import { requestGet } from '@/utils/request'
import { createActions } from 'redux-actions'
import apis from '@/services/api'
export const home =  createActions({
  CESHI: options => requestGet(apis.homepage),
})

