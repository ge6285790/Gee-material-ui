import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Container } from '../src';

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
  col: 'col-6 col-768-12',
  offset: 'col-offset-1 col-offset-768-0',
  gmuContainerStyle: {
    background: '#ddd',
  },
  containerBoxStyle: {

  },
};

class Test extends React.Component {
  renderTest() {
    return [<Container options={containerOption}><div>in</div><Button options={buttonOption} /></Container>, <Container options={{col: 'col-5 col-768-12', offset: 'col-offset-1 col-offset-768-0'}} />, <Container options={{col: 'col-5', offset: 'col-offset-1'}} />];
  }
  render() {
    return (
      <div>
        {this.renderTest()}
      </div>
    );
  }
}

ReactDOM.render(<Test option={buttonOption} />, document.getElementById('root'));
