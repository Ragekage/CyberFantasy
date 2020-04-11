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
        STM: 0,
        ATK: 0,
        WATK: 0,
        HLT: 0,    
    },

    givenPoints: 10,
}
}

plusStat = (area) => {
    var stats = this.state.PlayerStats;
    var points = this.state.givenPoints;

    if(points > 0)
    {
    stats[area] = stats[area] + 1
    points = points - 1
    this.setState({PlayerStats: stats, givenPoints: points})
    }
}

minusStat = (area) => {
    var stats = this.state.PlayerStats;
    var points = this.state.givenPoints;

    if(stats[area] !== 0)
    {
    stats[area] = stats[area] - 1
    points = points + 1
    this.setState({PlayerStats: stats, givenPoints: points})
    }
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
        <div>
            <p>{this.state.PlayerStats.Name}</p>
            <p>{this.plusMinus("STR")}STR: {this.state.PlayerStats.STR}</p>
            <p>{this.plusMinus("INT")}INT: {this.state.PlayerStats.INT}</p>
            <p>{this.plusMinus("STM")}STM: {this.state.PlayerStats.STM}</p>
        </div>
        <div>
            <p>DMG MELEE:</p>
            <p>DMG WEAPON:</p>
            <p>HEALTH:</p>
        </div>
        </div>
    )
}




}
export default Player