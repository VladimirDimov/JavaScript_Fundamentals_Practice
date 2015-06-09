var arr1 = ['8','1','6','-9','4','4','-2','10','-1'];
var arr2 = [1,1,3,-5,8,7,-6];
var test3 = [
'9',
'-9',
'-8',
'-8',
'-7',
'-6',
'-5',
'-1',
'-7',
'-6'];

function Solve(params){
	params = params.slice(1).map(function(item){return Number(item);});
	var maxSum = Number.MAX_VALUE*(-1);
	var len = params.length;
	for (var i = 0; i < len; i++) {
		var curSum = 0;
		for (var j = i; j < len; j++) {
			curSum += params[j];
			if (curSum > maxSum) {maxSum = curSum};
		};
	};

	return maxSum;
	debugger;
}

// console.log(Solve(arr1));
// console.log(Solve(arr2));
console.log(Solve(test3));