import React from 'react';
import is from 'is_js';
import update from 'react-addons-update';
import css from './button.scss';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickResponseArray: [],
      buttonStyle: {
        range: 0,
        left: 0,
        top: 0,
      },
      safari: is.safari(),
    };
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
    const { buttonStyle, clickResponseArray } = this.state;
    const range = this.button.offsetWidth >= this.button.offsetHeight ?
                  this.button.offsetWidth : this.button.offsetHeight;
    const state = {
      active: 'true',
      style: {
        transform: this.state.safari ? `scale3d(${range * 2}, ${range * 2}, 1) translate3d(50%, 50%, 0)` : `scale(${range * 2})`,
        left: e.pageX - this.button.offsetLeft,
        top: e.pageY - this.button.offsetTop,
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
    const { style = {}, content = 'Button', iconClassBefore = '', iconClassAfter = '' } = this.props;
    const { clickResponseArray } = this.state;
    return (
      <div className="gmu-button">
        <button
          ref={(button) => { this.button = button; }}
          onMouseDown={(e) => { this.appendClickResponse(); this.setTimeoutStop(); }}
          onMouseUp={(e) => { this.fireClickResponse(e); this.setTimeoutToClear(); }}
        >
          <div>
            <span className="color-hover-response" />
            { this.renderClickReponse() }
            <span>
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

Button.defaultProps = {
  style: {},
};

Button.propTypes = {
  style: React.PropTypes.object.isRequired,
  content: React.PropTypes.string.isRequired,
  iconClassBefore: React.PropTypes.string.isRequired,
  iconClassAfter: React.PropTypes.string.isRequired,
};

export default Button;
