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

var _Curtain = require('../Curtain');

var _Curtain2 = _interopRequireDefault(_Curtain);

var _common = require('../Common/common.scss');

var _common2 = _interopRequireDefault(_common);

var _list = require('./list.scss');

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import Card from '../Card';
// import Button from '../Button';


var List = function (_React$Component) {
  _inherits(List, _React$Component);

  function List(props) {
    _classCallCheck(this, List);

    var _this = _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this, props));

    _this.state = {
      show: props.options.show,
      curtain: _extends({}, props.options.curtain, {
        opacity: 0,
        onClickFunc: function onClickFunc(e) {
          var curtain = e.target;
          props.options.curtain.onClickFunc(e);
          _this.setState((0, _reactAddonsUpdate2.default)(_this.state, {
            curtain: {
              show: { $set: 'false' },
              opacity: { $set: 0 }
            },
            show: { $set: false }
          }));
        }
      })
    };
    console.log(_this.state);
    return _this;
  }

  _createClass(List, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      var newState = {
        show: nextProps.options.show,
        curtain: _extends({}, nextProps.options.curtain, {
          // opacity: 0,
          onClickFunc: function onClickFunc(e) {
            var curtain = e.target;
            console.log('b');
            nextProps.options.curtain.onClickFunc(e);
            _this2.setState((0, _reactAddonsUpdate2.default)(_this2.state, {
              curtain: {
                show: { $set: 'false' },
                opacity: { $set: 0 }
              },
              show: { $set: false }
            }));
          }
        })
      };
      console.log('newState', newState);
      this.setState((0, _reactAddonsUpdate2.default)(this.state, { $set: newState }));
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      var _this3 = this;

      var array = [];
      var children = [];
      if (!this.props.children.length) {
        children.push(this.props.children);
      } else {
        children = this.props.children;
      }
      this.target = [];
      console.log('this.state.show', this.state.show);
      if (this.state.show) {
        array = children.map(function (item, i) {
          return _react2.default.createElement(
            'div',
            {
              key: 'list-renderChildren' + i + new Date(),
              className: 'gmu-item',
              ref: function ref(target) {
                if (!target) {
                  return;
                }
                var that = _this3;
                _this3.target.push(target);
                console.log(target);
                setTimeout(function () {
                  // console.log(target);
                  console.log(that.state.show, _this3.target);
                  _this3.target[i].dataset.active = that.state.show;
                }, 150 * i);
              }
            },
            item
          );
        });
        return array;
      }
      return '';
    }
  }, {
    key: 'render',
    value: function render() {
      var curtain = this.state.curtain;

      console.log('curtain', curtain);
      return _react2.default.createElement(
        'div',
        { className: 'gmu-list' },
        _react2.default.createElement(_Curtain2.default, { options: curtain }),
        this.renderChildren()
      );
    }
  }]);

  return List;
}(_react2.default.Component);

exports.default = List;