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

var _Card = require('../Card');

var _Card2 = _interopRequireDefault(_Card);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _common = require('../Common/common.scss');

var _common2 = _interopRequireDefault(_common);

var _dialog = require('./dialog.scss');

var _dialog2 = _interopRequireDefault(_dialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dialog = function (_React$Component) {
  _inherits(Dialog, _React$Component);

  function Dialog(props) {
    _classCallCheck(this, Dialog);

    var _this = _possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).call(this, props));

    _this.state = {
      dialog: props.options.dialog,
      card: _extends({
        show: 'false',
        animate: 'fadeIn'
      }, props.options.card),
      // dataPicker: props.options.dataPicker,
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
            card: {
              show: { $set: 'false' }
            }
          }));
        }
      }),
      confirm: {
        submit: _extends({}, props.options.confirm.submit, {
          onClickFunc: function onClickFunc(e) {
            props.options.confirm.submit.onClickFunc(e);
            _this.setState((0, _reactAddonsUpdate2.default)(_this.state, {
              curtain: {
                show: { $set: 'false' },
                opacity: { $set: 0 }
              },
              card: {
                show: { $set: 'false' }
              }
            }));
          }
        }),
        cancel: _extends({}, props.options.confirm.cancel, {
          onClickFunc: function onClickFunc(e) {
            props.options.confirm.cancel.onClickFunc(e);
            _this.setState((0, _reactAddonsUpdate2.default)(_this.state, {
              curtain: {
                show: { $set: 'false' },
                opacity: { $set: 0 }
              },
              card: {
                show: { $set: 'false' }
              }
            }));
          }
        })
      }
    };
    return _this;
  }

  _createClass(Dialog, [{
    key: 'renderContent',
    value: function renderContent() {
      var _state$dialog = this.state.dialog,
          type = _state$dialog.type,
          style = _state$dialog.style,
          size = _state$dialog.size,
          theme = _state$dialog.theme,
          content = _state$dialog.content,
          iconClassBefore = _state$dialog.iconClassBefore,
          iconClassAfter = _state$dialog.iconClassAfter;


      switch (type) {
        case 'text':
          {
            return _react2.default.createElement(
              'span',
              { className: size + ' ' + theme, style: style },
              content
            );
          }
        case 'button':
          {
            var buttonOption = {
              style: style,
              iconClassBefore: '',
              iconClassAfter: '',
              // boxShadow: true,
              content: content,
              stateClass: theme, // malibu / charade / shark / froly / fern
              // widthClass: 'col-6', // col-1 ~ col-12
              size: size };
            return _react2.default.createElement(_Button2.default, { options: buttonOption });
          }
        case 'icon':
          {
            return '';
          }
        default:
          {
            return '';
          }
      }
    }
  }, {
    key: 'renderConfirmButtons',
    value: function renderConfirmButtons() {
      var confirm = this.state.confirm;

      if (confirm) {
        return _react2.default.createElement(
          'div',
          { className: 'gmu-text-right' },
          _react2.default.createElement(_Button2.default, { options: confirm.cancel }),
          _react2.default.createElement(_Button2.default, { options: confirm.submit })
        );
      }
      return '';
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props$options = this.props.options,
          options = _props$options === undefined ? {} : _props$options;
      var _state = this.state,
          curtain = _state.curtain,
          calendar = _state.calendar,
          card = _state.card,
          dialog = _state.dialog;

      console.log(this.props.children);
      return _react2.default.createElement(
        'div',
        { className: 'gmu-dialog' },
        _react2.default.createElement(
          'div',
          {
            onClick: function onClick(e) {
              _this2.setState((0, _reactAddonsUpdate2.default)(_this2.state, {
                curtain: {
                  show: { $set: 'true' },
                  opacity: { $set: options.curtain.opacity }
                },
                card: {
                  show: { $set: 'true' }
                }
              }));
            }
          },
          _react2.default.createElement('i', { className: dialog.iconClassBefore }),
          this.renderContent(),
          _react2.default.createElement('i', { className: dialog.iconClassAfter })
        ),
        _react2.default.createElement(_Curtain2.default, { options: curtain }),
        _react2.default.createElement(
          _Card2.default,
          { options: card },
          this.props.children,
          this.renderConfirmButtons()
        )
      );
    }
  }]);

  return Dialog;
}(_react2.default.Component);

Dialog.propTypes = {
  options: _react2.default.PropTypes.object.isRequired,
  children: _react2.default.PropTypes.array.isRequired
};

exports.default = Dialog;