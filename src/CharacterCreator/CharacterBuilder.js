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

constructor()
{
    super()

    this.state = {
        bodyArray: [1,2,3,4,5,6],
        eyesArray: [1,2,3,4,5,6],
        hairArray: [1,2,3,4,5,6],
        headArray: [1,2,3,4,5,6],
        faceArray: [1,2,3,4,5,6],
        spritePos: {
            bodyPos: 2,
            eyePos: 2,
            hairPos: 2,
            headPos: 2,
            facePos: 2,
        },

        testImage: ""

    }
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
        console.log(currentPos[field] )
        this.refs[field].goToAndPause(currentPos[field]);
    }

    console.log(this.refs[field])
}   

render()
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
            <Card style={{color: "black",}}>
            <CardTitle style={{textAlign: "center"}}>Character Creator</CardTitle>
            <CardBody>
            <FontAwesomeIcon onClick={() => this.MoveLeft("bodyPos")} icon="chevron-left"/>
            Body {this.state.spritePos.bodyPos}
            <FontAwesomeIcon onClick={() => this.MoveRight("bodyPos")} icon="chevron-right"/>
            <FontAwesomeIcon onClick={() => this.MoveLeft("eyePos")} icon="chevron-left"/>
            Eye {this.state.spritePos.eyePos}
            <FontAwesomeIcon onClick={() => this.MoveRight("eyePos")} icon="chevron-right"/>
            <FontAwesomeIcon onClick={() => this.MoveLeft("hairPos")} icon="chevron-left"/>
            Hair {this.state.spritePos.hairPos}
            <FontAwesomeIcon onClick={() => this.MoveRight("hairPos")} icon="chevron-right"/>
            <FontAwesomeIcon onClick={() => this.MoveLeft("headPos")} icon="chevron-left"/>
            Head {this.state.spritePos.headPos}
            <FontAwesomeIcon onClick={() => this.MoveRight("headPos")} icon="chevron-right"/>
            <FontAwesomeIcon onClick={() => this.MoveLeft("facePos")} icon="chevron-left"/>
            Face {this.state.spritePos.facePos}
            <FontAwesomeIcon  onClick={() => this.MoveRight("facePos")} icon="chevron-right"/>
            </CardBody>
            </Card>
           
          
        </div>
        </div>
    )
}


}

export default CharacterBuilder
