import React, {Component} from 'react'
import {Card, Form, FormGroup, FormFeedback, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Input} from 'reactstrap';
import { Link } from 'react-router-dom';
import './Login.css'
import {welcome} from '../Utilities/ServerEndpoints'
import Spritesheet from 'react-responsive-spritesheet'
import MainMenupic from '../Images/CyberSunsetAnimated.png'
import MMPic from '../Images/CyberSunsetBGNEW.gif'
import MainMenuSound from '../Sounds/keys-of-moon-eclipse.mp3'

class LoginRegister extends Component {

    constructor(props)
    {
        super(props)
        console.log(props)

        this.isMobile = props.FullMediaQuery.isTabletOrMobileDevice
    }


    componentDidMount(){
       welcome()
    }

    checkPortrait = () => {
        if(this.props.FullMediaQuery.isPortrait === true)
        {
            return "p"
        }
        else
        {
            return "nonp"
        }
    }
    

    render()
    {
        if(this.props.FullMediaQuery.isTabletOrMobileDevice === false)
        {
      console.log(this.isMobile)
        return(
            <div>
            <div  className="LoginWindow">

                <div className="TitleImage">
                <Spritesheet style={{width: "40vw", marginLeft: "auto", marginRight: "auto", paddingTop: "5vh"}}  image={MainMenupic} widthFrame={1024} heightFrame={512} steps={2} fps={2} loop={true} />
                {/* <CardImg src={MainMenupic} /> */}
                </div>
                <div className="LoginRegisterBtns">
                        {/* <CardTitle style={{color: "black"}}>Welcome to CyberFantasy</CardTitle> */}
                        <Link style={{fontSize: 30}} to="/login" className="btn btn-primary">Login</Link>
                        <div className="divider"/>
                        <Link style={{fontSize: 30}} to="/register" className="btn btn-primary">Register</Link>
                </div>
                <div className="Audiodiv"><audio className="mainAudio" controls loop src={MainMenuSound} autoPlay></audio></div>
            </div>
            {/* <div className="BGImage"><img width="100%" height="100%" src={MMPic}></img></div> */}
            </div>
        )
        }
        else
        {
            return(
                <div className="LoginRegisterMainM">
                <div className="BGImageM"><Spritesheet style={{width: "100vw"}}  image={MainMenupic} widthFrame={1024} heightFrame={512} steps={2} fps={2} loop={true} /></div>
                <div className={"LoginRegisterM" + this.checkPortrait()}>
                <Link style={{fontSize: 30}} to="/login" className="btn btn-primary">Login</Link>
                        <div className="divider"/>
                <Link style={{fontSize: 30}} to="/register" className="btn btn-primary">Register</Link>
                </div>    
                </div>
            )
        }
    }

}

export default LoginRegister