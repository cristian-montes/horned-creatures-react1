import React, { Component } from 'react';
import ImageItem from './ImageItem.js';

class ImageList extends Component {
    render() { 
        return (  
            <div className={'mainDiv'}>
                {this.props.cuernos.map((cuerno) => {
                    return <ImageItem 
                    key={cuerno.id} 
                    cuernoData={cuerno}/>
                })}
            </div>

        );
    }
}
 
export default ImageList;