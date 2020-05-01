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

export function PrivateRoute({ children, ...rest }) {
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

 

  authenticate(cb) {
    checkUser(this.userData).then(response => {
      if(response.players === "Password Accepted")
      {
        checkForPlayer(response.response[0].Id).then(response => {
          if(response === "exists")
          {
            Auth.newPlayer = false
            Auth.isAuthenticated = true;
            setTimeout(cb, 100); // fake async
          }
          else
          {
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
