'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radioButton = require('./radioButton.scss');

var _radioButton2 = _interopRequireDefault(_radioButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// class RadioButton extends React.Component {
//   constructor(props) {
//     super(props);
//     const defaultStyle = { ...props.options.style };
//     this.clickResponseStyle = {
//       background: defaultStyle.clickResponseColor,
//     };
//     this.hoverResponseStyle = {
//       background: defaultStyle.hoverResponseColor,
//     };
//     this.buttonDivStyle = {
//       color: defaultStyle.color,
//       background: defaultStyle.background,
//       padding: defaultStyle.padding,
//     };
//     this.contentWordStyle = {
//       textOverflow: defaultStyle.textOverflow,
//       overflow: defaultStyle.overflow,
//       whiteSpace: defaultStyle.whiteSpace,
//     };
//     delete defaultStyle.clickResponseColor;
//     delete defaultStyle.hoverResponseColor;
//     delete defaultStyle.color;
//     delete defaultStyle.background;
//     delete defaultStyle.padding;
//     delete defaultStyle.textOverflow;
//     delete defaultStyle.overflow;
//     delete defaultStyle.whiteSpace;
//
//     this.buttonStyle = {
//       ...defaultStyle,
//       width: props.options.customSize,
//       height: props.options.customSize,
//       lineHeight: `${props.options.customSize}px`,
//     };
//
//     this.state = {
//       clickResponseArray: [],
//       clickDownClass: '',
//       clickUpClass: '',
//       buttonStyle: {
//         range: 0,
//         left: 0,
//         top: 0,
//         width: props.options.customSize,
//         height: props.options.customSize,
//         lineHeight: `${props.options.customSize}px`,
//       },
//       clickHidden: props.options.clickHidden,
//       active: props.options.active,
//     };
//   }
//
//   componentDidMount() {
//     const { componentDidMountFunc = () => {} } = this.props.options;
//     this.range = this.button.offsetWidth >= this.button.offsetHeight ?
//                   this.button.offsetWidth : this.button.offsetHeight;
//     componentDidMountFunc();
//   }
//
//   componentWillReceiveProps(nextProps) {
//     console.log('componentWillReceiveProps', nextProps);
//     const defaultStyle = { ...nextProps.options.style };
//     this.clickResponseStyle = {
//       background: defaultStyle.clickResponseColor,
//     };
//     this.hoverResponseStyle = {
//       background: defaultStyle.hoverResponseColor,
//     };
//     this.buttonDivStyle = {
//       color: defaultStyle.color,
//       background: defaultStyle.background,
//       padding: defaultStyle.padding,
//     };
//     this.contentWordStyle = {
//       textOverflow: defaultStyle.textOverflow,
//       overflow: defaultStyle.overflow,
//       whiteSpace: defaultStyle.whiteSpace,
//     };
//     delete defaultStyle.clickResponseColor;
//     delete defaultStyle.hoverResponseColor;
//     delete defaultStyle.color;
//     delete defaultStyle.background;
//     delete defaultStyle.padding;
//     delete defaultStyle.textOverflow;
//     delete defaultStyle.overflow;
//     delete defaultStyle.whiteSpace;
//
//     this.buttonStyle = {
//       ...defaultStyle,
//       width: nextProps.options.customSize,
//       height: nextProps.options.customSize,
//       lineHeight: `${nextProps.options.customSize}px`,
//     };
//
//     const newState = {
//       clickResponseArray: [],
//       buttonStyle: {
//         range: 0,
//         left: 0,
//         top: 0,
//         width: nextProps.options.customSize,
//         height: nextProps.options.customSize,
//         lineHeight: `${nextProps.options.customSize}px`,
//       },
//       clickHidden: nextProps.options.clickHidden,
//       active: nextProps.options.active,
//     };
//     this.setState(update(this.state, { $set: newState }));
//   }
//
//   render() {
//     const { stateClass, size = '', content = '', iconClassBefore = '', iconClassAfter = '', widthClass = '', boxShadow = false, shapeClass = '', onClickFunc = () => {}, onMouseUpFunc = () => {}, onMouseDownFunc = () => {} } = this.props.options;
//     const { clickResponseArray, clickDownClass, clickUpClass, clickHidden, active } = this.state;
//     const boxShadowClass = boxShadow ? 'box-shadow' : '';
//
//     console.log('clickDownClass, clickUpClass', clickDownClass, clickUpClass);
//     return (
//       <div className={`gum gmu-radio-button ${stateClass} ${widthClass} ${shapeClass}`}>
//         <button
//           className={widthClass ? `col-12 ${boxShadowClass} ${size} ${clickDownClass} ${clickUpClass}` : `${boxShadowClass} ${size} ${clickDownClass} ${clickUpClass}`}
//           ref={(button) => { this.button = button; }}
//           data-active={active}
//           onMouseDown={(e) => {
//             this.setState(update(this.state, {
//               clickDownClass: { $set: 'click-down' },
//             }));
//             onMouseDownFunc(e);
//           }}
//           onMouseUp={(e) => {
//             this.setState(update(this.state, {
//               clickUpClass: { $set: 'click-up' },
//             }));
//             onMouseUpFunc(e);
//             onClickFunc(e);
//             if (clickHidden) {
//               setTimeout(() => {
//                 this.setState(update(this.state, {
//                   active: { $set: 'true' },
//                   clickUpClass: { $set: '' },
//                   clickDownClass: { $set: '' },
//                 }));
//               }, 220);
//               return;
//             }
//             setTimeout(() => {
//               this.setState(update(this.state, {
//                 // hide: { $set: 'true' }
//                 clickUpClass: { $set: '' },
//                 clickDownClass: { $set: '' },
//               }));
//             }, 600);
//           }}
//           style={this.buttonStyle}
//         >
//           <div style={this.buttonDivStyle}>
//             <span className="color-click-response" style={this.hoverResponseStyle} />
//             <span className="color-hover-response" style={this.hoverResponseStyle} />
//             {/* { this.renderClickReponse() } */}
//             <span className="content-word" style={this.contentWordStyle}>
//               <i className={iconClassBefore} />
//               {content}
//               <i className={iconClassAfter} />
//             </span>
//           </div>
//         </button>
//       </div>
//     );
//   }
// }

/* eslint no-undef: "error" */
/* eslint-env browser */

var RadioButton = function RadioButton(props) {
  var _props$options = props.options,
      active = _props$options.active,
      _props$options$onClic = _props$options.onClickFunc,
      onClickFunc = _props$options$onClic === undefined ? function () {} : _props$options$onClic,
      index = _props$options.index,
      selectOptionsIndex = _props$options.selectOptionsIndex,
      size = _props$options.size;

  return _react2.default.createElement(
    'div',
    {
      className: 'gmu-radio-button ' + size,
      'data-active': active,
      onClick: function onClick(e) {
        onClickFunc(e, selectOptionsIndex, index);
      }
    },
    _react2.default.createElement('div', { className: 'fill-radio' }),
    _react2.default.createElement('div', { className: 'empty-radio' })
  );
};

RadioButton.defaultProps = {
  options: {}
};

RadioButton.propTypes = {
  options: _react2.default.PropTypes.object.isRequired
};

exports.default = RadioButton;