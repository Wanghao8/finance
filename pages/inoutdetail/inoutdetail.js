// pages/inoutdetail/inoutdetail.js
var req = require('../../utils/requestCommon.js');
var app = getApp()
import * as echarts from '../../ec-canvas/echarts';
var chartBar1;
var chartLine;
var chartPie;
var lineoption = {
    grid: {
        top: '10%',
        bottom: '16%',
        right: '5%',
        left: '15%',
        height: '80%'
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        // inverse: true,
        axisLabel: {
            show: true,
        },
        splitNumber: 6,
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
var baroption = {
    grid: {
        top: '12%',
        bottom: '12%',
        right: '5%',
        left: '14%'
    },
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
        // data: []
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    },
    yAxis: {
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
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
                        color: "#98C7F7" // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: "#2083E6" // 100% 处的颜色
                    }]
                },
            },
            data: [],
            // data: [200, 300, 150, 700, 400, ],
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
                            color: "#D36221" // 0% 处的颜色
                        },
                        {
                            offset: 0.5,
                            color: "#F2AD3C " // 50% 处的颜色
                        }, {
                            offset: 1,
                            color: "#F7E7AC " // 100% 处的颜色
                        }
                    ]
                },
            },
            barGap: '-5%',
            // data: [450, 300, 200, 500, 550, ],
            data: [],
        },
    ]
}
var pieoption = {
    color: ["#EEA444", "#8B572A", "#FFF000", "#F5C366", "#F86B4F"],
    legend: {
        orient: 'vertical',
        right: 10,
        itemWidth: 16,
        itemHeight: 8,
        borderRadius: 2,
        itemGap: 5,
        bottom: 10,
        // textStyle: {
        //     color: "#4A4A4A",
        //     fontSize: 10
        // },
        // data: [],
    },
    series: {

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
        labelLine: {
            length: 1,
            length2: 10
        },
        type: 'pie',
        center: ['50%', '52%'],
        radius: [60, 75],
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
        ecbar: {
            onInit: function(canvas, width, height, dpr) {
                chartBar1 = echarts.init(canvas, null, {
                    width: width,
                    height: height,
                    devicePixelRatio: dpr // new
                });
                canvas.setChart(chartBar1);

                chartBar1.setOption(baroption, true)
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
        IO: 1, //收支详情跟分析切换
        paytype: 1, //转账方式
        inout: 1, //支出还是收入
        cardChecked: false, //复选框
        aliChecked: false,
        WechatChecked: false,
        bankChecked: false,
        outChecked: false, //复选框
        thisyear: 2020,
        thismonth: 8,
        needfold: true,
        list: [],
        tabel: [],
        radio: 5, //单选
        companyname: '', //抽屉的五个input
        dealId: '',
        location: '',
        minMoney: '',
        maxMoney: '',
        needfold: true, //需方列表展开收起
        inoutBtn: 'in', //入金出金按钮
        addIndex: 0, //picker的index
        locationList: ['请选择地区', 'a', 'b']
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
        let that = this
        chartBar1.off('click')
        chartBar1.on('click', function(params) {
            console.log(params);
            let start, end, start1, end1
            if (params.name == that.data.thismonth) {
                start = that.data.thisyear + '年' + params.name.padStart(2, 0) + '月' + '01日'
                start1 = that.data.thisyear + '-' + params.name.padStart(2, 0) + '-' + '01'
                end = that.data.thisyear + '年' + params.name.padStart(2, 0) + '月' + new Date().getDate().toString().padStart(2, 0) + '日'
                end1 = that.data.thisyear + '-' + params.name.padStart(2, 0) + '-' + new Date().getDate().toString().padStart(2, 0)
            } else if (params.name == '1' || params.name == '3' || params.name == '5' || params.name == '7' || params.name == '8' || params.name == '10' || params.name == '12') {
                start = that.data.thisyear + '年' + params.name.padStart(2, 0) + '月' + '01日'
                start1 = that.data.thisyear + '-' + params.name.padStart(2, 0) + '-' + '01'
                end = that.data.thisyear + '年' + params.name.padStart(2, 0) + '月' + '31日'
                end1 = that.data.thisyear + '-' + params.name.padStart(2, 0) + '-' + '31'
            } else if (params.name == '4' || params.name == '6' || params.name == '9' || params.name == '11') {
                start = that.data.thisyear + '年' + params.name.padStart(2, 0) + '月' + '01日'
                start1 = that.data.thisyear + '-' + params.name.padStart(2, 0) + '-' + '01'
                end = that.data.thisyear + '年' + params.name.padStart(2, 0) + '月' + '30日'
                end1 = that.data.thisyear + '-' + params.name.padStart(2, 0) + '-' + '30'
            } else {
                start = that.data.thisyear + '年' + params.name.padStart(2, 0) + '月' + '01日'
                start1 = that.data.thisyear + '-' + params.name.padStart(2, 0) + '-' + '01'
                end = that.data.thisyear + '年' + params.name.padStart(2, 0) + '月' + '28日'
                end1 = that.data.thisyear + '-' + params.name.padStart(2, 0) + '-' + '28'
            }
            that.getOverage(start1, end1)
            that.setData({
                startMonth: start,
                endMonth: end,
            })
            that.getMonthData(params.name)
        });
    },
    //切换入金排名
    income() {
        this.setData({
            inoutBtn: 'in'
        })
        let start = this.getNowFormatDate('now').slice(0, 8) + '01'
        let end = this.getNowFormatDate('now')
        let start2 = start + " 00:00:00"
        let end2 = end + " 00:00:00"
        this.getLocationRank(1, start2, end2)
    },
    //切换出金排名
    outcome() {
        this.setData({
            inoutBtn: 'out'
        })
        let start = this.getNowFormatDate('now').slice(0, 8) + '01'
        let end = this.getNowFormatDate('now')
        let start2 = start + " 00:00:00"
        let end2 = end + " 00:00:00"
        this.getLocationRank(2, start2, end2)
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

            default:
                break;
        }
    },
    // picker事件
    bindPickerChange(e) {
        this.setData({
            addIndex: e.detail.value
        })
    },
    // 单选
    radio(e) {
        let index = e.target.dataset.index
        switch (index) {
            case '0':
                this.setData({
                    radio: 0,
                    startMoney: 0,
                    endMoney: 10000
                })
                break;
            case '1':
                this.setData({
                    radio: 1,
                    startMoney: 10000,
                    endMoney: 30000
                })
                break;
            case '2':
                this.setData({
                    radio: 2,
                    startMoney: 30000,
                    endMoney: 50000
                })
                break;
            case '3':
                this.setData({
                    radio: 3,
                    startMoney: 50000,
                    endMoney: 100000
                })
                break;
            case '4':
                this.setData({
                    radio: 4,
                    startMoney: 100000,
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
            show: true,
            startMoney: 0,
            endMoney: 10000
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
        // this.closeDraw()
        this.initDraw()
    },
    // 抽屉确认按钮
    comfirmBtn() {
        let that = this
        this.setData({
            show: false
        })
        this.getListData()
        let start = that.getNowFormatDate('last')
        let end = that.getNowFormatDate('now')
        this.getOverage(start, end)
            // setTimeout(() => { this.initDraw() }, 1000)
    },
    //初始化抽屉里的数据
    initDraw() {
        this.setData({
            companyname: '',
            dealId: '',
            location: '',
            minMoney: '',
            maxMoney: '',
            radio: 5,
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
    //点击进入详情页
    toDetail(e) {
        console.log(e);
        let id = e.currentTarget.dataset.id
        let sign = e.currentTarget.dataset.sign
        wx.navigateTo({
            url: '../index/indexdetail/indexdetail?id=' + id + '&sign=' + sign,
        })
    },
    // 收支/分析切换
    selectIO(e) {
        let that = this
        if (e.currentTarget.dataset.type == 1) {
            this.setData({
                IO: 1,
                scrolltop: 0,
            })
            let start = that.getNowFormatDate('last')
            let end = that.getNowFormatDate('now')
            this.getOverage(start, end)
        } else {
            this.setData({
                IO: 2
            })
            let start = that.getNowFormatDate('now').slice(0, 8) + '01'
            let end = that.getNowFormatDate('now')
            let slist = start.split('-')
            let start1 = slist[0] + '年' + slist[1] + '月' + slist[2] + '日'
            let elist = end.split('-')
            let end1 = elist[0] + '年' + elist[1] + '月' + elist[2] + '日'
            that.setData({
                startMonth: start1,
                endMonth: end1,
            })
            let start2 = start + " 00:00:00"
            let end2 = end + " 00:00:00"
            setTimeout(() => {
                that.getYearData()
                that.getMonthData(this.data.thismonth)
            }, 200)
            that.getOverage(start, end)
            that.getLocationRank(1, start2, end2)
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
    //初始化柱形图
    initBar() {
        baroption.xAxis.data = this.data.barx
        baroption.series[0].data = this.data.barin
        baroption.series[1].data = this.data.barout
        chartBar1.setOption(baroption, true)
    },
    //初始化饼图
    initPie() {
        pieoption.series.data = this.data.pieList
            // pieoption.legend.data = this.data.piex
        chartPie.setOption(pieoption, true)
    },
    //初始化折线图
    initLine() {
        lineoption.xAxis.data = this.data.linex
        lineoption.series.data = this.data.linein
        chartLine.setOption(lineoption, true)
    },
    //初始化折线图
    initLine2() {
        lineoption.xAxis.data = this.data.linex
        lineoption.series.data = this.data.lineout
        chartLine.setOption(lineoption, true)
    },
    //格式化当天日期
    getNowFormatDate(params) {
        let date
        if (params == 'now') {
            date = new Date();
        } else {
            date = new Date(new Date().getTime() - 2592000000)
        }
        var seperator1 = "-";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = year + seperator1 + month + seperator1 + strDate;
        return currentdate;
    },
    //获取列表筛选列表
    getListData() {
        let that = this
        let type = []
        that.data.bankChecked ? type.push(1) : type = type
        that.data.outChecked ? type.push(2) : type = type
        that.data.WechatChecked ? type.push(3) : type = type
        that.data.aliChecked ? type.push(4) : type = type
        that.data.cardChecked ? type.push(5) : type = type
        type = type.join(',')
        let start = that.getNowFormatDate('last')
        let end = that.getNowFormatDate('now')
        let data = {
                modeCode: 'i0GQ9ObadE8JmVQTTJqmfgkRbNWkrqD6', //功能码
                sessionId: wx.getStorageSync('sessionId'),
                pageIndex: 1,
                pageSize: 100,
                startTime: start,
                endTime: end,
                // enterpriseName: that.data.companyname,
                // startMoney: that.data.minMoney,
                // endMoney: that.data.maxMoney,
                // tradeType: type,
                // tradeNo: that.data.tradeNo,
                // orgId: that.data.location,
            }
            // that.data.minMoney != '' ? data.startMoney = that.data.minMoney : data.startMoney
            // that.data.maxMoney != '' ? data.endMoney = that.data.maxMoney : data.endMoney
        if (that.data.minMoney != '') {
            data.startMoney = that.data.minMoney
        } else if (that.data.startMoney) {
            data.startMoney = that.data.startMoney
        } else {}
        if (that.data.maxMoney != '') {
            data.endMoney = that.data.maxMoney
        } else if (that.data.endMoney) {
            data.endMoney = that.data.endMoney
        } else {}
        that.data.companyname != '' ? data.enterpriseName = data.companyname : that.data.enterpriseName
        that.data.tradeNo != '' ? data.tradeNo = that.data.tradeNo : data.tradeNo
        that.data.addIndex != 0 ? data.orgId = that.data.locationList[that.data.addIndex] : data.orgId
        type ? data.tradeType = type : data.tradeType
        console.log(data);
        req.requestAll(data).then(res => {
            if (res.data.code == 1) {
                let resdata = res.data.data
                let list = resdata.list
                list.forEach((item) => {
                    item.eventTime.hour < 10 ? item.eventTime.hour = item.eventTime.hour.toString().padStart(2, 0) : item.eventTime.hour = item.eventTime.hour
                    item.eventTime.dayOfMonth < 10 ? item.eventTime.dayOfMonth = item.eventTime.dayOfMonth.toString().padStart(2, 0) : item.eventTime.dayOfMonth = item.eventTime.dayOfMonth
                    item.eventTime.minute < 10 ? item.eventTime.minute = item.eventTime.minute.toString().padStart(2, 0) : item.eventTime.minute = item.eventTime.minute
                    item.eventTime.monthValue < 10 ? item.eventTime.monthValue = item.eventTime.monthValue.toString().padStart(2, 0) : item.eventTime.monthValue = item.eventTime.monthValue
                    item.eventTime.second < 10 ? item.eventTime.second = item.eventTime.second.toString().padStart(2, 0) : item.eventTime.second = item.eventTime.second

                    item.money = app.addComma(item.money)

                    item.tradeType == 1 ? item.type = '网银转账' : item.type
                    item.tradeType == 2 ? item.type = '支出' : item.type
                    item.tradeType == 3 ? item.type = '微信' : item.type
                    item.tradeType == 4 ? item.type = '支付宝' : item.type
                    item.tradeType == 5 ? item.type = '刷卡' : item.type
                        // if (item.checkTime) {
                        //     item.checkTime.hour < 10 ? item.checkTime.hour = item.checkTime.hour.toString().padStart(2, 0) : item.checkTime.hour = item.checkTime.hour
                        //     item.checkTime.dayOfMonth < 10 ? item.checkTime.dayOfMonth = item.checkTime.dayOfMonth.toString().padStart(2, 0) : item.checkTime.dayOfMonth = item.checkTime.dayOfMonth
                        //     item.checkTime.minute < 10 ? item.checkTime.minute = item.checkTime.minute.toString().padStart(2, 0) : item.checkTime.minute = item.checkTime.minute
                        //     item.checkTime.monthValue < 10 ? item.checkTime.monthValue = item.checkTime.monthValue.toString().padStart(2, 0) : item.checkTime.monthValue = item.checkTime.monthValue
                        //     item.checkTime.second < 10 ? item.checkTime.second = item.checkTime.second.toString().padStart(2, 0) : item.checkTime.second = item.checkTime.second
                        // }
                })
                that.setData({
                    list: list,
                    numoflist: resdata.notCheckCount,
                    tradeType: type
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
    //接口部分(获取余额)
    getOverage(start, end) {
        let that = this
        let type = []
        that.data.bankChecked ? type.push(1) : type = type
        that.data.outChecked ? type.push(2) : type = type
        that.data.WechatChecked ? type.push(3) : type = type
        that.data.aliChecked ? type.push(4) : type = type
        that.data.cardChecked ? type.push(5) : type = type
        type = type.join(',')

        const data = {
            modeCode: 'eRUt6xsZ3KKGVqcH87ua2Ns4JEfCs9ah', //功能码
            sessionId: wx.getStorageSync('sessionId'),
            type: '012',
            startTime: start,
            endTime: end,
            // enterpriseName: '',
            // startMoney: '',
            // endMoney: '',
            // tradeNo: '',
            // orgId: '',
        }
        that.data.companyname != '' ? data.enterpriseName = that.data.companyname : that.data.enterpriseName
        that.data.minMoney != '' ? data.startMoney = that.data.minMoney : that.data.startMoney
        that.data.maxMoney != '' ? data.endMoney = that.data.maxMoney : that.data.endMoney
        that.data.dealId != '' ? data.tradeNo = that.data.dealId : that.data.tradeNo
        that.data.location != '' ? data.orgId = that.data.location : that.data.orgId
        type ? data.tradeType = type : that.data.tradeType
        console.log(data);
        req.requestAll(data).then(res => {
            if (res.data.code == 1) {
                let resdata = res.data.data
                let leave = app.addComma(resdata.balance)
                console.log(leave);
                that.setData({
                    leave: leave,
                    incomeMoney: app.addComma(resdata.income.toFixed(2)),
                    outcomeMoney: app.addComma(resdata.outcome.toFixed(2)),
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
        req.requestAll(data).then(res => {
            if (res.data.code == 1) {
                let resdata = res.data.data
                console.log(res);
                var barx = []
                var barin = []
                var barout = []
                resdata.forEach((item) => {
                    barx.push(item.month.toString())
                    barin.push(item.income)
                    barout.push(item.outcome)
                })
                that.setData({
                    barx: barx,
                    barin: barin,
                    barout: barout,
                })
                that.initBar()
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
    getMonthData(month) {
        let that = this
        month = parseInt(month)
        let auth = wx.getStorageSync('authority')
        const data = {
            modeCode: '0WsGhaT6USz7lr0geWILuXvpm4GGjBb1', //功能码
            sessionId: wx.getStorageSync('sessionId'),
            year: that.data.thisyear,
            month: month
        }
        console.log(data);
        req.requestAll(data).then(res => {
            if (res.data.code == 1) {
                let resdata = res.data.data
                let linex = []
                let piex = []
                let linein = []
                let lineout = []
                let lineList = resdata.dateList
                lineList.forEach((item) => {
                    linex.push(item.dateStr.toString())
                    linein.push(item.income)
                    lineout.push(item.outcome)
                })
                let pieList = resdata.tradeTypeList
                pieList.forEach((item) => {
                    item.tradeType == 1 ? item.name = '网银转账' : item.tradeType
                    item.tradeType == 2 ? item.name = '支出' : item.tradeType
                    item.tradeType == 3 ? item.name = 'POS微信' : item.tradeType
                    item.tradeType == 4 ? item.name = 'POS支付宝' : item.tradeType
                    item.tradeType == 5 ? item.name = 'POS刷卡' : item.tradeType
                    item.value = item.money
                    piex.push(item.name)
                })
                let rank = resdata.rankList
                    //这一步需要对数组排序
                function compare(property) {
                    return function(a, b) {
                        var value1 = a[property];
                        var value2 = b[property];
                        return value2 - value1;
                    }
                }

                if (rank.length != 0) {
                    rank.sort(compare('money'))
                    var rankmax = rank[0].money
                }
                that.setData({
                    pieList: pieList,
                    piex: piex,
                    linex: linex,
                    linein: linein,
                    lineout: lineout,
                    rankmax: rankmax,
                    rank: rank,
                    rankshort: rank.slice(0, 4)

                })
                that.initLine()
                that.initPie()
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
    //接口部分(地区出入金排行)
    getLocationRank(type, start, end) {
        type.toString()
        let that = this
        const data = {
            modeCode: 'pJave8351rnQqIav2YCYbAgH8CnssBTx', //功能码
            sessionId: wx.getStorageSync('sessionId'),
            orderBy: type,
            startTime: start,
            endTime: end,
        }
        console.log(data);
        req.requestAll(data).then(res => {
            if (res.data.code == 1) {
                let list = res.data.data
                    //这一步需要对数组排序
                function compare(property) {
                    return function(a, b) {
                        var value1 = a[property];
                        var value2 = b[property];
                        return value2 - value1;
                    }
                }
                // console.log(resdata);
                // return
                type == 1 ? list.sort(compare('income')) : list.sort(compare('outcome'))
                that.setData({
                    tabel: list
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
        wx.getSystemInfo({
            success: function(res) {
                console.log(res.model)
                console.log(res.statusBarHeight)
                console.log(res.screenHeight)
                console.log(res.windowHeight)
                console.log(res.windowWidth)
                if (res.model.indexOf('iPhone XR') != -1) {
                    that.setData({
                        brand: 'iphonex'
                    })
                } else if (res.model.indexOf('iPhone') != -1) {
                    that.setData({
                        brand: 'iphone'
                    })
                } else {
                    that.setData({
                        brand: 'an'
                    })
                }
                var clientHeight = res.windowHeight,
                    clientWidth = res.windowWidth,
                    rpxR = 360 / clientWidth;
                rpxR < 1 ? rpxR = 1 : rpxR
                that.setData({
                    hair: res.statusBarHeight,
                    screenHeight: res.windowHeight,
                    rpxR: rpxR
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
        let date = new Date()
        this.setData({
            thisyear: date.getFullYear(),
            thismonth: date.getMonth() + 1,
            thisday: date.getDate(),
            IO: 1,
            scrolltop: 0
        })
        let auth = wx.getStorageSync('authority')
        if (auth == 1) {
            that.setData({
                cityRank: true
            })
        } else {
            that.setData({
                cityRank: false
            })
        }
        this.getListData()
        if (this.data.IO == 1) {
            let start = that.getNowFormatDate('last')
            let end = that.getNowFormatDate('now')
            this.getOverage(start, end)
        } else {
            let start = that.getNowFormatDate('now').slice(0, 8) + '01'
            let end = that.getNowFormatDate('now')
            this.getOverage(start, end)
            setTimeout(() => {
                that.getYearData()
                that.getMonthData(9)
            }, 200);
        }

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