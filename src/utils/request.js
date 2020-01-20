import axios from 'axios'
import _ from 'loadsh'
import qs from 'qs'

export function requestPost(url, action = {}) {
	// const store = window.store.getState()
	// const token = _.get(store, 'login.userInfo', '')
	// if(token) {
	// 	action = { ...action, token }
	// }
	return new Promise((resolve, reject) => {	
		axios({
			method: 'post',
			url,
			data: action,
		})
			.then(res => {
				resolve(res.data)
			})
			.catch(err => {
				reject(err)
			})
	})
}

export function requestGet(url, action = {}) {
	return new Promise((resolve, reject) => {
		axios({
			method: 'get',
			url,
			params: action,
		})
			.then(res => {
				resolve(res.data)
			})
			.catch(err => {
				reject(err)
			})
	})
}

export function requestDelete(url, action = {}) {
	return new Promise((resolve, reject) => {
		axios({
			method: 'Delete',
			url,
			params: qs.stringify(action),
		})
			.then(res => {
				resolve(res.data)
			})
			.catch(err => {
				reject(err)
			})
	})
}
