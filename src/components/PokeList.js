import React from 'react';
import Pokemon from './Pokemon';
import Header from './Header';

const PokeList = (props) => {
    return(
        <div className="background">
        <Header/>
        <ul className="container-pokemons">
           {props.dataList.map((pokemonObject, index) =>
           <li className="pokemon"
               key={pokemonObject.id}>
           <Pokemon
                    image={pokemonObject.url}
                    name={pokemonObject.name}
                    pokemonTypes={pokemonObject.types}
            />
            </li>
           )}
        </ul>
        </div>
    );
}
 
 
export default PokeList; 

