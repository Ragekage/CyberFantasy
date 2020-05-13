import React, {Component} from 'react'
import BlackJack from './Games/BlackJack'
import './casinoStyle.css'

class Casino extends Component {


constructor(props){
    super(props)
}

render(){
    return(
        <div className="CasinoMain">
            <div style={{margin: 0}}>Casino</div>
        <BlackJack isMobile={this.props.FullMediaQuery.isTabletOrMobileDevice}/>
        </div>
    )
}

}

export default Casino