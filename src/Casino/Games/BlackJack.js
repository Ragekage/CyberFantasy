import React, {Component} from 'react'
import {Button} from 'reactstrap'
import './gameStyles.css';
import { withRouter } from 'react-router-dom';
import heartSuitIcon from '../Images/HeartSuitIcon.png';
import clubSuitIcon from '../Images/ClubSuitIcon.png';
import diamondSuitIcon from '../Images/DimondSuitIcon.png';
import spadeSuitIcon from '../Images/SpadeSuitIcon.png';


class BlackJack extends Component {


constructor(){
    super()
    
    this.state = {
        deck: this.BuildDeck(),
        playerHand:[],
        dealerHand:[],
        cardNo: 0,
        currentValue: 0,
        dealerValue: 0,
        gameStart: false,
        finalScreen: false,
        didWin: false,
        buttonTimeOut: false,
    }


}






Suffle(){
    var newDeck = this.state.deck;

    this.state.deck.map((card, id) => {
        var random = Math.random()
        var cardpos = Math.floor(random * 52)
        

        newDeck[id] = newDeck[cardpos];
        newDeck[cardpos] = card;
     
    })
    
    this.setState({deck: newDeck})
    return newDeck
}   

CalculateHand(hand){

    var currentValue = this.state.currentValue
    
    hand.map((card, id) => {
        if(id === hand.length - 1)
        {
        currentValue = currentValue + card.value
        }
    })

    if(currentValue > 21)
    {
        setTimeout(() => {
        hand = []
        currentValue = 0
        console.log("Lose!")
        this.setState({finalScreen: true})
    },800)
    }
    else
    if(currentValue === 21)
    {
        setTimeout(() => {
        hand = []
        currentValue = 0
        console.log("Win!")
        this.setState({finalScreen: true, didWin: true})
    },800)
    }

    this.setState({playerHand: hand, currentValue: currentValue})
}

CalculateDealerHand(hand){
    var currentValue = this.state.dealerValue
    
    hand.map((card, id) => {
        if(id === hand.length - 1)
        {
        currentValue = currentValue + card.value
        }
    })

    if(currentValue > 21)
    {
        setTimeout(() => {
        hand = []
        currentValue = 0
        console.log("Dealer Lose!")
        this.setState({finalScreen: true, didWin: true})
    },800)

    }
    else
    if(currentValue === 21)
    {
        setTimeout(() => {
        hand = []
        currentValue = 0
        console.log("Player Lose!")
        this.setState({finalScreen: true, didWin: false})
    },800)
    }

    this.setState({dealerHand: hand, dealerValue: currentValue})

}

compareHands(){
    var playerValue = this.state.currentValue;
    var dealerValue = this.state.dealerValue;

    if(dealerValue >= playerValue && dealerValue < 22)
    {
     
        console.log("Lose!")
        this.setState({finalScreen: true})
    }
}

DrawCard(){
    var deck = this.state.deck
    var cardNo = this.state.cardNo;
    var playerHand = this.state.playerHand;
    console.log(cardNo)

    if(cardNo === 53)
    {
    playerHand.push(deck[cardNo])
    this.Suffle()
    console.log(deck[cardNo])
    cardNo = 0
    }
    else
    {
        playerHand.push(deck[cardNo])
        console.log(deck[cardNo])
        cardNo = cardNo + 1
    }
    this.setState({cardNo: cardNo})

    this.buttonTimeOutF()
    this.CalculateHand(playerHand)

}

DrawDealerCard(){
    var deck = this.state.deck
    var cardNo = this.state.cardNo;
    var dealerHand = this.state.dealerHand;
    console.log(cardNo)
    if(cardNo === 53)
    {
    dealerHand.push(deck[cardNo])
    this.Suffle()
    console.log(deck[cardNo])
    cardNo = 0
    }
    else
    {
        dealerHand.push(deck[cardNo])
        console.log(deck[cardNo])
        cardNo = cardNo + 1
    }

    this.setState({cardNo: cardNo})


    this.CalculateDealerHand(dealerHand)

}

BuildDeck(){
    var random = Math.random()
    var card = Math.floor(random * 52)
    var deck = []

    var storeValue = 0
    var i
    for(i = 0; i <= 52; i++)
    {
        var card = {
            suit: "",
            rank: "",
            value: 0,
            pos: 0,
        }

   

        if(storeValue == 14)
        {
            storeValue = 1
        }
        switch(i)
        {
            case 1: {
            card.suit = "Clubs";
            card.rank = "A";
            card.value = 11;
            card.pos = 1;
            deck.push(card)}
            break;
            case 14: {
            card.suit = "Diamonds";
            card.rank = "A";
            card.value = 11;
            card.pos = 14;
            deck.push(card)}
            break;
            case 27: {
            card.suit = "Hearts";
            card.rank = "A";
            card.value = 11;
            card.pos = 27;
            deck.push(card)}
            break;
            case 40: {
            card.suit = "Spades";
            card.rank = "A";
            card.value = 11;
            card.pos = 40;
            deck.push(card)}
            break;   
            }
          
        

        if(i <= 13 && i > 1)
        {
            card.suit = "Clubs";
            card.rank = storeValue.toString();
            card.value = storeValue;
            card.pos = i;
            if(storeValue == 11)
            {
                card.rank = "J"
                card.value = 10
            }
            else if(storeValue == 12)
            {
                card.rank = "Q"
                card.value = 10
            }
            else if(storeValue == 13)
            {
                card.rank = "K"
                card.value = 10
            }
            deck.push(card)
        }
        else if(i <= 26 && i > 14)
        {
            card.suit = "Diamonds";
            card.rank = storeValue.toString();
            card.value = storeValue;
            card.pos = i;
            if(storeValue == 11)
            {
                card.rank = "J"
                card.value = 10
            }
            else if(storeValue == 12)
            {
                card.rank = "Q"
                card.value = 10
            }
            else if(storeValue == 13)
            {
                card.rank = "K"
                card.value = 10
            }
           
            deck.push(card)
        }
        else if(i <= 39 && i > 27)
        {
            card.suit = "Hearts";
            card.rank = storeValue.toString();
            card.value = storeValue;
            card.pos = i;
            if(storeValue == 11)
            {
                card.rank = "J"
                card.value = 10
            }
            else if(storeValue == 12)
            {
                card.rank = "Q"
                card.value = 10
            }
            else if(storeValue == 13)
            {
                card.rank = "K"
                card.value = 10
            }
            deck.push(card)
        }
        else if(i > 40)
        {
            card.suit = "Spades";
            card.rank = storeValue.toString();
            card.value = storeValue;
            card.pos = i;
            if(storeValue == 11)
            {
                card.rank = "J"
                card.value = 10
            }
            else if(storeValue == 12)
            {
                card.rank = "Q"
                card.value = 10
            }
            else if(storeValue == 13)
            {
                card.rank = "K"
                card.value = 10
            }
            deck.push(card)
        }

        storeValue = storeValue + 1
    }

    console.log(deck)

        return deck
    }

dealerTurn(){
this.setState({buttonTimeOut: true})
var int = setInterval(() => {
    if(this.state.finalScreen === true)
    {
        clearInterval(int)
    }
    else
    {
    this.DrawDealerCard();
    setTimeout(() => {
    this.compareHands();
    },500)
    }
 
}, 1500)

  
}

restart(){
    this.setState({playerHand: [], dealerHand: [], currentValue: 0,  cardNo: 0, dealerValue: 0, gameStart: false, finalScreen: false, didWin: false})
}

startGame = () => {
    this.Suffle();
    this.DrawDealerCard()
    setTimeout(() => {
    this.DrawCard()
    this.setState({gameStart: true, buttonTimeOut: false})
},200)
}

displaySuit(suit){
    switch(suit){
        case "Spades": return spadeSuitIcon;
        case "Clubs": return clubSuitIcon;
        case "Hearts": return heartSuitIcon;
        case "Diamonds": return diamondSuitIcon;
        default: return null
    }
}

displayTextColor(suit){
    switch(suit){
        case "Spades": return "black";
        case "Clubs": return "black";
        case "Hearts": return "red";
        case "Diamonds": return "red";
        default: return null
    }
}

playingCard(card){
    var suitSrc = this.displaySuit(card.suit)
    return(
        <div style={{color: this.displayTextColor(card.suit)}} className="BlackJackPlayingCard">
        <div className="BlackJackPlayingCardTop">
        <div className="BlackJackPlayingCardTopL">{card.rank} <img width={20} height={20} src={suitSrc} alt="error"></img></div>
        <div className="BlackJackPlayingCardTopR">{card.rank} <img width={20} height={20} src={suitSrc} alt="error"></img></div>
        </div>
        <div className="BlackJackCardSpacer"></div>
        <div className="BlackJackPlayingCardBottom">
        <div className="BlackJackPlayingCardBottomL">{card.rank} <img width={20} height={20} src={suitSrc} alt="error"></img></div>
        <div className="BlackJackPlayingCardBottomR">{card.rank} <img width={20} height={20} src={suitSrc} alt="error"></img></div>
        </div>
        </div>
    )
}

displayDealersHand = () => {
    if(this.state.dealerHand.length > 0)
    {
        return(
            <div>
               
                <div className="BlackJackCardsDealer">
                {this.state.dealerHand.map((card, id) => {
                    return(
                        <div>{this.playingCard(card)}</div>
                    )
                })}
                </div>
            </div>
        )
    }
}

displayPlayerHand = () => {
    if(this.state.playerHand.length > 0)
    {
        return(
            <div >
             
                <div className="BlackJackCardsPlayer">
                {this.state.playerHand.map((card, id) => {
                    return(
                        <div>{this.playingCard(card)}</div>

                    )
                })}
                </div>
            </div>
        )
    }

}

buttonTimeOutF(){
    this.setState({buttonTimeOut: true})
    setTimeout(() => {
        this.setState({buttonTimeOut: false})
    },500 )
}

displayGameBoard = () => {
  
    if(this.state.finalScreen === false)
    {
    if(this.state.gameStart === true){
        return(
            <div className="BlackJackGameBoard">
                <div>
                    {this.displayDealersHand()}
                    {this.displayPlayerHand()}
                </div>
                <div>
                    <Button style={{marginRight: 5}} disabled={this.state.buttonTimeOut} onClick={() => this.DrawCard()}>Hit</Button>
                    <Button disabled={this.state.buttonTimeOut} onClick={() => this.dealerTurn()}>Stick</Button>
                </div>
            </div>
        )
    }
    else
    {
        return(
            <div className="BlackJackStartMenu">
            BlackJack
        <Button onClick={() => this.startGame()}>Start Game</Button>
            </div>
        )

    }
    }
    else
    {
        if(this.state.didWin === false)
        {
        return(
            <div className="BlackJackLost">
            You Lost
            <Button onClick={() => this.restart()}>Retry</Button>
            </div>
        )
        }
        else
        {
            return(
                <div className="BlackJackWin">
                You Won!
                <Button onClick={() => this.restart()}>Retry</Button>
                </div>
            )
        }
    }
}



render()
{
    console.log(this.state.playerHand, this.state.dealerHand)
    if(this.props.isMobile === false)
    {
    return(
        <div className="BlackJackGameWindow">
        {this.displayGameBoard()}
        <Button style={{marginTop: 10}} onClick={() => this.props.goBack("Main")}>Go Back</Button>
        </div>
    )
    }
    else
    {
        return(
            <div className="BlackJackGameWindowM">
            {this.displayGameBoard()}
            <Button style={{marginTop: 10}} onClick={() => this.props.goBack("Main")}>Go Back</Button>
        </div>
        )
    }
}



}

export default BlackJack