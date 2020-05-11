import React, { Component } from 'react';
import {Card, CardBody, CardTitle, Button, Modal, ModalBody} from 'reactstrap';
import './MissionStyles.css';
import Enemy from './Enemy';
import Battle from './Battle';
import MissionCardTemplate from '../Images/MissionCard.png'
import {missionBuilder} from './missionBuilder'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


Date.prototype.addHours = function(h){
    this.setHours(this.getHours()+h);
    return this;
}

class Mission extends Component {

constructor(props)
{
super(props)



this.state = {
    MissionStats: props.Mission.MissionStats,

  
    MissionInfo: [],
    Enemies: props.Mission.Enemies,
    MissionInfoReady: false,
    MissionNames: ["Find Gang Info", "Kill Leader",  "Back Up", "Drive by", "Fuck them up"],
    toggleModal: false,
    expiryTime: this.setInitalExpiry(props.Mission.MissionStats.ExpiresAt),
    expired: false
}


}



fight = () => {
    // var damage = this.props.Mission.difficulty * 10
    // var Enemies = this.state.Enemies
    // this.props.Player.current.upDatePlayer(damage, this.props.Mission.gains.cash, this.props.Mission.gains.exp)
    this.toggleModal()
}

setInitalExpiry(expiresAt){
    var diff = 30
    var expired = false
    var d = new Date(expiresAt)

    var today = new Date()
    var expires = new Date(d.getTime() + diff*60000)
    console.log(today, expires, this.diffMinutes(today, expires))
    if(today > expires)
    {
        expired = true
    }
    else
    {
        expired = false
    }
    return expired === true? 0 : this.diffMinutes(today, expires)
}

componentWillReceiveProps(props){
    if(this.state.MissionStats !== props.Mission)
    {
        this.setState({MissionStats: props.Mission.MissionStats, Enemies: props.Mission.Enemies, expiryTime: this.setInitalExpiry(props.Mission.MissionStats.ExpiresAt)})
    }
}

componentDidMount(){
    if(this.state.expiryTime === 0)
    {
        this.props.Rebuild(this.props.Mission.MissionStats.Id, this.props.Player.current.props.PlayerStats.Id, this.props.ArrayId)
    }
    // var diff = 30
    // var d = new Date(this.props.Mission.MissionStats.ExpiresAt)

    // var today = new Date()
    // var expires = new Date(d.getTime() + diff*60000)
    this.interval = setInterval(() => this.setState({expiryTime: this.setInitalExpiry(this.props.Mission.MissionStats.ExpiresAt)}), 30000)


    // this.buildMission()
}

componentWillUnmount(){
    clearInterval(this.interval)
}



toggleModal = () => {
    this.setState({toggleModal: !this.state.toggleModal})
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

diffMinutes(time1, time2){
    var diff = (time1.getTime() - time2.getTime())
    diff /= 60000;
    return Math.abs(Math.round(diff))
}



renderMissionInfo = (Mission) => {

    return(
        <div className="MissionInfo" style={{color: "white"}}>
        <p>{Mission.Name}</p>
        <p> Difficulty: {this.difficultyLevel(Mission.DIFFICULTY)}</p>
        <p> Favours: {Mission.Favours}</p>
        <p> CashGain: {Mission.CASHGAIN}</p>
        <p> Exp: {Mission.EXPGAIN}</p>
        <p> Expires: {this.state.expiryTime} Mins</p>
        <p> Enemies: {this.renderEnemies()}</p>
        {/* <Button onClick={() => this.props.Rebuild(this.props.Mission.MissionStats.Id, this.props.Player.current.props.PlayerStats.Id, this.props.ArrayId)}>rebuild</Button> */}
        <Button onClick={() => this.fight()}>Fight</Button>
        {/* <Button onClick={this.buildMission}>Refresh</Button> */}
        </div>
    )

}

renderEnemies = () => {
    if(this.state.Enemies.length > 0){
        return(
            this.state.Enemies.map((enemy, id) => {
                return(
            <FontAwesomeIcon icon="male" />
                )
        })
        )
    }
}


    render()
    {
        return(
            <div >
                <div className="Mission">
                {this.renderMissionInfo(this.state.MissionStats)}
                {/* <img width={382} height={436} src={MissionCardTemplate}></img> */}
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