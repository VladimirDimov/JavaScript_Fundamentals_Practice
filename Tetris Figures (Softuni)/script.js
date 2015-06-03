var test1 = [
'--o--o-',
'--oo-oo',
'ooo-oo-',
'-ooooo-',
'---oo--'
];

var test2 = [
'-oo',
'ooo',
'ooo'
];

function solver(args){	
	var figI = [
	'o',
	'o',
	'o',
	'o'	
	];

	var figL =[
	'o-',
	'o-',
	'oo'
	];

	var figJ = [
	'-o',
	'-o',
	'oo'
	];
	var figO = [
	'oo',
	'oo'
	];

	var figZ = [
	'oo-',
	'-oo'
	];

	var figS = [
	'-oo',
	'oo-'
	];

	var figT = [
	'ooo',
	'-o-'
	];

	var figures = {
		I: newFigure('I', figI, 0),
		L: newFigure('L', figL, 0),
		J: newFigure('J', figJ, 0),
		O: newFigure('O', figO, 0),
		Z: newFigure('Z', figZ, 0),
		S: newFigure('S', figS, 0),
		T: newFigure('T', figT, 0)
	};

	var len = args.length;
	var width = args[0].length;

	for (var i in figures) {
		var fig = figures[i].pattern,
		figLen = fig.length,
		figWidth = fig[0].length;

		for (var row = 0; row < len - figLen + 1; row++) {
			for (var col = 0; col < width - figWidth + 1; col++) {
				var isMatch = true;				

				for (var subrow = 0; subrow < figLen; subrow++) {
					for (var subcol = 0; subcol < figWidth; subcol++) {
						var curChar = args[row + subrow][col + subcol];
						var subChar = fig[subrow][subcol];
						if (subChar == 'o' && curChar != subChar) {
							isMatch = false;
							subcol = figWidth;
							subrow = figLen;
						};
					};
				};
				if (isMatch) {figures[i].count += 1;};
			};
		};
	};

	var resultArr = [];
	for(var j in figures){
		resultArr.push(figures[j].toString());
	}

	console.log('{' + resultArr.join(',') + '}');

	function newFigure(name, pattern, count){
		return{
			name: name,
			pattern: pattern,
			count: count,
			toString: function (){
				return '"' + this.name + '":' + this.count;
			}
		}
	}
}

solver(test2);