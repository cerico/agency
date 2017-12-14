import React, { Component } from 'react';
class Radio extends Component {

  constructor(props){
    super(props);
    this.state={
      isSelected:false,
    };
  };

  onCheck(){
    this.setState({
      isSelected: !this.state.isSelected
    });

    this.props.isClicked()
  };

  render() {
    return (
        <div
          className={ "radiobutton " + (this.state.isSelected? "On" : " ")}
          onClick={this.onCheck.bind(this)}
        >
        </div>
    );
  }
}

export default Radio;
