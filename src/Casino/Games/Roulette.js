import React, {Component} from 'react'
import {Button} from 'reactstrap'

import RouletteMain from  '../Images/Roulette/RouletteMain.gif';
import RouletteBoard from '../Images/Roulette/RouletteBoard.png';

import RouletteWinZero from '../Images/Roulette/RouletteHit0.png';
import RouletteWinOne from '../Images/Roulette/RouletteHit1.png';
import RouletteWinTwo from '../Images/Roulette/RouletteHit2.png';
import RouletteWinThree from '../Images/Roulette/RouletteHit3.png';
import RouletteWinFour from '../Images/Roulette/RouletteHit4.png';
import RouletteWinFive from '../Images/Roulette/RouletteHit5.png';
import RouletteWinSix from '../Images/Roulette/RouletteHit6.png';
import RouletteWinSeven from '../Images/Roulette/RouletteHit7.png';
import RouletteWinEight from '../Images/Roulette/RouletteHit8.png';
import RouletteWinNine from '../Images/Roulette/RouletteHit9.png';
import RouletteWinTen from '../Images/Roulette/RouletteHit10.png';
import RouletteWinEleven from '../Images/Roulette/RouletteHit11.png';
import RouletteWinTwelve from '../Images/Roulette/RouletteHit12.png';
import RouletteWinThirteen from '../Images/Roulette/RouletteHit13.png';
import RouletteWinFourteen from '../Images/Roulette/RouletteHit14.png';
import RouletteWinFithteen from '../Images/Roulette/RouletteHit15.png';
import RouletteWinSixteen from '../Images/Roulette/RouletteHit16.png';
import RouletteWinSeventeen from '../Images/Roulette/RouletteHit17.png';
import RouletteWinEighteen from '../Images/Roulette/RouletteHit18.png';
import RouletteWinNineteen from '../Images/Roulette/RouletteHit19.png';
import RouletteWinTwenty from '../Images/Roulette/RouletteHit20.png';
import RouletteWinTwentyOne from '../Images/Roulette/RouletteHit21.png';
import RouletteWinTwentyTwo from '../Images/Roulette/RouletteHit22.png';
import RouletteWinTwentyThree from '../Images/Roulette/RouletteHit23.png';
import RouletteWinTwentyFour from '../Images/Roulette/RouletteHit24.png';
import RouletteWinTwentyFive from '../Images/Roulette/RouletteHit25.png';
import RouletteWinTwentySix from '../Images/Roulette/RouletteHit26.png';
import RouletteWinTwentySeven from '../Images/Roulette/RouletteHit27.png';
import RouletteWinTwentyEight from '../Images/Roulette/RouletteHit28.png';
import RouletteWinTwentyNine from '../Images/Roulette/RouletteHit29.png';
import RouletteWinThirty from '../Images/Roulette/RouletteHit30.png';
import RouletteWinThirtyOne from '../Images/Roulette/RouletteHit31.png';
import RouletteWinThirtyTwo from '../Images/Roulette/RouletteHit32.png';
import RouletteWinThirtyThree from '../Images/Roulette/RouletteHit33.png';
import RouletteWinThirtyFour from '../Images/Roulette/RouletteHit34.png';
import RouletteWinThirtyFive from '../Images/Roulette/RouletteHit35.png';
import RouletteWinThirtySix from '../Images/Roulette/RouletteHit36.png';

import BlueChip from '../Images/Chips/CasinoChipBlue.png'
import RedChip from '../Images/Chips/CasinoChipRed.png'
import GreenChip from '../Images/Chips/CasinoChipGreen.png'
import YellowChip from '../Images/Chips/CasinoChipYellow.png'
import OrangeChip from '../Images/Chips/CasinoChipOrange.png'
import BlackChip from '../Images/Chips/CasinoChipBlack.png'



