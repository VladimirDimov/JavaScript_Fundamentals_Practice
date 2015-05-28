var test1 = [
'120.44',
'happy'
];

var test2 = [
'1230.83',
'drunk'
];

var test3 = [
'716.00',
'bored'
];

function Solver(arg){
	var bill = parseFloat(arg[0]);
	if (bill == 0) {return 0.00};
	var mood = arg[1];
	switch(mood){
		case 'happy':
		return (0.10*bill).toFixed(2);
		break;
		case 'married':
		return (0.0005*bill).toFixed(2);
		break;
		case 'drunk':
		var tip = 0.15*bill;
		var firstDigit = parseInt((tip + '')[0]);
		return Math.pow(tip, firstDigit).toFixed(2);
		default:
		return (0.05*bill).toFixed(2);
		break;
	}
}

console.log(Solver(test1));
console.log(Solver(test2));
console.log(Solver(test3));