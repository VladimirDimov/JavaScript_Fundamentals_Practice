var test1 = 'U';
var test2 = 'bM';
var test3 = 'BaG';
var test4 = 'CfI';

function solver(args){	
	args = args.match(/[a-z]?[A-Z]/g).slice(0);
	var len = args.length;
	var sum = 0;
	var power = 0;
	for (var i = len - 1; i >= 0; i--) {
		sum += charVal(args[i])*Math.pow(168, power);
		power += 1;
	};

	console.log(sum);

	function charVal(symb){		
		if (symb.length == 1) {
			return symb.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0);
		}else{
			var s1 = (symb[0].charCodeAt(0) - 'a'.charCodeAt(0)+1)*26;
			var s2 = symb[1].toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0);
			return s1 + s2;
		};		
	}
}

solver(test1);
solver(test2);
solver(test3);
solver(test4);
debugger;