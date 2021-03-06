import React from 'react';
import Curtain from '../Curtain';
import Card from '../Card';
import gum from '../Common/common.scss';
import css from './drawer.scss';

class Drawer extends React.Component {
  renderCurtain() {
    const { curtainOption = false, show = false } = this.props.options;
    if (curtainOption) {
      const curtainAdjustOption = {
        ...curtainOption,
        show,
      };
      return <Curtain options={curtainAdjustOption} />;
    }
    return '';
  }

  render() {
    const { cardOption, show, position = 'left' } = this.props.options;
    const cardAdjustOptions = {
      ...cardOption,
      gmuCardStyle: {
        height: '100%',
        position: 'fixed',
        left: '0px',
        top: '0px',
        padding: '0px',
        zIndex: 10,
        ...cardOption.gmuCardStyle,
      },
      cardBoxStyle: {
        width: '100%',
        height: '100%',
        ...cardOption.cardBoxStyle,
      },
    };

    return (
      <div className="gmu gmu-drawer" data-active={show} data-position={position} >
        {this.renderCurtain()}
        <Card options={cardAdjustOptions}>
          {this.props.children}
        </Card>
      </div>
    );
  }
}

export default Drawer;
