// pages/setting/editpassword/editpassword.js
var req = require('../../../utils/requestCommon.js');
var app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        oldpass: '',
        newpass: '',
        comfirmpass: '',
    },
    onClickLeft() {
        wx.navigateBack({
            delta: 0,
        })
    },
    oldPass(e) {
        this.setData({
            oldpass: e.detail.value
        })
    },
    newPass(e) {
        this.setData({
            newpass: e.detail.value
        })
    },
    comfirmPass(e) {
        this.setData({
            comfirmpass: e.detail.value
        })
    },
    comfirm() {
        if (!this.data.oldpass) {
            wx.showToast({
                title: '请输入密码',
                icon: 'none'
            })
        }
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