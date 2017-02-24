import React from 'react';
import update from 'react-addons-update';
import equal from 'deep-equal';
import Button from '../Button';
import IsometricButton from '../IsometricButton';
import { dayConfig, getDayInfo, setYearAndGetNewInfo, setMonthAndGetNewInfo } from '../Unit';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    const getCurrentDay = new Date();
    const today = getDayInfo(getCurrentDay);
    const getCurrentMonthFirstDay = new Date(getCurrentDay.getFullYear(), getCurrentDay.getMonth(), 1);
    const getCurrentMonthLastDay = new Date(getCurrentMonthFirstDay.getFullYear(), getCurrentMonthFirstDay.getMonth() + 1, getCurrentMonthFirstDay.getDate() - 1);
    this.state = {
      today,
      selectDay: {
        ...today,
        recordYear: [today.year - 1, today.year],
        recordMonth: [today.monthInNumber - 1, today.monthInNumber],
        direction: 'left',
        tempYear: today.year,
        tempMonth: today.monthInNumber,
      },
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
            let selectDay = setYearAndGetNewInfo(date, item);
            selectDay = { ...this.state.selectDay, ...selectDay };
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

    this.updateMonthList = this.updateMonthList.bind(this);
    this.updateSelectDay = this.updateSelectDay.bind(this);
  }

  componentDidMount() {
    // const yearList = document.querySelector('.gmu-calendar .calendar-year-list');
    // const currentYear = document.querySelector('.gmu-calendar .current-year');
    // // // yearList.scrollTop = currentYear.offsetTop - (yearList.offsetHeight / 2) + 22;
    // // currentYear.scrollIntoView();
    // // //  - (yearList.offsetHeight / 2) + 22;
    // // console.log(yearList.scrollTop, currentYear.offsetTop);
    // window.yearList = yearList;
    // window.currentYear = currentYear;
  }

  updateMonthList(direction) {
    if (direction === 'left') {
      const array = [...this.state.selectDay.recordMonth];
      array.push(this.state.selectDay.tempMonth + 1);
      array.shift();
      this.setState(update(this.state, {
        selectDay: {
          recordMonth: { $set: array },
          direction: { $set: 'left' },
          tempMonth: { $set: this.state.selectDay.tempMonth + 1 },
        },
      }));
    } else {
      const array = [...this.state.selectDay.recordMonth];
      array.push(this.state.selectDay.tempMonth - 1);
      array.shift();
      this.setState(update(this.state, {
        selectDay: {
          recordMonth: { $set: array },
          direction: { $set: 'right' },
          tempMonth: { $set: this.state.selectDay.tempMonth - 1 },
        },
      }));
    }
  }

  updateSelectDay(year, month, date) {
    const newDate = new Date();
    newDate.setFullYear(year);
    newDate.setMonth(month);
    newDate.setDate(date);
    let selectDay = getDayInfo(newDate);
    selectDay = { ...this.state.selectDay, ...selectDay };
    this.setState(update(this.state, {
      selectDay: { $set: selectDay },
    }));
  }

  render() {
    const buttonOptionOk = {
      style: {
        clickResponseColor: '',
        // hoverResponseClass: '',
        color: '',
        background: '#fff',
        boxShadow: '',
        border: '',
        borderRadius: '',
        padding: '',
        margin: '',
        fontSize: '', // custom button size
        // maxWidth: 100,
        // textOverflow: 'ellipsis',
        // overflow: 'hidden',
        // whiteSpace: 'nowrap',
      },
      iconClassBefore: '',
      iconClassAfter: '',
      // boxShadow: true,
      content: 'OK',
      stateClass: false, // malibu / charade / shark / froly / fern
      widthClass: '', // col-1 ~ col-12
      size: '', // x-large / large / middle / small
      // componentDidMountFunc: () => {
      //   console.log('done!');
      // },
      onClickFunc: () => {
        const dateParser = `${this.state.selectDay.year}-${this.state.selectDay.monthInNumber + 1}-${this.state.selectDay.date}`;
        this.props.methods.getSelectDay(dateParser);
      },
    };
    const buttonOptionCancel = {
      style: {
        clickResponseColor: '',
        // hoverResponseClass: '',
        color: '',
        background: '#fff',
        boxShadow: '',
        border: '',
        borderRadius: '',
        padding: '',
        margin: '',
        fontSize: '', // custom button size
        // maxWidth: 100,
        // textOverflow: 'ellipsis',
        // overflow: 'hidden',
        // whiteSpace: 'nowrap',
      },
      iconClassBefore: '',
      iconClassAfter: '',
      // boxShadow: true,
      content: 'CANCEL',
      stateClass: false, // malibu / charade / shark / froly / fern
      widthClass: '', // col-1 ~ col-12
      size: '', // x-large / large / middle / small
      // componentDidMountFunc: () => {
      //   console.log('done!');
      // },
      onClickFunc: () => {
        const inputValue = this.props.methods.getSelectDay(false);
        if (!inputValue || inputValue === '') {
          const getCurrentDay = new Date();
          const today = getDayInfo(getCurrentDay);
          const getCurrentMonthFirstDay = new Date(getCurrentDay.getFullYear(), getCurrentDay.getMonth(), 1);
          const getCurrentMonthLastDay = new Date(getCurrentMonthFirstDay.getFullYear(), getCurrentMonthFirstDay.getMonth() + 1, getCurrentMonthFirstDay.getDate() - 1);
          const resetSelectDay = {
            ...today,
            recordYear: [today.year - 1, today.year],
            recordMonth: [today.monthInNumber - 1, today.monthInNumber],
            direction: 'left',
            tempYear: today.year,
            tempMonth: today.monthInNumber,
          };
          this.setState(update(this.state, {
            selectDay: { $set: resetSelectDay },
          }));
        }
      },
    };
    const { options } = this.props;
    const { calendarHead, calendarBoday, today, selectDay, trigger } = this.state;
    return (
      <div className="gmu-calendar" data-active={options.show}>
        <CalendarHead options={{ calendarHead, selectDay, trigger, show: options.show}} />
        <CalendarBody options={{ calendarBoday, selectDay, today, trigger, show: options.show}} methods={{ updateMonthList: this.updateMonthList, updateSelectDay: this.updateSelectDay }} />
        <div className="gmu-confirm-buttons">
          <Button options={buttonOptionCancel} />
          <Button options={buttonOptionOk} />
        </div>
      </div>
    );
  }
}

