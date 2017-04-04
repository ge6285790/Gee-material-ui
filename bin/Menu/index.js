'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Card = require('../Card');

var _Card2 = _interopRequireDefault(_Card);

var _common = require('../Common/common.scss');

var _common2 = _interopRequireDefault(_common);

var _menu = require('./menu.scss');

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menu = function (_React$Component) {
  _inherits(Menu, _React$Component);

  function Menu() {
    _classCallCheck(this, Menu);

    return _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).apply(this, arguments));
  }

  _createClass(Menu, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var show = this.props.options.show;

      this.cardHeight = this.card.offsetHeight;
      if (!show) {
        this.card.style.opacity = 0;
        this.card.style.height = 0;
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var show = nextProps.options.show;

      if (show) {
        this.card.style.opacity = 1;
        this.card.style.height = this.cardHeight + 'px';
      } else {
        this.card.style.opacity = 0;
        this.card.style.height = 0;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props$options = this.props.options,
          cardOption = _props$options.cardOption,
          show = _props$options.show;

      var cardAdjustOption = _extends({}, cardOption, {
        col: 'col-12',
        offset: '',
        gmuCardStyle: _extends({}, cardOption.gmuCardStyle, {
          display: 'inline-block'
        })
      });
      return _react2.default.createElement(
        'div',
        { className: 'gmu gmu-menu gmu-clearfix ' + cardOption.col, 'data-active': show, ref: function ref(card) {
            _this2.card = card;
          } },
        _react2.default.createElement(
          _Card2.default,
          { options: cardAdjustOption },
          this.props.children
        )
      );
    }
  }]);

  return Menu;
}(_react2.default.Component);

exports.default = Menu;