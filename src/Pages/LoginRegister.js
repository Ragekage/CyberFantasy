import React, {Component} from 'react'
import {Card, Form, FormGroup, FormFeedback, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Input} from 'reactstrap';
import { Link } from 'react-router-dom';
import './Login.css'
import Spritesheet from 'react-responsive-spritesheet'
import MainMenupic from '../Images/CyberSunsetAnimated.png'

class LoginRegister extends Component {

   

    render()
    {
        return(
            <div  className="LoginWindow">
                <Card>
                <Spritesheet image={MainMenupic} widthFrame={1024} heightFrame={512} steps={2} fps={2} loop={true} />
                {/* <CardImg src={MainMenupic} /> */}
                    <CardBody style={{textAlign: "center"}}>
                        {/* <CardTitle style={{color: "black"}}>Welcome to CyberFantasy</CardTitle> */}
                        <Link to="/login" className="btn btn-primary">Login</Link>
                        <div className="divider"/>
                        <Link to="/register" className="btn btn-primary">Register</Link>
                    </CardBody>
                </Card>
            </div>
        )
    }

}

export default LoginRegister