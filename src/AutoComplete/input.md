### Input
```js
<Input options={{...}} />
```

options                   | introduction                                                        | parameters type
------------------------- | ------------------------------------------------------------------- | -------------------
id                        | Set custom element id for Input component. ex. id: 'customId'      | String
classNames                | Set custom element class for Input component. ex. className: 'customClass1 customClass2'   | String
title                     | Set Input component's title. ex. title: 'Input Title' | String
size                      | Input's size, there has four params: small / middle /  large / x-large.<br/>small: font-size: 16px. ex. size: 'small'<br/>middle: font-size: 20px. ex. size: 'middle' (defalut is middle)<br/>large: font-size: 28px. ex. size: 'large'<br/>x-large: font-size: 40px;. ex. size: 'x-large'                        | String
theme                     | Set Input's theme. It has six params: malibu, charade, shark, froly, fern, h-gold. ex. theme: 'malibu' | String
animate                   | Input Component onfocus's animate. ex. animate: { titleActive: 'default' // 'leftSmall' } | String
underLineColor            | Set custom Input's underline color. Just use hex or rgba to set underline color, if use 'false' then color will set by theme, . ex. underLineColor: 'rgba(160, 160, 160,1)' // '#160 / false'  | String
inputValue                | Transfer state's value to be Input component's value. ex. inputValue: this.state.inputValue // want to update value have to use this.setState to update this.state.inputValue | String
onFocusFunc               | Custom onFocus event callback function. ex. onFocusFunc: (e) => { alert('onFocus'); } | Function
onBlurFunc                | Custom onBlur event callback function. ex. onBlurFunc: (e) => { alert('onBlur'); } | Function
onChangeFunc              | Custom onChange event callback function. ex. onChangeFunc: (e) => { alert('onChange'); } | Function


**example:**
```js
import { Input } from 'gee-material-ui';
import update from 'react-addons-update';

class Test extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      inputOption: {
        id: '',
        classNames: '',
        title: 'Input',
        size: 'small', // small / middle / large / x-large
        theme: 'malibu',
        animation: {
          titleActive: 'leftSmall', // default / leftSmall /
        },
        underLineColor: false, // color rgba / hex
        inputValue: '', // 假如有要從setState傳value才需使用，default是讓內部輸入
        onFocusFunc: () => {},
        onBlurFunc: () => {},
        onChangeFunc: () => {},
      },
    };
  }

  render() {
    return (
      <Input options={this.state.inputOption} />
    );
  }
}
```
