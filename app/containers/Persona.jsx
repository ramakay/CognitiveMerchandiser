/*
   The purpose of this file is to accept a Brand brief and generate 
   Classes for the Persona 
   input: Your line of text - Large textarea
   output: Personality insights output

 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import EntryBox from 'components/EntryBox';
import MainSection from 'components/MainSection';
import Scoreboard from 'components/Scoreboard';
import { fetchWatsonStatus } from 'actions/persona';
import styles from 'css/components/vote';

const cx = classNames.bind(styles);

class Persona extends Component {

  //Data that needs to be called before rendering the component
  //This is used for server side rending via the fetchComponentDataBeforeRender() method
  static need = [  // eslinit-disable-line
    fetchWatsonStatus
  ]

  render() {
    const {fetchWatsonStatus} = this.props;
    return (
      <div className={cx('vote')}>
   fetchWatsonStatus
      </div>
    ); 
  }
}

Persona.propTypes = {
  fetchWatsonStatus: PropTypes.string
};

function mapStateToProps(state) {
  return {
    topics: state.topic.topics,
    newTopic: state.topic.newTopic
  };
}

// Read more about where to place `connect` here:
// https://github.com/rackt/react-redux/issues/75#issuecomment-135436563
export default connect(mapStateToProps, { fetchWatsonStatus })(Persona);
