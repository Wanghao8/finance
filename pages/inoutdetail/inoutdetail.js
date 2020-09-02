// pages/inoutdetail/inoutdetail.js
var req = require('../../utils/requestCommon.js');
var app = getApp()
import * as echarts from '../../ec-canvas/echarts';
let chartBar1;
let chartLine;
let chartPie;
let lineoption = {
    // grid: {
    //     top: '10%',
    //     bottom: '15%',
    //     right: '5%',
    //     left: '10%'
    // },

    // grid: {
    //     top: '10%',
    //     bottom: '15%',
    //     right: '5%',
    //     left: '10%'
    // },
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
                color: '#D8A537 ',
            },
        },
        // 渐变
        areaStyle: {
            normal: {
                color: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: "rgba(227,163,61,0.50) " // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: "rgba(227,163,61,0.00)" // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                }
            }
        },
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
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    },
    series: [{
            name: '入金',
            type: 'bar',
            // label: {
            //     show: true,
            //     position: 'top'
            // },
            barWidth: 8,
            itemStyle: {
                barBorderRadius: 5,
                color: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0.5,
                        color: "#98C7F7"  // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: "#2083E6"  // 100% 处的颜色
                    }]
                },
            },
            data: [200, 300, 150, 700, 400, ],
        },
        {
            name: '出金',
            type: 'bar',
            // label: {
            //     show: true,
            //     position: 'top'
            // },
            barWidth: 8,
            itemStyle: {
                barBorderRadius: 5,
                color: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                            offset: 1,
                            color: "#D36221"  // 0% 处的颜色
                        },
                        {
                            offset: 0.5,
                            color: "#F2AD3C "  // 50% 处的颜色
                        }, {
                            offset: 1,
                            color: "#F7E7AC "  // 100% 处的颜色
                        }
                    ]
                },
            },
            barGap: '-5%',
            data: [450, 300, 200, 500, 550, ],
        },
    ]
}
let pieoption = {
    color: ["#EEA444", "#8B572A", "#FFF000", "#F5C366", "#F86B4F"],
    series: {
        // label: {
        //   normal: {
        //     fontSize: 12
        //   }
        // },
        // startAngle: 120,
        grid: {
            top: '10%',
            bottom: '0',
            left: '',
            right: '',
            height: '90%'
        },
        legend: {

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
        thisyear: 2020,
        thismonth: 8,
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
            {
                index: 1
            },
            {
                index: 1
            },
        ],
        table: [
            { add: '渑池县', in: '+47580', out: '-7580' },
            { add: '渑池县', in: '+47580', out: '-7580' },
            { add: '渑池县', in: '+47580', out: '-7580' },
            { add: '渑池县', in: '+47580', out: '-7580' },
        ],
        radio: 0, //单选
        companyname: '', //抽屉的五个input
        dealId: '',
        location: '',
        minMoney: '',
        maxMoney: '',
        needfold: true, //需方列表展开收起
        inoutBtn: 'in' //入金出金按钮
    },
    //前一年点击事件
    previous() {
        this.setData({
            thisyear: this.data.thisyear - 1
        })
        this.getYearData()
    },
    //后一年点击事件
    next() {
        this.setData({
            thisyear: this.data.thisyear + 1
        })
        this.getYearData()
    },
    //点击柱状图切换月份数据
    changeMonth() {
        chartBar1.on('click', function(params) {
            console.log(params);
        });
    },
    //切换入金排名
    income() {
        this.setData({
            inoutBtn: 'in'
        })
    },
    //切换出金排名
    outcome() {
        this.setData({
            inoutBtn: 'out'
        })
    },
    //展开收起折叠
    fold: function(e) {
        switch (e.currentTarget.dataset.type) {
            case 'needfold':
                this.setData({
                    needfold: true
                })
                break;
            case 'needunfold':
                this.setData({
                    needfold: false
                })
                break;
            case 'desfold':
                this.setData({
                    destinationfold: true
                })
                break;
            case 'desunfold':
                this.setData({
                    destinationfold: false
                })
                break;
            default:
                break;
        }
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
    //获取列表筛选列表
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
    //接口部分(月度收支)
    getYearData() {
        let that = this
        const data = {
            modeCode: 'qnGKRjjo79qTHMByDQ7st94TwECpm6jV', //功能码
            sessionId: wx.getStorageSync('sessionId'),
            year: that.data.thisyear,
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
    //接口部分(日收入统计)
    getMonthData() {
        let that = this
        const data = {
            modeCode: '0WsGhaT6USz7lr0geWILuXvpm4GGjBb1', //功能码
            sessionId: wx.getStorageSync('sessionId'),
            year: that.data.thisyear,
            month: that.data.thismonth
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
        let that = this
        let date = new Date()
        console.log(date.getFullYear());
        this.setData({
            thisyear: date.getFullYear(),
            thismonth: date.getMonth() + 1
        })
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

    },

})