import React, { Component } from 'react';
import './App.css';
import Data from './data/Data';
import ImageList from './image/ImageList.js';
import DropDown from './dropdown/DropDown';



class App extends Component {
  state = {  
    keyword:'All',
    horns:'All',
  }
  keywordOptions= ["All","narwhal",'rhino','unicorn','unilego','triceratops','markhor','mouflon','addax','chameleon','lizard','dragon'];
  hornsOptions = ['All', 1, 2, 3, 100];


  handleChange = (e) => {
      this.setState({keyword: e.target.value})
  };

  handleChangeHorns = (e) => {
    // const numHorns = Number(e.target.value)
    this.setState({ horns: e.target.value })
};


  render(){ 
        const filteredKeywords = Data.filter(
          (item) => this.state.keyword === "All" || item.keyword === this.state.keyword
        );

        const filteredHorns = filteredKeywords.filter(
          (item) => this.state.horns === "All" || item.horns === Number(this.state.horns)
        );

    return (   
      <div className="App">
        <h1>Horned Creatures</h1>
           <DropDown
              options={this.keywordOptions}
              changeEvent={this.handleChange}
          />
          <DropDown
              options={this.hornsOptions}
              changeEvent={this.handleChangeHorns}
          />
         <ImageList 
            cuernos={filteredHorns}
            // changeEvent={this.handleChange} 
            className={'img-div'}
         />
      </div> );
  }
}
 
export default App;

