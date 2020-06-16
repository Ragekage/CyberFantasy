import React, {Component} from 'react'
import {Button} from 'reactstrap'
import Spritesheet from 'react-responsive-spritesheet';

import Reels from '../Images/Reels/Reels.png';
import ReelsGif from '../Images/Reels/ReelsGif.gif'

import XReelOne from '../Images/Reels/XReelOne.png';
import XReelTwo from '../Images/Reels/XReelTwo.png';
import XReelThree from '../Images/Reels/XReelThree.png';

import OReelOne from '../Images/Reels/OReelOne.png';
import OReelTwo from '../Images/Reels/OReelTwo.png';
import OReelThree from '../Images/Reels/OReelThree.png';

import BarReelOne from '../Images/Reels/BarReelOne.png';
import BarReelTwo from '../Images/Reels/BarReelTwo.png';
import BarReelThree from '../Images/Reels/BarReelThree.png';


import FruitReel from '../Images/Reels/Fruit/FruitReel.gif';

import CherryReelOne from '../Images/Reels/Fruit/CherryReelOne.png';
import CherryReelTwo from '../Images/Reels/Fruit/CherryReelTwo.png';
import CherryReelThree from '../Images/Reels/Fruit/CherryReelThree.png';
import CherryReelFour from '../Images/Reels/Fruit/CherryReelFour.png';
import CherryReelFive from '../Images/Reels/Fruit/CherryReelFive.png';


import LemonReelOne from '../Images/Reels/Fruit/LemonReelOne.png';
import LemonReelTwo from '../Images/Reels/Fruit/LemonReelTwo.png';
import LemonReelThree from '../Images/Reels/Fruit/LemonReelThree.png';
import LemonReelFour from '../Images/Reels/Fruit/LemonReelFour.png';
import LemonReelFive from '../Images/Reels/Fruit/LemonReelFive.png';


import OrangeReelOne from '../Images/Reels/Fruit/OrangeReelOne.png';
import OrangeReelTwo from '../Images/Reels/Fruit/OrangeReelTwo.png';
import OrangeReelThree from '../Images/Reels/Fruit/OrangeReelThree.png';
import OrangeReelFour from '../Images/Reels/Fruit/OrangeReelFour.png';

import PlumReelOne from '../Images/Reels/Fruit/PlumReelOne.png';
import PlumReelTwo from '../Images/Reels/Fruit/PlumReelTwo.png';
import PlumReelThree from '../Images/Reels/Fruit/PlumReelThree.png';
import PlumReelFour from '../Images/Reels/Fruit/PlumReelFour.png';

import BellReelOne from '../Images/Reels/Fruit/BellReelOne.png';
import BellReelTwo from '../Images/Reels/Fruit/BellReelTwo.png';
import BellReelThree from '../Images/Reels/Fruit/BellReelThree.png';
import BellReelFour from '../Images/Reels/Fruit/BellReelFour.png';

import JackPotReelOne from '../Images/Reels/Fruit/JackPotReelOne.png';
import JackPotReelTwo from '../Images/Reels/Fruit/JackPotReelTwo.png';






