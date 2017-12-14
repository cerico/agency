import React, { Component } from 'react';
import styles from './header.css';
import { Link } from 'react-router';

const classNames = require('classnames');

const Header = () => {

	const leftCorner = classNames(styles.leftCorner, styles.box)
	const rightCorner = classNames(styles.rightCorner, styles.box)

	return (
		<div>
			<div className={leftCorner}>
				<div className={styles.openLabel}>
					{Date().split(" ")[1] + " " + Date().split(" ")[3]}
				</div>
			</div>
			<div className={rightCorner}>
				<a className={styles.checkWeather} target="_blank"><span>Check weather</span></a>
			</div>
		</div>
	);

}

export default Header;