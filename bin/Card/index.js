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

var _card = require('./card.scss');

var _card2 = _interopRequireDefault(_card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Card = function Card(props) {
  var col = props.options.col;
  var offset = props.options.offset || '';
  var animate = props.options.animate || '';
  var classNames = props.options.classNames || '';
  return _react2.default.createElement(
    'div',
    { className: 'gmu gmu-card ' + col + ' ' + offset + ' ' + animate + ' ' + classNames, style: props.options.gmuCardStyle, 'data-active': props.options.show || true },
    _react2.default.createElement(
      'div',
      { className: 'card-box', style: props.options.cardBoxStyle },
      props.children
    )
  );
};

Card.propTypes = {
  options: _react2.default.PropTypes.object,
  children: _react2.default.PropTypes.array
};

exports.default = Card;