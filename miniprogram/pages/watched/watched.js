Page({

  /**
   * 页面的初始数据
   */
  data: {
    uid: '',
    newWatchedMovies: [],
    watchedMovies: [{
      mid: 1,
      title: "绿皮书",
      movieClass: "剧情/喜剧/传记",
      actor: "维果·莫里森,马赫莎拉·阿里",
      score: "9.6分",
      actorShort: ""
    },
    {
      mid: 2,
      title: "绿皮书",
      movieClass: "剧情/喜剧/传记",
      actor: "维果·莫里森,马赫莎拉·阿里,里克",
      score: "9.6分",
      actorShort: "维果·莫里森,马赫莎拉·阿里"
    }
    ],
  },

  actorShort: function () {
    var temp = this.data.watchedMovies
    for (var i = 0; i < temp.length; i++) {
      var shortA = temp[i].actor.slice(0, 15)
      temp[i].actorShort = shortA
    }
    this.setData({
      newWatchedMovies: temp
    })
  },

  details: function (e) {

    var mid = e.currentTarget.dataset.mid
    wx.navigateTo({
      url: "../moiveDetails/moiveDetails?mid=" + mid
    })
  },

  evaluate:function(e){
    var mid = e.currentTarget.dataset.mid
    wx.navigateTo({
      url: "../evaluate/evaluate?mid=" + mid
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  onShow: function () {
    this.actorShort()
    console.log(this.data.newWatchedMovies)
  }


})