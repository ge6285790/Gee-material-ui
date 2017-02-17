import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Container, Header, AutoComplete } from '../src';

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
    // maxWidth: 100,
    // textOverflow: 'ellipsis',
    // overflow: 'hidden',
    // whiteSpace: 'nowrap',
  },
  content: 'textButton',
  stateClass: 'h-gold', // malibu / charade / shark / froly / fern
  componentDidMountFunc: () => {
    console.log('done!');
  },
  onClickFunc: () => {
    console.log('click!');
  },
};

// ReactDOM.render(<Button option={buttonOption} />, document.getElementById('root'));

const containerOption = {
  col: 'col-6 col-768-12', // 991 / 768 / 600 / 480
  offset: 'col-offset-1 col-offset-768-0', // 991 / 768 / 600 / 480
  gmuContainerStyle: {
    background: '#ddd',
  },
  containerBoxStyle: {
  },
};

const headerFixedOption = {
  size: 'small',
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
  size: 'small',
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

class Test extends React.Component {
  renderTest() {
    return [
      <Container options={{ col: 'col-6 col-768-12' }}>
        <Header options={headerContainerOption}>
          <div className="item-top col-3">top</div>
          aaaaa
          <div className="item-bottom col-3 col-offset-2">bottom</div>

        </Header>
        <div>in</div>
        <AutoComplete options={autoCompleteOption} />
        <Button options={buttonOption} />
      </Container>,
      <Container options={{ col: 'col-5 col-768-12', offset: 'col-offset-1 col-offset-768-0' }} />,
      <Container options={{ col: 'col-5', offset: 'col-offset-1' }} />,
    ];
  }
  render() {
    return (
      <div>
        <Header options={headerFixedOption} />
        {this.renderTest()}
      </div>
    );
  }
}

ReactDOM.render(<Test option={buttonOption} />, document.getElementById('root'));
