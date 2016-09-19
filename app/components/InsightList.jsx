import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';
import { waiting, fetchAnalysis, fetchAnalysisSuccess, fetchAnalysisFailure } from 'actions/insights';
const cx = classNames.bind(styles);
import styles from 'css/components/persona';
import _ from 'lodash';
import JSONTree from 'react-json-tree'
import { fetchProducts } from 'actions/products';



// Takes callback functions from props and passes it down to TopicTextInput
// Essentially this is passing the callback function two levels down from parent
// to grandchild. To make it cleaner, you could consider:
// 1. moving `connect` down to this component so you could mapStateToProps and dispatch
// 2. Move TopicTextInput up to EntryBox so it's less confusing
const componentDidMount =   () => {
    // Assume you add `ref="messages"` to your render method so you can
    // get a reference to the child component
    //this.refs.messages._scrollToBottom();
    console.warn("Mounted")
}

const InsightList = ({data}) => {
  //console.log("DATA IS...", data, typeof data)
  var childElements = "";
  if (data != undefined && data.children != null) {
    window.scrollTo(0,document.body.scrollHeight); 
    console.log("Via Search")
    var children = data.children ? data.children : data.classes; 
    //console.warn("Children are ", children)
    childElements = children.map((element, i) => {
      //console.log("ELEMENT", element, element.id)
      var personalityId = JSON.stringify(element);

      return (
       //  <h1 key={i} className={cx('productTile')}>
       // {personalityId}{}
       //          </h1>
             <div  className={cx('InsightResultItem')}>
             <JSONTree data={element} />
             </div>
        );
    }) ;
  } else {
    childElements = ""

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