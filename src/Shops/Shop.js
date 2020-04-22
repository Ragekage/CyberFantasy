import React, {Component} from 'react';
import {Card, CardTitle, CardBody, Button} from 'reactstrap'
import './ShopStyle.css';
import ShopImageTemplate from '../Images/ShopBoard.png' 

class Shop extends Component {

 

givePlayerItem = () => {
 var item = {
    name: "firstaid",
    type: "heal",
    amount: 50,

    }
this.props.Player.current.givePlayerItem(item, 100)
}

render(){
    return(
        <div className="Shop">
        <img width={1024} height={428} src={ShopImageTemplate}></img>
        <div className="Shoptitle">Shop</div>
        <div className="Item">
          First Aid
          <Button onClick={() => this.givePlayerItem()}>Buy</Button>  
          </div>
        </div>
    )
}

}

export default Shop