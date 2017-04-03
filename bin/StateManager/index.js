'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactAddonsUpdate = require('react-addons-update');

var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function returnDeepObject(obj, index, updateState, last) {
  var deepObjKey = Object.keys(obj);
  if (deepObjKey.length === 0) {
    obj[index] = last ? updateState : {};
    return;
  }
  returnDeepObject(obj[deepObjKey], index, updateState, last);
}

function deepClone(obj1, obj2) {

  if (typeof obj1 === 'string') {
    return obj2;
  }
  var arrayObj1 = Object.keys(obj1);
  var arrayObj2 = Object.keys(obj2);
  if (arrayObj1.length === 0) {
    return _extends({}, obj1, obj2);
  } else if (arrayObj1.length === 0) {
    return obj2;
  }
  var result = {};
  arrayObj1.map(function (item) {
    if (obj2[item]) {
      result = _extends({}, result, _defineProperty({}, item, deepClone(obj1[item], obj2[item])));
      return item;
    }
    result = _extends({}, result, obj1, obj2);
    return item;
  });
  return result;
}

var StateManager = {
  events: {
    concentratedUpdate: function concentratedUpdate(that, updateContainer) {
      // const newObj = {};
      var upObjects = {};
      var pathsArray = updateContainer.map(function (item) {
        var array = item.path.split('>');
        array.shift();
        return array;
      });
      pathsArray.map(function (array, index) {
        var rootItem = '';
        var newObj = {};
        var length = array.length - 1;
        array.map(function (item, i) {
          var last = false;
          if (length === i) {
            last = true;
          }
          if (i === 0) {
            rootItem = item;
            newObj[item] = last ? updateContainer[index].updateState : {};
            // upObjects = {
            //   ...newObj,
            // };
            // upObjects = newObj;
            return item;
          }
          returnDeepObject(newObj[rootItem], item, updateContainer[index].updateState, last);
          // upObjects = {
          //   ...upObjects,
          //   ...newObj,
          // }

          // upObjects = deepClone(upObjects, newObj)

          return item;
        });
        var mergeObj = deepClone(upObjects, newObj);
        upObjects = _extends({}, mergeObj);
        return array;
      });
      that.setState((0, _reactAddonsUpdate2.default)(that.state, upObjects));
    }
  },
  scaleButtonOption: {
    default: {
      active: '',
      clickHidden: false,
      style: {
        clickResponseColor: '',
        color: '',
        background: '',
        boxShadow: '',
        border: '',
        borderRadius: '',
        padding: '',
        margin: '',
        fontSize: '' },
      iconClassBefore: '',
      iconClassAfter: '',
      boxShadow: true,
      content: 'A',
      stateClass: 'h-gold', // malibu / charade / shark / froly / fern
      size: 'middle', // x-large / large / middle / small
      shapeClass: 'circle',
      test: function test(that) {
        console.log('test', that);
      }
    },
    hide: {
      active: '',
      clickHidden: true,
      style: {
        clickResponseColor: '',
        color: '',
        background: '',
        boxShadow: '',
        border: '',
        borderRadius: '',
        padding: '',
        margin: '',
        fontSize: '' },
      iconClassBefore: '',
      iconClassAfter: '',
      boxShadow: true,
      content: 'A',
      stateClass: 'h-gold', // malibu / charade / shark / froly / fern
      size: 'middle', // x-large / large / middle / small
      shapeClass: 'circle',
      test: function test(that) {
        console.log('test', that);
      }
    }
  }
};

exports.default = StateManager;