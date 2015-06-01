function solution(args){
	console.log('<table>');
	console.log('<tr><th>Price</th><th>Trend</th></tr>');

	var pattern = '<tr><td>{0}</td><td><img src="{1}.png"/></td></td>';
	var prevNumber = parseFloat(args[0]);

	for(var i in args){
		curNumber = parseFloat(args[i]);
		var pic = '';
		if (numRound(curNumber) < numRound(prevNumber)) {
			pic = 'down';
		}
		else if(numRound(curNumber) > numRound(prevNumber)){
			pic = 'up';
		}
		else if(numRound(curNumber) == numRound(prevNumber)){
			pic = 'fixed';
		}
		console.log(stringFormat(pattern, curNumber.toFixed(2), pic));
		prevNumber = curNumber;
	}
	console.log('</table>');

	function stringFormat(text, arg){
		var args = [];
		for (var i = 1; i < arguments.length; i++) {
			args[i-1] = arguments[i];
		};

		for (var i = 0; i < args.length; i++) {

			var reg = new RegExp('\\{' + i + '\\}', 'g');

			if (text.indexOf('\{' + i + '\}') == -1) {
				throw new UserException('Invalid placeholders');
			} else{
				text = text.replace(reg , args[i]);
			};
		};	

		return text;
	}

	function numRound(num){
		return ((num*100)|0)/100;
	}
}

var test1 = [
'50',
'60'];

var test2 = [
'36.333',
'36.5',
'37.019',
'35.4',
'35',
'35.001',
'36.225'];

solution(test1);
solution(test2);