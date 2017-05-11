### Card

[Demo page](https://kyle-cheng-portfolio.herokuapp.com/portfolio/react-material-design#card)

```js
<Card options={{...}}>
  <p>...
  <div>...
</Card>
```

options                   | introduction                                                        | parameters type
------------------------- | ------------------------------------------------------------------- | -------------------
id                        | Set custom element id for Card component. ex. id: 'customId'      | String
classNames                | Set custom element class for Card component. ex. className: 'customClass1 customClass2'   | String
content                   | Set Card's value. ex. content: 'Card'   | String
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
