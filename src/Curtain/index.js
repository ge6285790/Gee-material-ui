import React from 'react';
import css from './curtain.scss';

const Curtain = (props) => {
  const { options = {} } = props;
  const { style = {}, opacity = '0', show = 'false', onClickFunc = () => {} } = options;
  const curtainStyle = {
    opacity,
    ...style,
  };
  return (
    <div
      className="gmu-curatin"
      data-active={show}
      style={curtainStyle}
      onClick={(e) => {
        const curtain = e.target;
        onClickFunc(e);
      }}
    />
  );
};

Curtain.propTypes = {
  options: React.PropTypes.object.isRequired,
};

export default Curtain;
