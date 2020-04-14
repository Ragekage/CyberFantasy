import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import axios from 'axios';

class Player extends React.Component{

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
        ATK: 0,
        WATK: 0,
        HEALTH: 100,
        CASH: 500,
        expLimit: 0,   
    },

    Equipped:{
        LHANDWEP: {},
        RHANDWEP: {},
        HANDS: {},
        FEET: {},
        LEGS: {},
        CHEST: {},
        HEAD: {}
    },

    player: [],
    givenPoints: 10,
}
}

componentDidMount(){
    this.calculateLevelUpExp(this.state.PlayerStats) 
    // axios.get('api/player/1' )
    // .then(res => {
    //     const player = res.data;
    //     this.setState({player})
    // })
}

testApiCall = async() => {

}

plusStat = (area) => {
    var stats = this.state.PlayerStats;
    var points = this.state.givenPoints;

    if(points > 0)
    {
    stats[area] = stats[area] + 1
    points = points - 1
    this.setState({givenPoints: points}, this.calculateBaseStats(stats))
    }
}

minusStat = (area) => {
    var stats = this.state.PlayerStats;
    var points = this.state.givenPoints;

    if(stats[area] !== 0)
    {
    stats[area] = stats[area] - 1
    points = points + 1
    this.setState({givenPoints: points}, this.calculateBaseStats(stats))
    }
}

calculateBaseStats = (stats) => {
    stats.ATK = stats.STR * 2 + stats.INT * 0.25;
    stats.HEALTH = 100 + stats.STM * 20 + stats.STR * 10 / 2;
    stats.WATK = stats.INT * 2 + stats.STR * 0.25
    this.setState({PlayerStats: stats})
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

calculateLevelUpExp = (stats) => {
    stats.expLimit = stats.LVL * 100
    this.setState({PlayerStats: stats})
}

levelUp = () => {
    var points = this.state.givenPoints
    var stats = this.state.PlayerStats
    stats.LVL = stats.LVL + 1;
    points = points + 3
    this.setState({givenPoints: points}, this.calculateLevelUpExp(stats))
}

render(){
    console.log(this.state.player)
    return(
        <div style={{fontSize: "medium"}}>
        <div>
            <p>{this.state.PlayerStats.Name}</p>
            {this.plusMinus("STR")}STR: {this.state.PlayerStats.STR}
            {this.plusMinus("INT")}INT: {this.state.PlayerStats.INT}
            {this.plusMinus("STM")}STM: {this.state.PlayerStats.STM}
        </div>
        <div>
            <p>LEVEL: {this.state.PlayerStats.LVL}</p>
            <p>EXP: {this.state.PlayerStats.EXP}/{this.state.PlayerStats.expLimit}</p>
            <p>DMG MELEE: {this.state.PlayerStats.ATK}</p>
            <p>DMG WEAPON: {this.state.PlayerStats.WATK}</p>
            <p>HEALTH: {this.state.PlayerStats.HEALTH}</p>
            <p>CASH: ¥{this.state.PlayerStats.CASH}</p>
            <button onClick={() => this.levelUp()}>LVL UP</button>
        </div>
        </div>
    )
}




}
export default Player