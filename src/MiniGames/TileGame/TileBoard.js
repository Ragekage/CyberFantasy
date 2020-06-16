




export function buildTileBoard(maxX, maxY){


var board = []

    for(var y = 1; y < maxY + 1; y++){
        var row = []
        for(var x = 1; x < maxX + 1; x++){
            var currentPos = {x: y, y: x, selected: false}
            row.push(currentPos)
        }
        board.push(row);
    }

    return board
}