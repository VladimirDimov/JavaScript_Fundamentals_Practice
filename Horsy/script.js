function solution(args){
	var sizes = args[0].split(' ');
	var rows = parseInt(sizes[0]);
	var cols = parseInt(sizes[1]);
	var gridDirections = args.slice(1);
	for (var row = 0; row < rows; row++) {
		var readRow = gridDirections[row];
		gridDirections[row] = [];
		for (var col = 0; col < readRow.length; col++) {
			gridDirections[row][col] = parseInt(readRow[col]);
		};
	};

	var grid = [];
	for (var row = 0; row < rows; row++) {
		grid[row] = [];
		for (var col = 0; col < cols; col++) {
			grid[row][col] = Math.pow(2, row) - col;
		};
	};

	var weeds = 0;
	var jumps = 0;

	var row = rows - 1;
	var col = cols - 1;
	
	while(true){
		jumps += 1;
		weeds += grid[row][col];
		nextRow = row;
		nextCol = col;		
		var direction = gridDirections[row][col];
		gridDirections[row][col] = 'v';

		switch(direction){
			case 1:
			nextRow -= 2;
			nextCol += 1;
			break;
			case 2:
			nextRow -= 1;
			nextCol += 2;
			break;
			case 3:
			nextRow += 1;
			nextCol += 2;
			break;
			case 4:
			nextRow += 2;
			nextCol += 1;
			break;	
			case 5:
			nextRow += 2;
			nextCol -= 1;
			break;
			case 6:
			nextRow += 1;
			nextCol -= 2;
			break;
			case 7:
			nextRow -= 1;
			nextCol -= 2;
			break;
			case 8:
			nextRow -= 2;
			nextCol -= 1;
			break;
			default:
			return 'Invalid direction';
			break;
		}

		if (isOut(nextRow, nextCol)) {
			return 'Go go Horsy! Collected ' + weeds + ' weeds';
		};

		if (isVisited(nextRow, nextCol)) {
			return 'Sadly the horse is doomed in ' + jumps + ' jumps'
		};

		row = nextRow;
		col = nextCol;
	}

	function isOut(row, col){
		if (row < 0 || row > rows -1 || col < 0 || col > cols - 1) {
			return true;
		};

		return false;
	}

	function isVisited(row, col){
		if (gridDirections[row][col] == 'v') {
			return true;
		};

		return false;
	}
}

var test1 = [
'3 5',
'54561',
'43328',
'52388',
]; 

var test2 = [
'3 5',
'54361',
'43326',
'52188',
];

console.log(solution(test1));