# Gee-material-ui

Use React to implement Google Material UI design.

<br/>

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

<br/>

### Avatar
```js
<Avatar options={{...}} /> or <Avatar options={{...}}>Word</Avatar>
```

options                   | introduction                                                        | parameters type
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

**example:**
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

<br/>

### Button
```js
<Button options={{...}} />
```

options                   | introduction                                                        | parameters type
------------------------- | ------------------------------------------------------------------- | -------------------
id                        | Set custom element id for Button component. ex. id: 'customId'      | String
classNames                | Set custom element class for Button component. ex. className: 'customClass1 customClass2'   | String
disable                   | If Button could click or not. ex. disable: false // false could click, true is disable | Boolean
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

**example:**
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

<br/>

### Isometric Button
```js
<IsometricButton options={{...}} />
```

options                   | introduction                                                        | parameters type
------------------------- | ------------------------------------------------------------------- | -------------------
id                        | Set custom element id for IsometricButton component. ex. id: 'customId'      | String
classNames                | Set custom element class for IsometricButton component. ex. className: 'customClass1 customClass2'   | String
content                   | Set IsometricButton's value. ex. content: 'IsometricButton'   | String
iconClassBefore           | The icon that Avatar want to show, it will show before content's word. ex. iconClass: 'fa fa-user-o'    | String
iconClassAfter            | The icon that Avatar want to show, it will show before content's word. ex. iconClass: 'fa fa-user-o'    | String
shapeClass                | Set component shape. ex. shapeClass: 'circle' // the button will convert to circle.  | String
size                      | IsometricButton's size, there has four params: small / middle /  large / x-large.<br/>small: font-size: 12px. ex. size: 'small'<br/>middle: font-size: 16px. ex. size: 'middle' (defalut is middle)<br/>large: font-size: 20px. ex. size: 'large'<br/>x-large: font-size: 24px;. ex. size: 'x-large'                        | String
col                       | Component width. ex. col: 'col-4 col-991-6 col-768-9 col-600-10 col-480-12' | String
offset                    | Component margin left. ex. offset: 'col-offset-6 col-offset-991-5 col-offset-768-4 col-offset-600-3 col-offset-480-1' | String
boxShadow                 | If IsometricButton has box-shadow or not. ex. boxShadow: true // IsometricButton will has box-shadow | Boolean
style                     | Custom css to Buttom. ex. style: {backgroundColor: '#f90', borderRadius: 0, color: '#fff', fontSize: '12px', ...}<br/>There is a special key in style, it call clickResponseColor. It will set click response color. ex. style: {clickResponseColor: '#f90', borderRadius: 0, ...} | Object
onClickFunc               | Custom click event callback function. ex. onClickFunc: (e) => { alert('click'); } | Function
componentDidMountFunc     | Custom componentDidMount event callback function. ex. componentDidMountFunc: (e) => { alert('component did mount'); } | Function

**example:**
```js
import { IsometricButton } from 'gee-material-ui';
import update from 'react-addons-update';

class Test extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isometricButtonOption: {
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
      <IsometricButton options={this.state.isometricButtonOption} />
    );
  }
}
```

<br/>

### Scale Button
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

<br/>

### Card
```js
<Card options={{...}}>
  <p>...
  <div>...
</Card>
```

options                   | introduction                                                        | parameters type
------------------------- | ------------------------------------------------------------------- | -------------------
id                        | Set custom element id for Button component. ex. id: 'customId'      | String
classNames                | Set custom element class for Button component. ex. className: 'customClass1 customClass2'   | String
content                   | Set Button's value. ex. content: 'Button'   | String
col                       | Component width. ex. col: 'col-4 col-991-6 col-768-9 col-600-10 col-480-12' | String
offset                    | Component margin left. ex. offset: 'col-offset-6 col-offset-991-5 col-offset-768-4 col-offset-600-3 col-offset-480-1' | String
animate                   | ex. animate: fadeIn / scale / radius-scale | String
gmuCardStyle              | Set custom component first layer's style. ex. style: {background: '#ddd'}  | Object
cardBoxStyle              | Set custom component card layer's style. ex. style: {background: '#ddd'}  | Object

