import React, { useState } from 'react';



const Pokimon = () => {
    const [pokimon, setPokimon] = useState([]);

    const clickHandler = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => response.json())
            .then(response => setPokimon(response.results))
            .catch(err=>{
                console.log(err);
            });}

    return (
        <>
        <button onClick={clickHandler}>fetch Pokimon</button>
        <ul>
            {pokimon.length > 0 && pokimon.map((poki, index)=>{
                return (<li key={index}>{poki.name}</li>)
            })}
        </ul>
        </>
    )
}

export default Pokimon;
