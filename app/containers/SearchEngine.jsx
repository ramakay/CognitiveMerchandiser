import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import { initEntry } from 'actions/search'; 
import SearchInput from 'components/SearchInput';
import styles from 'css/components/search';




class SearchEngine extends Component {

  // //Data that needs to be called before rendering the component
  // //This is used for server side rending via the fetchComponentDataBeforeRender() method
  // static need =[ // eslint-disable-line
  //   fetchProducts
  // ]

  render() {
    const {onEntrySearch,initEntry} = this.props;

    return (
<div className="searchBox">
      <SearchInput  onEntrySearch={initEntry} />
</div>
      );
  }
}

SearchEngine.propTypes = {
 //onEntrySearch: PropTypes.func.isRequired
};


function mapStateToProps({onEntrySearch}) {
  return {
    onEntrySearch
  };
}

// Read more about where to place `connect` here:
// https://github.com/rackt/react-redux/issues/75#issuecomment-135436563
export default connect(mapStateToProps, { initEntry  })(SearchEngine);
