// pages/myAttention/myAttention.js
Page({
  data: {
    my_cat:[
      {
        catId:"1",
        catName: "大橘",
        catUrl:"https://iminx-1258939911.cos.ap-chengdu.myqcloud.com/fzucats/20201113230601.jpg"
      }
    ]
  },
  onLoad:function(){
    var token = wx.getStorageSync('token')
    wx.request({
      url: 'https://iminx.cn/api/wxapp/showLikesLog/',
      method:'post',
      dataType:"json",
      data:{
        token:token, 
        TYPE: "CAT",
        ID:"2"
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success:(res) => {
        console.log("网络请求成功",res.data.my_cat)
        this.setData({
          my_cat:res.data.my_cat
        })
      },
      fail:function(err){
        console.log("网络请求失败",err)
      }
    })
  }
})