class CalendarHead extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    const { trigger, selectDay, calendarHead, show } = this.props.options;
    const { trigger: n_trigger, selectDay: n_selectDay, calendarHead: n_calendarHead } = nextProps.options;
    if (nextProps.options.show !== show && nextProps.options.show === 'false' && !equal(n_selectDay, selectDay)) {
      return true;
    }
    if (nextProps.options.show !== show) {
      return false;
    }
    const update = !equal(trigger, n_trigger) || !equal(calendarHead, n_calendarHead) || selectDay.day !== n_selectDay.day || selectDay.month !== n_selectDay.month || selectDay.date !== n_selectDay.date;
    if (update) {
      return true;
    }
    return false;
  }
  render() {
    return (
      <div className="gmu-calendar-head" data-active={this.props.options.trigger.calendarHeadYear}>
        <CalendarHeadYear options={this.props.options} />
        {/* {`星期${props.options.day}, `}
        {`${props.options.month}月`} */}
        <span className="gmu-calendar-date">
          {`${this.props.options.selectDay.day}, `}
          {`${this.props.options.selectDay.month} `}
          {this.props.options.selectDay.date}
        </span>
      </div>
    );
  }
}

class CalendarHeadYear extends React.Component {
  renderYear() {
    const currentYear = this.props.options.selectDay.year;
    const firstYear = 1970;
    const lastYear = currentYear + 100;
    let array = [];
    for (let i = 1970; i <= lastYear; i += 1) {
      const year = i;
      array.push(year);
    }
    array = array.map((item, i) => {
      if (item === currentYear) {
        return <span className="current-year" key={item}>{item}1</span>;
      }
      return <span key={item}>{item}</span>;
    });
    return array;
  }
  // calendarHeadYear
  render() {
    return (
      <div
        className="gmu-calendar-head-year"
        data-active={this.props.options.trigger.calendarHeadYear}
        onClick={(e) => {
          this.props.options.calendarHead.calendarHeadYear.onClickFunc();
        }}
      >
        <span className="year-select">{this.props.options.selectDay.year}</span>
        <span className="year-list" data-active={this.props.options.trigger.calendarHeadYear}>{this.renderYear()}</span>
      </div>
    );
  }
}

