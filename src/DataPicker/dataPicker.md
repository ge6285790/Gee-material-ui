### DataPicker

[Demo page](https://kyle-cheng-portfolio.herokuapp.com/portfolio/react-material-design#dataPicker)

```js
<DataPicker options={{...}} />
```

options                   | introduction                                                        | parameters type
------------------------- | ------------------------------------------------------------------- | -------------------
curtain                   | Set Curtain component option in DataPicker Component. More info look at [Curtain options](../Curtain/curtain.md).     | Object
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
