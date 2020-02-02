import React, { PureComponent } from 'react'
import Head from '@@/Head'
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

	render() {
	
		return (
			<div className="pages_download">
				<Head title="下载" />
				<img src="//elm.cangdu.org/img/default.jpg" alt="" onClick={this.onFile}/>
			</div>
		)
	}
}

