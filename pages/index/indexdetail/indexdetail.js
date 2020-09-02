// pages/index/indexdetail/indexdetail.js
var req = require('../../../utils/requestCommon.js');
var app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        paytype: 1, //支付方式
        id: '' //交易ID
    },
    // 审核确认按钮点击事件
    checkComfirm() {
        wx.switchTab({
            url: '../index',
        })
    },
    // navigation返回按钮点击事件
    onClickLeft() {
        wx.navigateBack({
            delta: 0,
        })
    },
    // 是否登陆过，若在别的地方登陆，跳转登录页
    isLoged: function (msg) {
        if (msg.indexOf('你') != -1) {
            let timeout1 = setTimeout(function () {
                wx.navigateTo({
                    url: '../login/login',
                })
            }, 2000)
        }
    },
    //接口部分(获取明细)
    getDetail() {
        let that = this
        const data = {
            modeCode: 'u2BwleJDhx9ehEp9hIqo3fkCWiExGYJ3', //功能码
            sessionId: wx.getStorageSync('sessionId'),
            id: that.data.id,
        }
        console.log(data);
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
        console.log(data);
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
            }
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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