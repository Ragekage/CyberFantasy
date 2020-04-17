import React, { Component } from 'react';
import {Card, CardBody, CardTitle, Button} from 'reactstrap';
import './MissionStyles.css';
import Enemy from './Enemy';


class Mission extends Component {

constructor(props)
{
super(props)

this.state = {
    MissionStats: {
        DIFFICULTY: 0,
        TYPES: [],
        Favours: ""
    },
    Mission: {},
    MissionInfo: [],
    Enemies: [],
    MissionInfoReady: false,
    Gains: {}
}
}

fight = () => {
    var damage = this.props.Mission.difficulty * 10
    var Enemies = this.state.Enemies
    this.props.Player.current.upDatePlayer(damage, this.props.Mission.gains.cash, this.props.Mission.gains.exp)
    Enemies[0].doDamage(20)
}

componentDidMount(){
    this.setState({Mission: this.props.Mission, Gains: this.props.Mission.gains})
    this.buildMission()
}

buildMission = () => {
    var random = Math.random();
    var Enemies = this.state.Enemies;
    var MissionStats = this.state.MissionStats
    
    random = Math.floor(random * 4) + 1;
    var check
    for( check = 0; check <= random; check++)
    {
        var newEnemy = new Enemy();
        MissionStats.DIFFICULTY = MissionStats.DIFFICULTY + newEnemy.difficulty
        MissionStats.TYPES.push(newEnemy.EnemyStats.Type)
        Enemies.push(newEnemy);

    }

    this.calculateMissionFavours(MissionStats)
    console.log(MissionStats)

    this.setState({Enemies: Enemies, MissionInfoReady: true})
}

calculateMissionFavours = (stats) => {
    if(stats.TYPES.length > 0)
    {
        var RangeAmount = stats.TYPES.filter(type => type === "ranged")
        var MeleeAmount = stats.TYPES.filter(type => type === "melee")
        var CommonAmount = stats.TYPES.filter(type => type === "common")

        if(RangeAmount.length > MeleeAmount.length && RangeAmount.length > CommonAmount.length)
        {
            stats.Favours = "Ranged"
        }
        else if (MeleeAmount.length > RangeAmount.length && MeleeAmount.length > CommonAmount.length)
        {
            stats.Favours = "Melee"
        }
        else if (CommonAmount.length > RangeAmount.length && CommonAmount.length > MeleeAmount.length)
        {
            stats.Favours = "Common"
        }
        else
        {
            stats.Favours = "Mixed"
        }

        this.setState({MissionStats: stats})
    }
}

MissionInfoCallBack = () => {

}

BuildMissionInfo = () => {

}

renderMissionInfo = () => {
if(this.state.MissionInfoReady === true)
{
    return(
        <div style={{color: "black"}}>
        <p> Difficulty: {this.state.MissionStats.DIFFICULTY}</p>
        <p> Favours: {this.state.MissionStats.Favours}</p>
        <p> CashGain: {this.props.Mission.gains.cash}</p>
        <p> Exp: {this.props.Mission.gains.exp}</p>
        <Button onClick={() => this.fight()}>Fight</Button>
    </div>
    )
}
}

renderEnemies = () => {
    if(this.state.Enemies.length > 0){
        return(
            <div>
                {this.state.Enemies[1]}
            </div>
        )
    }
}


    render()
    {

        return(
            <div className="MissionCard">
                <div>
                {this.renderMissionInfo()}
                    Mission Title
                </div>
             
            </div>
        )
    }
}

export default Mission