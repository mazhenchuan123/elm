const user_id = 47248

export default {
        YanL: '/api/v1/captchas',
        DWcityL: '/api/v2/login', //登录
        CityL: '/api/v1/cities', //获取城市
        PosLL: '/api/v2/pois/',
        SerL: '/api/v1/cities/',
        SerCityL: '/api/v1/pois', //搜索城市信息
        signout: '/api/v2/signout',
        searchAddresses: '/api/v1/pois',
        addAddress: `/api/v1/users/${user_id}/addresses`,
        homepage:'https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762', //主页轮播
        homedetails:'https://elm.cangdu.org/shopping/v2/menu?restaurant_id=1',
        homeevr:`https://elm.cangdu.org/ugc/v2/restaurants/1/ratings`,
        homeevrs:`https://elm.cangdu.org/ugc/v2/restaurants/1/ratings/tags`,
        hongBaos: `/api/promotion/v2/users/${user_id}/hongbaos`,
        expiredHongBaos: `/api/promotion/v2/users/${user_id}/expired_hongbaos`,
        exchangeHongBaos: `/api/v1/users/${user_id}/hongbao/exchange`,
} 