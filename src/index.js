import React from 'react'
import ReactDOM from 'react-dom'
import Router from './router'  // 路由
import { store } from './store'  //store
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'   //数据持久化
import { PersistGate } from 'redux-persist/lib/integration/react'
import '@/styles/iconfont.css'
import '@/styles/index.less'
import '@/styles/reset.css'
import '@/styles/rem.js'
import axios from 'axios'
// const ajax = () => {
// 	return axios.get('/api/v2/signout')
// }
// const promise = new Promise((resolve, reject) => {
// 	ajax()
// 		.then(() => resolve('ok'))

// })
// promise
// 	.then(res => {
// 		return ajax()
// 	})
// 		.then( res => {
// 			console.log('第三次')
// 		})



ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistStore(store)}>
			<Router />
		</PersistGate>
	</Provider>
, document.getElementById('root'))