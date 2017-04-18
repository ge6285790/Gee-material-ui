import React from 'react';
import update from 'react-addons-update';
import equal from 'deep-equal';
import gum from '../Common/common.scss';
import css from './autoComplete.scss';

class AutoComplete extends React.Component {
  constructor(props) {
    super(props);
    const { options = { animation: {} } } = props;
    console.log('auto', props.options.inputValue ? options.animation.titleActive || 'default' : 'false', props.options.inputValue, options.animation.titleActive)
    this.state = {
      hrActive: 'false',
      titleActive: props.options.inputValue ? options.animation.titleActive || 'default' : 'false',
    };
  }

  componentWillUpdate(nextProps) {
    if (!equal(nextProps, this.props)) {
      const { options = { animation: {} } } = nextProps;
      console.log('auto', nextProps.options.inputValue ? options.animation.titleActive || 'default' : 'false', nextProps.options.inputValue, options.animation.titleActive)
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
    console.log('AutoComplete', this.state);
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
            onFocusFuncCallback(e);
          }}
          onBlur={(e) => {
            if (e.target.value) {
              this.setState(update(this.state, {
                hrActive: { $set: 'false' },
              }));
              onBlurFuncCallback(e);
              return;
            }
            this.setState(update(this.state, {
              hrActive: { $set: 'false' },
              titleActive: { $set: 'false' },
            }));
            onBlurFuncCallback(e);
          }}
          onChange={(e) => {
            onChangeFuncCallback(e);
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
