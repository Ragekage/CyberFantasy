import React, {Component} from 'react';
import {Button} from 'reactstrap';
import EnemyDieAnimation from '../Images/shootinganimation_dead.png';
import EnemyDodgedAnimation from '../Images/shootinganimation_dodged.png';
import EnemyDamageAnimation from '../Images/shootinganimation_damage.png'
import PlayerSneakAnimation from '../Images/shootinganimation_sneak.png';
import BattleAnimationStart from '../Images/Shootinganimation_Start.png';
import BattleWindowTemplate from '../Images/BattleWindow.png'
import Spritesheet from 'react-responsive-spritesheet';
import './MissionStyles.css'


class Battle extends Component {

constructor()
{
    super()

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
        totalCashEarn: 0,
        totalExpEarn: 0,
        totalDamageDone: 0,
        turnDamageDone: 0,
        turnDamageTaken: 0,
        currentlyFightingId: 0,
        animations: [
            {animation: BattleAnimationStart},
            {animation: EnemyDieAnimation},
            {animation: EnemyDamageAnimation},
            {animation: EnemyDodgedAnimation},
            {animation: PlayerSneakAnimation},
        ],
        currentAnimation: 0
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

fight(player, enemy){
this.setState({fightPrompt: true})
}

enemyDodgePrompt = () => {
    if(this.state.enemyDodge === true)
    {
        return(
            <Spritesheet image={EnemyDodgedAnimation} widthFrame={1024} heightFrame={512} steps={12} fps={12} loop={true} />
        )
    }
}

enemyDamagePrompt = () => {
    if(this.state.damagePrompt === true)
    {
    return(
        <div>
    you did {this.state.turnDamageDone}
    you took {this.state.turnDamageTaken}
        </div>
    )
    }
}

playerSneakPrompt = () => {
if(this.state.playerSneak === true)
{
    return(
        <div>
            You sucessfully sneaked and gained.
        </div>
    )
}
}

doDamage = () => {
    var MissChance = Math.random()
    var currentEnemyId = this.state.currentlyFightingId
    MissChance = Math.floor(MissChance * 10)

    if(MissChance < 8)
    {
        this.state.enemies[currentEnemyId].doDamage(40)
        if(this.state.enemies[currentEnemyId].isDead !== true)
        {
            this.state.player.current.upDatePlayer(20)
            this.setState({damagePrompt: true, turnDamageDone: 40, turnDamageTaken: 20})

            this.setState({currentAnimation: 2},)

            this.refs.battleSprite.goToAndPlay(1)

        }
        else
        {
            this.state.player.current.upDatePlayer(0, 50, 100)
            if(currentEnemyId >= this.state.enemies.length - 1)
            {
                //fight finished
            }
            else
            {
                currentEnemyId = currentEnemyId + 1
                this.setState({enemyDie: true, damagePrompt: false, currentAnimation: 1, currentlyFightingId: currentEnemyId })
                 this.refs.battleSprite.goToAndPlay(1)

            }
           
        }
    }
    else
    {
        this.setState({enemyDodge: true})
        this.setState({currentAnimation: 3})
        this.refs.battleSprite.goToAndPlay(1)

    }    

}

sneak = () => {
    var sneakChance = Math.random()
    var currentEnemyId = this.state.currentlyFightingId
    sneakChance = Math.floor(sneakChance * 10)

    if(sneakChance > 8)
    {
        this.state.player.current.upDatePlayer(20)

    }
    else
    {
        if(currentEnemyId >= this.state.enemies.length - 1)
        {
            //fight ends
        }
        else
        {
            currentEnemyId = currentEnemyId + 1
            this.state.player.current.upDatePlayer(0, 200, 100)
            this.setState({playerSneak: true, damagePrompt: false, currentlyFightingId: currentEnemyId, currentAnimation: 4})
            this.refs.battleSprite.goToAndPlay(1)


        }
     
    }
}

enemyDiePrompt = () => {
    if(this.state.enemyDie === true)
    {
        return(
        <Spritesheet image={EnemyDieAnimation} widthFrame={1024} heightFrame={512} steps={12} fps={12} loop={true} />
        )
    }
}

GetAnimation = (field) => {
var animations = this.state.animations

return animations[this.state.currentAnimation].animation

}

fightPrompt = () => {
    if(this.state.fightPrompt === true)
    {
    return(
        <div className="battleMenu">
        {/* <img width={1025} height={628} src={BattleWindowTemplate}></img> */}
        <div className="typewriter">
        <p>You Have {this.state.player.current.props.PlayerStats.ATK} Attack && {this.state.player.current.props.PlayerStats.HEALTH} Health </p>
        <p>Enemy Has {this.state.enemies[this.state.currentlyFightingId].EnemyStats.MeleeAttack} Attack && {this.state.enemies[this.state.currentlyFightingId].EnemyStats.Health} Health</p>
        </div>
        <div className="battleAnimations"><Spritesheet  ref="battleSprite" image={this.GetAnimation()} widthFrame={1024} heightFrame={512} startAt={1} endAt={15} steps={15} fps={6} autoPlay={false} loop={true} /></div>
        <div className="ButtonOptions">
        <Button onClick={() => this.doDamage()}>Fight</Button>
        <Button onClick={() => this.sneak()}>Sneak</Button>
        <Button onClick={() => this.props.toggleModal()}>Cancel</Button>
        </div>
        </div>
    )
    }
}

finalStats = () => {
    if(this.state.finalStats === true)
    {
        return(
            <div>
                Final Stats:

            </div>
        )
    }
}

render()
{
    return(
        <div style={{fontFamily: "Mode Seven"}}>
        {this.fightPrompt()}
        {/* {this.enemyDodgePrompt()}
        {this.enemyDiePrompt()}
        {this.enemyDamagePrompt()} */}
        </div>
    )
}


}

export default Battle