//logs.js
// const util = require('../../utils/util.js')
const post_data = require('../../data/data.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    var that = this
    var post_context = [
      {
        date: "Sep 18 2016",
        title: "正是虾肥蟹壮时",
        author: "林白衣",
        dateTime: "24小时前"
      },
      {
        date: "Oct 18 2016",
        title: "今晚加班中",
        author: "guonl",
        dateTime: "10小时前"
      }
    ]
    this.setData({
      post_key: post_context
    })
    wx.request({
      url: "https://www.easy-mock.com/mock/5a2b3948158e7b700327e702/getSwiList/swiList", //仅为示例，并非真实的接口地址
      method: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        var post_list = res.data.data.swiList
        that.setData({
          post_list
        })
        
      }
    })
  },
  post_demo: function (post_list) {
    console.log(post_list)
    this.setData({
      post_list
    })
  }
})
