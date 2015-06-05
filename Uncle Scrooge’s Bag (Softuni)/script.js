var test1 = ['   coin      1   ','coin 2', 'coin 5', 'coin 10', 'coin 20', 'coin 50', 'coin 100', 'coin 200', 'coin 500','cigars 1'];

function solver(args){
	args.forEach(function(element, index){
		var curline = element.split(/\s+/).filter(Boolean);
		if (curline[0] == 'coin') {
			var coins = parseInt(curline[1]);
			var isGold = false,
			isSilver = false,
			isBronze = false;

			isGold = !!!(coins%100);
			if (!isGold) {
				isSilver = !!!(coins%10);
				if (!!!isSilver) {
					isBronze = true;
				};
			};

			// TODO: Check different cases
		};


	});

	debugger;
}

solver(test1);