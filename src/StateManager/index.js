import update from 'react-addons-update';

function returnDeepObject(obj, index, updateState, last) {
  const deepObjKey = Object.keys(obj);
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
  const arrayObj1 = Object.keys(obj1);
  const arrayObj2 = Object.keys(obj2);
  if (arrayObj1.length === 0) {
    return {
      ...obj1,
      ...obj2,
    };
  } else if (arrayObj1.length === 0) {
    return obj2;
  }
  let result = {};
  arrayObj1.map((item) => {
    if (obj2[item]) {
      result = {
        ...result,
        [item]: deepClone(obj1[item], obj2[item]),
      };
      return item;
    }
    result = {
      ...result,
      ...obj1,
      ...obj2,
    };
    return item;
  });
  return result;
}

const StateManager = {
  events: {
    concentratedUpdate: (that, updateContainer) => {
      // const newObj = {};
      let upObjects = {};
      const pathsArray = updateContainer.map((item) => {
        const array = item.path.split('>');
        array.shift();
        return array;
      });
      pathsArray.map((array, index) => {
        let rootItem = '';
        let newObj = {};
        const length = array.length - 1;
        array.map((item, i) => {
          let last = false;
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
        const mergeObj = deepClone(upObjects, newObj);
        upObjects = {
          ...mergeObj
        }
        return array;
      });
      that.setState(update(that.state, upObjects));
    },
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
        fontSize: '', // custom button size
        // maxWidth: 100,
        // textOverflow: 'ellipsis',
        // overflow: 'hidden',
        // whiteSpace: 'nowrap',
      },
      iconClassBefore: '',
      iconClassAfter: '',
      boxShadow: true,
      content: 'A',
      stateClass: 'h-gold', // malibu / charade / shark / froly / fern
      size: 'middle', // x-large / large / middle / small
      shapeClass: 'circle',
      test: (that) => {
        console.log('test', that);
      },
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
        fontSize: '', // custom button size
        // maxWidth: 100,
        // textOverflow: 'ellipsis',
        // overflow: 'hidden',
        // whiteSpace: 'nowrap',
      },
      iconClassBefore: '',
      iconClassAfter: '',
      boxShadow: true,
      content: 'A',
      stateClass: 'h-gold', // malibu / charade / shark / froly / fern
      size: 'middle', // x-large / large / middle / small
      shapeClass: 'circle',
      test: (that) => {
        console.log('test', that);
      },
    },
  },
};

export default StateManager;
