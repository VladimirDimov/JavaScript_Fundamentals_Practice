var test1 = [
'6 3',
'100000A15G3CA6T19C'];

var test2 = [
'9 4',
'18A13C10T10GA18GT17C'];

function solve(args){
	var temp = args[0].split(/\s+/);
	var lineLen = parseInt(temp[0]);
	var groupLen = parseInt(temp[1]);
	var code = args[1];
	var builder = '';

	var matches = code.match(/(\d*)([A-Z])/gi);

	matches.forEach(function(element, index){
		var gen = element.match(/(\d*)([A-Z])/);
		var num;
		if (gen[1] != '') {
			num = parseInt(gen[1]);
		}else{
			num = 1;
		};
		
		var base = gen[2];
		for (var i = 0; i < num; i++) {
			builder += base;
		};
	});

	var len = builder.length;
	var curline = '';
	var curGroupLen = 0;
	var lineNum = 0;
	var rowsNumber = Math.ceil(len/lineLen);
	var padding = rowsNumber.toString().length;

	for (var i = 0; i < len; i++) {
		curline += builder[i];
		curGroupLen += 1;
		if ((i+1) % lineLen == 0) {
			lineNum += 1;
			console.log(padRight(lineNum, padding) + ' ' + curline);
			curline = '';
			curGroupLen = 0;
		}else if (curGroupLen == groupLen) {
			curline += ' ';
			curGroupLen = 0;
		};
	};
	if (curline != '') {
		lineNum += 1;
		console.log(padRight(lineNum, padding) + ' ' + curline.trim());
	};
	debugger;

	function padRight(str, num){
		var len = str.toString().length
		var prefix = '';
		if (len >= num) {
			return str;
		}else{
			var pads = num - len;
			for (var i = 0; i < pads; i++) {
				prefix += ' ';
			};
			return prefix + str;
		};
	}
}

solve(test1);
// solve(test2);