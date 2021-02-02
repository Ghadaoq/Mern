import React, {useState } from 'react';
import axios from 'axios';



const Pokimon = () => {
    const [pokimon, setPokimon] = useState([]);

    const clickHandler = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => setPokimon(response.data.results))
            .catch(err=>{
                console.log(err);
            });}
            console.log(pokimon);
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
