import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Player extends React.Component{

constructor(){
super()
this.state = {
    PlayerStats:{
        Name: "Kade",
        STR: 0,
        INT: 0,
        STM: 0    
    },

    givenPoints: 10,
}
}

plusStat = (area) => {
    var stats = this.state.PlayerStats;
    var points = this.state.givenPoints;

    stats[area] = stats[area] + 1
    points = points - 1
    this.setState({PlayerStats: stats, givenPoints: points})
}

minusStat = (area) => {
    var stats = this.state.PlayerStats;
    var points = this.state.givenPoints;

    stats[area] = stats[area] - 1
    points = points + 1
    this.setState({PlayerStats: stats, givenPoints: points})
}

plusMinus = (area) => {
    return(
        <div style={{display: "flex"}}>
        <div onClick={() => this.plusStat(area)}>
            <FontAwesomeIcon icon="plus" />
        </div>
        {this.state.givenPoints}
        <div onClick={() => this.minusStat(area)}>
            <FontAwesomeIcon icon="minus" />
        </div>
        </div>    
        )
}

render(){
    return(
        <div>
            <p>{this.state.PlayerStats.Name}</p>
            <p>{this.plusMinus("STR")}STR: {this.state.PlayerStats.STR}</p>
            <p>{this.plusMinus("INT")}INT: {this.state.PlayerStats.INT}</p>
            <p>{this.plusMinus("STM")}STM: {this.state.PlayerStats.STM}</p>
        </div>
    )
}




}
export default Player