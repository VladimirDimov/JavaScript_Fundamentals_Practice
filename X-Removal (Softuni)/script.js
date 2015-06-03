var test1 = [
'abnbjs',
'xoBab',
'Abmbh',
'aabab',
'ababvvvv'];

var test2 = [
'8888888',
'08*8*80',
'808*888',
'0**8*8?'];

function solver(args){
	var len = args.length;
	var xArr = [];

	for (var row = 0; row < len; row++) {
		var width = args[row].length;
		xArr[row] = [];
		for (var col = 0; col < width; col++) {
			xArr[row][col] = args[row][col];
		};
	};

	for (var row = 1; row < len - 1; row++) {
		var width = args[row].length;
		for (var col = 1; col < width; col++) {
			if (checkX(row, col)) {
				markX(row, col);
			};
		};
	};

	for(var row in xArr){
		var curline = '';
		for(var col in xArr[row]){
			if (xArr[row][col] != '!!!') {curline += xArr[row][col]};
		}
		console.log(curline);
	}
	debugger;

	function checkX(row, col){
		var val = args[row][col].toLowerCase();
		if ((args[row - 1].length < col + 2) || args[row + 1] < col +2) {return};
		if ((args[row + 1].length < col + 2) || args[row + 1] < col +2) {return};
		if (args[row-1][col-1].toLowerCase() != val) {return false;};
		if (args[row-1][col+1].toLowerCase() != val) {return false;};
		if (args[row+1][col-1].toLowerCase() != val) {return false;};
		if (args[row+1][col+1].toLowerCase() != val) {return false;};

		return true;
	}

	function markX(row,col){
		xArr[row][col] = '!!!';
		xArr[row-1][col-1] = '!!!';
		xArr[row-1][col+1] = '!!!';
		xArr[row+1][col-1] = '!!!';
		xArr[row+1][col+1] = '!!!';
	}
}

solver(test2);