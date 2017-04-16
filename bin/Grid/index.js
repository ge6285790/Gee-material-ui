'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _deepEqual = require('deep-equal');

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _reactAddonsUpdate = require('react-addons-update');

var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ArcCard = require('../ArcCard');

var _ArcCard2 = _interopRequireDefault(_ArcCard);

var _common = require('../Common/common.scss');

var _common2 = _interopRequireDefault(_common);

var _grid = require('./grid.scss');

var _grid2 = _interopRequireDefault(_grid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ArcCardOption = {
  id: '',
  classNames: '',
  active: 'false',
  defaultStyle: {},
  resultStyle: {},
  imageSrc: 'http://www.freshwater-plumbing.com/images/www.elikarealestate.com/images/luxury-new-york-city-condo-apartments.jpg',
  onClickFunc: function onClickFunc(e) {}
};

var Grid = function (_React$Component) {
  _inherits(Grid, _React$Component);

  function Grid(props) {
    _classCallCheck(this, Grid);

    var _this = _possibleConstructorReturn(this, (Grid.__proto__ || Object.getPrototypeOf(Grid)).call(this, props));

    _this.state = {
      gridId: 'gridId' + new Date().getTime(),
      // onClickFunc: (e) => {
      //
      // },
      data: _this.props.options.gridList
    };
    _this.gridLength = _this.state.data.length - 1;
    return _this;
  }

  _createClass(Grid, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (!(0, _deepEqual2.default)(nextProps, this.props) || !(0, _deepEqual2.default)(nextState, this.state)) {
        return true;
      }
      return false;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      // this.gmuGridHeight = this.gmuGrid.offsetHeight;
      // this.gmuGridWidth = this.gmuGrid.offsetWidth;
      var that = this;
      this.initialGridStyle();
      this.containerBox.classList.add('active');
      document.addEventListener('click', this.handleClickOutside.bind(this), true);

      var rtime = void 0;
      var timeout = false;
      var delta = 200;

      function resizeend() {
        if (new Date() - rtime < delta) {
          setTimeout(resizeend, delta);
        } else {
          timeout = false;
          // alert('Done resizing');
          that.gmuGrid.style.width = '100%';
          that.initialGridStyle();
        }
      }

      window.onresize = function () {
        rtime = new Date();
        if (timeout === false) {
          timeout = true;
          setTimeout(resizeend, delta);
        }
      };
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState((0, _reactAddonsUpdate2.default)(this.state, {
        data: { $set: nextProps.options.gridList }
      }));
    }
  }, {
    key: 'handleClickOutside',
    value: function handleClickOutside(e) {
      var _this2 = this;

      var domNode = _reactDom2.default.findDOMNode(this);
      if (!domNode || !domNode.contains(e.target)) {
        //
        this.setState((0, _reactAddonsUpdate2.default)(this.state, {
          data: _defineProperty({}, this.tempIndex, {
            active: { $set: 'false' }
          })
        }));
        this.circleClick.classList.remove('active');
        this.circleCover.classList.add('setInit');
        setTimeout(function () {
          var containerBoxCard = _this2.containerBox.querySelectorAll('.gmu-arc-card[style*="z-index"]');
          Array.prototype.forEach.call(containerBoxCard, function (element, i) {
            element.style.zIndex = '1';
          });
          _this2.gmuGrid.classList.remove('active');
          _this2.circleCover.classList.remove('active');
          _this2.circleCover.classList.remove('setInit');
          _this2.circleCover.setAttribute('style', 'background: ' + _this2.props.options.haloColor + '; box-shadow: 0 0 20em 20em ' + _this2.props.options.haloColor + ';');
        }, 700);
      }
    }
  }, {
    key: 'initialGridStyle',
    value: function initialGridStyle() {
      var _this3 = this;

      this.gmuGridTop = this.gmuGrid.offsetTop;
      this.gmuGridLeft = this.gmuGrid.offsetLeft;
      console.log('this.gmuGrid.offsetWidth', this.gmuGrid.offsetWidth);
      this.gmuGrid.style.width = this.gmuGrid.offsetWidth + 'px';

      var width = (parseInt(this.gmuGrid.style.width, 10) - 20) / 5;
      var height = width;
      var allArcCardElement = document.querySelector('#' + this.state.gridId).querySelectorAll('.gmu-arc-card');
      this.gmuGrid.style.height = Math.ceil(allArcCardElement.length / 5) * (height + 5) + 'px';
      this.scale = this.gmuGrid.offsetHeight / this.gmuGrid.offsetWidth * 2;
      Array.prototype.forEach.call(allArcCardElement, function (element, i) {
        // const top = element.offsetTop + this.gmuGridTop;
        // console.log(element.offsetLeft, this.gmuGridLeft);
        // const left = element.offsetLeft + this.gmuGridLeft;
        // console.log(elementsStyle[i], element.style);
        var rowCount = Math.floor(i / 5);
        var top = rowCount === 0 ? 0 : rowCount * (height + 5);
        if (i % 5 === 0) {
          console.log('i');
          element.style.left = '0px';
          element.dataset.abLeft = width / 2 - _this3.gmuGrid.offsetWidth / 2 + 'px';
          element.dataset.ckLeft = width / 2 + 'px';
        } else {
          element.style.left = i % 5 * (width + 5) + 'px';
          element.dataset.abLeft = i % 5 * (width + 5) + width / 2 - _this3.gmuGrid.offsetWidth / 2 + 'px';
          element.dataset.ckLeft = i % 5 * (width + 5) + width / 2 + 'px';
        }
        element.style.position = 'absolute';
        element.style.width = width + 'px';
        element.style.height = height + 'px';
        element.style.top = top + 'px';
        element.dataset.index = i;
        element.dataset.abTop = top + height / 2 - _this3.gmuGrid.offsetWidth / 2 + 'px';
        element.dataset.ckTop = top + height / 2 + 'px';
      });
    }
  }, {
    key: 'clickGrid',
    value: function clickGrid(e, index) {
      var _this4 = this;

      var ele = document.querySelector('[data-index="' + index + '"]');
      // console.log(this.circleCover, ele.dataset.abTop, ele.dataset.abLeft, ele, ele.dataset);

      console.log(e.pageX, e.pageY, this.gmuGridTop, this.gmuGridLeft);
      // this.circleClick.style.top = ele.dataset.ckTop;
      this.circleClick.style.top = e.pageY - this.gmuGrid.offsetTop + 'px';
      // this.circleClick.style.left = ele.dataset.ckLeft;
      this.circleClick.style.left = e.pageX - this.gmuGrid.offsetLeft + 'px';
      this.circleClick.classList.add('active');

      this.gmuGrid.classList.add('active');
      ele.style.zIndex = 3;
      ele.style.pointerEvents = 'auto';
      this.circleCover.style.top = ele.dataset.abTop;
      this.circleCover.style.left = ele.dataset.abLeft;
      this.circleCover.classList.add('active');
      this.circleCover.style.transform = 'scale3d(' + this.scale + ', ' + this.scale + ', ' + this.scale + ')';
      this.tempIndex = index;
      setTimeout(function () {
        _this4.setState((0, _reactAddonsUpdate2.default)(_this4.state, {
          data: _defineProperty({}, index, {
            active: { $set: 'true' }
          })
        }));
      }, 400);

      // const methodType = index % 5;
      // const layer = Math.floor(index / 5);
      // const totalLayer = Math.floor(this.gridLength / 5);
      // switch (methodType) {
      //   case 2: {
      //     console.log(layer);
      //     for (let i = 0; i <= layer; i += 1) {
      //       const newLayer = layer - i;
      //       console.log(i, newLayer, layer)
      //       setTimeout(() => {
      //         this.hideList(index, layer, i).map(item => {
      //           document.querySelector(`[data-index="${item}"]`).classList.add('fadeOut');
      //         });
      //       }, i * 50);
      //     }
      //   }
      // }
    }
  }, {
    key: 'renderGrid',
    value: function renderGrid() {
      var _this5 = this;

      // const data = this.state.data;
      // if (data.length)
      // for()
      return this.state.data.map(function (item, i) {
        // item.props.key = i;
        return _react2.default.createElement(
          _ArcCard2.default,
          {
            options: item,
            methods: { clickGrid: function clickGrid(e) {
                _this5.clickGrid(e, i);
              } },
            key: i
          },
          item.children
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this6 = this;

      return _react2.default.createElement(
        'div',
        { className: 'gmu-grid', id: this.state.gridId, ref: function ref(div) {
            _this6.gmuGrid = div;
          } },
        _react2.default.createElement(
          'div',
          { className: 'gmu-container-box', ref: function ref(div) {
              _this6.containerBox = div;
            } },
          this.renderGrid(),
          _react2.default.createElement(
            'div',
            { className: 'gmu-circle-cover', style: { background: this.props.options.haloColor, boxShadow: '0 0 20em 20em ' + this.props.options.haloColor }, ref: function ref(div) {
                _this6.circleCover = div;
              } },
            _react2.default.createElement('div', { className: 'padding-bottom' })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'gmu-circle-click', ref: function ref(div) {
              _this6.circleClick = div;
            } },
          _react2.default.createElement('div', { className: 'padding-bottom' })
        )
      );
    }
  }]);

  return Grid;
}(_react2.default.Component);

exports.default = Grid;