import React, {Component} from 'react'
import {Col, Row} from 'reactstrap'
import Player from '../Player/Player'
import Shop from '../Shops/Shop'
import MissionBoard from '../Jobs/MissionBoard';
import CharacterBuilder from '../CharacterCreator/CharacterBuilder';


class MainHub extends Component {

  constructor(){
    super()
    this.state = {
        PlayerStats:{
            Name: "Kade",
            LVL: 1,
            EXP: 0,
            STR: 0,
            INT: 0,
            STM: 0,
            ATK: 10,
            WATK: 10,
            MAXHEALTH: 100,
            HEALTH: 100,
            CASH: 500,
            expLimit: 100,   
        },

        player: [],
        givenPoints: 10,
    }
    this.playerRef = React.createRef()

    }

    render(){
        return(
            <div>
            <div>
            <Player ref={this.playerRef} PlayerStats={this.state.PlayerStats}/>
            </div>
          <div>
            <MissionBoard Player={this.playerRef}/>
          </div>
          <div>
            <Shop Player={this.playerRef}/>
          </div>
          {/* <Row>
          <CharacterBuilder CreateCharacter={this.props.CreateCharacter}/>
          </Row> */}
          </div>
        )}
}

export default MainHub