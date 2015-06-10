function solution(args){
	Array.prototype.convertToArray = function(){
		var result = [];
		this.forEach(function(element, index){
			result[index] = [];
			for(var i in element){
				result[index].push(element[i]);
			}
		});
		return result;
	}

	var sizes = args[0].split(/\s+/).filter(Boolean);
	var numberOfRows = Number(sizes[0]);
	var numberOfCols = Number(sizes[1]);
	var grid = args.slice(1);
	grid = grid.convertToArray();
	var mirror = [];
	for (var row = 0; row < numberOfRows; row++) {
		mirror[row] = [];
		var firstCell = Math.pow(2,row);
		for (var col = firstCell; col >= firstCell - numberOfCols + 1; col--) {
			mirror[row].push(col);
		};
	};

	var position = [numberOfRows - 1, numberOfCols - 1];
	var collected = 0;
	var jumps = 0;
	while(true){
		collected += mirror[position[0]][position[1]];
		jumps += 1;
		var nextStep = grid[position[0]][position[1]];
		grid[position[0]][position[1]] = 0;
		var nextPosition = NextPosition(position, nextStep);
		var checkPosition = CheckNextPosition(nextPosition)
		if (checkPosition == 'continue') {
			position = nextPosition;
		}else if (checkPosition == 'outside') {
			return ('Go go Horsy! Collected ' + collected + ' weeds');
			break;
		}else if (checkPosition == 'doomed') {
			return ('Sadly the horse is doomed in ' + jumps + ' jumps');
			break;
		};
	};

	debugger;

	function NextPosition(position, step){
		var curRow = position[0];
		var curCol = position[1];

		if (step == 1) {curCol
			return [curRow - 2,curCol + 1];
		}else if (step == 2) {
			return [curRow - 1,curCol + 2];
		}else if (step == 3) {
			return [curRow + 1,curCol + 2];
		}else if (step == 4) {
			return [curRow + 2,curCol + 1];
		}else if (step == 5) {
			return [curRow + 2,curCol - 1];			
		}else if (step == 6) {
			return [curRow + 1,curCol - 2];
		}else if (step == 7) {
			return [curRow - 1,curCol - 2];
		}else if (step == 8) {
			return [curRow - 2,curCol - 1];
		};
	};

	function CheckNextPosition(nextPosition){
		var nextRow = nextPosition[0];
		var nextCol = nextPosition[1];
		if (nextRow < 0 || nextRow > numberOfRows - 1) {
			return 'outside'
		};
		if (nextCol < 0 || nextCol > numberOfCols - 1) {
			return 'outside';
		};
		if (grid[nextRow][nextCol] == 0) {
			return 'doomed';
		};
		return 'continue';
	};	
};


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