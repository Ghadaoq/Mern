import React from 'react';

const Planet = ({starwars}) => {    
    return(
        <div >
            <center>
            <h3>{starwars.name}</h3>
            <p>Climate: {starwars.climate} </p>
            <p>Terrain: {starwars.terrain}</p>
            <p>Surface Water: {starwars.surface_water}</p>
            <p>Population: {starwars.population}</p>
            </center>
        </div>
    )
}

export default Planet;