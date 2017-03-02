import update from 'react-addons-update';

function returnDeepObject(obj, index, updateState, last) {
  const deepObjKey = Object.keys(obj);
  console.log('returnDeepObject', deepObjKey, obj, index, updateState, last);
  if (deepObjKey.length === 0) {
    obj[index] = last ? updateState : {};
    console.log(obj[index]);
    return;
  }
  returnDeepObject(obj[deepObjKey], index, update, last);
}

const StateManager = {
  events: {
    concentratedUpdate: (that, updateContainer) => {
      const newObj = {};
      const pathsArray = updateContainer.map((item) => {
        const array = item.path.split('>');
        array.shift();
        return array;
      });
      pathsArray.map((array, index) => {
        let rootItem = '';
        const length = array.length - 1;
        array.map((item, i) => {
          let last = false;
          if (length === i) {
            last = true;
          }
          if (i === 0) {
            rootItem = item;
            newObj[item] = last ? updateContainer[index].updateState : {};
            return item;
          }

          returnDeepObject(newObj[rootItem], item, updateContainer[index].updateState, last);
          return item;
        });
        return array;
      });
      console.log('newObj', newObj);

      that.setState(update(that.state, newObj));
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

      // concentratedUpdate: (that, paths, updateState) => {
      //   const newObj = {};
      //   const pathsArray = paths.map((item) => {
      //     const array = item.split('>');
      //     array.shift();
      //     return array;
      //   });
      //   pathsArray.map((array) => {
      //     let rootItem = '';
      //     const length = array.length - 1;
      //     array.map((item, i) => {
      //       let last = false;
      //       if (length === i) {
      //         last = true;
      //       }
      //       if (i === 0) {
      //         rootItem = item;
      //         newObj[item] = last ? updateState[i] : {};
      //         return item;
      //       }
      //
      //       returnDeepObject(newObj[rootItem], item, updateState[i], last);
      //       return item;
      //     });
      //     return array;
      //   });
      //   console.log('newObj', newObj);
      //
      //   that.setState(update(that.state, newObj));
      // },
      concentratedUpdate: (that, updateContainer) => {
        const newObj = {};
        const pathsArray = updateContainer.map((item) => {
          const array = item.path.split('>');
          array.shift();
          return array;
        });
        pathsArray.map((array, index) => {
          let rootItem = '';
          const length = array.length - 1;
          array.map((item, i) => {
            let last = false;
            if (length === i) {
              last = true;
            }
            if (i === 0) {
              rootItem = item;
              newObj[item] = last ? updateContainer[index].updateState : {};
              return item;
            }

            returnDeepObject(newObj[rootItem], item, updateContainer[index].updateState, last);
            return item;
          });
          return array;
        });
        console.log('newObj', newObj);

        that.setState(update(that.state, newObj));
      },
    },
  },
};

export default StateManager;
