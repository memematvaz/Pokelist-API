import React from 'react';

const Pokemon = (props) => {
    return(
        <div id={props.key}>
            <div className="pokemon-img">
                <img src={props.image} alt={props.name}></img>
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
            
          

        </div>

    );
}

                
export default Pokemon; 