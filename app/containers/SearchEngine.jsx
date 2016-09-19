import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames/bind'
import { initEntry } from 'actions/search'
import SearchInput from 'components/SearchInput'
import styles from 'css/components/search'
const cx = classNames.bind(styles)

class SearchEngine extends Component {

  // //Data that needs to be called before rendering the component
  // //This is used for server side rending via the fetchComponentDataBeforeRender() method
  // static need =[ // eslint-disable-line
  //   fetchProducts
  // ]

  render () {
    const {onEntrySearch, initEntry} = this.props

    return (
    <div className={cx('bodyText')}>
      <h2>02. Search - Natural Language Processing</h2>
      <p>
        We emulate a user visit here, enter a regular search term as you would enter through a search engine and press Save.
      </p>
      <div className={cx('Page')}>
        <SearchInput onEntrySearch={initEntry} />
      </div>
    </div>
    )
  }
}

SearchEngine.propTypes = {
  // onEntrySearch: PropTypes.func.isRequired
}

function mapStateToProps ({onEntrySearch}) {
  return {
  onEntrySearch}
}

// Read more about where to place `connect` here:
// https://github.com/rackt/react-redux/issues/75#issuecomment-135436563
export default connect(mapStateToProps, { initEntry})(SearchEngine)
