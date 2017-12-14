import React, { Component } from 'react';
class Checkbox extends Component {

  constructor(props){
    super(props);
    this.state={
      isChecked:false
    };
  };

  onCheck(onClick){
    this.setState({
      isChecked: !this.state.isChecked
    });
  };

  render() {
    return (
        <div
          className={"checkbox " + (this.state.isChecked? "checked" : " ")}
          onClick={this.onCheck.bind(this)}
        >
        </div>
    );
  }
}

export default Checkbox;
