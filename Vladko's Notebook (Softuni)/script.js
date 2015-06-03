var test1 = [
'purple|age|99',
'red|age|44',
'blue|win|pesho',
'blue|win|mariya',
'purple|loss|Kiko',
'purple|loss|Kiko',
'purple|loss|Kiko',
'purple|loss|Yana',
'purple|loss|Yana',
'purple|loss|Manov',
'purple|loss|Manov',
'red|name|gosho',
'blue|win|Vladko',
'purple|loss|Yana',
'purple|name|VladoKaramfilov',
'blue|age|21',
'blue|loss|Pesho'
];

function solver(args){
	var players = {};
	for(var i in args){
		var curline = args[i].split('|');
		var curplayer;
		switch(curline[1]){
			case 'age':
			curplayer = newPlayer(curline[0], curline[2], '', [], 0, 0);			
			break;
			case 'win':
			curplayer = newPlayer(curline[0], '', '', [curline[2]], 1, 0);
			break;
			case 'loss':
			curplayer = newPlayer(curline[0], '', '', [curline[2]], 0, 1);
			break;
			case 'name':
			curplayer = newPlayer(curline[0], '', curline[2], [], 0, 0);
			break;			
			default:
			conosle.log('Error!!!');
			return;
		}
		updatePlayers(curplayer);
	}

	var result = '{';
	var keys = Object.keys(players).sort();
	for(var key in keys){
		var curplayer = players[keys[key]];
		if (curplayer.name != '' && curplayer.age != '') {
			result += curplayer.toString() + ',';
		};
	}
	result = result.substr(0, result.length -1) + '}';
	console.log(result);

	debugger;

	function newPlayer(color, age, name, opponents, win, loss){
		return {
			color: color, 
			age: age, 
			name: name, 
			opponents: opponents, 
			win: win, 
			loss: loss,
			toString: function (){
				var printStr = '';
				var opp;
				var rank = (this.win + 1)/(this.loss + 1);
				opp = this.opponents.sort();
				
				for(var i in opp){
					this.opponents[i] = '"' + this.opponents[i] + '"'
				};				

				printStr += '"' + this.color + '":{"age":"' + this.age + '","name":"' + this.name + '","opponents":[' + opp.join(',') + '],"rank":"' + rank.toFixed(2) + '"}';
				return printStr;
			}
		};
	}

	function updatePlayers(player){
		var pColor = player['color'];

		if (players[pColor]) {
			if (player.age != '') {players[pColor].age = player.age};
			if (player.name != '') {players[pColor].name = player.name};
			players[pColor].opponents = players[pColor].opponents.concat(player.opponents);
			players[pColor].win += player.win;
			players[pColor].loss += player.loss;
		}else{
			players[pColor] = player;
		};
	}	
}

solver(test1);