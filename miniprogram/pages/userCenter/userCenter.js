Page({
  data: {
    userInfo: {},
    logged: false,
  },

  onLoad: function() {
    this.setData({
      userInfo: wx.getStorageSync('userInfo'),
      logged: wx.getStorageSync('logged'),
    })
    var uid = this.data.userInfo.openId
    wx.setStorageSync('uid', uid);
  },

  onShow: function() {

  },

  collection: function() {
    wx.navigateTo({
      url: '../myCollection/myCollection',
    })
  },
  myOrder: function() {
    wx.navigateTo({
      url: '../myOrder/myOrder',
    })
  },
  willings: function() {
    wx.navigateTo({
      url: '../willings/willings',
    })
  },
  watched: function() {
    wx.navigateTo({
      url: '../watched/watched',
    })
  },
  instructions: function() {
    wx.navigateTo({
      url: '../instructions/instructions',
    })
  },


})