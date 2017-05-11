### Grid

[Demo page](https://kyle-cheng-portfolio.herokuapp.com/portfolio/react-material-design#grid)

```js
<Grid options={{...}} />
```

options                   | introduction                                                        | parameters type
------------------------- | ------------------------------------------------------------------- | -------------------
haloColor                 | Click grid item will run halo animate, and this param could let user custom halo color. ex. haloColor: '#000' | String
gridList                  | An array include all items data. Item data is an object, It include seven option: id, classNames, defaultStyle, resultStyle, imageSrc, children, onClickFunc | Array
id (gridList's sub key)   | Set custom element id for Grid item component. ex. id: 'customId'      | String
classNames (gridList's sub key) | Set custom element classNames for Grid item component. ex. classNames: 'customClassNames'      | String
defaultStyle (gridList's sub key)| Set default style for Grid item component. ex. defaultStyle: {borderRadius: '16px', border: '2px solid #09f', ...}  | Object
resultStyle (gridList's sub key)| Set clicked result style for Grid item component. ex. resultStyle: {borderRadius: '3px', border: '15px solid #09f', ...}  | Object
imageSrc (gridList's sub key)| Set Grid item's image banner. ex. imageSrc: 'https://...'  | String
children (gridList's sub key)| Children is jsx element tag, user can use any components or tag here. ex. children: <div>this is content</div>  | JSX
onClickFunc (gridList's sub key)| Custom click event callback function. ex. onClickFunc: (e) => { alert('click'); } | Function


**example:**
```js
import { Grid } from 'gee-material-ui';
import update from 'react-addons-update';

const testGridContent = {
  id: '',
  classNames: '',
  defaultStyle: {},
  resultStyle: {},
  imageSrc: 'http://www.freeimageslive.com/galleries/workplace/office2/preview/office_celebrations.jpg',
  onClickFunc: (e) => {

  },
}

class Test extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      gridOption: {
        haloColor: '#80CBC4',

        gridList: [
          {
            id: '',
            classNames: '',
            active: 'false',
            defaultStyle: {
              boxShadow: '3px 3px 5px rgba(0,0,0,.5)',
              border: '2px solid #f60'
            },
            resultStyle: {
              boxShadow: '3px 3px 5px rgba(0,0,0,.0)',
              border: '13px solid #f60',
              background: '#09f'
            },
            imageSrc: 'http://www.freeimageslive.com/galleries/workplace/office2/preview/office_celebrations.jpg',
            onClickFunc: (e) => {
              alert('click!');
            },
            children: <div>1<br/>1<br/>1<br/>1<br/>1<br/>1</div>,
          },
          {
            ...testGridContent,
            children: <div>2<br/>2<br/>2<br/>2<br/>2<br/>2</div>,
          },
          {
            ...testGridContent
            children: <div>3<br/>3<br/>3<br/>3<br/>3<br/>3</div>,
          },
          {
            ...testGridContent
            children: <div>4<br/>4<br/>4<br/>4<br/>4<br/>4</div>,
          },
          {
            ...testGridContent
            children: <div>5<br/>5<br/>5<br/>5<br/>5<br/>5</div>,
          },
          {
            ...testGridContent
            children: <div>6<br/>6<br/>6<br/>6<br/>6<br/>6</div>,
          },
          {
            ...testGridContent
            children: <div>7<br/>7<br/>7<br/>7<br/>7<br/>7</div>,
          },
          {
            ...testGridContent
            children: <div>8<br/>8<br/>8<br/>8<br/>8<br/>8</div>,
          },
          {
            ...testGridContent
            children: <div>9<br/>9<br/>9<br/>9<br/>9<br/>9</div>,
          },
          {
            ...testGridContent
            children: <div>10<br/>10<br/>10<br/>10<br/>10<br/>10</div>,
          },
          {
            ...testGridContent
            children: <div>1<br/>1<br/>1<br/>1<br/>1<br/>1</div>,
          },
          {
            ...testGridContent
            children: <div>1aa<p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p></div>,
          },
          {
            ...testGridContent
            children: <div>1aa<p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p></div>,
          },
          {
            ...testGridContent
            children: <div>1aa<p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p></div>,
          },
          {
            ...testGridContent
            children: <div>1aa<p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p></div>,
          },
          {
            ...testGridContent
            children: <div>1aa<p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p></div>,
          },
          {
            ...testGridContent
            children: <div>1aa<p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p></div>,
          },
          {
            ...testGridContent
            children: <div>1aa<p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p></div>,
          },
          {
            ...testGridContent
            children: <div>1aa<p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p></div>,
          },
          {
            ...testGridContent
            children: <div>1aa<p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p></div>,
          },
          {
            ...testGridContent
            children: <div>1aa<p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p></div>,
          },
          {
            ...testGridContent
            children: <div>1aa<p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p></div>,
          },
          {
            ...testGridContent
            children: <div>1aa<p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p></div>,
          },
          {
            ...testGridContent
            children: <div>1aa<p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p></div>,
          },
          {
            ...testGridContent
            children: <div>1aa<p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p><p>cccc</p></div>,
          },
        ],
      },
    };
  }

  render() {
    return (
      <Grid options={this.state.gridOption} />
    );
  }
}
```
