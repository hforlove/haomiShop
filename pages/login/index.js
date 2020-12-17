// pages/login/index.js
const md5 = require('../../utils/md5.min.js')

import { login, register } from '../../api/index.js'
import { setStorage, getStorage, switchTab, showToast } from '../../utils/wx.js'

Page({
  data: {
    formData: {
      loginName:'',
      password:''
    },
    type:true,
    rules: [
      {
        name: 'loginName',
        rules: {required: true, message: '用户名必填'},
      },
      {
          name: 'password',
          rules: {required: true, message: '密码必填'},
      }
    ]
  },
  changeType(){
    this.setData({
      type:!this.data.type
    })
  },
  inputChange(e){
    const {field}=e.currentTarget.dataset
    this.setData({
      [`formData.${field}`]:e.detail.value
    })
  },
  onSubmit(){
    this.selectComponent('#form').validate(valid=> {
      if(valid){
        if(this.data.type){
          const params = {
            loginName: this.data.formData.loginName,
            passwordMd5: md5(this.data.formData.password)
          }
          login(params).then(res=>{
            setStorage('token',res.data)
            switchTab('../index/index')
          })
        }else{
          register(this.data.formData).then(res=>{
            showToast('注册成功')
            this.setData({
              type:true
            })
          })
        }
      }
    })
  }
})