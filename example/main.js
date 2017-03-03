import React from 'react';
import ReactDOM from 'react-dom';
import update from 'react-addons-update';
import {
  Button,
  Card,
  Header,
  AutoComplete,
  Avatar,
  IsometricButton,
  Chip,
  Curtain,
  DataPicker,
  Dialog,
  ScaleButton,
  List,
  StateManager,
} from '../src';

console.log('StateManager', StateManager);

const buttonOption = {
  style: {
    clickResponseColor: '',
    color: '',
    background: '',
    boxShadow: '',
    border: '',
    borderRadius: '',
    padding: '',
    margin: '',
    fontSize: '', // custom button size
    // maxWidth: 100,
    // textOverflow: 'ellipsis',
    // overflow: 'hidden',
    // whiteSpace: 'nowrap',
  },
  iconClassBefore: '',
  iconClassAfter: '',
  boxShadow: true,
  content: 'textButton',
  stateClass: 'h-gold', // malibu / charade / shark / froly / fern
  widthClass: 'col-6', // col-1 ~ col-12
  size: 'middle', // x-large / large / middle / small
  componentDidMountFunc: () => {
    console.log('done!');
  },
  onClickFunc: () => {
    console.log('click!');
  },
};

const isometricButtonOption = {
  style: {
    clickResponseColor: '',
    color: '',
    background: '',
    boxShadow: '',
    border: '',
    borderRadius: '',
    padding: '',
    margin: '',
    fontSize: '', // custom button size
    // maxWidth: 100,
    // textOverflow: 'ellipsis',
    // overflow: 'hidden',
    // whiteSpace: 'nowrap',
  },
  iconClassBefore: '',
  iconClassAfter: '',
  boxShadow: true,
  content: 'A',
  stateClass: 'h-gold', // malibu / charade / shark / froly / fern
  size: 'middle', // x-large / large / middle / small
  shapeClass: 'circle',
  componentDidMountFunc: () => {
    console.log('done!');
  },
  onClickFunc: () => {
    console.log('click!');
  },
};


// ReactDOM.render(<Button option={buttonOption} />, document.getElementById('root'));

const cardOption = {
  col: 'col-6 col-768-12', // 991 / 768 / 600 / 480
  offset: 'col-offset-1 col-offset-768-0', // 991 / 768 / 600 / 480
  gmuContainerStyle: {
    background: '#ddd',
  },
  containerBoxStyle: {
  },
};

const headerFixedOption = {
  size: 'middle', // small / middle / large
  status: 'fixed-top',
  theme: 'h-gold',
};

const headerContainerOption = {
  size: 'small',
  status: 'container-header',
  theme: 'malibu',
};

const autoCompleteOption = {
  title: 'test',
  size: 'small', // small / middle / large / x-large
  theme: 'malibu',
  animation: {
    titleActive: 'leftSmall', // default / leftSmall /
  },
  underLineColor: 'false', // color rgba / hex
  inputValue: '', // 假如有要從setState傳value才需使用，default是讓內部輸入
  onFocusFuncCallback: () => {},
  onBlurFuncCallback: () => {},
  onChangeFuncCallback: () => {},
};

const avatarOptions = {
  size: 'small', // defalut is middle  / small / middle / large
  customSize: 50,
  // boxShadow: true,
  animate: 'hover-to-scale',
  src: 'http://orig05.deviantart.net/bc95/f/2015/263/4/4/stooooooooooop__by_lolwutburger-d9a8m15.png',
  iconClass: '',
  style: {
    // backgroundColor: '',
    // color: '',
    // onClickFunc: () => {},
  },
};

const avatarOptions1 = {
  size: 'small',
  boxShadow: true,
  animate: 'hover-to-square',
  // src: 'http://orig05.deviantart.net/bc95/f/2015/263/4/4/stooooooooooop__by_lolwutburger-d9a8m15.png',
  iconClass: '',
  style: {
    backgroundColor: '#000',
    color: 'red',
  },
  onClickFunc: () => {},
};

const chipOption = {
  avatar: {}, // false
  // avatar: false,
  isometricButton: {}, // false
  // isometricButton: false,
  size: 'small',
  // customSize: 20,
  onClickText: (e) => {
    e.preventDefault();
    console.log('textClick');
  },
  onClickAvatar: (e) => {
    e.preventDefault();
    console.log('onClickAvatar');
  },
  onClickButton: (e) => {
    e.preventDefault();
    console.log('onClickButton');
  },
};

const curtainOption = {
  style: {},
  opacity: 0.5,
  show: 'false', // true
  onClickFunc: () => {},
};

const dataPickerOption = {
  curtain: {
    style: {},
    opacity: 0.5,
    // show: 'false', // true false
    onClickFunc: (e) => {
      console.log(e, 2);
    },
  },
  dataPicker: {
    title: 'test',
    size: 'small', // small / middle / large / x-large
    theme: 'malibu',
    animation: {
      titleActive: 'leftSmall', // default / leftSmall /
    },
    underLineColor: 'false', // color rgba / hex
    inputValue: '', // 假如有要從setState傳value才需使用，default是讓內部輸入
    onFocusFuncCallback: () => {},
    onBlurFuncCallback: () => {},
    onChangeFuncCallback: () => {},
  }
};

