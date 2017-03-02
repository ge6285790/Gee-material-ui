/* eslint no-undef: "error" */
/* eslint-env browser */

import React from 'react';
import update from 'react-addons-update';
import equal from 'deep-equal';
import gum from '../Common/common.scss';
import css from './scaleButton.scss';

class ScaleButton extends React.Component {
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
      clickDownClass: '',
      clickUpClass: '',
      buttonStyle: {
        range: 0,
        left: 0,
        top: 0,
        width: props.options.customSize,
        height: props.options.customSize,
        lineHeight: `${props.options.customSize}px`,
      },
      clickHidden: props.options.clickHidden,
      active: props.options.active,
    };
  }

  componentDidMount() {
    const { componentDidMountFunc = () => {} } = this.props.options;
    this.range = this.button.offsetWidth >= this.button.offsetHeight ?
                  this.button.offsetWidth : this.button.offsetHeight;
    componentDidMountFunc();
  }

  // componentWillUpdate(nextProps, nextState) {
  //   console.log('componentWillUpdate', nextProps);
  //   if (!equal(nextProps, this.props)) {
  //     console.log('componentWillUpdate', nextProps);
  //     const defaultStyle = { ...nextProps.options.style };
  //     this.clickResponseStyle = {
  //       background: defaultStyle.clickResponseColor,
  //     };
  //     this.hoverResponseStyle = {
  //       background: defaultStyle.hoverResponseColor,
  //     };
  //     this.buttonDivStyle = {
  //       color: defaultStyle.color,
  //       background: defaultStyle.background,
  //       padding: defaultStyle.padding,
  //     };
  //     this.contentWordStyle = {
  //       textOverflow: defaultStyle.textOverflow,
  //       overflow: defaultStyle.overflow,
  //       whiteSpace: defaultStyle.whiteSpace,
  //     };
  //     delete defaultStyle.clickResponseColor;
  //     delete defaultStyle.hoverResponseColor;
  //     delete defaultStyle.color;
  //     delete defaultStyle.background;
  //     delete defaultStyle.padding;
  //     delete defaultStyle.textOverflow;
  //     delete defaultStyle.overflow;
  //     delete defaultStyle.whiteSpace;
  //
  //     this.buttonStyle = {
  //       ...defaultStyle,
  //       width: nextProps.options.customSize,
  //       height: nextProps.options.customSize,
  //       lineHeight: `${nextProps.options.customSize}px`,
  //     };
  //
  //     this.state = {
  //       clickResponseArray: [],
  //       clickDownClass: '',
  //       clickUpClass: '',
  //       buttonStyle: {
  //         range: 0,
  //         left: 0,
  //         top: 0,
  //         width: nextProps.options.customSize,
  //         height: nextProps.options.customSize,
  //         lineHeight: `${nextProps.options.customSize}px`,
  //       },
  //       hide: nextProps.options.hide,
  //       active: nextProps.options.active,
  //     };
  //   }
  // }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', nextProps);
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
      width: nextProps.options.customSize,
      height: nextProps.options.customSize,
      lineHeight: `${nextProps.options.customSize}px`,
    };

    const newState = {
      clickResponseArray: [],
      clickDownClass: '',
      clickUpClass: '',
      buttonStyle: {
        range: 0,
        left: 0,
        top: 0,
        width: nextProps.options.customSize,
        height: nextProps.options.customSize,
        lineHeight: `${nextProps.options.customSize}px`,
      },
      clickHidden: nextProps.options.clickHidden,
      active: nextProps.options.active,
    };
    this.setState(update(this.state, { $set: newState }));
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
    const { clickResponseArray, clickDownClass, clickUpClass, clickHidden, active } = this.state;
    const boxShadowClass = boxShadow ? 'box-shadow' : '';

    console.log('clickDownClass, clickUpClass', clickDownClass, clickUpClass);
    return (
      <div className={`gum gmu-scale-button ${stateClass} ${widthClass} ${shapeClass}`}>
        <button
          className={widthClass ? `col-12 ${boxShadowClass} ${size} ${clickDownClass} ${clickUpClass}` : `${boxShadowClass} ${size} ${clickDownClass} ${clickUpClass}`}
          ref={(button) => { this.button = button; }}
          // onMouseDown={(e) => { this.appendClickResponse(); this.setTimeoutStop(); }}
          // onMouseUp={(e) => {
          //   this.fireClickResponse(e);
          //   onClickFunc(e);
          //   this.setTimeoutToClear();
          // }}
          data-active={active}
          onMouseDown={(e) => {
            this.setState(update(this.state, {
              clickDownClass: { $set: 'click-down' },
            }));
          }}
          onMouseUp={(e) => {
            this.setState(update(this.state, {
              clickUpClass: { $set: 'click-up' },
            }));
            onClickFunc(e);
            if (clickHidden) {
              setTimeout(() => {
                this.setState(update(this.state, {
                  active: { $set: 'true' }
                  // clickUpClass: { $set: '' },
                  // clickDownClass: { $set: '' },
                }));
              }, 220);
              return;
            }
            setTimeout(() => {
              this.setState(update(this.state, {
                // hide: { $set: 'true' }
                clickUpClass: { $set: '' },
                clickDownClass: { $set: '' },
              }));
            }, 600);
          }}
          style={this.buttonStyle}
        >
          <div style={this.buttonDivStyle}>
            <span className="color-click-response" style={this.hoverResponseStyle}/>
            <span className="color-hover-response" style={this.hoverResponseStyle}/>
            {/* { this.renderClickReponse() } */}
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

ScaleButton.defaultProps = {
  options: {},
};

ScaleButton.propTypes = {
  options: React.PropTypes.object.isRequired,
};

export default ScaleButton;
