var test1 = [
'6',
'title:Telerik Academy',
'showSubtitle:true',
'subTitle:Free training',
'showMarks:false',
'marks:3,4,5,6',
'students:Pesho,Gosho,Ivan',
'42',
'@section menu {',
'<ul id="menu">',
'    <li>Home</li>',
'    <li>About us</li>',
'</ul>',
'}',
'@section footer {',
'<footer>',
'    Copyright Telerik Academy 2014',
'</footer>',
'}',
'<!DOCTYPE html>',
'<html>',
'<head>',
'    <title>Telerik Academy</title>',
'</head>',
'<body>',
'    @renderSection("menu")',
'',
'    <h1>@title</h1>',
'    @if (showSubtitle) {',
'        <h2>@subTitle</h2>',
'        <div>@@JustNormalTextWithDoubleKliomba ;)</div>',
'    }',
'',
'    <ul>',
'        @foreach (var student in students) {',
'            <li>',
'                @student ',
'            </li>',
'            <li>Multiline @title</li>',
'        }',
'    </ul>',
'    @if (showMarks) {',
'        <div>',
'            @marks ',
'        </div>',
'    }',
'',
'    @renderSection("footer")',
'</body>',
'</html>'];

function solve (args) {
	// collect models
	var numberOfModels = parseInt(args[0]);
	var models = {};
	for (var i = 1; i < numberOfModels + 1; i++) {
		var matches = args[i].match(/^(.+):(.+)/);
		var name = matches[1];
		var content;
		if (matches[2].indexOf(',') != -1) {
			content = matches[2].split(',').map(function(item){return item.trim();});
		}else{
			content = matches[2].trim();
		};
		models[name] = content;
	};
	args = args.slice(2+numberOfModels);
	args = args.join('\n');

	// collect sections	
	var sections = {};
	args = args.replace(/@section\s+(.+)\s*{\n((.+\n)+?)}[ ]*\n/g, 
		function(match, secName, secContent){
			sections[secName.trim()] = secContent;
			return '';
		});

	// Parse conditionals
	args = args.replace(/[ ]*@if \((.+?)\)\s*{([^]+?)}[ ]*\n/g,
		function(match, ifName, ifContent){
			var conditionVal = models[ifName.trim()];
			if (conditionVal == 'true') {
				return ifContent;
			}else{
				return '';
			};
		});

	// Parse renderSection
	args = args.replace(/([ ]*)@renderSection\s*\("(.+?)"\)s*\n/g, 
		function(match, wspace, secName, secContent){
			var res = sections[secName.trim()].replace(/^/g, wspace);
			res = res.replace(/\n/, '\n' + wspace);
			return res;
		});

	// Parse loops
	args = args.replace(/[ ]*@foreach\s*\([ ]*var[ ]*(.+?)[ ]+in[ ]+(.+?)\)[ ]*{\n([^]+?)}[ ]*\n/g, 
		function(match, itemName, collectionName, content){
			var collection = models[collectionName];
			var result = '';
			collection.forEach(function(element, index){
				var pattern = new RegExp('@' + itemName, 'g');
				result += content.replace(pattern, element);
			});
			return result;
		});

	// Replace models
	args = args.replace(/@([^$].+?)\b/g, 
		function(match, modelName){
			if (models[modelName]) {
				return models[modelName];
			}else{
				return match;
			};
		});
	
	console.log(args);
	debugger;
}

solve(test1);