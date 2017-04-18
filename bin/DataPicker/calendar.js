'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsUpdate = require('react-addons-update');

var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);

var _deepEqual = require('deep-equal');

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _IsometricButton = require('../IsometricButton');

var _IsometricButton2 = _interopRequireDefault(_IsometricButton);

var _Unit = require('../Unit');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Calendar = function (_React$Component) {
  _inherits(Calendar, _React$Component);

  function Calendar(props) {
    _classCallCheck(this, Calendar);

    var _this = _possibleConstructorReturn(this, (Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call(this, props));

    var getCurrentDay = new Date();
    var today = (0, _Unit.getDayInfo)(getCurrentDay);
    var getCurrentMonthFirstDay = new Date(getCurrentDay.getFullYear(), getCurrentDay.getMonth(), 1);
    var getCurrentMonthLastDay = new Date(getCurrentMonthFirstDay.getFullYear(), getCurrentMonthFirstDay.getMonth() + 1, getCurrentMonthFirstDay.getDate() - 1);
    _this.state = {
      today: today,
      selectDay: _extends({}, today, {
        recordYear: [today.year - 1, today.year],
        recordMonth: [today.monthInNumber - 1, today.monthInNumber],
        direction: 'left',
        tempYear: today.year,
        tempMonth: today.monthInNumber
      }),
      trigger: {
        calendarHeadYear: 'false'
      },
      calendarHead: {
        calendarHeadYear: {
          show: 'false',
          onClickFunc: function onClickFunc() {
            var showState = _this.state.trigger.calendarHeadYear === 'true' ? 'false' : 'true';
            _this.setState((0, _reactAddonsUpdate2.default)(_this.state, {
              trigger: {
                calendarHeadYear: { $set: showState }
              }
            }));
            if (showState === 'true') {
              var yearList = document.querySelector('.gmu-calendar .calendar-year-list');
              var currentYear = document.querySelector('.gmu-calendar .current-year');
              yearList.scrollTop = currentYear.offsetTop - yearList.offsetHeight / 2.5 + (_this.state.selectDay.year - 1970) * 12 + 22;
            }
          }
        }
      },
      calendarBoday: {
        calendarYearList: {
          onClickFunc: function onClickFunc(date, item) {
            var selectDay = (0, _Unit.setYearAndGetNewInfo)(date, item);
            selectDay = _extends({}, _this.state.selectDay, selectDay);
            _this.setState((0, _reactAddonsUpdate2.default)(_this.state, {
              selectDay: { $set: selectDay },
              trigger: {
                calendarHeadYear: { $set: 'false' }
              }
            }));
          }
        }
      }
    };

    _this.updateMonthList = _this.updateMonthList.bind(_this);
    _this.updateSelectDay = _this.updateSelectDay.bind(_this);
    return _this;
  }

  _createClass(Calendar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // const yearList = document.querySelector('.gmu-calendar .calendar-year-list');
      // const currentYear = document.querySelector('.gmu-calendar .current-year');
      // // // yearList.scrollTop = currentYear.offsetTop - (yearList.offsetHeight / 2) + 22;
      // // currentYear.scrollIntoView();
      // // //  - (yearList.offsetHeight / 2) + 22;
      // // console.log(yearList.scrollTop, currentYear.offsetTop);
      // window.yearList = yearList;
      // window.currentYear = currentYear;
    }
  }, {
    key: 'updateMonthList',
    value: function updateMonthList(direction) {
      if (direction === 'left') {
        var array = [].concat(_toConsumableArray(this.state.selectDay.recordMonth));
        array.push(this.state.selectDay.tempMonth + 1);
        array.shift();
        this.setState((0, _reactAddonsUpdate2.default)(this.state, {
          selectDay: {
            recordMonth: { $set: array },
            direction: { $set: 'left' },
            tempMonth: { $set: this.state.selectDay.tempMonth + 1 }
          }
        }));
      } else {
        var _array = [].concat(_toConsumableArray(this.state.selectDay.recordMonth));
        _array.push(this.state.selectDay.tempMonth - 1);
        _array.shift();
        this.setState((0, _reactAddonsUpdate2.default)(this.state, {
          selectDay: {
            recordMonth: { $set: _array },
            direction: { $set: 'right' },
            tempMonth: { $set: this.state.selectDay.tempMonth - 1 }
          }
        }));
      }
    }
  }, {
    key: 'updateSelectDay',
    value: function updateSelectDay(year, month, date) {
      var newDate = new Date();
      newDate.setFullYear(year);
      newDate.setMonth(month);
      newDate.setDate(date);
      var selectDay = (0, _Unit.getDayInfo)(newDate);
      selectDay = _extends({}, this.state.selectDay, selectDay);
      this.setState((0, _reactAddonsUpdate2.default)(this.state, {
        selectDay: { $set: selectDay }
      }));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var buttonOptionOk = {
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
          fontSize: '' },
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
        onClickFunc: function onClickFunc() {
          var dateParser = _this2.state.selectDay.year + '-' + (_this2.state.selectDay.monthInNumber + 1) + '-' + _this2.state.selectDay.date;
          _this2.props.methods.getSelectDay(dateParser);
        }
      };
      var buttonOptionCancel = {
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
          fontSize: '' },
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
        onClickFunc: function onClickFunc() {
          var inputValue = _this2.props.methods.getSelectDay(false);
          if (!inputValue || inputValue === '') {
            var getCurrentDay = new Date();
            var _today = (0, _Unit.getDayInfo)(getCurrentDay);
            var getCurrentMonthFirstDay = new Date(getCurrentDay.getFullYear(), getCurrentDay.getMonth(), 1);
            var getCurrentMonthLastDay = new Date(getCurrentMonthFirstDay.getFullYear(), getCurrentMonthFirstDay.getMonth() + 1, getCurrentMonthFirstDay.getDate() - 1);
            var resetSelectDay = _extends({}, _today, {
              recordYear: [_today.year - 1, _today.year],
              recordMonth: [_today.monthInNumber - 1, _today.monthInNumber],
              direction: 'left',
              tempYear: _today.year,
              tempMonth: _today.monthInNumber
            });
            _this2.setState((0, _reactAddonsUpdate2.default)(_this2.state, {
              selectDay: { $set: resetSelectDay }
            }));
          }
        }
      };
      var options = this.props.options;
      var _state = this.state,
          calendarHead = _state.calendarHead,
          calendarBoday = _state.calendarBoday,
          today = _state.today,
          selectDay = _state.selectDay,
          trigger = _state.trigger;

      return _react2.default.createElement(
        'div',
        { className: 'gmu-calendar', 'data-active': options.show },
        _react2.default.createElement(CalendarHead, { options: { calendarHead: calendarHead, selectDay: selectDay, trigger: trigger, show: options.show } }),
        _react2.default.createElement(CalendarBody, { options: { calendarBoday: calendarBoday, selectDay: selectDay, today: today, trigger: trigger, show: options.show }, methods: { updateMonthList: this.updateMonthList, updateSelectDay: this.updateSelectDay } }),
        _react2.default.createElement(
          'div',
          { className: 'gmu-confirm-buttons' },
          _react2.default.createElement(_Button2.default, { options: buttonOptionCancel }),
          _react2.default.createElement(_Button2.default, { options: buttonOptionOk })
        )
      );
    }
  }]);

  return Calendar;
}(_react2.default.Component);

