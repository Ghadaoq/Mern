import './App.css';
import React, { useState } from 'react';
import { Router, navigate } from '@reach/router';
import axios from 'axios';
import People from './componants/People';
import Home from './componants/Home';
import Planet from './componants/Planet';

function App() {

  const [starwars, setStarwars] = useState('');
  const handleClick = (selected, number) => {
    axios.get(`http://swapi.dev/api/${selected}/${number}`)
      .then(response => {
        setStarwars(response.data);
        navigate(`/${selected}/${number}`);
      })
  }

  return (
    <div className="App">
      <Home handleClick={handleClick} />
      <Router>
        <People path="/people/:number" starwars={starwars} />
        <Planet path="/planets/:number" starwars={starwars} />
      </Router>
    </div>
  );
}

export default App;
