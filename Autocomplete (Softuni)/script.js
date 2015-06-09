var test1 = ['word screammm screech speech wolf',
'bas', 
'wo',
'scr',
's'];

var test2 = [
'gramadat gramaden grandioz',
'gr',
'gram',
'grad',
'grand'];

function solve(args){
	var words = args[0].split(/\s+/).filter(Boolean);
	var inputs = args.slice(1);
	inputs.forEach(function(element, index){
		var matches = words.filter(function(item){
			if (item.indexOf(element) == 0) {
				return true;
			};
			return false;
		});
		if (matches[0]) {
			matches = matches.sort(sorter);
			console.log(matches[0]);
		}else{
			console.log('-');
		};
		

	});

	debugger;

	function sorter(a, b){
		var aLen = a.length;
		var bLen = b.length;
		if (aLen != bLen) {
			return aLen - bLen;
		}else{
			if (a < b) {
				return -1
			}else if (a > b) {
				return 1
			}else{
				return 0;
			};
		};
	}
}

solve(test1);