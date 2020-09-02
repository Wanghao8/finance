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
        list: [{
                index: 1
            },
            {
                index: 1
            },
            {
                index: 1
            },
            {
                index: 1
            },
            {
                index: 1
            },
            {
                index: 1
            },
        ],
    },
    toDetail(e) {
        console.log(e);
        let id = e.currentTarget.dataset.id
        wx.navigateTo({
            url: './indexdetail/indexdetail?id=' + id,
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
            let timeout1 = setTimeout(function() {
                wx.navigateTo({
                    url: '../login/login',
                })
            }, 2000)
        }
    },
    //接口部分(获取余额)
    getOverage() {
        let that = this
        const data = {
            modeCode: 'eRUt6xsZ3KKGVqcH87ua2Ns4JEfCs9ah', //功能码
            sessionId: wx.getStorageSync('sessionId'),
            type: '012',
            startTime: '2020-08-08',
            endTime: '2020-08-30',
            enterpriseName: '',
            startMoney: '',
            endMoney: '',
            tradeNo: '',
            orgId: '',

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
    //接口部分(分页列表)
    getListData() {
        let that = this
        const data = {
            modeCode: 'i0GQ9ObadE8JmVQTTJqmfgkRbNWkrqD6', //功能码
            sessionId: wx.getStorageSync('sessionId'),
            pageIndex: 1,
            pageSize: 10,
            startTime: '2020-08-01',
            endTime: '2020-08-30',
            // enterpriseName: '',
            // startMoney: 0,
            // endMoney: 0,
            // tradeType: '',
            // tradeNo: '',
            // orgId: '',
        }
        console.log(data);
        req.requestAll(data).then(res => {
            if (res.data.code == 1) {
                let resdata = res.data.data
                console.log(resdata);
                that.setData({
                    list: resdata.list
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
    //接口部分(获取交易类型)
    getDealType() {
        let that = this
        const data = {
            modeCode: 'BXVWsivLfbkFKN7YSeq88fzmTrY8pS6D', //功能码
            sessionId: wx.getStorageSync('sessionId'),
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
                that.isLoged(res.data.msg)
            }
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        app.is_login()
        let that = this
        wx.getSystemInfo({
            success: function(res) {
                console.log(res.model)
                console.log(res.statusBarHeight)
                console.log(res.screenHeight)
                console.log(res.windowHeight)
                that.setData({
                    hair: res.statusBarHeight,
                    screenHeight: res.screenHeight
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
        let that = this
        app.is_login()
        this.getListData()
        this.getDealType()

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