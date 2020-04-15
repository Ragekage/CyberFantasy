import React, {Component} from 'react';
import {Card, CardTitle, CardBody, Button} from 'reactstrap'

class Shop extends Component {

 

givePlayerItem = () => {
 var item = {
    name: "firstaid",
    type: "heal",
    amount: 50,

    }
this.props.Player.current.givePlayerItem(item, 300)
}

render(){
    return(
        <Card style={{color: "black"}}>
        <CardTitle>
        Shop
        </CardTitle>
        <CardBody>
          First Aid
          <Button onClick={() => this.givePlayerItem()}>Buy</Button>  
        </CardBody>
        </Card>
    )
}

}

export default Shop