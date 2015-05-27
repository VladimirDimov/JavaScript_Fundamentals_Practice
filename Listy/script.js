var test1 = [
'def func sum[5, 3, 7, 2, 6, 3]',
'def func2 [5, 3, 7, 2, 6, 3]',
'def func3 min[func2]',
'def func4 max[5, 3, 7, 2, 6, 3]',
'def func5 avg[5, 3, 7, 2, 6, 3]',
'def func6 sum[func2, func3, func4 ]',
'sum[func6, func4]'
];

var test2 = ['sum[1,2,3]'];

function solve(args){
	var dictCommands = {};

	for (var i = 0; i < args.length; i++) {
		var curCommand = args[i].split(' ');
		var parameters = args[i].match(/\b[a-z]+\[(.*?)\]/);
		if (curCommand[0] == 'def') {
			dictCommands[curCommand[1]] = parameters;
		} else{

		};
	};

	function executeFunction(func){
		var funcToArray = func.split(/\[|\]/);
		var params = funcToArray[1].split(',');
		for (var i = 0; i < params.length; i++) {
			params[i] = parseInt(params[i]);
		};

		switch(funcToArray[0]){
			case 'sum':
			return Sum(params);
			break;
			case 'min':
			return Min(params);
			break;
			case 'max':
			return Max(params);
			break;
			case 'avg':
			return Average(params);
			break;
			default:			
			break;
		}
	}

	function Sum(arr){
		var sum = 0;
		for(var i in arr){
			sum += arr[i];
		}
		return sum;
	}

	function Min(arr){
		var min = Number.MAX_VALUE;
		for(var i in arr){
			if (arr[i] < min) {min = arr[i]};
		}

		return min;
	}

	function Max(arr){
		var max = Number.MAX_VALUE;
		for(var i in arr){
			if (arr[i] > max) {max = arr[i]};
		}

		return max;
	}

	function Average(arr){
		return Sum(arr)/arr.length;
	}
}

console.log(solve(test1));