class CalendarBody extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.options.show !== this.props.options.show && nextProps.options.show === 'false' && !equal(nextProps.options.selectDay, this.props.options.selectDay)) {
      return true;
    }
    if (nextProps.options.show !== this.props.options.show) {
      return false;
    }
    return true;
  }
  render() {
    return (
      <div className="gmu-calendar-body">
        <div className="calendar-days-list" data-active={this.props.options.trigger.calendarHeadYear}>
          <CalendarMonthSwitcher options={this.props.options.selectDay} methods={{ updateMonthList: this.props.methods.updateMonthList }} />
          <CalendarMonthList options={this.props.options.selectDay} methods={{ updateSelectDay: this.props.methods.updateSelectDay }} />
          {/* <CalendarYearList options={props.options} /> */}
        </div>
        <div className="calendar-year-list" data-active={this.props.options.trigger.calendarHeadYear}>
          <CalendarYearList options={this.props.options} />
        </div>
      </div>
    );
  }
};

class CalendarMonthSwitcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isometricButtonLeftOption: {
        style: {
          clickResponseColor: '',
          hoverResponseColor: '#fff',
          color: '',
          background: '#fff',
          boxShadow: '',
          border: '',
          borderRadius: '',
          padding: '',
          margin: '',
          fontSize: 14, // custom button size
          // maxWidth: 100,
          // textOverflow: 'ellipsis',
          // overflow: 'hidden',
          // whiteSpace: 'nowrap',
        },
        iconClassBefore: '',
        iconClassAfter: '',
        // boxShadow: true,
        content: '左',
        // stateClass: '', // malibu / charade / shark / froly / fern
        // size: 'middle', // x-large / large / middle / small
        customSize: 45,
        shapeClass: 'circle',
        onClickFunc: () => {
          props.methods.updateMonthList('right');
        },
      },
      isometricButtonRightOption: {
        style: {
          clickResponseColor: '',
          hoverResponseColor: '#fff',
          color: '',
          background: '#fff',
          boxShadow: '',
          border: '',
          borderRadius: '',
          padding: '',
          margin: '',
          fontSize: 14, // custom button size
          // maxWidth: 100,
          // textOverflow: 'ellipsis',
          // overflow: 'hidden',
          // whiteSpace: 'nowrap',
        },
        iconClassBefore: '',
        iconClassAfter: '',
        // boxShadow: true,
        content: '右',
        // stateClass: '', // malibu / charade / shark / froly / fern
        // size: 'middle', // x-large / large / middle / small
        customSize: 45,
        shapeClass: 'circle',
        onClickFunc: () => {
          props.methods.updateMonthList('left');
        },
      },
    };
  }

  shouldComponentUpdate(nextProps) {
    if (!equal(this.props.options.recordMonth, nextProps.options.recordMonth) || this.props.options.year !== nextProps.options.year) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <div className="gmu-switcher">

        {/* {`${props.options.year} ${props.options.monthLong}`} */}
        <CalendarSwitchList options={this.props.options} />
        <span className="gmu-switch-left">
          <IsometricButton options={this.state.isometricButtonLeftOption} />
        </span>
        <span className="gmu-switch-right">
          <IsometricButton options={this.state.isometricButtonRightOption} />
        </span>
      </div>
    );
  }
};

const CalendarSwitchList = (props) => {
  const { options } = props;
  const preMonthDetail = setMonthAndGetNewInfo(options.detail, options.recordMonth[0]);
  const nowMonthDetail = setMonthAndGetNewInfo(options.detail, options.recordMonth[1]);
  const renderMonthList = () => {
    const array = options.recordMonth.map((item, i) => {
      if (i === 0) {
        return (
          <span
            className={`gmu-switch-list move-out ${options.direction}`}
            ref={(target) => {
              if (!target) {
                return;
              }
              setTimeout(() => {
                target.className += ' active';
              }, 10);
            }}
            key={`${item}CalendarSwitchList${i}`}
          >
            {`${preMonthDetail.monthLong} ${preMonthDetail.year}`}
          </span>
        );
      }
      return (
        <span
          className={`gmu-switch-list move-in ${options.direction}`}
          ref={(target) => {
            if (!target) {
              return;
            }
            setTimeout(() => {
              target.className += ' active';
            }, 10);
          }}
          key={`${item}CalendarSwitchList${i}`}
        >
          {`${nowMonthDetail.monthLong} ${nowMonthDetail.year}`}
        </span>
      );
    });
    return array;
  };
  return (
    <div>
      {renderMonthList()}
    </div>
  );
};

