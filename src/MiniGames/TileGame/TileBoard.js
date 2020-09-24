




export function buildTileBoard(maxX, maxY){


var board = []

    for(var y = 1; y < maxY + 1; y++){
        var row = []
        for(var x = 1; x < maxX + 1; x++){
            var currentPos = {y: y, x: x, selected: false, contains: {}}
            row.push(currentPos)
        }
        board.push(row);
    }

    return board
}