var arr1 = [1,6,-9,4,4,-2,10,-1];
var arr2 = [1,3,-5,8,7,-6];

function Solve(params){
	var maxSum = Number.MIN_VALUE;

	for (var i = 0; i < params.length; i++) {
		var curSum = 0;
		for (var j = i; j < params.length; j++) {
			curSum += params[j];
			if (curSum > maxSum) {maxSum = curSum};
		};
	};

	return maxSum;
}

console.log(Solve(arr1));
console.log(Solve(arr2));