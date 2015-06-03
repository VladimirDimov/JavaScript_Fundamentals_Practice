var test1 = [
'22.03.2014',
'17.05.1933',
'10.10.1954'
];

function solver(args){
	var daysOfWeek = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday'
	];

	var min = strToDate('01.01.1900');
	var max = strToDate('01.01.2015');
	var mid = strToDate('25.05.1973');
	var hater = max;
	var ewok = min;

	for(var i in args){
		var curdate = strToDate(args[i]);
		if (curdate >= mid && curdate < max) {
			if (curdate > ewok) {
				ewok = curdate;
			};
		}
		else if(curdate < mid && curdate > min){
			if (curdate < hater) {
				hater = curdate;
			};
		};
	}

	if (ewok != min) {		
		console.log(stringFormat('The biggest fan of ewoks was born on {0}', ewok.toDateString()));
	};
	if (hater != max) {
		console.log(stringFormat('The biggest hater of ewoks was born on {0}', hater.toDateString()));
	};
	if (ewok == min && hater == max) {return 'No result'};

	debugger;

	function strToDate(str){
		var tmp = str.split(/[\.-\/]/);
		return new Date(parseInt(tmp[2]), parseInt(tmp[1]) - 1, parseInt(tmp[0]));
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

solver(test1);