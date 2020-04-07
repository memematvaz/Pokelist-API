import React from 'react';
import Pokemon from './Pokemon';

const PokeList = (props) => {
    return(
        <ul className="container-pokemons">
           {props.dataList.map((pokemonObject, index) =>
           <Pokemon key={index}
                    image={pokemonObject.url}
                    name={pokemonObject.name}
                    pokemonTypes={pokemonObject.types}
            />
           )}
        </ul>
 
    );
}
 
 
export default PokeList; 