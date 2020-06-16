import React, {Component} from 'react'
import {buildTileBoard} from './TileBoard';
import {Button} from 'reactstrap';
import './TileGame.css'

class TileGame extends Component {

constructor(){
    super()
    this.state = {
        board: buildTileBoard(6, 6)
    }

}

selectCell(rowId, cellId){
    var board  = this.state.board;

    if(board[rowId][cellId].selected === false)
    {
    board[rowId][cellId].selected = true;
    }
    else
    {
    board[rowId][cellId].selected = false;
    }

    this.setState({board: board});
}

returnSelected(selected){
if(selected === false)
{
    return "grey"
}
else
{
    return "green"
}
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
                        <div onClick={() => this.selectCell(rowid, cellid)} className="boardCell" style={{userSelect: "none", cursor: "pointer", backgroundColor: this.returnSelected(board[rowid][cellid].selected)}}>
                            {board[rowid][cellid].x} {board[rowid][cellid].y}
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
    <div>Game Board
    {this.displayBoard()}
    <Button style={{marginTop: 10}} onClick={() => this.props.goBack("Main")}>Go Back</Button>

    </div>
    )
}


ddda




}

export default TileGame