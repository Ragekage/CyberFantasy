import React from 'react'
import { checkUser, checkForPlayer} from '../Utilities/ServerEndpoints'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";

  import {Button} from 'reactstrap'


  Date.prototype.addHours = function(h){
    this.setHours(this.getHours()+h);
    return this;
}

export function PrivateRoute({ children, ...rest }) {

  Auth.checkForLogin()

  return (
    <Route
      {...rest}
      render={({ location }) =>
        Auth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/welcome",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export function LoginButton( props) {
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/mainhub" } };
    let login = (userData, callback) => {
      Auth.setUserdata(userData, callback)
      Auth.authenticate(() => {
        if(Auth.newPlayer === true)
        {
          from.pathname = "/createplayer"
          history.replace(from);
        }
        else
        {
        history.replace(from);
        }
      });
    };
  
    return (
      <div>
          <Button disabled={props.isDisabled} onClick={() => login(props.userData, props.loginFail)} color="primary">OK</Button>
      </div>
    );
  }

  export function LogoutButton(){
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/welcome" } };
    let logout = () => {
      Auth.logOut()
      history.replace(from)
    }

    return (
      <div style={{height: "50px", width: "120px", backgroundColor: "#282c34", transform: "translate(1750px, -70px)"}}>
          <Button  onClick={() => logout()} color="primary">Sign Out</Button>
      </div>
    );
  }

export const Auth = {
  isAuthenticated: false,
  userData: {},
  callback: {},
  playerData: null,
  newPlayer: true,

  setUserdata(data, callback) {
    this.userData = data;
    this.callback = callback
  },

  checkForLogin(){
    const user = JSON.parse(localStorage.getItem('userDetail'))
    if(user !== null)
    {
      var currentDate = new Date()
      var expiredDate = new Date(user.LoggedIn).addHours(1)

      if(currentDate > expiredDate)
      {
        Auth.isAuthenticated = false;
        localStorage.removeItem('userDetail')
      }
      else
      {
      if(user.isLoggedIn === true)
      {
        Auth.isAuthenticated = true;
      }
      }
    }
  },

  logOut(){
    Auth.isAuthenticated = false;
    localStorage.removeItem('userDetail')
  },

  authenticate(cb) {
    checkUser(this.userData).then(response => {
      if(response.players === "Password Accepted")
      {
        var player = response.response[0]
        checkForPlayer(response.response[0].Id).then(response => {
          if(response.response === "exists")
          {
            var currentTime = new Date()
            Auth.newPlayer = false
            Auth.isAuthenticated = true;
            localStorage.setItem('userDetail', JSON.stringify({user: player.Username, isLoggedIn: true, id: player.Id, LoggedIn: currentTime}))
            setTimeout(cb, 100); // fake async
          }
          else
          {
            localStorage.setItem('userDetail', JSON.stringify({user: player.Username, isLoggedIn: true, id: player.Id, LoggedIn: currentTime}))
            Auth.isAuthenticated = true;
            setTimeout(cb, 100); // fake async
          }
        }).catch(error => {
        })
      }
      else
      {
        this.callback(response.players)
      }
    }).catch(error => {
    })
  },


  signout(cb) {
    Auth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

export function AuthButton() {
  let history = useHistory();

  return Auth.isAuthenticated ? (
    <p>
      Welcome!{" "}
      <button
        onClick={() => {
          Auth.signout(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}
