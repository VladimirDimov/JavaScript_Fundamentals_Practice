var test1 = ['IVAYLO'];
var test2 = ['TELERIK-ACADEMY'];

function solver(args){
	args = args[0];
	var kaspichan = {};
	kaspichan['CHU'] = 0;
	kaspichan['TEL'] = 1;
	kaspichan['OFT'] = 2;
	kaspichan['IVA'] = 3;
	kaspichan['EMY'] = 4;
	kaspichan['VNB'] = 5;
	kaspichan['POQ'] = 6;
	kaspichan['ERI'] = 7;
	kaspichan['CAD'] = 8;
	kaspichan['K-A'] = 9;
	kaspichan['IIA'] = 10;
	kaspichan['YLO'] = 11;
	kaspichan['PLA'] = 12;

	var power = args.length / 3 - 1;
	var sum = 0;
	var len = args.length;
	for (var i = 0; i < len; i+=3) {
		var digit = kaspichan[args.substring(i, i+3)];
		sum += digit*Math.pow(13, power);
		power -= 1;
	};

	// console.log(sum);
	return sum;
	debugger;
}

solver(test1);
solver(test2);