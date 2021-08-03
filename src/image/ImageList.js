import React, { Component } from 'react';
import ImageItem from './ImageItem.js';

class ImageList extends Component {
    render() { 
        return (  
            <div className={'mainDivImg'}>
                {this.props.cuernos.map((item) => {
                    return <ImageItem 
                    keyword={item.keyword} 
                    image={item}/>
                })}
            </div>

        );
    }
}
 
export default ImageList;