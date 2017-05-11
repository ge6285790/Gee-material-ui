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

var _isometricButton = require('./isometricButton.scss');

var _isometricButton2 = _interopRequireDefault(_isometricButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-undef: "error" */
/* eslint-env browser */

var IsometricButton = function (_React$Component) {
  _inherits(IsometricButton, _React$Component);

  function IsometricButton(props) {
    _classCallCheck(this, IsometricButton);

    var _this = _possibleConstructorReturn(this, (IsometricButton.__proto__ || Object.getPrototypeOf(IsometricButton)).call(this, props));

    var defaultStyle = _extends({}, props.options.style);
    _this.clickResponseStyle = {
      background: defaultStyle.clickResponseColor
    };
    _this.hoverResponseStyle = {
      background: defaultStyle.hoverResponseColor
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
    delete defaultStyle.hoverResponseColor;
    delete defaultStyle.color;
    delete defaultStyle.background;
    delete defaultStyle.padding;
    delete defaultStyle.textOverflow;
    delete defaultStyle.overflow;
    delete defaultStyle.whiteSpace;

    _this.buttonStyle = _extends({}, defaultStyle, {
      width: props.options.customSize,
      height: props.options.customSize,
      lineHeight: props.options.customSize + 'px'
    });

    _this.state = {
      clickResponseArray: [],
      buttonStyle: {
        range: 0,
        left: 0,
        top: 0,
        width: props.options.customSize,
        height: props.options.customSize,
        lineHeight: props.options.customSize + 'px'
      }
    };
    return _this;
  }

  _createClass(IsometricButton, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props$options$compon = this.props.options.componentDidMountFunc,
          componentDidMountFunc = _props$options$compon === undefined ? function () {} : _props$options$compon;

      this.range = this.button.offsetWidth;
      componentDidMountFunc();
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {
      if (!(0, _deepEqual2.default)(nextProps, this.props)) {
        var defaultStyle = _extends({}, nextProps.options.style);
        this.clickResponseStyle = {
          background: defaultStyle.clickResponseColor
        };
        this.hoverResponseStyle = {
          background: defaultStyle.hoverResponseColor
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
        delete defaultStyle.hoverResponseColor;
        delete defaultStyle.color;
        delete defaultStyle.background;
        delete defaultStyle.padding;
        delete defaultStyle.textOverflow;
        delete defaultStyle.overflow;
        delete defaultStyle.whiteSpace;

        this.buttonStyle = _extends({}, defaultStyle, {
          width: this.props.options.customSize,
          height: this.props.options.customSize,
          lineHeight: this.props.options.customSize + 'px'
        });

        this.state = {
          clickResponseArray: [],
          buttonStyle: {
            range: 0,
            left: 0,
            top: 0,
            width: this.props.options.customSize,
            height: this.props.options.customSize,
            lineHeight: this.props.options.customSize + 'px'
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
          transform: 'scale(0)',
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

      this.range = this.button.offsetWidth;
      var state = {
        active: 'true',
        style: _extends({
          transform: 'scale(' + this.range * 2 / 21 + ')',
          left: e.pageX - this.button.getBoundingClientRect().left - window.scrollX,
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
          classNames = _props$options.classNames,
          stateClass = _props$options.stateClass,
          _props$options$size = _props$options.size,
          size = _props$options$size === undefined ? '' : _props$options$size,
          _props$options$conten = _props$options.content,
          content = _props$options$conten === undefined ? '' : _props$options$conten,
          _props$options$iconCl = _props$options.iconClassBefore,
          iconClassBefore = _props$options$iconCl === undefined ? '' : _props$options$iconCl,
          _props$options$iconCl2 = _props$options.iconClassAfter,
          iconClassAfter = _props$options$iconCl2 === undefined ? '' : _props$options$iconCl2,
          _props$options$col = _props$options.col,
          col = _props$options$col === undefined ? '' : _props$options$col,
          _props$options$boxSha = _props$options.boxShadow,
          boxShadow = _props$options$boxSha === undefined ? false : _props$options$boxSha,
          _props$options$shapeC = _props$options.shapeClass,
          shapeClass = _props$options$shapeC === undefined ? '' : _props$options$shapeC,
          _props$options$onClic = _props$options.onClickFunc,
          onClickFunc = _props$options$onClic === undefined ? function () {} : _props$options$onClic;
      var clickResponseArray = this.state.clickResponseArray;

      var boxShadowClass = boxShadow ? 'box-shadow' : '';
      return _react2.default.createElement(
        'div',
        { id: id, className: 'gum gmu-isometric-button ' + stateClass + ' ' + col + ' ' + shapeClass + ' ' + classNames },
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
            }
            // onTouchStart={(e) => { this.appendClickResponse(); this.setTimeoutStop(); }}
            // onTouchEnd={(e) => {
            //   this.fireClickResponse(e);
            //   onClickFunc(e);
            //   this.setTimeoutToClear();
            // }}
            , style: this.buttonStyle
          },
          _react2.default.createElement(
            'div',
            { style: this.buttonDivStyle },
            _react2.default.createElement('span', { className: 'color-hover-response', style: this.hoverResponseStyle }),
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

  return IsometricButton;
}(_react2.default.Component);

IsometricButton.defaultProps = {
  options: {}
};

IsometricButton.propTypes = {
  options: _react2.default.PropTypes.object.isRequired
};

exports.default = IsometricButton;