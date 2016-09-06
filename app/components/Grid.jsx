import React, { Component, PropTypes } from 'react';
import Packery from 'react-packery-component';

export default class Grid extends Component {
  constructor(props) {
    // this.transitionDuration = 0;
 super(props);

}

    render () {
        return (
        //     this.props.elements.map(function(element){
        //    return (
        //         <li className="image-element-class">
        //             <img src={element.src} />
        //         </li>
        //     );
        // }
        <div> <li className="image-element-class">
                    <img src={element.src} />
                </li>
            <Packery className={'my-gallery-class'} // default ''
                elementType={'ul'} // default 'div'
                options={packeryOptions} // default {}
                disableImagesLoaded={false} // default false
            >
                {childElements}
            </Packery>
        </div>
        );
    
    };
}
Grid.propTypes = {
    element: PropTypes.array.isRequired,
    elementType:PropTypes.string
}

