import React from 'react';
import update from 'react-addons-update';
import gum from '../Common/common.scss';
import css from './container.scss';

const Container = (props) => {
  const col = props.options.col;
  const offset = props.options.offset || '';
  return (
    <div className={`gmu gmu-container ${col} ${offset}`} style={props.options.gmuContainerStyle}>
      <div className="container-box" style={props.options.containerBoxStyle}>
        {props.children}
      </div>
    </div>
  );
};

Container.propTypes = {
  options: React.PropTypes.object,
  children: React.PropTypes.array,
};

export default Container;
