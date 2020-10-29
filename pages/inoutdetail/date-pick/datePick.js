// packageB/pages/screening/screening.js
const app = getApp()
import dateObj from '../../../utils/countDate';
import searchTime from "../../../utils/time";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 组件所需的参数
    nvabarData: {
      showCapsule: 1, //是否显示左上角图标   1表示显示    0表示不显示
      title: '筛选', //导航栏 中间的标题
    },
    // 此页面 页面内容距最顶部的距离
    height: app.globalData.height * 2 + 20,
    //日期选择器：
    date: '',
    date1: '',
    chaxunData: ['当日', '上日', '本周', '上周', '本月', '上月', '近3月','近6月'],
    selectbg: -1,
    startDate: '',
    endDate: ''
  },
  //日期选择器：
  startbindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      startDate: e.detail.value,
      date: e.detail.value
    })
  },
  //日期选择器：
  endbindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date1: e.detail.value,
      endDate: e.detail.value
    })
  },
  onClickLeft(){
    wx.navigateBack({
      delta: 1
    })
  },
  delWork(nb) {
    var that = this
    var pages = getCurrentPages();
    console.log(pages)//可以看到里面一个数组
    var currPage = pages[pages.length - 1];  //当前页面
    var prevPage = pages[pages.length - 2];  //上一个页面
    prevPage.setData({//设置上个页面中message属性值，
      message: nb,
      timeSpan:that.data.chaxunData[that.data.selectbg],
      chooseStarttime:nb.split('/')[0],
      chooseEndtime:nb.split('/')[1],
    })
    wx.navigateBack({
      delta: 1,
      success: function () {
        //调用前一个页面的方法updateTime()。
        prevPage.getListData(nb);
      }
    })
  },
  getDateOlder(date1,date2){
    var list1 = date1.split('-')
    var list2 = date2.split('-')
    if(list1[0]>list2[0]){
      return false
    }else if(list1[1]>list2[1]){
      return false
    }else if(list1[2]>list2[2]){
      return false
    }
    return true
  },
  goPrev: function () {
    if(this.getDateOlder(this.data.startDate , this.data.endDate)){
      this.delWork(this.data.startDate + '/' + this.data.endDate)
    }else{
      wx.showToast({
        title: '结束时间不能早于开始时间',
        icon: 'none',
        duration: 1500,
      });
    }
    
  },
  finish: function () {
    this.setData({
      startDate: this.data.date,
      endDate: this.data.date1
    })
  },
  reset: function () {
    var date = new Date();
    //年
    var year = date.getFullYear();
    //月
    var month = date.getMonth() + 1;
    //日
    var day = date.getDate();
    if (month < 10) {
      month = '0' + month
    }
    if (day < 10) {
      day = '0' + day
    }
    let today = year + '-' + month + '-' + day;
    this.setData({
      startDate: today,
      endDate: today,
      // date:today,
      // date1:today,
      selectbg: -1
    })
  },
  selectbg: function (e) {
    // console.log(e)
    let index = e.currentTarget.dataset['index']
    this.setData({
      selectbg: index
    })
    if (index == 0) {
      var date = new Date();
      //年
      var year = date.getFullYear();
      //月
      var month = date.getMonth() + 1;
      //日
      var day = date.getDate();
      if (month < 10) {
        month = '0' + month
      }
      if (day < 10) {
        day = '0' + day
      }
      let today = year + '-' + month + '-' + day;
      console.log(today);
      this.setData({
        startDate: today,
        endDate: today,
        date: today,
        date1: today
      })
    };
    if (index == 1) {
      let day1 = new Date();
      day1.setTime(day1.getTime() - 24 * 60 * 60 * 1000);
      let today = day1.getFullYear() + '-' + (day1.getMonth() + 1) + "-" + day1.getDate();
      this.setData({
        startDate: today,
        endDate: today,
        date: today,
        date1: today
      })
    };
    if (index == 2) {
      var date = new Date();
      //年
      var year = date.getFullYear();
      //月
      var month = date.getMonth() + 1;
      //日
      var day = date.getDate();
      if (month < 10) {
        month = '0' + month
      }
      if (day < 10) {
        day = '0' + day
      }
      let today = year + '-' + month + '-' + day;
      console.log(today);
      this.setData({
        startDate: dateObj.getWeekStartDate(),
        // endDate:dateObj.getWeekEndDate(),
        endDate: today,
        date: dateObj.getWeekStartDate(),
        // date1:dateObj.getWeekEndDate()
        date1: today
      })
    };
    if (index == 3) {
      this.setData({
        startDate: dateObj.getLastWeekStartDate(),
        endDate: dateObj.getLastWeekEndDate(),
        date: dateObj.getLastWeekStartDate(),
        date1: dateObj.getLastWeekEndDate(),
      })
    };
    if (index == 4) {
      this.setData({
        startDate: dateObj.getMonthStartDate(),
        endDate: dateObj.getMonthEndDate(),
        date: dateObj.getMonthStartDate(),
        date1: dateObj.getMonthEndDate(),
      })
    };
    if (index == 5) {
      this.setData({
        startDate: dateObj.getLastMonthStartDate(),
        endDate: dateObj.getLastMonthEndDate(),
        date: dateObj.getLastMonthStartDate(),
        date1: dateObj.getLastMonthEndDate(),
      })
    };
    if (index == 6) {
      // 今日时间的前三个月
      let before = searchTime.getSearchTime(3);
      console.log(before);
      var date = new Date();
      //年
      var year = date.getFullYear();
      //月
      var month = date.getMonth() + 1;
      //日
      var day = date.getDate();
      if (month < 10) {
        month = '0' + month
      }
      if (day < 10) {
        day = '0' + day
      }
      let today = year + '-' + month + '-' + day;
      this.setData({
        // startDate:dateObj.getQuarterStartDate(),
        startDate: before,
        // endDate:dateObj.getQuarterEndDate(),
        endDate: today,
        // date:dateObj.getQuarterStartDate(),
        date: before,
        // date1:dateObj.getQuarterEndDate(),
        date1: today,
      })
    };
    if(index==7){
      let before = searchTime.getSearchTime(6);
      console.log(before);
      var date = new Date();
      //年
      var year = date.getFullYear();
      //月
      var month = date.getMonth() + 1;
      //日
      var day = date.getDate();
      if (month < 10) {
        month = '0' + month
      }
      if (day < 10) {
        day = '0' + day
      }
      let today = year + '-' + month + '-' + day;
      this.setData({
        // startDate:dateObj.getQuarterStartDate(),
        startDate: before,
        // endDate:dateObj.getQuarterEndDate(),
        endDate: today,
        // date:dateObj.getQuarterStartDate(),
        date: before,
        // date1:dateObj.getQuarterEndDate(),
        date1: today,
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var date = new Date();
    //年
    var year = date.getFullYear();
    //月
    var month = date.getMonth() + 1;
    //日
    var day = date.getDate();
    if (month < 10) {
      month = '0' + month
    }
    if (day < 10) {
      day = '0' + day
    }
    let today = year + '-' + month + '-' + day;
    this.setData({
      date: today,
      date1: today,
      startDate: today,
      endDate: today
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})