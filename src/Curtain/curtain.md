### Curtain
```js
<Curtain options={{...}} />
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
