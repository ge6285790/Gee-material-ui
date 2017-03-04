import React from 'react';
import Card from '../Card';
import gum from '../Common/common.scss';
import css from './menu.scss';

class Menu extends React.Component {
  componentDidMount() {
    const { show } = this.props.options;
    this.cardHeight = this.card.offsetHeight;
    if (!show) {
      this.card.style.opacity = 0;
      this.card.style.height = 0;
    }
  }

  componentWillReceiveProps(nextProps) {
    const { show } = nextProps.options;
    if (show) {
      this.card.style.opacity = 1;
      this.card.style.height = this.cardHeight + 'px';
    } else {
      this.card.style.opacity = 0;
      this.card.style.height = 0;
    }
  }

  render() {
    const { cardOption, show } = this.props.options;
    const cardAdjustOption = {
      ...cardOption,
      col: 'col-12',
      offset: '',
      gmuContainerStyle: {
        ...cardOption.gmuContainerStyle,
        display: 'inline-block',
      },
    };
    return (
      <div className={`gmu gmu-menu gmu-clearfix ${cardOption.col}`} data-active={show} ref={(card) => { this.card = card; }}>
        <Card options={cardAdjustOption}>
          {this.props.children}
        </Card>
      </div>
    );
  }
}

export default Menu;
