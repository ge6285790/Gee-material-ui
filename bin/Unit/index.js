'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDayInfo = getDayInfo;
exports.setYearAndGetNewInfo = setYearAndGetNewInfo;
exports.setMonthAndGetNewInfo = setMonthAndGetNewInfo;
var dayConfig = exports.dayConfig = {
  dayListEn: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  dayList: ['日', 'ㄧ', '二', '三', '四', '五', '六'],
  monthListEn: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  monthList: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
  monthLongList: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};

function getDayInfo(date) {
  var getCurrentMonthFirstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  var getCurrentMonthLastDay = new Date(getCurrentMonthFirstDay.getFullYear(), getCurrentMonthFirstDay.getMonth() + 1, getCurrentMonthFirstDay.getDate() - 1);
  return {
    year: date.getFullYear(),
    monthInNumber: date.getMonth(),
    month: dayConfig.monthListEn[date.getMonth()],
    monthLong: dayConfig.monthLongList[date.getMonth()],
    date: date.getDate(),
    day: dayConfig.dayListEn[date.getDay()],
    days: getCurrentMonthLastDay.getDate(),
    detail: date,
    firstDayInMonth: getCurrentMonthFirstDay.getDay()
  };
}

function setYearAndGetNewInfo(date, year) {
  var newDate = new Date(date.getTime());
  newDate.setFullYear(year);
  return getDayInfo(newDate);
}

function setMonthAndGetNewInfo(date, month) {
  var newDate = new Date(date.getTime());
  newDate.setMonth(month);
  return getDayInfo(newDate);
}