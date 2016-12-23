require('normalize.css/normalize.css');
require('styles/App.styl');

import React from 'react';


class AppComponent extends React.Component {
  handleClick(index, items, e) {

    console.info(index,items)
    var stageDOM = items.refs.react_name,
        stageW = stageDOM.scrollWidth,
        stageH = stageDOM.scrollHeight,
        halfStageW = Math.ceil(stageW / 2),
        halfStageH = Math.ceil(stageH / 2);
    console.info('---->>>',stageW,stageH,halfStageW,halfStageH);
    e.stopPropagation();
    e.preventDefault();
  }

  //组件加载后
  componentDidMount() {
    console.info(this.refs.stage);
  }


  render() {
      var imageDatas = [{
        name: 'nick'
      }, {
        name: '张三'
      }]
      var imgFigures = [];
      imageDatas.forEach(function(value,index){
        var top = 0;
        if(index!=0){
          top=10
        }
        imgFigures.push(
         <div key = {index}
            className = "react_name"
            ref="react_name"
            style = {{marginTop:top}}
            onClick = {this.handleClick.bind('',index,this)}>
              {value.name},{index}
          </div>
        )
      }.bind(this));

      return(
        <div className = "stage" ref="stage">
          <section className = "notice">{imgFigures}</section>
        </div>
      )
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
