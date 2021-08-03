import React, { Component } from 'react';

class ImageItem extends Component {
    state = {}
    render() { 
        return (  
            <p>
                {this.props.image.keyword}
                <img src={this.props.image.url} alt={this.props.image.keyword} width='150'/>
            </p>
        );
    }
}
 
export default ImageItem;