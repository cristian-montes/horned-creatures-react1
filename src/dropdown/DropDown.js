import React, { Component } from 'react';
import './DropDown.css';

class DropDown extends Component {

    render() { 
        
        const{ changeEvent, options } = this.props;
        return (
            <div>
                <select onChange={changeEvent} className={'dropDown'}>
                    {options.map((opciones, i) =>(
                        <option key={i} value={opciones}>{opciones}</option>
                    ))}
                    
                </select>
            </div>
         );
    }
}
 
export default DropDown;