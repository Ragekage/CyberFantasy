import React, { Component } from 'react';
import Mission from './Mission';
import Battle from './Battle'
import {Card, CardBody, Row, Col} from 'reactstrap';

class MissionBoard extends Component {

constructor(props){
    super(props)
    this.state = {
        MissionList: []
    }
}

componentDidMount(){
    this.buildMissionBoards()
}

buildMissionBoards = () => {
var missionList = [1,2,3];

var newlist = [];
missionList.map((mission, id) => {
  
    var MissionType = {
        difficulty: mission,
        type: "ranged",
        gains: {cash: mission * 100, exp: mission * 100 * 2, items: {}}
    }

    newlist.push(MissionType)
})
this.setState({MissionList: newlist})
}


    render()
    {
        if(this.state.MissionList.length > 0)
        {
            return(
        <div className="MissionBoard">
         {this.state.MissionList.map((mission, id) => {   
        return(
            <Col>
            <div>
               <Mission Player={this.props.Player}/>
            </div>
            </Col>
        )})}
        </div>
        )
        }
        else
        {
            return(
                <div>Loading</div>
            )
        }
       
    }
}

export default MissionBoard