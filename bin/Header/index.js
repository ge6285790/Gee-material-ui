'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsUpdate = require('react-addons-update');

var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);

var _common = require('../Common/common.scss');

var _common2 = _interopRequireDefault(_common);

var _header = require('./header.scss');

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(props) {
  var _props$options = props.options,
      _props$options$gmuHea = _props$options.gmuHeaderStyle,
      gmuHeaderStyle = _props$options$gmuHea === undefined ? {} : _props$options$gmuHea,
      _props$options$size = _props$options.size,
      size = _props$options$size === undefined ? '' : _props$options$size,
      _props$options$status = _props$options.status,
      status = _props$options$status === undefined ? '' : _props$options$status,
      _props$options$theme = _props$options.theme,
      theme = _props$options$theme === undefined ? '' : _props$options$theme,
      _props$options$boxSha = _props$options.boxShadow,
      boxShadow = _props$options$boxSha === undefined ? '' : _props$options$boxSha;

  return _react2.default.createElement(
    'div',
    { className: 'gmu gmu-header ' + status + ' ' + size + ' ' + theme + ' ' + boxShadow, style: gmuHeaderStyle },
    props.children
  );
};

Header.propTypes = {
  options: _react2.default.PropTypes.object,
  children: _react2.default.PropTypes.array
};

exports.default = Header;