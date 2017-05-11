### Drawer

[Demo page](https://kyle-cheng-portfolio.herokuapp.com/portfolio/react-material-design#drawer)

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
cardOption                | cardOption is options of popup modal, it same as Card's options, check [Card options](../Card/card.md) to get more information.  | Object
curtainOption             | curtain is options of background cover, it same as Curtain's options, check [Curtain options](../Curtain/curtain.md) to get more information.  | Object


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
