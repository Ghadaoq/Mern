import React, { useEffect, useState } from 'react';

const People = ({starwars}) => {   
    return(
        <div>
            <center>
            <h3>{starwars.name}</h3>
            <p>Height: {starwars.height}</p>
            <p>Mass: {starwars.mass} kg</p>
            <p>Hair Color: {starwars.hair_color}</p>
            <p>skin Color: {starwars.skin_color}</p>
            </center>
        </div>
    )
}

export default People;