import React, {Component} from 'react'
import {buildTileBoard} from './TileBoard';
import {Button} from 'reactstrap';
import './TileGame.css'

class TileGame extends Component {

constructor(){
    super()
    this.state = {
        xy: 6,
        board: buildTileBoard(6, 6)
    }

    this.buildEnemies()
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

buildEnemies(){
    var board = this.state.board;
    var enemy = {type: "e"}
    var maxXY = this.state.xy
    var random = Math.random()
    var enemyAmount = Math.floor(random * 10);

    for(var i = 1; i <= enemyAmount; i++){
        var randomX = Math.random();
        var randomY = Math.random();
        var X = Math.floor(randomX * maxXY);
        var Y = Math.floor(randomY * maxXY);
        console.log(X, Y)
        board[X][Y].contains = enemy;
    }
    console.log(board)
    this.setState({board: board})
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

returnType(cell){
    if(cell.contains.type !== undefined)
    {
        if(cell.contains.type === "e")
        {
            return "blue"
        }
    }
    else
    {
        return "black"
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
                        <div onClick={() => this.selectCell(rowid, cellid)} className="boardCell" style={{color: this.returnType(board[rowid][cellid]),userSelect: "none", cursor: "pointer", backgroundColor: this.returnSelected(board[rowid][cellid].selected)}}>
                            {board[rowid][cellid].y} {board[rowid][cellid].x} 
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
    console.log(this.state.board)
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