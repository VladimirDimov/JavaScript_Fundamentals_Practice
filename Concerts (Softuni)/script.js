var test1 = [
'ZZ Top | London | 2-Aug-2014 | Wembley Stadium',
'Iron Maiden | London | 28-Jul-2014 | Wembley Stadium',
'Metallica | Sofia | 11-Aug-2014 | Lokomotiv Stadium',
'Helloween | Sofia | 1-Nov-2014 | Vassil Levski Stadium',
'Iron Maiden | Sofia | 20-June-2015 | Vassil Levski Stadium',
'Helloween | Sofia | 30-July-2015 | Vassil Levski Stadium',
'Iron Maiden | Sofia | 26-Sep-2014 | Lokomotiv Stadium',
'Helloween | London | 28-Jul-2014 | Wembley Stadium',
'Twisted Sister | London | 30-Sep-2014 | Wembley Stadium',
'Metallica | London | 03-Oct-2014 | Olympic Stadium',
'Iron Maiden | Sofia | 11-Apr-2016 | Lokomotiv Stadium',
'Iron Maiden | Buenos Aires | 03-Mar-2014 | River Plate Stadium'];

function solution(args){
	var concerts = [];
	var curConcert = {};
	for (var i = 0; i < args.length; i++) {
		var curLine = args[i].split('|');
		for(var prop in curLine){
			curLine[prop] =curLine[prop].trim(' ');
		}

		var curConcert = {
			band: curLine[0],
			town: curLine[1],
			date: curLine[2],
			place: curLine[3]
		}
		
		concerts.push(curConcert);		
	};
	var printResult = '{';
	var newtree = CreateTree(concerts, ['town', 'place']);
	var towns = Object.keys(newtree).sort();
	for (var i in towns) {
		printResult += '"' + towns[i] + '":{';
		var stads = Object.keys(newtree[towns[i]]).sort();
		for(var j in stads){
			printResult += '"' + stads[j] + '":[';
			var concInStad = newtree[towns[i]][stads[j]];
			var bands = [];
			for(var k in concInStad){
				var checkBand = concInStad[k]['band'];
				if (bands.indexOf(checkBand) == -1) {
					bands.push(checkBand);
				};
			}
			bands.sort();
			for(var l in bands){
				bands[l] = '"' + bands[l] + '"';				
			}
			printResult += bands.join(',');
			printResult += '],';
		}
		printResult = printResult.substr(0, printResult.length - 1);
		printResult += '},';
	};
	printResult = printResult.substr(0, printResult.length - 1);
	printResult += '}';

	console.log(printResult);


// arr -> array of objects
// props -> array ofthe properties (outer to inner)
// depth -> leave empty (needed for the recursive solution)
// example: var tree = CreateTree(arr, props);
	function CreateTree(arr, props, depth){		
		depth = depth || 0;
		var tree = {};
		if (depth == props.length) {			
			return arr;
		};
		var prop = props[depth];
		for(var index in arr){
			var propName = arr[index][prop];
			if (!tree[propName]) {
				tree[propName] = CreateTree(filterByProp(arr, prop, propName), props, (depth + 1));
			};			
		}

		return tree;
	}

	function filterByProp(arr, propName, propVal){
		var result = [];
		for(var index in arr){
			if (arr[index][propName] == propVal) {result.push(arr[index])};
		}
		return result;
	}

// Extract tree as nested arrays alphabetically
	function ExtractTreeSorted(tree, levels){
		if (levels == 1) {
			var arr = [];
			for(var obj in tree){
				var groupName = tree[obj]['band'];
				if (arr.indexOf(groupName) == -1) {arr.push(groupName)};
			}
			arr.sort();
			return arr;
		};
		var result =[];
		var keys = Object.keys(tree).sort();
		var len = keys.length;
		for (var i = 0; i < len; i++) {
			var curKey = [keys[i]];
			curKey.push(ExtractTreeSorted(tree[curKey], levels - 1));
			result.push(curKey);
		};

		return result;
	}
}		

solution(test1);