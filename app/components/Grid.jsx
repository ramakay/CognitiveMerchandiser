import React, { Component, PropTypes } from 'react';
import {react-packery-component) from 'react-packery-component';

var packeryOptions = {
  transitionDuration: 0
};

var Grid = React.createClass({
  render: function() {
    const {elems } = this.props;
    {
      this.props.elems.map(function(element) {
        console.log(element)
        return (
          <li className="image-element-class">
                    <img src={element.name} />
                </li>
          );
      })
    }

    // var childElements = this.props.elements.map(function(element){
    //    return (
    //         <li className="image-element-class">
    //             <img src={element.src} />
    //         </li>
    //     );
    // });

    // return (
    //   <Packery
    //   className={'my-gallery-class'} // default ''
    //   elementType={'ul'} // default 'div'
    //   options={packeryOptions} // default {}
    //   disableImagesLoaded={false} // default false
    //   >
    //             {childElements}
    //         </Packery>
    //   );
  }
});

Grid.propTypes = {
 elems: PropTypes.array.isRequired
};
module.exports = Grid;