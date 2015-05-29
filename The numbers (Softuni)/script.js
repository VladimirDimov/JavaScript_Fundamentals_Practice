var test1 = ['5tffwj(//*7837xzc2---34rlxXP%$”.'];
	var test2 = ['482vMWo(*&^%$213;k!@41341((()&^>><///]42344p;e312'];
		var test3 = ['20'];

		function solver(arr){
			var args = arr[0];
			String.prototype.paddLeft = function (count, char) {
				char = char || ' ';
				var s = String(this);
				var len = this.length;
				for (var i = 0; i < count - len; i++) {
					s = char + s;
				}
				return s;
			}

			var numberToArray = [''];
			var prevChar = args[0];
			var curChar;
			var index = 0;
			var len = args.length;

			for (var i = 0; i < args.length; i++) {
				curChar = args[i];

				if (!isNaN(curChar)) {
					if (numberToArray[index] != undefined) {
						numberToArray[index] += curChar;
					}else{
						numberToArray[index] = curChar;
					};

				};

				if (parseInt(prevChar) && !parseInt(curChar) && i != len - 1) {
					index += 1;
				};

				prevChar = curChar;
			};

			var numberToArrayLen = numberToArray.length;

			for(var i in numberToArray){
				numberToArray[i] = '0x' + DecToAnyBase(parseInt(numberToArray[i]), 16).paddLeft(4, '0');
			};

			console.log(numberToArray.join('-'));

			function DecToAnyBase(number, base){
				var result = '';
				var remeinder;
				while(number != 0){
					remeinder = number % base;
					if (remeinder <= 9) {
						result = remeinder + result;
					}else {
						result = String.fromCharCode(97 + remeinder - 10).toUpperCase() + result;
					};

					number = (number / base) | 0;					
				}

				return result;
			}
		};

		solver(test1);
		solver(test2);
		solver(test3);
