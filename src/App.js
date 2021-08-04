import React, { Component } from 'react';
import './App.css';
import Data from './data/Data';
// import KeywordData from './data/DataUtils';
import ImageList from './image/ImageList.js';
import DropDown from './dropdown/DropDown';


class App extends Component {
  state = {  
    keyword:'All',
    horns:'All',
  }

  
  hornsOptions = ['All', 1, 2, 3, 100];
  
  
  handleChange = (e) => {
    this.setState({keyword: e.target.value})
  };
  
  handleChangeHorns = (e) => {
    this.setState({ horns: e.target.value })
  };

  render(){ 
 
        // MUGING DATA TO GET KEYWORD VALUES
        
        let keyOpts = Data.map((word) => {
          return word.keyword});
         
        let newKeyOpts = ['All',...keyOpts]
          
         let keywordOptions = newKeyOpts.filter((elem, pos)=> {
            return newKeyOpts.indexOf(elem) === pos;
        })
  

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
              options={keywordOptions}
              changeEvent={this.handleChange}
          />
          <DropDown
              options={this.hornsOptions}
              changeEvent={this.handleChangeHorns}
          />
         <ImageList 
            cuernos={filteredHorns}
            className={'img-div'}
         />
      </div> );
  }
}
 
export default App;



//   function keyValues(arr, keyName){
//     let keyOpts = arr.map((word) => {
//         return word.keyName});
       
//       let newKeyOpts = ['All',...keyOpts]
        
//        let keywordOptions = newKeyOpts.filter((elem, pos)=> {
//           return newKeyOpts.indexOf(elem) === pos;
//       })
//       return keywordOptions;
// }