**example:**
```js
import { Card } from 'gee-material-ui';
import update from 'react-addons-update';

class Test extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cardOption: {
        // options for Button component
        col: 'col-12', // 991 / 768 / 600 / 480
        offset: 'col-offset-3 col-offset-768-0 col-offset-991-1', // 991 / 768 / 600 / 480
        gmuCardStyle: {
          background: '#ddd',
        },
        cardBoxStyle: {
          color: '#333',
        },
      },
    };
  }

  render() {
    return (
      <Card options={this.state.cardOption} />
    );
  }
}
```

<br/>

### Curtain
```js
<Curtain options={{...}}>
  <p>...
  <div>...
</Curtain>
```

options                   | introduction                                                        | parameters type
------------------------- | ------------------------------------------------------------------- | -------------------
style                     | Custom css to Curtain. ex. style: {backgroundColor: '#f90', ...}    | Object
opacity                   | Set Curtain's opacity. ex. opacity: 0.5   | number
show                      | Show Curtain or not. ex.<br/>show: 'false' // Curtain will hidden<br/>show: 'true' // Curtain will show   | String
onClickFunc               | Custom click event callback function. ex. onClickFunc: (e) => { alert('click'); } | Function

**example:**
```js
import { Curtain } from 'gee-material-ui';
import update from 'react-addons-update';

class Test extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      curtainOption: {
        style: {},
        opacity: 0.5,
        show: 'false', // or 'true'
        onClickFunc: (e) => {
          console.log(e);
        },
      },
    };
  }

  render() {
    return (
      <Curtain options={this.state.curtainOption} />
    );
  }
}
```

<br/>

### DataPicker
```js
<DataPicker options={{...}}>
  <p>...
  <div>...
</DataPicker>
```

