var test1 = [
'3',
'hi',
'academy',
'exam'];

var test2 = [
'2',
'you',
'win'];

var test3 = [
'4',
'nakov',
'wrote',
'this',
'problem'];

function solver(args){
	var words = args.slice(1);
	for(var i in words){
		var newPosition = words[i].length % (words.length + 1);
		var item = words[i];
		words.splice(i, 1);
		words.splice(newPosition, 0, item);
	}
	var result = '';
	var IsEmpty = false;
	var position = 0;
	while(!IsEmpty){
		IsEmpty = true;
		for(var i in words){
			if (words[i][position]) {
				result += words[i][position];
				IsEmpty = false;
			};
		}
		position += 1;
	}

	console.log(result);
}

solver(test1);
solver(test2);
solver(test3);