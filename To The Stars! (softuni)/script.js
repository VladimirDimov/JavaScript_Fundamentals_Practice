var test1 = [
'Sirius 3 7',
'Pesho 100 100',
'Alpha-Centauri 7 5',
'Gamma-Cygni 10 10',
'8 1',
'6',
];

var test2 = [
'Terra-Nova 16 2',
'Perseus 2.6 4.8',
'Virgo 1.6 7',
'2 5',
'4',
];

function solution(args){
	Array.prototype.parseInt = function(){
		for(var i in this){
			this[i] = parseInt(this[i]);
		};
	}

	Array.prototype.parseFloat = function(){
		for(var i in this){
			this[i] = parseFloat(this[i]);
		};
	}

	function checkCoordinates(row, col){
		for (var i in stars) {
			var curStar = stars[i];
			if (row <= curStar.row+1 && row >= curStar.row-1 && col <= curStar.col+1 && col >= curStar.col-1) {
				return curStar.name;
			};
		};

		return 'space';
	}

	//solution
	var stars = [];
	var argsLen = args.length;
	var basePosition = args[argsLen - 2].split(' ').filter(Boolean);
	basePosition.parseFloat();
	var movements = parseInt(args[argsLen - 1]);

	for (var i = 0; i < argsLen - 2; i++) {
		var curLine = args[i].split(' ').filter(Boolean);
		stars.push({name: curLine[0], row: parseFloat(curLine[1]), col: parseFloat(curLine[2])});
	};

	for (var i = 0; i <= movements; i++) {
		console.log(checkCoordinates(basePosition[0], basePosition[1] + i).toLowerCase());
	};

}

solution(test1);