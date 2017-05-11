### Dialog

[Demo page](https://kyle-cheng-portfolio.herokuapp.com/portfolio/react-material-design#dialog)

```js
<Dialog options={{...}}>
  <p>...
  <div>...
</Dialog>
```

options                   | introduction                                                        | parameters type
------------------------- | ------------------------------------------------------------------- | -------------------
dialog                    | dialog is options of button which could trigger popup modal, it same as Button's options, check [Button options](../Button/button.md) to get more information     | Object
card                      | card is options of popup modal, it same as Card's options, check [Card options](../Card/card.md) to get more information.  | Object
curtain                   | curtain is options of background cover, it same as Curtain's options, check [Curtain options](../Curtain/curtain.md) to get more information.  | Object
confirm                   | confirm is options of buttons in the popup modal. It has two params: submit, cancel which are options of submit button and options of cancel button. These options are same as Button's options, check [Button options](../Button/button.md) to get more information. | Object

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
