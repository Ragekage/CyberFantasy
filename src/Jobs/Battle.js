import React, {Component} from 'react';
import {Button} from 'reactstrap';
import EnemyDieAnimation from '../Images/shootinganimation_dead.png';
import EnemyDodgedAnimation from '../Images/shootinganimation_dodged.png';
import EnemyDamageAnimation from '../Images/shootinganimation_damage.png'
import PlayerSneakAnimation from '../Images/shootinganimation_sneak.png';
import BattleAnimationStart from '../Images/Shootinganimation_Start.png';
import BattleWindowTemplate from '../Images/BattleWindow.png'
import Spritesheet from 'react-responsive-spritesheet';
import Enemy from './Enemy'
import './MissionStyles.css'


class Battle extends Component {

constructor(props)
{
    super(props)
    this.state = {
        player: {},
        enemies: [],
        fightData: [],
        enemyDodge: false,
        enemyDie: false,
        damagePrompt: false,
        fightPrompt: false,
        playerSneak: false,
        toggleModal: false,
        finalStats: false,
        statsOrResult: false,
        result: "",
        finalResults: {
        totalCashEarn: 0,
        totalExpEarn: 0,
        totalDamageDone: 0,
        totalDamageTaken: 0,
        turnDamageDone: 0,
        turnDamageTaken: 0
        },
        currentlyFightingId: 0,
        animations: [
            {animation: BattleAnimationStart},
            {animation: EnemyDieAnimation},
            {animation: EnemyDamageAnimation},
            {animation: EnemyDodgedAnimation},
            {animation: PlayerSneakAnimation},
        ],
        currentAnimation: 0,
        disableButton: false,
        typeWriterClass: "typewriter",
        timeOut: 6000,
    }
}

//NOTES FOR BATTLE JS, animation frames are currently locked to 15.

componentDidMount(){
    this.setState({player: this.props.Player, enemies: this.props.Enemies})
    this.startBattle()
}

startBattle(){
this.setState({fightPrompt: true})
}


doDamage = () => {
    var MissChance = Math.random()
    var currentEnemyId = this.state.currentlyFightingId;
    var currentStats = this.state.finalResults;
    var result = ""
    MissChance = Math.floor(MissChance * 10)

    if(MissChance < 8)
    {
        this.state.enemies[currentEnemyId].doDamage(40)
        if(this.state.enemies[currentEnemyId].isDead !== true)
        {
            this.state.player.current.upDatePlayer(20)
            result = (<div><p>Damage Done: 40</p> <p>Damage Taken: 20</p></div>);
            currentStats.totalDamageDone = currentStats.totalDamageDone + 40;
            currentStats.totalDamageTaken = currentStats.totalDamageTaken + 20
            this.setState({damagePrompt: true, finalResults: currentStats, statsOrResult: true, currentAnimation: 2, result: result, disableButton: true})
            this.resetTypeWriterClass()
            this.refs.battleSprite.goToAndPlay(1)
            setTimeout(() => {
                this.resetBackToResult()
            }, this.state.timeOut)

        }
        else
        {
            this.state.player.current.upDatePlayer(0, 50, 100)
            if(currentEnemyId >= this.state.enemies.length - 1)
            {
                //fight finished
                this.setState({finalStats: true})
            }
            else
            {
                currentStats.totalCashEarn = currentStats.totalCashEarn + 50;
                currentStats.totalExpEarn = currentStats.totalExpEarn + 100;
                result = (<div><p>Enemy Defeated</p><p> </p></div>);
                currentEnemyId = currentEnemyId + 1
                this.setState({enemyDie: true, damagePrompt: false, currentAnimation: 1, statsOrResult: true, result: result, disableButton: true,  currentlyFightingId: currentEnemyId })
                this.resetTypeWriterClass()
                this.refs.battleSprite.goToAndPlay(1)
                setTimeout(() => {
                    this.resetBackToResult()
                }, this.state.timeOut)
            }

        }
    }
    else
    {
        result = (<div><p>Enemy Dodged Your Attack</p><p> </p></div>);
        this.setState({enemyDodge: true, currentAnimation: 3, statsOrResult: true, result: result, disableButton: true})
        this.resetTypeWriterClass()
        this.refs.battleSprite.goToAndPlay(1)
        setTimeout(() => {
            this.resetBackToResult()
        }, this.state.timeOut)

    }

}

sneak = () => {
    var sneakChance = Math.random()
    var currentEnemyId = this.state.currentlyFightingId;
    var result = ""
    sneakChance = Math.floor(sneakChance * 10)

    if(sneakChance > 8)
    {
        this.state.player.current.upDatePlayer(20)
        result = (<div><p>failed to sneak and lost 20 health</p></div>);
        this.setState({statsOrResult: true, result: result})
        this.resetTypeWriterClass()
        setTimeout(() => {
            this.resetBackToResult()
        }, this.state.timeOut)
    }
    else
    {
        if(currentEnemyId >= this.state.enemies.length - 1)
        {
            //fight ends
            this.setState({finalStats: true})
        }
        else
        {
            currentEnemyId = currentEnemyId + 1;
            this.state.player.current.upDatePlayer(0, 200, 100);
            result = (<div ><p>Snuck past and gained</p> <p>200 cash 100 exp</p></div>);
            this.setState({statsOrResult: true, damagePrompt: false, result: result, currentlyFightingId: currentEnemyId, currentAnimation: 4})
            this.resetTypeWriterClass()
            this.refs.battleSprite.goToAndPlay(1)
            setTimeout(() => {
                this.resetBackToResult()
            }, this.state.timeOut)
        }

    }
}


GetAnimation = (field) => {
var animations = this.state.animations

return animations[this.state.currentAnimation].animation

}


resetBackToResult = () => {
    this.setState({currentAnimation: 0, statsOrResult: false, disableButton: false})
    this.resetTypeWriterClass()
}

resetTypeWriterClass = () => {
    this.setState({typeWriterClass: "hide"});
    setTimeout(() => {
    this.setState({typeWriterClass: "typewriter"});
     }, 1)
 }

returnBattleResult = () => {
    if(this.state.finalStats === false)
    {
    if(this.state.statsOrResult === false)
    {
    return(
        <div className={this.state.typeWriterClass}>
    <p>You Have {this.state.player.current.state.DamageAmounts.Melee} Attack && {this.state.player.current.props.PlayerStats.Health} Health </p>
    <p>Enemy Has {this.state.enemies[this.state.currentlyFightingId].EnemyStats.MeleeAttack} Attack && {this.state.enemies[this.state.currentlyFightingId].EnemyStats.Health} Health</p>
        </div>
    )
    }
    else
    {
        return(
            <div className={this.state.typeWriterClass} >
            {this.state.result}
            </div>
        )
    }
    }
    else
    {
        return(
            <div>
                {this.finalStats()}
            </div>
        )
    }
}

currentBattleDetails = () => {
    return(
        <div>
            <p>Player Health: {this.state.player.current.props.PlayerStats.Health}</p>
            <p>Enemy {this.state.currentlyFightingId + 1}</p>
            <p>Enemy Health: {this.state.enemies[this.state.currentlyFightingId].EnemyStats.Health}</p>
        </div>
    )
}



fightPrompt = () => {
    if(this.state.fightPrompt === true)
    {
    return(
        <div className="battleMenu">
        {/* <img width={1025} height={628} src={BattleWindowTemplate}></img> */}
        <div >
        {this.returnBattleResult()}
        </div>
        <div className="battleAnimations"><Spritesheet  ref="battleSprite" image={this.GetAnimation()} widthFrame={1024} heightFrame={512} startAt={1} endAt={15} steps={15} fps={6} autoPlay={false} loop={true} /></div>
        <div className="ButtonOptions">
        {this.currentBattleDetails()}

        <Button disabled={this.state.disableButton} onClick={() => this.doDamage()}>Fight</Button>
        <Button disabled={this.state.disableButton}  onClick={() => this.sneak()}>Sneak</Button>
        <Button disabled={this.state.disableButton}  onClick={() => this.props.toggleModal()}>Cancel</Button>
        </div>
        </div>
    )
    }
}

finalStats = () => {
    if(this.state.finalStats === true)
    {
        return(
            <div className="typewrite">
                <p>Mission Complete.</p>
                <p>ExpGained: {this.state.finalResults.totalExpEarn}</p>
                <p>CashGained: {this.state.finalResults.totalCashEarn}</p>
                <p>DamgeDone: {this.state.finalResults.totalDamageDone}</p>
                <p>DamageTaken: {this.state.finalResults.totalDamageTaken}</p>
                <Button>Close</Button>
            </div>
        )
    }
}

render()
{
    return(
        <div style={{fontFamily: "Mode Seven"}}>
        {this.fightPrompt()}
        </div>
    )
}


}

export default Battle