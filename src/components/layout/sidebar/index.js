import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import styles from './sidebar.css';


const classNames = require('classnames');

const Sidebar = (props) => {



    const lastYear = classNames(styles.sidebarTitle, styles.justifyCenter ,styles.itemsCenter)
    const sideText = props.sideText;
    console.log(lastYear)

    return <div className={lastYear} title={sideText} />
}

export default Sidebar;

