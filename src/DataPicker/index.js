import React from 'react';
import update from 'react-addons-update';
import Calendar from './calendar';
import Curtain from '../Curtain';
import AutoComplete from '../AutoComplete';
import gum from '../Common/common.scss';
import css from './dataPicker.scss';

class DataPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataPicker: props.options.dataPicker,
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
    this.getSelectDay = this.getSelectDay.bind(this);
  }

  getSelectDay(date) {
    if (!date) {
      this.setState(update(this.state, {
        calendar: {
          show: { $set: 'false' },
        },
        curtain: {
          show: { $set: 'false' },
          opacity: { $set: 0 },
        },
      }));
      return this.state.dataPicker.inputValue;
    }
    this.setState(update(this.state, {
      dataPicker: {
        updateValue: { $set: date },
      },
      calendar: {
        show: { $set: 'false' },
      },
      curtain: {
        show: { $set: 'false' },
        opacity: { $set: 0 },
      },
    }));
    setTimeout(() => {
      console.log('this.state', this.state);
    }, 500);
    return this.state.dataPicker.inputValue;
  }

  render() {
    const { options = {} } = this.props;
    const { curtain, calendar, dataPicker } = this.state;
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
          <AutoComplete options={dataPicker} />
        </div>
        <Curtain options={curtain} />
        <Calendar options={calendar} methods={{ getSelectDay: this.getSelectDay }} />
      </div>
    );
  }
}

DataPicker.propTypes = {
  options: React.PropTypes.object.isRequired,
};

export default DataPicker;
