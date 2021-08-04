import React, { Component } from 'react';
import ImageItem from './ImageItem.js';

class ImageList extends Component {
    render() { 
        const{ cuernos } = this.props;
        return (  
            <div className={'mainDiv'}>
                {cuernos.map((cuerno) => {
                    return <ImageItem 
                    key={cuerno.id} 
                    cuernoData={cuerno}/>
                })}
            </div>

        );
    }
}
 
export default ImageList;


