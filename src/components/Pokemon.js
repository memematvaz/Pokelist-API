import React from 'react';

const Pokemon = (props) => {
    return(
        <li className="pokemon">
            <div className="pokemon-img">
                <img src={props.image}></img>
            </div>
            <div className="pokemon-info">
                <h1>{props.name}</h1>
                <ul className="pokemon-types">
                    {props.pokemonTypes.map((singleType, index) =>
                    <li key={index}>
                        {singleType}
                    </li>
                    )}
                </ul>
                
            </div>
            
          

        </li>

    );
}

                
export default Pokemon; 