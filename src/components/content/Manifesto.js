import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../../actions/products.js';
import styles from './Manifesto.css';
import BodyColor from './Body.js';
import Person from './Person.js';
import Modal from './Modal.js';
const classNames = require('classnames');

class Manifesto extends Component {

  constructor(props) {
    super();
  }

  showContent(){
    
    return(
      <section>
          <div className={styles.mc}>
              <div id="manifesto" className={styles.sectionTitle}>The Manifesto</div>
              <div className={styles.sectionCopy}>
                  <p>There has been a ground at Bower Fold since 1906. The current main stand was built in 1996, with the covered stand at the Town End (Joe Jackson Stand) dating from 1994. The main stand, replaced a wooden one dating from 1909, which held 500 fans, before being converted to tip-up seating with a reduced capacity of around 400 persons. </p>

                  <p> The Lord Pendry Stand (named after the local politician Tom Pendry) opened in 2004, replacing a covered terrace dating from the 1950s. The Mottram End cover stems from construction starting in the 1970s and finishing in the mid '80s. The main stand, holding about 700 people, is all seated. Its opposite stand, the Lord Pendry stand has 652 seats.</p>

                  <p>Capacity is currently 6,500 with 1,200 seats.[1] Attendances for Stalybridge Celtic have been well short of capacity, with average crowds in the 2008–09 and 2009–10 seasons being around 500.[2].</p>
              </div>
          </div>
      </section>
      )
  }

  render() {
    return(
      this.showContent()
      )
  }
}

function mapStateToProps(state){
  return {
    events: state.events,
    sideText: state.sideText,
    modal: state.modal
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators,dispatch)
}

export default Manifesto = connect(mapStateToProps, mapDispatchToProps)(Manifesto);