var CalendarHead = function (_React$Component2) {
  _inherits(CalendarHead, _React$Component2);

  function CalendarHead() {
    _classCallCheck(this, CalendarHead);

    return _possibleConstructorReturn(this, (CalendarHead.__proto__ || Object.getPrototypeOf(CalendarHead)).apply(this, arguments));
  }

  _createClass(CalendarHead, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      var _props$options = this.props.options,
          trigger = _props$options.trigger,
          selectDay = _props$options.selectDay,
          calendarHead = _props$options.calendarHead,
          show = _props$options.show;
      var _nextProps$options = nextProps.options,
          n_trigger = _nextProps$options.trigger,
          n_selectDay = _nextProps$options.selectDay,
          n_calendarHead = _nextProps$options.calendarHead;

      if (nextProps.options.show !== show && nextProps.options.show === 'false' && !(0, _deepEqual2.default)(n_selectDay, selectDay)) {
        return true;
      }
      if (nextProps.options.show !== show) {
        return false;
      }
      var update = !(0, _deepEqual2.default)(trigger, n_trigger) || !(0, _deepEqual2.default)(calendarHead, n_calendarHead) || selectDay.day !== n_selectDay.day || selectDay.month !== n_selectDay.month || selectDay.date !== n_selectDay.date;
      if (update) {
        return true;
      }
      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'gmu-calendar-head', 'data-active': this.props.options.trigger.calendarHeadYear },
        _react2.default.createElement(CalendarHeadYear, { options: this.props.options }),
        _react2.default.createElement(
          'span',
          { className: 'gmu-calendar-date' },
          this.props.options.selectDay.day + ', ',
          this.props.options.selectDay.month + ' ',
          this.props.options.selectDay.date
        )
      );
    }
  }]);

  return CalendarHead;
}(_react2.default.Component);

