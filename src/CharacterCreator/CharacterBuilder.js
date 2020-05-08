import React, {Component} from 'react'
import {Card, CardBody, CardTitle, Button} from 'reactstrap'
import Spritesheet from 'react-responsive-spritesheet';
import bodies from './Sprites/Bodies_M.png';
import eyes from './Sprites/Eyes_M.png';
import hair from './Sprites/Hair_M.png';
import heads from './Sprites/Heads_M.png';
import faces from './Sprites/Faces.png';
import './CharacterCreatorStyles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class CharacterBuilder extends Component {

constructor(props)
{
    super(props)

    this.state = {
        bodyArray: [1,2,3,4,5,6],
        eyesArray: [1,2,3,4,5,6],
        hairArray: [1,2,3,4,5,6],
        headArray: [1,2,3,4,5,6],
        faceArray: [1,2,3,4,5,6],
        spritePos: {
            bodyPos: 1,
            eyePos: 1,
            hairPos: 1,
            headPos: 1,
            facePos: 1,
        },

        testImage: ""

    }
 
}

componentWillMount(){
    if(this.props.avatarCode !== undefined)
    {
        this.buildSpriteProfile(this.props.avatarCode)
    }
}

buildSpriteProfile = (avatarCode) => {
    var spritePos = this.state.spritePos;
    var avatarsCode = avatarCode.toString().split("",);

    spritePos.bodyPos = avatarsCode[0];
    spritePos.eyePos = avatarsCode[1];
    spritePos.hairPos = avatarsCode[2];
    spritePos.headPos = avatarsCode[3];
    spritePos.facePos = avatarsCode[4];

    this.setState({spritePos: spritePos})
}


componentDidMount(){
}

getSpriteProfile = () => {
    var sprite = this.state.spritePos;
    var avatarCode = sprite.bodyPos.toString() + sprite.eyePos.toString() + sprite.hairPos.toString() + sprite.headPos.toString() + sprite.hairPos.toString() 
    return avatarCode
}

MoveLeft = (field) => {
    var currentPos = this.state.spritePos
    if(currentPos[field] === 1)
    {

    }
    else
    {
            currentPos[field] = currentPos[field] - 1
            this.setState({spritePos: currentPos})
            this.refs[field].goToAndPause(currentPos[field]);

    }

  

}

MoveRight = (field) => {
    var currentPos = this.state.spritePos
    if(currentPos[field]  === 6)
    {

    }
    else
    {
        currentPos[field]  = currentPos[field]  + 1
        this.setState({spritePos: currentPos})
        this.refs[field].goToAndPause(currentPos[field]);
    }

}   

render()
{
    if(this.props.justProfile === true)
    {
        
        return(
            <div  >
            <div id="character" >
                <Spritesheet  style={{position: "absolute"}} ref={"bodyPos"} image={bodies} widthFrame={512} heightFrame={512} startAt={this.state.spritePos.bodyPos} endAt={this.state.spritePos.bodyPos} autoplay={false} steps={6} fps={0} loop={false} />
                <Spritesheet style={{position: "absolute"}} ref={"headPos"} image={heads} widthFrame={512} heightFrame={512} startAt={this.state.spritePos.headPos} endAt={this.state.spritePos.headPos} autoplay={false} steps={6} fps={0} loop={false} />
                <Spritesheet style={{position: "absolute"}} ref={"hairPos"} image={hair} widthFrame={512} heightFrame={512} startAt={this.state.spritePos.hairPos} endAt={this.state.spritePos.hairPos} autoplay={false} steps={6} fps={0} loop={false} />
                <Spritesheet style={{position: "absolute"}} ref={"eyePos"} image={eyes} widthFrame={512} heightFrame={512} startAt={this.state.spritePos.eyePos} endAt={this.state.spritePos.eyePos} autoplay={false} steps={6} fps={0} loop={false} />
                <Spritesheet style={{position: "absolute"}} ref={"facePos"}  image={faces} widthFrame={512} heightFrame={512} startAt={this.state.spritePos.facePos} endAt={this.state.spritePos.facePos} autoplay={false} steps={6} fps={0} loop={false} />
            </div>
            </div>
        )
    }
    else
    {
    return(
       <div className="MainWindow">
        <div id="character" className="Main">
            <Spritesheet  style={{position: "absolute"}} ref={"bodyPos"} image={bodies} widthFrame={512} heightFrame={512} startAt={this.state.spritePos.bodyPos} endAt={this.state.spritePos.bodyPos} steps={6} fps={6} loop={false} />
            <Spritesheet style={{position: "absolute"}} ref={"headPos"} image={heads} widthFrame={512} heightFrame={512} startAt={this.state.spritePos.headPos} endAt={this.state.spritePos.headPos} steps={6} fps={6} loop={true} />
            <Spritesheet style={{position: "absolute"}} ref={"hairPos"} image={hair} widthFrame={512} heightFrame={512} startAt={this.state.spritePos.hairPos} endAt={this.state.spritePos.hairPos} steps={6} fps={6} loop={true} />
            <Spritesheet style={{position: "absolute"}} ref={"eyePos"} image={eyes} widthFrame={512} heightFrame={512} startAt={this.state.spritePos.eyePos} endAt={this.state.spritePos.eyePos} steps={6} fps={6} loop={true} />
            <Spritesheet style={{position: "absolute"}} ref={"facePos"}  image={faces} widthFrame={512} heightFrame={512} startAt={this.state.spritePos.facePos} endAt={this.state.spritePos.facePos} steps={6} fps={6} loop={true} />
        </div>
        <div>

            <div>
            <FontAwesomeIcon onClick={() => this.MoveLeft("bodyPos")} icon="chevron-left"/>
            Body {this.state.spritePos.bodyPos}
            <FontAwesomeIcon onClick={() => this.MoveRight("bodyPos")} icon="chevron-right"/>
            </div>
            <div>
            <FontAwesomeIcon onClick={() => this.MoveLeft("eyePos")} icon="chevron-left"/>
            Eye {this.state.spritePos.eyePos}
            <FontAwesomeIcon onClick={() => this.MoveRight("eyePos")} icon="chevron-right"/>
            </div>
            <div>
            <FontAwesomeIcon onClick={() => this.MoveLeft("hairPos")} icon="chevron-left"/>
            Hair {this.state.spritePos.hairPos}
            <FontAwesomeIcon onClick={() => this.MoveRight("hairPos")} icon="chevron-right"/>
            </div>
            <div>
            <FontAwesomeIcon onClick={() => this.MoveLeft("headPos")} icon="chevron-left"/>
            Head {this.state.spritePos.headPos}
            <FontAwesomeIcon onClick={() => this.MoveRight("headPos")} icon="chevron-right"/>
            </div>
            <div>
            <FontAwesomeIcon onClick={() => this.MoveLeft("facePos")} icon="chevron-left"/>
            Face {this.state.spritePos.facePos}
            <FontAwesomeIcon  onClick={() => this.MoveRight("facePos")} icon="chevron-right"/>
            </div>
           
          
        </div>
        </div>
    )
    }
}


}

export default CharacterBuilder
