//index.js
//获取应用实例
const app = getApp()

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
    toDetail() {
        wx.navigateTo({
            url: './indexdetail/indexdetail',
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
    onLoad: function () {

    },
})