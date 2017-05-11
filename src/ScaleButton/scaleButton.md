### Scale Button

[Demo page](https://kyle-cheng-portfolio.herokuapp.com/portfolio/react-material-design#scaleButton)

```js
<ScaleButton options={{...}} />
```

options                   | introduction                                                        | parameters type
------------------------- | ------------------------------------------------------------------- | -------------------
id                        | Set custom element id for ScaleButton component. ex. id: 'customId'      | String
classNames                | Set custom element class for ScaleButton component. ex. className: 'customClass1 customClass2'   | String
active                    | Set component animate. ex. active: 'true' // run animate, 'false will show default status' | String
clickHidden               | Set component response result. ex. clickHidden: true // will hide after click | String
content                   | Set ScaleButton's value. ex. content: 'ScaleButton'   | String
iconClassBefore           | The icon that Avatar want to show, it will show before content's word. ex. iconClass: 'fa fa-user-o'    | String
iconClassAfter            | The icon that Avatar want to show, it will show before content's word. ex. iconClass: 'fa fa-user-o'    | String
shapeClass                | Set component shape. ex. shapeClass: 'circle' // the button will convert to circle.  | String
size                      | ScaleButton's size, there has four params: small / middle /  large / x-large.<br/>small: font-size: 12px. ex. size: 'small'<br/>middle: font-size: 16px. ex. size: 'middle' (defalut is middle)<br/>large: font-size: 20px. ex. size: 'large'<br/>x-large: font-size: 24px;. ex. size: 'x-large'                        | String
col                       | Component width. ex. col: 'col-4 col-991-6 col-768-9 col-600-10 col-480-12' | String
offset                    | Component margin left. ex. offset: 'col-offset-6 col-offset-991-5 col-offset-768-4 col-offset-600-3 col-offset-480-1' | String
boxShadow                 | If ScaleButton has box-shadow or not. ex. boxShadow: true // ScaleButton will has box-shadow | Boolean
style                     | Custom css to Buttom. ex. style: {backgroundColor: '#f90', borderRadius: 0, color: '#fff', fontSize: '12px', ...}<br/>There is a special key in style, it call clickResponseColor. It will set click response color. ex. style: {clickResponseColor: '#f90', borderRadius: 0, ...} | Object
onClickFunc               | Custom click event callback function. ex. onClickFunc: (e) => { alert('click'); } | Function
componentDidMountFunc     | Custom componentDidMount event callback function. ex. componentDidMountFunc: (e) => { alert('component did mount'); } | Function

**example:**
```js
import { ScaleButton } from 'gee-material-ui';
import update from 'react-addons-update';

class Test extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      scaleButtonOption: {
        // options for Button component
        id: '',
        classNames: '',
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
        boxShadow: false,
        content: 'Button1',
        // stateClass: 'h-gold', // malibu / charade / shark / froly / fern
        // col: 'col-6', // col-1 ~ col-12
        offset: '',
        size: 'small', // x-large / large / middle / small
        componentDidMountFunc: () => {
          console.log('done!');
        },
        onClickFunc: () => {
          console.log('click!');
        },
      },
    };
  }

  render() {
    return (
      <ScaleButton options={this.state.scaleButtonOption} />
    );
  }
}
```
