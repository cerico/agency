import React from 'react';
import { connect } from 'react-redux';
const classNames = require('classnames');
import styles from './products.css';

import ProductItem from './ProductItem';

class Products extends React.Component  {

  render (){
    let display
    this.props.location.pathname === '/' ?
      display = 'flex' :
      display = 'none'
    
    const style = {
      general: {
        display: display
      }
    }
    return(
      <div className={styles.grid} style={style.general}>
        {this.props.products.length > 0 ? 
          this.props.products.map((product, index) =>
            <ProductItem product={product} key={index}/>) 
          : null
        }
      </div> 
    )
  }
}

const mapStateToProps = (state) => {
  return ({
      products: state.products,
    })
}

export default connect(mapStateToProps, null )(Products);
