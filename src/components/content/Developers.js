import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../../actions/products.js';
import styles from './Developers.css';
import BodyColor from './Body.js';
import Person from './Person.js';
import Modal from './Modal.js';


const classNames = require('classnames');



class Developers extends Component {

  constructor(props) {
    super();
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    let modalState = 0
    let modalContent = ""
    this.state = { shouldIScroll: "" }
  }


  openModal(dev) {
    this.cstyles = classNames(styles.purp, styles.noScroll)
    this.modalContent = dev
    this.setState({ shouldIScroll: styles.noScroll })
  }

  closeModal() {
    this.modalContent = ""
    this.setState({ shouldIScroll: "" })
  }

  showContent() {
    const mainSection = classNames(styles.flex, styles.wbg, styles.wbgFadeBottom, styles.flexColumn, styles.itemsStart)
    const personList = classNames(styles.personList, styles.flex, styles.flexColumn)
    const person = classNames(styles.personListItem, styles.flex, styles.itemsCentre)

    return (<section id="devs" className={mainSection}>
      <BodyColor bodyColour={this.state.shouldIScroll} />
      <Modal modalContent={this.modalContent} showModal={this.openModal} closeModal={this.closeModal} />
      <div className={styles.sc}>
        <div className={styles.sectionTitle}>
          Meet The Developers
      </div>
        <div className={personList}>
          {this.props.people.map((person, i) => <Person key={person.name} name={person.name} manager={person.themanager} closeModal={this.closeModal} showModal={this.openModal} skills={person.skills} dev={person} leftOrRight={i % 2} />)}
        </div>
      </div>
    </section>
    )
  }

  render() {
    return (
      this.showContent()
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    people: state.people,
    sideText: state.sideText,
    modal: state.modal
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default Developers = connect(mapStateToProps, mapDispatchToProps)(Developers);