var test1 = [
'<table>',
'<tr><th>Product</th><th>Price</th><th>Votes</th></tr>',
'<tr><td>Vodka Finlandia 1 l</td><td>19.35</td><td>+12</td></tr>',
'<tr><td>Ariana Radler 0.5 l</td><td>1.19</td><td>+33</td></tr>',
'<tr><td>Laptop HP 250 G2</td><td>629</td><td>+1</td></tr>',
'<tr><td>Kamenitza Grapefruit 1 l</td><td>1.85</td><td>+7</td></tr>',
'<tr><td>Ariana Grapefruit 1.5 l</td><td>1.85</td><td>+7</td></tr>',
'<tr><td>Coffee Davidoff 250 gr.</td><td>11.99</td><td>+11</td></tr>',
'</table>'];

function solution(args){
	var arr = args.slice(2, args.length -1);
	var arrLen = arr.length;
	for (var row = 0; row < arrLen; row++) {
		arr[row] = arr[row].split(/\<tr\>\<td\>|<\/td><td>|<\/td><\/tr>/).filter(Boolean);
	};
	arr.sort(compare);

	console.log('<table>');
	console.log('<tr><th>Product</th><th>Price</th><th>Votes</th></tr>');
	for (var i = 0; i < arrLen; i++) {
		console.log('<tr><td>' + arr[i][0] + '</td><td>' + arr[i][1] + '</td><td>' + arr[i][2] + '</td></tr>');
	};
	console.log('</table>');

	function compare(a, b){
		a = parseFloat(a[1]);
		b = parseFloat(b[1]);

		return a - b;
	}

	debugger;
}

solution(test1);