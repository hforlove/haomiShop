
import { getCartList } from '../../api/index.js'

Page({
  data: {
    cartList:[],
    slideButtons:[
      {text:'删除',type: 'warn'}
    ]
  },
  onLoad: function (options) {
    getCartList().then(res=>{
      res.data.map(item=>{
        item.check = true
      })
      this.setData({
        cartList:res.data
      })
    })
  }
})