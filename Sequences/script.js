var test1 = [7,1,2,-3,4,4,0,1];
var test2 = [6,1,3,-5,8,7,-6];
var test3 = [9,1,8,8,7,6,5,7,7,6];
var test4 = [3, 3 , 2, 1];

function solve(arg){
	var argLength = parseInt(arg[0]);
	var arr = arg.slice(1);
	
	for (var i = 0; i < arr.length; i++) {
		arr[i] = parseInt(arr[i]);
	};

	var counter = 1;
	var previous = arr[0];

	for (var i = 1; i < arr.length; i++) {
		var current = arr[i];

		if (current < previous) {
			counter++
		};

		previous = current;
	};

	return counter;
}

console.log(solve(test4));