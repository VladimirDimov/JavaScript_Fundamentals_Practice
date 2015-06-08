var test1 = [
'3',
'>> ',
'{a{',
'}',
'}'];

var test2 = [
'5',
'....',
'using System;    namespace Stars',
'{class Program{',
'static    string[] separators ',
'= new string[] { " " };}',
'}'];

function solver(args){
	var len = parseInt(args[0]);
	var tab = args[1];
	args = args.slice(2).map(function(item){
		return item.replace(/\s+/g, ' ').replace(/\{/g, '\n{\n').replace(/\}/g, '\n}\n');
	});
	args = args.map(function(element){
		return element.split('\n').filter(Boolean);
	});

	var merged = [];
	merged = merged.concat.apply(merged, args);
	args = merged;
	args = args.map(function(item){return item.trim();});

	counter = 0;
	for(var i in args){		
		var curline = args[i];	
		if (curline == '}') {
			counter -= 1;
		};
		if (counter >= 1) {
			args[i] = insertTab(args[i], counter);
		};	
		if (curline == '{') {
			counter += 1;
		};	
	}
	args;
	debugger;

	function insertTab(item, numOfTabs){
		var tabs = '';
		for (var i = 0; i < numOfTabs; i++) {
			tabs += tab;
		};
		return tabs + item;
	}	
}



solver(test2);