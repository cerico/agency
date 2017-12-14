import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sidebar from './sidebar';
import styles from './layout.css';
import Header from './header';

import { changeSideText } from '../../actions/products';


const classNames = require('classnames');

class Layout extends Component {



  showContent() {
    console.log(this.props)
    
    return (
      <div className={styles.container}>
        <Sidebar sideText={this.props.sideText}/>
          <Header/>
      </div>
    )
  }

  render() {
    console.log("g")
    return (
      this.showContent()
    )
  }
}

function mapStateToProps(state){
  console.log(state)
  return {
    sideText: state.sideText,
  }
}

export default  connect(mapStateToProps, null)(Layout);


