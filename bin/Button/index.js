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

var _common = require('../Common/common.scss');

var _common2 = _interopRequireDefault(_common);

var _button = require('./button.scss');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button(props) {
    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

    var defaultStyle = _extends({}, props.options.style);
    _this.clickResponseStyle = {
      background: defaultStyle.clickResponseColor
    };
    _this.buttonDivStyle = {
      color: defaultStyle.color,
      background: defaultStyle.background,
      padding: defaultStyle.padding
    };
    _this.contentWordStyle = {
      textOverflow: defaultStyle.textOverflow,
      overflow: defaultStyle.overflow,
      whiteSpace: defaultStyle.whiteSpace
    };
    delete defaultStyle.clickResponseColor;
    delete defaultStyle.color;
    delete defaultStyle.background;
    delete defaultStyle.padding;
    delete defaultStyle.textOverflow;
    delete defaultStyle.overflow;
    delete defaultStyle.whiteSpace;

    _this.buttonStyle = defaultStyle;

    _this.state = {
      clickResponseArray: [],
      buttonStyle: {
        range: 0,
        left: 0,
        top: 0
      }
    };
    return _this;
  }

  _createClass(Button, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props$options$compon = this.props.options.componentDidMountFunc,
          componentDidMountFunc = _props$options$compon === undefined ? function () {} : _props$options$compon;

      console.log('this.button', this.button);
      // this.range = this.button.offsetWidth >= this.button.offsetHeight ?
      //               this.button.offsetWidth : this.button.offsetHeight;
      this.range = Math.sqrt(this.button.offsetWidth * this.button.offsetWidth + this.button.offsetHeight * this.button.offsetHeight);

      try {
        componentDidMountFunc();
      } catch (e) {
        console.log(e);
      }
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {
      if (!(0, _deepEqual2.default)(nextProps, this.props)) {
        var defaultStyle = _extends({}, nextProps.options.style);
        this.clickResponseStyle = {
          background: defaultStyle.clickResponseColor
        };
        this.buttonDivStyle = {
          color: defaultStyle.color,
          background: defaultStyle.background,
          padding: defaultStyle.padding
        };
        this.contentWordStyle = {
          textOverflow: defaultStyle.textOverflow,
          overflow: defaultStyle.overflow,
          whiteSpace: defaultStyle.whiteSpace
        };
        delete defaultStyle.clickResponseColor;
        delete defaultStyle.color;
        delete defaultStyle.background;
        delete defaultStyle.padding;
        delete defaultStyle.textOverflow;
        delete defaultStyle.overflow;
        delete defaultStyle.whiteSpace;

        this.buttonStyle = defaultStyle;

        this.state = {
          clickResponseArray: [],
          buttonStyle: {
            range: 0,
            left: 0,
            top: 0
          }
        };
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.setTime);
    }
  }, {
    key: 'setTimeoutStop',
    value: function setTimeoutStop() {
      clearTimeout(this.setTime);
    }
  }, {
    key: 'setTimeoutToClear',
    value: function setTimeoutToClear() {
      var that = this;
      if (this.state.clickResponseArray.length !== 0) {
        this.setTime = setTimeout(function () {
          that.clearClickResponse();
          that.setTimeoutToClear();
        }, 1500);
      }
    }
  }, {
    key: 'appendClickResponse',
    value: function appendClickResponse() {
      var clickResponseArray = this.state.clickResponseArray;

      var newArray = [].concat(_toConsumableArray(clickResponseArray));
      newArray.push({
        active: 'false',
        style: {
          transform: 'scale3d(0, 0, 1)',
          left: 0,
          top: 0
        }
      });
      this.setState((0, _reactAddonsUpdate2.default)(this.state, {
        clickResponseArray: { $set: newArray }
      }));
    }
  }, {
    key: 'fireClickResponse',
    value: function fireClickResponse(e) {
      var clickResponseArray = this.state.clickResponseArray;

      var state = {
        active: 'true',
        style: _extends({
          // transform: `scale3d(${(this.range / 21) * 2.5}, ${(this.range / 21) * 2.5}, 1)`,
          transform: 'scale3d(' + this.range / 21 * 2.5 + ', ' + this.range / 21 * 2.5 + ', 1)',
          // left: e.pageX - this.button.offsetLeft,
          left: e.pageX - this.button.getBoundingClientRect().left - window.scrollX,
          // top: e.pageY - this.button.offsetTop,
          top: e.pageY - this.button.getBoundingClientRect().top - window.scrollY
        }, this.clickResponseStyle)
      };

      this.setState((0, _reactAddonsUpdate2.default)(this.state, {
        clickResponseArray: _defineProperty({}, clickResponseArray.length - 1, { $set: state })
      }));
    }
  }, {
    key: 'clearClickResponse',
    value: function clearClickResponse() {
      var clickResponseArray = this.state.clickResponseArray;

      var newArray = [].concat(_toConsumableArray(clickResponseArray));
      newArray.shift();
      this.setState((0, _reactAddonsUpdate2.default)(this.state, {
        clickResponseArray: { $set: newArray }
      }));
    }
  }, {
    key: 'renderClickReponse',
    value: function renderClickReponse() {
      var _this2 = this;

      var buttonStyle = this.state.buttonStyle;

      var clickResponseArray = [];

      if (this.state.clickResponseArray.length !== 0) {
        clickResponseArray = this.state.clickResponseArray.map(function (item, i) {
          return _react2.default.createElement('span', { className: 'color-click-response', style: item.style, 'data-active': item.active, ref: function ref(span) {
              _this2.spanAnimate = span;
            }, key: 'color-click-response' + i });
        });
      }
      return clickResponseArray;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props$options = this.props.options,
          _props$options$id = _props$options.id,
          id = _props$options$id === undefined ? '' : _props$options$id,
          _props$options$classN = _props$options.classNames,
          classNames = _props$options$classN === undefined ? '' : _props$options$classN,
          stateClass = _props$options.stateClass,
          _props$options$conten = _props$options.content,
          content = _props$options$conten === undefined ? '' : _props$options$conten,
          _props$options$iconCl = _props$options.iconClassBefore,
          iconClassBefore = _props$options$iconCl === undefined ? '' : _props$options$iconCl,
          _props$options$iconCl2 = _props$options.iconClassAfter,
          iconClassAfter = _props$options$iconCl2 === undefined ? '' : _props$options$iconCl2,
          _props$options$col = _props$options.col,
          col = _props$options$col === undefined ? '' : _props$options$col,
          _props$options$offset = _props$options.offset,
          offset = _props$options$offset === undefined ? '' : _props$options$offset,
          _props$options$disabl = _props$options.disable,
          disable = _props$options$disabl === undefined ? 'true' : _props$options$disabl,
          _props$options$boxSha = _props$options.boxShadow,
          boxShadow = _props$options$boxSha === undefined ? false : _props$options$boxSha,
          _props$options$size = _props$options.size,
          size = _props$options$size === undefined ? '' : _props$options$size,
          _props$options$onClic = _props$options.onClickFunc,
          onClickFunc = _props$options$onClic === undefined ? function () {} : _props$options$onClic;
      var clickResponseArray = this.state.clickResponseArray;

      var boxShadowClass = boxShadow ? 'box-shadow' : '';
      return _react2.default.createElement(
        'div',
        { id: id, className: 'gum gmu-button ' + stateClass + ' ' + col + ' ' + offset + ' ' + classNames + ' ' + (disable === true ? 'disable' : '') },
        _react2.default.createElement(
          'button',
          {
            className: col ? 'col-12 ' + boxShadowClass + ' ' + size : boxShadowClass + ' ' + size,
            ref: function ref(button) {
              _this3.button = button;
            },
            onMouseDown: function onMouseDown(e) {
              _this3.appendClickResponse();_this3.setTimeoutStop();
            },
            onMouseUp: function onMouseUp(e) {
              _this3.fireClickResponse(e);
              onClickFunc(e);
              _this3.setTimeoutToClear();
            },
            style: this.buttonStyle
          },
          _react2.default.createElement(
            'div',
            { style: this.buttonDivStyle },
            _react2.default.createElement('span', { className: 'color-hover-response' }),
            this.renderClickReponse(),
            _react2.default.createElement(
              'span',
              { className: 'content-word', style: this.contentWordStyle },
              _react2.default.createElement('i', { className: iconClassBefore }),
              content,
              _react2.default.createElement('i', { className: iconClassAfter })
            )
          )
        )
      );
    }
  }]);

  return Button;
}(_react2.default.Component);

Button.defaultProps = {
  options: {}
};

Button.propTypes = {
  options: _react2.default.PropTypes.object.isRequired
};

exports.default = Button;