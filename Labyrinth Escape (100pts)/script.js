var test1 =[ // out 45
"3 4",
"1 3",
"lrrd",
"dlll",
"rddd"];

var test2 =[  // lost 21
"5 8",
"0 0",
"rrrrrrrd",
"rludulrd",
"durlddud",
"urrrldud",
"ulllllll"];

var test3 =[ // out 442
"5 8",
"0 0",
"rrrrrrrd",
"rludulrd",
"lurlddud",
"urrrldud",
"ulllllll"];

function solve(args){
	var rows = parseInt(args[0].split(' ')[0]);
	var cols = parseInt(args[0].split(' ')[1]);
	var positionRow = parseInt(args[1].split(' ')[0]);
	var positionCol = parseInt(args[1].split(' ')[1]);
	var tempGrid = args.slice(2);
	var grid = [];
	for (var row = 0; row < tempGrid.length; row++) {
		var curRow = tempGrid[row];
		var tempRow = [];
		for (var col = 0; col < curRow.length; col++) {
			tempRow[col] = curRow[col];
		};
		grid[row] = tempRow;
	};

	var counter = 0;
	var countPath = 0;

	while(true){
		
		var nextRow = positionRow;
		var nextCol = positionCol;
		var direction = grid[positionRow][positionCol];
		grid[positionRow][positionCol] = 'v';
		counter += getCellValue(positionRow, positionCol);
		countPath++;

		switch(direction){
			case 'l':
			nextCol--;
			break;
			case 'r':
			nextCol++;
			break;
			case 'u':
			nextRow--;
			break;
			case 'd':
			nextRow++;
			break;
			default:
			statements_def
			break;
		}

			if (!grid[nextRow] || !grid[nextRow][nextCol]) { // Is inside
				return 'out ' + counter;
			}else if(grid[nextRow][nextCol] == 'v'){
				return 'lost ' + countPath;
			}else{
				positionRow = nextRow;
				positionCol = nextCol;
			};

		}

		function getCellValue(row, col){
			return parseInt(row)*cols + col + 1;
		}
	}

	console.log(solve(test2));
