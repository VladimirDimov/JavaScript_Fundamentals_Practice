var test1 = [
'Peter Nikolov | PHP  | 5.50 | 8',
'Maria Ivanova | Java | 5.83 | 7',
'Ivan Petrov   | PHP  | 3.00 | 2',
'Ivan Petrov   | C#   | 3.00 | 2',
'Peter Nikolov | C#   | 5.50 | 8',
'Maria Ivanova | C#   | 5.83 | 7',
'Ivan Petrov   | C#   | 4.12 | 5',
'Ivan Petrov   | PHP  | 3.10 | 2',
'Peter Nikolov | Java | 6.00 | 9'
];

function solver(args){
	var subjects = {};

	for(var i in args){
		var curline = args[i].split('|');
		var curname = curline[0].trim();
		var cursubject = curline[1].trim();
		var curgrade = parseFloat(curline[2]);
		var curvisits = parseInt(curline[3]);

		if (subjects[cursubject]) {
			subjects[cursubject]['grades'].push(curgrade);
			subjects[cursubject]['visits'].push(curvisits);
			if (subjects[cursubject]['visitors'].indexOf(curname) == -1) {
				subjects[cursubject]['visitors'].push(curname);
			};			
		}
		else{
			subjects[cursubject] = newSubject(cursubject, [curgrade],[curvisits], [curname]);
		};
	}

	var result = '{';
	var keys = Object.keys(subjects).sort();
	for(var key in keys){
		result += subjects[keys[key]].toString() + ',';
	}
	result = result.substr(0, result.length - 1) + '}';
	console.log(result);
	debugger;

	function newSubject(name, grades, visits, visitors){
		return{
			name:name, 
			grades: grades, 
			visits: visits, 
			visitors: visitors,
			toString: function(){
				var studQuoted = this.visitors.sort();
				for(var j in studQuoted){
					studQuoted[j] = '"' + studQuoted[j] + '"';
				}
				var result = '';
				result += '"' + this.name + '":{"avgGrade":' + round(avg(this.grades)) + ',"avgVisits":' + round(avg(this.visits)) + ',"students":[' + studQuoted.join(',') + ']}';
				return result;
			}
		};
	}

	function avg(arr){
		var sum = 0;
		for(var i in arr){
			sum += arr[i];
		}

		return sum/arr.length;
	}

	function round(num){
		return Math.round(num*100)/100;
	}
}

solver(test1);