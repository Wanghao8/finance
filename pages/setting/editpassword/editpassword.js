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
        timeout1: '',
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
    //修改密码
    comfirm: function() {
        let that = this
        if (!that.data.oldpass) {
            wx.showToast({
                title: '请输入原密码',
                icon: 'none',
            })
        } else if (!that.data.newpass && !that.data.confirmpass) {
            wx.showToast({
                title: '请输入新密码',
                icon: 'none',
            })
        } else if (that.data.newpass.length < 6) {
            wx.showToast({
                title: '密码不少于6位',
                icon: 'none',
            })
        } else if (that.data.newpass.length > 16) {
            wx.showToast({
                title: '密码不超过16位',
                icon: 'none',
            })
        } else if (that.data.newpass !== that.data.comfirmpass) {
            wx.showToast({
                title: '两次密码输入不一致',
                icon: 'none',
            })
        } else {
            that.debounce(that.editPassword(), 5000)
        }
    },
    editPassword: function() {
        let that = this
        const data = {
            sessionId: wx.getStorageSync('sessionId'),
            modeCode: "TR7ZOEjbnqrG6z8OtVdSVkXzRJBiY9X9",
            oldPassWord: that.data.oldpass,
            newPassWord: that.data.comfirmpass,
        }

        req.requestAll(data).then(res => {
            if (res.data.code == 1) {
                wx.showToast({
                    title: "修改成功",
                    icon: 'none',
                })
                wx.removeStorageSync('sessionId')
                    //登录成功后跳转页面延时
                that.data.timeout1 = setTimeout(function() {
                    wx.navigateTo({
                        // url: '../../pages/login/login?changePass=1',
                        url: '../../login/login?changePass=1',
                    })
                }, 2000)
            } else {
                wx.showToast({
                    title: res.data.msg,
                    icon: 'none',
                })
            }
        })
    },
    debounce: function(func, wait) {
        let timer;
        return function() {
            let context = this; // 这边的 this 指向谁?
            let args = arguments; // arguments中存着e
            if (timer) clearTimeout(timer);
            let callNow = !timer;
            timer = setTimeout(() => {
                timer = null;
            }, wait)

            if (callNow) func.apply(context, args);
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