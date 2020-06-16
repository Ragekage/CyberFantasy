import React, {Component} from 'react'
import BlackJack from './Games/BlackJack';
import SlotMachine from './Games/SlotMachine';
import Roulette from './Games/Roulette'
import MineSweeperGame from  '../MiniGames/MineSweeper/MineSweeperGame'
import TileGame from '../MiniGames/TileGame/TileGame'
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';

import './casinoStyle.css'

class Casino extends Component {


constructor(props){
    super(props)

    this.state = {
        Game: "Main"
    }
}


SelectGame = (game) => {
    this.setState({Game: game})
}

GameSelection(game){
    if(game === "BlackJack")
    {
        return(<BlackJack goBack={this.SelectGame} isMobile={this.props.FullMediaQuery.isTabletOrMobileDevice}/>)
    }
    else if(game === "SlotMachine")
    {
        return(<SlotMachine goBack={this.SelectGame} isMobile={this.props.FullMediaQuery.isTabletOrMobileDevice} />)
    }
    else if(game === "Roulette")
    {
        return(<Roulette goBack={this.SelectGame} isMobile={this.props.FullMediaQuery.isTabletOrMobileDevice} />)
    }
    else if(game === "MineSweeper")
    {
        return(<MineSweeperGame goBack={this.SelectGame} isMobile={this.props.FullMediaQuery.isTabletOrMobileDevice} />)
    }
    else if(game === "TileGame")
    {
        return(<TileGame goBack={this.SelectGame} isMobile={this.props.FullMediaQuery.isTabletOrMobileDevice} />)
    }
    else
    {

    
        return (<div>
            <Button onClick={() => this.SelectGame("BlackJack")}>BlackJack</Button>
            <Button onClick={() => this.SelectGame("SlotMachine")}>Slots</Button>
            <Button onClick={() => this.SelectGame("Roulette")}>Roulette</Button>
            <Button onClick={() => this.SelectGame("MineSweeper")}>MineSweeper</Button>
            <Button onClick={() => this.SelectGame("TileGame")}>TileGame</Button>
            <div className="CancelBtnM"><Link  to="/welcome" className="btn btn-primary">Back</Link></div>
        </div>)
    }
}

render(){
    return(
        <div className="CasinoMain">
            <div style={{margin: 0}}>Casino</div>
            {this.GameSelection(this.state.Game)}
        </div>
    )
}

}

export default Casino