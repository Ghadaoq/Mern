import React from 'react';
import logo from './logo.svg';
import './App.css';

import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstname={"ghada"}lastname={"Qaraeen"}age={23}haircolor={"brown"}/>
      <PersonCard firstname={"nada"}lastname={"Qaraeen"}age={25}haircolor={"black"}/>
      <PersonCard firstname={"smith"}lastname={"John"}age={88}haircolor={"brown"}/>
      <PersonCard firstname={"alejandro"}lastname={"main"}age={26}haircolor={"dark blonde"}/>
    </div>
  );
}

export default App;
