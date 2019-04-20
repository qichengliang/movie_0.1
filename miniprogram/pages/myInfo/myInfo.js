

Page({

  /**
   * 页面的初始数据
   */
  data: {
    openId: '',
    college: '',
    sex: 1,
    logged: false,
    phone: '',
    grade: '',
    motto: '',
    homePicUrl: "",
    creditstar: 5,
    creditarray: [1, 2, 3, 4, 5],
    flag: true,
    changebkgd: 0,
    changemotto: 0,
    userInfo: {},
    hiddenmodalput: true,
    actionSheetHidden: true,
    hiddenmodalput2: true,
    actionSheetHidden2: true,
  },

  show: function() {
    this.setData({
      flag: false
    })
  },

  changebackground: function(e) {
    wx.navigateTo({
      url: 'changebkgd/changebkgd',
    })
  },

  scoreinfo: function() {
    wx.navigateTo({
      url: '../scoreInfo/scoreInfo',
    })
  },

  getphone: function(e) {
    this.setData({
      phone: e.detail.value
    })
  },



  addphone: function() {
    this.setData({
      hiddenmodalput: !this.data.hiddenmodalput
    })
  },
  //取消按钮
  cancelphone: function() {
    this.setData({
      phone: null,
      hiddenmodalput: true,
    });
  },
  //确认
  confirmphone: function() {
    this.setData({
      hiddenmodalput: true
    })
    var that = this
    wx.request({
      url: `${config.service.host}/weapp/updateUserInfo`,
      method: 'GET',
      data: {
        uid: that.data.openId,
        phone: that.data.phone,
      },
      success(result) {
        util.showSuccess('成功保存数据')
      },
      fail(error) {
        util.showModel('保存失败', error);
      }
    })

  },


  addcollege: function() {
    this.setData({
      //取反
      actionSheetHidden: !this.data.actionSheetHidden
    });
  },

  listenerActionSheet: function() {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },

  setcollege: function(event) {
    this.setData({
      college: event.currentTarget.dataset.name,
      actionSheetHidden: !this.data.actionSheetHidden
    })
    var that = this
    wx.request({
      url: `${config.service.host}/weapp/updateUserInfo`,
      method: 'GET',
      data: {
        uid: that.data.openId,
        college: that.data.college,
      },
      success(result) {
        util.showSuccess('成功保存数据')
      },
      fail(error) {
        util.showModel('保存失败', error);
      }
    })

  },


  addgrade: function() {
    this.setData({
      //取反
      actionSheetHidden2: !this.data.actionSheetHidden2
    });
  },

  listenerActionSheet2: function() {
    this.setData({
      actionSheetHidden2: !this.data.actionSheetHidden2
    })
  },

  setgrade: function(event) {
    this.setData({
      grade: event.currentTarget.dataset.grade,
      actionSheetHidden2: !this.data.actionSheetHidden2
    })
    var that = this
    wx.request({
      url: `${config.service.host}/weapp/updateUserInfo`,
      method: 'GET',
      data: {
        uid: that.data.openId,
        grade: that.data.grade,
      },
      success(result) {
        util.showSuccess('成功保存数据')
      },
      fail(error) {
        util.showModel('保存失败', error);
      }
    })

  },

  addmotto: function() {
    console.log(this.data.motto.length)
    wx.setStorageSync('motto', this.data.motto);
    wx.setStorageSync('count', this.data.motto.length);
    wx.navigateTo({
      url: '../motto/motto',
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    if (wx.getStorageSync('userInfo').nickName) {
      this.setData({
        userInfo: wx.getStorageSync('userInfo'),
        logged: wx.getStorageSync('logged'),
        openId: wx.getStorageSync('openid'),

      })
    } else {
      this.setData({
        userInfo: wx.getStorageSync('userInfo').data.data,
        logged: wx.getStorageSync('logged'),
        openId: wx.getStorageSync('openid'),
      })
    }


  },

  onShow: function() {
    var that = this
    wx.request({
      url: `${config.service.host}/weapp/getUserInfo`,
      method: 'GET',
      data: {
        uid: that.data.openId,
      },
      success(result) {
        console.log(result.data.data)
        that.setData({
          college: result.data.data[0].college,
          credit: result.data.data[0].credit,
          phone: result.data.data[0].phone,
          grade: result.data.data[0].grade,
          motto: result.data.data[0].motto,
          homePicUrl: result.data.data[0].homePicUrl
        })
        if (that.data.college === 'null') {
          that.setData({
            college: '未填写'
          })
        }
        if (that.data.phone === 'null') {
          that.setData({
            phone: '未填写'
          })
        }
        if (that.data.grade === 'null') {
          that.setData({
            grade: '未填写'
          })
        }
        if (that.data.motto === 'null') {
          that.setData({
            motto: '未填写'
          })
        }
        that.setData({
          changemotto: wx.getStorageSync('changemotto')
        })
        if (that.data.changemotto == 1) {
          that.setData({
            motto: wx.getStorageSync('newmotto')
          })
        }
        that.setData({
          changebkgd: wx.getStorageSync('changebkgd')
        })
        console.log(wx.getStorageSync('bkgdpic'))
        if (that.data.changebkgd == 1) {
          that.setData({
            homePicUrl: wx.getStorageSync('bkgdpic')
          })
        }

      },
      fail(error) {
        util.showModel('保存失败', error);
      }
    })


  },

})