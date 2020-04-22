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
        data: null,
    }
    this.playerRef = React.createRef()

    }

    componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

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