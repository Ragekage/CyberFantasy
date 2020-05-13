import React from 'react';
import './App.css';
import Login from './Pages/Login'
import Register from './Pages/Register'
import MainHub from './Pages/MainHub'
import Casino from './Casino/Casino'
import Confirmation from './Pages/Confirmation'
import LoginRegister from './Pages/LoginRegister'
import CreatePlayer from './Pages/CreatePlayer'
import {PrivateRoute} from './Utilities/AuthService'
import {useMediaQuery} from 'react-responsive'

import {BrowserRouter as Router, Redirect, Switch, Route, useHistory} from "react-router-dom";



function App() {


// Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });
const isBigScreen = useMediaQuery({ minDeviceWidth: 1824 });
const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 });
const isPortrait = useMediaQuery({ orientation: 'portrait' });
const isRetina = useMediaQuery({ minResolution: '2dppx' });
const FullMediaQuery = {
  isDesktopOrLaptop: isDesktopOrLaptop,
  isBigScreen: isBigScreen,
  isTabletOrMobile: isTabletOrMobile,
  isTabletOrMobileDevice: isTabletOrMobileDevice,
  isPortrait: isPortrait,
  isRetina: isRetina
}
  
  return (
    <Router state={"heelo"} >
    <div className="AppMain">
        <Switch>
        <Redirect exact from="/" to="/mainhub" />
         
        <Route path="/welcome" render={() => <LoginRegister FullMediaQuery={FullMediaQuery}/>}/>
     
        <Route path="/login" render={(render) => (<Login route={render} FullMediaQuery={FullMediaQuery}/>)}/>
        
        <Route path="/register"  render={(render) => (<Register route={render} FullMediaQuery={FullMediaQuery}/>)}/>
        <Route path="/confirmation/:confirmId" render={(render) => (<Confirmation route={render} FullMediaQuery={FullMediaQuery}/>)} />
        <Route path="/createplayer" render={(render) => (<CreatePlayer route={render} FullMediaQuery={FullMediaQuery}/>)}/>
        <Route path="/casino" render={(render) => (<Casino route={render} FullMediaQuery={FullMediaQuery}/>)}/>
        <PrivateRoute path="/mainhub">
          <MainHub FullMediaQuery={FullMediaQuery}/>

        </PrivateRoute>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
