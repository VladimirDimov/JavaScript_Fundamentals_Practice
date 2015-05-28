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

console.log(solution(test1));

function solution(args){
	var argsLen = args.length;
	var numberOfConstants = parseInt(args[0]);
	var constants = [];
	var templates = [];
	for (var i = 0; i < numberOfConstants; i++) {
		var curline = args[i+1].split('-');
		constants.push({name: curline[0].trim(' '), value: curline[1].trim(' ')});
	};

	CollectTemplates();

	function CollectTemplates(){
		for (var row = numberOfConstants + 1; row < argsLen; row++) {
			var curRow = args[row];
			if (args[curRow] = ) {};
			if (curRow.indexOf('<nk-template name=') == 0) {
				var newTemplate = {};
				var startIndex = curRow.indexOf('"')+1,
					endIndex = curRow.indexOf('"', startIndex);
				newTemplate['name'] = curRow.substring(startIndex, endIndex);
				var endRow = args.indexOf('</nk-template>', row);
				newTemplate['value'] = args.slice(row + 1, endRow);
				templates.push(newTemplate);
				row = endRow;
			};
		};
	}
};