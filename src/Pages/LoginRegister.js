import React, {Component} from 'react'
import {Card, Form, FormGroup, FormFeedback, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Input} from 'reactstrap';
import { Link } from 'react-router-dom';


class LoginRegister extends Component {

    constuctor(props) {
        this.routeChange = this.routeChange.bind(this);
      }


routeChange = (path) => {
    this.props.history.push(path)
    }

    render()
    {
        console.log(this.props)
        return(
            <div>
                <Card>
                    <CardBody>
                        <CardTitle>Welcome to CyberFantasy</CardTitle>
                        <Link to="/login" className="btn btn-primary">Login</Link>
                        <Link to="/register" className="btn btn-primary">Register</Link>
                    </CardBody>
                </Card>
            </div>
        )
    }

}

export default LoginRegister