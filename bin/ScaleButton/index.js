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

var _scaleButton = require('./scaleButton.scss');

var _scaleButton2 = _interopRequireDefault(_scaleButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-undef: "error" */
/* eslint-env browser */

var ScaleButton = function (_React$Component) {
  _inherits(ScaleButton, _React$Component);

  function ScaleButton(props) {
    _classCallCheck(this, ScaleButton);

    var _this = _possibleConstructorReturn(this, (ScaleButton.__proto__ || Object.getPrototypeOf(ScaleButton)).call(this, props));

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
      clickDownClass: '',
      clickUpClass: '',
      buttonStyle: {
        range: 0,
        left: 0,
        top: 0,
        width: props.options.customSize,
        height: props.options.customSize,
        lineHeight: props.options.customSize + 'px'
      },
      clickHidden: props.options.clickHidden,
      active: props.options.active
    };
    return _this;
  }

  _createClass(ScaleButton, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props$options$compon = this.props.options.componentDidMountFunc,
          componentDidMountFunc = _props$options$compon === undefined ? function () {} : _props$options$compon;

      this.range = this.button.offsetWidth >= this.button.offsetHeight ? this.button.offsetWidth : this.button.offsetHeight;
      componentDidMountFunc();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      console.log('componentWillReceiveProps', nextProps);
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
        width: nextProps.options.customSize,
        height: nextProps.options.customSize,
        lineHeight: nextProps.options.customSize + 'px'
      });

      var newState = {
        clickResponseArray: [],
        buttonStyle: {
          range: 0,
          left: 0,
          top: 0,
          width: nextProps.options.customSize,
          height: nextProps.options.customSize,
          lineHeight: nextProps.options.customSize + 'px'
        },
        clickHidden: nextProps.options.clickHidden,
        active: nextProps.options.active
      };
      this.setState((0, _reactAddonsUpdate2.default)(this.state, { $set: newState }));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props$options = this.props.options,
          _props$options$id = _props$options.id,
          id = _props$options$id === undefined ? '' : _props$options$id,
          _props$options$classN = _props$options.classNames,
          classNames = _props$options$classN === undefined ? '' : _props$options$classN,
          stateClass = _props$options.stateClass,
          _props$options$size = _props$options.size,
          size = _props$options$size === undefined ? '' : _props$options$size,
          _props$options$conten = _props$options.content,
          content = _props$options$conten === undefined ? '' : _props$options$conten,
          _props$options$iconCl = _props$options.iconClassBefore,
          iconClassBefore = _props$options$iconCl === undefined ? '' : _props$options$iconCl,
          _props$options$iconCl2 = _props$options.iconClassAfter,
          iconClassAfter = _props$options$iconCl2 === undefined ? '' : _props$options$iconCl2,
          _props$options$widthC = _props$options.widthClass,
          widthClass = _props$options$widthC === undefined ? '' : _props$options$widthC,
          _props$options$boxSha = _props$options.boxShadow,
          boxShadow = _props$options$boxSha === undefined ? false : _props$options$boxSha,
          _props$options$shapeC = _props$options.shapeClass,
          shapeClass = _props$options$shapeC === undefined ? '' : _props$options$shapeC,
          _props$options$onClic = _props$options.onClickFunc,
          onClickFunc = _props$options$onClic === undefined ? function () {} : _props$options$onClic,
          _props$options$onMous = _props$options.onMouseUpFunc,
          onMouseUpFunc = _props$options$onMous === undefined ? function () {} : _props$options$onMous,
          _props$options$onMous2 = _props$options.onMouseDownFunc,
          onMouseDownFunc = _props$options$onMous2 === undefined ? function () {} : _props$options$onMous2;
      var _state = this.state,
          clickResponseArray = _state.clickResponseArray,
          clickDownClass = _state.clickDownClass,
          clickUpClass = _state.clickUpClass,
          clickHidden = _state.clickHidden,
          active = _state.active;

      var boxShadowClass = boxShadow ? 'box-shadow' : '';

      console.log('clickDownClass, clickUpClass', clickDownClass, clickUpClass);
      return _react2.default.createElement(
        'div',
        { id: id, className: 'gum gmu-scale-button ' + stateClass + ' ' + widthClass + ' ' + shapeClass + ' ' + classNames },
        _react2.default.createElement(
          'button',
          {
            className: widthClass ? 'col-12 ' + boxShadowClass + ' ' + size + ' ' + clickDownClass + ' ' + clickUpClass : boxShadowClass + ' ' + size + ' ' + clickDownClass + ' ' + clickUpClass,
            ref: function ref(button) {
              _this2.button = button;
            },
            'data-active': active,
            onMouseDown: function onMouseDown(e) {
              _this2.setState((0, _reactAddonsUpdate2.default)(_this2.state, {
                clickDownClass: { $set: 'click-down' }
              }));
              onMouseDownFunc(e);
            },
            onMouseUp: function onMouseUp(e) {
              _this2.setState((0, _reactAddonsUpdate2.default)(_this2.state, {
                clickUpClass: { $set: 'click-up' }
              }));
              onMouseUpFunc(e);
              onClickFunc(e);
              if (clickHidden) {
                setTimeout(function () {
                  _this2.setState((0, _reactAddonsUpdate2.default)(_this2.state, {
                    active: { $set: 'true' },
                    clickUpClass: { $set: '' },
                    clickDownClass: { $set: '' }
                  }));
                }, 220);
                return;
              }
              setTimeout(function () {
                _this2.setState((0, _reactAddonsUpdate2.default)(_this2.state, {
                  // hide: { $set: 'true' }
                  clickUpClass: { $set: '' },
                  clickDownClass: { $set: '' }
                }));
              }, 600);
            },
            style: this.buttonStyle
          },
          _react2.default.createElement(
            'div',
            { style: this.buttonDivStyle },
            _react2.default.createElement('span', { className: 'color-click-response', style: this.hoverResponseStyle }),
            _react2.default.createElement('span', { className: 'color-hover-response', style: this.hoverResponseStyle }),
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

  return ScaleButton;
}(_react2.default.Component);

ScaleButton.defaultProps = {
  options: {}
};

ScaleButton.propTypes = {
  options: _react2.default.PropTypes.object.isRequired
};

exports.default = ScaleButton;