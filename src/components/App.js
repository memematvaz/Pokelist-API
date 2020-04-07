import React from 'react';
import apiPokemon from '../data.json';
import PokeList from './PokeList.js';


console.log(apiPokemon)




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: apiPokemon
    }
  } 
  
  render() {
    console.log(this.state.data)
    return (
      <div className="App">
         <PokeList dataList={this.state.data}/>
      </div>
      );
  }
}


export default App;


