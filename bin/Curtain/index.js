'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _curtain = require('./curtain.scss');

var _curtain2 = _interopRequireDefault(_curtain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Curtain = function Curtain(props) {
  var _props$options = props.options,
      options = _props$options === undefined ? {} : _props$options;
  var _options$style = options.style,
      style = _options$style === undefined ? {} : _options$style,
      _options$opacity = options.opacity,
      opacity = _options$opacity === undefined ? '0' : _options$opacity,
      _options$show = options.show,
      show = _options$show === undefined ? 'false' : _options$show,
      _options$onClickFunc = options.onClickFunc,
      onClickFunc = _options$onClickFunc === undefined ? function () {} : _options$onClickFunc;

  var curtainStyle = _extends({
    opacity: opacity
  }, style);
  return _react2.default.createElement('div', {
    className: 'gmu-curatin',
    'data-active': show,
    style: curtainStyle,
    onClick: function onClick(e) {
      var curtain = e.target;
      onClickFunc(e);
    }
  });
};

Curtain.propTypes = {
  options: _react2.default.PropTypes.object.isRequired
};

exports.default = Curtain;