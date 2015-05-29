var test1 = [
'sentinel .exe 15MB',
'zoomIt .msi 3MB',
'skype .exe 45MB',
'trojanStopper .bat 23MB',
'kindleInstaller .exe 120MB',
'setup .msi 33.4MB',
'winBlock .bat 1MB'
];

function solution(args){
	var files = [],
	groupByExtension = {};

	for(var i in args){
		var curLine = args[i].split(' ').filter(Boolean);
		files.push({name: curLine[0], extension: curLine[1], size: parseFloat(curLine[2])});
	};

	files.sort(sortAscending);
	Group();
	PrintResult();

	//functions
	function sortAscending(a, b){
		var prop = ['extension', 'name'],  // properties in priority order
			isAscending = [true, true],   // direction of sorting (true for ascending)
			propLen = prop.length;

		for (var i = 0; i < propLen; i++) {
			if (a[prop[i]] < b[prop[i]]) {
				return isAscending[i] ? -1 : 1;
			} else if(a[prop[i]] > b[prop[i]]){
				return isAscending[i] ? 1 : -1;
			};
			if (i == propLen - 1) {
				return 0;
			};			
		};		
	}

	function Group(){
		var len = files.length;

		for (var i = 0; i < len; i++) {
			var curFile = files[i];
			if (groupByExtension.hasOwnProperty(curFile.extension)) {
				groupByExtension[curFile.extension].push(curFile);
			}else{
				groupByExtension[curFile.extension] = [curFile];
			};
		};
	}

	function PrintResult(){
		var result = '{';
		var numberOfExtensions = groupByExtension.length;

		for (var prop in groupByExtension) {
			var curGroup = groupByExtension[prop];
			result += '"' + prop + '":{"files":';
			var names = [];
			var memory = 0;
			for (var i = 0; i < curGroup.length; i++) {
				names.push(curGroup[i].name);
				memory += curGroup[i].size;
			};
			result += '["' + names.join('","') + '"],' + '"memory":"' + memory.toFixed(2) + '"},'
		};
		result = result.substring(0, result.length -1);
		result += '}';
		console.log(result);
	}
}

solution(test1);