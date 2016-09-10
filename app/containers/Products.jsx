import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import { fetchProducts } from 'actions/products';
import Grid from 'components/Grid';
import { bindActionCreators } from 'redux'





class Products extends Component {

  //Data that needs to be called before rendering the component
  //This is used for server side rending via the fetchComponentDataBeforeRender() method
  static need =[ // eslint-disable-line
    fetchProducts
  ]

  render() {
    const {elems} = this.props;

    return (

      <Grid elems={elems} />

      );
  }
}

Products.propTypes = {
  elems: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    elems: state.products.elements
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(fetchProducts, dispatch),
  }
}
// Read more about where to place `connect` here:
// https://github.com/rackt/react-redux/issues/75#issuecomment-135436563
export default connect(mapStateToProps, mapDispatchToProps)(Products);