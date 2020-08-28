// pages/inoutdetail/inoutdetail.js
import * as echarts from '../../ec-canvas/echarts';
let chartBar1;
let chartBar2;
let chartLine;
let chartPie;
let lineoption = {
    grid: {
        top: '10%',
        bottom: '15%',
        right: '5%',
        left: '10%'
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        // inverse: true,
        axisLabel: {
            show: true,
        },
        splitNumber: 6,
        // data: ['14', '08'],
        data: [],
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
    },
    yAxis: {
        x: 'center',
        type: 'value',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
    },
    series: {
        name: 'A',
        type: 'line',
        smooth: true,
        showSymbol: false,
        // showSymbol: true,
        label: {
            show: true,
            position: 'top'
        },
        lineStyle: {
            normal: {
                color: 'rgba(49,99,232,1)',
            },
        },
        // areaStyle: {
        //   normal: {
        //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        //         offset: 0,
        //         color: 'rgba(49,99,232,0.5)'
        //       },
        //       {
        //         offset: 1,
        //         color: 'rgba(49,99,232,0)'
        //       }
        //     ], false),
        //     shadowColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        //         offset: 0,
        //         color: 'rgba(49,99,232,0.8)'
        //       },
        //       {
        //         offset: 1,
        //         color: 'rgba(49,99,232,0)'
        //       }
        //     ], false),
        //     shadowBlur: 20
        //   }
        // },
        data: []
    }
}
let baroption1 = {
    grid: {
        top: '12%',
        bottom: '12%',
        right: '5%',
        left: '10%'
    },
    yAxis: [{
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
    }],
    xAxis: {
        type: 'category',
        // inverse: true,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        // data: ['08', '07']
        data: []
    },
    series: {
        name: '车次',
        type: 'bar',
        // zlevel: 1,
        label: {
            show: true,
            position: 'top'
        },
        barWidth: 10,
        itemStyle: {
            barBorderRadius: 5,
            color: 'rgba(49,99,232,1)'
        },
        // data: [2, 1],
        data: [],
    }
}
let baroption2 = {
    grid: {
        top: '12%',
        bottom: '12%',
        right: '5%',
        left: '10%'
    },
    yAxis: [{
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
    }],
    xAxis: {
        type: 'category',
        // inverse: true,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        // data: ['08', '07']
        data: []
    },
    series: {
        name: '车次',
        type: 'bar',
        // zlevel: 1,
        label: {
            show: true,
            position: 'top'
        },
        barWidth: 10,
        itemStyle: {
            barBorderRadius: 5,
            color: 'rgba(49,99,232,1)'
        },
        // data: [2, 1],
        data: [],
    }
}
let pieoption = {
    tooltip: {
        show: false,
        trigger: 'none',
    },
    color: ["#3163E8", "rgba(49,99,232,0.60)", "rgba(49,99,232,0.40)", "rgba(49,99,232,0.20)"],
    series: {
        // label: {
        //   normal: {
        //     fontSize: 12
        //   }
        // },
        startAngle: 120,
        grid: {
            top: '10%',
            bottom: '0',
            left: '',
            right: '',
            height: '90%'
        },
        label: {
            formatter: '{b} {d}%',
            show: true,
            position: 'top',
            fontStyle: 'normal',
            fontSize: 8
        },
        type: 'pie',
        center: ['50%', '52%'],
        radius: [45, 60],
        data: []
    }
}
Page({

    /**
     * 页面的初始数据
     */
    data: {
        //echarts部分
        ecline: {
            onInit: function(canvas, width, height, dpr) {
                chartLine = echarts.init(canvas, null, {
                    width: width,
                    height: height,
                    devicePixelRatio: dpr // new
                });
                canvas.setChart(chartLine);

                chartLine.setOption(lineoption, true)
                return chartLine;
            }
        },
        ecbar1: {
            onInit: function(canvas, width, height, dpr) {
                chartBar1 = echarts.init(canvas, null, {
                    width: width,
                    height: height,
                    devicePixelRatio: dpr // new
                });
                canvas.setChart(chartBar1);

                chartBar1.setOption(baroption1, true)
                return chartBar1;
            }
        },
        ecbar2: {
            onInit: function(canvas, width, height, dpr) {
                chartBar2 = echarts.init(canvas, null, {
                    width: width,
                    height: height,
                    devicePixelRatio: dpr // new
                });
                canvas.setChart(chartBar1);

                chartBar1.setOption(baroption2, true)
                return chartBar1;
            }
        },
        ecpie: {
            onInit: function(canvas, width, height, dpr) {
                chartPie = echarts.init(canvas, null, {
                    width: width,
                    height: height,
                    devicePixelRatio: dpr // new
                });
                canvas.setChart(chartPie);

                chartPie.setOption(pieoption, true)
                return chartPie;
            }
        },
        //tabbar
        active: 1,
        icon: {
            index: '../../assets/images/home-2.png',
            indexactive: '../../assets/images/home.png',
            inout: '../../assets/images/detail.png',
            inoutactive: '../../assets/images/detail-2.png',
            set: '../../assets/images/settings.png',
            setactive: '../../assets/images/settings-2.png',
        },
        show: false, //抽屉显示隐藏
        IO: 2, //收支详情跟分析切换
        paytype: 1, //转账方式
        inout: 1, //支出还是收入
        cardChecked: false, //复选框
        aliChecked: false,
        WechatChecked: false,
        bankChecked: false,
        outChecked: false, //复选框
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
            {
                index: 1
            },
            {
                index: 1
            },
        ],
        radio: 0, //单选
        companyname: '',
        dealId: '',
        location: '',
        minMoney: '',
        maxMoney: '',
    },
    // 单选
    radio(e) {
        let index = e.target.dataset.index
        console.log(index);

        switch (index) {
            case '0':
                this.setData({
                    radio: 0
                })
                break;
            case '1':
                this.setData({
                    radio: 1
                })
                break;
            case '2':
                this.setData({
                    radio: 2
                })
                break;
            case '3':
                this.setData({
                    radio: 3
                })
                break;
            case '4':
                this.setData({
                    radio: 4
                })
                break;
            case '5':
                this.setData({
                    radio: 5
                })
                break;

            default:
                break;
        }

        e;
    },
    // 5个输入框双向绑定
    changeComName(e) {
        this.setData({
            companyname: e.detail.value
        })
    },
    changeDealId(e) {
        this.setData({
            dealId: e.detail.value
        })
    },
    changeLocation(e) {
        this.setData({
            location: e.detail.value
        })
    },
    changeMin(e) {
        this.setData({
            minMoney: e.detail.value
        })
    },
    changeMax(e) {
        this.setData({
            maxMoney: e.detail.value
        })
    },
    // 抽屉显示
    filter() {
        this.setData({
            show: true
        })
    },
    // 抽屉隐藏
    closeDraw() {
        this.setData({
            show: false
        })
    },
    // 抽屉取消按钮
    cancelBtn() {
        this.closeDraw()
        this.initDraw()
    },
    // 抽屉确认按钮
    comfirmBtn() {
        this.setData({
            show: false
        })
        this.initDraw()
    },
    //初始化抽屉里的数据
    initDraw() {
        this.setData({
            companyname: '',
            dealId: '',
            location: '',
            minMoney: '',
            maxMoney: '',
            radio: 0,
            cardChecked: false,
            aliChecked: false,
            WechatChecked: false,
            bankChecked: false,
            outChecked: false,
        })
    },
    // 多选
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
    // 收支/分析切换
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
        // this.setData({
        //     IO: 1
        // })
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