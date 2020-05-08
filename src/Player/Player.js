import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Card, CardBody, Button, Row, Col, Modal, ModalBody} from 'reactstrap'
import Inventory from './Inventory';
import characterImage from '../Images/Andriod.png'
import CharacterBuilder from '../CharacterCreator/CharacterBuilder'
import CharacterInfoTemplate from '../Images/Character_info.png'
import './PlayerStyles.css'
import Spritesheet from 'react-responsive-spritesheet'

// import axios from 'axios';

class Player extends React.Component{

constructor(props){
super(props)
this.state = {
    PlayerStats: this.props.PlayerStats,   
    

    Equipped:{
        LHANDWEP: {},
        RHANDWEP: {},
        HANDS: {},
        FEET: {},
        LEGS: {},
        CHEST: {},
        HEAD: {}
    },

    DamageAmounts:{
        Melee: null,
        Ranged: null
    },

    items: [],
    player: [],
    givenPoints: 10,
    currentMaxHealth: null,
    toggleModal: false,

}
}

componentDidMount(){
    this.calculateLevelUpExp(this.state.PlayerStats)
    this.calculateBaseStats(this.state.PlayerStats) 
    // axios.get('api/player/1' )
    // .then(res => {
    //     const player = res.data;
    //     this.setState({player})
    // })
}

testApiCall = async() => {

}

setCurrentMaxHealth = (playerStats) => {
    this.setState({currentMaxHealth: playerStats.Health})
}

plusStat = (area) => {
    var stats = this.state.PlayerStats;
    var points = this.state.givenPoints;

    if(points > 0)
    {
    stats[area] = stats[area] + 1
    points = points - 1
    this.setState({givenPoints: points}, this.calculateBaseStats(stats, "plus"))
    }
}

minusStat = (area) => {
    var stats = this.state.PlayerStats;
    var points = this.state.givenPoints;

    if(stats[area] !== 0)
    {
    stats[area] = stats[area] - 1
    points = points + 1
    this.setState({givenPoints: points}, this.calculateBaseStats(stats, "minus"))
    }
}

calculateBaseStats = (stats, minusPlus) => {
    var currentMaxHealth = this.state.currentMaxHealth;
    var damageAmounts = this.state.DamageAmounts;

    damageAmounts.Melee = stats.STR * 2 + stats.INT * 0.25;
    currentMaxHealth = 100 + (stats.STM * 20) + (stats.STR * 10 / 2);
    damageAmounts.Ranged = stats.INT * 2 + stats.STR * 0.25
 
    this.setState({currentMaxHealth: currentMaxHealth, DamageAmounts: damageAmounts})


}

plusMinus = (area) => {
    // if(this.state.givenPoints > 0)
    // {
    // return(
    //     <div className="PlusMinus" style={{display: "flex"}}>
    //     <div style={{marginRight: 5}} onClick={() => this.plusStat(area)}>
    //         <FontAwesomeIcon icon="plus" />
    //     </div>
    //     {this.state.givenPoints}
    //     <div style={{marginLeft: 5}} onClick={() => this.minusStat(area)}>
    //         <FontAwesomeIcon icon="minus" />
    //     </div>
    //     </div>    
    //     )
    // }
}

calculateLevelUpExp = (stats) => {
    stats.expLimit = stats.LVL * 100
    this.setState({PlayerStats: stats})
}

 upDatePlayer = (damage = 0, cash = 0, exp = 0, item) => {
     var player = this.state.PlayerStats
     player.HEALTH = player.HEALTH - damage;
     player.CASH = player.CASH + cash;
     player.EXP = player.EXP + exp;
    if(player.HEALTH <= 0)
    {
        this.killPlayer()
    }
     this.setState({PlayerStats: player})
}

useItem = (health) => {
    var player = this.state.PlayerStats
    var maxHealth = this.state.currentMaxHealth
    var itemList = this.state.items;
    itemList.splice(itemList.length - 1, 1)
    player.HEALTH = player.HEALTH + health;
    if(player.HEALTH > maxHealth)
    {
        player.HEALTH = maxHealth;
    }
    this.setState({PlayerStats: player, items: itemList})
}

givePlayerItem = (item, cost) => {
    var player = this.state.PlayerStats;
    var itemList = this.state.items;
    if(player.CASH < cost)
    {

    }
    else
    {
    player.CASH = player.CASH - cost;
    itemList.push(item);
    this.setState({items: itemList})
    }
}

killPlayer = () => {
    this.setState({toggleModal: true})
}

levelUp = () => {
    var points = this.state.givenPoints;
    var stats = this.state.PlayerStats;
    stats.EXP = stats.EXP - stats.expLimit;
    stats.LVL = stats.LVL + 1;
    points = points + 3;
    this.setState({givenPoints: points}, this.calculateLevelUpExp(stats))
}

checkForLevelUp = () => {
    var player = this.state.PlayerStats;
    if(player.EXP >= player.expLimit)
    {
        this.levelUp()
    }
}

render(){
  this.checkForLevelUp()
  if(this.state.PlayerStats !== undefined)
  {
    return(
        <div className="InfoTemplate">
        <div className="CImage"> 
        <div style={{position: "relative", transform: "scale(0.55)", }}><CharacterBuilder avatarCode={this.state.PlayerStats.AvatarCode}  justProfile={true}/></div>
        {/* <Spritesheet style={{height: 240, width: 240}} image={characterImage} widthFrame={512} heightFrame={512} steps={3} fps={12} loop={true} /> */}
        <div style={{color: "white", transform: "translate(0px, 290px)", fontSize: 20}}>{this.state.PlayerStats.Name}</div>
        </div>
        <div className="AttributeList"> 
            <div className="Attribute">
            {this.plusMinus("STR")}STR: {this.state.PlayerStats.STR}
            </div>
            <div className="Attribute">
            {this.plusMinus("INT")}INT: {this.state.PlayerStats.INT}
            </div>
            <div className="Attribute">
            {this.plusMinus("STM")}STM: {this.state.PlayerStats.STM}
            </div>
            <div className="Attribute">
            {this.plusMinus("STL")}STL: {this.state.PlayerStats.STL}
            </div>
        </div>
        <div className="PlayerInfo">
            <p>LEVEL: {this.state.PlayerStats.LVL}</p>
            <p>EXP: {this.state.PlayerStats.EXP}/{this.state.PlayerStats.expLimit}</p>
            <p>DMG MELEE: {this.state.DamageAmounts.Melee}</p>
            <p>DMG WEAPON: {this.state.DamageAmounts.Ranged}</p>
            <p>HEALTH: {this.state.PlayerStats.Health}/{this.state.currentMaxHealth}</p>
            <p>CASH: ¥{this.state.PlayerStats.Cash}</p>
            {/* <Button onClick={() => this.levelUp()}>LVL UP</Button> */}
        </div>
        <div className="InventoryP"> 
            <Inventory Items={this.state.items} useItem={this.useItem}/>
        </div>
        <Modal isOpen={this.state.toggleModal}>
        <ModalBody>
            You are dead.
            <Button onClick={() => window.location.reload()}>OK</Button>
        </ModalBody>
        </Modal>
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
export default Player