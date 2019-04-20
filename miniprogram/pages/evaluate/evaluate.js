Page({

  /**
   * 页面的初始数据
   */
  data: {
    evaluate: '',
    mid: 1,
    userInputLimlt: 100,
    score: 5,
    click: [false, false, false, false, false],
    starPath: ['../../images/scored.png', '../../images/scored.png', '../../images/scored.png', '../../images/scored.png', '../../images/scored.png']

  },

  score1: function() {
    if (this.data.click[0] === false) {
      this.setData({
        click: [true, false, false, false, false],
        starPath: ['../../images/scored.png', '../../images/score.png', '../../images/score.png', '../../images/score.png', '../../images/score.png'],
        score: 1
      })
    } else {
      this.setData({
        click: [false, false, false, false, false],
        starPath: ['../../images/score.png', '../../images/score.png', '../../images/score.png', '../../images/score.png', '../../images/score.png'],
        score: 0
      })
    }
  },
  score2: function() {
    if (this.data.click[1] === false) {
      this.setData({
        click: [true, true, false, false, false],
        starPath: ['../../images/scored.png', '../../images/scored.png', '../../images/score.png', '../../images/score.png', '../../images/score.png'],
        score: 2
      })
    } else {
      this.setData({
        click: [false, false, false, false, false],
        starPath: ['../../images/score.png', '../../images/score.png', '../../images/score.png', '../../images/score.png', '../../images/score.png'],
        score: 0
      })
    }

  },
  score3: function() {
    if (this.data.click[2] === false) {
      this.setData({
        click: [true, true, true, false, false],
        starPath: ['../../images/scored.png', '../../images/scored.png', '../../images/scored.png', '../../images/score.png', '../../images/score.png'],
        score: 3
      })
    } else {
      this.setData({
        click: [false, false, false, false, false],
        starPath: ['../../images/score.png', '../../images/score.png', '../../images/score.png', '../../images/score.png', '../../images/score.png'],
        score: 0
      })
    }

  },
  score4: function() {
    if (this.data.click[3] === false) {
      this.setData({
        click: [true, true, true, true, false],
        starPath: ['../../images/scored.png', '../../images/scored.png', '../../images/scored.png', '../../images/scored.png', '../../images/score.png'],
        score: 4
      })
    } else {
      this.setData({
        click: [false, false, false, false, false],
        starPath: ['../../images/score.png', '../../images/score.png', '../../images/score.png', '../../images/score.png', '../../images/score.png'],
        score: 0
      })
    }

  },
  score5: function() {
    if (this.data.click[4] === false) {
      this.setData({
        click: [true, true, true, true, true],
        starPath: ['../../images/scored.png', '../../images/scored.png', '../../images/scored.png', '../../images/scored.png', '../../images/scored.png'],
        score: 5
      })
    } else {
      this.setData({
        click: [false, false, false, false, false],
        starPath: ['../../images/score.png', '../../images/score.png', '../../images/score.png', '../../images/score.png', '../../images/score.png'],
        score: 0
      })
    }
  },


  bindWordLimit: function(e) {
    this.setData({
      userInputLimlt: 100 - e.detail.value.length
    })
  },

  submit: function(e) {
    this.setData({
      evaluate: e.detail.value
    })
    console.log(this.data.evaluate)
    var that = this
    if (e.detail.value > 0) {
      wx.request({
        url: `${config.service.host}/weapp/updateMoiveEvaluate`,
        method: 'GET',
        data: {
          mid: that.data.mid,
          evaluate: that.data.evaluate,
        },
        success(result) {
          util.showSuccess('评价成功！')
          wx.navigateBack()
        },
        fail(error) {
          util.showModel('评价失败', error);
        }
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      mid: options.mid
    })
  },

})