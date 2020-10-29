// pages/login/login.js
var req = require('../../utils/requestCommon.js');
var app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        username: '',
        password: ''
    },

    login() {
        let that = this
        if (!that.data.username && !that.data.password) {
            wx.showToast({
                title: '请输入账号或密码',
                duration: 1000,
                icon: 'none',
            })
        } else {
            wx.getSystemInfo({
                success(res) {
                    that.modelpnone = res.model
                }
            })
            const data = {
                modeCode: 'Qkhu8rBrijCl0RE2Mg5X3bqLArqdO9ic', //功能码
                userCode: that.data.username,
                userPass: that.data.password,
                dType: that.modelpnone, //手机设备型号
                appType: '1',
                // location: that.latitude, //位置信息(‘经度’,’经度’)
                location: '111,111',
            }
            console.log("参数", data);
            req.requestAll(data).then(res => {
                if (res.data.code == 1) {
                    wx.showToast({
                        title: '登录成功',
                        icon: 'none',
                        duration: 2000
                    })
                    console.log(res);
                    wx.setStorageSync('sessionId', res.data.data.sessionId)
                    wx.setStorageSync('authority', res.data.data.authority)
                    wx.setStorageSync('userName', res.data.data.userName)
                    wx.setStorageSync('deptName', res.data.data.deptName)
                    wx.setStorageSync('fileUri', res.data.data.fileUri)
                    wx.setStorageSync('orgName', res.data.data.orgName)
                    wx.setStorageSync('orgType', res.data.data.orgType)
                        // return
                    var timeout =  setTimeout(function() {
                        wx.switchTab({
                            url: '../../pages/index/index',
                        })
                        clearTimeout(timeout)
                    }, 2000)
                } else {
                    wx.showToast({
                        title: res.data.msg,
                        icon: 'none',
                    })
                }
            })
        }
    },
    userName(e) {
        this.setData({
            username: e.detail.value
        })
    },
    passWord(e) {
        this.setData({
            password: e.detail.value
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        let that = this
        let interval = setInterval(() => {
            if (that.data.username && that.data.password) {
                that.setData({
                    inputpass: true
                })
            } else {
                that.setData({
                    inputpass: false
                })
            }
        }, 100);
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