options                   | introduction                                                        | parameters type
------------------------- | ------------------------------------------------------------------- | -------------------
curtain                   | Set Curtain component option in DataPicker Component. More info look at Curtain options.     | Object
dataPicker                | DataPicker's options. It include six option: title, size, theme, animation, underLineColor, inputValue.  | Object
title (dataPicker's sub key) | Input's placeholder. ex. title: 'Click to choice date'  | String
size (dataPicker's sub key)  | Input's size, there has four params: small / middle /  large / x-large.<br/>small: font-size: 16px. ex. size: 'small'<br/>middle: font-size: 20px. ex. size: 'middle' (defalut is middle)<br/>large: font-size: 28px. ex. size: 'large'<br/>x-large: font-size: 40px;. ex. size: 'x-large'                        | String
theme (dataPicker's sub key) | Set Input's theme. It has six params: malibu, charade, shark, froly, fern, h-gold. ex. theme: 'malibu' | String
animate (dataPicker's sub key)| Input Component onfocus's animate. ex. animate: { titleActive: 'default' // 'leftSmall' } | String
underLineColor (dataPicker's sub key) | Set custom Input's underline color. Just use hex or rgba to set underline color, if use 'false' then color will set by theme, . ex. underLineColor: 'rgba(160, 160, 160,1)' // '#160 / false'  | String

**example:**
```js
import { DataPicker } from 'gee-material-ui';
import update from 'react-addons-update';

class Test extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dataPickerOption: {
        curtain: {
          style: {},
          opacity: 0.5,
          show: 'false', // true false
          onClickFunc: (e) => {
            console.log(e, 2);
          },
        },
        dataPicker: {
          title: 'Click to choice date',
          size: 'small', // small / middle / large / x-large
          theme: 'malibu',
          animation: {
            titleActive: 'leftSmall', // default / leftSmall /
          },
          underLineColor: 'false', // color rgba / hex
          // inputValue: '', // 假如有要從 setState 傳 value 才需使用，default 是讓內部輸入
        }
      },
    };
  }

  render() {
    return (
      <DataPicker options={this.state.dataPickerOption} />
    );
  }
}
```

<br/>

### Dialog
```js
<Dialog options={{...}}>
  <p>...
  <div>...
</Dialog>
```

options                   | introduction                                                        | parameters type
------------------------- | ------------------------------------------------------------------- | -------------------
dialog                    | dialog is options of button which could trigger popup modal, it same as Button's options, check Button options to get more information     | Object
card                      | card is options of popup modal, it same as Card's options, check Card options to get more information.  | Object
curtain                   | curtain is options of background cover, it same as Curtain's options, check Curtain options to get more information.  | String
confirm                   | confirm is options of buttons in the popup modal. It has two params: submit, cancel which are options of submit button and options of cancel button. These options are same as Button's options, check Button options to get more information. | Object

**example:**
```js
import { Dialog } from 'gee-material-ui';
import update from 'react-addons-update';

class Test extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dialogOption: {
        dialog: {
          type: 'button', // text / button / icon / custom
          size: 'middle', // small / middle / large / x-large
          theme: 'malibu',
          content: 'Click to show dialog',
          iconClassBefore: '',
          iconClassAfter: '',
          style: {

          },
        },
        card: {
          col: 'col-6 col-768-12 col-991-10', // 991 / 768 / 600 / 480
          offset: 'col-offset-3 col-offset-768-0 col-offset-991-1', // 991 / 768 / 600 / 480
          gmuCardStyle: {
            // background: '#ddd',
          },
          cardBoxStyle: {
          },
        },
        curtain: {
          style: {},
          opacity: 0.5,
          show: 'false', // true false
          onClickFunc: (e) => {
            alert('Click curtain to close dialog');
          },
        },
        confirm: {
          submit: {
            disable: false,
            size: 'small', // small / middle / large / x-large
            theme: '',
            content: 'confirm',
            iconClassBefore: '',
            iconClassAfter: '',
            style: {

            },
            onClickFunc: (e) => {
              alert('Click confirm');
            }
          },
          cancel: {
            disable: false,
            size: 'small', // small / middle / large / x-large
            theme: '',
            content: 'cancel',
            iconClassBefore: '',
            iconClassAfter: '',
            style: {

            },
            onClickFunc: (e) => {
              alert('Click cancel');
            }
          }
        }
      },
    };
  }

  render() {
    return (
      <Dialog options={this.state.dialogOption} />
    );
  }
}
```

<br/>

### Drawer
```js
<Drawer options={{...}}>
  <p>...
  <div>...
</Drawer>
```

options                   | introduction                                                        | parameters type
------------------------- | ------------------------------------------------------------------- | -------------------
show                      | Show Drawer or not. ex. show: true // will show Drawer, false will hide Drawer    | Boolean
position                  | Drawer's position. if use 'right', Drawer will display on right hand side, 'left' will display on left hand side. ex. position: 'right' | String
cardOption                | cardOption is options of popup modal, it same as Card's options, check Card options to get more information.  | Object
curtainOption             | curtain is options of background cover, it same as Curtain's options, check Curtain options to get more information.  | String


**example:**
```js
import { Drawer, Button } from 'gee-material-ui';
import update from 'react-addons-update';

class Test extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      drawerOption: {
        show: false,
        position: 'right',
        cardOption: {
          col: 'col-3 col-768-6', // 991 / 768 / 600 / 480
          offset: 'col-offset-0 col-offset-768-0', // 991 / 768 / 600 / 480
          gmuCardStyle: {
          },
          cardBoxStyle: {
          },
        },
        // curtainOption: false,
        curtainOption: {
          style: {},
          opacity: 0.5,
          show: 'false', // true false
          onClickFunc: (e) => {
            // click curtain to hide Drawer
            this.setState(update(this.state, {
              drawerOption: {
                show: { $set: false },
              },
            }));
          },
        },
      },
      buttonControlDrawerOption: {
        boxShadow: true,
        content: 'call Drawer',
        stateClass: 'h-gold',
        col: 'col-3 col-768-6',
        offset: '',
        size: 'middle', // x-large / large / middle / small
        onClickFunc: () => {
          // click button to show Drawer
          this.setState(update(this.state, {
            drawerOption: {
              show: { $set: true },
            },
          }));
        },
      },
    };
  }

  render() {
    return (
      <Drawer options={this.state.drawerOption} />
      <Button options={this.state.buttonControlDrawerOption}/>
    );
  }
}
```

<br/>

### Grid
```js
<Grid options={{...}}>
  <p>...
  <div>...
</Grid>
```

options                   | introduction                                                        | parameters type
------------------------- | ------------------------------------------------------------------- | -------------------
haloColor                 | Click grid item will run halo animate, and this param could let user custom halo color. ex. haloColor: '#000' | String
gridList                  | An array include all items data. Item data is an object, It include seven option: id, classNames, defaultStyle, resultStyle, imageSrc, children, onClickFunc | Array
id (gridList's sub key)   | Set custom element id for Grid item component. ex. id: 'customId'      | String
classNames (gridList's sub key) | Set custom element classNames for Grid item component. ex. classNames: 'customClassNames'      | String
defaultStyle (gridList's sub key)| Set default style for Grid item component. ex. defaultStyle: {borderRadius: '16px', border: '2px solid #09f', ...}  | Object
resultStyle (gridList's sub key)| Set clicked result style for Grid item component. ex. resultStyle: {borderRadius: '3px', border: '15px solid #09f', ...}  | Object
imageSrc (gridList's sub key)| Set Grid item's image banner. ex. imageSrc: 'https://...'  | String
children (gridList's sub key)| Children is jsx element tag, user can use any components or tag here. ex. children: <div>this is content</div>  | JSX
onClickFunc (gridList's sub key)| Custom click event callback function. ex. onClickFunc: (e) => { alert('click'); } | Function


**example:**
```js
import { Grid } from 'gee-material-ui';
import update from 'react-addons-update';

const testGridContent = {
  id: '',
  classNames: '',
  defaultStyle: {},
  resultStyle: {},
  imageSrc: 'http://www.freeimageslive.com/galleries/workplace/office2/preview/office_celebrations.jpg',
  onClickFunc: (e) => {

  },
}

class Test extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      gridOption: {
        haloColor: '#80CBC4',

        gridList: [
          {
            id: '',
            classNames: '',
            active: 'false',
            defaultStyle: {
              boxShadow: '3px 3px 5px rgba(0,0,0,.5)',
              border: '2px solid #f60'
            },
            resultStyle: {
              boxShadow: '3px 3px 5px rgba(0,0,0,.0)',
              border: '13px solid #f60',
              background: '#09f'
            },
            imageSrc: 'http://www.freeimageslive.com/galleries/workplace/office2/preview/office_celebrations.jpg',
            onClickFunc: (e) => {
              alert('click!');
            },
            children: <div>1<br/>1<br/>1<br/>1<br/>1<br/>1</div>,
          },
          {
            ...testGridContent,
            children: <div>2<br/>2<br/>2<br/>2<br/>2<br/>2</div>,
          },
          {
            ...testGridContent
            children: <div>3<br/>3<br/>3<br/>3<br/>3<br/>3</div>,
          },
          {
            ...testGridContent
            children: <div>4<br/>4<br/>4<br/>4<br/>4<br/>4</div>,
          },
          {
            ...testGridContent
            children: <div>5<br/>5<br/>5<br/>5<br/>5<br/>5</div>,
          },
          {
            ...testGridContent
            children: <div>6<br/>6<br/>6<br/>6<br/>6<br/>6</div>,
          },
          {
            ...testGridContent
            children: <div>7<br/>7<br/>7<br/>7<br/>7<br/>7</div>,
          },
          {
            ...testGridContent
            children: <div>8<br/>8<br/>8<br/>8<br/>8<br/>8</div>,
          },
          {
            ...testGridContent
            children: <div>9<br/>9<br/>9<br/>9<br/>9<br/>9</div>,
          },
          {
            ...testGridContent
            children: <div>10<br/>10<br/>10<br/>10<br/>10<br/>10</div>,
          },
          {
            ...testGridContent
            children: <div>1<br/>1<br/>1<br/>1<br/>1<br/>1</div>,
          },
          {
            ...testGridContent
            children: <div>1aa<p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p></div>,
          },
          {
            ...testGridContent
            children: <div>1aa<p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p></div>,
          },
          {
            ...testGridContent
            children: <div>1aa<p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p></div>,
          },
          {
            ...testGridContent
            children: <div>1aa<p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p></div>,
          },
          {
            ...testGridContent
            children: <div>1aa<p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p></div>,
          },
          {
            ...testGridContent
            children: <div>1aa<p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p></div>,
          },
          {
            ...testGridContent
            children: <div>1aa<p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p></div>,
          },
          {
            ...testGridContent
            children: <div>1aa<p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p></div>,
          },
          {
            ...testGridContent
            children: <div>1aa<p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p></div>,
          },
          {
            ...testGridContent
            children: <div>1aa<p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p></div>,
          },
          {
            ...testGridContent
            children: <div>1aa<p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p></div>,
          },
          {
            ...testGridContent
            children: <div>1aa<p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p></div>,
          },
          {
            ...testGridContent
            children: <div>1aa<p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p></div>,
          },
          {
            ...testGridContent
            children: <div>1aa<p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p></div>,
          },
        ],
      },
    };
  }

  render() {
    return (
      <Grid options={this.state.gridOption} />
    );
  }
}
```
