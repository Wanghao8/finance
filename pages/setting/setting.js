// pages/setting/setting.js
var req = require('../../utils/requestCommon.js');
var app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        active: 2,
        icon: {
            index: '../../assets/images/home-2.png',
            indexactive: '../../assets/images/home.png',
            inout: '../../assets/images/detail.png',
            inoutactive: '../../assets/images/detail-2.png',
            set: '../../assets/images/settings.png',
            setactive: '../../assets/images/settings-2.png',
        },
        show: false,
        actions: [
            { name: '退出登录', color: '#4A4A4A' },
        ],
    },
    onClose() {
        this.setData({ show: false });
    },

    onSelect(event) {
        console.log(event.detail);
    },
    //修改密码
    changePass() {
        wx.navigateTo({
            url: './editpassword/editpassword',
        })
    },
    //清除缓存
    clearStorage() {
        let that = this
        wx.showModal({
            title: '确定清除缓存？',
            confirmColor: '#E3A33D',
            success(res) {
                if (res.confirm) {
                    try {
                        wx.clearStorageSync()
                        wx.getStorageInfo({
                            success(res) {
                                let size = res.currentSize
                                console.log(size)
                                if (size == 1) {
                                    size = 0
                                }
                                that.setData({
                                    size: size
                                })
                            }
                        })
                        wx.showToast({
                            title: '清除成功',
                        })
                    } catch (e) {
                        console.log(e);
                    }
                } else if (res.cancel) {
                    console.log('用户点击取消')
                }
            }
        })
    },
    //退出登录
    logOut() {
        this.setData({
            show: true
        })
    },
    // tabbar
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
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        let that = this
        wx.getStorageInfo({
            success(res) {
                console.log(res.currentSize)
                that.setData({
                    size: res.currentSize
                })
            }
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