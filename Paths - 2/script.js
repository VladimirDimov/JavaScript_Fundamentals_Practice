test1 = [
'3 5',
'dr dl dr ur ul',
'dr dr ul ur ur',
'dl dr ur dl ur'
]

test2 = [
'3 5',
'dr dl dl ur ul',
'dr dr ul ul ur',
'dl dr ur dl ur'
]


function solution(args) {
   var grid = args.slice(1);
   grid.forEach(function(element, index){
       grid[index] = element.split(/\s+/).filter(Boolean);
   });

   var numOfRows = grid.length;
   var numOfCols = grid[0].length;

   var mirror = [];
   for (var i = 0; i < numOfRows; i++) {
       mirror[i] = [];
       var leftCell = Math.pow(2, i);
       for (var j = 0; j < numOfCols; j++) {
        mirror[i].push(j+leftCell);
    };
};

var curRow = 0;
var curCol = 0;
var collected = 0;
var stepCounter = 0;
while(true){
    stepCounter += 1;
    var movement = grid[curRow][curCol];
    grid[curRow][curCol] = null;
    collected += mirror[curRow][curCol];
    var nextPos = goNext(curRow, curCol, movement);
    var nextRow = nextPos[0];
    var nextCol = nextPos[1];
    var checkNext = checkNextPos(nextRow, nextCol);
    if (checkNext == 'continue') {
        curRow = nextRow;
        curCol = nextCol;
    }else if (checkNext == 'out') {
        return 'successed with ' + collected;
    }else if (checkNext == 'visited') {
        return 'failed at (' + nextRow + ', ' + nextCol + ')';
    };
}

debugger;

function goNext(row, col, movement){
    switch(movement){
        case 'ul':
        return [row-1, col-1]
        break;
        case 'ur':
        return [row-1, col+1]
        break;
        case 'dl':
        return [row+1, col-1]
        break;
        case 'dr':
        return [row+1, col+1]
        break;        
    }
}

function checkNextPos(row, col){
    if (row<0 || col < 0 || row >=numOfRows || col >= numOfCols) {
        return 'out';
    }else if (grid[row][col] == null) {
        return 'visited';
    }else{
        return 'continue';
    };
}
}

console.log(solution(test1));
console.log(solution(test2));