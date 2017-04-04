import React from 'react';
import update from 'react-addons-update';
import Curtain from '../Curtain';
import Card from '../Card';
import Button from '../Button';
import gum from '../Common/common.scss';
import css from './dialog.scss';

class Dialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dialog: props.options.dialog,
      card: {
        show: 'false',
        animate: 'fadeIn',
        ...props.options.card,
      },
      // dataPicker: props.options.dataPicker,
      curtain: {
        ...props.options.curtain,
        opacity: 0,
        onClickFunc: (e) => {
          const curtain = e.target;
          props.options.curtain.onClickFunc(e);
          this.setState(update(this.state, {
            curtain: {
              show: { $set: 'false' },
              opacity: { $set: 0 },
            },
            card: {
              show: { $set: 'false' },
            },
          }));
        },
      },
      confirm: {
        submit: {
          ...props.options.confirm.submit,
          onClickFunc: (e) => {
            props.options.confirm.submit.onClickFunc(e);
            this.setState(update(this.state, {
              curtain: {
                show: { $set: 'false' },
                opacity: { $set: 0 },
              },
              card: {
                show: { $set: 'false' },
              },
            }));
          },
        },
        cancel: {
          ...props.options.confirm.cancel,
          onClickFunc: (e) => {
            props.options.confirm.cancel.onClickFunc(e);
            this.setState(update(this.state, {
              curtain: {
                show: { $set: 'false' },
                opacity: { $set: 0 },
              },
              card: {
                show: { $set: 'false' },
              },
            }));
          },
        },
      },
    };
  }

  renderContent() {
    const {
      type,
      style,
      size,
      theme,
      content,
      iconClassBefore,
      iconClassAfter,
    } = this.state.dialog;

    switch (type) {
      case 'text': {
        return <span className={`${size} ${theme}`} style={style}>{content}</span>;
      }
      case 'button': {
        const buttonOption = {
          style,
          iconClassBefore: '',
          iconClassAfter: '',
          // boxShadow: true,
          content,
          stateClass: theme, // malibu / charade / shark / froly / fern
          // widthClass: 'col-6', // col-1 ~ col-12
          size, // x-large / large / middle / small
        };
        return <Button options={buttonOption} />;
      }
      case 'icon': {
        return '';
      }
      default: {
        return '';
      }
    }
  }

  renderConfirmButtons() {
    const { confirm } = this.state;
    if (confirm) {
      return (
        <div className="gmu-text-right">
          <Button options={confirm.cancel} />
          <Button options={confirm.submit} />
        </div>
      );
    }
    return '';
  }

  render() {
    const { options = {} } = this.props;
    const { curtain, calendar, card, dialog } = this.state;
    console.log(this.props.children);
    return (
      <div className={`gmu-dialog`}>
        <div
          onClick={(e) => {
            this.setState(update(this.state, {
              curtain: {
                show: { $set: 'true' },
                opacity: { $set: options.curtain.opacity },
              },
              card: {
                show: { $set: 'true' },
              },
            }));
          }}
        >
          <i className={dialog.iconClassBefore} />
          {this.renderContent()}
          <i className={dialog.iconClassAfter} />
        </div>
        <Curtain options={curtain} />
        <Card options={card}>
          {this.props.children}
          {this.renderConfirmButtons()}
        </Card>
      </div>
    );
  }
}

Dialog.propTypes = {
  options: React.PropTypes.object.isRequired,
  children: React.PropTypes.array.isRequired,
};

export default Dialog;