const CalendarMonthList = (props) => {
  const { options, methods } = props;
  const renderMonthList = () => {
    const array = options.recordMonth.map((item, i) => {
      const data = setMonthAndGetNewInfo(options.detail, item);
      if (i === 0) {
        return (
          <div
            className={`gmu-month-list move-out ${options.direction}`}
            ref={(target) => {
              if (!target) {
                return;
              }
              setTimeout(() => {
                target.className += ' active';
              }, 10);
            }}
            key={`${item}CalendarMonthList${i}`}
          >
            <CalendarMonthItem data={{ dateInfo: data, options }} methods={methods}/>
          </div>
        );
      }
      return (
        <div
          className={`gmu-month-list move-in ${options.direction}`}
          ref={(target) => {
            if (!target) {
              return;
            }
            setTimeout(() => {
              target.className += ' active';
            }, 10);
          }}
          key={`${item}CalendarMonthList${i}`}
        >
          <CalendarMonthItem data={{ dateInfo: data, options }} methods={methods}/>
        </div>
      );
    });
    return array;
  };
  return (
    <div>
      <div className="gmu-day">
        <ul>
          <li>S</li>
          <li>M</li>
          <li>T</li>
          <li>W</li>
          <li>T</li>
          <li>F</li>
          <li>S</li>
        </ul>
      </div>
      {renderMonthList()}
    </div>
  );
};

const CalendarMonthItem = (props) => {
  const { updateSelectDay } = props.methods;
  const { year, monthInNumber } = props.data.options;
  const days = props.data.dateInfo.days;
  const firstDayInMonth = props.data.dateInfo.firstDayInMonth;
  const selectInCurrentMonth = props.data.dateInfo.year === year && props.data.dateInfo.monthInNumber === monthInNumber;
  // const today = new Date();
  // const selectSameAsToday = props.data.dateInfo.year === today.getFullYear() && props.data.dateInfo.monthInNumber === today.getMonth() && props.data.options.date === today.getDate();
  const daysArray = [];
  for (let i = 0; i <= firstDayInMonth - 1; i += 1) {
    daysArray.push(0);
  }
  for (let day = 1; day <= days; day += 1) {
    daysArray.push(day);
  }
  const adjustNumber = (7 - (daysArray.length % 7)) === 7 ? 0 : (7 - (daysArray.length % 7));
  for (let i = 0; i <= adjustNumber - 1; i += 1) {
    daysArray.push(0);
  }
  const row = daysArray.length / 7;
  const renderItemCol = (arrayData) => {
    return arrayData.map((item) => {
      const isometricButtonOption = {
        style: {
          clickResponseColor: '',
          hoverResponseColor: selectInCurrentMonth && item === props.data.options.date ? 'rgba(255,255,0,.5)' : false,
          background: '#fff',
          fontSize: 12, // custom button size
          opacity: item ? 1 : 0,
          pointerEvents: item ? 'auto' : 'none',
        },
        // iconClassBefore: '',
        // iconClassAfter: '',
        // boxShadow: true,
        content: item,
        // stateClass: '', // malibu / charade / shark / froly / fern
        // size: 'middle', // x-large / large / middle / small
        customSize: 34,
        shapeClass: 'circle',
        // componentDidMountFunc: () => {
        //   console.log('done!');
        // },
        onClickFunc: () => {
          updateSelectDay(props.data.dateInfo.year, props.data.dateInfo.monthInNumber, item);
          // props.methods.updateMonthList('left');
          // this.setState(update(this.state, {
          //   selectDay: {
          //     record: ,
          //     direction: { $set: 'left' },
          //   }
          // }));
        },
      };
      return (
        <li key={`${props.data.dateInfo.year}${props.data.dateInfo.monthInNumber}${item ? item : Math.random()}`}>
          <IsometricButton options={isometricButtonOption} />
        </li>
      );
    });
  };
  const renderItemRow = () => {
    let itemRowArray = [];
    for (let i = 0; i <= row - 1; i += 1) {
      const arrayData = [...daysArray].slice(i * 7, i * 7 + 7);
      // itemRowArray = daysArray.slice(i * 7, i * 7 + 7);
      itemRowArray.push(<ul key={`${props.data.dateInfo.year}${props.data.dateInfo.monthInNumber}${i}`}>
        {renderItemCol(arrayData)}
      </ul>);
    }
    return itemRowArray;
  };
  return (
    <div className="gmu-day">
      {renderItemRow()}
    </div>
  );
}

class CalendarYearList extends React.Component {
  shouldComponentUpdate(nextProps) {
    const update = this.props.options.trigger.calendarHeadYear !== nextProps.options.trigger.calendarHeadYear || this.props.options.selectDay.year !== nextProps.options.selectDay.year;
    if (update) {
      return true;
    }
    return false;
  }

  renderYear() {
    const { calendarBoday, selectDay } = this.props.options;
    const currentYear = selectDay.year;
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
  }
  render() {
    return (
      <span className="year-list">{this.renderYear()}</span>
    );
  }
}


export default Calendar;
