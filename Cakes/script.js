function solver(arg){
	var money = parseInt(arg[0]);
	c1 = parseInt(arg[1]),
	c2 = parseInt(arg[2]),
	c3 = parseInt(arg[3]);

	var maxC1 = (money/c1) | 0;
	var maxC2 = (money/c2) | 0;
	var maxC3 = (money/c3) | 0;

	var maxPrice = 0;

	for (var i = 0; i <= maxC1; i++) {
		for (var j = 0; j <= maxC2; j++) {
			for (var k = 0; k <= maxC3; k++) {
				var curPrice = i*c1 + j*c2 + k*c3;
				if (curPrice <= money && curPrice > maxPrice) {
					maxPrice = curPrice;
				};
			};
		};
	};

	return maxPrice;
}

var test1 = ['110','13','15','17'];
var test2 = ['20','11','200','300'];
var test3 = ['110','19','29','39'];

// console.log(solver(test1));
console.log(solver(test2));
// console.log(solver(test3));