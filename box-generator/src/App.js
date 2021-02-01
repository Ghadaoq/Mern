import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import HeaderComponant from './Componants/HeaderComponant';
import MessageDisplayComponant from './Componants/MessageDisplayComponant';
import MeassageFormComponant from './Componants/MessageFormComponant';

function App() {
  const [currentMsg, setCurrentMsg] = useState([]);
  const youveGotMail = ( newMessage ) => {
    setCurrentMsg( currentMsg.concat(newMessage) );
}
  return (
    <div className="App">
      <header className="App-header">
        <HeaderComponant/>
        <MeassageFormComponant youveGotMail={ youveGotMail }/>
        <MessageDisplayComponant message={currentMsg}/> 
      </header>
    </div>
  );
}

export default App;
