var test1 = [
'  Germany    /   Argentina   : 1   -   0',
'  Argentina    /   Germany   : 1   -   0',
'Brazil / Netherlands: 0-3',
' Netherlands   /   Argentina:  0  - 0    ',
'Brazil / Germany: 1-7',
'Argentina / Belgium: 1-0',
'Netherlands / Costa Rica: 0-0',
'France / Germany: 0-1',
'Brazil / Colombia: 2-1'];

function solution(args){
	var allTeams = [];
	for(var i in args){
		var curmatch = args[i].split(/[\/\:-]/);
		curmatch = {homeTeam: curmatch[0].trim(), awayTeam: curmatch[1].trim(), hscore: parseInt(curmatch[2]), ascore: parseInt(curmatch[3])};
		addTeam(curmatch.homeTeam, curmatch.awayTeam, curmatch.hscore, curmatch.ascore);
		addTeam(curmatch.awayTeam, curmatch.homeTeam, curmatch.ascore, curmatch.hscore);	
	}
	allTeams = allTeams.sort(compareByTeamName);

	// Print result
	var result = '{';
	for(var i in allTeams){
		var oponents = allTeams[i].against.sort();
		for(var j in oponents){
			oponents[j] = '"' + oponents[j] + '"';
		}
		result += '"' + allTeams[i].team + '":{"goalsScored":' + allTeams[i].scored + ',"goalsConceded":' + allTeams[i].conceded + ',"matchesPlayedWith":[' + oponents.join(',') + ']},';
	}

	console.log(result.slice(0, result.length - 1) + "}");
	// debugger;

	function addTeam(team, against, score,conceded){
		var hindex = containObject(allTeams, 'team', team);
		if (hindex != -1) {
			if (allTeams[hindex]['against'].indexOf(against) != -1) {return};
			allTeams[hindex]['against'].push(against);
			allTeams[hindex]['scored'] += score;
			allTeams[hindex]['conceded'] += conceded;
		}else{
			allTeams.push({team: team, against:[against], scored: score, conceded: conceded});
		};	
	}

	function containObject(arr, propName, propValue){
		for(var obj in arr){
			if (arr[obj][propName] == propValue) {return obj};
		}

		return -1;
	}

	function compareByTeamName(a,b) {
		var propname = 'team';
		if (a[propname] < b[propname])
			return -1;
		if (a[propname] > b[propname])
			return 1;
		return 0;
	}
}

solution(test1);