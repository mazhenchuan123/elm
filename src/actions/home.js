import { requestPost } from '@/utils/request'
import { requestGet } from '@/utils/request'
import { createActions } from 'redux-actions'
import { CITY, GETCITY, SERCITY, HOTCITY, DWCITY } from '@/constants/actionTypes'
import api from '@/services/api'

export default createActions({
    [CITY]: city => requestGet(api.CityL+"?type="+city),
    [GETCITY]: options =>  requestGet(api.SerL+options),
    [HOTCITY]: option => requestGet(api.CityL+"?type="+option),
    [DWCITY]: option => requestGet(api.CityL+"?type="+option),
    [SERCITY]: (opt, rev) => requestGet(api.SerCityL+"?city_id="+opt+"&keyword="+rev+"$type=search")
})
 