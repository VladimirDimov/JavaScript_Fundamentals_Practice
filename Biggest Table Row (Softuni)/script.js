var test1 = [
'<table>',
'<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>',
'<tr><td>Sofia</td><td>26.2</td><td>8.20</td><td>-</td></tr>',
'<tr><td>Varna</td><td>11.2</td><td>18.00</td><td>36.10</td></tr>',
'<tr><td>Plovdiv</td><td>17.2</td><td>12.3</td><td>6.4</td></tr>',
'<tr><td>Bourgas</td><td>-</td><td>24.3</td><td>-</td></tr>',
'</table>'
];

var test2 = [
'<table>',
'<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>',
'<tr><td>Sofia</td><td>12850</td><td>-560</td><td>20833</td></tr>',
'<tr><td>Rousse</td><td>-</td><td>50000.0</td><td>-</td></tr>',
'<tr><td>Bourgas</td><td>25000</td><td>25000</td><td>-</td></tr>',
'</table>'
];


function solver(args){
	var isData = false;
	args = args.slice(2, args.length - 1);
	var max = 0;
	var expression = '';

	for(var row in args){
		curline = extractTextBtween(args[row], '<td>', '</td>');
		var aStr = curline[1];
		var bStr = curline[2];
		var cStr = curline[3];
		var a = parseFloat(curline[1]) || 0;
		var b = parseFloat(curline[2]) || 0;
		var c = parseFloat(curline[3]) || 0;
		if (parseFloat(aStr) || parseFloat(bStr) || parseFloat(cStr)) {isData = true};
		var curSum = a + b + c;
		if (curSum > max) {
			max = curSum;
			expression = max  + ' = ' + [aStr, bStr, cStr].filter(filterEmpty).join(' + ');
		};
	}
	if (!isData) {console.log('no data')};
	console.log(expression);
	

	function extractTextBtween(t, leftTag, rightTag){
		var left = 0,
		lTagLen = leftTag.length,
		result = [];
		while(true){
			leftIndex = t.indexOf(leftTag, left);
			if (leftIndex == -1) {break;};
			rightIndex = t.indexOf(rightTag, left+1);
			result.push(t.substring(leftIndex + lTagLen, rightIndex));
			left = rightIndex + 1;
		}

		return result;
	}

	function filterEmpty(value) {
		return value.trim() != '-';
	}
}

solver(test1);
solver(test2);