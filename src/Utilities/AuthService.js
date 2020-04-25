import React from 'react'
import { checkUser} from '../Utilities/ServerEndpoints'
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
    console.log( props);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/mainhub" } };
    let login = (userData, callback) => {
      console.log(userData)
      Auth.setUserdata(userData, callback)
      Auth.authenticate(() => {
        history.replace(from);
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

  setUserdata(data, callback) {
    this.userData = data;
    this.callback = callback
  },
  authenticate(cb) {
    console.log(this.userData)
    checkUser(this.userData).then(response => {
      if(response.players === "Password Accepted")
      {
        Auth.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
      }
      else
      {
        this.callback(response.players)
      }
    });
  
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
