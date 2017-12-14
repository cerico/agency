import React, { Component } from 'react';
class TextField extends Component {

  constructor(props){
    super(props);
    this.state={
      isClicked:false
    };
  };

  onCheck(){
    this.setState({
      isClicked: !this.state.isClicked
    });

    this.props.isClicked()
  };

  render() {
    return (
      <div>
        <div className="TextField">
        <p className="TopName">Airline Name</p>
        <hr className="line"/>
        <p className="AirlineName">Airline Name</p>
        <p className="AirlineMain">Virgin Airlines</p>
        <hr/>
        </div>
      </div>
    );
  }
}

export default TextField;
