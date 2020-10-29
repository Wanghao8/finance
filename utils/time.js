// 获取当前年月日
function formatTime(date) {
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()

  let hour = date.getHours()
  let minute = date.getMinutes()
  let second = date.getSeconds()

  // return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':');
  return [year, month, day].map(formatNumber).join('-');
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// 获取当前年
function getYear(date) {
  let year = date.getFullYear();
  return year;
}

// 获取当年月
function getMonth(date) {
  let month = date.getMonth() + 1;
  return month;
}

//获取当前日
function getDay(date) {
  let day = date.getDate();
  return day;
}

// 前推日期
function getSearchTime(m) {
  if (parseInt(m) > 0) {                      //m是 往前推的总月份
    var myDate = new Date();
    var mytime = formatTime(myDate);          //获取当前日期
    var year = myDate.getFullYear();          //获取当前年
    var month = myDate.getMonth() + 1;        //获取当前月
    var day = myDate.getDate();               //获取当前日
    var lowData = '';                         //当前年月日往前推m个月后获取到的年月日
    let ylow = parseInt(parseInt(m) / 12);        //往前推的总月份换成对应的年数取整
    let mlow = parseInt(m) % 12;                  //往前推的月数
    if (ylow > 0) {
      year -= ylow;                           //年要再减一
    } else {
      year = year;                            //年取当前年份
    }
    if ((mlow > month) || (mlow == month)) {  //往前推的月份大于或等于当前月份，12减去往前推的月份加上现在的月份
      year = year - 1;
      month = 12 - mlow + month;
      // 少于两位补0
      if(month<10){
        month="0"+month;
      }
      if(day<10){
        day="0"+day;
      }
      lowData = year + '-' + month + '-' + day;
    } else {                                  //往前推的月份小于当前月份
      month -= mlow;
      // 少于两位补0
      if(month<10){
        month="0"+month;
      }
      if(day<10){
        day="0"+day;
      }
      lowData = year + '-' + month + '-' + day;
    }
    return lowData;
  }
}

module.exports = {
  formatTime: formatTime,
  getYear: getYear,
  getMonth: getMonth,
  getDay: getDay,
  getSearchTime:getSearchTime
}