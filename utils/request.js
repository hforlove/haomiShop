export const request=(params)=>{

  const baseUrl = 'http://47.99.134.126:28019/api/v1'

  return new Promise((resolve,reject)=>{
    wx.request({
      ...params,
      url:baseUrl + params.url,
      success: (res) => {
        if(res.data.resultCode === 200){
          resolve(res.data)
        }else{
          reject(res)
        }
      },
      fail: (err) => {
        reject(err)
      }
    })
  })
}