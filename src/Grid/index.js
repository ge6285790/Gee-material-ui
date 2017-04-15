import React from 'react';
import equal from 'deep-equal';
import update from 'react-addons-update';
import ReactDOM from 'react-dom';
import ArcCard from '../ArcCard';
import gum from '../Common/common.scss';
import css from './grid.scss';

const ArcCardOption = {
  id: '',
  classNames: '',
  active: 'false',
  defaultStyle: {},
  resultStyle: {},
  imageSrc: 'http://www.freshwater-plumbing.com/images/www.elikarealestate.com/images/luxury-new-york-city-condo-apartments.jpg',
  onClickFunc: (e) => {

  }
};

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gridId: `gridId${new Date().getTime()}`,
      // onClickFunc: (e) => {
      //
      // },
      data: this.props.options.gridList,
      // data: [
      //   {
      //     id: '',
      //     classNames: '',
      //     active: 'false',
      //     defaultStyle: {},
      //     resultStyle: {},
      //     imageSrc: 'http://www.freshwater-plumbing.com/images/www.elikarealestate.com/images/luxury-new-york-city-condo-apartments.jpg',
      //     onClickFunc: (e) => {
      //
      //     },
      //     children: <div>1aa<p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p></div>,
      //   },
      //   {
      //     id: '',
      //     classNames: '',
      //     active: 'false',
      //     defaultStyle: {},
      //     resultStyle: {},
      //     imageSrc: 'http://www.freshwater-plumbing.com/images/www.elikarealestate.com/images/luxury-new-york-city-condo-apartments.jpg',
      //     onClickFunc: (e) => {
      //
      //     },
      //     children: <div>1aa<p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p></div>,
      //   },
      //   {
      //     id: '',
      //     classNames: '',
      //     active: 'false',
      //     defaultStyle: {},
      //     resultStyle: {},
      //     imageSrc: 'http://www.freshwater-plumbing.com/images/www.elikarealestate.com/images/luxury-new-york-city-condo-apartments.jpg',
      //     onClickFunc: (e) => {
      //
      //     },
      //     children: <div>1aa<p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p></div>,
      //   },
      //   {
      //     id: '',
      //     classNames: '',
      //     active: 'false',
      //     defaultStyle: {},
      //     resultStyle: {},
      //     imageSrc: 'http://www.freshwater-plumbing.com/images/www.elikarealestate.com/images/luxury-new-york-city-condo-apartments.jpg',
      //     onClickFunc: (e) => {
      //
      //     },
      //     children: <div>1aa<p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p></div>,
      //   },
      //   {
      //     id: '',
      //     classNames: '',
      //     active: 'false',
      //     defaultStyle: {},
      //     resultStyle: {},
      //     imageSrc: 'http://www.freshwater-plumbing.com/images/www.elikarealestate.com/images/luxury-new-york-city-condo-apartments.jpg',
      //     onClickFunc: (e) => {
      //
      //     },
      //     children: <div>1aa<p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p></div>,
      //   },
      //   {
      //     id: '',
      //     classNames: '',
      //     active: 'false',
      //     defaultStyle: {},
      //     resultStyle: {},
      //     imageSrc: 'http://www.freshwater-plumbing.com/images/www.elikarealestate.com/images/luxury-new-york-city-condo-apartments.jpg',
      //     onClickFunc: (e) => {
      //
      //     },
      //     children: <div>1aa<p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p></div>,
      //   },
      //   {
      //     id: '',
      //     classNames: '',
      //     active: 'false',
      //     defaultStyle: {},
      //     resultStyle: {},
      //     imageSrc: 'http://www.freshwater-plumbing.com/images/www.elikarealestate.com/images/luxury-new-york-city-condo-apartments.jpg',
      //     onClickFunc: (e) => {
      //
      //     },
      //     children: <div>1aa<p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p></div>,
      //   },
      //   {
      //     id: '',
      //     classNames: '',
      //     active: 'false',
      //     defaultStyle: {},
      //     resultStyle: {},
      //     imageSrc: 'http://www.freshwater-plumbing.com/images/www.elikarealestate.com/images/luxury-new-york-city-condo-apartments.jpg',
      //     onClickFunc: (e) => {
      //
      //     },
      //     children: <div>1aa<p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p></div>,
      //   },
      //   {
      //     id: '',
      //     classNames: '',
      //     active: 'false',
      //     defaultStyle: {},
      //     resultStyle: {},
      //     imageSrc: 'http://www.freshwater-plumbing.com/images/www.elikarealestate.com/images/luxury-new-york-city-condo-apartments.jpg',
      //     onClickFunc: (e) => {
      //
      //     },
      //     children: <div>1aa<p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p></div>,
      //   },
      //   {
      //     id: '',
      //     classNames: '',
      //     active: 'false',
      //     defaultStyle: {},
      //     resultStyle: {},
      //     imageSrc: 'http://www.freshwater-plumbing.com/images/www.elikarealestate.com/images/luxury-new-york-city-condo-apartments.jpg',
      //     onClickFunc: (e) => {
      //
      //     },
      //     children: <div>1aa<p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p></div>,
      //   },
      //   {
      //     id: '',
      //     classNames: '',
      //     active: 'false',
      //     defaultStyle: {},
      //     resultStyle: {},
      //     imageSrc: 'http://www.freshwater-plumbing.com/images/www.elikarealestate.com/images/luxury-new-york-city-condo-apartments.jpg',
      //     onClickFunc: (e) => {
      //
      //     },
      //     children: <div>1aa<p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p></div>,
      //   },
      //   {
      //     id: '',
      //     classNames: '',
      //     active: 'false',
      //     defaultStyle: {},
      //     resultStyle: {},
      //     imageSrc: 'http://www.freshwater-plumbing.com/images/www.elikarealestate.com/images/luxury-new-york-city-condo-apartments.jpg',
      //     onClickFunc: (e) => {
      //
      //     },
      //     children: <div>1aa<p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p></div>,
      //   },
      //   {
      //     id: '',
      //     classNames: '',
      //     active: 'false',
      //     defaultStyle: {},
      //     resultStyle: {},
      //     imageSrc: 'http://www.freshwater-plumbing.com/images/www.elikarealestate.com/images/luxury-new-york-city-condo-apartments.jpg',
      //     onClickFunc: (e) => {
      //
      //     },
      //     children: <div>1aa<p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p></div>,
      //   },
      //   {
      //     id: '',
      //     classNames: '',
      //     active: 'false',
      //     defaultStyle: {},
      //     resultStyle: {},
      //     imageSrc: 'http://www.freshwater-plumbing.com/images/www.elikarealestate.com/images/luxury-new-york-city-condo-apartments.jpg',
      //     onClickFunc: (e) => {
      //
      //     },
      //     children: <div>1aa<p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p></div>,
      //   },
      //   {
      //     id: '',
      //     classNames: '',
      //     active: 'false',
      //     defaultStyle: {},
      //     resultStyle: {},
      //     imageSrc: 'http://www.freshwater-plumbing.com/images/www.elikarealestate.com/images/luxury-new-york-city-condo-apartments.jpg',
      //     onClickFunc: (e) => {
      //
      //     },
      //     children: <div>1aa<p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p></div>,
      //   },
      //   {
      //     id: '',
      //     classNames: '',
      //     active: 'false',
      //     defaultStyle: {},
      //     resultStyle: {},
      //     imageSrc: 'http://www.freshwater-plumbing.com/images/www.elikarealestate.com/images/luxury-new-york-city-condo-apartments.jpg',
      //     onClickFunc: (e) => {
      //
      //     },
      //     children: <div>1aa<p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p></div>,
      //   },
      //   {
      //     id: '',
      //     classNames: '',
      //     active: 'false',
      //     defaultStyle: {},
      //     resultStyle: {},
      //     imageSrc: 'http://www.freshwater-plumbing.com/images/www.elikarealestate.com/images/luxury-new-york-city-condo-apartments.jpg',
      //     onClickFunc: (e) => {
      //
      //     },
      //     children: <div>1aa<p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p></div>,
      //   },
      //   {
      //     id: '',
      //     classNames: '',
      //     active: 'false',
      //     defaultStyle: {},
      //     resultStyle: {},
      //     imageSrc: 'http://www.freshwater-plumbing.com/images/www.elikarealestate.com/images/luxury-new-york-city-condo-apartments.jpg',
      //     onClickFunc: (e) => {
      //
      //     },
      //     children: <div>1aa<p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p></div>,
      //   },
      //   {
      //     id: '',
      //     classNames: '',
      //     active: 'false',
      //     defaultStyle: {},
      //     resultStyle: {},
      //     imageSrc: 'http://www.freshwater-plumbing.com/images/www.elikarealestate.com/images/luxury-new-york-city-condo-apartments.jpg',
      //     onClickFunc: (e) => {
      //
      //     },
      //     children: <div>1aa<p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p></div>,
      //   },
      //   {
      //     id: '',
      //     classNames: '',
      //     active: 'false',
      //     defaultStyle: {},
      //     resultStyle: {},
      //     imageSrc: 'http://www.freshwater-plumbing.com/images/www.elikarealestate.com/images/luxury-new-york-city-condo-apartments.jpg',
      //     onClickFunc: (e) => {
      //
      //     },
      //     children: <div>1aa<p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p></div>,
      //   },
      //   {
      //     id: '',
      //     classNames: '',
      //     active: 'false',
      //     defaultStyle: {},
      //     resultStyle: {},
      //     imageSrc: 'http://www.freshwater-plumbing.com/images/www.elikarealestate.com/images/luxury-new-york-city-condo-apartments.jpg',
      //     onClickFunc: (e) => {
      //
      //     },
      //     children: <div>1aa<p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p></div>,
      //   },
      //   {
      //     id: '',
      //     classNames: '',
      //     active: 'false',
      //     defaultStyle: {},
      //     resultStyle: {},
      //     imageSrc: 'http://www.freshwater-plumbing.com/images/www.elikarealestate.com/images/luxury-new-york-city-condo-apartments.jpg',
      //     onClickFunc: (e) => {
      //
      //     },
      //     children: <div>1aa<p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p></div>,
      //   },
      //   {
      //     id: '',
      //     classNames: '',
      //     active: 'false',
      //     defaultStyle: {},
      //     resultStyle: {},
      //     imageSrc: 'http://www.freshwater-plumbing.com/images/www.elikarealestate.com/images/luxury-new-york-city-condo-apartments.jpg',
      //     onClickFunc: (e) => {
      //
      //     },
      //     children: <div>1aa<p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p></div>,
      //   },
      //   {
      //     id: '',
      //     classNames: '',
      //     active: 'false',
      //     defaultStyle: {},
      //     resultStyle: {},
      //     imageSrc: 'http://www.freshwater-plumbing.com/images/www.elikarealestate.com/images/luxury-new-york-city-condo-apartments.jpg',
      //     onClickFunc: (e) => {
      //
      //     },
      //     children: <div>1aa<p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p></div>,
      //   },
      //   {
      //     id: '',
      //     classNames: '',
      //     active: 'false',
      //     defaultStyle: {},
      //     resultStyle: {},
      //     imageSrc: 'http://www.freshwater-plumbing.com/images/www.elikarealestate.com/images/luxury-new-york-city-condo-apartments.jpg',
      //     onClickFunc: (e) => {
      //
      //     },
      //     children: <div>1aa<p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p></div>,
      //   },
        // {
        //   id: '',
        //   classNames: '',
        //   active: 'false',
        //   defaultStyle: {},
        //   resultStyle: {},
        //   imageSrc: 'http://www.freshwater-plumbing.com/images/www.elikarealestate.com/images/luxury-new-york-city-condo-apartments.jpg',
        //   onClickFunc: (e) => {
        //
        //   },
        //   children: <div>1aa<p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p></div>,
        // },
        // {
        //   id: '',
        //   classNames: '',
        //   active: 'false',
        //   defaultStyle: {},
        //   resultStyle: {},
        //   imageSrc: 'http://www.freshwater-plumbing.com/images/www.elikarealestate.com/images/luxury-new-york-city-condo-apartments.jpg',
        //   onClickFunc: (e) => {
        //
        //   },
        //   children: <div>1aa<p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p></div>,
        // },
        // {
        //   id: '',
        //   classNames: '',
        //   active: 'false',
        //   defaultStyle: {},
        //   resultStyle: {},
        //   imageSrc: 'http://www.freshwater-plumbing.com/images/www.elikarealestate.com/images/luxury-new-york-city-condo-apartments.jpg',
        //   onClickFunc: (e) => {
        //
        //   },
        //   children: <div>1aa<p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p></div>,
        // },
        // {
        //   id: '',
        //   classNames: '',
        //   active: 'false',
        //   defaultStyle: {},
        //   resultStyle: {},
        //   imageSrc: 'http://www.freshwater-plumbing.com/images/www.elikarealestate.com/images/luxury-new-york-city-condo-apartments.jpg',
        //   onClickFunc: (e) => {
        //
        //   },
        //   children: <div>1aa<p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p></div>,
        // },
        // {
        //   id: '',
        //   classNames: '',
        //   active: 'false',
        //   defaultStyle: {},
        //   resultStyle: {},
        //   imageSrc: 'http://www.freshwater-plumbing.com/images/www.elikarealestate.com/images/luxury-new-york-city-condo-apartments.jpg',
        //   onClickFunc: (e) => {
        //
        //   },
        //   children: <div>1aa<p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p></div>,
        // },
        // {
        //   id: '',
        //   classNames: '',
        //   active: 'false',
        //   defaultStyle: {},
        //   resultStyle: {},
        //   imageSrc: 'http://www.freshwater-plumbing.com/images/www.elikarealestate.com/images/luxury-new-york-city-condo-apartments.jpg',
        //   onClickFunc: (e) => {
        //
        //   },
        //   children: <div>1aa<p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p></div>,
        // },
        // {
        //   id: '',
        //   classNames: '',
        //   active: 'false',
        //   defaultStyle: {},
        //   resultStyle: {},
        //   imageSrc: 'http://www.freshwater-plumbing.com/images/www.elikarealestate.com/images/luxury-new-york-city-condo-apartments.jpg',
        //   onClickFunc: (e) => {
        //
        //   },
        //   children: <div>1aa<p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p></div>,
        // },
        // {
        //   id: '',
        //   classNames: '',
        //   active: 'false',
        //   defaultStyle: {},
        //   resultStyle: {},
        //   imageSrc: 'http://www.freshwater-plumbing.com/images/www.elikarealestate.com/images/luxury-new-york-city-condo-apartments.jpg',
        //   onClickFunc: (e) => {
        //
        //   },
        //   children: <div>1aa<p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p></div>,
        // },
        // {
        //   id: '',
        //   classNames: '',
        //   active: 'false',
        //   defaultStyle: {},
        //   resultStyle: {},
        //   imageSrc: 'http://www.freshwater-plumbing.com/images/www.elikarealestate.com/images/luxury-new-york-city-condo-apartments.jpg',
        //   onClickFunc: (e) => {
        //
        //   },
        //   children: <div>1aa<p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p></div>,
        // },
        // {
        //   id: '',
        //   classNames: '',
        //   active: 'false',
        //   defaultStyle: {},
        //   resultStyle: {},
        //   imageSrc: 'http://www.freshwater-plumbing.com/images/www.elikarealestate.com/images/luxury-new-york-city-condo-apartments.jpg',
        //   onClickFunc: (e) => {
        //
        //   },
        //   children: <div>1aa<p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p></div>,
        // },
        // {
        //   id: '',
        //   classNames: '',
        //   active: 'false',
        //   defaultStyle: {},
        //   resultStyle: {},
        //   imageSrc: 'http://www.freshwater-plumbing.com/images/www.elikarealestate.com/images/luxury-new-york-city-condo-apartments.jpg',
        //   onClickFunc: (e) => {
        //
        //   },
        //   children: <div>1aa<p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p></div>,
        // },

      // ],
    };
    this.gridLength = this.state.data.length - 1;
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (!equal(nextProps, this.props) || !equal(nextState, this.state)) {
      return true;
    }
    return false;
  }
  componentDidMount() {
    // this.gmuGridHeight = this.gmuGrid.offsetHeight;
    // this.gmuGridWidth = this.gmuGrid.offsetWidth;
    this.gmuGridTop = this.gmuGrid.offsetTop;
    this.gmuGridLeft = this.gmuGrid.offsetLeft;
    console.log('this.gmuGrid.offsetWidth', this.gmuGrid.offsetWidth);
    this.gmuGrid.style.width = `${this.gmuGrid.offsetWidth}px`;

    this.scale = (this.gmuGrid.offsetHeight / this.gmuGrid.offsetWidth) * 2;
    const width = (parseInt(this.gmuGrid.style.width, 10) - 20) / 5;
    const height = width;
    const allArcCardElement = document.querySelector(`#${this.state.gridId}`).querySelectorAll('.gmu-arc-card');
    this.gmuGrid.style.height = `${Math.ceil(allArcCardElement.length / 5) * (height + 5)}px`;
    Array.prototype.forEach.call(allArcCardElement, (element, i) => {
      // const top = element.offsetTop + this.gmuGridTop;
      // console.log(element.offsetLeft, this.gmuGridLeft);
      // const left = element.offsetLeft + this.gmuGridLeft;
      // console.log(elementsStyle[i], element.style);
      const rowCount = Math.floor(i / 5);
      const top = rowCount === 0 ? 0 : rowCount * (height + 5);
      if (i % 5 === 0) {
        console.log('i');
        element.style.left = '0px';
        element.dataset.abLeft = `${(width / 2) - (this.gmuGrid.offsetWidth / 2)}px`;
        element.dataset.ckLeft = `${(width / 2)}px`;
      } else {
        element.style.left = `${(i % 5) * (width + 5)}px`;
        element.dataset.abLeft = `${(i % 5) * (width + 5) + (width / 2) - (this.gmuGrid.offsetWidth / 2)}px`;
        element.dataset.ckLeft = `${(i % 5) * (width + 5) + (width / 2)}px`;
      }
      element.style.position = 'absolute';
      element.style.width = `${width}px`;
      element.style.height = `${height}px`;
      element.style.top = `${top}px`;
      element.dataset.index = i;
      element.dataset.abTop = `${top + (height / 2) - (this.gmuGrid.offsetWidth / 2)}px`;
      element.dataset.ckTop = `${top + (height / 2)}px`;

    });
    this.containerBox.classList.add('active');
    document.addEventListener('click', this.handleClickOutside.bind(this), true);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(update(this.state, {
      data: { $set: nextProps.options.gridList },
    }));
  }

  handleClickOutside(e) {
    const domNode = ReactDOM.findDOMNode(this);
    if ((!domNode || !domNode.contains(e.target))) {
      //
      this.setState(update(this.state, {
        data: {
          [this.tempIndex]: {
            active: { $set: 'false' },
          },
        },
      }))
      this.circleCover.classList.add('setInit');
      setTimeout(() => {
        const containerBoxCard = this.containerBox.querySelectorAll('.gmu-arc-card[style*="z-index"]')
        Array.prototype.forEach.call(containerBoxCard, (element, i) => {
          element.style.zIndex = '1';
        });
        this.circleClick.classList.remove('active');
        this.gmuGrid.classList.remove('active');
        this.circleCover.classList.remove('active');
        this.circleCover.classList.remove('setInit');
        this.circleCover.setAttribute('style', '');
      }, 700);
    }
  }
  clickGrid(index) {
    const ele = document.querySelector(`[data-index="${index}"]`);
    // console.log(this.circleCover, ele.dataset.abTop, ele.dataset.abLeft, ele, ele.dataset);

    this.circleClick.style.top = ele.dataset.ckTop;
    this.circleClick.style.left = ele.dataset.ckLeft;
    this.circleClick.classList.add('active');

    this.gmuGrid.classList.add('active');
    ele.style.zIndex = 3;
    ele.style.pointerEvents = 'auto';
    this.circleCover.style.top = ele.dataset.abTop;
    this.circleCover.style.left = ele.dataset.abLeft;
    this.circleCover.classList.add('active');
    this.circleCover.style.transform = `scale3d(${this.scale}, ${this.scale}, ${this.scale})`;
    this.tempIndex = index;
    setTimeout(() => {
      this.setState(update(this.state, {
        data: {
          [index]: {
            active: { $set: 'true' },
          },
        },
      }))
    }, 400);

    // const methodType = index % 5;
    // const layer = Math.floor(index / 5);
    // const totalLayer = Math.floor(this.gridLength / 5);
    // switch (methodType) {
    //   case 2: {
    //     console.log(layer);
    //     for (let i = 0; i <= layer; i += 1) {
    //       const newLayer = layer - i;
    //       console.log(i, newLayer, layer)
    //       setTimeout(() => {
    //         this.hideList(index, layer, i).map(item => {
    //           document.querySelector(`[data-index="${item}"]`).classList.add('fadeOut');
    //         });
    //       }, i * 50);
    //     }
    //   }
    // }
  }
  renderGrid() {
    // const data = this.state.data;
    // if (data.length)
    // for()
    return this.state.data.map((item, i) => {
      // item.props.key = i;
      return (
        <ArcCard
          options={item}
          methods={{ clickGrid: () => { this.clickGrid(i); } }}
          key={i}
        >
          {item.children}
        </ArcCard>
      );
    });
  }
  render() {
    return (
      <div className="gmu-grid" id={this.state.gridId} ref={(div) => { this.gmuGrid = div; }}>
        <div className="gmu-container-box" ref={(div) => { this.containerBox = div; }}>
          {this.renderGrid()}
          <div className="gmu-circle-cover" ref={(div) => { this.circleCover = div; }}>
            <div className="padding-bottom" />
          </div>
        </div>
        <div className="gmu-circle-click" ref={(div) => { this.circleClick = div; }}>
          <div className="padding-bottom" />
        </div>
      </div>
    );
  }
}

export default Grid;
