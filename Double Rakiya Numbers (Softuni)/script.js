var test1 = [
'11210',
'11215'];

function solution(args){
	var start = parseInt(args[0]);
	var end = parseInt(args[1]);	
	var pattern = '<li><span class=\'{0}\'>{1}</span>{2}</li>';
	var link = '<a href="view.php?id={0}>View</a>';

	console.log('<ul>');
	for (var i = start; i <= end; i++) {
		if (isDouble(i)) {
			var modLink = stringFormat(link, i);
			console.log(stringFormat(pattern, 'rakiya', i,  modLink));
		}else{
			console.log(stringFormat(pattern, 'num', i, ''));			
		};
	};
	console.log('</ul>');
	debugger;

	function isDouble(num){		
		num = num + '';
		var len = num.length;

		if (len < 4) {
			return false
		};

		for (var i = 0; i < len - 1; i++) {
			var curDouble = num.substring(i, i+2);
			if (num.indexOf(curDouble, i+2) != -1) {return true};
		};

		return false;
	}

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
}

solution(test1);