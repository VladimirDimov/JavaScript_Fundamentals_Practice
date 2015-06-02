var test1 = [
'Rotate(90)',
'hello',
'softuni',
'exam'];

var test2 = [
'Rotate(180)',
'hello',
'softuni',
'exam'];

function solver(args){
	var turns = (parseInt(args[0].split(/\(|\)/)[1])/90)%4;
	var lines = args.slice(1);

	for (var i = 0; i < turns; i++) {
		lines = rotate(lines);
	};


	for (var row = 0; row < lines.length; row++) {
		console.log(lines[row]);
	};

	function rotate(lines){
		var result = [];
		var isCharacter = true;
		var col = 0;
		while(isCharacter){
			var curLine = '';
			isCharacter = false;
			for (var row = lines.length - 1; row >= 0; row--) {				
				if (lines[row][col]) {
					curLine += lines[row][col];
					isCharacter = true;
				}else{
					curLine += ' ';
				};								
			};
			col += 1;
			if (isCharacter) {result.push(curLine)};
			
		}

		return result;
	}

	debugger;
}

// solver(test1);
solver(test2);