'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _avatar = require('./avatar.scss');

var _avatar2 = _interopRequireDefault(_avatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Avatar = function Avatar(props) {
  var _props$options = props.options,
      options = _props$options === undefined ? {} : _props$options;
  var _options$size = options.size,
      size = _options$size === undefined ? 'middle' : _options$size,
      _options$customSize = options.customSize,
      customSize = _options$customSize === undefined ? false : _options$customSize,
      _options$backgroundCo = options.backgroundColor,
      backgroundColor = _options$backgroundCo === undefined ? false : _options$backgroundCo,
      _options$color = options.color,
      color = _options$color === undefined ? false : _options$color,
      _options$boxShadow = options.boxShadow,
      boxShadow = _options$boxShadow === undefined ? false : _options$boxShadow,
      _options$animate = options.animate,
      animate = _options$animate === undefined ? '' : _options$animate,
      _options$src = options.src,
      src = _options$src === undefined ? '' : _options$src,
      _options$iconClass = options.iconClass,
      iconClass = _options$iconClass === undefined ? false : _options$iconClass,
      _options$onClickFunc = options.onClickFunc,
      onClickFunc = _options$onClickFunc === undefined ? false : _options$onClickFunc;

  var clickFunc = onClickFunc;
  var cursor = 'pointer';
  // let width = false;
  // let height = false;
  var renderIcon = function renderIcon() {
    if (!iconClass) {
      return '';
    }
    return _react2.default.createElement('i', { className: iconClass });
  };

  if (customSize) {
    options.style.width = customSize;
    options.style.height = customSize;
  }

  if (onClickFunc === false) {
    clickFunc = function clickFunc() {};
    cursor = 'default';
  }
  var style = _extends({
    backgroundImage: src ? 'url(\'' + src + '\')' : ''
  }, options.style, {
    cursor: cursor
  });

  return _react2.default.createElement(
    'div',
    {
      style: style,
      className: 'gmu-avatar ' + size + ' ' + (boxShadow ? 'box-shadow' : '') + ' ' + animate,
      onClick: function onClick(e) {
        onClickFunc(e);
      }
    },
    renderIcon(),
    props.children
  );
};

Avatar.propTypes = {
  options: _react2.default.PropTypes.object,
  children: _react2.default.PropTypes.any
};

exports.default = Avatar;