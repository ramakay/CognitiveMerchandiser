import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import { fetchProducts,initEntry } from 'actions/products';
import InsightList from 'components/InsightList';
import Grid from 'components/Grid';

import { bindActionCreators } from 'redux'
import styles from 'css/components/products';
const cx = classNames.bind(styles);



class Products extends Component {


  //Data that needs to be called before rendering the component
  //This is used for server side rending via the fetchComponentDataBeforeRender() method
  static need =[ // eslint-disable-line
 //  fetchProducts
  ]

  render() {

    const {elems,keywords,NLCResponse} = this.props;
      //console.warn("Product JSX CALLED",{elems})

    return (
      <div className={cx('Page')}>
     
            <div className={cx('bodyText')}>
              <h2>03. Product Grid Display </h2>
      <p> The System utilizes an existing catalog but highlights only certain items that it is proposing as more appealing to the customer based on a base set of personas or through further interaction </p>
    
      <Grid keywords={keywords} elems={elems} />
        <div className={cx('Panel')}>
       <InsightList data={NLCResponse} />
       </div>
      </div>
      </div>

      );
  }
}

Products.propTypes = {
  elems: PropTypes.array,
  keywords:PropTypes.string,
  NLCResponse:PropTypes.object
};

function mapStateToProps(state) {
  console.log("STATE SEARCH",state.products.NLCResponse)
  return {
    elems: state.products.elems,
    keywords:state.products.keywords || "Extraversion",
    NLCResponse:state.products.NLCResponse || null
  };
}

 function mapDispatchToProps(dispatch) {
 // console.warn(ownProps)
 return  bindActionCreators(initEntry('T-shirt'), dispatch)
 // return {
 //  elems: this.ownProps.elems
 // }
  
 }
// Read more about where to place `connect` here:
// https://github.com/rackt/react-redux/issues/75#issuecomment-135436563
export default connect(mapStateToProps)(Products);