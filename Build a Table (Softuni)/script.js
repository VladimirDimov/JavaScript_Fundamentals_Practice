function Solver(args){
	var numStart = parseInt(args[0]);
	var numEnd = parseInt(args[1]);
	var fibNumbers = GenerateFib();
	var result = ['<table>'];
	result.push('<tr><th>Num</th><th>Square</th><th>Fib</th></tr>');
	var first, second, third;
	for (var i = numStart; i <= numEnd; i++) {
		first = i;
		second = i*i;
		third = fibNumbers.indexOf(i) > -1 ? 'yes' : 'no';
		result.push('<tr><td>' + first + '</td><td>' + second + '</td><td>' + third + '</td></tr>');		
	};
	result.push('</table>');
	var resultLen = result.length;
	for (var i = 0; i < resultLen; i++) {
		console.log(result[i]);
	};

	function GenerateFib(){
		var result = [];
		var a = 0;
		var b = 1;
		var c = 0;
		while(c <= 1000000){
			c = a+b;			
			result.push(c);			
			a = b;
			b = c;
		}
		return result;
	}
}

Solver([2,6]);