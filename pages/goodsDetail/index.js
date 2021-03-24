
import { getGoodsDetail } from '../../api/index.js'

Page({
  data: {
    goods:{},
    images:[]
  },
  onLoad: function (options) {
    const goodsId=options.id
    getGoodsDetail(goodsId).then(res=>{
      console.log(res);
      this.setData({
        goods:res.data,
        images:res.data.goodsCarouselList
      })
    })
  }
})