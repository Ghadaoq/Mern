import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from'./views/Update';
function App() {
  return (
    <center>
      <h1>Products</h1>
      <Router>
        <Main path="people/"/>
        <Detail path="people/:id" />
        <Update path="people/:id/edit"/>
      </Router>
      <hr/>
    </center>
  );
}
export default App;
