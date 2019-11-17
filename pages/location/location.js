// pages/location/location.js

// 引入腾讯地图SDK核心类
var QQMapWX = require('../../utils/qqmap-wx-jssdk.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //选中的城市code
    selAddress: "",
    //是否弹出地区选择
    show: false,
    //可选择的地区对象
    areaList: {
      province_list: {
        110000: '北京市',
        120000: '天津市'
      },
      city_list: {
        110100: '北京市',
        110200: '县',
        120100: '天津市',
        120200: '县'
      },
      // county_list: {
      //   110101: '东城区',
      //   110102: '西城区',
      //   110105: '朝阳区',
      //   110106: '丰台区',
      //   120101: '和平区',
      //   120102: '河东区',
      //   120103: '河西区',
      //   120104: '南开区',
      //   120105: '河北区',
      //   // ....
      // }
    },

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.userLocation();
  },

  //展示地区选择弹窗
  showPopup() {
    this.setData({
      show: true
    });
  },
  //关闭弹窗
  onClose() {
    this.setData({
      show: false
    });
  },
  selectAddress(res) {
    console.log(res.detail.values);
    this.onClose();
  },
  //获取当前所在城市
  userLocation() {
    wx.getLocation({
      type: 'wgs84',
      success(res) {
        //纬度
        const latitude = res.latitude
        console.log(latitude);
        //经度
        const longitude = res.longitude
        console.log(longitude);
        const speed = res.speed
        const accuracy = res.accuracy

        //发送请求通过经纬度反查地址信息  
        var getAddressUrl = "https://apis.map.qq.com/ws/geocoder/v1/?location=" + res.latitude + "," + res.longitude + "&key=RABBZ-IKCCW-Z64RU-RC536-PHBA2-QHBQT";

        wx.request({
          url: getAddressUrl,
          success(res) {
            console.log(res.data)
          }
        })


      }
    })
  }



})