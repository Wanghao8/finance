// pages/index/indexdetail/indexdetail.js
var req = require('../../../utils/requestCommon.js');
var app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        paytype: 1, //支付方式
        id: '', //交易ID
        timeout1: '',
        timeout2: '',
    },
    // 审核确认按钮点击事件
    checkComfirm() {
        this.checkPass()
    },
    // navigation返回按钮点击事件
    onClickLeft() {
        wx.navigateBack({
            delta: 0,
        })
    },
    // 是否登陆过，若在别的地方登陆，跳转登录页
    isLoged: function(msg) {
        if (msg.indexOf('你') != -1) {
            this.data.timeout1 = setTimeout(function() {
                wx.navigateTo({
                    url: '../login/login',
                })
            }, 2000)
        }
    },
    //接口部分(获取明细)
    getDetail() {
        wx.showLoading({
            title: '加载中',
        })
        let that = this
        const data = {
            modeCode: 'u2BwleJDhx9ehEp9hIqo3fkCWiExGYJ3', //功能码
            sessionId: wx.getStorageSync('sessionId'),
            id: that.data.id,
        }
        req.requestAll(data).then(res => {
            if (res.data.code == 1) {
                let resdata = res.data.data
                let eventTime = resdata.eventTime
                let checkTime = resdata.checkTime
                eventTime.hour < 10 ? eventTime.hour = eventTime.hour.toString().padStart(2, 0) : eventTime.hour = eventTime.hour
                eventTime.dayOfMonth < 10 ? eventTime.dayOfMonth = eventTime.dayOfMonth.toString().padStart(2, 0) : eventTime.dayOfMonth = eventTime.dayOfMonth
                eventTime.minute < 10 ? eventTime.minute = eventTime.minute.toString().padStart(2, 0) : eventTime.minute = eventTime.minute
                eventTime.monthValue < 10 ? eventTime.monthValue = eventTime.monthValue.toString().padStart(2, 0) : eventTime.monthValue = eventTime.monthValue
                eventTime.second < 10 ? eventTime.second = eventTime.second.toString().padStart(2, 0) : eventTime.second = eventTime.second
                if (checkTime) {
                    checkTime.hour < 10 ? checkTime.hour = checkTime.hour.toString().padStart(2, 0) : checkTime.hour = checkTime.hour
                    checkTime.dayOfMonth < 10 ? checkTime.dayOfMonth = checkTime.dayOfMonth.toString().padStart(2, 0) : checkTime.dayOfMonth = checkTime.dayOfMonth
                    checkTime.minute < 10 ? checkTime.minute = checkTime.minute.toString().padStart(2, 0) : checkTime.minute = checkTime.minute
                    checkTime.monthValue < 10 ? checkTime.monthValue = checkTime.monthValue.toString().padStart(2, 0) : checkTime.monthValue = checkTime.monthValue
                    checkTime.second < 10 ? checkTime.second = checkTime.second.toString().padStart(2, 0) : checkTime.second = checkTime.second
                    var ckeckDate = checkTime.year + '/' + checkTime.monthValue + '/' + checkTime.dayOfMonth
                    var checktime = checkTime.hour + ':' + checkTime.minute + ':' + checkTime.second
                }
                var dealTime = eventTime.year + '-' + eventTime.monthValue + '-' + eventTime.dayOfMonth + ' ' + eventTime.hour + ':' + eventTime.minute + ':' + eventTime.second
                var checkState = resdata.checkState
                checkState ? checkState : checkState = '0'
                that.setData({
                    companyName: resdata.enterpriseName,
                    money: app.addComma(resdata.money),
                    newMoney: resdata.newMoney.toFixed(2),
                    tradeType: resdata.tradeType,
                    location: resdata.orgName,
                    eventTime: dealTime,
                    tradeNo: resdata.tradeNo,
                    ckeckDate: ckeckDate,
                    checktime: checktime,
                    toAccount: resdata.toAcnt,
                    toName: resdata.toName,
                    checkState: checkState,
                    checkUserName: resdata.checkUserName,
                })
                wx.hideLoading({})
            } else {
                wx.hideLoading({})
                console.log(res);
                wx.showToast({
                    title: res.data.msg,
                    icon: 'none',
                    duration: 1500,
                    mask: false,
                });
            }
        })
    },
    //接口部分(审核操作)
    checkPass() {
        let that = this
        const data = {
            modeCode: 'sOwGsJVzXuhzni8HEOuZOBydBeb0zVxZ', //功能码
            sessionId: wx.getStorageSync('sessionId'),
            id: that.data.id,
            checkState: 1,
            rejectReason: ''
        }
        req.requestAll(data).then(res => {
            if (res.data.code == 1) {
                wx.showToast({
                    title: res.data.msg,
                    icon: 'none',
                    duration: 1500,
                    mask: false,
                });
                // return
                that.data.timeout2 = setTimeout(() => {
                    wx.switchTab({
                        url: '../index',
                    })
                }, 1500);
            } else {
                console.log(res);
                wx.showToast({
                    title: res.data.msg,
                    icon: 'none',
                    duration: 1500,
                    mask: false,
                });
            }
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.setData({
            id: options.id,
            sign: options.sign
        })
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
        this.getDetail()
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {
        clearTimeout(this.data.timeout1)
        clearTimeout(this.data.timeout2)
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