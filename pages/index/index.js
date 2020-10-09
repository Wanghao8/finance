//index.js
//获取应用实例
var req = require('../../utils/requestCommon.js');
var app = getApp()
Page({
    data: {
        active: 0,
        icon: {
            index: '../../assets/images/home-2.png',
            indexactive: '../../assets/images/home.png',
            inout: '../../assets/images/detail.png',
            inoutactive: '../../assets/images/detail-2.png',
            set: '../../assets/images/settings.png',
            setactive: '../../assets/images/settings-2.png',
        },
        paytype: 1, //支付方式
        list: [],
        timeout1: ''
    },
    toDetail(e) {
        let id = e.currentTarget.dataset.id
        let sign = e.currentTarget.dataset.sign
        wx.navigateTo({
            url: './indexdetail/indexdetail?id=' + id + '&sign=' + sign,
        })
    },
    changeTab(event) {
        switch (event.detail) {
            case 0:
                wx.switchTab({
                    url: '../index/index',
                })
                break;
            case 1:
                wx.switchTab({
                    url: '../inoutdetail/inoutdetail',
                })
                break;
            case 2:
                wx.switchTab({
                    url: '../setting/setting',
                })
                break;

            default:
                break;
        }
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
        if (msg.indexOf('请先登录') != -1) {
            this.data.timeout1 = setTimeout(function() {
                wx.navigateTo({
                    url: '../login/login',
                })
            }, 2000)
        }
    },
    //格式化当天日期
    getNowFormatDate() {
        var date = new Date();
        var seperator1 = "-";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = year + seperator1 + month + seperator1 + strDate;
        return currentdate;
    },
    //接口部分(获取余额)
    getOverage() {
        let that = this
        const data = {
            modeCode: 'eRUt6xsZ3KKGVqcH87ua2Ns4JEfCs9ah', //功能码
            sessionId: wx.getStorageSync('sessionId'),
            type: '012',
            startTime: that.data.today,
            endTime: that.data.today,
            // enterpriseName: '',
            // startMoney: '',
            // endMoney: '',
            // tradeNo: '',
            // orgId: '',

        }
        req.requestAll(data).then(res => {
            if (res.data.code == 1) {
                let resdata = res.data.data
                let leave = app.addComma(resdata.balance)
                that.setData({
                    leave: leave,
                    incomeMoney: resdata.income.toFixed(2),
                    outcomeMoney: resdata.outcome.toFixed(2),
                })
            } else {
                console.log(res);
                wx.showToast({
                    title: res.data.msg,
                    icon: 'none',
                    duration: 1500,
                    mask: false,
                });
                that.isLoged(res.data.msg)
            }
        })
    },
    //格式化当天日期
    getNowFormatDate(params) {
        let date
        if (params == 'now') {
            date = new Date();
        } else {
            date = new Date(new Date().getTime() - 2592000000)
        }
        var seperator1 = "-";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = year + seperator1 + month + seperator1 + strDate;
        return currentdate;
    },
    //接口部分(分页列表)

    getListData() {
        wx.showLoading({
            title: '加载中',
        })
        let that = this
        let start = that.getNowFormatDate('last')
        let end = that.getNowFormatDate('now')
        const data = {
            modeCode: 'i0GQ9ObadE8JmVQTTJqmfgkRbNWkrqD6', //功能码
            sessionId: wx.getStorageSync('sessionId'),
            pageIndex: 1,
            pageSize: 30,
            startTime: start,
            endTime: end,
            // startTime: that.data.today,
            // endTime: that.data.today,
        }
        req.requestAll(data).then(res => {
            wx.hideLoading({})
            if (res.data.code == 1) {
                let resdata = res.data.data
                let list = resdata.list
                list.forEach((item) => {
                    item.eventTime.hour < 10 ? item.eventTime.hour = item.eventTime.hour.toString().padStart(2, 0) : item.eventTime.hour = item.eventTime.hour
                    item.eventTime.dayOfMonth < 10 ? item.eventTime.dayOfMonth = item.eventTime.dayOfMonth.toString().padStart(2, 0) : item.eventTime.dayOfMonth = item.eventTime.dayOfMonth
                    item.eventTime.minute < 10 ? item.eventTime.minute = item.eventTime.minute.toString().padStart(2, 0) : item.eventTime.minute = item.eventTime.minute
                    item.eventTime.monthValue < 10 ? item.eventTime.monthValue = item.eventTime.monthValue.toString().padStart(2, 0) : item.eventTime.monthValue = item.eventTime.monthValue
                    item.eventTime.second < 10 ? item.eventTime.second = item.eventTime.second.toString().padStart(2, 0) : item.eventTime.second = item.eventTime.second
                        // if (item.checkTime) {
                        //     item.checkTime.hour < 10 ? item.checkTime.hour = item.checkTime.hour.toString().padStart(2, 0) : item.checkTime.hour = item.checkTime.hour
                        //     item.checkTime.dayOfMonth < 10 ? item.checkTime.dayOfMonth = item.checkTime.dayOfMonth.toString().padStart(2, 0) : item.checkTime.dayOfMonth = item.checkTime.dayOfMonth
                        //     item.checkTime.minute < 10 ? item.checkTime.minute = item.checkTime.minute.toString().padStart(2, 0) : item.checkTime.minute = item.checkTime.minute
                        //     item.checkTime.monthValue < 10 ? item.checkTime.monthValue = item.checkTime.monthValue.toString().padStart(2, 0) : item.checkTime.monthValue = item.checkTime.monthValue
                        //     item.checkTime.second < 10 ? item.checkTime.second = item.checkTime.second.toString().padStart(2, 0) : item.checkTime.second = item.checkTime.second
                        // }
                })
                that.setData({
                    list: list,
                    numoflist: resdata.notCheckCount
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
                that.isLoged(res.data.msg)
                wx.hideLoading({})
            }
        })
    },
    //接口部分(获取交易类型)
    getDealType() {
        let that = this
        const data = {
            modeCode: 'BXVWsivLfbkFKN7YSeq88fzmTrY8pS6D', //功能码
            sessionId: wx.getStorageSync('sessionId'),
        }
        req.requestAll(data).then(res => {
            if (res.data.code == 1) {
                let resdata = res.data.data

                that.setData({

                })
            } else {
                console.log(res);
                wx.showToast({
                    title: res.data.msg,
                    icon: 'none',
                    duration: 1500,
                    mask: false,
                });
                that.isLoged(res.data.msg)

            }
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        let that = this
        this.getOverage()
        wx.getSystemInfo({
            success: function(res) {
                console.log(res.statusBarHeight);
                var clientHeight = res.windowHeight,
                    clientWidth = res.windowWidth,
                    // rpxR = 360 / clientWidth;
                    rpxR = clientWidth / 375;
                // rpxR < 1 ? rpxR = 1 : rpxR
                that.setData({
                    hair: res.statusBarHeight,
                    screenHeight: res.screenHeight,
                    rpxR: rpxR
                })
            }
        })
        let timestamp = new Date().getTime()
        let now = app.formatTime(timestamp)
        this.setData({
            today: this.getNowFormatDate(),
            now: now,
            orgName: wx.getStorageSync('orgName'),
            userName: wx.getStorageSync('userName'),
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
        let that = this
        this.setData({
            orgName: wx.getStorageSync('orgName'),
            userName: wx.getStorageSync('userName'),
        })

        this.getOverage()
        this.getListData()
        app.is_login()

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {
        clearTimeout(this.data.timeout1)
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