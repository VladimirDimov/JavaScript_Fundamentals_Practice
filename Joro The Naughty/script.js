var test1 = [
'6 7 3', // N x M    J
'0 0',   // Start position
'2 2',
'-2 2',
'3 -1',
]

function solution(args){
	var NMJ = args[0].split(' ');
	N = parseInt(NMJ[0]);
	M = parseInt(NMJ[1]);
	J = parseInt(NMJ[2]);
	var initialPosition = args[1].split(' ');
	initialPosition[0] = parseInt(initialPosition[0]);
	initialPosition[1] = parseInt(initialPosition[1]);
	var jumps = args.splice(2);

	for (var i = 0; i < jumps.length; i++) {
		jumps[i] = jumps[i].split(' ');
		for (var j = 0; j < jumps[i].length; j++) {
			jumps[i][j] = parseInt(jumps[i][j]);
		};
	};

	var grid = [];
	var counter = 1;
	for (var row = 0; row < N; row++) {
		var currentRow = [];
		for (var col = 0; col < M; col++) {
			currentRow[col] = counter;
			counter++;
		};
		grid[row] = currentRow;
	};

	var step = 0;
	var posRow = initialPosition[0];
	var posCol = initialPosition[1];
	var currentPosition = [];
	currentPosition.push(initialPosition[0]);
	currentPosition.push(initialPosition[1]);
	var sumOfNumbers = 0;

	while(true){
		step++;
		offset = jumps[(step-1) %J];

		sumOfNumbers += grid[currentPosition[0]][currentPosition[1]];

		currentPosition[0] += offset[0];
		currentPosition[1] += offset[1];
		
		if (isOut(grid, currentPosition)) {
			return 'escaped ' + sumOfNumbers;
		};

		if (step%J == 0 && currentPosition[0] == initialPosition[0] && currentPosition[1] == initialPosition[1]) {
			return 'cought ' + step;
		};
	}

	function isOut(arr, position){
		var row = position[0];
		var col = position[1];

		if (0 > row || row >= N) {
			return true;
		};

		if (0 > col || col >= M) {
			return true;
		};
		return false;
	}
}

console.log(solution(test1));