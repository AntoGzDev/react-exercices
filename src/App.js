import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navigation from './components/Navigation'
import Notas from './components/Notas'
import CreateNotes from './components/CreateNotes'
import CreateUser from './components/CreateUser';

function App() {
    return (
      <Router>
        <Navigation/>

        <Route path="/" exact component={Notas}/>
        <Route path="/edit/:id" component={CreateNotes}/>
        <Route path="/create" component={CreateNotes}/>
        <Route path="/user" component={CreateUser}/>

      </Router>
    );
}

export default App;