var test1 = '5tffwj(//*7837xzc2---34rlxXP%$”.';
	var test2 = '482vMWo(*&^%$213;k!@41341((()&^>><///]42344p;e312';
		var test3 = '20';

		function solver(args){
			var numberToArray =[''];
			var prevChar = args[0];
			var curChar;
			var index = 0;
			var len = args.length;

			for (var i = 0; i < args.length; i++) {
				curChar = args[i];

				if (parseInt(curChar)) {
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

			for (var i = 0; i < numberToArrayLen; i++) {
				numberToArray[i] = parseInt('0x' + numberToArray[i]);
			};

			function DecToHex(number){
				while(number != 0){
					var result = '';
					
				}
			}
		}

		console.log(solver(test1));
		console.log(solver(test2));
		console.log(solver(test3));