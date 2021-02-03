import './App.css';
import React from 'react';
import { Router } from '@reach/router';
import Home from './Components/Home';
import Input from './Components/Input';
import Styled from './Components/Styled';

function App() {
  return (
    <div className="App">
      <Router>
      <Home path="/home"/>
      <Input path="/:var"/>
      <Styled path="/:var/:color1/:color2"/>
      </Router>
    </div>
  );
}

export default App;
