import logo from './logo.svg';
import './App.css';
import React from 'react'
import { Router } from '@reach/router';
import AuthorsTable from './components/AuthorsTable';
import CreateAuthorForm from './components/CreateAuthorForm';



function App() {
  return (
    <div className="App">
      <Router>
        <AuthorsTable path = '/' />
        <CreateAuthorForm path = '/new'/>
      </Router>
    </div>
  );
}

export default App;
