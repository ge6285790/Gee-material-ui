import React from 'react';
import update from 'react-addons-update';
import gum from '../Common/common.scss';
import Avatar from '../Avatar';
import IsometricButton from '../IsometricButton';
import css from './chip.scss';

const Chip = (props) => {
  let avatarOptions = false;
  let isometricButtonOptions = false;
  let cursor = 'pointer';
  const { options = {} } = props;
  if (options.avatar) {
    avatarOptions = {
      // size: 'middle',
      src: 'http://orig05.deviantart.net/bc95/f/2015/263/4/4/stooooooooooop__by_lolwutburger-d9a8m15.png',
      iconClass: '',
      style: {
        height: '2em',
        width: '2em',
        lineHeight: 'normal',
      },
      onClickFunc: options.onClickAvatar || function () {},
    };
    avatarOptions = Object.assign(avatarOptions, options.avatar);
  }

  if (options.isometricButton) {
    isometricButtonOptions = {
      shapeClass: 'circle',
      content: '×',
      style: {
        background: 'rgba(0,0,0,.1)',
        height: '1.6em',
        width: '1.6em',
        lineHeight: '1.6em',
        marginRight: '0.2em',
        fontSize: options.customSize,
      },
      size: options.size || '',
      onClickFunc: options.onClickButton || function () {},
    };
    isometricButtonOptions = Object.assign(isometricButtonOptions, options.isometricButton);
  }


  const style = {
    fontSize: options.customSize,
  };

  const renderAvatar = () => {
    if (!avatarOptions) {
      return '';
    }
    return <Avatar options={avatarOptions} />;
  };

  const renderIsometricButton = () => {
    if (!isometricButtonOptions) {
      return '';
    }
    return <IsometricButton options={isometricButtonOptions} />;
  };

  if (!options.onClickText) {
    cursor = 'default';
    options.onClickText = () => {};
  }

  return (
    <div className={`gmu-chip ${options.size}`} style={style} >
      <div>
        {renderAvatar()}
        <span style={{ cursor }} onClick={(e) => { options.onClickText(e); }}>test</span>
        {renderIsometricButton()}
      </div>
    </div>
  );
};

Chip.propTypes = {
  options: React.PropTypes.object.isRequired,
};

export default Chip;
