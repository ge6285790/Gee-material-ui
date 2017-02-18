import React from 'react';
import css from './avatar.scss';

const Avatar = (props) => {
  const options = {
    size: 'small',
    boxShadow: true,
    animate: 'hover-to-square',
    src: 'http://orig05.deviantart.net/bc95/f/2015/263/4/4/stooooooooooop__by_lolwutburger-d9a8m15.png',
    iconClass: '',
    onClickFunc: () => {},
  };
  const { size = '', boxShadow = false, animate = '', src, iconClass = false, onClickFunc = () => {} } = options;

  const renderIcon = () => {
    if (!iconClass) {
      return '';
    }
    return <i className={iconClass} />;
  };

  const style = {
    backgroundImage: `url('${src}')`,
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

export default Avatar;
