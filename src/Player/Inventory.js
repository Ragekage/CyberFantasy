import React from 'react'
import {Button} from 'reactstrap'

class Inventory extends React.Component {



useItem = (item) => {
    this.props.useItem(item.amount)
}

render(){
    if(this.props.Items.length > 0)
    {
    return(
        <div className="Inventory">
            {this.props.Items.map((item, id) => {
                return(
                    <div className="InventoryItem">
                    {item.name}
                    <Button onClick={() => this.useItem(item)}>Use</Button>
                    </div>
                )
            })}
        </div>
    )
        }
        else
        {
            return(<div className="Inventory" >
                Empty
            </div>)
        }
}

}

export default Inventory