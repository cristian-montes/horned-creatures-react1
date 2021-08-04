import React, { Component } from 'react';
import './Image.css';
class ImageItem extends Component {
    state = {}
    render() { 
        
        return (  
            <div className={'div-image'}>
                <img src={this.props.cuernoData.url} alt={this.props.cuernoData.keyword}/>
                <p>
               I am a {this.props.cuernoData.keyword}
                </p> 
                <p>
                My title is {this.props.cuernoData.title}
                </p> 
                <p>
                About me:
                <br/>
                 {this.props.cuernoData.description}
                </p> 
            </div>

        );
    }
}
 
export default ImageItem;