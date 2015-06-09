var test1 = [
'  5   X=-1',
'  6   IF   X=-1 THEN X=0',
' 7    PRINT X',
'   8  CLS',
'  10  PRINT X',
'20 X=X+1',
'30 IF X < 4 THEN GOTO 10',
'40 STOP',
'50 PRINT X',
'RUN'];

var test2 = [
'0    X   =    1',
'1    Y     =     2',
'2 Z    =    Y    -    X',
'5    PRINT          X',
'6    PRINT     Z',
'10          X   =   X    +1',
'20   IF  X  =  Y  THEN  GOTO 2',
'RUN'];

var test5 = [
'0 V = 10',
'1 W = 1',
'10 IF V=1 THEN GOTO 1000',
'41 X = W',
'42 Y = V',
'50 GOTO 100',
'51 W=Z',
'52 V=V-1',
'56 GOTO 10',
'97   CLS',
'98 CLS',
'99  CLS',
'100 Z=0',
'101 IF Y=0  THEN  GOTO 51',
'102 Y = Y - 1',
'103 Z = Z + X',
'104 GOTO 101',
'1000 PRINT W',
'1001 STOP',
'1002 CLS',
'RUN'];


function solve(args){

	var ids = [],
	result = [];
	lines = [],
	variables = {
		V:0,
		W:0,
		X:0,
		Y:0,
		Z:0
	};

	args.forEach(function(element, index){
		var matches = element.match(/^\s*(\d+)\s+(.+)$/);
		if (matches) {
			ids.push(Number(matches[1]));
			lines.push(matches[2].trim().replace(/\s+/g, ' '));
		};
	});

	var pattern1 = new RegExp(/^\s*([VWXYZ])\s*=\s*(\-?\d+)/);
	var pattern2 = new RegExp(/^\s*([VWXYZ])\s*=\s*([VWXYZ]|\-?\d+)\s*([\+\-])\s*([VWXYZ]|\d+)\s*$/);
	var pattern3 = new RegExp(/^\s*CLS\s*$/);
	var pattern4 = new RegExp(/^\s*PRINT\s*([VWXYZ])\s*$/);
	var pattern5 = new RegExp(/^\s*STOP\s*$/);
	var pattern6 = new RegExp(/IF\s*([VWXYZ]|\-?\d+)\s*([<>=])\s*([VWXYZ]|\-?\d+)\s+THEN\s+(.+)$/);
	var pattern7 = new RegExp(/^\s*GOTO\s+(\d+)\s*$/);

	var linesLen = lines.length;
	for (var i = 0; i < linesLen; i++) {
		var curline = lines[i];
		checkCase(curline);		
	};

	result.forEach(function(element, index){
		console.log(element);
	});

	debugger;

	function checkCase(text){
		if (pattern1.test(text)) {
			parseSetVariable(text);
		}else if(pattern2.test(text)){
			parseSetVariable(text);
		}else if (pattern3.test(text)) {
			result = [];
		}else if (pattern4.test(text)) {
			var matches = text.match(pattern4);
			result.push(variables[matches[1]]);
		}else if (pattern5.test(text)) {
			i = linesLen;
		}else if (pattern6.test(text)) {
			var matches = text.match(pattern6);
			if (checkCondition(matches[1], matches[2], matches[3])) {
				var todo = matches[4];
				checkCase(todo);
			};
		}else if (pattern7.test(text)) {
			var gotoLine = parseInt(text.match(pattern7)[1]);
			i = ids.indexOf(gotoLine) - 1;
		};
	}

	function parseSetVariable(text){
		if (pattern1.test(text)) {
			var matches = text.match(pattern1);   // X = 5
			var variable = matches[1];
			var value = matches[2];
			setVariable(variable, value);
		}else if(pattern2.test(text)){ // X = Z + 6
			var matches = text.match(pattern2);
			var variable = matches[1];
			var value = matches[2];
			var sign = matches[3];
			var secValue = matches[4];
			setVariable2(variable, value, sign, secValue);
		}
	}

	function setVariable(variable, value){
		if (Number(value) || value == '0') {
			value = Number(value);
		}else{
			value = variables[value];
		};

		variables[variable] = value;
	}

	function setVariable2(variable, value, sign, secValue){
		if (Number(value) || value == '0') {
			value = Number(value);
		}else{
			value = variables[value];
		};
		if (Number(secValue) || secValue == '0') {
			secValue = Number(secValue);
		}else{
			secValue = variables[secValue];
		};

		if (sign == '+') {
			variables[variable] = value + secValue;
		}else{
			variables[variable] = value - secValue;
		};
	}

	function checkCondition(var1, operator, var2){
		var1 = Number(var1) || variables[var1] || 0;
		var2 = Number(var2) || variables[var2] || 0;
		if (operator == '=') {
			return var1 == var2;
		}else if (operator == '<') {
			return var1 < var2;
		}else if (operator == '>') {
			return var1 > var2;
		};
	}
}

solve(test5);