const dialogOption = {
  dialog: {
    type: 'button', // text / button / icon / custom
    size: 'small', // small / middle / large / x-large
    theme: 'malibu',
    content: '嘿嘿嘿',
    iconClassBefore: '',
    iconClassAfter: '',
    style: {

    },
  },
  card: {
    col: 'col-6 col-768-12 col-991-10', // 991 / 768 / 600 / 480
    offset: 'col-offset-3 col-offset-768-0 col-offset-991-1', // 991 / 768 / 600 / 480
    gmuContainerStyle: {
      // background: '#ddd',
    },
    containerBoxStyle: {
    },
  },
  curtain: {
    style: {},
    opacity: 0.5,
    // show: 'false', // true false
    onClickFunc: (e) => {
      console.log(e, 2);
    },
  },
  confirm: {
    submit: {
      disable: false,
      size: 'small', // small / middle / large / x-large
      theme: '',
      content: '確定',
      iconClassBefore: '',
      iconClassAfter: '',
      style: {

      },
      onClickFunc: (e) => {

      }
    },
    cancel: {
      disable: false,
      size: 'small', // small / middle / large / x-large
      theme: '',
      content: '取消',
      iconClassBefore: '',
      iconClassAfter: '',
      style: {

      },
      onClickFunc: (e) => {

      }
    }
  }
};

const listOption =  {
  show: true,
  curtain: {
    style: {},
    opacity: 0.5,
    // show: 'false', // true false
    onClickFunc: (e) => {
      console.log(e, 2);
    },
  },
};

class Test1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...StateManager.events, // 預先加入 state，好呼叫 state 操作的函式（如：更新等等）
      listOption: {
        show: false,
        curtain: {
          style: {},
          opacity: 0.5,
          show: 'false', // true false
          onClickFunc: (e) => {
            console.log('a');
            console.log(this);
            this.state.concentratedUpdate(this,
              [
                {
                  path: '>scaleButtonOption',
                  updateState: {
                    active: { $set: '' },
                  },
                },
                {
                  path: '>listOption',
                  updateState: {
                    show: { $set: false },
                    curtain: {
                      show: { $set: 'false' },
                      opacity: { $set: 0 },
                    },
                  },
                },
              ],
            );
          },
        },
      },
      scaleButtonOption: {
        ...StateManager.scaleButtonOption.hide,
        componentDidMountFunc: () => {
          console.log('done!');
        },
        onClickFunc: () => {
          setTimeout(() => {
            this.state.concentratedUpdate(this,
              [
                {
                  path: '>scaleButtonOption',
                  updateState: {
                    active: { $set: 'true' },
                  },
                },
                {
                  path: '>listOption',
                  updateState: {
                    show: { $set: true },
                    curtain: {
                      show: { $set: 'true' },
                      opacity: { $set: 0.5 },
                    },
                  },
                },
              ],
            );
          }, 250);
        },
      },
    };
  }
  renderTest() {
    window.start = new Date().getTime();
    return [
      // <Card options={{ col: 'col-6 col-768-12' }}>
      //   <Header options={headerContainerOption}>
      //     <div className="item-top col-3">top</div>
      //     aaaaa
      //     <div className="item-bottom col-3 col-offset-2">bottom</div>
      //     <Avatar options={avatarOptions} />
      //     <Avatar options={avatarOptions1}>
      //       A
      //     </Avatar>
      //   </Header>
      //   <div>in</div>
      //   <AutoComplete options={autoCompleteOption} />
      //   <Button options={buttonOption} />
      // </Card>,
      // <Card options={{ col: 'col-5 col-768-12', offset: 'col-offset-1 col-offset-768-0' }} />,
      // <Card options={{ col: 'col-5', offset: 'col-offset-1' }} />,
      <ScaleButton options={{ ...this.state.scaleButtonOption, hide: true }} />,
      // <Chip options={chipOption} />,
      // <AutoComplete options={autoCompleteOption} />,
      // <Button options={buttonOption} />,
      // <Curtain options={curtainOption} />,
      <DataPicker options={dataPickerOption} />, // 效能 非常差，需要優化
      <Dialog options={dialogOption}><p>aaaaaa</p><p>bbbb</p></Dialog>,
      <List options={this.state.listOption}>
        <Card options={{ col: 'col-12' }} />
        <Card options={{ col: 'col-12' }} />
        <Card options={{ col: 'col-12' }} />
        <Card options={{ col: 'col-12' }} />
      </List>,
    ];
  }

  componentDidMount() {
    window.end = new Date().getTime();
  }

  render() {
    return (
      <div>
        {/* <Header options={headerFixedOption}>
          <Avatar />
        </Header> */}
        {this.renderTest()}
      </div>
    );
  }
}

ReactDOM.render(<Test1 option={buttonOption} />, document.getElementById('root'));
