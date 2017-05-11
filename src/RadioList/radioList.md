### Radio List

[Demo page](https://kyle-cheng-portfolio.herokuapp.com/portfolio/react-material-design#radioList)

```js
<RadioList options={{...}} />
```

options                   | introduction                                                        | parameters type
------------------------- | ------------------------------------------------------------------- | -------------------
id                        | Set custom element id for RadioList component. ex. id: 'customId'      | String
classNames                | Set custom element class for RadioList component. ex. className: 'customClass1 customClass2'   | String
direction                 | Set RadioList direction. ex. direction: 'horizontal' // vertical  | String
selectOption              | An array include all items data. Item data is an radio list which has select topic, and select option. Item data is an object, It include eight option: title, active, size, containerStyle, checkStyle, uncheckStyle, radioOption, onClickFunc | Array
title (selectOption's sub key) | Set select topic. ex. title: 'which is your favorite?' | String
active (selectOption's sub key) | Selected option index. ex. active: 0 // first option will be selected | Number
size (selectOption's sub key) | Radio Button size. There has two size could use: default, small.  ex. size: 'default' // 'small' | String
containerStyle (selectOption's sub key) | Custom RadioList component first layer's style. ex. containerStyle: {background: '#eee', padding: '12px', borderRadius: '5px', ...}  | Object
checkStyle (selectOption's sub key) | Custom selected radio option style. ex. checkStyle: {border: '3px solid blue', background: '#fff', boxShadow: '0px 0px 0px 2px red', ...}  | Object
uncheckStyle (selectOption's sub key) | Custom unselected radio option style. ex. uncheckStyle: {border: '1px solid blue', background: '#fff', boxShadow: '0px 0px 0px 2px red', ...}  | Object
radioOption (selectOption's sub key) | Set radio option's label. ex. radioOption: [{label: 'first label'}, {label: 'second label'}] | Array
onClickFunc (selectOption's sub key)| Custom click event callback function. ex. onClickFunc: (e) => { alert('click'); } | Function



**example:**
```js
import { RadioList } from 'gee-material-ui';
import update from 'react-addons-update';

class Test extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      radioListOption: {
        id: '',
        classNames: '',
        direction: 'horizontal', //vertical
        selectOption: [
          {
            title: 'Choice one',
            active: 0,
            size: 'middle',
            containerStyle: {
              background: '#eee',
              padding: '12px',
              borderRadius: '5px',
            },
            checkStyle: {

              border: '3px solid blue',
              background: '#fff',
              boxShadow: '0px 0px 0px 2px red',
              //
            },
            uncheckStyle: {
              border: '1px solid blue',
              background: '#fff',
              boxShadow: '0px 0px 0px 2px red',
              //
            },
            radioOption: [
              {
                label: 'Top',
              },
              {
                label: 'Bottom',
              },
            ],
            onClickFunc: (e, selectOptionsIndex, radioOptionIndex) => {
              this.setState(update(this.state, {
                radioListOption: {
                  selectOption: {
                    [selectOptionsIndex]: {
                      active: { $set: radioOptionIndex },
                    },
                  },
                },
              }));
            },
          },
          {
            title: 'Which one',
            active: 1,
            size: 'middle',
            containerStyle: {
              background: '',
              padding: '12px',
              border: '1px solid #09f',
              borderRadius: '5px',
            },
            checkStyle: {

              border: '3px solid #fff',
              background: '#09f',
              boxShadow: '0px 0px 0px 2px #09f',
              //
            },
            uncheckStyle: {
              border: '1px solid #09f',
              background: '#fff',
              boxShadow: '0px 0px 0px 2px #09f',
              //
            },
            radioOption: [
              {
                label: 'dog',
              },
              {
                label: 'cat',
              },
            ],
            onClickFunc: (e, selectOptionsIndex, radioOptionIndex) => {
              this.setState(update(this.state, {
                radioListOption: {
                  selectOption: {
                    [selectOptionsIndex]: {
                      active: { $set: radioOptionIndex },
                    },
                  },
                },
              }));
            },
          },
        ],
      },
    };
  }

  render() {
    return (
      <RadioList options={this.state.radioListOption} />
    );
  }
}
```
