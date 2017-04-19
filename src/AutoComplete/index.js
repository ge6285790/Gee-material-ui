import React from 'react';
import update from 'react-addons-update';
import equal from 'deep-equal';
import gum from '../Common/common.scss';
import css from './autoComplete.scss';

class AutoComplete extends React.Component {
  constructor(props) {
    super(props);
    const { options = { animation: {} } } = props;
    this.state = {
      hrActive: 'false',
      titleActive: props.options.inputValue ? options.animation.titleActive || 'default' : 'false',
    };
  }

  componentWillUpdate(nextProps) {
    if (!equal(nextProps, this.props)) {
      const { options = { animation: {} } } = nextProps;
      this.setState(update(this.state, {
        titleActive: { $set: nextProps.options.inputValue ? options.animation.titleActive || 'default' : 'false' },
      }));
    }
  }

  render() {
    const { hrActive, titleActive } = this.state;
    const { options = { animation: {} } } = this.props;
    const {
      id = '',
      classNames = '',
      title = '',
      size = 'small',
      theme = '',
      animation,
      underLineColor = false,
      inputValue,
      onFocusFunc = () => {},
      onBlurFunc = () => {},
      onChangeFunc = () => {},
    } = options;
    const underLineStyle = {
      borderBottom: `2px solid ${underLineColor}`,
    };
    const titleActiveProps = options.animation.titleActive || 'default';
    return (
      <div id={id} className={`gmu gmu-auto-complete ${size} ${theme} ${classNames}`}>
        <span className="title" data-active={titleActive}>{title}</span>
        <input
          className="gmu-input"
          onFocus={(e) => {
            this.setState(update(this.state, {
              hrActive: { $set: 'true' },
              titleActive: { $set: titleActiveProps },
            }));
            onFocusFunc(e);
          }}
          onBlur={(e) => {
            if (e.target.value) {
              this.setState(update(this.state, {
                hrActive: { $set: 'false' },
              }));
              onBlurFunc(e);
              return;
            }
            this.setState(update(this.state, {
              hrActive: { $set: 'false' },
              titleActive: { $set: 'false' },
            }));
            onBlurFunc(e);
          }}
          onChange={(e) => {
            onChangeFunc(e);
          }}
          defaultValue={inputValue}
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
