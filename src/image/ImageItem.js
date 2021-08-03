import React, { Component } from 'react';
import './Image.css';
class ImageItem extends Component {
    state = {}
    render() { 
        return (  
            <div className={'div-image'}>
                <img src={this.props.image.url} alt={this.props.image.keyword}/>
                <p>
               I am a {this.props.image.keyword}
                </p> 
                <p>
                My title is {this.props.image.title}
                </p> 
                <p>
                About me:
                <br/>
                 {this.props.image.description}
                </p> 
            </div>

        );
    }
}
 
export default ImageItem;