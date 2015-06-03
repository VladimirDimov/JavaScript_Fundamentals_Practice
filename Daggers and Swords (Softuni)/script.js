var test1 = [
'17.8',
'19.4',
'13',
'55.8',
'126.96541651',
'3'
];

function solution(args){
	var header = '<table border="1">\n<thead>\n<tr><th colspan="3">Blades</th></tr>\n<tr><th>Length [cm]</th><th>Type</th><th>Application</th></tr>\n</thead>\n<tbody>'

	console.log(header);
	for(var i in args){
		var len = Number(args[i])|0;
		if (len <= 10) {continue;};
		var type = '';
		if (len > 40) {
			type = 'sword'
		}else{
			type = 'dagger';
		};
		var appNumber = len % 5;
		var app;
		switch(appNumber){
			case 1:
				app = 'blade'
				break;
			case 2:
			app = 'quite a blade';
			break;
			case 3:
			app = 'pants-scraper';
			break;
			case 4:
			app = 'frog-butcher';
			break;
			case 0:
			app = '*rap-poker';
			default:
				'unknown'
				break;
		}
		console.log('<tr><td>' + len + '</td><td>' + type + '</td><td>' + app + '</td></tr>');
	}
	console.log('</tbody>\n</table>');
	// debugger;
}

solution(test1);