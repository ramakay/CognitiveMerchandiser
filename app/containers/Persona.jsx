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
import { fetchWatsonStatus,fetchInsight,typing,updateInsight } from 'actions/persona';
import { createTopic, incrementCount,
  decrementCount, destroyTopic, fetchTopics } from 'actions/topics';
import styles from 'css/components/persona';
import SampleBrief from 'components/SampleBrief';
 import InsightList from 'components/InsightList';
import { bindActionCreators } from 'redux'

const cx = classNames.bind(styles);




class Persona extends Component {

constructor(props) {
    super(props);
  }

  //Data that needs to be called before rendering the component
  //This is used for server side rending via the fetchComponentDataBeforeRender() method
  static need = [  // eslint-disable-line
    fetchWatsonStatus
  ]

  render() {
    const {fetchWatsonStatus,status,newTopic, topics, typing, createTopic,fetchInsight,insightResults} = this.props;
        //const {newTopic, topics, typing, createTopic, destroyTopic, incrementCount, decrementCount } = this.props;

    return (
      <div className={cx('Persona')}>
      <h2>Here is where you start r</h2>

   <span className={cx('status')} >{status}</span>
      <div className={cx('Persona')}>
        <EntryBox topic={newTopic}
         onEntryChange={typing}
          onEntrySave={fetchInsight} />
      </div>
      <section>
      </section>
     <SampleBrief />

     <InsightList data={insightResults}/>
      </div>
    ); 
  }
}

Persona.propTypes = {
  fetchWatsonStatus: PropTypes.func.isRequired,
  submissionText:PropTypes.string,
   insightResults:PropTypes.object
};

function mapStateToProps(state) {
  return {
    status:state.persona.status,
    submissionText:state.persona.submissionText,
     insightResults:state.persona.insightResults
      };
}

// Read more about where to place `connect` here:
// https://github.com/rackt/react-redux/issues/75#issuecomment-135436563
export default connect(mapStateToProps, {fetchWatsonStatus,typing,fetchInsight, InsightList})(Persona);
