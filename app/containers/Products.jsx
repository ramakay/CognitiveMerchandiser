import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import { fetchProducts } from 'actions/products';
import {Grid}  from 'components/Grid'
 
// const cx2 = classNames.bind(styles);

class Products extends Component {

  //Data that needs to be called before rendering the component
  //This is used for server side rending via the fetchComponentDataBeforeRender() method
  static need = [  // eslint-disable-line
    fetchProducts
  ]

  render() {
    return (
 <Grid elements="elements"> </Grid> 
    );
  }
}

Products.propTypes = {
 elements:PropTypes.array
};

function mapStateToProps(state) {
  return {
      elements: state.products.elements
  };
}

// Read more about where to place `connect` here:
// https://github.com/rackt/react-redux/issues/75#issuecomment-135436563
export default connect(mapStateToProps, {fetchProducts })(Products);