var CalendarHeadYear = function (_React$Component3) {
  _inherits(CalendarHeadYear, _React$Component3);

  function CalendarHeadYear() {
    _classCallCheck(this, CalendarHeadYear);

    return _possibleConstructorReturn(this, (CalendarHeadYear.__proto__ || Object.getPrototypeOf(CalendarHeadYear)).apply(this, arguments));
  }

  _createClass(CalendarHeadYear, [{
    key: 'renderYear',
    value: function renderYear() {
      var currentYear = this.props.options.selectDay.year;
      var firstYear = 1970;
      var lastYear = currentYear + 100;
      var array = [];
      for (var i = 1970; i <= lastYear; i += 1) {
        var year = i;
        array.push(year);
      }
      array = array.map(function (item, i) {
        if (item === currentYear) {
          return _react2.default.createElement(
            'span',
            { className: 'current-year', key: item },
            item,
            '1'
          );
        }
        return _react2.default.createElement(
          'span',
          { key: item },
          item
        );
      });
      return array;
    }
    // calendarHeadYear

  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      return _react2.default.createElement(
        'div',
        {
          className: 'gmu-calendar-head-year',
          'data-active': this.props.options.trigger.calendarHeadYear,
          onClick: function onClick(e) {
            _this5.props.options.calendarHead.calendarHeadYear.onClickFunc();
          }
        },
        _react2.default.createElement(
          'span',
          { className: 'year-select' },
          this.props.options.selectDay.year
        ),
        _react2.default.createElement(
          'span',
          { className: 'year-list', 'data-active': this.props.options.trigger.calendarHeadYear },
          this.renderYear()
        )
      );
    }
  }]);

  return CalendarHeadYear;
}(_react2.default.Component);

var CalendarBody = function (_React$Component4) {
  _inherits(CalendarBody, _React$Component4);

  function CalendarBody() {
    _classCallCheck(this, CalendarBody);

    return _possibleConstructorReturn(this, (CalendarBody.__proto__ || Object.getPrototypeOf(CalendarBody)).apply(this, arguments));
  }

  _createClass(CalendarBody, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      if (nextProps.options.show !== this.props.options.show && nextProps.options.show === 'false' && !(0, _deepEqual2.default)(nextProps.options.selectDay, this.props.options.selectDay)) {
        return true;
      }
      if (nextProps.options.show !== this.props.options.show) {
        return false;
      }
      return true;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'gmu-calendar-body' },
        _react2.default.createElement(
          'div',
          { className: 'calendar-days-list', 'data-active': this.props.options.trigger.calendarHeadYear },
          _react2.default.createElement(CalendarMonthSwitcher, { options: this.props.options.selectDay, methods: { updateMonthList: this.props.methods.updateMonthList } }),
          _react2.default.createElement(CalendarMonthList, { options: this.props.options.selectDay, methods: { updateSelectDay: this.props.methods.updateSelectDay } })
        ),
        _react2.default.createElement(
          'div',
          { className: 'calendar-year-list', 'data-active': this.props.options.trigger.calendarHeadYear },
          _react2.default.createElement(CalendarYearList, { options: this.props.options })
        )
      );
    }
  }]);

  return CalendarBody;
}(_react2.default.Component);

;

var CalendarMonthSwitcher = function (_React$Component5) {
  _inherits(CalendarMonthSwitcher, _React$Component5);

  function CalendarMonthSwitcher(props) {
    _classCallCheck(this, CalendarMonthSwitcher);

    var _this7 = _possibleConstructorReturn(this, (CalendarMonthSwitcher.__proto__ || Object.getPrototypeOf(CalendarMonthSwitcher)).call(this, props));

    _this7.state = {
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
          fontSize: 14 },
        iconClassBefore: '',
        iconClassAfter: '',
        // boxShadow: true,
        content: '左',
        // stateClass: '', // malibu / charade / shark / froly / fern
        // size: 'middle', // x-large / large / middle / small
        customSize: 45,
        shapeClass: 'circle',
        onClickFunc: function onClickFunc() {
          props.methods.updateMonthList('right');
        }
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
          fontSize: 14 },
        iconClassBefore: '',
        iconClassAfter: '',
        // boxShadow: true,
        content: '右',
        // stateClass: '', // malibu / charade / shark / froly / fern
        // size: 'middle', // x-large / large / middle / small
        customSize: 45,
        shapeClass: 'circle',
        onClickFunc: function onClickFunc() {
          props.methods.updateMonthList('left');
        }
      }
    };
    return _this7;
  }

  _createClass(CalendarMonthSwitcher, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      if (!(0, _deepEqual2.default)(this.props.options.recordMonth, nextProps.options.recordMonth) || this.props.options.year !== nextProps.options.year) {
        return true;
      }
      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'gmu-switcher' },
        _react2.default.createElement(CalendarSwitchList, { options: this.props.options }),
        _react2.default.createElement(
          'span',
          { className: 'gmu-switch-left' },
          _react2.default.createElement(_IsometricButton2.default, { options: this.state.isometricButtonLeftOption })
        ),
        _react2.default.createElement(
          'span',
          { className: 'gmu-switch-right' },
          _react2.default.createElement(_IsometricButton2.default, { options: this.state.isometricButtonRightOption })
        )
      );
    }
  }]);

  return CalendarMonthSwitcher;
}(_react2.default.Component);

