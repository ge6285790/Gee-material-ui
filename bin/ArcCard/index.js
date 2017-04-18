'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _deepEqual = require('deep-equal');

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _common = require('../Common/common.scss');

var _common2 = _interopRequireDefault(_common);

var _arcCard = require('./arcCard.scss');

var _arcCard2 = _interopRequireDefault(_arcCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ArcCard = function (_React$Component) {
  _inherits(ArcCard, _React$Component);

  function ArcCard() {
    _classCallCheck(this, ArcCard);

    return _possibleConstructorReturn(this, (ArcCard.__proto__ || Object.getPrototypeOf(ArcCard)).apply(this, arguments));
  }

  _createClass(ArcCard, [{
    key: 'shouldComponentUpdate',

    // constructor(props) {
    //   super(props);
    // }
    value: function shouldComponentUpdate(nextProps, nextState) {
      // console.log(equal(nextProps.options, this.props.options) , equal(nextState, this.state), nextProps.options, this.props.options, (!equal(nextState, this.state) && nextState !== null));
      if (!(0, _deepEqual2.default)(nextProps.options, this.props.options) || !(0, _deepEqual2.default)(nextState, this.state) && nextState !== null) {
        return true;
      }
      return false;
    }
  }, {
    key: 'renderImage',
    value: function renderImage() {
      // console.log(this.props.options);
      if (this.props.options && this.props.options.imageSrc) {
        return _react2.default.createElement('div', { className: 'gmu-arc-card-image', style: { backgroundImage: 'url(' + this.props.options.imageSrc + ')' } });
      }
      return '';
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$options = _props.options,
          options = _props$options === undefined ? {} : _props$options,
          methods = _props.methods;
      var _options$classNames = options.classNames,
          classNames = _options$classNames === undefined ? '' : _options$classNames,
          _options$id = options.id,
          id = _options$id === undefined ? '' : _options$id,
          _options$active = options.active,
          active = _options$active === undefined ? 'false' : _options$active,
          _options$defaultStyle = options.defaultStyle,
          defaultStyle = _options$defaultStyle === undefined ? {} : _options$defaultStyle,
          _options$resultStyle = options.resultStyle,
          resultStyle = _options$resultStyle === undefined ? {} : _options$resultStyle,
          _options$imageSrc = options.imageSrc,
          imageSrc = _options$imageSrc === undefined ? false : _options$imageSrc,
          _options$onClickFunc = options.onClickFunc,
          onClickFunc = _options$onClickFunc === undefined ? function (e) {} : _options$onClickFunc;

      var onClickMethods = onClickFunc;
      if (methods) {
        onClickMethods = function onClickMethods(e) {
          methods.clickGrid(e);
          onClickFunc(e);
        };
      }
      console.log('render');
      return _react2.default.createElement(
        'div',
        {
          id: id,
          className: 'gmu-arc-card ' + classNames,
          'data-active': active,
          style: active === 'false' ? defaultStyle : resultStyle,
          onClick: function onClick(e) {
            onClickMethods(e);
          }
        },
        this.renderImage(),
        this.props.children
      );
    }
  }]);

  return ArcCard;
}(_react2.default.Component);

exports.default = ArcCard;