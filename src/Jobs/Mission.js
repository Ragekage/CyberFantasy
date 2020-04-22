import React, { Component } from 'react';
import {Card, CardBody, CardTitle, Button, Modal, ModalBody} from 'reactstrap';
import './MissionStyles.css';
import Enemy from './Enemy';
import Battle from './Battle';
import MissionCardTemplate from '../Images/MissionCard.png'


class Mission extends Component {

constructor(props)
{
super(props)

this.state = {
    MissionStats: {
        DIFFICULTY: 0,
        TYPES: [],
        CASHGAIN: 0,
        EXPGAIN: 0,
        Favours: "",
        Name: "",
    },

    baseMissionStats: {
        DIFFICULTY: 0,
        TYPES: [],
        CASHGAIN: 0,
        EXPGAIN: 0,
        Favours: "",
        Name: ""
    },
    MissionInfo: [],
    Enemies: [],
    MissionInfoReady: false,
    MissionNames: ["Find Gang Info", "Kill Leader",  "Back Up", "Drive by", "Fuck them up"],
    toggleModal: false,
}
}

fight = () => {
    // var damage = this.props.Mission.difficulty * 10
    // var Enemies = this.state.Enemies
    // this.props.Player.current.upDatePlayer(damage, this.props.Mission.gains.cash, this.props.Mission.gains.exp)
    this.toggleModal()
}

componentDidMount(){
   
    this.buildMission()
}

buildMission = () => {
    var random = Math.random();
    var randomMissionName = Math.random();
    var missionNames = this.state.MissionNames
    randomMissionName = Math.floor(randomMissionName * this.state.MissionNames.length)
    var Enemies = [];
    var MissionStats = {
        DIFFICULTY: 0,
        TYPES: [],
        CASHGAIN: 0,
        EXPGAIN: 0,
        Favours: "",
        Name: "",
    }
    
    random = Math.floor(random * 4) + 1;
    var check
    for( check = 0; check <= random; check++)
    {
        var newEnemy = new Enemy();
        MissionStats.DIFFICULTY = MissionStats.DIFFICULTY + newEnemy.difficulty;
        MissionStats.CASHGAIN = MissionStats.CASHGAIN + newEnemy.EnemyStats.CashGained;
        MissionStats.EXPGAIN = MissionStats.EXPGAIN + newEnemy.EnemyStats.ExpGained;
        MissionStats.Name = missionNames[randomMissionName]
        MissionStats.TYPES.push(newEnemy.EnemyStats.Type)
        Enemies.push(newEnemy);

    }

    this.calculateMissionFavours(MissionStats)
    console.log(MissionStats)

    this.setState({Enemies: Enemies, MissionInfoReady: true})
}

toggleModal = () => {
    this.setState({toggleModal: !this.state.toggleModal})
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


difficultyLevel = (difficulty) => {
    if(difficulty <= 15)
    {
        return "Low"
    }
    else if(difficulty > 15 && difficulty <= 25)
    {
        return "Medium"
    }
    else
    {
        return "High"
    }
}

renderMissionInfo = () => {
if(this.state.MissionInfoReady === true)
{
    return(
        <div className="MissionInfo" style={{color: "black"}}>
        <p>{this.state.MissionStats.Name}</p>
        <p> Difficulty: {this.difficultyLevel(this.state.MissionStats.DIFFICULTY)}</p>
        <p> Favours: {this.state.MissionStats.Favours}</p>
        <p> CashGain: {this.state.MissionStats.CASHGAIN}</p>
        <p> Exp: {this.state.MissionStats.EXPGAIN}</p>
        <Button onClick={() => this.fight()}>Fight</Button>
        <Button onClick={this.buildMission}>Refresh</Button>
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
 console.log(this.state.Enemies)
        return(
            <div >
                <div className="Mission">
                {this.renderMissionInfo()}
                <img width={382} height={436} src={MissionCardTemplate}></img>
                </div>
            <Modal className="battleModal"  size="lg" isOpen={this.state.toggleModal}>
                <ModalBody >
                <Battle toggleModal={this.toggleModal} Enemies={this.state.Enemies} Player={this.props.Player}/>
                </ModalBody>
            </Modal>
            </div>
        )
    }
}

export default Mission