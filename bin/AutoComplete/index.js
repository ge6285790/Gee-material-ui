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

var _common = require('../Common/common.scss');

var _common2 = _interopRequireDefault(_common);

var _autoComplete = require('./autoComplete.scss');

var _autoComplete2 = _interopRequireDefault(_autoComplete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AutoComplete = function (_React$Component) {
  _inherits(AutoComplete, _React$Component);

  function AutoComplete(props) {
    _classCallCheck(this, AutoComplete);

    var _this = _possibleConstructorReturn(this, (AutoComplete.__proto__ || Object.getPrototypeOf(AutoComplete)).call(this, props));

    var _props$options = props.options,
        options = _props$options === undefined ? { animation: {} } : _props$options;

    _this.state = {
      hrActive: 'false',
      titleActive: props.options.inputValue ? options.animation.titleActive || 'default' : 'false'
    };
    return _this;
  }

  _createClass(AutoComplete, [{
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps) {
      if (!(0, _deepEqual2.default)(nextProps, this.props)) {
        var _nextProps$options = nextProps.options,
            options = _nextProps$options === undefined ? { animation: {} } : _nextProps$options;

        this.setState((0, _reactAddonsUpdate2.default)(this.state, {
          titleActive: { $set: nextProps.options.inputValue ? options.animation.titleActive || 'default' : 'false' }
        }));
      }
    }
  }, {
    key: 'renderInput',
    value: function renderInput() {
      var _this2 = this;

      var _props$options2 = this.props.options,
          options = _props$options2 === undefined ? { animation: {} } : _props$options2;
      var _options$id = options.id,
          id = _options$id === undefined ? '' : _options$id,
          _options$classNames = options.classNames,
          classNames = _options$classNames === undefined ? '' : _options$classNames,
          _options$title = options.title,
          title = _options$title === undefined ? '' : _options$title,
          _options$size = options.size,
          size = _options$size === undefined ? 'small' : _options$size,
          _options$theme = options.theme,
          theme = _options$theme === undefined ? '' : _options$theme,
          animation = options.animation,
          _options$underLineCol = options.underLineColor,
          underLineColor = _options$underLineCol === undefined ? false : _options$underLineCol,
          inputValue = options.inputValue,
          _options$onFocusFunc = options.onFocusFunc,
          onFocusFunc = _options$onFocusFunc === undefined ? function () {} : _options$onFocusFunc,
          _options$onBlurFunc = options.onBlurFunc,
          onBlurFunc = _options$onBlurFunc === undefined ? function () {} : _options$onBlurFunc,
          _options$onChangeFunc = options.onChangeFunc,
          onChangeFunc = _options$onChangeFunc === undefined ? function () {} : _options$onChangeFunc;

      var titleActiveProps = options.animation.titleActive || 'default';
      if (this.props.options.updateValue) {
        return _react2.default.createElement('input', {
          className: 'gmu-input',
          onFocus: function onFocus(e) {
            _this2.setState((0, _reactAddonsUpdate2.default)(_this2.state, {
              hrActive: { $set: 'true' },
              titleActive: { $set: titleActiveProps }
            }));
            onFocusFunc(e);
          },
          onBlur: function onBlur(e) {
            if (e.target.value) {
              _this2.setState((0, _reactAddonsUpdate2.default)(_this2.state, {
                hrActive: { $set: 'false' }
              }));
              onBlurFunc(e);
              return;
            }
            _this2.setState((0, _reactAddonsUpdate2.default)(_this2.state, {
              hrActive: { $set: 'false' },
              titleActive: { $set: 'false' }
            }));
            onBlurFunc(e);
          },
          onChange: function onChange(e) {
            onChangeFunc(e);
          },
          value: this.props.options.updateValue
          // defaultValue={inputValue}
        });
      }
      return _react2.default.createElement('input', {
        className: 'gmu-input',
        onFocus: function onFocus(e) {
          _this2.setState((0, _reactAddonsUpdate2.default)(_this2.state, {
            hrActive: { $set: 'true' },
            titleActive: { $set: titleActiveProps }
          }));
          onFocusFunc(e);
        },
        onBlur: function onBlur(e) {
          if (e.target.value) {
            _this2.setState((0, _reactAddonsUpdate2.default)(_this2.state, {
              hrActive: { $set: 'false' }
            }));
            onBlurFunc(e);
            return;
          }
          _this2.setState((0, _reactAddonsUpdate2.default)(_this2.state, {
            hrActive: { $set: 'false' },
            titleActive: { $set: 'false' }
          }));
          onBlurFunc(e);
        },
        onChange: function onChange(e) {
          onChangeFunc(e);
        }
        // value={updateValue}
        , defaultValue: inputValue
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          hrActive = _state.hrActive,
          titleActive = _state.titleActive;
      var _props$options3 = this.props.options,
          options = _props$options3 === undefined ? { animation: {} } : _props$options3;
      var _options$id2 = options.id,
          id = _options$id2 === undefined ? '' : _options$id2,
          _options$classNames2 = options.classNames,
          classNames = _options$classNames2 === undefined ? '' : _options$classNames2,
          _options$title2 = options.title,
          title = _options$title2 === undefined ? '' : _options$title2,
          _options$size2 = options.size,
          size = _options$size2 === undefined ? 'small' : _options$size2,
          _options$theme2 = options.theme,
          theme = _options$theme2 === undefined ? '' : _options$theme2,
          animation = options.animation,
          _options$underLineCol2 = options.underLineColor,
          underLineColor = _options$underLineCol2 === undefined ? false : _options$underLineCol2,
          inputValue = options.inputValue,
          _options$onFocusFunc2 = options.onFocusFunc,
          onFocusFunc = _options$onFocusFunc2 === undefined ? function () {} : _options$onFocusFunc2,
          _options$onBlurFunc2 = options.onBlurFunc,
          onBlurFunc = _options$onBlurFunc2 === undefined ? function () {} : _options$onBlurFunc2,
          _options$onChangeFunc2 = options.onChangeFunc,
          onChangeFunc = _options$onChangeFunc2 === undefined ? function () {} : _options$onChangeFunc2;

      var underLineStyle = {
        borderBottom: '2px solid ' + underLineColor
      };
      var titleActiveProps = options.animation.titleActive || 'default';
      return _react2.default.createElement(
        'div',
        { id: id, className: 'gmu gmu-auto-complete ' + size + ' ' + theme + ' ' + classNames },
        _react2.default.createElement(
          'span',
          { className: 'title', 'data-active': titleActive },
          title
        ),
        this.renderInput(),
        _react2.default.createElement(
          'div',
          { className: 'gmu-underline' },
          _react2.default.createElement('hr', null),
          _react2.default.createElement('hr', { className: 'gmu-hr-animate', 'data-active': hrActive, style: underLineStyle !== 'false' ? underLineStyle : {} })
        )
      );
    }
  }]);

  return AutoComplete;
}(_react2.default.Component);

// options


AutoComplete.propTypes = {
  options: _react2.default.PropTypes.object.isRequired
};

exports.default = AutoComplete;