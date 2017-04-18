import React from 'react';
import update from 'react-addons-update';
import gum from '../Common/common.scss';
import css from './header.scss';

const Header = (props) => {
  const { gmuHeaderStyle = {}, size = '', status = '', theme = '', boxShadow = '' } = props.options;
  return (
    <div className={`gmu gmu-header ${status} ${size} ${theme} ${boxShadow}`} style={gmuHeaderStyle}>
      {props.children}
    </div>
  );
};

Header.propTypes = {
  options: React.PropTypes.object,
  children: React.PropTypes.array,
};

export default Header;
