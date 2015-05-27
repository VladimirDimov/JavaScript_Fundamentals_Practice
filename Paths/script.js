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
    var sizes = args[0].split(' ');
    var rows = parseInt(sizes[0]);
    var cols = parseInt(sizes[1]);
    var grid = args.slice(1);
    for (var row = 0; row < grid.length; row++) {
        grid[row] = grid[row].split(' ');
    }
    var clonedGrid = [];
    for (var row = 0; row < rows; row++) {
        var left = Math.pow(2, row);
        clonedGrid[row] = [];
        for (var col = 0; col < cols; col++) {
            clonedGrid[row][col] = col + left;
        }
    }
    var sum = 0,
        curRow = 0,
        curCol = 0,
        nextRow = curRow,
        nextCol = curCol;

    while (true) {
        var direction = grid[curRow][curCol];
        sum += clonedGrid[curRow][curCol];
        grid[curRow][curCol] = 'visited';

        switch (direction) {
            case 'dr':
                nextCol += 1;
                nextRow += 1;
                break;
            case 'dl':
                nextCol -= 1;
                nextRow += 1;
                break;
            case 'ur':
                nextCol += 1;
                nextRow -= 1;
                break;
            case 'ul':
                nextCol -= 1;
                nextRow -= 1;
                break;
            default:
                break;
        }

        if (isOut(nextRow, nextCol)) {
            return 'successed with ' + sum;
        }

        if (isVisited(nextRow, nextCol)) {
            return 'failed at (' + nextRow + ', ' +  nextCol + ')'; 
        }

        curRow = nextRow;
        curCol = nextCol;

        function isVisited(row, col) {
            if (grid[row][col] == 'visited') {
                return true;
            }

            return false;
        }

        function isOut(row, col) {
            if (row < 0 || row > rows - 1 || col < 0 || col > cols - 1) {
                return true;
            }

            return false;
        }
    }
}

console.log(solution(test1));
console.log(solution(test2));