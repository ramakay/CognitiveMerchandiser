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
import { fetchWatsonStatus, fetchInsight, typing, updateInsight } from 'actions/persona';
import { createTopic, incrementCount, decrementCount, destroyTopic, fetchTopics } from 'actions/topics';
import {fetchProducts} from 'actions/products'
import styles from 'css/components/persona';
import SampleBrief from 'components/SampleBrief';
import ActionButton from 'components/ActionButton';
import{browserHistory} from 'react-router';
import { push } from 'react-router-redux'

import InsightList from 'components/InsightList';
import { bindActionCreators } from 'redux'

const cx = classNames.bind(styles);




class Persona extends Component {
  constructor(props,context) {
    super(props);
    this.onSubmitBrief = this.onSubmitBrief.bind(this);
    this.state = {
      briefCollapsed: true
    };
  }
  onSubmitBrief() {
    this.setState({
      briefCollapsed: !this.state.briefCollapsed
    });
     const store = this.context.store
       store.dispatch((fetchProducts()))
  }
  ongoToProducts() {
    browserHistory.push('/Products')
  }
  //Data that needs to be called before rendering the component
  //This is used for server side rending via the fetchComponentDataBeforeRender() method
  static need =[ // eslint-disable-line
    fetchWatsonStatus
  ]
  render() {
    const {fetchWatsonStatus, status, newTopic, topics, typing, createTopic, fetchInsight, insightResults} = this.props;
    //const {newTopic, topics, typing, createTopic, destroyTopic, incrementCount, decrementCount } = this.props;

    return (
      <div className={cx('Page')}>

      <div className={cx('Persona')}>
      <h2>01. Automated Persona Creation</h2>
      <p> The User Experience Researcher or an equivalent role identifies a base user group that the application wants to cater to.
      The System expects free flowing text much like a brand brief that will be narrated to a team member.
      </p>
            <div className={cx('Usage')}> A Sample for a Persona "Alpha Male" is provided below, either provide your own 8000 words or copy/paste the below text area and press "Save" </div>


      <div className={cx('Persona')}>
        <EntryBox topic={newTopic}
      onEntryChange={typing} onEntryClick={this.onSubmitBrief}
      onEntrySave={fetchInsight} />
      </div>
      <section>

       { this.state.briefCollapsed ? <SampleBrief /> : null } 
       { this.state.briefCollapsed ? <ActionButton targetAction={fetchProducts} /> : null } 
      <ActionButton targetAction={this.ongoToProducts} />
      </section>

      <section>
     <InsightList data={insightResults} />
     </section>

     <section>

     </section>
     <span className={cx('status')}></span>
      </div>
      </div>
      );
  }
}


Persona.propTypes = {
  fetchWatsonStatus: PropTypes.func.isRequired,
  submissionText: PropTypes.string,
  insightResults: PropTypes.object,
  briefCollapsed: PropTypes.bool,
  onSubmitBrief: PropTypes.func
};
Persona.contextTypes = {
  store: React.PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    status: state.persona.status,
    submissionText: state.persona.submissionText,
    insightResults: state.persona.insightResults
  };
}

// Read more about where to place `connect` here:
// https://github.com/rackt/react-redux/issues/75#issuecomment-135436563
export default connect(mapStateToProps, {
  fetchWatsonStatus,
  typing,
  fetchInsight,
  InsightList
})(Persona);
