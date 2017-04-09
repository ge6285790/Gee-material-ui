import React from 'react';
import equal from 'deep-equal';
import gum from '../Common/common.scss';
import css from './arcCard.scss';

class ArcCard extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  shouldComponentUpdate(nextProps, nextState) {
    // console.log(equal(nextProps.options, this.props.options) , equal(nextState, this.state), nextProps.options, this.props.options, (!equal(nextState, this.state) && nextState !== null));
    if (!equal(nextProps.options, this.props.options) || (!equal(nextState, this.state) && nextState !== null)) {
      return true;
    }
    return false;
  }
  renderImage() {
    // console.log(this.props.options);
    if (this.props.options && this.props.options.imageSrc) {
      return (
        <div className="gmu-arc-card-image" style={{ backgroundImage: `url(${this.props.options.imageSrc})` }} />
      );
    }
    return '';
  }
  render() {
    const { options = {}, methods } = this.props;
    const { classNames = '', active = 'false', defaultStyle = {}, resultStyle = {}, imageSrc = false, onClickFunc = (e) => {} } = options;
    let onClickMethods = onClickFunc;
    if (methods) {
      onClickMethods = (e) => {
        methods.clickGrid();
        onClickFunc(e);
      };
    }
    console.log('render')
    return (
      <div
        className={`gmu-arc-card ${classNames}`}
        data-active={active}
        style={active === 'false' ? defaultStyle : resultStyle}
        onClick={(e) => {
          onClickMethods(e);
        }}
      >
        {this.renderImage()}
        {this.props.children}
      </div>
    );
  }
}

export default ArcCard;
