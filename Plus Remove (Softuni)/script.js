var test1 = [
'ab**l5',
'bBb*555',
'absh*5',
'ttHHH',
'ttth'];

function solver(args){
	var mirror = [];
	for(var row in args){
		mirror[row] = [];
		for(var col in args[row]){
			mirror[row][col] = args[row][col];
		}
	}
	
	for(var row in args){
		args[row] = args[row].toLowerCase();
	}

	var len = args.length;	

	for (var row = 1; row < len-1; row++) {
		var width = args[row].length;
		for (var col = 1; col < width-1; col++) {
			if (isX(row, col)) {
				markX(row,col);
			};
		};
	};

	for(var row in mirror){
		var line = '';
		for(var col in mirror[row]){
			if (mirror[row][col] != 'del') {line += mirror[row][col]};
		}
		console.log(line);
	}

	debugger;

	function isX(row, col){
		var sym = args[row][col];
		if (!args[row-1][col] || !args[row+1][col]) {return false};
		if (args[row-1][col] == sym && args[row][col+1] == sym && args[row][col-1] == sym && args[row+1][col] == sym) {return true;}
		return false;
	}

	function markX(row, col){
		mirror[row][col] = 'del';
		mirror[row-1][col] = 'del';
		mirror[row][col+1] = 'del';
		mirror[row][col-1] = 'del';
		mirror[row+1][col] = 'del';
	}

}

solver(test1);