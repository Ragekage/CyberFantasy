

 export function buildBoard(maxX, maxY){
	var Board = [];
	var y;
	var x;
	for(y = 1;  y <= maxY; y++){
		var row = [];
		for(x = 1; x <= maxX; x++){	
			var currentPos = {y: y, x: x, bomb: isBomb(), bombsInArea: 0, hidden: true}
		row.push(currentPos)
		}
		Board.push(row);
	}
	Board = checkForBombs(Board, maxY, maxX);
	return Board
	} 
	function isBomb(){
		var random = Math.random();
		console.log(Math.floor(random * 10))
		if(Math.floor(random * 10) <= 1){
			return true
		}
		else{
			return false
		}
		} 
	function checkForBombs(board, maxY, maxX){
		var x
		var y
		for(y = 0; y <= maxY - 1; y++){
			for(x = 0; x <= maxX - 1; x++){
				board[y][x].bombsInArea = CheckPostions(board, y, x);
			}
		}
		return board
	}
	function CheckPostions(board, cY, cX){
		var bombs = 0;
		console.log(cY, cX)
		var currentPosY = cY
		var currentPosX = cX
		var posToCheck = [{y: currentPosY - 1, x: currentPosX - 1}, {y: currentPosY - 1, x: currentPosX},{y: currentPosY - 1, x: currentPosX + 1},{y: currentPosY , x: currentPosX - 1},{y: currentPosY, x: currentPosX + 1},{y: currentPosY + 1, x: currentPosX - 1},  {y: currentPosY + 1, x: currentPosX},  {y: currentPosY + 1, x: currentPosX + 1}];
		var i
		for(i = 0; i <= posToCheck.length - 1; i++){
 console.log(posToCheck[i])
			if(posToCheck[i].x > -1 ){
				if(posToCheck[i].y > - 1){
					if(posToCheck[i].x < board[0].length){
						if(posToCheck[i].y < board.length)
			if(board[posToCheck[i].y ][posToCheck[i].x] != undefined ){
				if(board[posToCheck[i].y][posToCheck[i].x].bomb == true){
					bombs = bombs + 1;
				}
			}
			}
			}
			}
		}
		return bombs
	}

console.log(buildBoard(5, 5))