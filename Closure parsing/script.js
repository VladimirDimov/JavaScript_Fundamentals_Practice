var test1 = [
'   (  / 21 7)   ',	
'   (  def   func    (   10    )    ',
	'  (   def    newFunc  (    +    func    2     ))',
	'   (   def    sumFunc   (  +     func    func     newFunc  0    0    0 )  )    ',
	'    (   * sumFunc     2    )   '];

	var test2 = [
	'(  / 21 7)',
	'(def func (+ 5 2))',
	'(def func2 (/  func 5 2 1 0))',
	'(def func3 (/ func 2))',
	'(+ func3 func)'];


	function Solve(args){
		var lineBreak;
		var funcs = {};
		var exit = false;
		args.forEach(function(element, index){
			args[index] = element.replace(/\//g, '$');
		});

		args.forEach(function(element, index){
			var line = args[index];
		if (/\(\s*([\+\-*\$])\s+(.+?)\)/g.test(args[index])) { // checks for (+ 1 2 3 4 )
			args[index] = args[index].replace(/\(\s*([\+\-*\$])\s+(.+?)\)/g, 
				function(matches, sign, numbers){
					if (true) {
						return  calculate(sign, numbers.split(' '));					
					};
				});
		};
		if(/\(\s*def\s+(\b[^ ]+?\b)\s+\(?\s*([\d]+)\s*\)?/.test(args[index])){ // checks fo (def func 10);
			var matches = args[index].match(/\(\s*def\s+(\b[^ ]+?\b)\s+\(?\s*([\d]+)\s*\)?/);
				funcs[matches[1]] = Number(matches[2]);
			}	

			if (exit == true && !!!lineBreak) {
				lineBreak = index + 1;
			};
		});

		if (exit != true) {
			console.log(args[args.length - 1]);
		}else{
			console.log('Division by zero! At Line:' + lineBreak);
		};			

		debugger;

		function calculate(sign, arr){
			var len = arr.length;

			if (sign == '+') {
				var sum = 0;
				arr.forEach(function(element, index){
					if (Number(element)) {
						sum += Number(element);
					}else if(funcs[element]){
						sum += funcs[element];
					};				
				});

				return sum;
			}
			else if (sign == '-') {
				var sum;
				if (Number(arr[0])) {
					sum = Number(arr[0]);
				}else{
					sum = funcs(arr[0]);
				};

				for (var i = 1; i < len; i++) {
					if (Number(arr[i])) {
						sum -= Number(arr[i]);
					}else if(funcs[arr[i]]){
						sum -= funcs[arr[i]];
					};				
				};

				return sum;
			}
			else if (sign == '*') {
				var sum = 1;
				arr.forEach(function(element, index){
					if (Number(element)) {
						sum *= Number(element);
					}else if(funcs[element]){
						sum *= funcs[element];
					};				
				});

				return sum;
			}
			else if (sign == '$') {
				var sum;
				if (Number(arr[0])) {
					sum = Number(arr[0]);
				}else if(funcs[arr[0]]){
					sum = funcs[arr[0]];
				};

				var divider;
				for (var i = 1; i < len; i++) {
					if (arr[i].toString().trim() == '0') {
						exit = true;
						return;
					};
					if (Number(arr[i])) {
						divider = Number(arr[i]);
					}else if(funcs[arr[i]]){
						divider = funcs[arr[i]];
					};

					sum /= divider;			
				};

				return sum;
			};
		}
	}

// Solve(test1);
Solve(test2);
