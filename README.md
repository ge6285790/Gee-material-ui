# Gee-material-ui

Use React to implement Google Material UI design.

## Installation

```
npm install gee-material-ui --save
```

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

## Components Options

This is the options for component.

### Avatar
```js
<Avatar options={{...}} /> or <Avatar options={{...}}>Word</Avatar>
```

options                   | parameters                                                          | parameters type
------------------------- | ------------------------------------------------------------------- | -------------------
id                        | Set custom element id for Avatar component. ex. id: 'buttomId'      | String
classNames                | Set custom element class for Avatar component. ex. className: 'customClass1 customClass2'   | String
iconClass                 | The icon that Avatar want to show. ex. iconClass: 'fa fa-user-o'    | String
src                       | If Avatar want to display image, src can set image url. ex. src: 'https://...' | String
size                      | Avatar's size, there has three params: small / middle / large.<br/>small: 24x24 ex. size: 'small'<br/>middle: 36x36 ex. size: 'middle' (defalut is middle)<br/>large: 48x48 ex. size: 'large'                        | String
customSize                | Give value and set Avatar size. ex. customSize: 50 // Avatar will be 50x50 | Number
boxShadow                 | If Avatar has box-shadow or not. ex. boxShadow: true // Avatar will has box-shadow | Boolean
animate                   | Hover animate, there has two animate: hover-to-scale / hover-to-square<br/>
                            hover-to-scale: hover and enlarge image that src has set. ex. animate: 'hover-to-scale'<br/>
                            hover-to-square: hover and translate shape to square. ex. animate: 'hover-to-square'<br/> | String
style                     | Custom css to Avatar.
                            ex. style: {backgroundColor: '#f90', borderRadius: 0, color: '#fff', fontSize: '12px'} | Object
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
