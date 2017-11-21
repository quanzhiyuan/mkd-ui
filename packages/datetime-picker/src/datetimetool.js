const FORMAT_MAP = {
  Y: 'year',
  M: 'month',
  D: 'date',
  H: 'hour',
  m: 'minute'
}
function isLeapYear (year) {
  return (year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0);
}
/**每月三十天的月份*/
function isShortMonth (month) {
  return [4, 6, 9, 11].indexOf(month) > -1;
}

/**每月的结束日期*/
function getMonthEndDay (year, month) {
  if (isShortMonth(month)) {
    return 30;
  } else if (month === 2) {
    return isLeapYear(year) ? 29 : 28;
  } else {
    return 31;
  }
}

function getTrueValue (formattedValue) {
  if (!formattedValue) return;
  while (isNaN(parseInt(formattedValue, 10))) {
    formattedValue = formattedValue.slice(1)
  }
  return parseInt(formattedValue, 10) + ''
}
/**是否是日期*/
function isDateString (str) {
  return /\d{4}(\-|\/|.)\d{1,2}\1\d{1,2}/.test(str)
}
/**从日期字符串或者日期对象中获取年份*/
function getYear (value) {
  return this.isDateString(value) ? value.split(' ')[0].split(/-|\/|\./)[0] : value.getFullYear();
}
/**从日期字符串或者日期对象中获取月份*/
function getMonth (value) {
  return this.isDateString(value) ? value.split(' ')[0].split(/-|\/|\./)[1] : value.getMonth() + 1;
}
/**从日期字符串或者日期对象中获取日*/
function getDate (value) {
  return this.isDateString(value) ? value.split(' ')[0].split(/-|\/|\./)[2] : value.getDate();
}

function getHour (value) {
  if (this.isDateString(value)) {
    const str = value.split(' ')[1] || '00:00:00';
    return str.split(':')[0];
  }
  return value.getHours();
}

function getMinute(value) {
  if (this.isDateString(value)) {
    const str = value.split(' ')[1] || '00:00:00';
    return str.split(':')[1];
  }
  return value.getMinutes();
}

export default {
  FORMAT_MAP,
  isLeapYear,
  isShortMonth,
  getMonthEndDay,
  getTrueValue,
  isDateString,
  getYear,
  getMonth,
  getDate,
  getHour,
  getMinute
}
