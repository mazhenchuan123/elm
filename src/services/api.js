const user_id = 47248

export default {
  signout: '/api/v2/signout',
  searchAddresses: '/api/v1/pois',
  addAddress: `/api/v1/users/${user_id}/addresses`,
  hongBaos: `/api/promotion/v2/users/${user_id}/hongbaos`,
  expiredHongBaos: `/api/promotion/v2/users/${user_id}/expired_hongbaos`,
  exchangeHongBaos: `/api/v1/users/${user_id}/hongbao/exchange`,
  captchas: `/api/v1/captchas`,
} 