var CalendarSwitchList = function CalendarSwitchList(props) {
  var options = props.options;

  var preMonthDetail = (0, _Unit.setMonthAndGetNewInfo)(options.detail, options.recordMonth[0]);
  var nowMonthDetail = (0, _Unit.setMonthAndGetNewInfo)(options.detail, options.recordMonth[1]);
  var renderMonthList = function renderMonthList() {
    var array = options.recordMonth.map(function (item, i) {
      if (i === 0) {
        return _react2.default.createElement(
          'span',
          {
            className: 'gmu-switch-list move-out ' + options.direction,
            ref: function ref(target) {
              if (!target) {
                return;
              }
              setTimeout(function () {
                target.className += ' active';
              }, 10);
            },
            key: item + 'CalendarSwitchList' + i
          },
          preMonthDetail.monthLong + ' ' + preMonthDetail.year
        );
      }
      return _react2.default.createElement(
        'span',
        {
          className: 'gmu-switch-list move-in ' + options.direction,
          ref: function ref(target) {
            if (!target) {
              return;
            }
            setTimeout(function () {
              target.className += ' active';
            }, 10);
          },
          key: item + 'CalendarSwitchList' + i
        },
        nowMonthDetail.monthLong + ' ' + nowMonthDetail.year
      );
    });
    return array;
  };
  return _react2.default.createElement(
    'div',
    null,
    renderMonthList()
  );
};

var CalendarMonthList = function CalendarMonthList(props) {
  var options = props.options,
      methods = props.methods;

  var renderMonthList = function renderMonthList() {
    var array = options.recordMonth.map(function (item, i) {
      var data = (0, _Unit.setMonthAndGetNewInfo)(options.detail, item);
      if (i === 0) {
        return _react2.default.createElement(
          'div',
          {
            className: 'gmu-month-list move-out ' + options.direction,
            ref: function ref(target) {
              if (!target) {
                return;
              }
              setTimeout(function () {
                target.className += ' active';
              }, 10);
            },
            key: item + 'CalendarMonthList' + i
          },
          _react2.default.createElement(CalendarMonthItem, { data: { dateInfo: data, options: options }, methods: methods })
        );
      }
      return _react2.default.createElement(
        'div',
        {
          className: 'gmu-month-list move-in ' + options.direction,
          ref: function ref(target) {
            if (!target) {
              return;
            }
            setTimeout(function () {
              target.className += ' active';
            }, 10);
          },
          key: item + 'CalendarMonthList' + i
        },
        _react2.default.createElement(CalendarMonthItem, { data: { dateInfo: data, options: options }, methods: methods })
      );
    });
    return array;
  };
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { className: 'gmu-day' },
      _react2.default.createElement(
        'ul',
        null,
        _react2.default.createElement(
          'li',
          null,
          'S'
        ),
        _react2.default.createElement(
          'li',
          null,
          'M'
        ),
        _react2.default.createElement(
          'li',
          null,
          'T'
        ),
        _react2.default.createElement(
          'li',
          null,
          'W'
        ),
        _react2.default.createElement(
          'li',
          null,
          'T'
        ),
        _react2.default.createElement(
          'li',
          null,
          'F'
        ),
        _react2.default.createElement(
          'li',
          null,
          'S'
        )
      )
    ),
    renderMonthList()
  );
};

