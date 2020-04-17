import React, {Component} from 'react'
import {Modal, ModalBody} from 'reactstrap'
import EnemyDieAnimation from '../Images/shootinganimation_dead.png'
import EnemyDodgedAnimation from '../Images/shootinganimation_dodged.png'
import Spritesheet from 'react-responsive-spritesheet'


class Battle extends Component {

constructor()
{
    super()

    this.state = {
        player: {},
        enemies: [],
        fightData: [],
        enemyDodge: true,
        enemyDie: true,
        toggleModal: false,
    }
}

// componentDidMount(){
//     this.setState({player: this.props.Player, enemies: this.props.Enemies})
// }

// startBattle(){
//     var player = this.state.player
//     var enemies = this.state.enemies

//     do {
//         this.fight(player, enemies[0])
//     }
//     while (enemies.length > 0)

// }

// fight(player, enemy){

// }

enemyDodgePrompt = () => {
    if(this.state.enemyDodge === true)
    {
        return(
            <Spritesheet image={EnemyDodgedAnimation} widthFrame={1024} heightFrame={512} steps={12} fps={12} loop={true} />
        )
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

render()
{
    return(
        <div>

        <Modal isOpen={this.state.toggleModal}>
        <ModalBody>
        {this.enemyDodgePrompt()}
        {this.enemyDiePrompt()}
        </ModalBody>
        </Modal>
        </div>
    )
}


}

export default Battle