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

var _Avatar = require('../Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _IsometricButton = require('../IsometricButton');

var _IsometricButton2 = _interopRequireDefault(_IsometricButton);

var _chip = require('./chip.scss');

var _chip2 = _interopRequireDefault(_chip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Chip = function Chip(props) {
  var avatarOptions = false;
  var isometricButtonOptions = false;
  var cursor = 'pointer';
  var _props$options = props.options,
      options = _props$options === undefined ? {} : _props$options;

  if (options.avatar) {
    avatarOptions = {
      // size: 'middle',
      src: 'http://orig05.deviantart.net/bc95/f/2015/263/4/4/stooooooooooop__by_lolwutburger-d9a8m15.png',
      iconClass: '',
      style: {
        height: '2em',
        width: '2em',
        lineHeight: 'normal'
      },
      onClickFunc: options.onClickAvatar || function () {}
    };
    avatarOptions = Object.assign(avatarOptions, options.avatar);
  }

  if (options.isometricButton) {
    isometricButtonOptions = {
      shapeClass: 'circle',
      content: '×',
      style: {
        background: 'rgba(0,0,0,.1)',
        height: '1.6em',
        width: '1.6em',
        lineHeight: '1.6em',
        marginRight: '0.2em',
        fontSize: options.customSize
      },
      size: options.size || '',
      onClickFunc: options.onClickButton || function () {}
    };
    isometricButtonOptions = Object.assign(isometricButtonOptions, options.isometricButton);
  }

  var style = {
    fontSize: options.customSize
  };

  var renderAvatar = function renderAvatar() {
    if (!avatarOptions) {
      return '';
    }
    return _react2.default.createElement(_Avatar2.default, { options: avatarOptions });
  };

  var renderIsometricButton = function renderIsometricButton() {
    if (!isometricButtonOptions) {
      return '';
    }
    return _react2.default.createElement(_IsometricButton2.default, { options: isometricButtonOptions });
  };

  if (!options.onClickText) {
    cursor = 'default';
    options.onClickText = function () {};
  }

  return _react2.default.createElement(
    'div',
    { className: 'gmu-chip ' + options.size, style: style },
    _react2.default.createElement(
      'div',
      null,
      renderAvatar(),
      _react2.default.createElement(
        'span',
        { style: { cursor: cursor }, onClick: function onClick(e) {
            options.onClickText(e);
          } },
        'test'
      ),
      renderIsometricButton()
    )
  );
};

Chip.propTypes = {
  options: _react2.default.PropTypes.object.isRequired
};

exports.default = Chip;