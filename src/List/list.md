### List

[Demo page](https://kyle-cheng-portfolio.herokuapp.com/portfolio/react-material-design#list)

```js
<List options={{...}}>
  <Card options={{...}}>...</Card>
</List>
```

options                   | introduction                                                        | parameters type
------------------------- | ------------------------------------------------------------------- | -------------------
show                      | Show List or not. ex. show: true // will show Drawer, false will hide Drawer    | Boolean
curtain                   | curtain is options of background cover, it same as Curtain's options, check [Curtain options](../Curtain/curtain.md) to get more information.  | Object

**example:**
```js
import { List, ScaleButton } from 'gee-material-ui';
import update from 'react-addons-update';

class Test extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      listOption: {
        show: false,
        curtain: {
          style: {},
          opacity: 0.5,
          show: 'false', // true false
          onClickFunc: (e) => {
            this.setState(update(this.state, {
              listOption: {
                show: { $set: false },
                curtain: {
                  show: { $set: 'false' },
                },
              },
              scaleButtonOption: {
                active: { $set: '' },
              }
            }));
          },
        },
      },
      scaleButtonOption: {
        id: '',
        classNames: '',
        active: 'false',
        clickHidden: true,
        style: {},
        iconClassBefore: 'fa fa-align-justify',
        iconClassAfter: '',
        boxShadow: false,
        content: '',
        stateClass: 'malibu', // malibu / charade / shark / froly / fern
        shapeClass: 'circle',
        componentDidMountFunc: () => {
        },
        size: 'large',
        onClickFunc: () => {
          setTimeout(() => {
            this.setState(update(this.state, {
              listOption: {
                show: { $set: true },
                curtain: {
                  show: { $set: 'true' },
                },
              },
              scaleButtonOption: {
                active: { $set: 'true' },
              }
            }));
          }, 250);
        },
      }
    };
  }

  render() {
    return (
      <List options={this.state.dialogOption}>
        <Card options={{ col: 'col-12' }}>List item1</Card>
        <Card options={{ col: 'col-10', offset: 'col-offset-1' }}>List item2</Card>
        <Card options={{ col: 'col-8', offset: 'col-offset-2' }}>List item3</Card>
        <Card options={{ col: 'col-6', offset: 'col-offset-3' }}>List item4</Card>
        <Card options={{ col: 'col-4', offset: 'col-offset-4' }}>List item5</Card>
        <Card options={{ col: 'col-2', offset: 'col-offset-5' }}>List item6</Card>
      </List>
      <ScaleButton options={this.state.scaleButtonOption} />
    );
  }
}
```
