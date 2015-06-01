var test1 = [
'abcdexgh',
'bbbdxxxh',
'abcxxxxx'];

var test2 = [
'aa',
'aaa',
'aaaa',
'aaaaa'];

var test3 = [
'ax',
'xxx',
'b',
'bbb',
'bbbb'];

var test4 = [
'dffdsgyefg',
'ffffeyeee',
'jbfffays',
'dagfffdsss',
'dfdfa',
'dadaaadddf',
'sdaaaaa',
'daaaaaaasf'];

function solver(args){
	var mirror = [];
	for (var row = 0; row < args.length; row++) {
		mirror[row] = [];
		for (var col = 0; col < args[row].length; col++) {
			mirror[row][col] = args[row][col];
		};
	};
	var height = args.length;

	for (var row = 0; row < height - 1; row++) {
		var len = args[row].length;

		for (var col = 1; col < len; col++) {
			if (args[row+1].length < col) {continue};
			if (isTriangle(row, col)) {
				mirror[row][col] = '*';
				for (var i = col - 1; i <= col + 1; i++) {
					mirror[row+1][i] = '*';
				};
			}			
		};
	};
	

	for (var row = 0; row < mirror.length; row++) {
		console.log(mirror[row].join(''));
	};

	function isTriangle(row, col){
		for (var i = col - 1; i <= col + 1; i++) {
			if (args[row+1][i] != args[row][col]) {
				return false;
			}					
		};

			return true;
	}
}

// solver(test1);
solver(test2);
// solver(test3);
// solver(test4);