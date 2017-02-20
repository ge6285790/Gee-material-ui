import React from 'react';
import css from './avatar.scss';

const Avatar = (props) => {
  const { options = {} } = props;
  const { size = 'middle', customSize = false, backgroundColor = false, color = false, boxShadow = false, animate = '', src = '', iconClass = false, onClickFunc = false } = options;
  let clickFunc = onClickFunc;
  let cursor = 'pointer';
  let width = false;
  let height = false;
  const renderIcon = () => {
    if (!iconClass) {
      return '';
    }
    return <i className={iconClass} />;
  };

  if (customSize) {
    width = customSize;
    height = customSize;
  }

  if (onClickFunc === false) {
    clickFunc = () => {};
    cursor = 'default';
  }

  const style = {
    backgroundImage: `url('${src}')`,
    backgroundColor,
    color,
    width,
    height,
    cursor,
  };

  return (
    <div
      style={style}
      className={`gmu-avatar ${size} ${boxShadow ? 'box-shadow' : ''} ${animate}`}
      onClick={(e) => { onClickFunc(e); }}
    >
      {renderIcon()}
      {props.children}
    </div>
  );
};

Avatar.propTypes = {
  options: React.PropTypes.object,
  children: React.PropTypes.array,
};

export default Avatar;
