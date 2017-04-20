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

var _calendar = require('./calendar');

var _calendar2 = _interopRequireDefault(_calendar);

var _Curtain = require('../Curtain');

var _Curtain2 = _interopRequireDefault(_Curtain);

var _AutoComplete = require('../AutoComplete');

var _AutoComplete2 = _interopRequireDefault(_AutoComplete);

var _common = require('../Common/common.scss');

var _common2 = _interopRequireDefault(_common);

var _dataPicker = require('./dataPicker.scss');

var _dataPicker2 = _interopRequireDefault(_dataPicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DataPicker = function (_React$Component) {
  _inherits(DataPicker, _React$Component);

  function DataPicker(props) {
    _classCallCheck(this, DataPicker);

    var _this = _possibleConstructorReturn(this, (DataPicker.__proto__ || Object.getPrototypeOf(DataPicker)).call(this, props));

    _this.state = {
      dataPicker: props.options.dataPicker,
      curtain: _extends({}, props.options.curtain, {
        opacity: 0,
        onClickFunc: function onClickFunc(e) {
          var curtain = e.target;
          // curtain.style.opacity = 0;
          props.options.curtain.onClickFunc(e);
          // this.setState(update(this.state, {
          //   curtain: {
          //     opacity: { $set: 0 },
          //   },
          // }));
          // setTimeout(() => {
          //   this.setState(update(this.state, {
          //     curtain: {
          //       show: { $set: 'false' },
          //     },
          //   }));
          // }, 460);
          _this.setState((0, _reactAddonsUpdate2.default)(_this.state, {
            curtain: {
              show: { $set: 'false' },
              opacity: { $set: 0 }
            },
            calendar: {
              show: { $set: 'false' }
            }
          }));
        }
      }),
      calendar: {
        show: 'false'
      }
    };
    _this.getSelectDay = _this.getSelectDay.bind(_this);
    return _this;
  }

  _createClass(DataPicker, [{
    key: 'getSelectDay',
    value: function getSelectDay(date) {
      var _this2 = this;

      if (!date) {
        this.setState((0, _reactAddonsUpdate2.default)(this.state, {
          calendar: {
            show: { $set: 'false' }
          },
          curtain: {
            show: { $set: 'false' },
            opacity: { $set: 0 }
          }
        }));
        return this.state.dataPicker.inputValue;
      }
      this.setState((0, _reactAddonsUpdate2.default)(this.state, {
        dataPicker: {
          updateValue: { $set: date }
        },
        calendar: {
          show: { $set: 'false' }
        },
        curtain: {
          show: { $set: 'false' },
          opacity: { $set: 0 }
        }
      }));
      setTimeout(function () {
        console.log('this.state', _this2.state);
      }, 500);
      return this.state.dataPicker.inputValue;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props$options = this.props.options,
          options = _props$options === undefined ? {} : _props$options;
      var _state = this.state,
          curtain = _state.curtain,
          calendar = _state.calendar,
          dataPicker = _state.dataPicker;

      return _react2.default.createElement(
        'div',
        { className: 'gmu-data-picker' },
        _react2.default.createElement(
          'div',
          {
            onClick: function onClick(e) {
              _this3.setState((0, _reactAddonsUpdate2.default)(_this3.state, {
                curtain: {
                  show: { $set: 'true' },
                  opacity: { $set: options.curtain.opacity }
                },
                calendar: {
                  show: { $set: 'true' }
                }
              }));
            }
          },
          _react2.default.createElement(_AutoComplete2.default, { options: dataPicker })
        ),
        _react2.default.createElement(_Curtain2.default, { options: curtain }),
        _react2.default.createElement(_calendar2.default, { options: calendar, methods: { getSelectDay: this.getSelectDay } })
      );
    }
  }]);

  return DataPicker;
}(_react2.default.Component);

DataPicker.propTypes = {
  options: _react2.default.PropTypes.object.isRequired
};

exports.default = DataPicker;