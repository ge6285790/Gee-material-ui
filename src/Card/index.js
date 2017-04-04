import React from 'react';
import update from 'react-addons-update';
import gum from '../Common/common.scss';
import css from './card.scss';

const Card = (props) => {
  const col = props.options.col;
  const offset = props.options.offset || '';
  const animate = props.options.animate || '';
  return (
    <div className={`gmu gmu-card ${col} ${offset} ${animate}`} style={props.options.gmuContainerStyle} data-active={props.options.show || true} >
      <div className="card-box" style={props.options.containerBoxStyle}>
        {props.children}
      </div>
    </div>
  );
};

Card.propTypes = {
  options: React.PropTypes.object,
  children: React.PropTypes.array,
};

export default Card;
