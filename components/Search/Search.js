// components/Search/Search.js
Component({
  options: {
    addGlobalClass:true
  },
  data: {
    keyword:''
  },
  methods: {
    onInput(e){
      this.setData({
        keyword:e.detail.value
      })
    },
    onSearch(){
      this.triggerEvent('onSearch',this.data.keyword)
    }
  }
})
