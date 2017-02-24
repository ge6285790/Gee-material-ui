/* eslint no-undef: "error" */
/* eslint-env browser */

import React from 'react';
import update from 'react-addons-update';
import equal from 'deep-equal';
import gum from '../Common/common.scss';
import css from './isometricButton.scss';

class IsometricButton extends React.Component {
  constructor(props) {
    super(props);
    const defaultStyle = { ...props.options.style };
    this.clickResponseStyle = {
      background: defaultStyle.clickResponseColor,
    };
    this.hoverResponseStyle = {
      background: defaultStyle.hoverResponseColor,
    };
    this.buttonDivStyle = {
      color: defaultStyle.color,
      background: defaultStyle.background,
      padding: defaultStyle.padding,
    };
    this.contentWordStyle = {
      textOverflow: defaultStyle.textOverflow,
      overflow: defaultStyle.overflow,
      whiteSpace: defaultStyle.whiteSpace,
    };
    delete defaultStyle.clickResponseColor;
    delete defaultStyle.hoverResponseColor;
    delete defaultStyle.color;
    delete defaultStyle.background;
    delete defaultStyle.padding;
    delete defaultStyle.textOverflow;
    delete defaultStyle.overflow;
    delete defaultStyle.whiteSpace;

    this.buttonStyle = {
      ...defaultStyle,
      width: props.options.customSize,
      height: props.options.customSize,
      lineHeight: `${props.options.customSize}px`,
    };

    this.state = {
      clickResponseArray: [],
      buttonStyle: {
        range: 0,
        left: 0,
        top: 0,
        width: props.options.customSize,
        height: props.options.customSize,
        lineHeight: `${props.options.customSize}px`,
      },
    };
  }

  componentDidMount() {
    const { componentDidMountFunc = () => {} } = this.props.options;
    this.range = this.button.offsetWidth >= this.button.offsetHeight ?
                  this.button.offsetWidth : this.button.offsetHeight;
    componentDidMountFunc();
  }

  componentWillUpdate(nextProps, nextState) {
    if (!equal(nextProps, this.props)) {
      const defaultStyle = { ...nextProps.options.style };
      this.clickResponseStyle = {
        background: defaultStyle.clickResponseColor,
      };
      this.hoverResponseStyle = {
        background: defaultStyle.hoverResponseColor,
      };
      this.buttonDivStyle = {
        color: defaultStyle.color,
        background: defaultStyle.background,
        padding: defaultStyle.padding,
      };
      this.contentWordStyle = {
        textOverflow: defaultStyle.textOverflow,
        overflow: defaultStyle.overflow,
        whiteSpace: defaultStyle.whiteSpace,
      };
      delete defaultStyle.clickResponseColor;
      delete defaultStyle.hoverResponseColor;
      delete defaultStyle.color;
      delete defaultStyle.background;
      delete defaultStyle.padding;
      delete defaultStyle.textOverflow;
      delete defaultStyle.overflow;
      delete defaultStyle.whiteSpace;

      this.buttonStyle = {
        ...defaultStyle,
        width: this.props.options.customSize,
        height: this.props.options.customSize,
        lineHeight: `${this.props.options.customSize}px`,
      };

      this.state = {
        clickResponseArray: [],
        buttonStyle: {
          range: 0,
          left: 0,
          top: 0,
          width: this.props.options.customSize,
          height: this.props.options.customSize,
          lineHeight: `${this.props.options.customSize}px`,
        },
      };
    }
  }

  componentWillUnmount() {
    clearTimeout(this.setTime);
  }

  setTimeoutStop() {
    clearTimeout(this.setTime);
  }

  setTimeoutToClear() {
    const that = this;
    if (this.state.clickResponseArray.length !== 0) {
      this.setTime = setTimeout(() => {
        that.clearClickResponse();
        that.setTimeoutToClear();
      }, 1500);
    }
  }

  appendClickResponse() {
    const { clickResponseArray } = this.state;
    const newArray = [...clickResponseArray];
    newArray.push({
      active: 'false',
      style: {
        transform: 'scale(0)',
        left: 0,
        top: 0,
      },
    });
    this.setState(update(this.state, {
      clickResponseArray: { $set: newArray },
    }));
  }

  fireClickResponse(e) {
    const { clickResponseArray } = this.state;
    const state = {
      active: 'true',
      style: {
        transform: `scale(${(this.range / 21) * 2.5})`,
        left: e.pageX - this.button.getBoundingClientRect().left - window.scrollX,
        top: e.pageY - this.button.getBoundingClientRect().top - window.scrollY,
        ...this.clickResponseStyle,
      },
    };

    this.setState(update(this.state, {
      clickResponseArray: {
        [clickResponseArray.length - 1]: { $set: state },
      },
    }));
  }

  clearClickResponse() {
    const { clickResponseArray } = this.state;
    const newArray = [...clickResponseArray];
    newArray.shift();
    this.setState(update(this.state, {
      clickResponseArray: { $set: newArray },
    }));
  }

  renderClickReponse() {
    const { buttonStyle } = this.state;
    let clickResponseArray = [];

    if (this.state.clickResponseArray.length !== 0) {
      clickResponseArray = this.state.clickResponseArray.map((item, i) => <span className="color-click-response" style={item.style} data-active={item.active} ref={(span) => { this.spanAnimate = span; }} key={`color-click-response${i}`} />);
    }
    return clickResponseArray;
  }

  render() {
    const { stateClass, size = '', content = '', iconClassBefore = '', iconClassAfter = '', widthClass = '', boxShadow = false, shapeClass = '', onClickFunc = () => {} } = this.props.options;
    const { clickResponseArray } = this.state;
    const boxShadowClass = boxShadow ? 'box-shadow' : '';
    return (
      <div className={`gum gmu-isometric-button ${stateClass} ${widthClass} ${shapeClass}`}>
        <button
          className={widthClass ? `col-12 ${boxShadowClass} ${size}` : `${boxShadowClass} ${size}`}
          ref={(button) => { this.button = button; }}
          onMouseDown={(e) => { this.appendClickResponse(); this.setTimeoutStop(); }}
          onMouseUp={(e) => {
            this.fireClickResponse(e);
            onClickFunc(e);
            this.setTimeoutToClear();
          }}
          style={this.buttonStyle}
        >
          <div style={this.buttonDivStyle}>
            <span className="color-hover-response" style={this.hoverResponseStyle}/>
            { this.renderClickReponse() }
            <span className="content-word" style={this.contentWordStyle}>
              <i className={iconClassBefore} />
              {content}
              <i className={iconClassAfter} />
            </span>
          </div>
        </button>
      </div>
    );
  }
}

IsometricButton.defaultProps = {
  options: {},
};

IsometricButton.propTypes = {
  options: React.PropTypes.object.isRequired,
};

export default IsometricButton;
