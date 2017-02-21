import React from 'react';
import update from 'react-addons-update';
import Curtain from '../Curtain';
import Calendar from './calendar';
import gum from '../Common/common.scss';
import css from './dataPicker.scss';

class DataPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curtain: {
        ...props.options.curtain,
        opacity: 0,
        onClickFunc: (e) => {
          const curtain = e.target;
          // curtain.style.opacity = 0;
          props.options.curtain.onClickFunc(e);
          // this.setState(update(this.state, {
          //   curtain: {
          //     opacity: { $set: 0 },
          //   },
          // }));
          // setTimeout(() => {
          //   this.setState(update(this.state, {
          //     curtain: {
          //       show: { $set: 'false' },
          //     },
          //   }));
          // }, 460);
          this.setState(update(this.state, {
            curtain: {
              show: { $set: 'false' },
              opacity: { $set: 0 },
            },
            calendar: {
              show: { $set: 'false' },
            },
          }));
        },
      },
      calendar: {
        show: 'false',
      },
    };
  }

  render() {
    const { options = {} } = this.props;
    const { curtain, calendar } = this.state;
    return (
      <div className={`gmu-data-picker`}>
        <div
          onClick={(e) => {
            this.setState(update(this.state, {
              curtain: {
                show: { $set: 'true' },
                opacity: { $set: options.curtain.opacity },
              },
              calendar: {
                show: { $set: 'true' },
              },
            }));
          }}
        >
          aaaaaa
        </div>
        <Curtain options={curtain} />
        <Calendar options={calendar} />
      </div>
    );
  }
}

DataPicker.propTypes = {
  options: React.PropTypes.object.isRequired,
};

export default DataPicker;
