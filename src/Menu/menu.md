### Menu

[Demo page](https://kyle-cheng-portfolio.herokuapp.com/portfolio/react-material-design#menu)

```js
<Menu options={{...}}>
  <p>...
  <div>...
</Menu>
```

options                   | introduction                                                        | parameters type
------------------------- | ------------------------------------------------------------------- | -------------------
show                      | Show Menu or not. ex. show: true // will show Menu, false will hide Menu    | Boolean
cardOption                | cardOption is options of popup modal, it same as Card's options, check [Card options](../Card/card.md) to get more information.  | Object



**example:**
```js
import { Menu, Button } from 'gee-material-ui';
import update from 'react-addons-update';

class Test extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      menuOption: {
        show: false,
        cardOption: {
          col: 'col-3 col-768-6', // 991 / 768 / 600 / 480
          offset: 'col-offset-0 col-offset-768-0', // 991 / 768 / 600 / 480
          gmuCardStyle: {
          },
          cardBoxStyle: {
          },
        },
      },
      buttonControlMenuOption: {
        boxShadow: true,
        content: 'call menu',
        stateClass: 'h-gold', // malibu / charade / shark / froly / fern
        col: 'col-3 col-768-6', // col-1 ~ col-12
        offset: '',
        size: 'middle', // x-large / large / middle / small
        onClickFunc: () => {
          this.setState(update(this.state, {
            menuOption: {
              show: { $set: !this.state.menuOption.show },
            }
          }));
        },
      },
    };
  }

  render() {
    return (
      <Menu options={this.state.menuOptions}>
        <p>item1</p>
        <span className="gmu-menu-hr" />
        <p>item2</p>
        <span className="gmu-menu-hr-fill" />
        <p>Login / Logout</p>
      </Menu>
      <Button options={this.state.buttonControlMenuOption}/>
    );
  }
}
```
