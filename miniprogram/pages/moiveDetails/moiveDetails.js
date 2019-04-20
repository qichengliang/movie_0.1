// pages/moiveDetails/moiveDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieDetail: {
      mid: 1,
      title: "绿皮书",
      movieClass: "剧情/喜剧/传记",
      actor: "维果·莫里森,马赫莎拉·阿里",
      score: "9.6分",
      onShowTime: "2019-2-26",
      country: "美国",
      introduce: "  一名黑人钢琴家，为前往种族歧视严重的南方巡演，找了一个粗暴的白人混混做司机。在一路开车南下的过程中，截然不同的两人矛盾不断，引发了不少争吵和笑料。但又在彼此最需要的时候，一起共渡难关。行程临近结束，两人也慢慢放下了偏见......绿皮书，是一本专为黑人而设的旅行指南， 标注了各城市中允许黑人进入的旅店、 餐馆。 电影由真实故事改编。 ",
      willingToWatch: true,
      scored: false,
    },
    willingToWatch: false,
    scored: false,
    isFold: true,
    starPath:'../../images/score.png',
    staredPath: '../../images/scored.png',

    actor: [{
        profile: "../../images/actor1.webp",
        name: "彼得·法雷里",
        role: "导演"
      },
      {
        profile: "../../images/actor2.webp",
        name: "维果·莫腾森",
        role: "托尼·利普"
      },
      {
        profile: "../../images/actor3.webp",
        name: "马赫沙拉·阿里",
        role: "唐·雪利"
      },
      {
        profile: "../../images/actor4.webp",
        name: "琳达·卡德里尼",
        role: "德洛瑞丝"
      }
    ],
    comments: [{
        uid: '123512313',
        userName: 'LWRNL',
        userProfile: "../../images/user.png",
        userComment: "真·青春成长题材，教师视觉展现上世纪80年代拘谨的校园教育氛围，幽默不俗、叛逆放纵，残酷真实，笑中伤感，唯有以梦落幕。每个人都想做最完美的自己，可惜追求完美需要承受巨大压力，当醒悟后才懂得只需找准自己的。",
        commentDate: "4天前",
        score:5

      },
      {
        uid: '123512313',
        userName: 'LWRNL',
        userProfile: "../../images/user.png",
        userComment: "真·青春成长题材，教师视觉展现上世纪80年代拘谨的校园教育氛围，幽默不俗、叛逆放纵，残酷真实，笑中伤感，唯有以梦落幕。每个人都想做最完美的自己，可惜追求完美需要承受巨大压力，当醒悟后才懂得只需找准自己的。",
        commentDate: "4天前",
        score: 4



      },
      {
        uid: '123512313',
        userName: 'LWRNL',
        userProfile: "../../images/user.png",
        userComment: "真·青春成长题材，教师视觉展现上世纪80年代拘谨的校园教育氛围，幽默不俗、叛逆放纵，残酷真实，笑中伤感，唯有以梦落幕。每个人都想做最完美的自己，可惜追求完美需要承受巨大压力，当醒悟后才懂得只需找准自己的。",
        commentDate: "4天前",
        score: 2



      },
      {
        uid: '123512313',
        userName: 'LWRNL',
        userProfile: "../../images/user.png",
        userComment: "真·青春成长题材，教师视觉展现上世纪80年代拘谨的校园教育氛围，幽默不俗、叛逆放纵，残酷真实，笑中伤感，唯有以梦落幕。每个人都想做最完美的自己，可惜追求完美需要承受巨大压力，当醒悟后才懂得只需找准自己的。",
        commentDate: "4天前",
        score: 5
      },

    ]

  },
  showAll: function(e) {
    this.setData({
      isFold: !this.data.isFold,
    })
  },

  willToWatch: function() {
    this.setData({
      willingToWatch: true
    })
  },
  scored: function() {
    wx.navigateTo({
      url: "../evaluate/evaluate?mid=" + this.data.mid
    })
    this.setData({
      scored: true
    })
  },

  shortcomment: function() {
    wx.navigateTo({
      url: "../evaluate/evaluate?mid=" + this.data.mid
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    this.setData({
      scored: this.data.movieDetail.scored,
      willingToWatch: this.data.movieDetail.willingToWatch
    })


  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})