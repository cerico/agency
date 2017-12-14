import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../actions/actionCreators.js';
import styles from './Content.css';
import BodyColor from './Body.js';
import Person from './Person.js';
import Modal from './Modal.js';
import Manifesto from './Manifesto.js'
import Developers from './Developers.js';

const classNames = require('classnames');

class Content extends Component {

  constructor(props) {
    super();
    this.showContent = this.showContent.bind(this)
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll(e) {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const theManifesto = document.getElementById("manifesto").getBoundingClientRect().top
    const percentage = (window.outerHeight - theManifesto) / window.outerHeight
    if (percentage < 0.51) {
      this.props.changeSideText("The Developers")
    }
    if (percentage > 0.51) {
      this.props.changeSideText("The Manifesto")
    }
  }

  showContent() {
 
    return (
      <main className={styles.purp}>
        
          <Developers />
          <Manifesto />
      </main>
    )
  }

  render() {
    return (
      this.showContent()
    )
  }
}

function mapStateToProps(state) {
  return {
    events: state.events,
    sideText: state.sideText,
    modal: state.modal
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default Content = connect(mapStateToProps, mapDispatchToProps)(Content);

