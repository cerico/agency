import React, { Component } from 'react';
class PrimaryButton extends Component {

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
        <button
          onClick={this.onCheck.bind(this)}
          className={"primary"}
        >
        PrimaryButton
        </button>
    );
  }
}

export default PrimaryButton;
