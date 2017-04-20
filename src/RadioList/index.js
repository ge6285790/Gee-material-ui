import React from 'react';
import update from 'react-addons-update';
import equal from 'deep-equal';
import RadioButton from '../RadioButton';
import gum from '../Common/common.scss';
import css from './radioList.scss';

class RadioList extends React.Component {
  renderRadioItem(radioOption, active, onClickFunc, selectOptionsIndex, size) {
    const radioArray = radioOption.map((item, i) => {
      let act = false;
      if (i === active) {
        act = true;
      }
      return (
        <div className={`gmu-radio-item ${size}`} key={`${item.label}${i}`}>
          <RadioButton options={{ active: act, onClickFunc, index: i, selectOptionsIndex, size }} />
          <span>{item.label}</span>
        </div>
      );
    });
    return radioArray;
  }

  renderRadioContainer() {
    const { id: eid = '', classNames = '', direction, selectOptions } = this.props.options;
    const directionClass = direction === 'vertical' ? 'radio-list-vertical' : 'radio-list-horizontal';
    return selectOptions.map((item, i) => {
      console.log('renderRadioContainer', item);
      const { checkStyle = {}, uncheckStyle = {}, title = '', size = '', radioOption, active, onClickFunc, containerStyle = {} } = item;
      const id = `r${new Date().getTime()}${Math.ceil(Math.random() * 100000)}${i}`;
      return (
        <div id={eid} className={`gmu-radio-list-container ${directionClass} ${id} ${classNames}`} key={`${title}${i}`} style={containerStyle}>
          <style>
            {`.${id} .fill-radio:after{
              border: ${checkStyle.border};
              background: ${checkStyle.background};
              border-radius: ${checkStyle.borderRadius};
              box-shadow: ${checkStyle.boxShadow};
            }.${id} .empty-radio{
              border: ${uncheckStyle.border};
              background: ${uncheckStyle.background};
              border-radius: ${uncheckStyle.borderRadius};
            }`}
          </style>
          <p>{item.title}</p>
          {this.renderRadioItem(item.radioOption, item.active, item.onClickFunc, i, size)}
        </div>
      );
    })
  }
  render() {
    console.log(this.props);
    // var addRule = (function(style){
    //     var sheet = document.head.appendChild(style).sheet;
    //     return function(selector, css){
    //         var propText = Object.keys(css).map(function(p){
    //             return p+":"+css[p]
    //         }).join(";");
    //         sheet.insertRule(selector + "{" + propText + "}", sheet.cssRules.length);
    //     }
    // })(document.createElement("style"));
    // addRule("p:before", {
    //   display: "block",
    //   width: "100px",
    //   height: "100px",
    //   background: "red",
    //   "border-radius": "50%",
    //   content: "''"
    // });
    return (
      <div className="gmu-radio-list">
        {this.renderRadioContainer()}
      </div>
    );
  }
}

export default RadioList;
