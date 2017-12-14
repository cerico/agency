import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import styles from './Modal.css';
import BodyColor from './Body.js';
import ArrowCircleLeft from 'react-icons/lib/fa/arrow-circle-left';
const classNames = require('classnames');

class Modal extends Component {

	constructor(props) {
		super();
		this.renderModalContent = this.renderModalContent.bind(this);
		this.fadeModal = this.fadeModal.bind(this)
	}

	componentDidUpdate() {
		const modale = ReactDOM.findDOMNode(this)
		if (this.props.modalContent) {
			setTimeout(() => {
				modale.classList.add(styles.fadeIn);
			}, 0);
		}
	}

	fadeModal() {
		const modale = ReactDOM.findDOMNode(this)
		modale.classList.add(styles.fadeOut);
		setTimeout(() => {
			this.props.closeModal()
		}, 400);
	}

	renderModalContent() {

		const personPic = require(`./img/${this.props.modalContent.themanager.split(" ")[1].toLowerCase()}.png`)
		const closeModal = this.props.closeModal;
		const modalClasses = classNames(styles.modal, styles.flex, styles.justifyCenter, styles.personBio, styles.fadeInTransition)

		return (
			<div className={modalClasses} >
				<ArrowCircleLeft size={40} onClick={() => this.fadeModal()} />
				<div className={styles.mc} >
					<h1 className={styles.sectionTitle}>{this.props.modalContent.themanager}</h1>
				</div>
				<div className={styles.personBioLinks}>
					<a className={styles.personBioExternalLink}></a>
					<a className={styles.personBioExternalLink}></a>
				</div>
				<img className={styles.personBioImage} src={personPic} />
				<p >{this.props.modalContent.blurbOne}</p>

			</div>
		)
	}
	render() {
		return (
			this.props.modalContent ? this.renderModalContent() : null
		)
	}
}

export default Modal
