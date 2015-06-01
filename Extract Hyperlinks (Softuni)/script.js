var test1 = [
'<!DOCTYPE html>',
'<html>',
'<head>',
'  <title>Hyperlinks</title>',
'  <link href=\"theme.css\" rel=\"stylesheet\" />',
'</head>',
'<body>',
'<ul><li><a   href=\"/\"  id=\"home\">Home</a></li><li><a',
' class=\"selected\" href=/courses>Courses</a>',
'</li><li><a href = ',
'\'/forum\' >Forum</a></li><li><a class=\"href\"',
'onclick=\"go()\" href= \"#\">Forum</a></li>',
'<li><a id=\"js\" href =',
'\"javascript:alert(\'hi yo\')\" class=\"new\">click</a></li>',
'<li><a id=\'nakov\' href =',
'http://www.nakov.com class=\'new\'>nak</a></li></ul>',
'<a href=\"#empty\"></a>',
'<a id=\"href\">href=\'fake\'<img src=\'http://abv.bg/i.gif\' ',
'alt=\'abv\'/></a><a href=\"#\">&lt;a href=\'hello\'&gt;</a>',
'<!-- This code is commented:',
'  <a href=\"#commented\">commentex hyperlink</a> -->',
'</body>',
];

function solution(args){
	var input = args.join('');
	var inner = extractTextBtween(input, '<a', '</a>');
	for (var i = 0; i < inner.length; i++) {
		var href = readLine(inner[i]);
		if (href != '') {
			console.log(readLine(inner[i]));
		};		
	};


	// functions
	function extractTextBtween(t, leftTag, rightTag){
		var left = 0,
		lTagLen = leftTag.length,
		result = [];
		while(true){
			leftIndex = t.indexOf(leftTag, left);
			if (leftIndex == -1) {break;};
			rightIndex = t.indexOf(rightTag, left+1);
			result.push(t.substring(leftIndex + lTagLen, rightIndex));
			left = rightIndex + 1;
		}

		return result;
	}

	function readLine(t){
		var left = Math.max(t.indexOf(' href'), t.indexOf('<href'));
		if (left == -1) {return ''};
		left += 5;
		var index = left;
		var isInside = false;
		var result = '';
		while(true){
			var curChar = t[index];
			if (isInside) {
				if (curChar != ' ' && curChar != '>' && curChar != '"') {
					result += curChar;
				}else{
					break;
				};
			}else{
				if (curChar == '\"') {
					return t.substring(index+1, t.indexOf(curChar, index + 1));
				};

				if (curChar == "'") {
					return t.substring(index+1, t.indexOf(curChar, index + 1));
				};

				if (curChar != ' ' && curChar != '=' && curChar != '"') {
					isInside = true;
					continue;
				};
			};

			index += 1;
		}

		return result;
	}
}
solution(test1);