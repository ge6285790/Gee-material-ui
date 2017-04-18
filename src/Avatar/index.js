import React from 'react';
import css from './avatar.scss';

const Avatar = (props) => {
  const { options = {} } = props;
  const { id, classNames, size = 'middle', customSize = false, backgroundColor = false, color = false, boxShadow = false, animate = '', src = '', iconClass = false, onClickFunc = false } = options;
  let clickFunc = onClickFunc;
  let cursor = 'pointer';
  // let width = false;
  // let height = false;
  const renderIcon = () => {
    if (!iconClass) {
      return '';
    }
    return <i className={iconClass} />;
  };

  if (customSize) {
    options.style.width = customSize;
    options.style.height = customSize;
  }

  if (onClickFunc === false) {
    clickFunc = () => {};
    cursor = 'default';
  }
  const style = {
    backgroundImage: src ? `url('${src}')` : '',
    ...options.style,
    cursor,
  };

  return (
    <div
      id={id}
      style={style}
      className={`gmu-avatar ${size} ${boxShadow ? 'box-shadow' : ''} ${animate} ${classNames}`}
      onClick={(e) => { onClickFunc(e); }}
    >
      {renderIcon()}
      {props.children}
    </div>
  );
};

Avatar.propTypes = {
  options: React.PropTypes.object,
  children: React.PropTypes.any,
  // style: React.PropTypes.object,
};

export default Avatar;