class SlotMachine extends Component {


constructor(){
    super()

    this.state = {

        ReelOne: [],
        ReelTwo: [],
        ReelThree: [],
        CurrentReels:{
        ReelOneCurrent: {},
        ReelTwoCurrent: {},
        ReelThreeCurrent:{}},
        ReelOrStop: false,
        ResultReady: false,
        Result: "",
        SpinDisabled: false,
        started: false,
        currentReelType: ""
    }

}

stopReel(ReelData, Reels, CurrentReel){
var valueAmount = this.state.currentReelType === "Fruit" ? 11 : 9


var random = Math.random()
var currentReel = Math.floor(random * valueAmount)

Reels[CurrentReel].image = ReelData[currentReel].image;
Reels[CurrentReel].value = ReelData[currentReel].value;


this.setState({CurrentReels: Reels, ReelOrStop: true})


// this.refs[CurrentReel].goToAndPause(1);
}

loopStopReel(){

var R1 = this.state.ReelOne;
var R2 = this.state.ReelTwo;
var R3 = this.state.ReelThree;
var Reels = this.state.CurrentReels

Reels.ReelOneCurrent.image = this.state.currentReelType === "Fruit" ? FruitReel : ReelsGif;
Reels.ReelTwoCurrent.image = this.state.currentReelType === "Fruit" ? FruitReel : ReelsGif;;
Reels.ReelThreeCurrent.image = this.state.currentReelType === "Fruit" ? FruitReel : ReelsGif;;

this.setState({CurrentReels: Reels, SpinDisabled: true})

setTimeout(() => {
    this.stopReel(R1, Reels, "ReelOneCurrent")
},2000)

setTimeout(() => {
    this.stopReel(R2, Reels, "ReelTwoCurrent")
},3000)

setTimeout(() => {
    this.stopReel(R3, Reels, "ReelThreeCurrent")
},4000)

setTimeout(() => {
    this.calculateWin()
},5000)


}

calculateWin(){
    var reelOne = this.state.CurrentReels.ReelOneCurrent.value
    var reelTwo = this.state.CurrentReels.ReelTwoCurrent.value
    var reelThree = this.state.CurrentReels.ReelThreeCurrent.value



    if(reelOne === reelTwo && reelTwo === reelThree)
    {
        if(this.state.currentReelType === "Fruit"){

        
        switch(reelOne){
            case("C"): this.setState({Result: "You Won 200", ResultReady: true});
            break;
            case("L"): this.setState({Result: "You Won 300", ResultReady: true});
            break;
            case("O"): this.setState({Result: "You Won 400", ResultReady: true});
            break;
            case("P"): this.setState({Result: "You Won 500", ResultReady: true});
            break;
            case("B"): this.setState({Result: "You Won 700", ResultReady: true});
            break;
            case("J"): this.setState({Result: "You Won The Jackpot 1000!", ResultReady: true});
            break;
            default: console.log("Error");
        }

        }
        else
        {
            switch(reelOne){
                case("X"): this.setState({Result: "You Won 400", ResultReady: true});
                break;
                case("O"): this.setState({Result: "You Won 200", ResultReady: true});
                break;
                case("Bar"): this.setState({Result: "You Won 500", ResultReady: true});
                break;
                default: console.log("Error")
        }

    }

    }
    else
    {
        console.log("You Lost")
        this.setState({Result: "You Lost", ResultReady: true})
    }

 

    setTimeout(() => {
        this.setState({SpinDisabled: false, ResultReady: false})
    }, 1000)
}


reelSelect(){
    return(
        <div>
            Select Slot Type
            <Button onClick={() => this.setSlotType("Classic")}>Classic</Button>
            <Button onClick={() => this.setSlotType("Fruit")}>Fruit</Button>
            <Button style={{marginTop: 10}} onClick={() => this.props.goBack("Main")}>Go Back</Button>

        </div>
    )
}

setSlotType(type){
    var R1 
    var R2 
    var R3 
    var currentReels = this.state.CurrentReels

if(type === "Classic"){
  

R1 = [{value: "X", image: XReelOne},{value: "O", image: OReelOne},{value: "X", image: XReelOne},{value: "O", image: OReelThree},{value: "BAR", image: BarReelThree },{value: "O", image: OReelTwo},{value: "X", image: XReelOne},{value: "O", image: OReelThree},{value: "BAR", image: BarReelTwo},{value: "O", image: OReelTwo}];
R2 = [{value: "O", image: OReelOne},{value: "X", image: XReelOne},{value: "O", image: OReelOne},{value: "X", image: XReelThree},{value: "BAR", image: BarReelOne},{value: "X", image: XReelTwo},{value: "O", image: OReelOne},{value: "X", image: XReelThree},{value: "BAR", image: BarReelOne},{value: "X", image: XReelTwo}];
R3 = [{value: "O", image: OReelOne},{value: "X", image: XReelOne},{value: "O", image: OReelOne},{value: "X", image: XReelThree},{value: "BAR", image: BarReelThree},{value: "O", image: OReelTwo},{value: "X", image: XReelOne},{value: "O", image: OReelThree},{value: "BAR", image: BarReelTwo},{value: "O", image: OReelOne}];

currentReels.ReelOneCurrent = {image: XReelOne, value: "X"}
currentReels.ReelTwoCurrent = {image: XReelOne, value: "X"}
currentReels.ReelThreeCurrent = {image: XReelOne, value: "X"}


}
else if(type === "Fruit"){


R1 = [{value: "L", image: LemonReelFive}, {value: "P", image: PlumReelFour}, {value: "O", image: OrangeReelFour}, {value: "C", image: CherryReelThree}, {value: "L", image: LemonReelFour}, {value: "B", image: BellReelOne}, {value: "C", image: CherryReelFive}, {value: "O", image: OrangeReelTwo}, {value: "P", image: PlumReelTwo}, {value: "L", image: LemonReelTwo},{value: "J", image:JackPotReelTwo}, {value: "B", image: BarReelThree}];
R2 = [{value: "C", image: CherryReelFour}, {value: "P", image: PlumReelThree}, {value: "O", image: OrangeReelThree}, {value: "L", image: LemonReelThree}, {value: "C", image: CherryReelTwo}, {value: "B", image: BellReelTwo}, {value: "C", image: CherryReelFive}, {value: "O", image: OrangeReelTwo}, {value: "P", image: PlumReelTwo}, {value: "L", image: LemonReelTwo},{value: "J", image:JackPotReelTwo}, {value: "B", image: BarReelThree}];
R3 = [{value: "C", image: CherryReelFour}, {value: "P", image: PlumReelThree}, {value: "O", image: OrangeReelFour}, {value: "C", image: CherryReelThree}, {value: "L", image: LemonReelFour}, {value: "B", image: BellReelOne}, {value: "C", image: CherryReelFive}, {value: "O", image: OrangeReelTwo}, {value: "P", image: PlumReelTwo}, {value: "L", image: LemonReelTwo},{value: "J", image:JackPotReelTwo}, {value: "B", image: BarReelThree}];

currentReels.ReelOneCurrent = {image: CherryReelThree, value: "C"}
currentReels.ReelTwoCurrent = {image: CherryReelThree, value: "C"}
currentReels.ReelThreeCurrent = {image: CherryReelThree, value: "C"}


}

this.setState({ReelOne: R1, ReelTwo: R2, ReelThree: R3, CurrentReels: currentReels,  currentReelType: type, started: true})
    
}

render(){
console.log(this.state.ReelOne)
if(this.state.started === false)
{
    return(<div className="SlotMachineGameWindow">
        {this.reelSelect()}
    </div>)
}
else
{
if(this.props.isMobile === false)
{
    return(
        <div className="SlotMachineGameWindow" >
            <div className="SlotMachineReelsWindow">
                <div className="SlotMachineReels" style={{display: "flex"}}>
                    <img style={{backgroundColor: "white"}} width="100%" height="100%" src={this.state.CurrentReels.ReelOneCurrent.image} alt="Error"></img>
                    <div className="SlotMachineReelDivider"/>
                    <img style={{backgroundColor: "white"}}  width="100%" height="100%" src={this.state.CurrentReels.ReelTwoCurrent.image} alt="Error"></img>
                    <div className="SlotMachineReelDivider"/>
                    <img style={{backgroundColor: "white"}}  width="100%" height="100%" src={this.state.CurrentReels.ReelThreeCurrent.image} alt="Error"></img>
                </div>
            </div>
            <Button style={{float: "right", marginTop: 10, marginRight: 5}} disabled={this.state.SpinDisabled} onClick={() => this.loopStopReel()}>Spin</Button>
            <Button style={{marginTop: 10}} onClick={() => this.setState({started: false})}>Go Back</Button>
            {this.state.ResultReady === true && (<div style={{textAlign: "center", fontSize: 20, marginTop: -30}}>{this.state.Result}</div>)}
        </div>
    )
}
else
{
    return(
        <div className="SlotMachineGameWindowM" >
        <div className="SlotMachineReelsWindowM">
            <div className="SlotMachineReels" style={{display: "flex"}}>
                {/* <Spritesheet  ref="ReelOneCurrent" image={this.state.CurrentReels.ReelOneCurrent} widthFrame={320} heightFrame={960} autoplay={true} steps={14} fps={24} loop={true} /> */}
                <img width="100%" height="100%" src={this.state.CurrentReels.ReelOneCurrent.image} alt="Error"></img>
                <div className="SlotMachineReelDivider"/>
                {/* <Spritesheet   ref="ReelTwoCurrent" image={this.state.CurrentReels.ReelTwoCurrent}  widthFrame={320} heightFrame={960} autoplay={true} steps={14} fps={24} loop={true} /> */}
                <img  width="100%" height="100%" src={this.state.CurrentReels.ReelTwoCurrent.image} alt="Error"></img>

                <div className="SlotMachineReelDivider"/>
                {/* <Spritesheet   ref="ReelThreeCurrent" image={this.state.CurrentReels.ReelThreeCurrent} widthFrame={320} heightFrame={960} autoplay={true} steps={14} fps={24} loop={true} /> */}
                <img  width="100%" height="100%" src={this.state.CurrentReels.ReelThreeCurrent.image} alt="Error"></img>
            </div>
        </div>
        <Button style={{float: "right", marginTop: 10, marginRight: 5}} disabled={this.state.SpinDisabled} onClick={() => this.loopStopReel()}>Spin</Button>
        <Button style={{marginTop: 10}} onClick={() => this.props.goBack("Main")}>Go Back</Button>
        {this.state.ResultReady === true && (<div style={{textAlign: "center", fontSize: 20, marginTop: 10}}>{this.state.Result}</div>)}

    </div>
    )
}
}
}




}

export default SlotMachine