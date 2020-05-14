import React, {Component} from 'react'
import BlackJack from './Games/BlackJack';
import SlotMachine from './Games/SlotMachine';
import {Button} from 'reactstrap';
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
    else
    {
        return (<div>
            <Button onClick={() => this.SelectGame("BlackJack")}>BlackJack</Button>
            <Button onClick={() => this.SelectGame("SlotMachine")}>Slots</Button>
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