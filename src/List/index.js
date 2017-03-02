import React from 'react';
import update from 'react-addons-update';
import Curtain from '../Curtain';
// import Card from '../Card';
// import Button from '../Button';
import gum from '../Common/common.scss';
import css from './list.scss';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: props.options.show,
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
            show: { $set: false },
          }));
        },
      },
    };
    console.log(this.state);
  }

  componentWillReceiveProps(nextProps) {
    const newState = {
      show: nextProps.options.show,
      curtain: {
        ...nextProps.options.curtain,
        // opacity: 0,
        onClickFunc: (e) => {
          const curtain = e.target;
          console.log('b');
          nextProps.options.curtain.onClickFunc(e);
          this.setState(update(this.state, {
            curtain: {
              show: { $set: 'false' },
              opacity: { $set: 0 },
            },
            show: { $set: false },
          }));
        },
      },
    };
    console.log('newState', newState);
    this.setState(update(this.state, { $set: newState }));
  }

  renderChildren() {
    let array = [];
    let children = [];
    if (!this.props.children.length) {
      children.push(this.props.children);
    } else {
      children = this.props.children
    }
    this.target = [];
    console.log('this.state.show', this.state.show);
    if (this.state.show) {
      array = children.map((item, i) => {
        return (
          <div
            key={`list-renderChildren${i}${new Date()}`}
            className="gmu-item"
            ref={(target) => {
              if (!target) {
                return;
              }
              const that = this;
              this.target.push(target);
              console.log(target);
              setTimeout(() => {
                // console.log(target);
                console.log(that.state.show, this.target);
                this.target[i].dataset.active = that.state.show;
              }, 150 * i);
            }}
          >
            {item}
          </div>
        );
      });
      return array;
    }
    return '';
  }

  render() {
    const { curtain } = this.state;
    console.log('curtain', curtain);
    return (
      <div className="gmu-list">
        <Curtain options={curtain} />
        {this.renderChildren()}
      </div>
    );
  }
}

export default List;
