//app.js
App({
    onLaunch: function() {
        // 展示本地存储能力
        var logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)

        // 登录
        wx.login({
                success: res => {
                    // 发送 res.code 到后台换取 openId, sessionKey, unionId
                }
            })
            // 获取用户信息
        wx.getSetting({
            success: res => {
                if (res.authSetting['scope.userInfo']) {
                    // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
                    wx.getUserInfo({
                        success: res => {
                            // 可以将 res 发送给后台解码出 unionId
                            this.globalData.userInfo = res.userInfo

                            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                            // 所以此处加入 callback 以防止这种情况
                            if (this.userInfoReadyCallback) {
                                this.userInfoReadyCallback(res)
                            }
                        }
                    })
                }
            }
        })
    },
    globalData: {
        userInfo: null
    },
    is_login: function() {
        if (!wx.getStorageSync('sessionId')) {
            wx.hideLoading({})
            wx.navigateTo({
                url: '/pages/login/login',
            })
            return false;
        }
    },
    addComma(num) {
        var c = (num.toString().indexOf('.') !== -1) ? num.toLocaleString() : num.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
        return c;
    },
    // 格式化日期时间
    formatTime(time) {
        function padNum(params) {
            return params.toString().padStart(2, 0)
        }
        let date = new Date(time)
        let year = date.getFullYear()
        let month = padNum(date.getMonth() + 1)
        let day = padNum(date.getDate())
        let hour = padNum(date.getHours())
        let minute = padNum(date.getMinutes())
        let second = padNum(date.getSeconds())
        return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second
    },
    //过万处理
    tenThousand(params, fix) {
        if (params >= 10000) {
            return (params / 10000).toFixed(2) + '万'
        } else if (fix) {
            return params.toFixed(2)
        } else {
            return params
        }
    }

})