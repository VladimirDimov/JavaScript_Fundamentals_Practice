var test1 = [
'(def func 10)',
'(def newFunc (+  func 2))',
'(def sumFunc (+ func func newFunc 0 0 0))',
'(* 5 2)',
'(* sumFunc 2)'];

function solver(args){	
	var functions = {};
	var len = args.length;

	for (var i = 0; i < args.length; i++) {
		var element = args[i];
		// check if there is (+ 1 2 3 4)
		if (/\(\s*([\+\-\*\/])\s+([^()]+)\s*\)/.test(element)) {
			args[i] = element.replace(/\(\s*([\+\-\*\/])\s+([^()]+)\s*\)/g, 
				function(match, sign, numbers){
					return calculate(sign, numbers.split(' ').filter(Boolean));
				})
		};		
	};

	debugger;

	function calculate(s, inputArr){
		if (s == '+') {return sum(inputArr)};
		if (s == '-') {return substrac(inputArr)};
		if (s == '*') {return mult(inputArr)};
		if (s == '/') {return devide(inputArr)};
		function sum(arr){
			var result = 0;
			arr.forEach(function(element, index){
				result += Number(element);
			});

			return result;
		}

		function substrac(arr){
			var result = arr[0];

			//TODO replace all function elements with thwe coresponding value
			arr.forEach(function(element, index){
				// TODO
			});

			for (var i = 1; i < arr.length; i++) {
				result -= Number(arr[i]);
			};

			return result;
		}

		function devide(arr){
			var result = arr[0];
			for (var i = 1; i < arr.length; i++) {
				result /= Number(arr[i]);
			};

			return result;
		}

		function mult(arr){
			var result = arr[0];
			for (var i = 1; i < arr.length; i++) {
				result *= Number(arr[i]);
			};

			return result;
		}	
	}	
}

solver(test1);