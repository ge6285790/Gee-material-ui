import update from 'react-addons-update';

const StateManager = {
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
      returnDeepObject: (obj, index) => {
        const deepObjKey = Object.keys(obj);
        if (Object.keys(obj[deepObjKey]).length === 0) {
          obj[deepObjKey][index] = {};
          return;
        }
        this.returnDeepObject(obj[deepObjKey]);
      },
      concentratedUpdate: (that, path, updateState) => {
        const pathArray = path.split('>');
        pathArray.shift();
        const newObj = {};
        for (const index in pathArray) {
          this.returnDeepObject(newObj, index);
        }
        console.log(newObj);

        // that.setState(update(that.state, ))
      }
    },
  }
};

export default StateManager;
