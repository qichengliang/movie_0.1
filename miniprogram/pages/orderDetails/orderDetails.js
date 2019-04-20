// pages/orderdetails/orderdetails.js
const QRCode = require('../../utils/weapp-qrcode.js')
import rpx2px from '../../utils/rpx2px.js'
let qrcode;
const qrcodeWidth = rpx2px(300)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: "",
    image: '',
    imgsrc: '',
    qrcodeWidth: qrcodeWidth,
    orderMovie: {
      mid: 1,
      title: "绿皮书",
      ordernum: 1,
      orderId: '15727643856764',
      movieTime: "2019/03/13 21:00",
      movieSeat: "九号厅9排8座，9排9座",
      cinema: "SFC上影国际影城",
      cinemaLocation: "高新西区合作路89号龙湖时代天街16栋4F",
      cost: 85,
      code: "1158 3564 9851"
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const z = this
    qrcode = new QRCode('canvas', {
      usingIn: this, // usingIn 如果放到组件里使用需要加这个参数
      // text: "https://github.com/tomfriwel/weapp-qrcode",
      image: 'bg.jpg',
      width: qrcodeWidth,
      height: qrcodeWidth,
      colorDark: "#DA4967",
      colorLight: "white",
      correctLevel: QRCode.CorrectLevel.H,
    });
    z.getCode();
    // 生成图片，绘制完成后调用回调
    qrcode.makeCode(z.data.text, () => {
      // 回调
      qrcode.exportImage(function(path) {
        z.setData({
          imgsrc: path
        })
      })
    })

  },

  getCode: function() {
    var qrtext = "快去电影院观看《" + this.data.orderMovie.title + "》吧!"
    this.setData({
      text: qrtext
    })
    this.renderCode(this.data.text)
  },

  renderCode(value) {
    const z = this
    console.log('make handler')
    qrcode.makeCode(value, () => {
      console.log('make')
      qrcode.exportImage(function(path) {
        console.log(path)
        z.setData({
          imgsrc: path
        })
      })
    })
  },


  // 长按保存
  save: function() {
    console.log('save')
    wx.showActionSheet({
      itemList: ['保存图片'],
      success: function(res) {
        console.log(res.tapIndex)
        if (res.tapIndex == 0) {
          qrcode.exportImage(function(path) {
            wx.saveImageToPhotosAlbum({
              filePath: path,
            })
          })
        }
      }
    })
  }
})