var CalendarMonthItem = function CalendarMonthItem(props) {
  var updateSelectDay = props.methods.updateSelectDay;
  var _props$data$options = props.data.options,
      year = _props$data$options.year,
      monthInNumber = _props$data$options.monthInNumber;

  var days = props.data.dateInfo.days;
  var firstDayInMonth = props.data.dateInfo.firstDayInMonth;
  var selectInCurrentMonth = props.data.dateInfo.year === year && props.data.dateInfo.monthInNumber === monthInNumber;
  // const today = new Date();
  // const selectSameAsToday = props.data.dateInfo.year === today.getFullYear() && props.data.dateInfo.monthInNumber === today.getMonth() && props.data.options.date === today.getDate();
  var daysArray = [];
  for (var i = 0; i <= firstDayInMonth - 1; i += 1) {
    daysArray.push(0);
  }
  for (var day = 1; day <= days; day += 1) {
    daysArray.push(day);
  }
  var adjustNumber = 7 - daysArray.length % 7 === 7 ? 0 : 7 - daysArray.length % 7;
  for (var _i = 0; _i <= adjustNumber - 1; _i += 1) {
    daysArray.push(0);
  }
  var row = daysArray.length / 7;
  var renderItemCol = function renderItemCol(arrayData) {
    return arrayData.map(function (item) {
      var isometricButtonOption = {
        style: {
          clickResponseColor: '',
          hoverResponseColor: selectInCurrentMonth && item === props.data.options.date ? 'rgba(255,255,0,.5)' : false,
          background: '#fff',
          fontSize: 12, // custom button size
          opacity: item ? 1 : 0,
          pointerEvents: item ? 'auto' : 'none'
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
        onClickFunc: function onClickFunc() {
          updateSelectDay(props.data.dateInfo.year, props.data.dateInfo.monthInNumber, item);
          // props.methods.updateMonthList('left');
          // this.setState(update(this.state, {
          //   selectDay: {
          //     record: ,
          //     direction: { $set: 'left' },
          //   }
          // }));
        }
      };
      return _react2.default.createElement(
        'li',
        { key: '' + props.data.dateInfo.year + props.data.dateInfo.monthInNumber + (item ? item : Math.random()) },
        _react2.default.createElement(_IsometricButton2.default, { options: isometricButtonOption })
      );
    });
  };
  var renderItemRow = function renderItemRow() {
    var itemRowArray = [];
    for (var _i2 = 0; _i2 <= row - 1; _i2 += 1) {
      var arrayData = [].concat(daysArray).slice(_i2 * 7, _i2 * 7 + 7);
      // itemRowArray = daysArray.slice(i * 7, i * 7 + 7);
      itemRowArray.push(_react2.default.createElement(
        'ul',
        { key: '' + props.data.dateInfo.year + props.data.dateInfo.monthInNumber + _i2 },
        renderItemCol(arrayData)
      ));
    }
    return itemRowArray;
  };
  return _react2.default.createElement(
    'div',
    { className: 'gmu-day' },
    renderItemRow()
  );
};

var CalendarYearList = function (_React$Component6) {
  _inherits(CalendarYearList, _React$Component6);

  function CalendarYearList() {
    _classCallCheck(this, CalendarYearList);

    return _possibleConstructorReturn(this, (CalendarYearList.__proto__ || Object.getPrototypeOf(CalendarYearList)).apply(this, arguments));
  }

  _createClass(CalendarYearList, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var update = this.props.options.trigger.calendarHeadYear !== nextProps.options.trigger.calendarHeadYear || this.props.options.selectDay.year !== nextProps.options.selectDay.year;
      if (update) {
        return true;
      }
      return false;
    }
  }, {
    key: 'renderYear',
    value: function renderYear() {
      var _props$options2 = this.props.options,
          calendarBoday = _props$options2.calendarBoday,
          selectDay = _props$options2.selectDay;

      var currentYear = selectDay.year;
      var firstYear = 1970;
      var lastYear = currentYear + 100;
      var array = [];
      for (var i = 1970; i <= lastYear; i += 1) {
        var year = i;
        array.push(year);
      }
      array = array.map(function (item, i) {
        if (item === currentYear) {
          return _react2.default.createElement(
            'span',
            {
              className: 'current-year',
              key: item,
              onClick: function onClick() {
                calendarBoday.calendarYearList.onClickFunc(selectDay.detail, item);
              }
            },
            item
          );
        }
        return _react2.default.createElement(
          'span',
          {
            key: item,
            onClick: function onClick() {
              calendarBoday.calendarYearList.onClickFunc(selectDay.detail, item);
            }
          },
          item
        );
      });
      return array;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'span',
        { className: 'year-list' },
        this.renderYear()
      );
    }
  }]);

  return CalendarYearList;
}(_react2.default.Component);

exports.default = Calendar;