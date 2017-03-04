import React from 'react';
import update from 'react-addons-update';
import equal from 'deep-equal';
import RadioButton from '../RadioButton';
import gum from '../Common/common.scss';
import css from './radioList.scss';

class RadioList extends React.Component {
  render() {
    return (
      <div className="gmu-radio-list">
        <RadioButton />
      </div>
    );
  }
}

export default RadioList;
