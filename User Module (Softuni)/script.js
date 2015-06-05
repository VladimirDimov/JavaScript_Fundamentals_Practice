var test1 = [
'name^courses',
'{"id":1,"firstname":"Mitko","lastname":"Nakova","town":"Dimitrovgrad","role":"trainer","courses":["PHP","Unity Basics"],"lecturesPerDay":6}',
'{"id":0,"firstname":"Angel","lastname":"Ivanov","town":"Plovdiv","role":"student","grades":["5.89"],"level":2,"certificate":false}',
'{"id":3,"firstname":"Ivan","lastname":"Ivanova","town":"Vidin","role":"trainer","courses":["JS","Java","JS OOP","Database","OOP","C#"],"lecturesPerDay":7}',
'{"id":4,"firstname":"Mitko","lastname":"Petrova","town":"Sofia","role":"trainer","courses":["Database","JS Apps","Java"],"lecturesPerDay":2}',
'{"id":2,"firstname":"Bobi","lastname":"Georgiev","town":"Varna","role":"student","grades":["5.59","3.50","4.54","5.05","3.45"],"level":4,"certificate":false}',
'{"id":0,"firstname":"Angel","lastname":"Ivanovw","town":"Plovdiv","role":"student","grades":["5.89"],"level":2,"certificate":false}'];

var test2 = [
'name^courses',
'{"id":0,"firstname":"Hristiqn","lastname":"Petrov","town":"Sofia","role":"student","grades":["4.06","5.17"],"level":5,"certificate":false}',
'{"id":1,"firstname":"Angel","lastname":"Petrov","town":"Sofia","role":"trainer","courses":["Java","JS OOP"],"lecturesPerDay":6}',
'{"id":2,"firstname":"Gergana","lastname":"Nakov","town":"Sliven","role":"trainer","courses":["Java","JS OOP","SDA"],"lecturesPerDay":5}',
'{"id":3,"firstname":"Angel","lastname":"Nakova","town":"Burgas","role":"trainer","courses":["Database","JS OOP","JS","C#","iOS","HTML/CSS"],"lecturesPerDay":6}',
'{"id":4,"firstname":"Petq","lastname":"Nakova","town":"Petrich","role":"student","grades":["5.14"],"level":4,"certificate":true}',
'{"id":5,"firstname":"Julieta","lastname":"Petrov","town":"Svishtov","role":"trainer","courses":["iOS","OOP","JS","C#","Java"],"lecturesPerDay":6}',
'{"id":6,"firstname":"Ivan","lastname":"Ivanov","town":"Stara Zagora","role":"student","grades":["5.28","2.15","4.25","4.95"],"level":2,"certificate":true}',
'{"id":7,"firstname":"Gergana","lastname":"Daskalov","town":"Sofia","role":"trainer","courses":["PHP","ASP.NET","SDA"],"lecturesPerDay":5}',
'{"id":8,"firstname":"Qvor","lastname":"Dimitrov","town":"Sevlievo","role":"student","grades":["4.30","3.14","4.09","4.08","2.25"],"level":5,"certificate":true}',
'{"id":9,"firstname":"Petq","lastname":"Nakov","town":"Gabrovo","role":"trainer","courses":["JS Apps","Java","JS","iOS","SDA","HTML/CSS"],"lecturesPerDay":9}',
'{"id":10,"firstname":"Bobi","lastname":"Nakov","town":"Gabrovo","role":"student","grades":["3.80"],"level":1,"certificate":false}'
];

function solver(args){
	var people = [];
	var students = [];
	var trainers = [];
	var sortBy = args[0].split('^').map(function(item){return item.trim();});
	var args = args.slice(1);
	
	// Fill all people in array "people"
	args.forEach(function(item,index){
		people.push(JSON.parse(item));
	})

	// get all students and trainers
	people.forEach(function(item, index){
		if (item.role == 'student') {
			students.push(item);
		}else{
			trainers.push(item);
		};
	})

	// sort students
	var criteria = sortBy[0];
	if (criteria == 'name') {
		students = students.sort(sortByName)
	}else{
		students = students.sort(sortByLevel);
	};	

	// sort trainers
	trainers = trainers.sort(sortTrainers);
	
	var studentsPrint = [];
	students.forEach(function (item, index){
		studentsPrint.push({id: item.id, firstname: item.firstname, lastname: item.lastname, averageGrade: avr(item.grades), certificate: item.certificate});
	})

	var trainersPrint = [];
	trainers.forEach(function (item, index){
		trainersPrint.push({id: item.id, firstname: item.firstname, lastname: item.lastname, courses: item.courses, lecturesPerDay: item.lecturesPerDay});
	});
 	
	console.log('{"students":' + JSON.stringify(studentsPrint) + ',"trainers":' + JSON.stringify(trainersPrint) + '}');

	debugger;

	function avr(arr){
		var sum = 0;
		arr.forEach(function (item, index){
			sum += parseFloat(item);
		})

		return (sum/arr.length).toFixed(2);
	}

	function sortByName(a, b){
		if(a.firstname != b.firstname){
			if (a.firstname < b.firstname) {return -1};
			return 1;
		}else{
			if (a.lastname < b.lastname) {return -1};
			return 1;
		};		
	}

	function sortByLevel(a, b){
		if (a.level != b.level) {return a.level - b.level};
		return a.id - b.id;
	}

	function sortTrainers(a, b){
		if (a.courses.length != b.courses.length) {return a.courses.length - b.courses.length};
		return a.lecturesPerDay - b.lecturesPerDay;
	}
}

// solver(test2);
solver(['name^courses']);