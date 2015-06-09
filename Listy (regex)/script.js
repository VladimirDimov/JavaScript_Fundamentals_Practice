// def\s+([^ ]+\s+([^ ]+)?\s*\[([^\]]+)\])

function solve(args){
	var argsLen = args.length;
	var funcs = {};
	for (var i = 0; i < argsLen; i++) {
		var line = args[i];
		if (/def\s+(\b.+?\b)\s+([^ ]+)\s*\[(.+?)\]/.test(line)) {
			var matches = line.match(/def\s+(\b.+?\b)\s+([^ ]+)\s*\[(.+?)\]/);
			funcs[matches[1]] = parseArithmetics(matches[2], matches[3]);
		} else if (/def\s+([^ \[]+)\s*\[(.+?)\]/.test(line)) {
			var matches = line.match(/def\s+([^ \[]+)\s*\[(.+?)\]/);
			funcs[matches[1]] = parseArray(matches[2]);
		};
	};

	// Last line
	var lastLine = args[argsLen - 1];
	if (/^\s*\[\s*([^ ]+)\s*\]\s*$/.test(lastLine)) {  //  [  newFunc  ]   
		var matches = lastLine.match(/^\s*\[\s*([^ ]+)\s*\]\s*$/);
		console.log(funcs[matches[1]]);
	}else if (/^\s*([^ ]+)\s*\[(.+?)\]/.test(lastLine)) {
		var matches = lastLine.match(/^\s*([^ ]+)\s*\[(.+?)\]/);
		console.log(parseArithmetics(matches[1], matches[2]));
	};

	debugger;

	function parseArray(text){
		var arr = text.split(',').map(function(item){return item.trim();});
		arr.forEach(function(element, index){
			if (Number(element) || element == '0') {
				arr[index] = Number(element);
			}else{
				arr[index] = funcs[element];
			};
		});
		arr = [].concat.apply([], arr);
		return arr;
	}

	function parseArithmetics(sign, arr){
		arr = arr.split(',').map(function(item){return item.trim();});
		var result;

		arr.forEach(function(element, index){
			if (Number(element) || element == '0') {
				arr[index] = Number(element);
			}else{
				arr[index] = funcs[element];
			};
		});

		arr = [].concat.apply([], arr);

		if (sign == 'sum') {
			result = 0;
			arr.forEach(function(element, index){
				result += element;
			});
			return result;
		}else if (sign == 'min') {
			result = arr[0];
			arr.forEach(function(element, index){
				if (element < result) {
					result = element;
				};
			});
			return result;
		}else if (sign == 'max') {
			result = arr[0];
			arr.forEach(function(element, index){
				if (element > result) {
					result = element;
				};
			});
			return result;
		}else if (sign == 'avg') {
			result = 0;
			arr.forEach(function(element, index){
				result += element;
			});
			return (result/arr.length)|0;
		};
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

solve(test1);
solve(test2);
solve(test3);
solve(test4);
solve(test5);
solve(test6);