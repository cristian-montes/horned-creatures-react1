import React, { Component } from 'react';
import './Image.css';
class ImageItem extends Component {
    state = {}
    render() { 
        const { cuernoData } = this.props;
        return (  
            <div className={'div-image'}>
                <img src={cuernoData.url} alt={cuernoData.keyword}/>
                <p>
               I am a {cuernoData.keyword}
                </p> 
                <p>
                My title is {cuernoData.title}
                </p> 
                <p>
                About me:
                <br/>
                 {cuernoData.description}
                </p> 
            </div>

        );
    }
}
 
export default ImageItem;