import React, { Component } from 'react';
class t1 extends Component {

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
      <div className="swit">
          <div
            className={this.state.isON ? "slideON" : "slideOff"}
            onClick={this.onCheck.bind(this)}
          >
            <h1 className="conten">o</h1>
        </div>
      </div>
    );
  }
}

export default t1;
