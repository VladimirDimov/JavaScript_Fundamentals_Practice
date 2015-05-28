function solve(args){
	var allCommands = [];

	for (var i = 0; i < args.length; i++) {
		args[i] = args[i].trim(/^\s+/);
		args[i] = args[i].replace(/\s+/g, ' ');
	};

	for (var i = 0; i < args.length; i++) {
		if (args[i].indexOf('def ') == 0) {
			var splitted = args[i].split(/\s|\[/);
			var paramsAsString = args[i].substring(args[i].indexOf('[')+1, args[i].indexOf(']'));
			var command = {
				name: splitted[1],
				func: splitted[2],
				params: paramsAsString.split(',')
			}
			allCommands.push(command);
		} else{
			curCommand = args[i].split('[')[0];
			curCommand = curCommand.replace(/\s+/g, '')
			var paramsAsString = args[i].substring(args[i].indexOf('[')+1, args[i].indexOf(']'));
			var params = paramsAsString.split(',');

			if (i == args.length - 1) {return executeFunction(curCommand, params)};
			
		};
	};

	function executeFunction(func, params){

		switch(func.toLowerCase()){
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
			for (var i = 0; i < params.length; i++) {
				return	findAndExecute(params[i]);
			};			
			break;
		}
	}

	function findAndExecute(name){
		name = name.replace(/\s+/g, '')
		for(var i in allCommands){
			if (allCommands[i].name == name) {
				var foundFunc = allCommands[i];
				if (foundFunc.func) {
					return executeFunction(foundFunc.func, foundFunc.params);
				};
				
				return foundFunc.params;
			};
		}	
	}

	function Sum(arr){
		var sum = 0;
		for(var i in arr){
			var curValue = parseInt(arr[i]);
			if (curValue) {
				sum += curValue;
			}else{
				var funcResult = findAndExecute(arr[i]);
				if (typeof(funcResult) == 'number') {
					sum += funcResult;
				}else{
					sum += Sum(funcResult);
				};
			};
		}

		return sum;
	}

	function Min(arr){
		var min = Number.MAX_VALUE;
		for(var i in arr){
			var curValue = parseInt(arr[i]);
			if (curValue) {
				if (curValue < min) {
					min = curValue;
				};
			}else{
				var funcResult = findAndExecute(arr[i]);
				if (typeof(funcResult) == 'number') {
					if (funcResult < min) {
						min = funcResult;
					};
				}else{
					var minFunc = Min(funcResult);
					if (minFunc < min) {
						min = minFunc;
					};
				};
			};
		}

		return min;
	}

	function Max(arr){
		var max = Number.MIN_VALUE;
		for(var i in arr){
			var curValue = parseInt(arr[i]);
			if (curValue) {
				if (curValue > max) {
					max = curValue;
				};
			}else{
				var funcResult = findAndExecute(arr[i]);
				if (typeof(funcResult) == 'number') {
					if (funcResult > max) {
						max = funcResult;
					};
				}else{
					var maxFunc = Max(funcResult);
					if (maxFunc > max) {
						max = maxFunc;
					};
				};
			};
		}

		return max;
	}

	function Average(arr){
		var countLength = 0;
		for (var i = 0; i < arr.length; i++) {
			if (parseInt(arr[i])) {
				countLength+=1;
			}
			else{
				countLength += getLength(arr[i]);
			};
		};
		var sum = Sum(arr);
		var numberOfElements = arr.length;
		return sum/countLength | 0;
	}

	function getLength(name){
		name = name.replace(/\s+/g, '')
		for(var i in allCommands){
			if (allCommands[i].name == name) {
				var foundFunc = allCommands[i];
				if (foundFunc.func == '') {
					return foundFunc.params.length;
				} else{
					return 1;
				};				
			};
		}	
	}
}

var test1 = [
'      def func sum[  5,   3,   7,  2,  6, 3     ]',
'  def func2 [5, 3, 7, 2, 6, 3]',
'  def func3 min  [func2]',
' def   func4   max[5,  3,  7,  2, 6, 3]',
'def func5 avg[5, 3, 7, 2, 6, 3]',
'   def func6    sum   [func2,    func3, func4 ]',
'   sum[   func6,    func4    ]'
];

var test2 = ['sum[1,2,3]'];

var test3 = [
'      def func1 max  [  5,   3    ]',
'  def func2 [2, 6 ]',
'   sum[   func1,    func2    ]'
];

var test4 =[
'def func sum[1, 2, 3, -6]',
'def newList [func, 10, 1]',
'  def   newFunc   sum[  func   , 100    , newList    ]',
'[newFunc]'
];

var test5 = [
'def definition[-100, -100, -100]',
'def definitionResult sum[definition]',
'def defTest sum[definitionResult, 6457457, 2345234, -234546]',
'avg[defTest, 1, 2, 3]'
];

var test6 = [
'def newFunc     [      123,432    , 4]',
'def blaBLA sum[newFunc]',
'def BLAbla min[newFunc]',
'avg[BLAbla,blaBLA]'
];

console.log(solve(test5));