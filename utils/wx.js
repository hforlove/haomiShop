export const showToast = (title) => {
  wx.showToast({
    title
  })
}

export const removeStorage = (key) => {
  wx.removeStorageSync(key)
}

export const setStorage = (key, data) => {
  wx.setStorageSync(key, data)
}

export const getStorage = (key) => {
  return wx.getStorageSync(key)
}

export const switchTab=(url)=>{
  wx.switchTab({
    url
  })
}

export const redirectTo=(url)=>{
  wx.redirectTo({
    url,
    success: (res) => {},
    fail: (res) => {},
    complete: (res) => {
      console.log(res);
    },
  })
}