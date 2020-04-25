import React, {Component} from 'react'
import {confirmCheck} from '../Utilities/ServerEndpoints'
import battleWindow from '../Images/BattleWindow.png'
import {Button} from 'reactstrap'
import {Link} from 'react-router-dom'

class Confirmation extends Component {

constructor(props)
{
    super()
    this.state = {
        result: ""
    }

    

    console.log(props.match.params.confirmId)
}


componentDidMount(){
    this.performConfirmationCheck(this.props.match.params.confirmId)

}

performConfirmationCheck(confirmId){
    confirmCheck(confirmId).then(response => {
        this.setState({result: response.data.result})
    })
}


render(){

    
    if(this.state.result === "")
    {
        return(
        <div className="confirmationWindow">
            <img width={1024} height={600} src={battleWindow}></img>
            <div style={{transform: "translate(300px, -500px)", fontSize: 40}}>Loading Confirmation</div>
        </div>
        )
    }
    else if(this.state.result === "failed")
    {
        return(
        <div className="confirmationWindow">
            <img width={1024} height={600} src={battleWindow}></img>
            <div style={{transform: "translate(300px, -500px)", fontSize: 40}}>Error with request</div>
            <Link style={{transform: "translate(425px, -250px)", fontSize: 60}} to="/welcome" className="btn btn-primary">Ok</Link>
        </div>
        )
    }
    else if(this.state.result === "confirmed")
    {
        return(
            <div className="confirmationWindow">
            <img width={1024} height={600} src={battleWindow}></img>
              <div style={{transform: "translate(150px, -500px)", fontSize: 40}}>  Succsessfully Confirmed Email!</div>
                <Link style={{transform: "translate(425px, -250px)", fontSize: 60}} to="/welcome" className="btn btn-primary">Ok</Link>

            </div>
        )
    }
    return(
    <div>
    Confirmation
    </div>
    )
}

}

export default Confirmation