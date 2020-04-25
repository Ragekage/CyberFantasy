import React from 'react';
import './App.css';
import Login from './Pages/Login'
import Register from './Pages/Register'
import MainHub from './Pages/MainHub'
import Confirmation from './Pages/Confirmation'
import LoginRegister from './Pages/LoginRegister'
import {PrivateRoute} from './Utilities/AuthService'

import {BrowserRouter as Router, Redirect, Switch, Route} from "react-router-dom";



function App() {


// Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js


  
  return (
    <Router>
    <div className="App-header">
        <Switch>
        <Redirect exact from="/" to="/mainhub" />
        <Route path="/welcome">
          <LoginRegister/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/confirmation/:confirmId" component={Confirmation} />
        <PrivateRoute path="/mainhub">
          <MainHub/>
        </PrivateRoute>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
