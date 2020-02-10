import { requestGet } from '@/utils/request'
import { createActions } from 'redux-actions'
import apis from '@/services/api'
export const home =  createActions({
  CESHI: options => requestGet(apis.homepage),
  DETAILS: options => requestGet(apis.homedetails),
  EVR: options => requestGet(apis.homeevr,options),
  EVRS: options => requestGet(apis.homeevrs)
})

