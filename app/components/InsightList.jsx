import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';
import { waiting, fetchAnalysis, fetchAnalysisSuccess, fetchAnalysisFailure } from 'actions/insights';
const cx = classNames.bind(styles);
import styles from 'css/components/persona';
import _ from 'lodash';
import JSONTree from 'react-json-tree'

// Takes callback functions from props and passes it down to TopicTextInput
// Essentially this is passing the callback function two levels down from parent
// to grandchild. To make it cleaner, you could consider:
// 1. moving `connect` down to this component so you could mapStateToProps and dispatch
// 2. Move TopicTextInput up to EntryBox so it's less confusing
const InsightList = ({data}) => {
  console.log("DATA IS...", data)
  var childElements = "";
  if (data != undefined) {
    var flatArray = _.flattenDeep(data.children);
    console.log("FlatArray>>>>", flatArray)
    childElements = data.children.map((element, i) => {
      console.log("ELEMENT", element, element.id)
      var personalityId = JSON.stringify(element);

      return (
       //  <h1 key={i} className={cx('productTile')}>
       // {personalityId}{}
       //          </h1>
             <div>
             <JSONTree data={element} />
             </div>
        );
    });
  } else {
    childElements = "No Results"

  }

  return (
    <div>
    	{childElements} </div>
  )
};

InsightList.propTypes = {
  data: PropTypes.object
};


export default InsightList;
//    const childElements = data.map((element, i) => {
//   console.log("ELEMENT", element)

// });
// 
// 	 // const childElements = data.map((insightElem, i) => {
//   console.log("ELEMENT", insightElem);

// return (
//   <div className={cx('InsightList')}>
//  // <li key={i} className={cx('productTile')}>
//  //                  <img key={i}  />
//  //              </li>
//   </div>
// )
// })