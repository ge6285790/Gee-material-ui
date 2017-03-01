import React from 'react';
import css from './curtain.scss';

const Curtain = (props) => {
  const { options = {} } = props;
  const { style = {}, opacity = '0', show = 'false', onClickFunc = () => {} } = options;
  const curtainStyle = {
    opacity,
    ...style,
  };
  console.log(show, opacity);
  return (
    <div
      className="gmu-curatin"
      data-active={show}
      style={curtainStyle}
      onClick={(e) => {
        const curtain = e.target;
        // curtain.opacity.
        onClickFunc(e);
        // setTimeout(() => {
        //   curtain.style.display = 'none';
        // }, 460);
      }}
    />
  );
};

Curtain.propTypes = {
  options: React.PropTypes.object.isRequired,
};

export default Curtain;
