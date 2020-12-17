
import { getGoodsList } from '../../api/index.js'
import { goods } from '../../mock/goods.js'

Page({
  data: {
    goodsList:[],
    totalPage:0,
    query:{
      keyword:'',
      pageNumber:1
    }
  },
  onReachBottom(){
    if(this.data.totalPage>this.data.query.pageNumber){
      this.setData({
        ['query.pageNumber']:this.data.query.pageNumber+1
      })
      this.getGoodsList()
    }else{
      console.log('没有下一页数据了');
    }
  },
  onSearch(e){
    this.setData({
      goodsList:[],
      totalPage:0,
      query:{
        keyword:e.detail,
        pageNumber:1
      }
    })
    this.getGoodsList()
  },
  getGoodsList(){
    getGoodsList(this.data.query).then(res=>{
      let goodsList=this.data.goodsList
      goodsList.push(...res.data.list)
      this.setData({
        goodsList,
        totalPage:res.data.totalPage
      })
    }).catch(err=>{
      let goodsList=this.data.goodsList
      goodsList.push(...goods.data.list)
      this.setData({
        goodsList,
        totalPage:goods.data.totalPage
      })
    })
  }
})