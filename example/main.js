import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '../src';

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

ReactDOM.render(<Button option={buttonOption}/>, document.getElementById('root'));
