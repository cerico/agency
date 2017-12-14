import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
const classNames = require('classnames');

import Content from '../components/content/index.js';
import Layout from '../components/layout/pindex.js';
import { getProducts } from '../actions/products';
import Buttons from './buttons//js/App';
import './buttons/styles/index.css';
import './buttons/styles/App.css';
console.log(Layout)
class App extends React.Component  {

  render(){

    return (
      <Buttons/>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return ({
      products: state.products
    })
}

export default connect(mapStateToProps, {getProducts})(App);

