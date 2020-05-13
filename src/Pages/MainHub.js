import React, {Component} from 'react'
import {Col, Row} from 'reactstrap'
import {LogoutButton} from '../Utilities/AuthService'
import {checkForPlayer} from '../Utilities/ServerEndpoints'
import Player from '../Player/Player'
import Shop from '../Shops/Shop'
import MissionBoard from '../Jobs/MissionBoard';




class MainHub extends Component {

  constructor(props){
    super(props)
  
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

        player: null,
        givenPoints: 10,
        data: null,
    }
    this.playerRef = React.createRef()

    }

    componentDidMount() {
      var user = JSON.parse(localStorage.getItem('userDetail'))
      if(user !== null)
      {
        checkForPlayer(user.id).then(response => {
          this.setState({player: response.record})
        }).catch(error => {
        })
      }
  };

  getPlayerInfo(){

  }


    render(){
      if(this.props.FullMediaQuery.isTabletOrMobileDevice === false)
      {
      if(this.state.player === null)
      {
        return(<div>
          Loading...
        </div>)
      }
      else
      {
        return(
            <div style={{backgroundColor: "#282c24"}}>
            <div className="PlayerBar">
            <Player ref={this.playerRef} PlayerStats={this.state.player}/>
            </div>
          <div className="MainMenu">  
        
          <MissionBoard Player={this.playerRef}/>
          {/* <div>
            <Shop Player={this.playerRef}/>
          </div> */}
          <LogoutButton />
          </div>
        
          </div>
        )
      }
    }
    else
    {
      return(<div style={{color: "white"}}>
        Sorry Not Currently Available On Mobile
        <LogoutButton isMobile={true}/>
      </div>)
    }
  }
}

export default MainHub