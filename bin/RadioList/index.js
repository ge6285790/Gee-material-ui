'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsUpdate = require('react-addons-update');

var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);

var _deepEqual = require('deep-equal');

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _RadioButton = require('../RadioButton');

var _RadioButton2 = _interopRequireDefault(_RadioButton);

var _common = require('../Common/common.scss');

var _common2 = _interopRequireDefault(_common);

var _radioList = require('./radioList.scss');

var _radioList2 = _interopRequireDefault(_radioList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadioList = function (_React$Component) {
  _inherits(RadioList, _React$Component);

  function RadioList() {
    _classCallCheck(this, RadioList);

    return _possibleConstructorReturn(this, (RadioList.__proto__ || Object.getPrototypeOf(RadioList)).apply(this, arguments));
  }

  _createClass(RadioList, [{
    key: 'renderRadioItem',
    value: function renderRadioItem(radioOption, active, onClickFunc, selectOptionsIndex, size) {
      var radioArray = radioOption.map(function (item, i) {
        var act = false;
        if (i === active) {
          act = true;
        }
        return _react2.default.createElement(
          'div',
          { className: 'gmu-radio-item ' + size, key: '' + item.label + i },
          _react2.default.createElement(_RadioButton2.default, { options: { active: act, onClickFunc: onClickFunc, index: i, selectOptionsIndex: selectOptionsIndex, size: size } }),
          _react2.default.createElement(
            'span',
            null,
            item.label
          )
        );
      });
      return radioArray;
    }
  }, {
    key: 'renderRadioContainer',
    value: function renderRadioContainer() {
      var _this2 = this;

      var _props$options = this.props.options,
          _props$options$id = _props$options.id,
          eid = _props$options$id === undefined ? '' : _props$options$id,
          _props$options$classN = _props$options.classNames,
          classNames = _props$options$classN === undefined ? '' : _props$options$classN,
          direction = _props$options.direction,
          selectOptions = _props$options.selectOptions;

      var directionClass = direction === 'vertical' ? 'radio-list-vertical' : 'radio-list-horizontal';
      return selectOptions.map(function (item, i) {
        console.log('renderRadioContainer', item);
        var _item$checkStyle = item.checkStyle,
            checkStyle = _item$checkStyle === undefined ? {} : _item$checkStyle,
            _item$uncheckStyle = item.uncheckStyle,
            uncheckStyle = _item$uncheckStyle === undefined ? {} : _item$uncheckStyle,
            _item$title = item.title,
            title = _item$title === undefined ? '' : _item$title,
            _item$size = item.size,
            size = _item$size === undefined ? '' : _item$size,
            radioOption = item.radioOption,
            active = item.active,
            onClickFunc = item.onClickFunc,
            _item$containerStyle = item.containerStyle,
            containerStyle = _item$containerStyle === undefined ? {} : _item$containerStyle;

        var id = 'r' + new Date().getTime() + Math.ceil(Math.random() * 100000) + i;
        return _react2.default.createElement(
          'div',
          { id: eid, className: 'gmu-radio-list-container ' + directionClass + ' ' + id + ' ' + classNames, key: '' + title + i, style: containerStyle },
          _react2.default.createElement(
            'style',
            null,
            '.' + id + ' .fill-radio:after{\n              border: ' + checkStyle.border + ';\n              background: ' + checkStyle.background + ';\n              border-radius: ' + checkStyle.borderRadius + ';\n              box-shadow: ' + checkStyle.boxShadow + ';\n            }.' + id + ' .empty-radio{\n              border: ' + uncheckStyle.border + ';\n              background: ' + uncheckStyle.background + ';\n              border-radius: ' + uncheckStyle.borderRadius + ';\n            }'
          ),
          _react2.default.createElement(
            'p',
            null,
            item.title
          ),
          _this2.renderRadioItem(item.radioOption, item.active, item.onClickFunc, i, size)
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      console.log(this.props);
      // var addRule = (function(style){
      //     var sheet = document.head.appendChild(style).sheet;
      //     return function(selector, css){
      //         var propText = Object.keys(css).map(function(p){
      //             return p+":"+css[p]
      //         }).join(";");
      //         sheet.insertRule(selector + "{" + propText + "}", sheet.cssRules.length);
      //     }
      // })(document.createElement("style"));
      // addRule("p:before", {
      //   display: "block",
      //   width: "100px",
      //   height: "100px",
      //   background: "red",
      //   "border-radius": "50%",
      //   content: "''"
      // });
      return _react2.default.createElement(
        'div',
        { className: 'gmu-radio-list' },
        this.renderRadioContainer()
      );
    }
  }]);

  return RadioList;
}(_react2.default.Component);

exports.default = RadioList;