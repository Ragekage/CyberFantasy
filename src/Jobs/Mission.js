import React, { Component } from 'react';
import {Card, CardBody, CardTitle, Button} from 'reactstrap';
import './MissionStyles.css';


class Mission extends Component {

constructor(props)
{
super(props)

this.state = {
    MissionStats: {
        DIFFICULTY: "",
        TYPE: "",
    },
    Mission: {},
    Gains: {}
}
console.log(this.props.Player)
}

fight = () => {
    var damage = this.props.Mission.difficulty * 10
    this.props.Player.current.upDatePlayer(damage, this.props.Mission.gains.cash, this.props.Mission.gains.exp)
}

componentDidMount(){
    this.setState({Mission: this.props.Mission, Gains: this.props.Mission.gains})
    
}

    render()
    {

        return(
            <div className="MissionCard">
                <div>
                    Mission Title
                </div>
                <div style={{color: "black"}}>
                    <p> Difficulty: {this.props.Mission.difficulty}</p>
                    <p> Type: {this.props.Mission.type}</p>
                    <p> CashGain: {this.props.Mission.gains.cash}</p>
                    <p> Exp: {this.props.Mission.gains.exp}</p>
                    <Button onClick={() => this.fight()}>Fight</Button>
                </div>
            </div>
        )
    }
}

export default Mission