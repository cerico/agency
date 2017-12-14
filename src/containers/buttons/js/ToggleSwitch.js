import React, { Component } from 'react';
class ToggleSwitch extends Component {

  constructor(props){
    super(props);
    this.state={
      isON:false,
    };
  };

  onCheck(){
    this.setState({
      isON: !this.state.isON
    });

    this.props.isClicked()
  };

  render() {
    return (
      <div
        className={"switch " + (this.state.isON ? "on" : " ")}
        onClick={this.onCheck.bind(this)}
      >
      </div>
    );
  }
}

export default ToggleSwitch;
