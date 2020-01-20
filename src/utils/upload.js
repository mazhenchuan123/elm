 // 上传图片  
 upload: function upload(params) {
  return uploadFile(`/common${API.V1}/creditSharePlatform/file/upload`, params);
}

export function uploadFile(url, params, onProgress) {
url = comboUrl(url);
const fd = new FormData();
fd.append('files', params.file);
// return isomorphicFetch(url, {
//     method: 'POST',
//     credentials: 'include',
//     body: fd
// }).then(response => {
//     return filterResponse(response);
// })
//     .catch(function(err) {
//         console.log('Fetch Error : %S', err);
//     });

// fetch暂时不支持onprogress，这里为了获取上传进度，只能用XMLHttpRequest 2。
// 不过FetchObserver对象已在草案阶段，规范实施后就能获取请求的进度
return new Promise(function(resolve, reject) {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', url, true);
  xhr.onload = function() {
      resolve(filterResponse(new Response(xhr.response)));
  };
  xhr.onerror = function(e) {
      reject(e);
  };
  xhr.upload.onprogress = function(e) {
      onProgress && onProgress(Math.floor(e.loaded / e.total * 100));
  };
  xhr.send(fd);
});
}