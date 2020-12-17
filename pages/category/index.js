
import { getCateGory } from '../../api/index.js'
import { category } from '../../mock/category.js'

Page({
  data: {
    cateNav:[],
    cateList:[],
    active:0
  },
  onLoad(){
    getCateGory().then(res=>{
      this.setData({
        cateNav:res.data,
        cateList:res.data[0].secondLevelCategoryVOS
      })
    }).catch(err=>{
      // import { res } from '../../mock/category.js'
      this.setData({
        cateNav:category.data,
        cateList:category.data[0].secondLevelCategoryVOS
      })
    })
  },
  changeCate(e){
    const { index } = e.currentTarget.dataset
    this.setData({
      active:index,
      cateList:this.data.cateNav[index].secondLevelCategoryVOS
    })
  }
})