require('normalize.css/normalize.css');
require('styles/App.styl');

import React from 'react';

//let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  handleClick(e){
    if (this.props.arrange.isCenter) {
      this.props.inverse();
    } else {
      this.props.center();
    }
    e.stopPropagation();
    e.preventDefault();
  }


  componentDidMount() {
    var stageDOM = this.refs.stage,
      stageW = stageDOM.scrollWidth,
      stageH = stageDOM.scrollHeight,
      halfStageW = Math.ceil(stageW / 2),
      halfStageH = Math.ceil(stageH / 2);
      console.info("---->>>",stageH,halfStageW,halfStageH)

  }


  render() {
    var imageDatas = [{
      name:'nick'
    },{
      name: '张三'
    }]
    var  // controllerUnits = [],
    imgFigures = [];
    imageDatas.forEach(function(value,index){
        // console.info(value.name,index)
        imgFigures.push(
            <div key  = {index} 
            className = "react_name" 
            onClick = {this.handleClick.bind(this)}
              // onClick = {this.handleClick.bind(this)}
              >
              {value.name},{index}
            </div>
          )
    })

    return (
      <div className = "stage" ref = "stage">
        { /*<img src={yeomanImage} alt="Yeoman Generator" />*/ }
        <section className="notice" >{imgFigures}</section>
      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;