var util = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    uid: '',
    time: null,
    orderMovies: {
      finished: [{
          mid: 1,
          title: "绿皮书",
          ordernum: 1,
          movieTime: "2019/03/13 21:00",
          movieSeat: "九号厅9排8座，9排9座",
          cinema: "SFC上影国际影城",
          cost: 85
        }


      ],
      unfinished: [{
          mid: 1,
          title: "绿皮书",
          ordernum: 1,
          movieTime: "2019/03/13 21:00",
          movieSeat: "九号厅9排8座，9排9座",
          cinema: "SFC上影国际影城",
          cost: 85


        },
        {
          mid: 1,
          title: "绿皮书",
          ordernum: 1,
          movieTime: "2019/03/13 21:00",
          movieSeat: "九号厅9排8座，9排9座",
          cinema: "SFC上影国际影城",
          cost: 85

        }


      ]
    }
  },



  orderdetails: function(e) {

    var ordernum = e.currentTarget.dataset.ordernum
    wx.navigateTo({
      url: "../orderDetails/orderDetails?ordernum=" + ordernum
    })
  },

  evaluate: function(e) {
    var mid = e.currentTarget.dataset.mid
    wx.navigateTo({
      url: "../evaluate/evaluate?mid=" + mid
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function(options) {

    
    this.setData({
      uid: "ooAr74jfURuYwbhUVTZOay_HlGaw"
    })

  },
  onShow: function() {

    var time = util.formatTime(new Date());
    this.setData({
      time: time
    });
    console.log("当前时间:" + this.data.time)
    console.log("当前用户id:" + this.data.uid)
    var that = this
    wx.cloud.callFunction({
      name: 'getMyOrder',
      data: {
        uid: that.data.uid
      },
      success: res => {
        that.data.orderMovies.finished = res.result.finished.data
        that.data.orderMovies.unfinished = res.result.unfinished.data
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
      }
    })

  }



})