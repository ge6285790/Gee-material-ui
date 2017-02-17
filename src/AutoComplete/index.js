import React from 'react';
import update from 'react-addons-update';
import gum from '../Common/common.scss';
import css from './autoComplete.scss';

class AutoComplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hrActive: 'false',
      titleActive: 'false',
    }
  }

  render() {
    const { hrActive, titleActive } = this.state;
    const { options = { animation: {} } } = this.props;
    const {
      title = '',
      size = 'small',
      theme = '',
      animation,
      underLineColor = 'false',
      inputValue,
      onFocusFuncCallback = () => {},
      onBlurFuncCallback = () => {},
      onChangeFuncCallback = () => {},
    } = options;
    const underLineStyle = {
      borderBottom: `2px solid ${underLineColor}`,
    };
    const titleActiveProps = options.animation.titleActive || 'default';
    return (
      <div className={`gmu gmu-auto-complete ${size} ${theme}`}>
        <span className="title" data-active={titleActive}>{title}</span>
        <input
          className="gmu-input"
          onFocus={(e) => {
            this.setState(update(this.state, {
              hrActive: { $set: 'true' },
              titleActive: { $set: titleActiveProps },
            }));
            onFocusFuncCallback();
          }}
          onBlur={(e) => {
            this.setState(update(this.state, {
              hrActive: { $set: 'false' },
              titleActive: { $set: 'false' },
            }));
            onBlurFuncCallback();
          }}
          onChange={(e) => {
            onChangeFuncCallback();
          }}
          value={inputValue}
        />
        <div className="gmu-underline">
          <hr />
          <hr className="gmu-hr-animate" data-active={hrActive} style={underLineStyle !== 'false' ? underLineStyle : {}} />
        </div>
      </div>
    );
  }
}

// options
AutoComplete.propTypes = {
  options: React.PropTypes.object.isRequired,
};

export default AutoComplete;
