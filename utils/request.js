import { getStorage, removeStorage, redirectTo, showToast } from './wx.js'

const whiteRouters = ['/index-infos','/user/login','/categories']

export const request=(params)=>{
  const token = getStorage('token')
  if( !token && !whiteRouters.includes(params.url) ){
    redirectTo('../login/index')
    return Promise.reject('')
  }
  const baseUrl = 'http://47.99.134.126:28019/api/v1'
  let header = {...params.header}
  header.token = token
  return new Promise((resolve,reject)=>{
    wx.request({
      ...params,
      header,
      url:baseUrl + params.url,
      success: (res) => {
        if(res.data.resultCode === 200){
          resolve(res.data)
        }else if(res.data.resultCode === 416){
          showToast('登陆已过期')
          redirectTo('../login/index')
          removeStorage('token')
          resolve({})
        }else{
          reject(res.data.message)
        }
      },
      fail: (err) => {
        reject(err)
      }
    })
  })
}