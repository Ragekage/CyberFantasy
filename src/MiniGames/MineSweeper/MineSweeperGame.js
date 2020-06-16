import React,{Component} from 'react'
import {buildBoard} from './Board'
import {Button} from 'reactstrap'
import './MineSweeper.css'

class MineSweeperGame extends Component{

constructor(){
    super()
    this.state = {
        board: [],
    }
}

componentDidMount(){
    var board = buildBoard(10,10)
    console.log(board)
    this.setState({board: board})
}

revealCell(rowid, cellid, board){

    board[rowid][cellid].hidden = false;
    this.setState({board: board})
}

displayBoard(){
    var board = this.state.board

    if(board.length > 0){
        return(
            <div className="board">
        {board.map((row, rowid) => {
            return(
            <div className="boardRow">
                {row.map((cell, cellid) => {
                    return(
                        <div onClick={() => this.revealCell(rowid, cellid, board)} className="boardCell">
                            {board[rowid][cellid].hidden === true ? "" : cell.bomb === true ? "B" : cell.bombsInArea}
                        </div>
                    )
                })}
            </div>
            )
        })}
        </div>
        )
    }
}

render(){
    return(
    <div>MineSweeper
    {this.displayBoard()}
    <Button style={{marginTop: 10}} onClick={() => this.props.goBack("Main")}>Go Back</Button>

    </div>
    )
}
}

export default MineSweeperGame