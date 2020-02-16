import { requestPost } from '@/utils/request'
import { requestGet } from '@/utils/request'
import { createActions } from 'redux-actions'
import { CITY, GETCITY, SERCITY, HOTCITY, DWCITY, SERSHOP } from '@/constants/actionTypes'
import api from '@/services/api'
import apis from '@/services/api'
//serShopL
export default createActions({
    [CITY]: city => requestGet(api.CityL+"?type="+city),
    [GETCITY]: options =>  requestGet(api.SerL+options),
    [HOTCITY]: option => requestGet(api.CityL+"?type="+option),
    [DWCITY]: option => requestGet(api.CityL+"?type="+option),
    [SERCITY]: (opt, rev) => requestGet(api.SerCityL+"?city_id="+opt+"&keyword="+rev+"$type=search"),
    [SERSHOP]: (opt, ops, rev) =>  requestGet(api.serShopL+"?geohash="+ops+","+opt+"&keyword="+rev) //搜索商家  
})
 
export const home =  createActions({
  CESHI: options => requestGet(apis.homepage),
  DETAILS: options => requestGet(apis.homedetails),
  EVR: options => requestGet(apis.homeevr,options),
  EVRS: options => requestGet(apis.homeevrs)
})

