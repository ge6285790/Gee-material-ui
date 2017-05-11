import React from 'react';
import update from 'react-addons-update';
import gum from '../Common/common.scss';
import css from './card.scss';

const Card = (props) => {
  const col = props.options.col;
  const id = props.options.id;
  const offset = props.options.offset || '';
  const animate = props.options.animate || '';
  const classNames = props.options.classNames || '';
  return (
    <div id={id} className={`gmu gmu-card ${col} ${offset} ${animate} ${classNames}`} style={props.options.gmuCardStyle} data-active={props.options.show || true} >
      <div className="card-box" style={props.options.cardBoxStyle}>
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
