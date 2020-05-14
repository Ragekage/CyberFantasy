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






class SlotMachine extends Component {


constructor(){
    super()

    this.state = {
        ReelOne: [{value: "X", image: XReelOne},{value: "O", image: OReelOne},{value: "X", image: XReelOne},{value: "O", image: OReelThree},{value: "BAR", image: BarReelThree },{value: "O", image: OReelTwo},{value: "X", image: XReelOne},{value: "O", image: OReelThree},{value: "BAR", image: BarReelTwo},{value: "O", image: OReelTwo}],
        ReelTwo: [{value: "O", image: OReelOne},{value: "X", image: XReelOne},{value: "O", image: OReelOne},{value: "X", image: XReelThree},{value: "BAR", image: BarReelOne},{value: "X", image: XReelTwo},{value: "O", image: OReelOne},{value: "X", image: XReelThree},{value: "BAR", image: BarReelOne},{value: "X", image: XReelTwo}],
        ReelThree: [{value: "O", image: OReelOne},{value: "X", image: XReelOne},{value: "O", image: OReelOne},{value: "X", image: XReelThree},{value: "BAR", image: BarReelThree},{value: "O", image: OReelTwo},{value: "X", image: XReelOne},{value: "O", image: OReelThree},{value: "BAR", image: BarReelTwo},{value: "O", image: OReelOne}],
        currentReel: Reels,
        CurrentReels:{
        ReelOneCurrent: {image: XReelOne, value: "X"},
        ReelTwoCurrent: {image: XReelOne, value: "X"},
        ReelThreeCurrent:{image: XReelOne, value: "X"},
        ReelOrStop: false,
        ResultReady: false,
        Result: "",
        SpinDisabled: false
        }
    }

}

stopReel(ReelData, Reels, CurrentReel){
var random = Math.random()
var currentReel = Math.floor(random * 9)

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

Reels.ReelOneCurrent.image = ReelsGif;
Reels.ReelTwoCurrent.image = ReelsGif;
Reels.ReelThreeCurrent.image = ReelsGif;

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

    if(reelOne === "X" && reelTwo === "X" && reelThree === "X")
    {
        console.log("YOU WON 200")
        this.setState({Result: "You Won 200", ResultReady: true})
    }
    else if(reelOne === "O" && reelTwo === "O" && reelThree === "O")
    {
        console.log("YOU WON 300")
        this.setState({Result: "You Won 300", ResultReady: true})

    }
    else if(reelOne === "BAR" && reelTwo === "BAR" && reelThree === "BAR")
    {
        console.log("YOU WON 500")
        this.setState({Result: "You Won 500", ResultReady: true})

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


spinningOrStopped(){
if(this.state.ReelOrStop === false)
{
    return 14
}
else
{
    return 1
}



}

render(){
console.log(this.state.CurrentReels)
if(this.props.isMobile === false)
{
    return(
        <div className="SlotMachineGameWindow" >
            <div className="SlotMachineReelsWindow">
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

export default SlotMachine