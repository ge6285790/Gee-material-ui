import React from 'react';
import update from 'react-addons-update';

// const Calendar = (props) => {
//   const { options } = props;
//   const dayListEn = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
//   const dayList = ['日', 'ㄧ', '二', '三', '四', '五', '六'];
//   const monthListEn = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//   const monthList = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'];
//   const monthLongList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//   const getCurrentDay = new Date();
//   const today = {
//     year: getCurrentDay.getFullYear(),
//     month: monthListEn[getCurrentDay.getMonth()],
//     date: getCurrentDay.getDate(),
//     day: dayListEn[getCurrentDay.getDay()],
//   };
//   console.log('today', today);
//   const getCurrentMonthFirstDay = new Date(getCurrentDay.getFullYear(), getCurrentDay.getMonth(), 1);
//   const getCurrentMonthLastDay = new Date(getCurrentMonthFirstDay.getFullYear(), getCurrentMonthFirstDay.getMonth() + 1, getCurrentMonthFirstDay.getDate() - 1);
//   console.log(getCurrentDay, getCurrentMonthFirstDay, getCurrentMonthLastDay);
//   return (
//     <div className="gmu-calendar" data-active={options.show}>
//       <CalendarHead options={today}/>
//     </div>
//   );
// };

const dayConfig = {
  dayListEn: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  dayList: ['日', 'ㄧ', '二', '三', '四', '五', '六'],
  monthListEn: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  monthList: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
  monthLongList: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
};

function getDayInfo(date) {
  const getCurrentMonthFirstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  const getCurrentMonthLastDay = new Date(getCurrentMonthFirstDay.getFullYear(),
                                          getCurrentMonthFirstDay.getMonth() + 1,
                                          getCurrentMonthFirstDay.getDate() - 1);
  return {
    year: date.getFullYear(),
    month: dayConfig.monthListEn[date.getMonth()],
    date: date.getDate(),
    day: dayConfig.dayListEn[date.getDay()],
    days: getCurrentMonthLastDay.getDate(),
    detail: date,
  };
}

function setYearAndGetNewInfo(date, year) {
  const newDate = new Date(date.getTime());
  newDate.setFullYear(year);
  console.log('newDate', newDate, date);
  return getDayInfo(newDate);
}

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    const dayListEn = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dayList = ['日', 'ㄧ', '二', '三', '四', '五', '六'];
    const monthListEn = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthList = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'];
    const monthLongList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const getCurrentDay = new Date();
    const today = getDayInfo(getCurrentDay);
    console.log('today', today);
    const getCurrentMonthFirstDay = new Date(getCurrentDay.getFullYear(), getCurrentDay.getMonth(), 1);
    const getCurrentMonthLastDay = new Date(getCurrentMonthFirstDay.getFullYear(), getCurrentMonthFirstDay.getMonth() + 1, getCurrentMonthFirstDay.getDate() - 1);
    console.log(getCurrentDay, getCurrentMonthFirstDay, getCurrentMonthLastDay);
    this.state = {
      today,
      selectDay: today,
      trigger: {
        calendarHeadYear: 'false',
      },
      calendarHead: {
        calendarHeadYear: {
          show: 'false',
          onClickFunc: () => {
            const showState = this.state.trigger.calendarHeadYear === 'true' ? 'false' : 'true';
            this.setState(update(this.state, {
              trigger: {
                calendarHeadYear: { $set: showState },
              },
            }));
            if (showState === 'true') {
              const yearList = document.querySelector('.gmu-calendar .calendar-year-list');
              const currentYear = document.querySelector('.gmu-calendar .current-year');
              yearList.scrollTop = currentYear.offsetTop - (yearList.offsetHeight / 2.5) + ((this.state.selectDay.year - 1970) * 12) + 22;
            }
          },
        },
      },
      calendarBoday: {
        calendarYearList: {
          onClickFunc: (date, item) => {
            const selectDay = setYearAndGetNewInfo(date, item);
            console.log(selectDay);
            this.setState(update(this.state, {
              selectDay: { $set: selectDay },
              trigger: {
                calendarHeadYear: { $set: 'false' },
              },
            }));
          },
        },
      },
    };
  }

  componentDidMount() {
    const yearList = document.querySelector('.gmu-calendar .calendar-year-list');
    const currentYear = document.querySelector('.gmu-calendar .current-year');
    // // yearList.scrollTop = currentYear.offsetTop - (yearList.offsetHeight / 2) + 22;
    // currentYear.scrollIntoView();
    // //  - (yearList.offsetHeight / 2) + 22;
    // console.log(yearList.scrollTop, currentYear.offsetTop);
    window.yearList = yearList;
    window.currentYear = currentYear;
  }

  render() {
    const { options } = this.props;
    const { calendarHead, calendarBoday, today, selectDay, trigger } = this.state;
    return (
      <div className="gmu-calendar" data-active={options.show}>
        <CalendarHead options={{ calendarHead, selectDay, trigger }} />
        <CalendarBody options={{ calendarBoday, selectDay, today, trigger }} />
      </div>
    );
  }
}

const CalendarHead = (props) => {
  return (
    <div className="gmu-calendar-head" data-active={props.options.trigger.calendarHeadYear}>
      <CalendarHeadYear options={props.options} />
      {/* {`星期${props.options.day}, `}
      {`${props.options.month}月`} */}
      {`${props.options.selectDay.day}, `}
      {props.options.selectDay.month}
      {props.options.selectDay.date}
    </div>
  );
}

const CalendarHeadYear = (props) => {
  console.log('props.options', props.options)
  const renderYear = (currentYear) => {
    const firstYear = 1970;
    const lastYear = currentYear + 100;
    let array = [];
    for (let i = 1970; i <= lastYear; i ++) {
      const year = i;
      array.push(year);
    }
    array = array.map((item, i) => {
      if (item === currentYear) {
        return <span className="current-year" key={item}>{item}1</span>
      }
      return <span key={item}>{item}</span>
    });
    return array;
  };
  // calendarHeadYear
  return (
    <div
      className="gmu-calendar-head-year"
      data-active={props.options.trigger.calendarHeadYear}
      onClick={(e) => {
        props.options.calendarHead.calendarHeadYear.onClickFunc();
      }}
    >
      <span className="year-select">{props.options.selectDay.year}</span>
      <span className="year-list" data-active={props.options.trigger.calendarHeadYear}>{renderYear(props.options.selectDay.year)}</span>
    </div>
  )
}

const CalendarBody = (props) => {
  return (
    <div className="gmu-calendar-body">
      <div className="calendar-year-list" data-active={props.options.trigger.calendarHeadYear}>
        <CalendarYearList options={props.options} />
      </div>
    </div>
  )
};

const CalendarYearList = (props) => {
  const { calendarBoday, selectDay } = props.options;
  const renderYear = (currentYear) => {
    const firstYear = 1970;
    const lastYear = currentYear + 100;
    let array = [];
    for (let i = 1970; i <= lastYear; i += 1) {
      const year = i;
      array.push(year);
    }
    array = array.map((item, i) => {
      if (item === currentYear) {
        return (
          <span
            className="current-year"
            key={item}
            onClick={() => {
              calendarBoday.calendarYearList.onClickFunc(selectDay.detail, item);
            }}
          >
            {item}
          </span>
        );
      }
      return (
        <span
          key={item}
          onClick={() => { calendarBoday.calendarYearList.onClickFunc(selectDay.detail, item); }}
        >
          {item}
        </span>
      );
    });
    return array;
  };
  return (
    <span className="year-list">{renderYear(selectDay.year)}</span>
  );
};

export default Calendar;
