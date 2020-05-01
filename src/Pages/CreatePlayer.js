import React, { Component } from "react"
import { Form, FormGroup, FormFeedback, Button, Input, Modal, ModalBody} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CreateWindow from '../Images/BattleWindow.png'

import {createPlayer, checkPlayerName} from '../Utilities/ServerEndpoints'
import CharacterBuilder from '../CharacterCreator/CharacterBuilder'


class CreatePlayer extends Component {


constructor(props){
 super(props)   

 
console.log(props)
    this.state = {
        playerDetails: {
            name: "",
            STR: 0,
            INT: 0,
            STM: 0,
            STL: 0,
            givenPoints: 10,
            profileCode: null, 
        },
        nameInvalid: false,
        pointsInvalid: false,
        modalOpen: false,
    }
}

onChange = (e) => {
    var player = this.state.playerDetails;
    player.name = e.target.value;
    this.setState({playerDetails: player})
}

plusMinus = (area, direction) => {
    var player = this.state.playerDetails
    if(player.givenPoints > 0)
    {
        if(direction === "add")
        {
            player.givenPoints = player.givenPoints - 1
            player[area] = player[area] + 1
        }
        else
        {
            if(player[area] === 0)
            {

            }
            else
            {
            player.givenPoints = player.givenPoints + 1
            player[area] = player[area] - 1
            }
        }

    }
    else
    {
        if(direction === "minus")
        {
            if(player[area] === 0)
            {

            }
            else
            {
            player.givenPoints = player.givenPoints + 1
            player[area] = player[area] - 1
            }
        }
    }

    this.setState({playerDetails: player})

}

toggleModal = () => {
    this.setState({modalOpen: !this.state.modalOpen})
}

setNameInvalid = () => {
    this.setState({nameInvalid: true})
    setTimeout(() => {
    this.setState({nameInvalid: false})
    }, 2000)
}

setPointsInvalid = () => {
    this.setState({pointsInvalid: true})
    setTimeout(() => {
    this.setState({pointsInvalid: false})
    }, 2000)
}

createNewPlayer = () => {
    var player = this.state.playerDetails
    if(player.givenPoints > 0)
    {
        this.setPointsInvalid()
    }
    else
    {
    checkPlayerName(player.name).then( response => {
        if(response === "already exists")
        {
            this.setNameInvalid()
        }
        else
        {

            player.profileCode = this.refs.playerProfile.getSpriteProfile()
           
            createPlayer(player).then(response => {
                if(response === "created")
                {
                    this.toggleModal()
                    this.setState({playerDetails: player})
                }
                else
                {

                }
            })
        }
    })
    }
}

plusMinusRender = (stat) => {
    return(
        <div className="PlusMinus" style={{display: "flex"}}>
        <div style={{marginRight: 5}} onClick={() => this.plusMinus(stat, "add")}>
            <FontAwesomeIcon icon="plus" />
        </div>
        {this.state.playerDetails[stat]}
        <div style={{marginLeft: 5}} onClick={() => this.plusMinus(stat, "minus")}>
            <FontAwesomeIcon icon="minus" />
        </div>
        </div>    
        )
}

displayError = () => {
    if(this.state.pointsInvalid === true)
    {
        return "flex"
    }
    else
    {
        return "none"
    }
}


render()
{
    if(this.props.FullMediaQuery.isTabletOrMobileDevice === false)
    {
    return(
        <div className="createPlayerMain">
        <img src={CreateWindow} width={1260} height={900}></img>
        <Form>
            <FormGroup className="Characterselect">
            <CharacterBuilder ref="playerProfile"/>
            </FormGroup>
            <FormGroup className="Playerinput">
            Player Name: <Input invalid={this.state.nameInvalid} onChange={e => this.onChange(e)} type="playername" name="playername" id="playername" placeholder="Enter Player name"></Input>
            <FormFeedback>Name Exists</FormFeedback>
            </FormGroup>
            <FormGroup className="givePoints">
            <div style={{marginLeft: 85}}>{this.state.playerDetails.givenPoints} Points</div>
            <div style={{display: "inline-flex"}}> STR {this.plusMinusRender("STR")} </div>
            <div style={{display: "inline-flex"}}> INT{this.plusMinusRender("INT")} </div>
            <div style={{display: "inline-flex"}}> STM {this.plusMinusRender("STM")}</div>
            <div style={{display: "inline-flex"}}> STL {this.plusMinusRender("STL")} </div>
            </FormGroup>
            <FormGroup className="CreatePlayerSaveB" >
            <Button invalid={true} style={{fontSize: 30}}   onClick={this.createNewPlayer} className="CreatePlayerSaveB">Save</Button>
            <div style={{transform: "translate(340px, -1010px)", display: this.displayError(), color: "red", fontSize: "25px"}} >Please use all points</div>
            </FormGroup>
        </Form>
        <Modal style={{transform: "translate(-180px, 0px)"}} className="battleModal" isOpen={this.state.modalOpen}>
            <ModalBody >
              <div style={{transform: "translate(150px, 100px)", width: 700, fontSize: 35}}>  <p>Thank you for creating a profile! {this.state.playerDetails.name}</p>
                Soon you will be able to use him! look out for a email when the feature becomes available 
                <div style={{transform: "translate(600px, 100px)", fontSize: 30}}><Button style={{fontSize: 35}} onClick={() => this.props.history.push('/welcome')}>OK</Button></div> </div>
            </ModalBody>
        </Modal>
        </div>
    )
    }
    else
    {
        return(
            <div className="CreateCharacterMainM">Apologise the character creator is not currently available for mobile. :(</div>
        )

    }}



}

export default CreatePlayer