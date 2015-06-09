var test1 = [
'5',
'20',
'We happy few        we band',
'of brothers for he who sheds',
'his blood',
'with',
'me shall be my brother'];

var test2 = [
'10',
'18',
'Beer beer beer Im going for ',
'   a',
'beer',
'Beer beer beer Im gonna',
'drink some beer',
'I love drinkiiiiiiiiing ',
'beer',
'lovely ',
'lovely',
'beer'];

function Solve(args){
	var result = [];
	var width = parseInt(args[1]);
	args = args.slice(2);
	args = args.join(' ').split(/\s+/);

	var curline = [];
	var len = 0;
	for(var i in args){
		var word = args[i];
		len += word.length;
		if (len + curline.length - 1 > width) {
			var addSpaces = width - len+word.length;
			var curlineLen = curline.length;
			for (var i = 0; i < addSpaces; i++) {
				curline[i%(curlineLen-1)] += ' ';
			};
			result.push(curline);
			curline = [word];
			len = word.length;
		}else{
			curline.push(word);
		};
	}
	if (curline.length != 0) {
		result.push(curline);
	};

	for(var row in result){
		result[row] = result[row].join('');
	}

	return result;
	debugger;
}

Solve(test2);