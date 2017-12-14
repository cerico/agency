import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sidebar from './Sidebar.js';
import styles from './App.css';
import Header from './Header.js';

class Main extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className={styles.container}>
          <Sidebar sideText={this.props.sideText}/>
          <Header/>
          {React.cloneElement(this.props.children, this.props)}   
        </div>
    );
  }
}

function mapStateToProps(state){
  return {
    sideText: state.sideText,
  }
}

export default Main = connect(mapStateToProps, null)(Main);

