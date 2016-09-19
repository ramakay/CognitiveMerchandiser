import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';
 var Packery = require('react-packery-component')(React);

import styles from 'css/components/grid';
const cx = classNames.bind(styles);
//data-packery-options='{ "gutter": ".gutter-sizer", "itemSelector": ".item", "columnWidth": ".grid-sizer", "rowHeight": ".item" }
var packeryOptions = {
  transitionDuration: '0.5s',
  columnWidth:300
};
const Grid = ({elems,keywords}) => {
  const childElements = elems.map((element, i) => {
   // console.log("ELEMENT", element)
    var tileVariations = element.colors[0] ? element.colors[0].split("|")[2] : null
    var tilePersonality = element.Personality;
    console.log(tilePersonality)
    console.log(tilePersonality,keywords);
    // This varies based on action.
    let imgSrc,
    imgWidth,
    cstyle,
    imgHeight,
    clss
    if(tilePersonality === keywords) {
      imgSrc =  "http://www.ralphlauren.com/graphics/product_images/pPOLO2-" + tileVariations + "_standard_t940.jpg" 
      imgWidth = 400;
      imgHeight = 400;
      cstyle = {opacity:1};
      clss='Bright'
    }
    else {
      imgSrc =  "http://www.ralphlauren.com/graphics/product_images/pPOLO2-" + tileVariations + "_lifestyle_t240.jpg"
      imgWidth = 240;
      imgHeight = 240;
      cstyle =  {filter:'grayscale(100%)',opacity:0.4};
      clss='Dull'
    }
// var imgSrc = tilePersonality === keywords ? "http://www.ralphlauren.com/graphics/product_images/pPOLO2-" + tileVariations + "_standard_t940.jpg" : "http://www.ralphlauren.com/graphics/product_images/pPOLO2-" + tileVariations + "_lifestyle_t240.jpg"
// var imgWidth = tilePersonality === keywords ? 940
// var imgHeight = 
//var imgSrc = i === 4 ? "http://www.ralphlauren.com/graphics/product_images/pPOLO2-" + tileVariations + "_standard_t940.jpg" : "http://www.ralphlauren.com/graphics/product_images/pPOLO2-" + tileVariations + "_lifestyle_t240.jpg"
    //console.log(imgSrc)
    return (
      <li key={i} className={cx('productTile')}>
                              <img className={cx(clss)} style={cstyle} onError={(e)=>{e.target.style.display='none'}} width= {imgWidth} height= {imgHeight} key={i} alt={tilePersonality} src={imgSrc}  />

                </li>
      );
  });
  return (
    <Packery
    className={'my-gallery-class'} // default ''
    elementType={'ul'} // default 'div'
    options={packeryOptions} // default {}
    disableImagesLoaded={false} // default false
    >
                {childElements}
            </Packery>
    );
};

Grid.propTypes = {
  elems: PropTypes.array,
  keywords:PropTypes.string
};



export default Grid;

