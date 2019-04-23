// Code DigitalClicker Component Here
import React, { Component } from 'react';

class DigitalClicker extends Component{
    constructor(){
    super();
    this.state = {
      timeClicked: 0
    };
  }

handleClick = () =>{
  this.setState({
    timeClicked: this.state.timeClicked + 1
  });
}

  render(){
    return(
    <button onClick={this.handleClick}>{this.state.timeClicked}</button>
    )
  }
}


export default DigitalClicker;
