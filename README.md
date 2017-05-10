# Gee-material-ui

Use React to implement Google Material UI design.

## Installation

```
npm install gee-material-ui --save
```

<br/>

## Usage

```js
import { Avatar, ... } from 'gee-material-ui';

class Test extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      avatarOption: {
        // options for Button component
        size: 'small', // defalut is middle  / small / middle / large
        customSize: 50,
        boxShadow: true,
        animate: '', //hover-to-scale
        src: '',
        iconClass: '',
        style: {
          backgroundColor: '#f60',
          color: '#fff',
          fontSize: '12px',
        },
        onClickFunc: (e) => {
          alert('You click Avatar!');
        },
      },
    };
  }

  render() {
    return (
      <Avatar options={this.state.avatarOption} />
    );
  }
}
```

<br/>

## Components Options

This is the options for component.

### Avatar
```js
<Avatar options={{...}} /> or <Avatar options={{...}}>Word</Avatar>
```

options                   | parameters                                                          | parameters type
------------------------- | ------------------------------------------------------------------- | -------------------
id                        | Set custom element id for Avatar component. ex. id: 'customId'      | String
classNames                | Set custom element class for Avatar component. ex. className: 'customClass1 customClass2'   | String
iconClass                 | The icon that Avatar want to show. ex. iconClass: 'fa fa-user-o'    | String
src                       | If Avatar want to display image, src can set image url. ex. src: 'https://...' | String
size                      | Avatar's size, there has three params: small / middle / large.<br/>small: 24x24. ex. size: 'small'<br/>middle: 36x36. ex. size: 'middle' (defalut is middle)<br/>large: 48x48. ex. size: 'large'                        | String
customSize                | Give value and set Avatar size. ex. customSize: 50 // Avatar will be 50x50 | Number
boxShadow                 | If Avatar has box-shadow or not. ex. boxShadow: true // Avatar will has box-shadow | Boolean
animate                   | Hover animate, there has two animate: hover-to-scale / hover-to-square<br/>hover-to-scale: hover and enlarge image that src has set. ex. animate: 'hover-to-scale'<br/>hover-to-square: hover and translate shape to square. ex. animate: 'hover-to-square'<br/> | String
style                     | Custom css to Avatar. ex. style: {backgroundColor: '#f90', borderRadius: 0, color: '#fff', fontSize: '12px', ...} | Object
onClickFunc               | Custom click event callback function. ex. onClickFunc: (e) => { alert('click'); } | Function

example:
```js
import { Avatar } from 'gee-material-ui';
import update from 'react-addons-update';

class Test extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      avatarOption: {
        // options for Avatar component
        // size: 'small', // defalut is middle  / small / middle / large
        customSize: 50,
        boxShadow: true,
        animate: '', //hover-to-scale
        src: '',
        iconClass: '',
        style: {
          backgroundColor: '#f60',
          color: '#fff',
          fontSize: '12px',
        },
        onClickFunc: (e) => {
          alert('You click Avatar! And change Avatar backgroundColor to black');
          this.setState(update(this.state, {
            avatarOption: {
              style: {
                backgroundColor: { $set: '#000' },
              },
            },
          }));
        },
      },
    };
  }

  render() {
    return (
      <Avatar options={this.state.avatarOption}>B</Avatar>
      {/* B will be use like this.props.children in Avatar component */}
    );
  }
}
```


### Button
```js
<Button options={{...}} />
```

options                   | parameters                                                          | parameters type
------------------------- | ------------------------------------------------------------------- | -------------------
id                        | Set custom element id for Button component. ex. id: 'customId'      | String
classNames                | Set custom element class for Button component. ex. className: 'customClass1 customClass2'   | String
content                   | Set Button's value. ex. content: 'Button'   | String
iconClassBefore           | The icon that Avatar want to show, it will show before content's word. ex. iconClass: 'fa fa-user-o'    | String
iconClassAfter           | The icon that Avatar want to show, it will show before content's word. ex. iconClass: 'fa fa-user-o'    | String
size                      | Button's size, there has four params: small / middle /  large / x-large.<br/>small: font-size: 12px. ex. size: 'small'<br/>middle: font-size: 16px. ex. size: 'middle' (defalut is middle)<br/>large: font-size: 20px. ex. size: 'large'<br/>x-large: font-size: 24px;. ex. size: 'x-large'                        | String
col                       | Component width. ex. col: 'col-4 col-991-6 col-768-9 col-600-10 col-480-12' | String
offset                    | Component margin left. ex. offset: 'col-offset-6 col-offset-991-5 col-offset-768-4 col-offset-600-3 col-offset-480-1' | String
boxShadow                 | If Button has box-shadow or not. ex. boxShadow: true // Button will has box-shadow | Boolean
style                     | Custom css to Buttom. ex. style: {backgroundColor: '#f90', borderRadius: 0, color: '#fff', fontSize: '12px', ...}<br/>There is a special key in style, it call clickResponseColor. It will set click response color. ex. style: {clickResponseColor: '#f90', borderRadius: 0, ...} | Object
onClickFunc               | Custom click event callback function. ex. onClickFunc: (e) => { alert('click'); } | Function
componentDidMountFunc     | Custom componentDidMount event callback function. ex. componentDidMountFunc: (e) => { alert('component did mount'); } | Function

example:
```js
import { Avatar } from 'gee-material-ui';
import update from 'react-addons-update';

class Test extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      buttonOption: {
        // options for Button component
        id: '',
        classNames: '',
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
        stateClass: 'malibu',
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
      <Button options={this.state.buttonOption} />
    );
  }
}
```
