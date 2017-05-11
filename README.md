# Gee-material-ui -beta

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

1. [Avatar options](./src/Avatar/avatar.md)
2. [Button options](./src/Button/button.md)
3. [Isometric Button options](./src/IsometricButton/isometricButton.md)
4. [Scale Button options](./src/ScaleButton/scaleButton.md)
5. [Input options](./src/AutoComplete/input.md)
6. [Card options](./src/Card/card.md)
7. [List options](./src/List/list.md)
8. [Curtain options](./src/Curtain/curtain.md)
9. [DataPicker options](./src/DataPicker/dataPicker.md)
10. [Dialog options](./src/Dialog/dialog.md)
11. [Drawer options](./src/Drawer/drawer.md)
12. [Grid options](./src/Grid/grid.md)
13. [Menu options](./src/Menu/menu.md)
14. [Radio List options](./src/RadioList/radioList.md)

<br/>

##License

MIT
