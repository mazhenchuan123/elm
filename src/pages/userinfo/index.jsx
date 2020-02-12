import React, { PureComponent } from 'react'
import Head from '@@/Head'
import Lists from '@@/Lists'

import { listDataTop, listDataBtm } from '@/constants/userinfo'
import api from '@/services/api'
import { requestGet } from '@/utils/request'
import './style.less'

export default class extends PureComponent {
	previewFile = (file) => {
		let reader
		if (file) {
			// 创建流对象
			reader = new FileReader()
			reader.readAsDataURL(file)
		}
		// 捕获 转换完毕
		reader.onload = function(e) {
			// 转换后的base64就在e.target.result里面,直接放到img标签的src属性即可
			document.querySelector('img').src = e.target.result
		}
	}
	onFile = (e) => {
		const file = document.createElement('input')
		file.type = 'file'
		file.click()
		file.addEventListener('change', (e) => {
		let files = e.target.files
		this.previewFile(files[0])
		// 上传文件 创建FormData
		let formData = new FormData()
		// upFile就是后台接收的key
		formData.append('upFile', files[0], files[0].name)
		// 将formdata发送到后台即可
		// 我用的 axios.post('url', formData)
	})

	}

	onsignOut = () => {
		requestGet(api.signout)
			.then( res => {
			
			})

	}
	render() {
		return (
			<div className="pages_userinfo">
				<Head title="账户信息" />
				<div className="pages_userinfo_body">
					<div className="pages_userinfo_avatar">
						<div className="userinfo_avatar_img">
							<p>头像</p>
							<span>
								<img src="//elm.cangdu.org/img/default.jpg" alt="" onClick={this.onFile}/>
								<label className="iconfont icon-you1"></label>
							</span>
						</div>
					</div>
					{
						listDataTop.map(v => (
							<Lists {...v} key={v.title} />
						))
					}
				
					{
						listDataBtm.map(v => (
							<React.Fragment key={v.title}>
								<p className="userinfo_prompt">{v.label}</p>
								<Lists {...v} />
							</React.Fragment>
						))
					}
				</div>
				<div className="pages_userinfo_foot">
					<button onClick={this.onsignOut}>退出登录</button>
				</div>
				
      </div>
		)
	}
}

