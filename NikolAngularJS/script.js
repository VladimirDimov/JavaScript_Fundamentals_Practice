var test1 = [
'6',
'title-Telerik Academy',
'showSubtitle-true',
'subTitle-Free training',
'showMarks-false',
'marks-3;4;5;6',
'students-Ivan;Gosho;Pesho',
'42',
'<nk-template name="menu">',
'    <ul id="menu">',
'        <li>Home</li>',
'        <li>About us</li>',
'    </ul>',
'</nk-template>',
'<nk-template name="footer">',
'    <footer>',
'        Copyright Telerik Academy 2014',
'    </footer>',
'</nk-template>',
'<!DOCTYPE html>',
'<html>',
'<head>',
'    <title>Telerik Academy</title>',
'</head>',
'<body>',
'    <nk-template render="menu" />',
'',
'    <h1><nk-model>title</nk-model></h1>',
'    <nk-if condition="showSubtitle">',
'        <h2><nk-model>subTitle</nk-model></h2>',
'        <div>{{<nk-model>subTitle</nk-model>}} ;)</div>',
'    </nk-if>',
'',
'    <ul>',
'        <nk-repeat for="student in students">',
'            <li>',
'                <nk-model>student</nk-model>',
'            </li>',
'            <li>Multiline <nk-model>title</nk-model></li>',
'        </nk-repeat>',
'    </ul>',
'    <nk-if condition="showMarks">',
'        <div>',
'            <nk-model>marks</nk-model> ',
'        </div>',
'    </nk-if>',
'',
'    <nk-template render="footer" />',
'</body>',
'</html>'
];

function solution(args){
	function abc(input){
		if (input.indexOf(';') == -1) {
			return input;
		}else{
			return input.split(';').map(function(item){
				return Number(item) || item;
			});				
		};
	}
	var nkmodels = {}; // Nk-models
	var numOfnkModels = Number(args[0]);
	for (var row = 1; row <= numOfnkModels; row++) {
		var curline = args[row].split('-');
		nkmodels[curline[0].trim()] = abc(curline[1].trim());		
	}

	args = args.slice(numOfnkModels+2);
	args = args.join('\n'); // args are joined to on string

	// Getting all templates;
	var nkTemplates = {};
	args = args.replace(/[ ]*<\s*nk-template\s+name\s*=\s*"\s*([^ ]+?)\s*"\s*>\n((.+\n)+?)<\/nk-template>[ ]*\n/g, function(matches, name, content){
		nkTemplates[name] = content;
		return '';
	});

	//conditionals
	args = args.replace(/[ ]*<\s*nk-if\s+condition\s*=\s*"(.+?)"\s*>\s*\n((.+\n)+?)\s*<\/nk-if>[ ]*\n/g, function(matches, condition, content){
		if (nkmodels[condition] == 'true') {
			return content;
		}else{
			return '';
		};
	});

	//replacing all nkModels
	args = args.replace(/([^{]{2})<nk-model>(.+?)<\/nk-model>([^}]{2})/gm, function(matches, prep, name, post){
		if (nkmodels[name]) {
			return prep + nkmodels[name] + post;
		}else{
			return matches;
		};
		
	});

	//replacing all nktemplates
	args = args.replace(/[ ]*<nk-template\s+render\s*=\s*"(.+?)"\s*\/>[ ]*\n/gm, 
		function(matches, name){
			return nkTemplates[name];
		});

	//replace all escaping brackets
	args = args.replace('{{', '').replace('}}', '');

	//Loops
	args = args.replace(/<\s*nk-repeat\s+for\s*=\s*"\s*(\w+)\s+in\s+(\w+)\s*">\s*\n((.+\n)+?)\s*<\s*\/nk-repeat\s*>[ ]*\n/g, 
		function(matches, item, inItems, content){
			var result = [];
			var templ = new RegExp('<\s*nk\-model\s*>' + item + '<\/nk-model>', 'g');
			var items = nkmodels[inItems];
			for(var i in items){
				result.push(content.replace(templ, items[i]));
			}
			return result.join('');
		});

	console.log(args);
};

solution(test1);
