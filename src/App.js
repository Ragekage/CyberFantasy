import React from 'react';
import './App.css';
import Login from './Pages/Login'
import Register from './Pages/Register'
import MainHub from './Pages/MainHub'
import LoginRegister from './Pages/LoginRegister'
import {PrivateRoute} from './Utilities/AuthService'

import {BrowserRouter as Router, Redirect, Switch, Route} from "react-router-dom";


function App() {



  
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
        <Route path="/mainhub">
          <MainHub/>
        </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
