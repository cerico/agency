import React, { Component } from 'react';

import styles from './Person.css';
import BodyColor from './Body.js';

const classNames = require('classnames');

class Person extends Component {

	constructor(props) {
		super();
	}

	render() {
		const showModal = this.props.showModal;
		const itemPic = require(`./img/${this.props.manager.split(" ")[1].toLowerCase()}.png`)
    const developer = this.props.dev
    console.log(itemPic)

		return (
			<div className={styles.item} onClick={() => showModal(developer)}>

				<div className={styles.itemThumbnail}>
					<img draggable="false" src={itemPic} alt={itemPic} />
				</div>

				<div className={styles.itemHeadings}>
					<div className={styles.itemName}>{this.props.manager}</div>
					<span className={styles.itemTitle}>{this.props.name}..</span>
					<span className={styles.itemSkills}>..{this.props.skills}</span>
				</div>
			</div>
		)
	}
}

export default Person;