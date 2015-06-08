var test1 = [['1', '-2', '-3', 4, -5, 6, -7, -8]];
var test2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
var test3 = [1, 1, 1];

function solver(args){
	args = args[0].map(function(num){return Number(num);});
	var len = args.length;
	var maxSteps = 1;
	for (var i = 0; i < len; i++) { // position
		for (var j = 1; j <= len; j++) {  // step
			position = i;
			counter = 1;
			while(true){
				var nextPos = (position + j) % len;
				if (args[nextPos] > args[position]) {
					counter += 1;
					position = nextPos;
				}else{
					if (maxSteps < counter) {
						maxSteps = counter;						
					};
					break;
				};
			}
		};
	};

	console.log(maxSteps);
}

solver(test1);
solver(test2);
solver(test3);	