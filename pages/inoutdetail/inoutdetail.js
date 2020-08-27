// pages/inoutdetail/inoutdetail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        active: 1,
        icon: {
            index: '../../assets/images/home-2.png',
            indexactive: '../../assets/images/home.png',
            inout: '../../assets/images/detail.png',
            inoutactive: '../../assets/images/detail-2.png',
            set: '../../assets/images/settings.png',
            setactive: '../../assets/images/settings-2.png',
        },
        show: true, //抽屉显示隐藏
        IO: 1, //收支详情跟分析切换
        paytype: 1, //转账方式
        inout: 1, //支出还是收入
        cardChecked: false,
        aliChecked: false,
        WechatChecked: false,
        bankChecked: false,
        outChecked: false,
        list: [
            { index: 1 },
            { index: 1 },
            { index: 1 },
            { index: 1 },
            { index: 1 },
            { index: 1 },
            { index: 1 },
            { index: 1 },
        ]
    },
    filter() {
        this.setData({
            show: true
        })
    },
    closeDraw() {
        this.setData({
            show: false
        })
    },
    cancelBtn() {
        this.setData({
            show: false
        })
    },
    comfirmBtn() {
        this.setData({
            show: false
        })
    },
    changeCheckbox(e) {
        switch (e.currentTarget.dataset.type) {
            case 'card':
                this.setData({
                    cardChecked: !this.data.cardChecked
                })
                break;
            case 'alipay':
                this.setData({
                    aliChecked: !this.data.aliChecked
                })
                break;
            case 'wechat':
                this.setData({
                    WechatChecked: !this.data.WechatChecked
                })
                break;
            case 'bank':
                this.setData({
                    bankChecked: !this.data.bankChecked
                })
                break;
            case 'out':
                this.setData({
                    outChecked: !this.data.outChecked
                })
                break;

            default:
                break;
        }
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
    selectIO(e) {
        if (e.currentTarget.dataset.type == 1) {
            this.setData({
                IO: 1
            })
        } else {
            this.setData({
                IO: 2
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