import React from 'react';
import apiPokemon from '../data.json';
import PokeList from './PokeList.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: apiPokemon
    }
  } 
  
  render() {
    return (
      <div className="App">
         <PokeList dataList={this.state.data}/>
      </div>
      );
  }
}

export default App;





