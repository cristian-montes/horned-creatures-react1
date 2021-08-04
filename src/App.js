import React, { Component } from 'react';
import './App.css';
import Data from './data/Data';
import ImageList from './image/ImageList.js';



class App extends Component {
  state = {  
    keyword:'All',
  }
  handleChange = (e) => {
      this.setState({keyword: e.target.value})
  };
  render(){ 
        const filteredKeywords = Data.filter(
          (item) => this.state.keyword === 'All' || item.keyword === this.state.keyword
        );
    return (   
      <div className="App">
        <h1>Horned Creatures</h1>
        <select onChange={this.handleChange} className={'dropDown'}>
          <option value="All">All</option>
          <option value= "narwhal">Narwhal</option>
          <option value='rhino'>Rhino</option>
          <option value='unicorn'>Unicorn</option>
          <option value='unilego'>unilego</option>
          <option value='triceratops'>Triceratops</option>
          <option value='markhor'>Markhor</option>
          <option value='mouflon'>Mouflon</option>
          <option value='addax'>Addax</option>
          <option value='chameleon'>Chameleon</option>
          <option value='lizard'>Lizard</option>
          <option value='dragon'>Dragon</option>
        </select>

         <ImageList cuernos={filteredKeywords} className={'img-div'}/>
      </div> );
  }
}
 
export default App;