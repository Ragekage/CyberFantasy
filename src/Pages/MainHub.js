import React, {Component} from 'react'
import Player from '../Player/Player'
import Mission from '../Jobs/Mission';


class MainHub extends Component {



    render(){
        return(
            <div>
            <div style={{float: "left"}}>
            <Player/>
          </div>
          <div style={{float: "right"}}>
            <Mission/>
          </div>
          </div>
        )}
}

export default MainHub