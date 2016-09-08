import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import { fetchProducts } from 'actions/products';
// import Grid from 'ship-components-grid';
// console.log(Grid)
// const cx2 = classNames.bind(styles);

class Products extends Component {

  //Data that needs to be called before rendering the component
  //This is used for server side rending via the fetchComponentDataBeforeRender() method
  static need = [  // eslint-disable-line
    fetchProducts
  ]

  render() {
        const {elems } = this.props;

    return (
      <div>

      <div>
<ul>
{this.props.elems.map(function(tile,i){
  return <li  key={i}>{tile.name}</li>;
})}
</ul> </div>
 <div> 
    
 </div>  
 </div>
    );
  }
}

Products.propTypes = {
 elems: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  console.log(typeof state.products.elements)
  return {
      elems: state.products.elements
  };
}

// Read more about where to place `connect` here:
// https://github.com/rackt/react-redux/issues/75#issuecomment-135436563
export default connect(mapStateToProps, {fetchProducts })(Products);
