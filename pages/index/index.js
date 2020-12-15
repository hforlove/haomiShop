import { getHomeData } from '../../api/index.js'

Page({
  data: {
    statusBarTop: 0,
    statusBarHeight: 16,
    carousels: [],
    hotGoodses: [],
    newGoodses: [],
    recommendGoodses: [],  
    navList: [
      { id: 1, title: '毫米超市' },
      { id: 2, title: '数码电器' },
      { id: 3, title: '毫米服饰' },
      { id: 4, title: '毫米生鲜' },
      { id: 5, title: '毫米到家' },
      { id: 6, title: '充值缴费' },
      { id: 7, title: '9.9元拼' },
      { id: 8, title: '领 劵' },
      { id: 9, title: '领金贴' },
      { id: 10, title: 'PLUS会议' }
    ]
  },
  onShow() {
    const {top,height} = wx.getMenuButtonBoundingClientRect()
    this.setData({
      statusBarTop: top,
      statusBarHeight: height
    })
  },
  onLoad(){
    this.getHomeData()
  },
  getHomeData(){
    getHomeData().then(res=>{
      const {carousels, hotGoodses, newGoodses, recommendGoodses} = res.data
      this.setData({
        carousels, hotGoodses, newGoodses, recommendGoodses
      })
    })
  }
})
