import './ImageCard.css';
import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        
        this.imageRef = React.createRef();
    }
    
    render() {
        const {description, urls} = this.props.image;

        return (
            <div className="imageContainer">
                <img
                    className="imageItem"
                    ref={this.imageRef}
                    alt={description}
                    src={urls.regular}
                />
            </div>
        )
    }
}

export default ImageCard;