class Roulette extends Component {

constructor(){
    super()

    this.state = {
        gameStart: false,
        board: [{value: 0, image: RouletteWinZero, bet: 0, selected: false},{value: 1, image: RouletteWinOne, bet: 0, selected: false},{value: 2, image: RouletteWinTwo, bet: 0, selected: false},{value: 3, image: RouletteWinThree, bet: 0, selected: false},{value: 4, image: RouletteWinFour, bet: 0, selected: false},{value: 5, image: RouletteWinFive, bet: 0, selected: false},
            {value: 6, image: RouletteWinSix, bet: 0, selected: false},{value: 7, image: RouletteWinSeven, bet: 0, selected: false},{value: 8, image: RouletteWinEight, bet: 0, selected: false},{value: 9, image: RouletteWinNine, bet: 0, selected: false},{value: 10, image: RouletteWinTen, bet: 0, selected: false},{value: 11, image: RouletteWinEleven, bet: 0, selected: false},
            {value: 12, image: RouletteWinTwelve, bet: 0, selected: false},{value: 13, image: RouletteWinThirteen, bet: 0, selected: false},{value: 14, image: RouletteWinFourteen, bet: 0, selected: false},{value: 15, image: RouletteWinFithteen, bet: 0, selected: false},{value: 16, image: RouletteWinSixteen, bet: 0, selected: false},{value: 17, image: RouletteWinSeventeen, bet: 0, selected: false},
            {value: 18, image: RouletteWinEighteen, bet: 0, selected: false},{value: 19, image: RouletteWinNineteen, bet: 0, selected: false},{value: 20, image: RouletteWinTwenty, bet: 0, selected: false},{value: 21, image: RouletteWinTwentyOne, bet: 0, selected: false},{value: 22, image: RouletteWinTwentyTwo, bet: 0, selected: false},{value: 23, image: RouletteWinTwentyThree, bet: 0, selected: false},
            {value: 24, image: RouletteWinTwentyFour, bet: 0, selected: false},{value: 25, image: RouletteWinTwentyFive, bet: 0, selected: false},{value: 26, image: RouletteWinTwentySix, bet: 0, selected: false},{value: 27, image: RouletteWinTwentySeven, bet: 0, selected: false},{value: 28, image: RouletteWinTwentyEight, bet: 0, selected: false},{value: 29, image: RouletteWinTwentyNine, bet: 0, selected: false},
            {value: 30, image: RouletteWinThirty, bet: 0, selected: false},{value: 31, image: RouletteWinThirtyOne, bet: 0, selected: false},{value: 32, image: RouletteWinThirtyTwo, bet: 0, selected: false},{value: 33, image: RouletteWinThirtyThree, bet: 0, selected: false},{value: 34, image: RouletteWinThirtyFour, bet: 0, selected: false},{value: 35, image: RouletteWinThirtyFive, bet: 0, selected: false},{value: 36, image: RouletteWinThirtySix, bet: 0, selected: false},
        ],

        lastNumbers:[],
        spinning:false,
        finalMessage: false,
        finalMessageValue: "",
        amountWon: 0,
        currentImageValue: RouletteBoard,
        CurrentAmount: 500,
        SelectedAmount: 0,
        Extras: [{value: "1st", selected: false, bet: 0},{value: "2nd", selected: false, bet: 0},{value: "3rd", selected: false, bet: 0},{value: "1-12", selected: false, bet: 0},{value: "13-24", selected: false, bet: 0},{value: "25-36", selected: false, bet: 0},
        {value: "1-18", selected: false, bet: 0},{value: "Even", selected: false, bet: 0},{value: "Red", selected: false, bet: 0},{value: "Black", selected: false, bet: 0},{value: "Odd", selected: false, bet: 0},{value: "19-36", selected: false, bet: 0},
    ]

        
    }
}

renderNumberSelect(){
var board  = this.state.board
var extras = this.state.Extras

return(
    <div>
    <div className="CellBoard">
{board.map((cell, id) => {
    return(
        <div className="CellSelect" onContextMenu={(e) => this.deselectCell(e, cell.value)}  onClick={() => this.selectCell(cell.value)} style={{backgroundColor: this.selected(cell.value, false) === true ? "Red" : ""}}>
            {JSON.stringify(cell.value)}
            {this.selected(cell.value, false) === true && (<div>{this.renderChip(board[id].bet)}</div>)}
        </div>
    )
})}
        <div className="CellSelect"  onClick={() => this.selectExtra(0)} style={{backgroundColor: this.selected("1st", true) === true ? "Red" : ""}}>
            1st
            {this.selected("1st", true) === true && (<div>{this.renderChip(extras[0].bet)}</div>)}
        </div>
        <div className="CellSelect" onClick={() => this.selectExtra(1)} style={{backgroundColor: this.selected("2nd", true) === true ? "Red" : ""}}>
            2nd
            {this.selected("2nd", true) === true && (<div>{this.renderChip(extras[1].bet)}</div>)}
        </div>
        <div className="CellSelect" onClick={() => this.selectExtra(2)} style={{backgroundColor: this.selected("3rd", true) === true ? "Red" : ""}}>
            3rd
            {this.selected("3rd", true) === true && (<div>{this.renderChip(extras[2].bet)}</div>)}
        </div>
        <div className="CellSelect" onClick={() => this.selectExtra(3)} style={{backgroundColor: this.selected("1-12", true) === true ? "Red" : ""}}>
            1-12
            {this.selected("1-12", true) === true && (<div>{this.renderChip(extras[3].bet)}</div>)}
        </div>
        <div className="CellSelect" onClick={() => this.selectExtra(4)} style={{backgroundColor: this.selected("13-24", true) === true ? "Red" : ""}}>
            13-24
           {this.selected("13-24", true) === true && (<div>{this.renderChip(extras[4].bet)}</div>)}
        </div>
        <div className="CellSelect" onClick={() => this.selectExtra(5)} style={{backgroundColor: this.selected("25-36", true) === true ? "Red" : ""}}>
            25-36
           {this.selected("25-36", true) === true && (<div>{this.renderChip(extras[5].bet)}</div>)}
        </div>
        <div className="CellSelect" onClick={() => this.selectExtra(6)} style={{backgroundColor: this.selected("1-18", true) === true ? "Red" : ""}}>
            1-18
           {this.selected("1-18", true) === true && (<div>{this.renderChip(extras[6].bet)}</div>)}
        </div>
        <div className="CellSelect" onClick={() => this.selectExtra(7)} style={{backgroundColor: this.selected("Even", true) === true ? "Red" : ""}}>
           Even
           {this.selected("Even", true) === true && (<div>{this.renderChip(extras[7].bet)}</div>)}
        </div>
        <div className="CellSelect" onClick={() => this.selectExtra(8)} style={{backgroundColor: this.selected("Red", true) === true ? "Red" : ""}}>
           Red
           {this.selected("Red", true) === true && (<div>{this.renderChip(extras[8].bet)}</div>)}
        </div>
        <div className="CellSelect" onClick={() => this.selectExtra(9)} style={{backgroundColor: this.selected("Black", true) === true ? "Red" : ""}}>
          Black
          {this.selected("Black", true) === true && (<div>{this.renderChip(extras[9].bet)}</div>)}

        </div>
        <div className="CellSelect" onClick={() => this.selectExtra(10)} style={{backgroundColor: this.selected("Odd", true) === true ? "Red" : ""}}>
            Odd
           {this.selected("Odd", true) === true && (<div>{this.renderChip(extras[10])}</div>)}

        </div>
        <div className="CellSelect" onClick={() => this.selectExtra(11)} style={{backgroundColor: this.selected("19-36", true) === true ? "Red" : ""}}>
           19-36
           {this.selected("19-36", true) === true && (<div>{this.renderChip(extras[11])}</div>)}
        </div>
    </div>

    </div>
)
}

renderChip(amount){
    return(
        <div className="Chip" style={{backgroundImage: 'url(' + this.amountColorReference(amount) + ')'}} >
            {amount}
        </div>
    )
}

amountColorReference(amount){
    if(amount > 1 && amount <= 5)
    {
        return RedChip
    }
    else if(amount > 5 && amount <= 25)
    {
        return GreenChip
    }
    else if(amount > 25 && amount <= 100)
    {
        return BlackChip
    }
    else if(amount > 100 && amount <= 500)
    {
        return OrangeChip
    }
    else if(amount > 500 && amount <= 1000)
    {
        return YellowChip
    }
    else if(amount > 1000 && amount <= 5000)
    {
        return BlueChip
    }
}

selected(value, cellOrExtra){
    if(cellOrExtra === false)
    {
        var board = this.state.board
        if(board[value].selected === true)
        {
            return true
        }
        else
        {
            return false
        }
    }
    else
    {
        var extras = this.state.Extras;

        var findValue = extras.filter(extra => extra.value === value)

        if(findValue[0].selected === true)
        {
            return true
        }
        else
        {
            return false
        }
    }

}

selectCell(selected){
var currentAmount = this.state.CurrentAmount;
var value = this.state.SelectedAmount;    
var board = this.state.board;
if(value > 0 && this.state.spinning === false)
{
console.log(value, currentAmount)
if(value <= currentAmount)
{
board[selected].selected = true;
board[selected].bet = board[selected].bet + value
currentAmount = currentAmount - value
this.setState({board: board, CurrentAmount: currentAmount})
}
}
}

deselectCell(e, selected){
e.preventDefault()
var currentAmount = this.state.CurrentAmount;
var board = this.state.board;
currentAmount = currentAmount + board[selected].bet
board[selected].selected = false;
board[selected].bet = 0;

this.setState({board: board, CurrentAmount: currentAmount})
}

selectExtra(selected){
var currentAmount = this.state.CurrentAmount;
var value = this.state.SelectedAmount;    
var extras = this.state.Extras;
if(value > 0 && this.state.spinning === false)
{
if( currentAmount > 0 || value < currentAmount)
{
extras[selected].selected = true;
extras[selected].bet = extras[selected].bet + value
currentAmount = currentAmount - value
this.setState({Extras: extras, CurrentAmount: currentAmount})
}
}
}

deselectExtra(e, selected){
    e.preventDefault();
    var currentAmount = this.state.CurrentAmount;
    var extras = this.state.Extras;
    currentAmount = currentAmount + extras[selected].bet
    extras[selected].selected = false
    extras[selected].bet = 0
    this.setState({Extras: extras, CurrentAmount: currentAmount})
}


selectValue(selectedAmount){
    this.setState({SelectedAmount: selectedAmount})
}

updateCurrentAmount(amount){
    var currentamount = this.state.CurrentAmount;
    currentamount = currentamount + amount;
    this.setState({CurrentAmount: currentamount})
}

startEndGame = () => {
    this.setState({gameStart: !this.state.gameStart})
}

spinWheel(){
    var board = this.state.board;

    
    this.setState({currentImageValue: RouletteMain, spinning: true})
    setTimeout(() => {
        var random = Math.random()
        var currentCell = Math.floor(random * 37)

    this.setState({currentImageValue: board[currentCell].image})
    this.checkForWin(board[currentCell].value)
     

    },8000)
}

checkForWin(value){
    var board = this.state.board;
    var extras = this.state.Extras;
    var currentAmount = this.state.CurrentAmount
    var pastNumbers = this.state.lastNumbers;
    var amountWon
    var lastMessage = ""
    var getCellBets = board.filter(cell => cell.bet > 0)
    var getExtrasBet = extras.filter(extra => extra.bet > 0)


    if(getCellBets.length > 0)
    {
        getCellBets.map((bet, id) => {
            if(bet.value === value)
            {
                amountWon = value * 36
                currentAmount = currentAmount + amountWon
                lastMessage = "You Won" + amountWon.toString()
                console.log("YOU WIN")
            }
        })
        if(lastMessage === ""){
            lastMessage = "You Lost"
        }
    }

    if(pastNumbers.length > 10)
    {
        pastNumbers = []
    }
    else
    {
        var newNumber = {
            value: value
        }
        pastNumbers.push(newNumber)
    }
    // if(getExtrasBet.length > 0)
    // {
    //     getCellBets.map((bet, id) => {
    //         if(bet.value === value)
    //         {
    //             amountWon = value * 3
    //             lastMessage = "You Won"
    //             console.log("YOU WIN")
    //         }
    //     })
    // }

    this.setState({finalMessage: true, finalMessageValue: lastMessage, CurrentAmount: currentAmount, lastNumbers: pastNumbers})
    setTimeout(() => {
    this.setState({spinning: false}, this.clearBoard())
    },4000)
}

clearBoard(){
    var board = this.state.board;
    var extras = this.state.Extras;

    board.map((cell, id) => {
        cell.selected = false
        cell.bet = 0
    })
    extras.map((extra, id) => {
        extra.selected = false
        extra.bet = 0
    })

    this.setState({board: board, Extras: extras, finalMessage: false})
}

startOrGame(){
var selectedAmount = this.state.SelectedAmount

if(this.state.gameStart === false){
    return(
        <div>
        Roulette
        <Button style={{marginTop: 10}} onClick={() => this.startEndGame()}>Start Game</Button>
        <Button style={{marginTop: 10}} onClick={() => this.props.goBack("Main")}>Go Back</Button>
    </div>
    )
}
else
{
    return(
        <div style={{display: "flex"}}> 
        {this.renderNumberSelect()}
        <div style={{textAlign: "center"}}>
        Amount
        <div style={{display: "flex"}}>
            <div className="CellSelect" onClick={() => this.selectValue(1)} style={{backgroundColor: selectedAmount === 1 ? "Red" : ""}}>
            1
            </div>
            <div className="CellSelect" onClick={() => this.selectValue(5)} style={{backgroundColor: selectedAmount === 5 ? "Red" : ""}}>
            5
            </div>
            <div className="CellSelect" onClick={() => this.selectValue(25)} style={{backgroundColor: selectedAmount === 25 ? "Red" : ""}}>
            25
            </div>
            <div className="CellSelect" onClick={() => this.selectValue(50)} style={{backgroundColor: selectedAmount === 50 ? "Red" : ""}}>
            50
            </div>
            <div className="CellSelect" onClick={() => this.selectValue(100)} style={{backgroundColor: selectedAmount === 100 ? "Red" : ""}}>
            100
            </div>
        </div>
        Current Amount: £{this.state.CurrentAmount}
        {this.state.finalMessage === true && (<div>{this.state.finalMessageValue}</div>)}
        <div>
        Past Numbers
        {this.state.lastNumbers.map((number, id) => {
            return(<div>{number.value}</div>)
        })}
        </div>
        </div>
        <div style={{marginTop: 25, marginLeft: 5}}>
        <Button onClick={() => this.spinWheel()}>Spin</Button>
        </div>
        <img style={{marginTop: 10}} width={700} height={700} src={this.state.currentImageValue} alt="error"></img>
        </div>

    )
}
}

render(){
    return(
        <div className="RouletteGameWindow">
           {this.startOrGame()}
        </div>
    )
}



}

export default Roulette