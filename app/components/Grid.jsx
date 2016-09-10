import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';

var Packery = require('react-packery-component')(React);

import styles from 'css/components/grid';
const cx = classNames.bind(styles);

var packeryOptions = {
  transitionDuration: 5
};
const Grid = ({elems}) => {
  const childElements = elems.map((element, i) => {
    console.log("ELEMENT", element)
    var tileVariations = element.colors[0].split("|")[2];
    // This varies based on action.
    var imgSrc = i === 4 ? "http://www.ralphlauren.com/graphics/product_images/pPOLO2-" + tileVariations + "_standard_t940.jpg" : "http://www.ralphlauren.com/graphics/product_images/pPOLO2-" + tileVariations + "_lifestyle_t240.jpg"
    console.log(imgSrc)
    return (
      <li key={i} className={cx('productTile')}>
                    <img key={i} src={imgSrc} />
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
  elems: PropTypes.array
};



export default Grid;

