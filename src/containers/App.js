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
import '../index.css';
console.log(Layout)
class App extends React.Component  {

  render(){

    return (
      <div className="mate">
      <Layout/>
      <Content/>
      </div>
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

