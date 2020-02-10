import React, { PureComponent } from 'react'
import './style.less'

export default class extends PureComponent {
  onFile = () => {
    const file = document.createElement('input')
    file.type = 'file'
    file.click()
  }

  onFileChange = (e) => {
    e.persist();

    // console.log('e.target.value', e.target.value, e.target.value.indexOf(','));
    if (e.target.value.indexOf(',') !== -1) {
        message.info('图片名含逗号导致无法上传,请修改');
        return;
    }
    if(!e.target.value.match(/\.(jpg|png|gif)$/)) {
        message.info('请上传后缀名.jpg或.png或.gif的图片');
        return;
    }
    if (e.target.files.length === 0) {
        return;
    }
    
    // console.log('图片', e, 'e.target.files[0]', e.target.files[0]);
    service.upload({file: e.target.files[0]}).then(res => {

        this.setState({
            imgId: res.data.fileSystemList[0].id
        });
        this.props.saveValue('imgId', res.data.fileSystemList[0].id);
    });
}

	render() {
    
		return (
			// <div className="comm_uploadImg" onClick={this.onFile}>
      // 	<img src="//elm.cangdu.org/img/default.jpg" alt=""/>
      // </div>
      <div>
        <div  className="upload-row">
          <label className="upload-box" >
            <input  />
            {imgId ? <img  className={'selectImg'}   src={`/common/api/v1.0/creditSharePlatform/file/downloadExtend?attachment=false&&id=${imgId}`} /> : <img  className={'originImg'}   src={ImgPo} />}
          </label>
        </div>
        <p className={style.littleText}>*图片大小不超过5M，推荐使用尺寸为816*320的照片，或同比例缩放图片</p>
        <label  htmlFor="business">
          <p className={style.inpDiv}   >  <span className={style.text}>上传图片</span>   <input onChange={e => onFileChange(e)} type="file" id="business" accept=".png,.jpg,.gif"/>    </p>
        </label>
      </div>
    )
	}
}

