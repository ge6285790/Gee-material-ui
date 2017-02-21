import React from 'react';

const Calendar = (props) => {
  const { options } = props;
  const dayList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const monthLongList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const getCurrentDay = new Date();
  const today = {
    year: getCurrentDay.getFullYear(),
    month: getCurrentDay.getMonth(),
    date: getCurrentDay.getDate(),
    day: getCurrentDay.getDay(),
  };
  console.log('today', today);
  const getCurrentMonthFirstDay = new Date(getCurrentDay.getFullYear(), getCurrentDay.getMonth(), 1);
  const getCurrentMonthLastDay = new Date(getCurrentMonthFirstDay.getFullYear(), getCurrentMonthFirstDay.getMonth() + 1, getCurrentMonthFirstDay.getDate() - 1);
  console.log(getCurrentDay, getCurrentMonthFirstDay, getCurrentMonthLastDay);
  return (
    <div className="gmu-calendar" data-active={options.show}>

    </div>
  );
};

export default Calendar;
