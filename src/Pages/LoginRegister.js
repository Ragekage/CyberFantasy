import React, {Component} from 'react'
import {Card, Form, FormGroup, FormFeedback, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Input} from 'reactstrap';
import { Link } from 'react-router-dom';
import './Login.css'
import Spritesheet from 'react-responsive-spritesheet'
import MainMenupic from '../Images/CyberSunsetAnimated.png'
import MMPic from '../Images/CyberSunsetBGNEW.gif'
import MainMenuSound from '../Sounds/keys-of-moon-eclipse.mp3'

class LoginRegister extends Component {

   

    render()
    {
        return(
            <div>
            <div  className="LoginWindow">

                <div className="TitleImage">
                <Spritesheet image={MainMenupic} widthFrame={1024} heightFrame={512} steps={2} fps={2} loop={true} />
                {/* <CardImg src={MainMenupic} /> */}
                </div>
                <div className="LoginRegisterBtns">
                        {/* <CardTitle style={{color: "black"}}>Welcome to CyberFantasy</CardTitle> */}
                        <Link style={{fontSize: 30}} to="/login" className="btn btn-primary">Login</Link>
                        <div className="divider"/>
                        <Link style={{fontSize: 30}} to="/register" className="btn btn-primary">Register</Link>
                </div>
                <audio className="mainAudio" controls loop src={MainMenuSound} autoPlay></audio>
            </div>
            <div className="BGImage"><img src={MMPic}></img></div>
            </div>
        )
    }

}

export default LoginRegister