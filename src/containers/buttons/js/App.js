import React, { Component } from 'react';
import Checkbox from './checkbox';
import Radio from './Radio';
import ToggleSwitch from './ToggleSwitch';
import PrimaryButton from './PrimaryButton';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <div id="form">
        <Checkbox/>
        <Radio/>
        <ToggleSwitch/>
        <PrimaryButton/>
      </div>

    );
  }
}

export default App;
