
import React, { Component, PropTypes } from 'react';
import Packery from 'react-packery-component';

export default class TopicTextInput extends Component {
  constructor(props) {
 super(props);
}
}
var packeryOptions = {
    transitionDuration: 0
};
var Grid = React.createClass({
    render: function () {
        var childElements = this.props.elements.map(function(element){
           return (
                <li className="image-element-class">
                    <img src={element.src} />
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
    }
});

export default class Grid {};
    

